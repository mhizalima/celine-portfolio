export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4">
        <span className="font-bold text-navy text-sm">Ojo Celine Shalom, Celine_onChain</span>

        <ul className="flex gap-6 text-sm text-neutral-600">
          <li><a href="https://x.com/celine_onchain" target="_blank" rel="noopener noreferrer" className="hover:text-gold">X</a></li>
          <li><a href="https://www.linkedin.com/in/celine-ojo" target="_blank" rel="noopener noreferrer" className="hover:text-gold">LinkedIn</a></li>
          <li><a href="https://github.com/mhizalima" target="_blank" rel="noopener noreferrer" className="hover:text-gold">GitHub</a></li>
          <li><a href="mailto:celinebless2002@gmail.com" className="hover:text-gold">Email</a></li>
        </ul>

        <span className="font-mono text-xs text-neutral-400">Build, Learn, Write, Explore</span>
      </div>
    </footer>
  );
}