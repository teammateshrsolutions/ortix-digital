export const growthPackages = [
  {
    name: "Starter Growth",
    monthlyPrice: "₹15,000–₹25,000",
    description: "For small businesses.",
    recommended: false,
    includes: ["Basic SEO or social media management", "Monthly content plan", "Performance reporting", "Monthly strategy review"],
  },
  {
    name: "Business Growth",
    monthlyPrice: "₹30,000–₹55,000",
    description: "For growing businesses.",
    recommended: true,
    includes: ["SEO and content strategy", "Google or Meta Ads management", "Social media creatives", "Conversion tracking", "Monthly reporting"],
  },
  {
    name: "Premium Growth",
    monthlyPrice: "₹60,000–₹1,20,000",
    description: "For established businesses.",
    recommended: false,
    includes: ["Integrated digital marketing", "SEO and paid advertising", "Social media management", "Creative and branding support", "Advanced reporting and optimization"],
  },
] as const;
