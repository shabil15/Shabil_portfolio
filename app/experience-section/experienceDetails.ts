export type ExperienceProps = {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  companyUrl?: string;
  logo?: string;
};

export const experiences: ExperienceProps[] = [
  {
    id: 0,
    company: "@ Rentesy",
    position: "Full Stack Developer",
    duration: "Jan 2025 - Present",
    location: "Hyderabad - Remote",
    description: "Architected and led development of a comprehensive property portfolio management platform serving property managers, owners, and vendors across India. Built the entire tech stack from frontend to backend—developing intuitive tenant portals with Next.js and TypeScript, creating scalable backend services with ElysiaJS and Express, and designing efficient data models using PostgreSQL and Drizzle ORM. Integrated secure payment gateways and banking APIs with Better-Auth for seamless rent collection workflows.",
    companyUrl: "https://www.linkedin.com/company/rentesy",
    technologies: [
      "Next.js",
      "TypeScript",
      "ElysiaJS",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "AWS",
      "Better-Auth",
    ],
  },
  {
    id: 1,
    company: "@ Brototype",
    position: "MERN Stack Developer Intern",
    duration: "Aug 2023 - Jan 2025",
    location: "Calicut, Kerala",
    description: "Developed two full-stack projects from scratch using the MERN stack, gaining hands-on expertise in building scalable web applications. Mastered RESTful API design patterns, database architecture with MongoDB, and frontend optimization techniques with React.js, while working in an intensive learning environment focused on real-world development practices.",
    companyUrl: "https://www.linkedin.com/company/brototype",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
      "JavaScript",
    ],
  },
];
