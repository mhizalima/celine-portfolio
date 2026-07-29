export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <p className="font-mono text-xs tracking-widest uppercase text-gold mb-5">
        About
      </p>

      <h2 className="text-3xl font-bold text-navy mb-8">
        Developer, writer, and continuous learner.
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-5 text-neutral-600 text-base leading-relaxed">
          <p>
            I&apos;m a Full-Stack Developer and Writer based in Nigeria. I enjoy
            building digital products, solving problems, researching new ideas,
            and exploring emerging technologies, particularly Web3 and blockchain.
          </p>
          <p>
            My work spans full-stack development and writing, including
            ghostwriting, content writing, and project writing. I publish on
            Paragraph and other platforms, using writing to explore ideas,
            document projects, and communicate what I learn.
          </p>
          <p>
            I&apos;m currently pursuing a BSc in Mechanical Engineering at the
            University of Cross River State, Calabar.
          </p>
        </div>

        <div className="space-y-4">
          <div className="border border-neutral-200 rounded-xl p-6 hover:border-gold transition">
            <span className="font-mono text-xs text-gold">01</span>
            <h3 className="text-lg font-bold text-navy mt-1 mb-2">The Builder</h3>
            <p className="text-sm text-neutral-600">
              I turn ideas into working products through full-stack development,
              API integration, and interface design.
            </p>
          </div>

          <div className="border border-neutral-200 rounded-xl p-6 hover:border-gold transition">
            <span className="font-mono text-xs text-gold">02</span>
            <h3 className="text-lg font-bold text-navy mt-1 mb-2">The Explorer</h3>
            <p className="text-sm text-neutral-600">
              I stay curious about Web3 and emerging tools, learning by
              experimenting rather than chasing hype.
            </p>
          </div>

          <div className="border border-neutral-200 rounded-xl p-6 hover:border-gold transition">
            <span className="font-mono text-xs text-gold">03</span>
            <h3 className="text-lg font-bold text-navy mt-1 mb-2">The Communicator</h3>
            <p className="text-sm text-neutral-600">
              I write to explain, document, and reflect, turning technical work
              into clear, honest writing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}