import { ExperienceItem, Technology } from "../types";
export const experience = [
  {
    id: "codepath",
    title: "Software Engineer Fellow",
    company: "CodePath",
    date: "June 2024 - September 2024",
    location: {
      city: "Remote",
      country: "USA"
    },
    type: "fellowship",
    status: "completed",
    description: "Completed intensive 12-week software engineering fellowship focused on advanced backend development, system design, and technical interview preparation.",
    highlights: [
      "Built 5+ full-stack projects using Python, Django, React, and PostgreSQL",
      "Participated in weekly technical interviews and coding challenges",
      "Collaborated on group projects with distributed teams",
      "Learned advanced algorithms, data structures, and system design principles"
    ],
    technologies: ["python", "django", "react", "postgresql", "git"],
    logo: "/images/codepathlogo.jpg"
  },
  {
    id: "hunter-college",
    title: "Student",
    company: "Hunter College",
    date: "2022 - 2024",
    location: {
      city: "New York",
      country: "USA"
    },
    type: "education",
    status: "completed",
    description: "Completed coursework in Computer Science with focus on software development, algorithms, and database systems.",
    highlights: [
      "Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering",
      "Participated in coding competitions and hackathons",
      "Maintained Dean's List status",
      "Worked on team projects using agile methodologies"
    ],
    technologies: ["java", "python", "javascript", "mysql"],
    logo: "/images/HunterCollege.jpg"
  },
  {
    id: "evergreen",
    title: "Software Developer Intern",
    company: "Evergreen Health Partners",
    date: "January 2024 - May 2024",
    location: {
      city: "New York",
      country: "USA"
    },
    type: "internship",
    status: "completed",
    description: "Developed healthcare management software solutions to improve patient data processing and clinic workflow efficiency.",
    highlights: [
      "Built patient management dashboard using React and TypeScript",
      "Integrated FHIR R4 standards for healthcare data interoperability",
      "Optimized database queries resulting in 40% faster load times",
      "Collaborated with healthcare professionals to gather requirements"
    ],
    technologies: ["react", "typescript", "nodejs", "postgresql", "docker"],
    logo: "/images/evergreen-logo.jpg"
  },
  {
    id: "headstarter",
    title: "Software Engineer Fellow",
    company: "Headstarter AI",
    date: "July 2024 - September 2024",
    location: {
      city: "Remote",
      country: "USA"
    },
    type: "fellowship",
    status: "completed",
    description: "Participated in AI-focused software engineering fellowship, building 5 AI-powered applications and learning modern development practices.",
    highlights: [
      "Built 5 AI applications including chatbots, recommendation systems, and image processors",
      "Learned OpenAI API integration, LangChain, and prompt engineering",
      "Implemented CI/CD pipelines and cloud deployment strategies",
      "Mentored by industry professionals from top tech companies"
    ],
    technologies: ["python", "react", "nextjs", "openai", "langchain", "vercel"],
    logo: "/images/headstarter.jpeg"
  }
];