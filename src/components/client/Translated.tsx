"use client";
import { useLanguage } from "@/context/LanguageContext";

interface TranslatedProps {
  fr: React.ReactNode;
  en: React.ReactNode;
}

export function Translated({ fr, en }: TranslatedProps) {
  const { language } = useLanguage();
  return <>{language === "fr" ? fr : en}</>;
}
