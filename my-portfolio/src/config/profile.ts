import type { Technology } from "../types/index";

export const profile = {
  name: "Mia Elena",
  title: "Software Engineer",
  description: "",
  image: "/images/my-notion-face-transparent-glasses2.png",
  links: {
    github: "https://github.com/miasdk",
    linkedIn: "https://www.linkedin.com/in/miaelena/",
    website: "https://miaelena.vercel.app/",
    resume: "https://www.dropbox.com/scl/fi/0trmvgwdg33p190g8m5fs/resume.pdf?rlkey=wtcnxhbhxsmb4llds1iaiy58i&st=9ljuztpj&dl=0",
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
