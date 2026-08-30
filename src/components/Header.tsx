import { navLinks, site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-base/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm text-white">
          <span className="text-accent">~/</span>
          {site.name.toLowerCase().replace(" ", "")}
        </a>

        <nav aria-label="Main">
          <ul className="flex items-center gap-5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href} className="hidden sm:block">
                <a
                  href={link.href}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="rounded-full border border-accent/40 px-4 py-1.5 text-sm text-accent transition-colors hover:bg-accent/10"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
