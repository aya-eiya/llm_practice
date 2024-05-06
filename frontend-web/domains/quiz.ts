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
  descriptions?: {
    keywords?: string[];
    grammar?: {
      patterns?: PatternDescription[];
      vocabularies?: VocabularyDescriptions[];
    };
  };
};
