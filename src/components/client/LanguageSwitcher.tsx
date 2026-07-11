"use client";
import { useLanguage } from "@/context/LanguageContext";
import { headerTranslations } from "@/lib/translations";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  scrolled: boolean;
}

export function LanguageSwitcher({ scrolled }: LanguageSwitcherProps) {
  const { language, toggleLanguage } = useLanguage();
  const t = headerTranslations[language];

  return (
    <button 
      onClick={toggleLanguage}
      className={`flex items-center gap-1 cursor-pointer p-1.5 rounded-xl transition-colors font-bold ${
        scrolled 
          ? "text-brand-navy hover:bg-slate-100" 
          : "text-white hover:bg-white/10"
      }`}
      aria-label={language === "fr" ? "Switch to English" : "Passer en français"}
    >
      <Globe className="size-4" />
      <span>{t.langSelector}</span>
    </button>
  );
}
