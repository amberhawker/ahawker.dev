import { projects, skillGroups } from "@/content/site";

export function Work() {
  return (
    <section id="work" className="section">
      <div className="container-page">
        <p className="eyebrow">Projects & experience</p>
        <h2 className="heading">What I build and operate</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="card flex flex-col">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                {project.kind}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white">Tech stack</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="rounded-2xl border border-white/10 p-6">
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                  {group.label}
                </h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
