const links = [
  { label: "GitHub", href: "https://github.com/mhizalima", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/celine-ojo", external: true },
  { label: "X", href: "https://x.com/celine_onchain", external: true },
  { label: "Telegram", href: "https://t.me/MhizAlima", external: true },
  { label: "Email", href: "mailto:celinebless2002@gmail.com", external: false },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1931] text-[#F6FAFD]">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4">
        <span className="text-sm">
          © {new Date().getFullYear()} Ojo Celine Shalom
        </span>

        <ul className="flex gap-6 text-sm">
          {links.map(({ label, href, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="hover:text-[#FCA311] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FCA311]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}