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
  capabilities: [
    {
      title: "Cloud Architecture",
      hint: "srv --cloud",
      desc: "Designing multi-region, resilient infrastructure on AWS/GCP.",
    },
    {
      title: "Custom Backend Systems",
      hint: "srv --api",
      desc: "High-concurrency systems built primarily in Go and Node.js.",
    },
    {
      title: "DevOps & CI/CD",
      hint: "srv --devops",
      desc: "Automating the path from local commit to production cluster.",
    },
    {
      title: "Mobile Development",
      hint: "srv --mobile",
      desc: "Crafting fluid, native-performance apps with Flutter.",
    },
  ],
  projects: [
    {
      id: "labrago",
      title: "Labrago CMS",
      category: "Custom Headless CMS",
      summary:
        "A high-performance Go-based headless CMS inspired by Strapi, designed for containerized environments and optimized for low memory usage.",
      stack: [
        "Go (Fiber)",
        "React",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Kubernetes",
        "Helm",
        "Terraform",
        "DigitalOcean",
      ],
      problem:
        "Traditional Node.js CMS solutions and other platforms were too heavy for multi-tenant Kubernetes namespaces, leading to higher memory usage and operational overhead.",
      solution:
        "Rebuilt the core engine in Go with a reflection-based schema builder, stateless scaling patterns, optional Redis caching, and Kubernetes-native deployment primitives.",
      architecture: "DigitalOcean + Kubernetes + Helm + Terraform",
      features: [
        "Automated namespace provisioning per instance",
        "Custom DNS records via Terraform",
        "Kubernetes-native scaling",
      ],
      results: {
        highlights: [
          "4x lower memory usage",
          "40% reduction in server overhead",
          "Automated scaling via HPA",
        ],
        kpis: {
          latency_p99: "<20ms",
          latency_general: "Sub-50ms",
        },
        scores: {
          perf: 99,
          seo: 100,
          security: "A+",
        },
      },
      details:
        "Automated namespace provisioning per instance with custom DNS records via Terraform.",
    },
    {
      id: "terraform-auto",
      title: "Terraform Deployer",
      category: "DevOps / Infrastructure Automation",
      summary:
        "Self-service UI and automation engine for provisioning infrastructure, DNS, and HTTPS with Terraform-driven workflows.",
      stack: [
        "Terraform",
        "Go",
        "React",
        "DigitalOcean API",
        "AWS",
        "Cloudflare",
        "Webhooks",
      ],
      problem:
        "Manual provisioning of environments was slow, error-prone, and blocked delivery.",
      solution:
        "Built a UI-to-Terraform bridge with webhook-driven orchestration, state/locking discipline, and automated output handling (e.g., kubeconfigs and credentials).",
      features: [
        "Auto DNS",
        "HTTPS via Let's Encrypt",
        "SSH Key Gen",
        "Discord Webhooks",
        "Infrastructure-as-Code coverage",
      ],
      results: {
        highlights: [
          "Provisioning time cut from hours to 4 minutes",
          "100% Infrastructure-as-Code coverage",
        ],
        kpis: {},
        scores: {
          perf: 92,
          seo: 80,
          security: "A",
        },
      },
    },
    {
      id: "gqlteam-hugo",
      aliases: ["gqlteam"],
      title: "GQLTeam Platform",
      category: "Performance Web / Static Portal",
      summary:
        "Ultra-fast, SEO-optimized engineering portal for consulting and technical blogging with strong security posture.",
      stack: ["Hugo", "GraphQL", "Tailwind", "JavaScript", "JSON-LD"],
      problem:
        "Need for a blazing-fast marketing site with complex data relationships and excellent SEO.",
      solution:
        "Static generation with selectively hydrated GraphQL fragments plus structured data (JSON-LD) and custom parsing for content pipelines.",
      features: [
        "JSON-LD Schema",
        "CSP Hardening",
        "0-JS (mostly) Performance",
        "Custom Markdown Parser",
      ],
      results: {
        highlights: [
          "Perfect 100/100 Lighthouse scores",
          "First Contentful Paint < 0.3s",
        ],
        kpis: {
          fcp: "<0.3s",
        },
        scores: {
          perf: 100,
          seo: 100,
          security: "A+",
        },
      },
    },
    {
      id: "flutter-news",
      title: "News Ecosystem",
      category: "Cross-Platform Mobile",
      summary:
        "Real-time news app with admin posting and offline support, backed by a Go service and caching layer.",
      stack: ["Flutter", "Go Backend", "Redis"],
      features: [
        "Dark Mode",
        "State Persistence",
        "JWT Auth",
        "Background Sync",
      ],
      results: {
        highlights: [],
        kpis: {},
        scores: {},
      },
    },
    {
      id: "portable-vault",
      title: "Electron Portable Vault",
      category: "Desktop App / Security",
      summary:
        "A portable, local-first vault for Markdown and sensitive data with encrypted storage and offline-first reliability.",
      stack: ["Electron", "React", "Markdown-it", "AES-256", "SQLite"],
      problem:
        "Cloud-based managers create centralized risk; users needed local-only storage with strong encryption.",
      solution:
        "Desktop app using strong local encryption, local-only persistence, and portable folder-based workflows.",
      features: [
        "Local Folder Sync",
        "Preview Mode",
        "Sidebar Navigation",
        "Asset Management",
        "Encrypted Storage",
      ],
      results: {
        highlights: ["Offline-first reliability", "Encrypted local storage"],
        kpis: {},
        scores: {
          perf: 88,
          seo: 50,
          security: "A++",
        },
      },
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
    logic: [
      {
        title: "Logic First",
        text: "Business logic is decoupled from frameworks for longevity.",
        icon: "cpu",
      },
      {
        title: "Atomicity",
        text: "Small, tested modules that do one thing exceptionally well.",
        icon: "layout",
      },
      {
        title: "State Safety",
        text: "Strict schemas and validated boundaries prevent data rot.",
        icon: "database",
      },
      {
        title: "Zero Waste",
        text: "No unnecessary abstractions or 'just-in-case' code.",
        icon: "zap",
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
