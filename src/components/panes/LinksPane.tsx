import { contactLinks, site } from "@/content/site";

export function LinksPane() {
  return (
    <div>
      <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        # contact &amp; links
      </h2>
      <p className="mt-4 max-w-2xl text-slate-400">
        Available for managed IT, infrastructure projects, and custom software work in{" "}
        {site.location} and remotely. Email is the fastest way to reach me.
      </p>

      <ul className="mt-8 space-y-3">
        {contactLinks.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              className="glass-inset flex items-center justify-between gap-4 p-4 transition-colors hover:border-accent/40 hover:bg-white/[0.05]"
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 sm:w-24">
                  {link.key}
                </span>
                <span className="break-all font-mono text-sm text-slate-100">
                  {link.value}
                </span>
              </span>
              <span aria-hidden className="font-mono text-accent">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
