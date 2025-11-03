export const education = [
  {
    id: "hunter-college",
    degree: "Bachelor of Arts in Computer Science",
    institution: "CUNY Hunter College",
    location: {
      city: "New York",
      country: "USA"
    },
    period: "September 2022 - Present",
    status: "current",
    gpa: "3.4",
    description: "Computer Science degree with focus on data structures, algorithms, and web development. Active in CS community and maintaining strong academic performance.",
    highlights: [
      "Completed core curriculum including Data Structures & Algorithms, Operating Systems, and Practical Web Development",
      "Enhanced technical skills through CodePath Advanced Web Development program and ongoing Technical Interview Course"
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems", 
      "Practical Web Development",
      "Statistics",
      "Software Engineering"
    ],
    // activities: [
    //   "Computer Science Club - Active Member", (PENDING)
    //   "WiCS (Women in Computer Science) - Active Member" (PENDING)
    // ],
    technologies: ["javascript", "python", "cpp"],
    logo: "/images/HunterCollege.jpg"
  }
];

export const certifications = [
  {
    id: "codepath-web-dev",
    title: "Advanced Web Development",
    provider: "CodePath",
    period: "January 2024",
    status: "completed",
    description: "Intensive web development program focused on full-stack application development and modern frameworks.",
    technologies: ["react", "nextjs", "nodejs", "express", "javascript"],
    logo: "/images/codepathlogo.jpg"
  },
  {
    id: "codepath-interview",
    title: "Intermediate Technical Interview Course", 
    provider: "CodePath",
    period: "In Progress",
    status: "current",
    description: "Advanced technical interview preparation covering algorithms, data structures, and system design.",
    technologies: ["python", "javascript", "cpp"]
  }
]; 