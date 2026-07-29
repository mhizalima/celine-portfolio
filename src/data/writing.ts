export type Article = {
  slug: string;
  title: string;
  platform: string;
  description: string;
  url: string;
  publishedDate?: string;
};

export const articles: Article[] = [
  // Add articles here as you publish them, for example:
  // {
  //   slug: "why-i-started-cryptopulse",
  //   title: "Why I Started Building CryptoPulse",
  //   platform: "Paragraph",
  //   description: "The problem I wanted to solve and how I approached it.",
  //   url: "https://paragraph.xyz/@your-handle/your-article",
  //   publishedDate: "2026-08-01",
  // },
];

export const platforms = [
  {
    name: "Paragraph",
    description: "Primary writing platform",
    url: "",
  },
  {
    name: "X / Twitter",
    description: "Building in public",
    url: "https://x.com/celine_onchain",
  },
  {
    name: "LinkedIn",
    description: "Career reflections",
    url: "https://www.linkedin.com/in/celine-ojo",
  },
];