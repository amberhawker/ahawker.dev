import { services } from "@/content/site";

export function ServicesPane() {
  return (
    <div>
      <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        # services provided
      </h2>
      <p className="mt-4 max-w-2xl text-slate-400">
        Scoped as a project or an ongoing retainer — from the rack to the repository.
      </p>

      <dl className="mt-8 divide-y divide-white/5 border-y border-white/5">
        {services.map((service, index) => (
          <div key={service.title} className="grid gap-4 py-6 md:grid-cols-[1fr_1.4fr]">
            <dt>
              <span className="font-mono text-xs text-slate-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-white">{service.title}</h3>
            </dt>
            <dd>
              <p className="text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <li key={point} className="chip">
                    {point}
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
