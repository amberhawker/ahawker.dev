import { highlights, site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(79,209,197,0.12),transparent_70%)]"
      />
      <div className="container-page relative animate-fade-up py-24 sm:py-32">
        <p className="eyebrow">{site.location}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          {site.name}
          <span className="ml-3 align-middle font-mono text-base font-normal text-slate-500">
            ({site.pronouns})
          </span>
        </h1>
        <p className="mt-4 text-lg text-accent-soft sm:text-xl">{site.role}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-base transition-opacity hover:opacity-90"
          >
            Work with me
          </a>
          <a
            href="#work"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent/50"
          >
            View work
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.value} className="bg-surface p-5">
              <dt className="font-mono text-sm text-accent">{item.value}</dt>
              <dd className="mt-1 text-sm text-slate-400">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
