import { MessageCircle } from "lucide-react";
import { businessWhatsAppUrl } from "@/lib/business";
import "./whatsapp-link.css";

export function WhatsAppLink({ className = "", floating = false }: { className?: string; floating?: boolean }) {
  return <a aria-label={floating ? "Chat on WhatsApp" : undefined} className={className} href={businessWhatsAppUrl}>
    <MessageCircle size={22} aria-hidden="true" />{!floating && "Chat on WhatsApp"}
  </a>;
}
