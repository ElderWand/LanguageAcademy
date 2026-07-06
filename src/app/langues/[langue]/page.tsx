"use client";

import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Award } from "lucide-react";
import Link from "next/link";
import { useLevelTest } from "@/context/LevelTestContext";

const languageData: Record<
  string,
  { name: string; fullName: string; description: string; code: string }
> = {
  anglais: {
    name: "Anglais",
    fullName: "Intensive English Courses",
    description: "Programmes intensifs d'anglais conçus pour le développement professionnel et l'intégration académique globale.",
    code: "EN",
  },
  francais: {
    name: "Français",
    fullName: "Cours Intensifs de Français",
    description: "Parcours immersifs de français pour maîtriser la communication active, la rédaction et l'aisance sociale.",
    code: "FR",
  },
  espagnol: {
    name: "Espagnol",
    fullName: "Cursos Intensivos de Español",
    description: "Explorez l'espagnol pratique et professionnel avec notre méthode active axée sur la parole spontanée.",
    code: "ES",
  },
  arabe: {
    name: "Arabe",
    fullName: "Intensive Arabic Courses",
    description: "Découvrez la richesse et la structure de la langue arabe, adaptée aux objectifs professionnels, littéraires et diplomatiques.",
    code: "AR",
  },
};

const levels = [
  {
    code: "A1",
    label: "Beginner",
    title: "Débutant A1",
    color: "bg-[#93C5FD] text-slate-900 border-[#60A5FA]/20", // Sky blue
    desc: "Acquérir les bases fondamentales et expressions courantes de survie.",
    items: ["Se présenter et poser des questions de base", "Vocabulaire essentiel du quotidien", "Grammaire élémentaire"],
    btnText: "Démarrer le niveau A1",
  },
  {
    code: "A2",
    label: "Elementary",
    title: "Élémentaire A2",
    color: "bg-[#6EE7B7] text-slate-900 border-[#34D399]/20", // Mint Green
    desc: "Construire des bases de communication solides pour l'échange quotidien.",
    items: ["Décrire son environnement et son travail", "Comprendre des phrases isolées courantes", "Échanges d'informations simples"],
    btnText: "Explorer le niveau A2",
  },
  {
    code: "B1",
    label: "Intermediate",
    title: "Intermédiaire B1",
    color: "bg-[#C084FC] text-slate-900 border-[#A855F7]/20", // Lavender
    desc: "Prendre son autonomie et s'exprimer de manière cohérente à l'oral.",
    items: ["Raconter un événement, un rêve ou un but", "Faire face aux situations de voyage", "Exprimer brièvement des opinions"],
    btnText: "Rejoindre le niveau B1",
  },
  {
    code: "B2",
    label: "Upper-Intermediate",
    title: "Avancé B2",
    color: "bg-[#FDE047] text-slate-900 border-[#FACC15]/20", // Yellow
    desc: "S'exprimer avec aisance et participer activement à des débats.",
    items: ["Comprendre le contenu essentiel de sujets complexes", "Communiquer avec spontanéité sans tension", "Rédiger des textes clairs"],
    btnText: "Viser le niveau B2",
  },
  {
    code: "C1",
    label: "Advanced",
    title: "Autonome C1",
    color: "bg-[#FDA4AF] text-slate-900 border-[#F43F5E]/20", // Coral Peach
    desc: "Maîtriser les nuances et s'exprimer de façon fluide en milieu pro.",
    items: ["S'exprimer couramment sans chercher ses mots", "Rédiger des rapports complexes structurés", "Saisir les sous-entendus"],
    btnText: "Maîtriser le niveau C1",
  },
  {
    code: "C2",
    label: "Mastery",
    title: "Bilingue C2",
    color: "bg-[#2DD4BF] text-slate-900 border-[#14B8A6]/20", // Turquoise Teal
    desc: "Comprendre et reformuler n'importe quelle source sans aucun effort.",
    items: ["S'exprimer spontanément avec précision et nuance", "Rédiger des synthèses académiques fines", "Fluidité totale quasi-native"],
    btnText: "Atteindre la maîtrise C2",
  },
];

export default function LanguePage() {
  const params = useParams();
  const langue = params.langue as string;
  const data = languageData[langue];
  const { openTestModal } = useLevelTest();

  if (!data) {
    return (
      <div className="py-32 text-center max-w-md mx-auto px-6">
        <h1 className="text-3xl font-bold tracking-tight">Programme non trouvé</h1>
        <p className="mt-4 text-muted-foreground">{"Le programme demandé n'est pas disponible."}</p>
        <div className="mt-8">
          <Link href="/">
            <Button variant="outline" className="rounded-full">{"Retour à l'accueil"}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* Dynamic Header Section */}
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
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
              {data.code}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#BEF264] bg-[#BEF264]/10 px-3 py-1 rounded-full border border-[#BEF264]/20">
              Next Point Academy
            </span>
          </div>
          
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            {data.fullName}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {data.description}
          </p>
        </div>
      </section>

      {/* Levels Cards Grid Section (Mockup 3 Design) */}
      <section className="max-w-7xl mx-auto px-6 mt-16 sm:mt-24">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">CECRL / CEFR Levels</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mt-2">Niveaux de formation disponibles</h2>
          <p className="text-sm text-muted-foreground mt-2">Monday to Friday — 2.5 hours per session</p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {levels.map((level, i) => {
            const letter = level.code.charAt(0);
            const num = level.code.charAt(1);
            return (
              <Card key={i} className={`rounded-3xl border ${level.color} p-8 flex flex-col justify-between shadow-2xs hover:shadow-sm hover:scale-[1.01] transition-all duration-300`}>
                <CardContent className="p-0">
                  {/* Double Circle Icon Badge */}
                  <div className="flex items-center gap-1.5 mb-6">
                    <div className="size-8 rounded-full border border-slate-900/10 flex items-center justify-center font-bold text-xs bg-white/20">
                      {letter}
                    </div>
                    <div className="size-8 rounded-full border border-slate-900/10 flex items-center justify-center font-bold text-xs bg-white/20">
                      {num}
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold tracking-tight mb-2">
                    {level.title}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 bg-white/30 px-2.5 py-0.5 rounded-full">
                    {level.label}
                  </span>
                  
                  <p className="mt-4 text-xs font-medium text-slate-850 leading-relaxed">
                    {level.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-900/10">
                    <ul className="space-y-2">
                      {level.items.map((item, idx) => (
                        <li key={idx} className="text-xs font-medium text-slate-800 flex items-start gap-2">
                          <span className="text-slate-900 mt-0.5">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <div className="mt-8 pt-5 border-t border-slate-900/10">
                  <Button 
                    onClick={openTestModal}
                    className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-full font-bold text-xs py-5"
                  >
                    {level.btnText}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Metrics Banner */}
        <div className="py-12 mt-20 border-y border-border/50 bg-[#FAF8F5]/50 rounded-3xl px-8 flex flex-col sm:flex-row items-center justify-around gap-8">
          {[
            { icon: Clock, label: "2.5 Heures / Session" },
            { icon: Award, label: "Certificat de Réussite" },
            { icon: Users, label: "Effectif Limité à 8" },
          ].map((metric, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-white border border-border/60 flex items-center justify-center text-[#0F1E43] shadow-3xs">
                <metric.icon className="size-5" />
              </div>
              <span className="text-sm font-bold text-foreground">{metric.label}</span>
            </div>
          ))}
        </div>

        {/* Final CTA Banner Card */}
        <div className="mt-20 max-w-7xl mx-auto px-6">
          <div className="bg-[#0F1E43] text-white p-8 sm:p-12 md:p-16 rounded-[2.5rem] relative overflow-hidden shadow-lg border border-slate-800 text-center">
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-5 select-none pointer-events-none z-0">
              <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />
            </div>
            
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                {langue === "francais" 
                  ? "Prêt à commencer vos cours de Français ?" 
                  : langue === "anglais" 
                  ? "Prêt à commencer vos cours d'Anglais ?"
                  : langue === "espagnol"
                  ? "Prêt à commencer vos cours d'Espagnol ?"
                  : "Prêt à commencer vos cours d'Arabe ?"}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold max-w-xl mx-auto">
                Rejoignez notre programme de formation active et développez la maîtrise nécessaire pour réaliser vos projets professionnels et académiques.
              </p>
              
              <div className="pt-4">
                <Button
                  onClick={openTestModal}
                  className="bg-[#BEF264] text-[#0F1E43] hover:bg-[#A3E635] border-none font-bold rounded-full px-8 py-6 text-xs shadow-md transition-all duration-300 cursor-pointer"
                >
                  Réserver votre orientation gratuite
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
