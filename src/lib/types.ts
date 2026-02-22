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

export type Capability = {
  title: string;
  desc: string;
  hint: string;
};

export type ProjectMetrics = {
  perf: number;
  seo: number;
  security: string;
};

export type ProjectScores = {
  perf?: number;
  seo?: number;
  security?: string;
};

export type ProjectResults = {
  highlights: string[];
  kpis?: Record<string, string>;
  scores?: ProjectScores;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  category?: string;
  aliases?: string[];
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  details?: string;
  results?: ProjectResults;
};

export type Engineering = {
  philosophy: { title: string; text: string }[];
  logic: { title: string; text: string; icon: PillarIconKey }[];
  skills: Record<"frontend" | "backend" | "devops" | "mobile", string[]>;
};

export type PortfolioData = {
  profile: Profile;
  capabilities: Capability[];
  pillars: Pillar[];
  projects: Project[];
  engineering: Engineering;
};
