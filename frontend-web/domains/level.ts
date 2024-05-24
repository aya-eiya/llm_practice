const LevelTags = [
  "Beginner",
  "Elementary",
  "Intermediate",
  "Upper-Intermediate",
  "Advanced",
  "Proficient",
  "Expert",
  "Master",
] as const;

const LevelEmoji = [
  "🐣",
  "🐥",
  "🐔",
  "🦅",
  "🦅🎖️",
  "🛩️",
  "🛩️🎖️",
  "🚀",
] as const;

const ParamLevelValues = [
  "Level_1",
  "Level_2",
  "Level_3",
  "Level_4",
  "Level_5",
  "Level_6",
  "Level_7",
  "Level_8",
] as const;

export function paramsLevelValues(): typeof ParamLevelValues {
  return ParamLevelValues;
}

export type LevelTag = typeof LevelTags[number];
export type LevelEmoji = typeof LevelEmoji[number];
export type LevelParamValue = typeof ParamLevelValues[number];

export function isLevelTag(value: string): value is LevelTag {
  return LevelTags.includes(value as LevelTag);
}

export function isParamLevelValue(value: string): value is LevelParamValue {
  return ParamLevelValues.includes(value as LevelParamValue);
}

const levelTitle = {
  Level_1: "Basic Sentence Structure and Tenses",
  Level_2: "Modals and Perfect Tenses",
  Level_3: "Passive Voice and Relative Clauses",
  Level_4: "Gerunds and Infinitives",
  Level_5: "Phrasal Verbs and Idioms",
  Level_6: "Noun Clauses and Adjective Clauses",
  Level_7: "Advanced Sentence Structures",
  Level_8: "Native Speaker Level Grammar",
} as const;

const levelDetails = {
  Level_1:
    "Learn about subject-verb agreements and basic sentence types. Understand present and past tenses.",
  Level_2:
    "Explore modal verbs and perfect tenses. Learn about adjectives, adverbs, and comparative forms.",
  Level_3:
    "Master the passive voice and relative clauses. Understand conditionals and participial constructions.",
  Level_4:
    "Learn the usage of gerunds and infinitives. Understand reported speech and question tags.",
  Level_5:
    "Use common phrasal verbs and idiomatic expressions. Correctly use articles and quantifiers.",
  Level_6:
    "Understand noun and adjective clauses. Dive into advanced conditionals.",
  Level_7:
    "Master complex sentence structures. Review and apply all grammar concepts.",
  Level_8:
    "Continue mastering complex sentence structures. Comprehensive review and application of grammar concepts.",
} as const;

export const getLevelTag = (level: LevelParamValue): LevelTag => {
  switch (level) {
    case "Level_1":
      return LevelTags[0];
    case "Level_2":
      return LevelTags[1];
    case "Level_3":
      return LevelTags[2];
    case "Level_4":
      return LevelTags[3];
    case "Level_5":
      return LevelTags[4];
    case "Level_6":
      return LevelTags[5];
    case "Level_7":
      return LevelTags[6];
    case "Level_8":
      return LevelTags[7];
    default:
      throw new Error("Invalid level");
  }
};

export const getLevelEmoji = (level: LevelParamValue): LevelEmoji => {
  switch (level) {
    case "Level_1":
      return LevelEmoji[0];
    case "Level_2":
      return LevelEmoji[1];
    case "Level_3":
      return LevelEmoji[2];
    case "Level_4":
      return LevelEmoji[3];
    case "Level_5":
      return LevelEmoji[4];
    case "Level_6":
      return LevelEmoji[5];
    case "Level_7":
      return LevelEmoji[6];
    case "Level_8":
      return LevelEmoji[7];
    default:
      throw new Error("Invalid level");
  }
};

export const getLevelTitle = (level: LevelParamValue): string => {
  return levelTitle[level];
};

export const getLevelDetails = (level: LevelParamValue): string => {
  return levelDetails[level];
};
