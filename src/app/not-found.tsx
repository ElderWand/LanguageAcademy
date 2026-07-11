import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-navy text-white px-6 text-center">
      <h1 className="text-6xl font-black text-brand-lime tracking-tight">404</h1>
      <h2 className="text-2xl font-bold mt-4 tracking-tight">Page non trouvée / Page Not Found</h2>
      <p className="text-slate-300 text-sm mt-2 max-w-md leading-relaxed">
        Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-extrabold rounded-full px-8 py-5 text-xs border-none cursor-pointer">
            Retour à l&apos;accueil / Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
