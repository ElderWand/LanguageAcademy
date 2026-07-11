export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-brand-navy">
      <div className="size-10 border-4 border-slate-200 border-t-brand-navy rounded-full animate-spin" />
      <p className="mt-4 text-xs font-bold text-slate-500 tracking-wider uppercase">Chargement en cours...</p>
    </div>
  );
}
