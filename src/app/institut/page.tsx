import { Building2, Target, Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    icon: Building2,
    title: "Notre Mission",
    description:
      "Former des apprenants capables de communiquer avec aisance, clarté et confiance dans un contexte universitaire ou professionnel hautement international.",
  },
  {
    icon: Target,
    title: "Notre Approche",
    description:
      "Une pédagogie personnalisée alliant immersion intensive, formateurs natifs qualifiés et suivi numérique régulier des indicateurs de performance.",
  },
  {
    icon: Heart,
    title: "Nos Valeurs",
    description:
      "L'excellence académique, la bienveillance pédagogique et l'engagement continu pour assurer le succès individuel de chaque projet d'étude.",
  },
];

export default function InstitutPage() {
  return (
    <div className="pb-24">
      {/* Back button & Hero */}
      <section className="relative pt-32 pb-16 sm:pb-20 bg-[#0F1E43] text-white border-b border-slate-800 overflow-hidden">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5 select-none pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="size-3.5" /> {"Retour à l'accueil"}
          </Link>
          
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#BEF264] bg-[#BEF264]/10 px-3 py-1 rounded-full border border-[#BEF264]/20">
              {"L'Institut"}
            </span>
          </div>
          
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            {"L'excellence d'apprentissage Next Point Academy"}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            {"Depuis notre fondation, nous nous engageons à briser les barrières de la communication linguistique en fournissant un enseignement d'élite et sur-mesure."}
          </p>
        </div>
      </section>

      {/* Grid of features */}
      <section className="max-w-7xl mx-auto px-6 mt-16 sm:mt-24 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, i) => (
            <div key={i} className="rounded-3xl border border-border/60 bg-white p-8 lg:p-10 shadow-3xs hover:border-amber-500/20 hover:shadow-2xs transition-all duration-300">
              <div className="size-12 rounded-2xl bg-[#FAF8F5] border border-border/50 flex items-center justify-center text-amber-600 mb-6">
                <section.icon className="size-5.5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">{section.title}</h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
