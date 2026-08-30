import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-page flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs">{site.location}</p>
      </div>
    </footer>
  );
}
