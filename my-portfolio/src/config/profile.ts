import type { Technology } from "../types/index";

export const profile = {
  name: "Hi, I'm Mia. ",
  username: "miaelena",
  pronouns: "she/her",
  title: "Software Engineer",
  description: "I build things for the web.",
  image: "/images/mia-smiling.png",
  links: {
    github: "https://github.com/miasdk",
    linkedIn: "https://www.linkedin.com/in/miaelena/",
    website: "https://miaelena.vercel.app/",
    resume: "https://www.dropbox.com/scl/fi/h88slx5ez789qpouvivik/Mia-Junior-SWE-Resume.pdf?rlkey=ubc8u0j1rkv0ag3cd7ni5lnd1&st=4qom5dyr&dl=0",
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
