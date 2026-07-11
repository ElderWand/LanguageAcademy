"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, User, Mail, Phone, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Field {
  name: string;
  label: React.ReactNode;
  type: string;
  placeholder: string;
  placeholderEn?: string;
  required?: boolean;
}

interface LeadCaptureCardProps {
  title: React.ReactNode;
  description: React.ReactNode;
  fields: Field[];
  submitLabel: React.ReactNode;
  actionUrl?: string;
  onSubmit?: (data: Record<string, string>) => void;
  successContent?: React.ReactNode;
}

export function LeadCaptureCard({
  title,
  description,
  fields,
  submitLabel,
  actionUrl,
  onSubmit,
  successContent,
}: LeadCaptureCardProps) {
  const { language } = useLanguage();
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleFieldChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (actionUrl) {
      try {
        const res = await fetch(actionUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const data = await res.json();
        console.log("Mock lead capture submission success:", data);
      } catch (err) {
        console.error("Mock lead capture submission error:", err);
      }
    }

    if (onSubmit) {
      onSubmit(values);
    }
    
    setSubmitted(true);
  };

  // Helper to render label icons
  const getIcon = (fieldName: string) => {
    if (fieldName.includes("email")) return <Mail className="size-3.5" />;
    if (fieldName.includes("phone") || fieldName.includes("whatsapp")) return <Phone className="size-3.5" />;
    return <User className="size-3.5" />;
  };

  return (
    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-md text-left space-y-6 sticky top-28">
      <div className="space-y-3">
        <div className="size-12 rounded-2xl bg-brand-navy/5 flex items-center justify-center text-brand-navy">
          <Download className="size-6 animate-pulse" />
        </div>
        <h3 className="text-lg font-black text-brand-navy tracking-tight">{title}</h3>
        <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            {fields.map((field) => (
              <div key={field.name} className="flex flex-col space-y-1.5">
                <label
                  htmlFor={`lead-${field.name}`}
                  className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-1.5"
                >
                  {getIcon(field.name)} {field.label}
                </label>
                
                {field.type === "textarea" ? (
                  <textarea
                    id={`lead-${field.name}`}
                    value={values[field.name] || ""}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    required={field.required}
                    placeholder={language === "en" && field.placeholderEn ? field.placeholderEn : field.placeholder}
                    rows={4}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-brand-navy font-bold outline-none cursor-text focus:border-brand-emerald w-full resize-y"
                  />
                ) : (
                  <input
                    id={`lead-${field.name}`}
                    type={field.type}
                    value={values[field.name] || ""}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    required={field.required}
                    placeholder={language === "en" && field.placeholderEn ? field.placeholderEn : field.placeholder}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-brand-navy font-bold outline-none cursor-text focus:border-brand-emerald w-full"
                  />
                )}
              </div>
            ))}
          </div>

          <Button
            type="submit"
            className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark border-none font-bold rounded-xl py-6 text-xs transition-colors duration-200 cursor-pointer shadow-md mt-2 flex items-center justify-center gap-2"
          >
            <Download className="size-4" /> {submitLabel}
          </Button>
        </form>
      ) : (
        successContent || (
          <div className="bg-emerald-50 border border-emerald-200/50 rounded-2xl p-6 text-center space-y-3 animate-in fade-in zoom-in-95 duration-200">
            <div className="size-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <ShieldCheck className="size-6" />
            </div>
            <h4 className="text-sm font-black text-emerald-950">Succès !</h4>
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              Vos informations ont été soumises avec succès.
            </p>
          </div>
        )
      )}
    </div>
  );
}
