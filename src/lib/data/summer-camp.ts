export interface SummerCampFormula {
  title: string;
  age: string;
  desc: string;
  schedule: string;
  inclusions: string[];
  color: string;
  badge: string;
}

export const formulas: SummerCampFormula[] = [
  {
    title: "Junior Explorers",
    age: "8 - 12 ans",
    desc: "Une initiation ludique et active aux langues étrangères à travers des ateliers créatifs, du théâtre et des sports collectifs.",
    schedule: "Lundi au Vendredi — 9h00 à 13h00",
    inclusions: [
      "15 heures de cours d'anglais/espagnol par semaine",
      "Matériel pédagogique ludique et cahier de bord",
      "Ateliers artistiques, théâtre et jeux de rôle",
      "Collation saine incluse chaque matin",
      "Rapport de fin de stage et certificat"
    ],
    color: "bg-[#93C5FD]", // Sky Blue
    badge: "Initiation & Fun"
  },
  {
    title: "Teen Leaders & Prep",
    age: "13 - 17 ans",
    desc: "Un stage intensif d'expression orale, de débats et de préparation aux examens internationaux, combiné avec des activités de leadership.",
    schedule: "Lundi au Vendredi — 9h00 à 16h00 (Journée Complète)",
    inclusions: [
      "25 heures de cours immersifs par semaine",
      "Coaching prise de parole en public et débats",
      "Préparation ciblée aux examens (IELTS / TOEFL / DELF)",
      "Déjeuners complets inclus au réfectoire",
      "Sorties culturelles et visites encadrées"
    ],
    color: "bg-[#6EE7B7]", // Mint Green
    badge: "Performance & Focus"
  },
  {
    title: "Adultes Immersion",
    age: "18 ans et plus",
    desc: "Un programme d'immersion totale axé sur la fluidité de la conversation professionnelle, la confiance et les compétences globales.",
    schedule: "Sessions flexibles en journée ou cours du soir",
    inclusions: [
      "20 heures de cours de conversation intensive",
      "Ateliers business, rédaction d'emails et négociation",
      "Sessions de réseautage et tables de conversation",
      "Accès illimité à la plateforme e-learning de l'académie",
      "Bilan individuel de compétences linguistiques"
    ],
    color: "bg-[#C084FC]", // Lavender
    badge: "Fluency & Career"
  }
];
