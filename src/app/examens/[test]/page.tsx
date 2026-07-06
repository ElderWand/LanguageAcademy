"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Download, 
  Mail, 
  User,
  ShieldCheck,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLevelTest } from "@/context/LevelTestContext";

const examData: Record<
  string,
  {
    name: string;
    fullName: string;
    language: string;
    intro: string;
    duration: string;
    validity: string;
    format: string;
    sections: { title: string; desc: string }[];
    strategy: string[];
    guideTitle: string;
  }
> = {
  ielts: {
    name: "IELTS",
    fullName: "International English Language Testing System",
    language: "Anglais",
    intro: "L'IELTS est la certification d'anglais la plus populaire au monde pour l'éducation et la migration globale. Reconnu par plus de 11 000 organisations dans 140 pays.",
    duration: "2 heures 45 minutes",
    validity: "2 ans",
    format: "Papier ou Ordinateur (Épreuves : Listening, Reading, Writing, Speaking)",
    sections: [
      { title: "Listening (30 min)", desc: "4 enregistrements de locuteurs natifs avec 40 questions variées." },
      { title: "Reading (60 min)", desc: "3 longs textes avec 40 questions d'analyse et de compréhension." },
      { title: "Writing (60 min)", desc: "2 tâches de rédaction (synthèse graphique et dissertation argumentée)." },
      { title: "Speaking (11-14 min)", desc: "Entretien en face-à-face avec un examinateur officiel." }
    ],
    strategy: [
      "Pratique intensive sur des examens blancs officiels chronométrés.",
      "Coaching ciblé sur la structure des dissertations de la Tâche 2 du Writing.",
      "Entraînement en face-à-face avec enregistrement pour le Speaking.",
      "Enrichissement lexical pour éviter les répétitions et utiliser des synonymes académiques."
    ],
    guideTitle: "Le Guide Complet de Préparation à l'IELTS"
  },
  toefl: {
    name: "TOEFL iBT",
    fullName: "Test of English as a Foreign Language",
    language: "Anglais",
    intro: "Le TOEFL iBT mesure votre capacité à utiliser et à comprendre l'anglais au niveau universitaire. Il est plébiscité par les universités américaines et canadiennes.",
    duration: "environ 2 heures",
    validity: "2 ans",
    format: "100% sur Ordinateur (Internet-based Test)",
    sections: [
      { title: "Reading (35 min)", desc: "2 passages académiques avec 20 questions à choix multiples." },
      { title: "Listening (36 min)", desc: "Conversations et cours magistraux avec 28 questions de compréhension." },
      { title: "Speaking (16 min)", desc: "4 tâches orales à réaliser à l'aide d'un casque et d'un micro." },
      { title: "Writing (29 min)", desc: "2 tâches écrit (synthèse de texte/audio et discussion académique)." }
    ],
    strategy: [
      "Maîtrise complète de l'interface informatique TOEFL officielle.",
      "Entraînement à la prise de notes structurée pendant les écoutes audio.",
      "Développement de gabarits (templates) pour le Speaking et le Writing.",
      "Gestion rigoureuse du temps grâce à notre simulateur exclusif."
    ],
    guideTitle: "TOEFL iBT: Le Guide Pratique pour Dépasser 100 Points"
  },
  delf: {
    name: "DELF",
    fullName: "Diplôme d'Études en Langue Française",
    language: "Français",
    intro: "Le DELF est un diplôme officiel délivré par le ministère français de l'Éducation nationale pour certifier les compétences en français des candidats étrangers (niveaux A1 à B2).",
    duration: "Varie selon le niveau (1h20 à 2h30)",
    validity: "À vie (sans limite de durée)",
    format: "Écrit (Collectif) & Oral (Individuel face à un jury)",
    sections: [
      { title: "Compréhension de l'oral", desc: "Écoute de courts documents sonores du quotidien." },
      { title: "Compréhension des écrits", desc: "Lecture et analyse de textes informatifs ou pratiques." },
      { title: "Production écrite", desc: "Rédaction d'une lettre amicale, formelle ou d'un essai argumenté." },
      { title: "Production orale", desc: "Monologue suivi, entretien dirigé et exercice en interaction." }
    ],
    strategy: [
      "Simulations collectives hebdomadaires en conditions réelles d'épreuves.",
      "Méthodologie stricte de la lettre formelle de réclamation (B2).",
      "Jeux de rôles et simulations d'interactions orales devant des formateurs certifiés.",
      "Fiches de vocabulaire thématiques et révision systématique des points clés de grammaire."
    ],
    guideTitle: "Réussir son DELF B1/B2: Fiches de Révision et Méthodologie"
  },
  dalf: {
    name: "DALF",
    fullName: "Diplôme Approfondi de Langue Française",
    language: "Français",
    intro: "Le DALF certifie les niveaux supérieurs du CECRL (C1 et C2). Il atteste d'une grande aisance linguistique, indispensable pour intégrer les grandes écoles ou certains postes de direction.",
    duration: "3h30 (C1) à 4h00 (C2)",
    validity: "À vie",
    format: "Épreuves de synthèse écrite et de soutenance orale devant un jury d'experts.",
    sections: [
      { title: "Compréhension de l'oral & écrits", desc: "Écoute de longs enregistrements et analyse de textes complexes." },
      { title: "Production écrite", desc: "Rédaction d'une synthèse de documents et d'un essai argumenté." },
      { title: "Production orale", desc: "Exposé oral basé sur un dossier de documents suivi d'un débat avec le jury." }
    ],
    strategy: [
      "Entraînement rigoureux à la technique française de la synthèse documentaire (sans opinion personnelle).",
      "Soutenance de mémoires oraux blancs devant un jury exigeant.",
      "Perfectionnement lexical pour un style académique soutenu.",
      "Correction fine de la syntaxe et de la structure de l'argumentation."
    ],
    guideTitle: "Le Guide de Haute Maîtrise pour le DALF C1 & C2"
  },
  tcf: {
    name: "TCF",
    fullName: "Test de Connaissance du Français (Canada / Québec)",
    language: "Français",
    intro: "Le TCF est le test officiel exigé par Immigration, Réfugiés et Citoyenneté Canada (IRCC) et le ministère de l'Immigration du Québec pour les démarches d'immigration ou d'obtention de la nationalité.",
    duration: "environ 2 heures",
    validity: "2 ans",
    format: "Épreuves sur ordinateur ou papier (Listening, Reading, Writing, Speaking)",
    sections: [
      { title: "Compréhension Orale", desc: "39 questions à choix multiples sur des dialogues sonores." },
      { title: "Compréhension Écrite", desc: "39 questions à choix multiples sur des textes de la vie courante." },
      { title: "Expression Écrite", desc: "3 tâches de rédaction de longueur et de complexité croissantes." },
      { title: "Expression Orale", desc: "3 tâches orales enregistrées en face-à-face avec un examinateur." }
    ],
    strategy: [
      "Entraînement intensif sur plateforme numérique avec chronomètre réel.",
      "Optimisation des réponses orales pour le Speaking (Tâches 1, 2 et 3).",
      "Correction rapide et structuration des 3 rédactions de l'Expression Écrite.",
      "Stratégies de lecture rapide pour maximiser le score de la Compréhension Écrite."
    ],
    guideTitle: "Dossier TCF Canada: Boostez votre score de points Express Entry"
  },
  dele: {
    name: "DELE",
    fullName: "Diploma de Español como Lengua Extranjera",
    language: "Espagnol",
    intro: "Les diplômes DELE sont les titres officiels accréditant le degré de compétence et de maîtrise de la langue espagnole, octroyés par le ministère espagnol de l'Éducation et de la Formation professionnelle.",
    duration: "Varie de 2h00 à 4h00 selon le niveau",
    validity: "À vie",
    format: "Quatre épreuves (Comprensión de lectura, Comprensión auditiva, Expresión e interacción escritas, Expresión e interacción orales).",
    sections: [
      { title: "Comprensión de lectura", desc: "Lecture et questions sur des textes d'actualité ou littéraires." },
      { title: "Comprensión auditiva", desc: "Écoute de conversations réelles et de messages oraux espagnols." },
      { title: "Expresión escritas", desc: "Rédaction de textes formels, courriels ou lettres d'opinion." },
      { title: "Expresión orales", desc: "Présentation orale thématique et discussion libre avec l'examinateur." }
    ],
    strategy: [
      "Pratique intensive sur des annales officielles de l'Instituto Cervantes.",
      "Correction systématique de la grammaire espagnole (usage correct du subjonctif).",
      "Entraînements individuels à l'expression orale avec des formateurs natifs.",
      "Gabarits d'écriture pour l'expression écrite."
    ],
    guideTitle: "DELE Preparación: Manual del candidato para el éxito officiel"
  }
};

export default function ExamPage() {
  const params = useParams();
  const testKey = (params.test as string)?.toLowerCase();
  
  const test = examData[testKey];
  const { openTestModal } = useLevelTest();

  // Lead form download guide state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  if (!test) {
    notFound();
  }

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <div className="pb-24">
      {/* Header Section */}
      <section className="relative pt-32 pb-16 sm:pb-20 bg-[#0F1E43] text-white border-b border-slate-800 overflow-hidden">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5 select-none pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link 
            href="/examens" 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="size-3.5" /> {"Toutes les certifications"}
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
              {test.name}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#BEF264] bg-[#BEF264]/10 px-3 py-1 rounded-full border border-[#BEF264]/20">
              {test.language}
            </span>
          </div>
          
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Préparation Officielle {test.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {test.intro}
          </p>
        </div>
      </section>

      {/* Main Content Details Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Details & Strategy */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Metadata Table details */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-slate-100/80 text-left space-y-6">
              <h3 className="text-lg font-black text-[#0F1E43] tracking-tight border-b border-slate-200 pb-3 flex items-center gap-2">
                <FileText className="size-5 text-[#057A55]" /> {"Fiche Technique de l'Examen"}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-left">
                <div className="space-y-1">
                  <p className="font-extrabold uppercase text-slate-400 tracking-wider">Durée Totale</p>
                  <p className="font-bold text-[#0F1E43] text-sm">{test.duration}</p>
                </div>
                <div className="space-y-1">
                  <p className="font-extrabold uppercase text-slate-400 tracking-wider">Validité du diplôme</p>
                  <p className="font-bold text-[#0F1E43] text-sm">{test.validity}</p>
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <p className="font-extrabold uppercase text-slate-400 tracking-wider">Format &amp; Épreuves</p>
                  <p className="font-bold text-[#0F1E43] text-sm leading-relaxed">{test.format}</p>
                </div>
              </div>
            </div>

            {/* Structure Breakdown */}
            <div className="text-left space-y-6">
              <h3 className="text-xl font-black text-[#0F1E43] tracking-tight">{"Structure de l'examen "}{test.name}</h3>
              <div className="grid grid-cols-1 gap-4">
                {test.sections.map((sec, i) => (
                  <div key={i} className="border border-slate-100 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white shadow-3xs">
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#0F1E43]">{sec.title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{sec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Strategy */}
            <div className="text-left space-y-6">
              <h3 className="text-xl font-black text-[#0F1E43] tracking-tight">Notre Stratégie de Préparation</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {test.strategy.map((item, i) => (
                  <li key={i} className="flex gap-3 bg-white p-5 border border-slate-100 rounded-2xl shadow-3xs text-left">
                    <div className="size-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                      <CheckCircle2 className="size-3.5 fill-current" />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Download Guide Lead Capture Card */}
          <div className="lg:col-span-5 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-md text-left space-y-6 sticky top-28">
            <div className="space-y-3">
              <div className="size-12 rounded-2xl bg-[#0F1E43]/5 flex items-center justify-center text-[#0F1E43]">
                <Download className="size-6 animate-pulse" />
              </div>
              <h3 className="text-lg font-black text-[#0F1E43] tracking-tight">Télécharger le Guide Officiel</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {"Remplissez vos coordonnées pour recevoir immédiatement par email notre guide de préparation exclusif avec des conseils d'experts natifs et des exemples de questions."}
              </p>
            </div>

            {!downloaded ? (
              <form onSubmit={handleDownloadSubmit} className="space-y-4">
                <div className="space-y-3">
                  {/* Name field */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="guide-name" className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                      <User className="size-3.5" /> Nom complet
                    </label>
                    <input 
                      id="guide-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Ex: Youssef El Alami"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-[#0F1E43] font-bold outline-none cursor-pointer focus:border-[#057A55]"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="guide-email" className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                      <Mail className="size-3.5" /> Adresse email
                    </label>
                    <input 
                      id="guide-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Ex: youssef@gmail.com"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-[#0F1E43] font-bold outline-none cursor-pointer focus:border-[#057A55]"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#BEF264] text-[#0F1E43] hover:bg-[#A3E635] border-none font-bold rounded-xl py-6 text-xs transition-colors duration-200 cursor-pointer shadow-md mt-2 flex items-center justify-center gap-2"
                >
                  <Download className="size-4" /> Obtenir mon guide gratuit (PDF)
                </Button>
              </form>
            ) : (
              <div className="bg-emerald-50 border border-emerald-200/50 rounded-2xl p-6 text-center space-y-3 animate-in fade-in zoom-in-95 duration-200">
                <div className="size-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <ShieldCheck className="size-6" />
                </div>
                <h4 className="text-sm font-black text-emerald-950">Téléchargement Prêt !</h4>
                <p className="text-[11px] text-emerald-800 leading-relaxed">
                  {"Merci ! Le document a été envoyé avec succès à votre adresse email :"} <br />
                  <strong className="underline text-emerald-950">{email}</strong>
                </p>
                <div className="pt-2">
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Téléchargement du PDF démarré (simulation).");
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 underline"
                  >
                    Télécharger directement le fichier &darr;
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Final CTA Banner Card */}
      <section className="mt-24 max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-[#0F1E43] text-white p-8 sm:p-12 md:p-16 rounded-[2.5rem] relative overflow-hidden shadow-lg border border-slate-800 text-center">
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
