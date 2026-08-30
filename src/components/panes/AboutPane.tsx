import { about } from "@/content/site";

export function AboutPane() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
      <div>
        <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          # about me
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-200">{about.intro}</p>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-4 leading-relaxed text-slate-400">
            {paragraph}
          </p>
        ))}
      </div>

      <aside className="glass-inset h-fit p-5">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
          core focus
        </h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-300">
          {about.focus.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="font-mono text-accent">
                ›
              </span>
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
