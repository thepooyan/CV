import { isDeepStrictEqual } from "util";

export const skillsData = {
  Frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 97 },
    { name: "Solid.js", level: 80 },
    { name: "TypeScript", level: 90 },
  ],
  Styling: [
    { name: "SASS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Styled components", level: 70 },
  ],
  Backend: [
    { name: "Express.js", level: 80 },
    { name: "JAVA spring", level: 70 },
    { name: "Hono", level: 75 },
    { name: "Go", level: 50 },
    { name: "Trpc", level: 50 },
  ],
  Database: [
    { name: "Drizzle", level: 85 },
    { name: "Sqlite", level: 85 },
    { name: "Redis", level: 80 },
    { name: "Mysql", level: 75 },
    { name: "MongoDB", level: 70 },
  ],
  "DevOps & Cloud": [
    { name: "Vercel (or Netlify)", level: 85 },
    { name: "Turso (or Neon)", level: 85 },
    { name: "Docker", level: 80 },
    { name: "GitHub Actions", level: 68 },
  ],
  "More": [
    { name: "Git", level: 99 },
    { name: "Linux", level: 98 },
    { name: "Figma", level: 20 },
  ],
};

export const projects = [
  {
    title: "Hooshban",
    description: "Full-stack Branding website with AI features",
    tech: ["Solid.js", "Drizzle","TailwindCSS", "shadcn", "Chat interface"],
    link: "https://brand-amber.vercel.app/",
    github: "https://github.com/thepooyan/brand.git",
    isDemo: true
  },
  {
    title: "Trusty.sci",
    description: "Educational article sharing with tons of features",
    tech: ["Next.js", "Stripe", "NextUI", "TailwindCSS", ".Net rest api"],
    link: "https://trustysci.com/",
  },
  {
    title: "Invoice creation app",
    description: "Hobby project, for creating and sharing invoices easily",
    tech: ["Solid.js", "UnoCSS", "shadcn", "Python", "FastAPI"],
    link: "https://factor-coral.vercel.app",
    github: "https://github.com/thepooyan/factor",
    isDemo: true
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization dashboard for business metrics",
    tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
    link: "https://example-analytics.com",
    github: "https://github.com/username/analytics",
  },
];

export const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt:
      "Best practices for structuring large React applications with proper state management and component architecture.",
    date: "2024-01-15",
    readTime: "8 min read",
  },
  {
    title: "Modern Backend Development with Node.js",
    excerpt:
      "Exploring the latest trends in Node.js development including microservices and serverless architectures.",
    date: "2024-01-08",
    readTime: "6 min read",
  },
  {
    title: "Database Design Patterns",
    excerpt:
      "Common database design patterns and when to use them in your applications.",
    date: "2024-01-01",
    readTime: "10 min read",
  },
];
