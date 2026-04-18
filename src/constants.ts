import { Project, Experience, SkillCategory, BlogPost, Certification, Contribution } from './types';

export const PROFILE = {
  name: "Satish R. Marathe",
  role: "Principal Software Architect | Gen AI Specialist",
  username: "smarathe2024",
  bio: "Software Architect with 15+ years of leadership in enterprise communications, cloud-native SaaS, and AI systems. U.S. Patent holder and specialist in Gen AI orchestration and resilient multi-cloud platforms.",
  location: "Pune, India",
  email: "smarathe2026@gmail.com",
  website: "https://github.com/smarathe2024",
  twitter: "@satish_dev",
  github: "github.com/smarathe2024",
  avatar: "https://picsum.photos/seed/satish/400/400",
  readme: `# Software Architect & AI Systems Pioneer

Architectural leader with over 15 years of experience translating complex technical requirements into high-scale, resilient business outcomes. I specialize in the intersection of Generative AI, Cloud-Native infrastructure, and Enterprise Communications.

### Recent Architectural Milestones
- 🤖 **Agentic Workflows**: Designing multi-agent AI systems using LangGraph and MCP for autonomous decision-making.
- ☁️ **SaaS Scalability**: Delivered 3× performance improvement for a global contact center platform on Azure.
- 🛡️ **Zero-Trust Leadership**: Implementing PCI-DSS/GDPR compliant architectures with identity-aware security layers.
- 📜 **Patent Holder**: U.S. Patent 20230136777 for innovative communication system design.

### Core Philosophy
1. **Business-Aligned Architecture**: Technology must serve measurable business outcomes (e.g., 40% cost reduction).
2. **AI-First Engineering**: Leveraging Claude Code, Cursor, and Copilot to elevate code quality and velocity.
3. **Observability as Foundation**: MTTR reduction through deep telemetry (Prometheus, Grafana, Datadog).`
};

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "AXP Infinity (Azure SaaS)",
    description: "Architected an Azure-based multi-tenant SaaS platform using AKS, achieving 3× latency improvement and 40% cost reduction through event-driven microservices.",
    tags: ["Azure AKS", "Kafka", "Java", "Go", "Node.js"],
    stars: 850,
    language: "Java",
    languageColor: "#b07219",
    updatedAt: "2025",
    role: "Architect"
  },
  {
    id: "p2",
    title: "GenAI Email Intelligence",
    description: "Built a LangChain-orchestrated RAG pipeline with GPT-4o and pgvector for automated, contextually aware email responses in enterprise contact centers.",
    tags: ["LLMs", "LangChain", "Vector DB", "RAG"],
    stars: 540,
    language: "Python",
    languageColor: "#3572A5",
    updatedAt: "2024",
    role: "Lead Developer"
  },
  {
    id: "p3",
    title: "Next-Gen Chat Interface",
    description: "Designed a real-time web communication interface using RESTful APIs and CometD, delivering mission-critical chat capabilities to global customers.",
    tags: ["Real-time", "CometD", "Scalability"],
    stars: 320,
    language: "JavaScript",
    languageColor: "#f1e05a",
    updatedAt: "2023",
    role: "Architecture Owner"
  },
  {
    id: "p4",
    title: "Agentic MCP Framework",
    description: "Developed an open-source multi-agent AI framework using LangGraph and Model Context Protocol for autonomous enterprise workflows.",
    tags: ["Agentic AI", "MCP", "LangGraph"],
    stars: 1100,
    language: "Python",
    languageColor: "#3572A5",
    updatedAt: "Current",
    role: "Researcher"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    company: "Self-Directed / Research",
    role: "Architect & AI Researcher",
    period: "Nov 2025 – Present",
    description: [
      "Completed 200+ hours of advanced coursework in LangChain, LangGraph, and Agentic AI workflows.",
      "Designed and built an open-source multi-agent AI system utilizing Model Context Protocol (MCP).",
      "Specializing in RAG pipelines and LLM orchestration layers with OpenAI and Hugging Face."
    ],
    skills: ["LangGraph", "MCP", "Python", "RAG"]
  },
  {
    id: "exp2",
    company: "Avaya India Pvt. Ltd.",
    role: "Software Architect",
    period: "Oct 2004 – Oct 2025",
    description: [
      "Architected AXP Infinity, an Azure-based multi-tenant SaaS contact center platform serving global enterprises.",
      "Delivered 3× latency improvement and 40% infrastructure cost reduction through service decomposition and re-architecting.",
      "Led the transition to event-driven architectures using Kafka, handling millions of events daily with sub-millisecond response times.",
      "Built a GenAI POC for email intelligence using GPT-4o and pgvector, achieving 28% improvement in retrieval precision.",
      "Managed a cross-functional team of 55+ engineers, mentoring staff and driving global architectural governance."
    ],
    skills: ["Azure AKS", "Kafka", "Java", "GPT-4o", "Kubernetes"]
  },
  {
    id: "exp3",
    company: "Bigates Software",
    role: "Sr. Software Engineer",
    period: "2002 – 2004",
    description: [
      "Engineered core components for enterprise contact center platforms and Siebel CRM integrations.",
      "Focused on production stability, root cause analysis, and high-quality release cycles for On-Prem systems."
    ],
    skills: ["C++", "CRM Integration", "System Reliability"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "AI & GenAI",
    skills: ["GPT-4o", "LangChain", "LangGraph", "RAG Pipelines", "MCP", "Prompt Engineering"]
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Azure AKS", "Cosmos DB", "AWS EKS", "Terraform", "Kubernetes", "Redis"]
  },
  {
    title: "Engineering",
    skills: ["Java (Spring Boot)", "Go", "Node.js", "Python", "C++", "Kafka", "PostgreSQL"]
  },
  {
    title: "Architecture & DevOps",
    skills: ["Microservices", "Zero Trust", "Event-Driven", "CI/CD", "Security Compliance", "ADRs"]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "The Fallacy of Microservices-by-Default",
    excerpt: "Why starting with a modular monolith is often the better architectural decision for early-stage products.",
    date: "Oct 12, 2025",
    readTime: "8 min read",
    link: "#"
  },
  {
    id: "b2",
    title: "Lessons Learned Building a DB in Rust",
    excerpt: "Diving deep into memory management, async trait challenges, and the power of the type system.",
    date: "Aug 24, 2025",
    readTime: "12 min read",
    link: "#"
  },
  {
    id: "b3",
    title: "Observability Beyond Logging",
    excerpt: "How to implement structured tracing and meaningful metrics that actually help you solve production incidents.",
    date: "Jun 05, 2025",
    readTime: "6 min read",
    link: "#"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert1",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Verified"
  },
  {
    id: "cert2",
    title: "LangChain and LangGraph Certification",
    issuer: "LangChain Academy",
    date: "Verified"
  },
  {
    id: "cert3",
    title: "Model Context Protocol (MCP) Certification",
    issuer: "Anthropic / Hugging Face",
    date: "Verified"
  },
  {
    id: "cert4",
    title: "AI Engineer Core & Agentic Track",
    issuer: "Udemy / Ed Donner",
    date: "Verified"
  },
  {
    id: "cert5",
    title: "Microsoft Azure AZ-900",
    issuer: "Microsoft",
    date: "Verified"
  },
  {
    id: "cert6",
    title: "U.S. Patent 20230136777",
    issuer: "Communication System Design",
    date: "Awarded"
  }
];

export const CONTRIBUTIONS: Contribution[] = [
  {
    id: "ct1",
    repo: "rust-lang/rust",
    description: "Improved error messages for borrow checker in complex async contexts.",
    type: "PR",
    date: "Sep 2025"
  },
  {
    id: "ct2",
    repo: "envoyproxy/envoy",
    description: "Refactored the header parsing logic for better memory efficiency.",
    type: "PR",
    date: "May 2025"
  },
  {
    id: "ct3",
    repo: "kubernetes/kubernetes",
    description: "Bug fix in the scheduler's node affinity handling.",
    type: "Maintenance",
    date: "Jan 2025"
  }
];
