export type Language = "bn" | "en";

export interface Milestone {
  year: string;
  event: string;
}

export interface Achievement {
  title: string;
  description: string;
  year?: string;
}

export interface ContributionItem {
  title: string;
  description: string;
}

// Deprecated: Migrated to next-intl messages
export const SITE_DATA = {
  social: {
    facebook: "https://www.facebook.com/MirzaAlamgir/",
    twitter: "https://x.com/BNPSGOffice",
  },
};
