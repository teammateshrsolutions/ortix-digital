export const servicesSection = "/#services";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Services", href: servicesSection },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Blog", href: "/blog/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const serviceRegions = ["Bengaluru", "Karnataka"] as const;
export const serviceArea = [...serviceRegions, "India"].join(", ");
