import { projects, skillGroups } from "@/content/site";

export function ProjectsPane() {
  return (
    <div>
      <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        # projects &amp; experience
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glass-inset flex flex-col p-5 transition-colors hover:border-accent/30"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600">
              {project.kind}
            </span>
            <h3 className="mt-2 font-semibold text-white">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h3 className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">
        # tech stack
      </h3>
      <dl className="mt-4 space-y-4">
        {skillGroups.map((group) => (
          <div key={group.label} className="grid gap-2 sm:grid-cols-[13rem_1fr] sm:gap-6">
            <dt className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
              {group.label}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
