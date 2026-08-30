export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-base" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-accent/10 blur-[140px]" />
      <div className="absolute -right-32 top-1/3 h-[32rem] w-[32rem] rounded-full bg-accent-soft/10 blur-[150px]" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-violet/10 blur-[160px]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(94,234,212,0.10),transparent_65%)]" />
    </div>
  );
}
