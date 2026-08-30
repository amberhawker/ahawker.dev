import { highlights, site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="container-page animate-fade-up pt-16 sm:pt-24">
      <p className="eyebrow">{site.location}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
        {site.name}
        <span className="ml-3 align-middle font-mono text-sm font-normal text-slate-500">
          ({site.pronouns})
        </span>
      </h1>
      <p className="mt-3 font-mono text-sm text-accent-soft sm:text-base">{site.role}</p>
      <p className="mt-6 max-w-2xl leading-relaxed text-slate-400 sm:text-lg">
        {site.tagline}
      </p>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {highlights.map((item) => (
          <li key={item.value} className="glass-inset p-4">
            <span className="font-mono text-sm text-accent">{item.value}</span>
            <span className="mt-1 block text-xs text-slate-400">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
