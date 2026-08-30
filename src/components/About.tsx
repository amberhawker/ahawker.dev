import { about } from "@/content/site";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div>
          <p className="eyebrow">About me</p>
          <h2 className="heading">Computer science, run in production</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">{about.intro}</p>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-relaxed text-slate-400">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="card h-fit">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            Core focus
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {about.focus.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="text-accent">
                  ▸
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
