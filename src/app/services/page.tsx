import { permanentRedirect } from "next/navigation";
import { servicesSection } from "@/data/navigation";

export default function ServicesPage() {
  permanentRedirect(servicesSection);
}
