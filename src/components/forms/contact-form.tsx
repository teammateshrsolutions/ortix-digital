"use client";

import { useActionState, useId, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { submitEnquiry, type EnquiryFields, type EnquiryState } from "@/app/actions/enquiry";
import { services } from "@/data/services";

const fields = [
  { name: "name", label: "Full Name", autoComplete: "name", required: true, maxLength: 100, minLength: 2 },
  { name: "email", label: "Email Address", type: "email", autoComplete: "email", required: true, maxLength: 254 },
  { name: "phone", label: "Phone Number (optional)", type: "tel", autoComplete: "tel", maxLength: 30 },
  { name: "company", label: "Company Name (optional)", autoComplete: "organization", maxLength: 120 },
] as const;
const initialState: EnquiryState = {};

export function ContactForm() {
  const id = useId();
  const [state, action, pending] = useActionState(submitEnquiry, initialState);
  const [values, setValues] = useState<EnquiryFields>({ name: "", email: "", phone: "", company: "", service: "", details: "" });

  function control(name: keyof EnquiryFields) {
    return {
      name, value: values[name],
      onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { value } = event.target;
        setValues((current) => ({ ...current, [name]: value }));
      },
      "aria-invalid": Boolean(state.errors?.[name]),
      "aria-describedby": state.errors?.[name] ? id + name : undefined,
    };
  }

  function error(name: keyof EnquiryFields) {
    return state.errors?.[name] && <span className="form-error" id={id + name}>{state.errors[name]?.[0]}</span>;
  }

  return <form className="contact-form" action={action}>
    {state.success ? <p className="form-wide" role="status">{state.message}</p> : <>
      {fields.map(({ name, label, ...props }) => <label key={name}>{label}<input {...props} {...control(name)} />{error(name)}</label>)}
      <label className="form-wide">Service Required<span className="select-wrap">
        <select {...control("service")} required><option value="">Choose a service</option>{services.map(({ slug, title }) => <option key={slug} value={slug}>{title}</option>)}<option value="not-sure">Help me choose</option></select>
        <ChevronDown size={16} aria-hidden="true" />
      </span>{error("service")}</label>
      <label className="form-wide">Project Details<textarea {...control("details")} required minLength={20} maxLength={3000} rows={4} />{error("details")}</label>
      <div hidden><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <p className="form-wide form-note">We use these details to respond to your enquiry. <Link className="underline" href="/privacy-policy/">Privacy Policy</Link></p>
      <button type="submit" disabled={pending} className="button form-wide">{pending ? "Sending…" : "Request a Consultation"}</button>
      {state.message && <p className="form-wide form-error" role="alert">{state.message}</p>}
    </>}
  </form>;
}
