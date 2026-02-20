export type Socials = {
  github: string;
  linkedin: string;
  email: string;
};

export type Profile = {
  name: string;
  nickname: string;
  title: string;
  summary: string;
  socials: Socials;
};

export type PillarIconKey =
  | "layers"
  | "cpu"
  | "shield"
  | "layout"
  | "database"
  | "zap";

export type Pillar = {
  title: string;
  desc: string;
  icon: PillarIconKey;
};

export type ProjectMetrics = {
  perf: number;
  seo: number;
  security: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  problem: string;
  solution: string;
  results: string[];
  metrics: ProjectMetrics;
};

export type Engineering = {
  philosophy: { title: string; text: string }[];
  logic: { title: string; text: string; icon: PillarIconKey }[];
  skills: Record<"frontend" | "backend" | "devops" | "mobile", string[]>;
};

export type PortfolioData = {
  profile: Profile;
  pillars: Pillar[];
  projects: Project[];
  engineering: Engineering;
};
