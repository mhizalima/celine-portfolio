import { projects } from "@/data/projects";

const columns = [
  { label: "Stack", key: "stack" },
  { label: "Key features", key: "features" },
  { label: "What I'm learning", key: "learning" },
] as const;

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-[#0A1931]">
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-base leading-relaxed">
          Web and mobile projects, with the stack, features, and current status
          of each.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="rounded-2xl bg-[#0A1931] p-8 md:p-10 text-[#F6FAFD]"
          >
            <span className="inline-block rounded-full bg-[#FCA311] px-3 py-1 text-xs font-semibold text-[#0A1931] mb-6">
              {project.status} · {project.category}
            </span>

            <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
            <p className="max-w-xl mb-10 leading-relaxed">
              {project.description}
            </p>

            <div className="grid sm:grid-cols-3 gap-8">
              {columns.map(({ label, key }) => (
                <div key={key}>
                  <h3 className="font-semibold mb-3 text-[#FCA311]">{label}</h3>
                  <ul className="space-y-2 text-sm">
                    {project[key].map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 rounded-lg bg-[#FCA311] px-6 py-3 font-semibold text-[#0A1931] hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6FAFD]"
              >
                View on GitHub
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}