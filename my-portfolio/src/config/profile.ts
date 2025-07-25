import type { Technology } from "../types/index";

export const profile = {
  name: "Mia Elena",
  title: "Software Engineer",
  description: "Software engineer building intelligent applications with React, Python, and modern cloud infrastructure",
  image: "/images/my-notion-face-transparent-glasses2.png",
  links: {
    github: "https://github.com/miasdk",
    linkedIn: "https://www.linkedin.com/in/miaelena/",
    resume: "https://www.dropbox.com/scl/fi/o2ku0nh0smpi4fx6kgukn/Mia-Elena-Ricci-SWE-Resume-5.pdf?rlkey=sdo6ht1cslgzus4xhbklv798o&st=7u682vea&dl=0",
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
    email: "miariccidev@gmail.com",
    phone: "+1 (123) 456-7890",
  },
  location: {
    city: "New York City",
    country: "USA",
  }
};
