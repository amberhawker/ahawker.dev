import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="container-page pb-14 pt-16">
      <div className="flex flex-col gap-2 border-t border-white/5 pt-6 font-mono text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name} — built with Next.js &amp; Tailwind CSS
        </p>
        <p>{site.location}</p>
      </div>
    </footer>
  );
}
