import type { PortfolioData } from "./types";

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: "Elisjon",
    nickname: "Soni",
    title: "Senior Systems Engineer & Full-Stack Architect",
    summary:
      "Bridging the gap between high-performance infrastructure and intuitive user experiences. Specialized in Go, Kubernetes, and scalable React architectures.",
    socials: {
      github: "https://github.com/soni",
      linkedin: "https://linkedin.com/in/soni",
      email: "hello@soni.dev",
    },
  },
  pillars: [
    {
      title: "Architectural Integrity",
      desc: "Building systems with strict boundaries and clear contracts.",
      icon: "layers",
    },
    {
      title: "DevOps Excellence",
      desc: "Automated provisioning and zero-downtime deployment cycles.",
      icon: "cpu",
    },
    {
      title: "Quality First",
      desc: "Accessibility, security, and performance are not features; they are foundations.",
      icon: "shield",
    },
  ],
  projects: [
    {
      id: "labrago",
      title: "Labrago",
      category: "Infrastructure / Go",
      description:
        "A high-performance CMS built in Go, designed for containerized environments.",
      stack: ["Go", "Kubernetes", "Helm", "Terraform", "PostgreSQL"],
      problem:
        "Traditional CMS platforms lacked the scalability and speed required for microservice-heavy environments.",
      solution:
        "Engineered a stateless Go-based core with Redis caching and K8s native scaling.",
      results: [
        "40% reduction in server overhead",
        "Sub-50ms response times",
        "Automated scaling via HPA",
      ],
      metrics: { perf: 99, seo: 100, security: "A+" },
    },
    {
      id: "terraform-auto",
      title: "Terraform Auto-Deploy",
      category: "DevOps",
      description:
        "Automated provisioning platform for DNS, HTTPS, and multi-cloud instances.",
      stack: ["Terraform", "AWS", "Cloudflare", "Webhooks"],
      problem:
        "Manual infrastructure provisioning was prone to human error and slow delivery times.",
      solution:
        "Developed a webhook-driven engine that interprets architecture definitions into live environments.",
      results: [
        "Provisioning time cut from hours to 4 minutes",
        "100% Infrastructure-as-Code coverage",
      ],
      metrics: { perf: 92, seo: 80, security: "A" },
    },
    {
      id: "gqlteam",
      title: "Hugo GQLTeam Site",
      category: "Performance Web",
      description:
        "Enterprise site focused on maximum SEO and extreme performance metrics.",
      stack: ["Hugo", "GraphQL", "JSON-LD", "Tailwind"],
      problem:
        "Need for a blazing-fast marketing site with complex data relationships.",
      solution:
        "Static generation with hydrated GraphQL fragments for dynamic content updates.",
      results: [
        "Perfect 100/100 Lighthouse scores",
        "First Contentful Paint < 0.3s",
      ],
      metrics: { perf: 100, seo: 100, security: "A+" },
    },
    {
      id: "portable-vault",
      title: "Electron Portable Vault",
      category: "Security",
      description:
        "A local-first, encrypted credential manager with zero-knowledge architecture.",
      stack: ["Electron", "AES-256", "SQLite", "React"],
      problem:
        "Cloud-based password managers present a centralized risk vector.",
      solution:
        "Desktop application using hardware-accelerated encryption and local-only storage.",
      results: ["FIPS-compliant encryption", "Offline-first reliability"],
      metrics: { perf: 88, seo: 50, security: "A++" },
    },
  ],
  engineering: {
    philosophy: [
      {
        title: "Boundaries",
        text: "Strict decoupling between UI, API, and Data layers.",
      },
      {
        title: "Contracts",
        text: "API-first development with rigorous schema validation.",
      },
      {
        title: "Environments",
        text: "Parity between dev, staging, and production via Docker.",
      },
    ],
    skills: {
      frontend: ["React", "TypeScript", "Tailwind", "Framer Motion", "Next.js"],
      backend: ["Go", "Node.js", "Python", "gRPC", "PostgreSQL"],
      devops: [
        "Kubernetes",
        "Docker",
        "Terraform",
        "GitHub Actions",
        "Prometheus",
      ],
      mobile: ["Flutter", "React Native"],
    },
  },
};
