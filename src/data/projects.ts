export type Project = {
  slug: string;
  name: string;
  status: "In Progress" | "Completed" | "Learning Project";
  category: string;
  description: string;
  stack: string[];
  features: string[];
  learning: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "cryptopulse",
    name: "CryptoPulse",
    status: "In Progress",
    category: "Personal Project",
    description:
      "A cryptocurrency market dashboard designed to give users an accessible way to explore prices, market trends, and digital assets. Built to practice full-stack development, API integration, and data visualization.",
    stack: ["Next.js", "React and TypeScript", "Recharts", "CoinGecko API"],
    features: [
      "Live market overview",
      "Trending assets",
      "Global market stats",
      "Responsive dashboard UI",
    ],
    learning: [
      "Structuring larger Next.js apps",
      "Working with external APIs",
      "Visualizing real-time data",
      "Product-level UI decisions",
    ],
    githubUrl: "https://github.com/mhizalima",
  },
];