import type { Technology } from "../types/index";

export const profile = {
  name: "Hi, I'm Mia. ",
  username: "miaelena",
  pronouns: "she/her",
  title: "AI Engineer",
  description: "I am a full-stack software engineer specializing in building end-to-end agentic systems. My experience spans across contributing to production RAG pipelines to architecting custom agentic systems using LangChain and LangGraph to meet various business use cases. ",
  technicalFocus: [
    "Agentic Logic",
    "Semantic RAG",
    "Multi-tenant Architecture",
    "Deterministic AI Systems"
  ],
  currentlyWorkingOn: "I am currently working on building LLM applications through Packt's LangChain & LangGraph specialization, including RAG systems, conversational agents, and data analysis tools.",
  image: "/images/mia-smiling.png",
  links: {
    github: "https://github.com/mia-elena",
    linkedIn: "https://www.linkedin.com/in/miaelena/",
    website: "https://miaelena.vercel.app/",
    resume: "YOUR_RESUME_URL_HERE",
  },
  skills: [
    "python",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "django",
    "nodejs",
    "express",
    "postgresql",
    "aws",
    "docker",
    "git",
    "github"
  ] as Technology[],
  contact: {
    email: "miariccidev@gmail.com",
    phone: "(929) 428-2071",
  },
  location: {
    city: "New York",
    country: "USA",
  },
  status: {
    emoji: "🪷",
    message: "Open to new opportunities"
  }
};
