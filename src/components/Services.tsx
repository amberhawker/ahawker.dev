import { services } from "@/content/site";

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container-page">
        <p className="eyebrow">Services provided</p>
        <h2 className="heading">From the rack to the repository</h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          Engagements range from ongoing managed IT to one-off infrastructure builds and
          custom software. Every option below can be scoped as a project or an ongoing
          retainer.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden className="text-accent">
                      ·
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
