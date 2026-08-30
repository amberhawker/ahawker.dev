import { infrastructure } from "@/content/site";

export function InfraPane() {
  return (
    <div>
      <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        # infrastructure &amp; homelab
      </h2>
      <p className="mt-4 max-w-2xl text-slate-400">{infrastructure.summary}</p>

      <ul className="mt-8 space-y-3">
        {infrastructure.units.map((unit) => (
          <li
            key={unit.unit}
            className="glass-inset flex flex-col gap-2 p-4 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span className="flex items-center gap-2 font-mono text-sm text-slate-200 sm:w-56 sm:shrink-0">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
              {unit.unit}
            </span>
            <span className="font-mono text-xs text-accent sm:w-40 sm:shrink-0">
              {unit.state}
            </span>
            <span className="text-sm leading-relaxed text-slate-400">
              {unit.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
