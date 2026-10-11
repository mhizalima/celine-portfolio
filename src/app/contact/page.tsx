const EMAIL = "celinebless2002@gmail.com";

const links = [
  { label: "GitHub", href: "https://github.com/mhizalima" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/celine-ojo" },
  { label: "X", href: "https://x.com/celine_onchain" },
  { label: "Telegram", href: "https://t.me/MhizAlima" },
];

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 text-center text-[#0A1931]">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">
        Let&apos;s build something together.
      </h1>

      <p className="max-w-md mx-auto mb-10 leading-relaxed">
        Open to remote full-stack and mobile developer roles, as well as
        freelance and contract work.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-lg bg-[#FCA311] px-6 py-3 font-semibold text-[#0A1931] hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A1931]"
        >
          Email me
        </a>
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#0A1931] px-6 py-3 font-semibold text-[#0A1931] hover:bg-[#0A1931] hover:text-[#F6FAFD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A1931]"
          >
            {label}
          </a>
        ))}
      </div>

      <p className="text-sm">{EMAIL}</p>
    </section>
  );
}