"use server";

import { randomUUID } from "node:crypto";
import { mkdir, rename, unlink, writeFile } from "node:fs/promises";
import { isAbsolute, join, relative, sep } from "node:path";
import { z } from "zod";
import { services } from "@/data/services";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(100),
  email: z.string().trim().max(254).email("Enter a valid email address."),
  phone: z.string().trim().max(30).refine((phone) => !phone || (/^[+()\d .-]+$/.test(phone) && /^\d{7,15}$/.test(phone.replace(/\D/g, ""))), "Enter a valid phone number."),
  company: z.string().trim().max(120),
  service: z.string().refine((value) => value === "not-sure" || services.some(({ slug }) => slug === value), "Choose a service."),
  details: z.string().trim().min(20, "Enter at least 20 characters.").max(3000),
});

export type EnquiryFields = z.infer<typeof schema>;
export type EnquiryState = { message?: string; success?: boolean; errors?: Partial<Record<keyof EnquiryFields, string[]>> };

export async function submitEnquiry(_state: EnquiryState, formData: FormData): Promise<EnquiryState> {
  if (!(formData instanceof FormData)) return { message: "Submit your enquiry using the contact form." };
  const input = Object.fromEntries(Object.keys(schema.shape).map((key) => [key, formData.get(key)]));
  const result = schema.safeParse(input);
  if (!result.success) return { message: "Check the highlighted fields and try again.", errors: z.flattenError(result.error).fieldErrors };
  if (formData.get("website")) return { message: "Your enquiry could not be submitted. Please try again." };

  const directory = process.env.ENQUIRY_STORAGE_DIR || (process.env.NODE_ENV === "development" ? join(process.cwd(), ".private", "enquiries") : undefined);
  if (!directory || !isAbsolute(directory)) {
    return { message: "The enquiry form is temporarily unavailable. Please try again later." };
  }

  const relativeToPublic = relative(join(process.cwd(), "public"), directory);
  const outsidePublic = isAbsolute(relativeToPublic) || relativeToPublic === ".." || relativeToPublic.startsWith(".." + sep);
  if (!outsidePublic) {
    return { message: "The enquiry form is temporarily unavailable. Please try again later." };
  }

  const id = randomUUID();
  const temporary = join(directory, "." + id + ".tmp");
  try {
    await mkdir(directory, { recursive: true, mode: 0o700 });
    await writeFile(temporary, JSON.stringify({ id, receivedAt: new Date().toISOString(), ...result.data }, null, 2), { encoding: "utf8", mode: 0o600, flag: "wx" });
    await rename(temporary, join(directory, id + ".json"));
    return { success: true, message: "Thank you. Your enquiry was received." };
  } catch {
    await unlink(temporary).catch(() => undefined);
    console.error("ORTIX enquiry storage failed.");
    return { message: "Your enquiry could not be saved. Please try again." };
  }
}
