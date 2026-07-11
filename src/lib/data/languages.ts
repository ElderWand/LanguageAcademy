export interface LanguageData {
  name: string;
  fullName: string;
  description: string;
  code: string;
}

export interface LanguageLevel {
  code: string;
  label: string;
  title: string;
  color: string;
  desc: string;
  items: string[];
  btnText: string;
}

export const languageData: Record<string, LanguageData> = {
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

export const levels: LanguageLevel[] = [
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
