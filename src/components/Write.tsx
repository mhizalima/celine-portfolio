import { articles, platforms } from "@/data/writing";

export default function Write() {
  const pillars = [
    { num: "01", title: "Technical Writing", desc: "Explaining development concepts and lessons in plain language." },
    { num: "02", title: "Web3 Writing", desc: "Thoughtful, hype-free exploration of blockchain and decentralization." },
    { num: "03", title: "Project Writing", desc: "Documenting the build process, problems, decisions, and lessons." },
    { num: "04", title: "Ghostwriting", desc: "Content and project writing for founders, builders, and teams." },
  ];

  return (
    <section id="write" className="max-w-5xl mx-auto px-6 py-24">
      <div className="mb-12">
        <p className="font-mono text-xs tracking-widest uppercase text-gold mb-5">Write</p>
        <h2 className="text-3xl font-bold text-navy mb-4">Writing and ideas</h2>
        <p className="text-neutral-600 max-w-md">
          I use writing to explain technical concepts, document projects, and
          think through Web3 and technology as it develops.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <div className="border border-neutral-200 rounded-xl divide-y divide-neutral-200">
          {pillars.map((p) => (
            <div key={p.num} className="p-6 flex gap-4">
              <span className="font-mono text-xs text-gold pt-1">{p.num}</span>
              <div>
                <h4 className="font-semibold text-navy mb-1">{p.title}</h4>
                <p className="text-sm text-neutral-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-neutral-200 rounded-xl p-8">
          <p className="text-neutral-600 mb-6">
            My writing is published across a growing set of platforms. Long-form
            pieces explore technology and Web3; shorter posts document the
            day-to-day of building.
          </p>

          {platforms.map((platform) => (
            <div key={platform.name} className="flex items-center justify-between py-4 border-t border-neutral-200">
              <div>
                <div className="font-semibold text-navy text-sm">{platform.name}</div>
                <div className="text-xs text-neutral-500">{platform.description}</div>
              </div>
              {platform.url ? (
                <a href={platform.url} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-gold">Visit</a>
              ) : (
                <span className="font-mono text-xs text-gold">Visit</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {articles.length > 0 && (
        <div>
          <h3 className="font-mono text-xs tracking-widest uppercase text-gold mb-6">Latest Articles</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {articles.map((article) => (
              <a key={article.slug} href={article.url} target="_blank" rel="noopener noreferrer" className="block border border-neutral-200 rounded-xl p-6 hover:border-gold transition">
                <span className="font-mono text-xs text-gold">{article.platform}</span>
                <h4 className="font-semibold text-navy mt-2 mb-2">{article.title}</h4>
                <p className="text-sm text-neutral-600">{article.description}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}