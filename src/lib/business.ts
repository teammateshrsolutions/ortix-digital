const configuredEmail = process.env.BUSINESS_EMAIL?.trim();
const configuredPhone = process.env.BUSINESS_PHONE?.trim();

export const legalContactEmail = "info@ortixdigital.com";

export const businessEmail = configuredEmail && /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(configuredEmail) ? configuredEmail : legalContactEmail;
export const businessPhone = configuredPhone && /^\+[1-9]\d{7,14}$/.test(configuredPhone) ? configuredPhone : "+917892182255";

export const officeAddress = [
  "#2065, 3rd Stage, 16th B Cross",
  "Mother Dairy Cross, Yelahanka New Town",
  "Bengaluru, Karnataka 560064",
];
