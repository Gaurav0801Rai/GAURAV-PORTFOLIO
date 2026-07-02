// ============================================================
// portfolioData.js — Centralized configuration for Gaurav Kumar's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

import fs1 from '../assets/projects/finsage-1.png';
import fs2 from '../assets/projects/finsage-2.png';
import fs3 from '../assets/projects/finsage-3.png';
import fs4 from '../assets/projects/finsage-4.png';
import fs5 from '../assets/projects/finsage-5.png';
import fs6 from '../assets/projects/finsage-6.png';
import fs7 from '../assets/projects/finsage-7.png';
import gmf1 from '../assets/projects/groww-mf-1.png';
import gmf2 from '../assets/projects/groww-mf-2.png';
import gra1 from '../assets/projects/groww-analyzer-1.png';
import gra2 from '../assets/projects/groww-analyzer-2.png';
import pep1 from '../assets/projects/peppo-1.png';
import cv1 from '../assets/projects/chatgpt-voice-1.png';
import ss1 from '../assets/projects/smart-society-1.png';


export const personalInfo = {
  name: "Gaurav Kumar",
  firstName: "Gaurav",
  brandName: "Gaurav Kumar",
  title: "Product Manager & AI Builder",
  location: "Prayagraj, Uttar Pradesh, India",
  phone: "+91 99369-31704",
  emails: {
    primary: "digitally.gaurav08@gmail.com",
  },
  summary:
    "Aspiring Product Manager pursuing structured PM training through NextLeap, with hands-on experience in user research, product discovery, MVP planning, wireframing, prototyping, and AI-assisted product workflows. Passionate about solving user problems through structured product thinking, experimentation, and intuitive digital experiences.",
  resumeUrl: "/Gaurav_Kumar_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Gaurav0801Rai",
  linkedin: "https://www.linkedin.com/in/gaurav-kumar-3287391a7/",
  nextleap: "https://nextleap.app/portfolio/gaurav-kumar-jgco",
};

export const heroContent = {
  greeting: "Hi, I'm Gaurav Kumar",
  titleHighlight: "Product Manager & AI Builder",
  subtitle:
    "I craft user-centric product strategies and build AI-powered solutions to solve real-world problems.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:digitally.gaurav08@gmail.com?subject=Inquiry – Portfolio&body=Hello Gaurav,%0D%0A%0D%0AI came across your portfolio and would like to connect with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download CV", href: "/Gaurav_Kumar_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Gaurav Kumar</span>, an aspiring Product Manager and AI builder based in Prayagraj, India, dedicated to translating user insights into impactful digital experiences and building robust agentic systems.`,
  techStack: ["Product Strategy", "User Research", "AI Prototyping"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "How I transform problems into finished products",
  description:
    "I follow a structured, user-centered, and data-driven approach to discover user pain points, design MVPs, and manage product lifecycles.",
  cards: [
    {
      number: "01",
      title: "Discover",
      text: "Conducting user research, parsing reviews, segmenting cohorts, and defining product scope to establish a clear problem definition.",
    },
    {
      number: "02",
      title: "Define",
      text: "Drafting comprehensive PRDs, wireframing interfaces in Figma, and setting up core MVP scopes and North Star metrics.",
    },
    {
      number: "03",
      title: "Build",
      text: "Developing full-stack prototypes, integrating AI/LLM models, and creating agentic workflows to validate hypotheses quickly.",
    },
    {
      number: "04",
      title: "Iterate",
      text: "Running private betas, gathering feedback, monitoring analytics, and refining product details to ship value continuously.",
    },
  ],
  endText: "Ready to ship!",
};

// PM & AI skillset
export const technicalSkills = {
  categories: [
    {
      title: "Product Management",
      skills: [
        { name: "User Research & Discovery", level: 92 },
        { name: "MVP Planning & Scoping", level: 90 },
        { name: "Wireframing & Prototyping", level: 88 },
        { name: "Product Strategy & Metrics", level: 85 },
        { name: "PRD Writing", level: 90 }
      ]
    },
    {
      title: "AI & Full Stack Building",
      skills: [
        { name: "Full-Stack Prototyping (Next.js)", level: 85 },
        { name: "Firebase & Databases", level: 80 },
        { name: "LLM & API Integrations", level: 88 },
        { name: "Agentic Workflows & MCP", level: 85 }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Jira & Notion", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Stitch AI & Claude/ChatGPT", level: 92 },
        { name: "n8n", level: 85 },
        { name: "Git & GitHub", level: 80 }
      ]
    }
  ]
};

// Work experience at Cognizant
export const internshipsList = [
  {
    organization: "Cognizant",
    role: "Process Executive, gTech Ads",
    duration: "July 2024 - August 2025",
    skills: [
      "Supported campaign and operational improvement initiatives for global clients within the gTech Ads team.",
      "Collaborated across teams to improve workflow efficiency, operational quality, and process performance.",
      "Supported process optimization initiatives and contributed to operational decision-making through analytical problem solving.",
      "Awarded 'Star Performer of the Team' twice for exceeding performance expectations and delivering high-impact results."
    ],
    tech: ["Google Ads", "gTech Systems", "Analytics"]
  }
];

export const softSkillsList = [
  { name: "User Empathy", icon: "🤝", desc: "Putting user pain points at the center of the design and product strategy." },
  { name: "Problem Solving", icon: "🧩", desc: "Applying structured product thinking to break down complex problems and find optimal solutions." },
  { name: "Team Collaboration", icon: "👥", desc: "Working smoothly across technical and design teams to deliver high-quality outputs." },
  { name: "Communication", icon: "💬", desc: "Synthesizing insights and articulating technical requirements clearly to all stakeholders." }
];

export const projects = [
  {
    id: "finsage",
    number: "01",
    badge: "🚀 Flagship Product",
    title: "FinSage",
    description:
      "AI-Powered Portfolio Intelligence Platform. Built a full-stack, zero-cost AI portfolio platform tracking Indian stocks & cryptos in a single view. Owned the product lifecycle by conducting user research, defining the product scope and North Star Metric, drafting the PRD, and managing the technical implementation of V1. Developed a context-aware RAG chatbot (Llama-3.3-70B via Groq) for holding-aware portfolio analysis and an automated Gmail MCP email agent for daily portfolio digests.",
    techTags: [
      "Next.js",
      "Firebase",
      "Llama-3.3",
      "Groq",
      "RAG",
      "MCP",
      "AI Agents",
    ],
    links: {
      github: "https://github.com/Gaurav0801Rai",
      demo: "https://finsage-plum.vercel.app/",
    },
    isFlagship: true,
    images: [fs1, fs2, fs3, fs4, fs5, fs6, fs7],
  },
  {
    id: "groww-analyzer",
    number: "02",
    badge: null,
    title: "Groww Review Analyzer",
    description:
      "Voice-of-Customer Intelligence Pipeline. Designed and built an automated weekly pipeline that scrapes and filters thousands of daily Play Store reviews for Groww, uses embeddings and unsupervised clustering (UMAP + HDBSCAN) to surface recurring complaint themes without a fixed taxonomy, and delivers LLM-summarized themes directly into Google Docs and Gmail drafts via MCP. Shipped a dashboard SPA for product teams, cutting bug-identification time from days to hours.",
    techTags: ["Python", "UMAP", "HDBSCAN", "Embeddings", "LLMs", "MCP", "React"],
    links: {
      github: "https://github.com/Gaurav0801Rai/groww-review-analyzer",
      demo: null,
      video: "https://github.com/Gaurav0801Rai/groww-review-analyzer/blob/main/dashboard_interactive_demo.mp4",
    },
    isFlagship: false,
    images: [gra1, gra2],
  },
  {
    id: "groww-mf",
    number: "03",
    badge: null,
    title: "GROWW-MF",
    description:
      "GROWW‑MF is a Naive RAG (Retrieval‑Augmented Generation) application designed to ingest mutual fund data, generate embeddings, and allow users to query scheme details through a web interface.",
    techTags: ["React", "RAG", "Embeddings", "LLM", "Vite", "Tailwind CSS"],
    links: {
      github: "https://github.com/Gaurav0801Rai/GROWW-MF",
      demo: "https://groww-mf.vercel.app/",
    },
    isFlagship: false,
    images: [gmf1, gmf2],
  },
  {
    id: "chatgpt-voice",
    number: "04",
    badge: null,
    title: "ChatGPT Voice Adoption Research",
    description:
      "User Research. Conducted user segmentation and research to understand why Indian users were not actively using ChatGPT voice input. Designed surveys, ran qualitative interviews, framed hypotheses around regional language accessibility, and synthesized insights using problem-framing frameworks.",
    techTags: ["User Research", "Segmentation", "Qualitative Interviews", "Hypothesis", "Problem Framing"],
    links: {
      demo: "https://nextleap.app/portfolio/gaurav-kumar-jgco",
    },
    isFlagship: false,
    images: [cv1],
  },
  {
    id: "peppo-growth",
    number: "05",
    badge: null,
    title: "Peppo Growth & Segmentation Case Study",
    description:
      "Growth Strategy. Analyzed retention and growth challenges for food-tech startup Peppo by identifying high-value customer segments, unmet user needs, and low-intent acquisition channels. Proposed prioritization strategies, retention experiments, and growth initiatives to improve repeat usage and engagement.",
    techTags: ["Growth Strategy", "Retention Experiments", "Segmentation", "Prioritization"],
    links: {
      demo: "https://nextleap.app/portfolio/gaurav-kumar-jgco",
    },
    isFlagship: false,
    images: [pep1],
  },
  {
    id: "smart-society",
    number: "06",
    badge: null,
    title: "Smart Society",
    description:
      "AI-Assisted MVP. Designed an AI-assisted society management MVP focused on resident and security workflows. Built wireframes and prototype flows using Stitch AI, designed application screens in Figma, and defined MVP features, user flows, and workflow journeys for residents, visitors, and security guards.",
    techTags: ["Figma", "Stitch AI", "MVP Planning", "User Flows", "Wireframing"],
    links: {
      github: "https://github.com/Gaurav0801Rai",
      demo: "https://smart-resident-pass--digitallygaurav.replit.app",
    },
    isFlagship: false,
    images: [ss1],
  },
];

export const certificates = {
  featured: [
    {
      name: "Systems Thinking & Mapping Outcomes",
      issuer: "NextLeap",
      icon: "🎯",
      url: "https://nextleap.app/certificates/verify/nlcert2hxv9f4sta50qm4f",
      pdf: "/certificates/PM_System_Thinking_Certificate.pdf"
    },
    {
      name: "User Research & Problem Framing",
      issuer: "NextLeap",
      icon: "🔍",
      url: "https://nextleap.app/certificates/verify/nlcertw83to7o5x56wm6hm",
      pdf: "/certificates/PM_User_Research_Problem_Framing_Certificate.pdf"
    },
    {
      name: "Prioritisation, Metrics & Growth",
      issuer: "NextLeap",
      icon: "📈",
      url: "https://nextleap.app/certificates/verify/nlcert9wzmurskqguy07g9",
      pdf: "/certificates/Prioritisation_Metrics_Growth_Certificate.pdf"
    }
  ],
  viewAllUrl:
    "https://nextleap.app/portfolio/gaurav-kumar-jgco",
};

export const education = {
  degree: "Master of Computer Applications (MCA)",
  institution: "Lovely Professional University",
  cgpa: "Expected August 2026",
  graduation: "2026",
  twelfth: "Bachelor of Computer Applications (BCA) — University of Allahabad (June 2023)",
  tenth: "Prayagraj, Uttar Pradesh, India",
};

export const footerContent = {
  taglines: [
    "Product Management & AI Prototyping",
    "User Research · Wireframing · Strategy",
    "AI-Powered MVPs & Pipelines",
  ],
  credential: "MCA LPU (Expected 2026) · BCA Allahabad University (Graduated 2023)",
  copyright: `© ${new Date().getFullYear()} Gaurav Kumar | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
