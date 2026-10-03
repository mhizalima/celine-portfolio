const groups = [
  {
    title: "Frontend",
    level: "Core",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend and APIs",
    level: "Building experience",
    items: ["REST APIs", "Authentication", "Database integration", "Application architecture"],
  },
  {
    // TODO: add your mobile tools, e.g. your framework, state management,
    // and build/deploy tools. This card stays hidden until items are added.
    title: "Mobile",
    level: "Add your level here",
    items: [] as string[],
  },
  {
    title: "Tools",
    level: "Daily use",
    items: ["Git", "GitHub", "VS Code", "npm"],
  },
  {
    title: "Web3",
    level: "Exploring",
    items: ["Blockchain", "Smart contracts", "Dapps", "Wallet integration"],
  },
];

export default function StackPage() {
  const visible = groups.filter((group) => group.items.length > 0);

  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-[#0A1931]">
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Stack</h1>
        <p className="text-base leading-relaxed">
          The technology I use confidently, and what I&apos;m actively growing
          into.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {visible.map((group) => (
          <div key={group.title} className="rounded-xl bg-[#F6FAFD] p-6">
            <h2 className="text-lg font-bold mb-1">{group.title}</h2>
            <p className="text-sm mb-4">{group.level}</p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#0A1931]/20 bg-[#B3CFE5]/40 px-3 py-1.5 text-xs font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}