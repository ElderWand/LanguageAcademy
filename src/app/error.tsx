"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-navy text-white px-6 text-center">
      <h1 className="text-4xl font-black text-brand-lime tracking-tight">Une erreur est survenue</h1>
      <p className="text-slate-300 text-sm mt-2 max-w-md leading-relaxed">
        Désolé, une erreur s&apos;est produite lors du chargement de la page.
      </p>
      <div className="mt-8 flex gap-4">
        <Button 
          onClick={() => reset()}
          className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-extrabold rounded-full px-8 py-5 text-xs border-none cursor-pointer"
        >
          Réessayer
        </Button>
        <Button 
          onClick={() => window.location.href = "/"}
          variant="outline"
          className="rounded-full px-8 py-5 text-xs font-semibold border-white/20 hover:bg-white/10 text-white cursor-pointer"
        >
          Retour à l&apos;accueil
        </Button>
      </div>
    </div>
  );
}
