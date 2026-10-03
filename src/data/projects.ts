export type Project = {
  slug: string;
  name: string;
  status: string;
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
    slug: "web3withojoche",
    name: "Web3WithOjoche website",
    status: "Live",
    category: "Web",
    description:
      "Website for Web3WithOjoche, a community that teaches young Africans about Web3 and blockchain. It presents the community's programs, events, testimonials, and partners.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Responsive landing page with a clear call to action",
      "Programs, events, testimonials, and partners sections",
      "Mobile-friendly navigation",
      "Reusable React components",
    ],
    learning: [
      "Component-based structure in the Next.js App Router",
      "Responsive design across screen sizes",
      "Deploying and iterating on Vercel",
    ],
    githubUrl: "https://github.com/mhizalima/web3withojoche-v2",
    liveUrl: "https://web3withojoche-v2.vercel.app/",
  },
  {
    slug: "community-activity-tracker-bot",
    name: "Community Activity Tracker Bot",
    status: "Built",
    category: "Backend",
    description:
      "A Telegram bot that scores community activity and keeps a live leaderboard, so a community can reward its most active members each cycle.",
    stack: ["Python", "Telegram Bot API", "SQLite"],
    features: [
      "Points for messages, with a daily cap to prevent spam",
      "Task submissions with screenshot proof and admin approve or reject",
      "Admin commands for manual points, leaderboards, and season reports",
      "Season reset that exports a final report before zeroing points",
    ],
    learning: [
      "Designing admin workflows around a chat interface",
      "Persisting data with SQLite",
      "Deploying an always-on process to a cloud host",
    ],
    githubUrl: "https://github.com/mhizalima/web3withojoche-bot",
  },
  {
    slug: "arbitrum-network-dashboard",
    name: "Arbitrum Network Dashboard",
    status: "Live",
    category: "Data",
    description:
      "An on-chain analytics dashboard that tracks key activity across the Arbitrum network, from daily transactions to DeFi total value locked.",
    stack: ["SQL", "Dune Analytics", "Blockchain data"],
    features: [
      "Daily transactions, active addresses, and gas usage",
      "Separate views for economic activity and block space activity",
      "Trend analysis and DeFi TVL overview",
    ],
    learning: [
      "Writing SQL against on-chain datasets",
      "Turning raw data into dashboards that are easy to read",
    ],
    githubUrl: "https://github.com/mhizalima/Arbitrum-network-dashboard",
    liveUrl: "https://dune.com/mhizalima/arbitrum-network-overview-with-celine",
  },
];