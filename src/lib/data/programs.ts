export interface Program {
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

export const programData: Record<string, Program> = {
  "kids-academy": {
    name: "Kids Academy (5 - 7 ans)",
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
