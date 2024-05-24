import { type LevelParamValue } from "./level.ts";

type Event = { "event": string; "details": string };
type Dialog = (
  | {
    Billy: string;
  }
  | {
    Kerry: string;
  }
  | {
    Meg: string;
  }
  | {
    Lui: string;
  }
)[];

type PatternDescription = {
  pattern: string;
  usage: string[];
  explanation: string;
  words: {
    S?: string[];
    V?: string[];
    O?: string[];
    C?: string[];
    M?: string[];
  }[];
};

type VocabularyDescriptions = {
  word: string;
  class: string;
  usage: string[];
  pronounce: string;
  meaning?: string;
  example: string;
};

export type QuizData = {
  date: string;
  event: Event;
  title: string;
  body: string;
  "word count": number;
  dialog: Dialog;
  quiz: {
    question: string;
    options: string[];
    answer: number;
  }[];
  params: {
    theme: string;
    flavor: string;
    models: {
      main: string;
      novel: string;
    };
    level: LevelParamValue;
  };
  descriptions?: {
    keywords?: string[];
    grammar?: {
      patterns?: PatternDescription[];
      vocabularies?: VocabularyDescriptions[];
    };
  };
};
