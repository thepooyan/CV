export const skillsData = {
  Frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "Vue.js", level: 75 },
    { name: "Tailwind CSS", level: 85 },
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 82 },
    { name: "Express.js", level: 80 },
    { name: "FastAPI", level: 75 },
    { name: "GraphQL", level: 72 },
  ],
  Database: [
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 78 },
    { name: "Redis", level: 70 },
    { name: "Prisma", level: 75 },
  ],
  "DevOps & Cloud": [
    { name: "AWS", level: 75 },
    { name: "Docker", level: 70 },
    { name: "Vercel", level: 85 },
    { name: "GitHub Actions", level: 68 },
  ],
};

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    link: "https://example-ecommerce.com",
    github: "https://github.com/username/ecommerce",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    tech: ["React", "Socket.io", "Express", "MongoDB"],
    link: "https://example-tasks.com",
    github: "https://github.com/username/task-app",
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
