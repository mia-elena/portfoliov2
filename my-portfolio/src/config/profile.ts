import type { Technology } from "../types/index";

export const profile = {
  name: "Mia Elena",
  title: "Software Engineer",
  description: "Software engineer building AI-powered applications with React, Python, and modern cloud infrastructure",
  image: "/images/my-notion-face-transparent-glasses2.png",
  links: {
    github: "https://github.com/miasdk",
    linkedIn: "https://www.linkedin.com/in/miaelena/",
    resume: "https://www.dropbox.com/scl/fi/1m7tg70n0pqct2p8oxyxy/Mia-Elena-Ricci-SWE-Resume-Google-Docs.pdf?rlkey=40wgtncs5vdhxq6aatkwzi5je&st=s9kfrxuj&dl=0",
  },
  skills: [
    "python",
    "django",
    "react",
    "typescript",
    "postgresql",
    "aws"
  ] as Technology[],
  contact: {
    email: "miatapiaswe@gmail.com",
    phone: "+1 (123) 456-7890",
  },
  location: {
    city: "New York City",
    country: "USA",
  }
};
