import type { Technology } from "../types/index";

export const profile = {
  name: "Mia Elena",
  title: "Software Engineer",
  description: "Building intelligent solutions with React, Python, and cloud.",
  image: "/images/my-notion-face-transparent-glasses2.png",
  links: {
    github: "https://github.com/miasdk",
    linkedIn: "https://www.linkedin.com/in/miaelena/",
    website: "https://miaelena.vercel.app/",
    resume: "https://www.dropbox.com/scl/fi/cizrd3ho6tvx3jtfhxr1c/Mia-Elena-Ricci-SWE-Resume.pdf?rlkey=2riqxf44fe879gldnjj4m2d09&st=ie9c95fi&dl=0",
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
  }
};
