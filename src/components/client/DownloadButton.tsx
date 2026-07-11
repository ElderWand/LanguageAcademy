"use client";

import { useState } from "react";
import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
  label: string;
  className?: string;
}

export function DownloadButton({ label, className }: DownloadButtonProps) {
  const [downloaded, setDownloaded] = useState(false);

  return downloaded ? (
    <span className="text-brand-emerald flex items-center justify-center gap-2 text-xs font-bold bg-emerald-50 border border-emerald-200/50 rounded-xl py-3 px-4 w-full">
      <CheckCircle2 className="size-4 shrink-0" /> Téléchargement démarré
    </span>
  ) : (
    <Button
      onClick={() => setDownloaded(true)}
      className={className || "w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark border-none font-bold rounded-xl py-6 text-xs transition-colors duration-200 cursor-pointer shadow-md mt-2 flex items-center justify-center gap-2"}
    >
      <Download className="size-4" /> {label}
    </Button>
  );
}
