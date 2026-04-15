import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Premiere of Romeo and Juliet at the Theatre Royal, Drury Lane",
    "details":
      'On April 12, 1724, Richard Brinsley Sheridan\'s first play, "The Sisters; or, She Deals in Her Sisters\' Troubles," was performed. However, it is not clear if this play was a major success. On this date, also in 1724, John Rich presented the opera, "The Opera of Love and Folly" at Drury Lane Theatre.',
  },
  "date": "2026-04-12",
  "title": "Love in Verona",
  "body":
    "The sun was setting over the city of Verona as Alessandro made his way to the theatre. He had heard that a new play, Romeo and Juliet, would be performed tonight. As he took his seat, he couldn't help but feel a sense of excitement and nervousness. [\n\n He had never seen a play before, and the thought of watching two young lovers from feuding families fall in love on stage both thrilled and intimidated him. The music began, and Alessandro's eyes were drawn to the beautiful Juliet as she sang her heart out. As he watched, he couldn't help but think of his own lost love back home. [\n\n The play was a tragic tale of two lovers from different worlds who fall in love at first sight, only to be torn apart by their families' hatred for each other. Alessandro felt a pang in his heart as he watched the star-crossed lovers' final moments together. He knew that love like this was rare and fleeting, but it gave him hope for his own future.",
  "word count": 176,
  "dialog": [
    {
      "Meg":
        "I loved how the author wrote about the two lovers' first meeting. It was so romantic!",
    },
    {
      "Kerry":
        "Yeah, but what I didn't get was why their families hated each other in the first place. Wasn't it a bit far-fetched?",
    },
    {
      "Lui":
        "Actually, Kerry, that's one of the most interesting aspects of the story. It's based on real historical events and the author did his research.",
    },
    {
      "Billy":
        "But what about the scientific accuracy? Did they get any of the medical stuff right?",
    },
    {
      "Meg":
        "I don't think it was supposed to be a scientifically accurate depiction, Billy. It's a play, not a documentary!",
    },
    {
      "Kerry":
        "Fair point, Meg. But I still want to know more about the history behind it.",
    },
    {
      "Lui":
        "Well, we can definitely discuss that further in class. But for now, let's focus on the themes and symbolism.",
    },
    {
      "Billy":
        "I think what really stood out to me was the theme of love conquering all. It's a beautiful message.",
    },
    {
      "Meg":
        "Absolutely! And I loved how the author showed how even in the face of adversity, true love can prevail.",
    },
  ],
  "quiz": [
    {
      "question": "What city was the play being performed in?",
      "options": [
        "Milan",
        "Rome",
        "Verona",
        "Florence",
        "Venice",
      ],
      "answer": 2,
    },
    {
      "question": "Who wrote the play Romeo and Juliet?",
      "options": [
        "Shakespeare",
        "Lui",
        "Alessandro",
        "Meg",
        "Billy",
      ],
      "answer": 0,
    },
    {
      "question": "What was Alessandro feeling as he watched the play?",
      "options": [
        "Excitement only",
        "Nervousness only",
        "Excitement and nervousness",
        "Sadness only",
        "No emotion",
      ],
      "answer": 2,
    },
    {
      "question":
        "According to Lui, what is one of the most interesting aspects of the story?",
      "options": [
        "It's based on real historical events",
        "It's a scientifically accurate depiction",
        "It has beautiful themes and symbolism",
        "It has a romantic first meeting scene",
        "It's about love conquering all",
      ],
      "answer": 0,
    },
    {
      "question": "What did Billy think was the main theme of the play?",
      "options": [
        "Love is fleeting",
        "Love is rare",
        "Love conquers all",
        "Families should hate each other",
        "It's about historical events",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Theater",
    "flavor": "Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
