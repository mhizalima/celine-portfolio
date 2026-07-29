import { projects } from "@/data/projects";

export default function Build() {
  return (
    <section id="build" className="max-w-5xl mx-auto px-6 py-24">
      <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-gold mb-5">
            Build
          </p>
          <h2 className="text-3xl font-bold text-navy">Selected work</h2>
        </div>
        <p className="text-sm text-neutral-600 max-w-xs">
          Projects I use to practice full-stack development, API integration,
          and product thinking, documented honestly, including what is still
          in progress.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.slug} className="bg-navy rounded-2xl p-10 text-white">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-gold border border-gold/40 bg-gold/10 rounded-full px-3 py-1 mb-6">
              {project.status} - {project.category}
            </span>

            <h3 className="text-2xl font-bold mb-4">{project.name}</h3>

            <p className="text-neutral-300 max-w-xl mb-10">{project.description}</p>

            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-gold mb-3">
                  Stack
                </h4>
                <ul className="space-y-2 text-sm text-neutral-200">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-gold mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2 text-sm text-neutral-200">
                  {project.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-gold mb-3">
                  What I&apos;m Learning
                </h4>
                <ul className="space-y-2 text-sm text-neutral-200">
                  {project.learning.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-10 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition">
                View GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}