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
  Calendar,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLevelTest } from "@/context/LevelTestContext";

const programData: Record<
  string,
  {
    name: string;
    subhead: string;
    description: string;
    duration: string;
    group: string;
    level: string;
    modules: string[];
    strategy: string[];
    guideTitle: string;
  }
> = {
  "kids-academy": {
    name: "Kids Academy (4 - 7 ans)",
    subhead: "Ateliers d'éveil linguistique par le jeu, le chant et l'interaction naturelle.",
    description: "Une approche 100% orale conçue spécifiquement pour les jeunes enfants. Nous imitons le processus d'acquisition de la langue maternelle à travers des activités sensorielles.",
    duration: "2 heures / semaine",
    group: "Max 6 enfants",
    level: "Débutant à Élémentaire",
    modules: [
      "Éveil aux sons et phonétique ludique",
      "Vocabulaire de base (animaux, couleurs, famille)",
      "Chants, comptines et expressions courtes du quotidien"
    ],
    strategy: [
      "Immersion totale passive et bienveillante.",
      "Apprentissage par le mouvement (technique TPR).",
      "Matériel éducatif visuel, auditif et tactile exclusif."
    ],
    guideTitle: "Guide Parental de l'Éveil Linguistique"
  },
  "juniors": {
    name: "Juniors (8 - 12 ans)",
    subhead: "Développer une communication confiante et structurée pour l'école et le quotidien.",
    description: "Cours dynamiques axés sur la prise de parole active, le théâtre et les projets de groupe pour éliminer la timidité scolaire.",
    duration: "3 heures / semaine",
    group: "Max 8 élèves",
    level: "A1 à B1 (CECRL)",
    modules: [
      "Compréhension orale renforcée et diction",
      "Vocabulaire thématique de l'école, de la technologie et des loisirs",
      "Introduction active à la grammaire par des jeux de rôles"
    ],
    strategy: [
      "Débats encadrés et expressions orales amusantes.",
      "Projets collaboratifs artistiques en groupe.",
      "Évaluations régulières de progression partagées avec les parents."
    ],
    guideTitle: "Comment booster l'apprentissage de langues de votre enfant à la maison"
  },
  "teens": {
    name: "Adolescents (13 - 17 ans)",
    subhead: "Réussite scolaire, aisance absolue à l'oral et préparation aux examens internationaux.",
    description: "Un programme moderne pour ados abordant des sujets contemporains pour les motiver à échanger spontanément à l'écrit comme à l'oral.",
    duration: "4 heures / semaine",
    group: "Max 8 élèves",
    level: "A2 à B2 (CECRL)",
    modules: [
      "Expression orale fluide & débats d'actualité",
      "Grammaire structurée, syntaxe et essai de rédaction",
      "Introduction aux techniques d'examens (IELTS, TOEFL)"
    ],
    strategy: [
      "Simulations de situations réelles académiques.",
      "Méthode active de rédaction d'essais argumentés.",
      "Coaching de confiance en soi à l'oral."
    ],
    guideTitle: "Réussir son parcours scolaire international (Guide Ados)"
  },
  "adultes": {
    name: "Adultes & Étudiants",
    subhead: "Maîtriser une nouvelle langue pour le voyage, les études ou le développement personnel.",
    description: "Des cours structurés et conviviaux basés sur la méthode communicative active pour vous exprimer sans hésitation en public.",
    duration: "4.5 heures / semaine",
    group: "Max 8 participants",
    level: "A1 à C2 (CECRL)",
    modules: [
      "Conversation courante et aisance sociale",
      "Compréhension de documents réels (articles, vidéos d'actualité)",
      "Perfectionnement des structures grammaticales et de l'accent"
    ],
    strategy: [
      "Jeux de rôle de la vie quotidienne.",
      "Ateliers d'expression spontanée sans mémorisation passive.",
      "Feedback individualisé immédiat par un enseignant certifié."
    ],
    guideTitle: "Guide de l'Apprentissage Actif pour Adultes"
  },
  "cours-individuels": {
    name: "Cours Individuels / Privés",
    subhead: "Un accompagnement 100% sur-mesure et flexible avec un formateur dédié.",
    description: "Idéal pour atteindre des objectifs spécifiques (présentation pro, voyage imminent, blocage d'élocution) à votre propre rythme.",
    duration: "Flexible selon vos besoins",
    group: "Individuel (1-à-1)",
    level: "Tous niveaux",
    modules: [
      "Analyse diagnostique approfondie de vos besoins",
      "Programme d'apprentissage 100% personnalisé",
      "Planning flexible selon vos disponibilités professionnelles"
    ],
    strategy: [
      "Focalisation exclusive sur vos faiblesses linguistiques.",
      "Pratique intensive de la parole active.",
      "Ajustement constant du rythme selon vos progrès."
    ],
    guideTitle: "Optimiser son temps : Réussir avec les cours particuliers"
  },
  "clubs-conversation": {
    name: "Clubs de Conversation",
    subhead: "Libérer votre parole active et débattre sur des thématiques passionnantes.",
    description: "Oubliez les tables de conjugaison. Ce club est conçu exclusivement pour parler, échanger et fluidifier votre discours en contexte social.",
    duration: "2 heures / session",
    group: "Max 10 participants",
    level: "Intermédiaire à Avancé (B1 à C2)",
    modules: [
      "Débats sur des sujets d'actualité et de société",
      "Présentation de revues de presse et d'analyses de vidéos",
      "Jeux de négociation et d'argumentation collective"
    ],
    strategy: [
      "Correction bienveillante de la prononciation et des expressions.",
      "Apport de vocabulaire idiomatique en contexte réel.",
      "Prise de parole spontanée et interactive encouragée."
    ],
    guideTitle: "10 astuces pour parler une langue étrangère sans peur"
  },
  "holiday-programs": {
    name: "Holiday Programs",
    subhead: "Des stages intensifs thématiques pendant les vacances scolaires.",
    description: "Maximisez les périodes de vacances pour faire un bond de géant dans votre niveau de langue grâce à des projets thématiques intensifs.",
    duration: "15h à 25h / semaine",
    group: "Max 8 élèves",
    level: "Tous niveaux",
    modules: [
      "Projets créatifs thématiques hebdomadaires",
      "Immersion culturelle active et ateliers pratiques",
      "Renforcement intensif grammaire & expressions orales"
    ],
    strategy: [
      "Pratique intensive quotidienne accélérée.",
      "Ateliers artistiques et théâtraux.",
      "Activités collaboratives et conviviales."
    ],
    guideTitle: "Brochure Complète des Stages de Vacances"
  },
  "business-languages": {
    name: "Business Languages",
    subhead: "Négocier, manager et collaborer efficacement dans un contexte international.",
    description: "Le vocabulaire, la posture et les compétences d'élocution nécessaires pour réussir dans le monde des affaires global.",
    duration: "4 heures / semaine",
    group: "Max 8 professionnels",
    level: "B1 à C2 (CECRL)",
    modules: [
      "Anglais / Français professionnel de bureau et de gestion",
      "Techniques de négociation commerciale internationale",
      "Rédaction d'e-mails, rapports et synthèses professionnels"
    ],
    strategy: [
      "Simulations de réunions de travail complexes.",
      "Études de cas d'entreprises réelles du secteur commercial.",
      "Jeux de négociation et prise de décision."
    ],
    guideTitle: "Le Guide Ultime de la Communication Professionnelle"
  },
  "presentations-ecrits": {
    name: "Présentations & Écrits",
    subhead: "Prendre la parole en public et rédiger des rapports professionnels percutants.",
    description: "Développez la confiance nécessaire pour animer des réunions, faire des pitchs de vente et rédiger des livrables de niveau exécutif.",
    duration: "3 heures / semaine",
    group: "Max 8 professionnels",
    level: "B2 à C2 (CECRL)",
    modules: [
      "Prise de parole en public et storytelling professionnel",
      "Structure d'une présentation visuelle et d'impact",
      "Rédaction professionnelle formelle (rapports, notes)"
    ],
    strategy: [
      "Enregistrement vidéo de vos pitchs & feedback individualisé.",
      "Analyse de structures rhétoriques persuasives.",
      "Exercices d'écriture sous contrainte de temps."
    ],
    guideTitle: "Storytelling & Pitchs : Réussir vos présentations en public"
  },
  "entretien-embauche": {
    name: "Entretien d'Embauche Prep",
    subhead: "Décrocher le poste de vos rêves dans une multinationale.",
    description: "Un coaching ultra-ciblé pour répondre avec impact aux questions difficiles des recruteurs et valoriser votre parcours.",
    duration: "Stage court (6h à 12h)",
    group: "Individuel ou mini-groupe",
    level: "B1 à C2 (CECRL)",
    modules: [
      "Rédaction de CV et lettre de motivation percutants",
      "Simulation d'entretiens d'embauche réalistes",
      "Gestion du stress et communication non-verbale"
    ],
    strategy: [
      "Analyse de votre profil et du poste cible.",
      "Technique STAR de réponse aux questions comportementales.",
      "Coaching de négociation de salaire et avantages."
    ],
    guideTitle: "Décrocher son Job : Réussir son Entretien en Langue Étrangère"
  },
  "formation-continue": {
    name: "Formation Continue (CPF)",
    subhead: "Financez votre montée en compétences linguistiques professionnelles.",
    description: "Programmes accrédités et éligibles aux dispositifs de financement professionnels pour booster votre employabilité et vos compétences.",
    duration: "Flexible selon le contrat",
    group: "Max 8 ou Individuel",
    level: "Tous niveaux",
    modules: [
      "Évaluation diagnostique certifiée initiale",
      "Parcours sur-mesure combinant e-learning et cours physiques",
      "Passage d'une certification officielle (TOEIC, Pipplet, etc.)"
    ],
    strategy: [
      "Accompagnement administratif complet pour le financement.",
      "Suivi rigoureux de l'assiduité et rapports.",
      "Préparation intensive à la certification choisie."
    ],
    guideTitle: "Guide Pratique : Comment Financer sa Formation de Langues"
  }
};

export default function ProgramPage() {
  const params = useParams();
  const progKey = (params.prog as string)?.toLowerCase();
  
  const prog = programData[progKey];
  const { openTestModal } = useLevelTest();

  // Lead form download guide state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  if (!prog) {
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
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="size-3.5" /> {"Retour à l'accueil"}
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#BEF264] bg-[#BEF264]/10 px-3 py-1 rounded-full border border-[#BEF264]/20">
              Programme Académique
            </span>
          </div>
          
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            {prog.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {prog.subhead}
          </p>
        </div>
      </section>

      {/* Main Content Details Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Details & Syllabus */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Description */}
            <div className="text-left space-y-4">
              <h3 className="text-xl font-black text-[#0F1E43] tracking-tight">Présentation du Programme</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {prog.description}
              </p>
            </div>

            {/* Metadata Table details */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-slate-100/80 text-left space-y-6">
              <h3 className="text-lg font-black text-[#0F1E43] tracking-tight border-b border-slate-200 pb-3 flex items-center gap-2">
                <Calendar className="size-5 text-[#057A55]" /> Spécifications de la Session
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-left">
                <div className="space-y-1">
                  <p className="font-extrabold uppercase text-slate-400 tracking-wider">Durée &amp; Intensité</p>
                  <p className="font-bold text-[#0F1E43] text-sm">{prog.duration}</p>
                </div>
                <div className="space-y-1">
                  <p className="font-extrabold uppercase text-slate-400 tracking-wider">Taille du Groupe</p>
                  <p className="font-bold text-[#0F1E43] text-sm">{prog.group}</p>
                </div>
                <div className="space-y-1">
                  <p className="font-extrabold uppercase text-slate-400 tracking-wider">Niveau Admis</p>
                  <p className="font-bold text-[#0F1E43] text-sm leading-relaxed">{prog.level}</p>
                </div>
              </div>
            </div>

            {/* Syllabus breakdown */}
            <div className="text-left space-y-6">
              <h3 className="text-xl font-black text-[#0F1E43] tracking-tight flex items-center gap-2">
                <Layers className="size-5 text-[#057A55]" /> {"Programme d'Études / Syllabus"}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {prog.modules.map((module, i) => (
                  <div key={i} className="border border-slate-100 p-6 rounded-2xl flex items-center gap-4 bg-white shadow-3xs">
                    <span className="size-8 rounded-full bg-[#0F1E43]/5 flex items-center justify-center text-xs font-bold text-[#0F1E43] shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-bold">{module}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategy / Approach */}
            <div className="text-left space-y-6">
              <h3 className="text-xl font-black text-[#0F1E43] tracking-tight">Notre Approche Pédagogique</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prog.strategy.map((item, i) => (
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
              <h3 className="text-lg font-black text-[#0F1E43] tracking-tight">Télécharger la Brochure</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Remplissez vos coordonnées pour recevoir immédiatement par email la brochure complète de ce programme avec les tarifs, les dates de sessions et les profils de formateurs.
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
                  <Download className="size-4" /> Obtenir la brochure (PDF)
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
                      alert("Téléchargement de la brochure démarré (simulation).");
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
              {"Prêt à commencer l'aventure linguistique ?"}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold max-w-xl mx-auto">
              {"Bénéficiez d'une orientation gratuite avec nos conseillers pédagogiques pour choisir le format parfait adapté à vos objectifs."}
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={openTestModal}
                className="w-full sm:w-auto bg-[#BEF264] text-[#0F1E43] hover:bg-[#A3E635] border-none font-bold rounded-full px-8 py-6 text-xs shadow-md transition-all duration-300 cursor-pointer"
              >
                Réserver mon orientation gratuite
              </Button>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-white/30 font-bold rounded-full px-8 py-6 text-xs transition-all duration-300 cursor-pointer"
                >
                  Contacter un conseiller
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
