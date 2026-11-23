import type { services } from "./services";
import { searchGuides } from "./guides/search";
import { socialGuides } from "./guides/social";
import { designGuides } from "./guides/design";

export type ServiceSlug = (typeof services)[number]["slug"];
export type ServiceGuide = {
  description: string;
  sections: readonly {
    title: string;
    copy: string;
    topics?: readonly [heading: string, copy: string][];
  }[];
  faq: readonly [question: string, answer: string][];
  related: readonly ServiceSlug[];
};

export const serviceGuides: Record<ServiceSlug, ServiceGuide> = {
  ...searchGuides,
  ...socialGuides,
  ...designGuides,
};
