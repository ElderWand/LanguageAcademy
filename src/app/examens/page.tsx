"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLevelTest } from "@/context/LevelTestContext";

interface ExamInfo {
  name: string;
  fullName: string;
  items: string[];
}

const englishExams: ExamInfo[] = [
  {
    name: "IELTS",
    fullName: "International English Language Testing System",
    items: [
      "Simulations d'examens complets en temps réel",
      "Stratégies pragmatiques pour chaque section (Speaking, Writing...)",
      "Coaching personnalisé avec retours détaillés d'enseignants natifs",
      "Garantie d'atteinte de votre score cible (ou prolongation gratuite)",
    ],
  },
  {
    name: "TOEFL iBT",
    fullName: "Test of English as a Foreign Language",
    items: [
      "Maîtrise complète du format d'examen informatisé",
      "Entraînement intensif en Reading & Listening avec banques d'examens",
      "Techniques de Speaking et structure de rédaction pour le Writing",
      "Tests blancs chronométrés et correction individualisée des essais",
    ],
  },
];

const frenchExams: ExamInfo[] = [
  {
    name: "DELF",
    fullName: "Diplôme d'Études en Langue Française",
    items: [
      "Préparation ciblée pour les niveaux A1 à B2 du CECRL",
      "Épreuves blanches collectives et retours détaillés",
      "Méthodologie rigoureuse pour l'épreuve de production écrite",
      "Ateliers oraux réguliers en conditions réelles d'examen",
    ],
  },
  {
    name: "DALF",
    fullName: "Diplôme Approfondi de Langue Française",
    items: [
      "Niveaux de haute maîtrise C1 et C2",
      "Travail sur la synthèse documentaire et l'argumentation structurée",
      "Entraînement à l'exposé oral et au débat face à un jury",
      "Perfectionnement de la grammaire complexe et correction des essais",
    ],
  },
  {
    name: "TCF Canada / Québec",
    fullName: "Test de Connaissance du Français",
    items: [
      "Formations optimisées pour les projets d'immigration",
      "Compréhension orale et écrite sur plateforme d'entraînement",
      "Ateliers d'expression orale structurée chronométrés",
      "Résultats rapides avec un accompagnement sur-mesure",
    ],
  },
];

const spanishExams: ExamInfo[] = [
  {
    name: "DELE",
    fullName: "Diploma de Español como Lengua Extranjera",
    items: [
      "Préparation officielle pour tous les niveaux A1 à C2",
      "Immersion linguistique active en groupe de travail réduit",
      "Pratique orale intensive axée sur les thématiques d'examen",
      "Simulations officielles régulières avec correction détaillée",
    ],
  },
];

const slugMap: Record<string, string> = {
  "IELTS": "ielts",
  "TOEFL iBT": "toefl",
  "DELF": "delf",
  "DALF": "dalf",
  "TCF Canada / Québec": "tcf",
  "DELE": "dele"
};

function ExamCard({ exam }: { exam: ExamInfo }) {
  const slug = slugMap[exam.name] || "";
  return (
    <Card className="rounded-3xl border border-border/70 bg-white p-6 shadow-3xs hover:border-[#057A55]/20 hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
      <div>
        <CardHeader className="p-0 pb-5 border-b border-border/50">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#057A55]">Certification Officielle</span>
          <CardTitle className="text-xl font-bold tracking-tight text-foreground mt-2">
            {exam.name}
          </CardTitle>
          <p className="text-xs text-muted-foreground mt-1">{exam.fullName}</p>
        </CardHeader>
        <CardContent className="p-0 pt-6">
          <ul className="space-y-4">
            {exam.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="size-4.5 text-[#057A55] mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>

      <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
        <Link href={`/examens/${slug}`} className="w-full">
          <Button variant="outline" className="w-full rounded-xl text-xs font-bold py-5 text-[#0F1E43] border-slate-200 hover:bg-slate-50 cursor-pointer">
            Découvrir la préparation &rarr;
          </Button>
        </Link>
      </div>
    </Card>
  );
}

export default function ExamensPage() {
  const { openTestModal } = useLevelTest();

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
              Préparation Officielle
            </span>
          </div>
          
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Certifications &amp; Examens Internationaux
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Maximisez votre score grâce à des programmes intensifs conçus pour déjouer les pièges des épreuves officielles.
          </p>
        </div>
      </section>

      {/* Exam Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-16 sm:mt-24 space-y-20 animate-fade-in-up">
        {/* English */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F1E43] bg-[#0F1E43]/5 px-3 py-1.5 rounded-full border border-[#0F1E43]/10">EN</span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Certifications en Anglais
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {englishExams.map((exam) => (
              <ExamCard key={exam.name} exam={exam} />
            ))}
          </div>
        </div>

        {/* French */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F1E43] bg-[#0F1E43]/5 px-3 py-1.5 rounded-full border border-[#0F1E43]/10">FR</span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Certifications en Français
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {frenchExams.map((exam) => (
              <ExamCard key={exam.name} exam={exam} />
            ))}
          </div>
        </div>

        {/* Spanish */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F1E43] bg-[#0F1E43]/5 px-3 py-1.5 rounded-full border border-[#0F1E43]/10">ES</span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Certifications en Espagnol
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spanishExams.map((exam) => (
              <ExamCard key={exam.name} exam={exam} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-[#0F1E43] text-white p-8 sm:p-12 md:p-16 rounded-[2.5rem] relative overflow-hidden shadow-lg border border-slate-800 text-center animate-fade-in-up">
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-5 select-none pointer-events-none z-0">
            <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>
          
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Prêt à valider votre score cible ?
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold max-w-xl mx-auto">
              Inscrivez-vous pour passer un examen blanc gratuit ou contactez notre équipe pour concevoir votre programme de préparation personnalisé.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={openTestModal}
                className="w-full sm:w-auto bg-[#BEF264] text-[#0F1E43] hover:bg-[#A3E635] border-none font-bold rounded-full px-8 py-6 text-xs shadow-md transition-all duration-300 cursor-pointer"
              >
                Passer mon test gratuit
              </Button>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-white/30 font-bold rounded-full px-8 py-6 text-xs transition-all duration-300 cursor-pointer"
                >
                  Parler à un conseiller
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
