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

export type ProblemType = {
  extortion: string;
  landGrabbing: string;
  injustice: string;
  other: string;
};

export type ValidationMessages = {
  name: string;
  area: string;
  type: string;
  description: string;
};
