import { site } from "@/content/site";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", value: "@amberhawker", href: site.github },
];

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <p className="eyebrow">Contact</p>
        <h2 className="heading">Let&rsquo;s talk about your systems</h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          Available for managed IT, infrastructure projects, and custom software work in{" "}
          {site.location} and remotely. The fastest way to reach me is email.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="card flex items-center justify-between gap-4"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              <span>
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                  {link.label}
                </span>
                <span className="mt-1 block text-white">{link.value}</span>
              </span>
              <span aria-hidden className="text-accent">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
