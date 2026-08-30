import { contactLinks, site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-base/60 backdrop-blur-xl">
      <div className="container-page flex h-14 items-center justify-between gap-4">
        <a href="#top" className="font-mono text-sm text-white">
          <span className="text-accent">amber</span>
          <span className="text-slate-500">@</span>
          <span className="text-accent-soft">ahawker.dev</span>
        </a>

        <nav aria-label="Profile links">
          <ul className="flex items-center gap-2 font-mono text-xs">
            {contactLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className="rounded-md border border-white/10 px-3 py-1.5 text-slate-300 transition-colors hover:border-accent/40 hover:text-white"
                  {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="hidden sm:block">
              <a
                href={`mailto:${site.email}`}
                className="rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-accent transition-colors hover:bg-accent/20"
              >
                Hire me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
