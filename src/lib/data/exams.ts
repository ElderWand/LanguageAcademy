export interface Exam {
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

export const examData: Record<string, Exam> = {
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
    guideTitle: "DELE Preparación: Manual del candidato para el succès officiel"
  }
};
