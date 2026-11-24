import { WhatsAppLink } from "./whatsapp-link";
import { Mail, Phone } from "lucide-react";
import { businessEmail, businessPhone } from "@/lib/business";

export function BusinessLinks() {
  const phoneLabel = businessPhone.replace(/^\+91(\d{10})$/, "+91 $1");

  return <ul className="business-links">
    <li><a href={`tel:${businessPhone}`}><Phone size={18} aria-hidden="true" /><span>{phoneLabel}</span></a></li>
    <li><a href={`mailto:${businessEmail}`}><Mail size={18} aria-hidden="true" /><span>{businessEmail}</span></a></li>
    <li><WhatsAppLink /></li>
  </ul>;
}
