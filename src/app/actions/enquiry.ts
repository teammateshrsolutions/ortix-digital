"use server";

import { businessWhatsAppUrl } from "@/lib/business";
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
export type EnquiryState = { message?: string; whatsAppUrl?: string; errors?: Partial<Record<keyof EnquiryFields, string[]>> };

export async function submitEnquiry(_state: EnquiryState, formData: FormData): Promise<EnquiryState> {
  if (!(formData instanceof FormData)) return { message: "Submit your enquiry using the contact form." };
  const input = Object.fromEntries(Object.keys(schema.shape).map((key) => [key, formData.get(key)]));
  const result = schema.safeParse(input);
  if (!result.success) return { message: "Check the highlighted fields and try again.", errors: z.flattenError(result.error).fieldErrors };
  if (formData.get("website")) return { message: "Your enquiry could not be submitted. Please try again." };

  const intent = z.enum(["consultation", "audit", "quote"]).safeParse(formData.get("intent") ?? "consultation");
  if (!intent.success) return { message: "Choose a valid enquiry type." };
  const website = intent.data === "audit" ? formData.get("auditUrl") : null;
  const auditUrl = z.string().trim().max(300).refine(value => !value || URL.canParse(value) && ["http:", "https:"].includes(new URL(value).protocol)).safeParse(website ?? "");
  if (!auditUrl.success) return { message: "Enter a valid website URL or leave it blank." };

  const subject = { consultation: "Consultation", audit: "Free marketing audit", quote: "Custom quote" }[intent.data];
  const { name, email, phone, company, service, details } = result.data;
  const serviceTitle = services.find(item => item.slug === service)?.title ?? "Help me choose";
  const message = [
    subject + " enquiry for Ortix Digital",
    "",
    "Name: " + name,
    "Email: " + email,
    ...(phone ? ["Phone: " + phone] : []),
    ...(company ? ["Company: " + company] : []),
    "Service: " + serviceTitle,
    ...(auditUrl.data ? ["Website: " + auditUrl.data] : []),
    "",
    "Project details: " + details,
  ].join("\n");
  const url = new URL(businessWhatsAppUrl);
  url.searchParams.set("text", message);
  return { whatsAppUrl: url.href };
}
