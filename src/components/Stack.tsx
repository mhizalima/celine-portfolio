export default function Stack() {
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
      title: "Web3",
      level: "Exploring",
      items: ["Blockchain", "Smart contracts", "Dapps", "Wallet integration"],
    },
    {
      title: "Tools",
      level: "Daily use",
      items: ["Git", "GitHub", "VS Code", "npm"],
    },
  ];

  return (
    <section id="stack" className="max-w-5xl mx-auto px-6 py-24">
      <div className="mb-12">
        <p className="font-mono text-xs tracking-widest uppercase text-gold mb-5">Stack</p>
        <h2 className="text-3xl font-bold text-navy mb-4">Technology I work with</h2>
        <p className="text-neutral-600 max-w-md">
          An honest snapshot, what I use confidently, and what I am actively
          growing into.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {groups.map((group) => (
          <div key={group.title} className="border border-neutral-200 rounded-xl p-6">
            <h4 className="font-semibold text-navy mb-1">{group.title}</h4>
            <span className="font-mono text-xs uppercase tracking-widest text-gold block mb-4">
              {group.level}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="text-xs px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}