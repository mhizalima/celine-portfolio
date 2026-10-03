import Link from "next/link";

const focus = [
  {
    title: "Full-stack web",
    body: "Interfaces, APIs, databases, and deployment, built end to end and shipped to a live URL.",
  },
  {
    title: "Mobile apps",
    body: "Apps connected to real backends, with authentication, data sync, and a smooth user experience.",
  },
  {
    title: "Web3 and emerging tech",
    body: "Hands-on experiments with blockchain tools, learning by building rather than chasing hype.",
  },
];

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-[#0A1931]">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl">
        Full-stack and mobile developer.
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-5 text-base leading-relaxed max-w-prose">
          <p>
            I&apos;m a developer based in Nigeria. I build web and mobile
            products from the interface to the API to the database, and I care
            about shipping things that work and can be maintained.
          </p>
          <p>
            I also explore Web3 and blockchain, using small projects to learn
            how new tools behave in practice.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/projects"
              className="rounded-lg bg-[#FCA311] px-6 py-3 font-semibold text-[#0A1931] hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A1931]"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-[#0A1931] px-6 py-3 font-semibold text-[#0A1931] hover:bg-[#F6FAFD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A1931]"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <ul className="space-y-4">
          {focus.map((item) => (
            <li
              key={item.title}
              className="rounded-xl bg-[#F6FAFD] p-6 text-[#0A1931]"
            >
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
              <p className="text-sm leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}