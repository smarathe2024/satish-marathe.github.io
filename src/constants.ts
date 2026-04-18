import { Project, Experience, SkillCategory, BlogPost, Certification, Contribution } from './types';

export const PROFILE = {
  name: "Satish R. Marathe",
  role: "Software Architect | Gen AI Specialist",
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
      "Led the transition to event-driven architectures using Kafka, handling millions of events daily.",
      "Built a GenAI POC using GPT-4o and pgvector, achieving 28% improvement in retrieval precision.",
      "Managed a cross-functional team of 55+ engineers, driving global architectural governance."
    ],
    skills: ["Azure AKS", "Kafka", "Java", "GPT-4o", "Kubernetes"]
  },
  {
    id: "exp3",
    company: "Bigates Software",
    role: "Sr. Software Engineer",
    period: "Aug 2002 – Sep 2004",
    description: [
      "Engineered core components for enterprise contact center platforms and Siebel CRM integrations.",
      "Supported production stability, root cause analysis, and high-quality release cycles."
    ],
    skills: ["C++", "CRM Integration", "System Reliability"]
  },
  {
    id: "exp4",
    company: "Internet Trends (India)",
    role: "Software Engineer",
    period: "Oct 2000 – June 2002",
    description: [
      "Developed a personal firewall for Windows at NDIS driver level and system services architecture.",
      "Implemented packet filtering, IDS rule engines, and application-layer filtering for enhanced security."
    ],
    skills: ["Network Security", "NDIS", "C++"]
  },
  {
    id: "exp5",
    company: "SmartStorage (India)",
    role: "Software Engineer",
    period: "Feb 2000 – Sep 2000",
    description: [
      "Implemented an enterprise-grade email archiving solution supporting compliance and long-term retention.",
      "Developed Outlook and Lotus Notes plugins for seamless email capture and archival."
    ],
    skills: ["Email Archiving", "Outlook Plugins", "C++"]
  },
  {
    id: "exp6",
    company: "Print Electronics Equipment",
    role: "Software Engineer",
    period: "Jul 1998 – Feb 2000",
    description: [
      "Designed and developed email ingestion and routing software for Microsoft Exchange–based environments.",
      "Developed biometric and access control systems integrating multiple hardware interfaces."
    ],
    skills: ["Systems Integration", "Biometrics", "C++"]
  },
  {
    id: "exp7",
    company: "Alpic Finance Ltd.",
    role: "Software Programmer",
    period: "Apr 1997 – Jan 1998",
    description: [
      "Developed accounting, fixed deposit, and MIS systems for financial operations."
    ],
    skills: ["Financial Systems", "Database Design"]
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
    link: "/blog/microservices-fallacy",
    content: `
# The Fallacy of Microservices-by-Default

In today's architectural landscape, the rush towards microservices is often seen as a prerequisite for success. However, for many organizations, this "distributed monolith" approach introduces more complexity than it solves.

## The Cost of Distribution

When you split a system into microservices, you aren't just splitting code; you're introducing network latency, eventual consistency, and the nightmare of distributed transactions.

### Why Modular Monoliths Win
1. **Simplified Deployment**: One pipeline, one artifact.
2. **Type Safety**: Cross-domain changes are caught at compile time.
3. **Operational Simplicity**: Easier monitoring and debugging.

## When to Actually Switch
Transition when your team size exceeds the cognitive load of a single codebase, or when specific services have radically different scaling needs. Don't build for tomorrow's scale with today's limited resources.
    `
  },
  {
    id: "b2",
    title: "Lessons Learned Building a DB in Rust",
    excerpt: "Diving deep into memory management, async trait challenges, and the power of the type system.",
    date: "Aug 24, 2025",
    readTime: "12 min read",
    link: "/blog/rust-db-lessons",
    content: `
# Lessons Learned Building a DB in Rust

Building a database engine from scratch is the ultimate test of an engineer's understanding of systems programming. Doing it in Rust adds a layer of safety and complexity that is rewarding yet challenging.

## Ownership and Borrowing
The borrow checker is your best friend when managing buffer pools and write-ahead logs. It prevents the data races that plague C++ implementations.

## Async Challenges
Implementing an async executor that doesn't sacrifice performance is tricky. We leaned heavily on \`tokio\` but found that custom thread scheduling was necessary for high-throughput disk I/O.

> "Rust doesn't make hard things easy; it makes them possible to do safely."
    `
  },
  {
    id: "b3",
    title: "Observability Beyond Logging",
    excerpt: "How to implement structured tracing and meaningful metrics that actually help you solve production incidents.",
    date: "Jun 05, 2025",
    readTime: "6 min read",
    link: "/blog/observability-beyond-logging",
    content: `
# Observability Beyond Logging

Logs tell you *what* happened, but metrics and traces tell you *why*.

## Moving to Structured Tracing
We moved from plain text logs to OpenTelemetry-based tracing. This allowed us to visualize the entire lifecycle of a request across 50+ microservices.

### Key Metrics to Watch
- **Latency**: p99 is the only one that matters.
- **Error Rate**: Use error budgets to drive stability.
- **Saturation**: Know your breaking points before they hit.
    `
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
