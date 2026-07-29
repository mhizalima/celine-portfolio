export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-24 text-center">
      <p className="font-mono text-xs tracking-widest uppercase text-gold mb-5">Contact</p>

      <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
        Let&apos;s build or write something together.
      </h2>

      <p className="text-neutral-600 max-w-md mx-auto mb-10">
        Open to remote full-stack roles, freelance and contract work, and
        writing collaborations.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a href="mailto:celinebless2002@gmail.com" className="bg-gold text-navy font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition">Email Me</a>
        <a href="https://github.com/mhizalima" target="_blank" rel="noopener noreferrer" className="border border-navy text-navy font-semibold px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition">View GitHub</a>
      </div>

      <p className="font-mono text-sm text-neutral-500">celinebless2002@gmail.com</p>
    </section>
  );
}