"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { footerTranslations } from "@/lib/translations";

export function NewsletterForm() {
  const { language } = useLanguage();
  const t = footerTranslations[language];
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Mock newsletter API call
      console.log("Newsletter subscription for:", email);
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="space-y-2">
      {!subscribed ? (
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.newsletterPlaceholder}
            required
            aria-label={language === "fr" ? "Adresse email pour la newsletter" : "Email address for newsletter"}
            className="bg-white/10 border border-white/15 rounded-xl px-4 py-2 text-xs text-white outline-none w-full placeholder-gray-400 focus:border-white/30"
          />
          <button 
            type="submit" 
            className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark text-xs font-bold px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer border-none"
          >
            {t.subscribe}
          </button>
        </form>
      ) : (
        <p className="text-xs text-brand-lime font-bold">
          {language === "fr" ? "Merci pour votre inscription !" : "Thank you for subscribing!"}
        </p>
      )}
    </div>
  );
}
