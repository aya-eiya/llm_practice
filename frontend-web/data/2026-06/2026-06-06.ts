import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Penicillin Discovery",
    "details":
      "Alexander Fleming discovered penicillin on June 6, 1928, while observing bacterial cultures in his laboratory at St Mary's Hospital in London.",
  },
  "date": "2026-06-06",
  "title": "Cogs of Salvation",
  "body":
    "The clockwork machines whirred and ticked in the laboratory, their brass components glinting in the dim light. Professor Thaddeus Wychwood, a man of unyielding passion for discovery, stood before his latest creation - a device designed to harness the power of penicillin. He had heard tales of Alexander Fleming's serendipitous finding, and was determined to unlock its secrets.  \n\n As he adjusted the dials and levers, a faint aroma wafted through the air, carrying with it the essence of a long-lost era. The professor's eyes gleamed with excitement as he watched the machine spring to life, its needles dancing across the dial like a conductor leading an orchestra.  \n\n The room fell silent, save for the soft hum of the machinery and the gentle hiss of steam escaping from the pipes. In this moment, Professor Wychwood felt the weight of centuries of medical neglect lifting, as if the very fabric of time itself was being rewoven. He knew that he stood on the cusp of a revolution - one that would bring salvation to those afflicted by the scourge of disease.",
  "word count": 179,
  "dialog": [
    {
      "Meg":
        "I just can't get over how vividly the author described the laboratory.",
    },
    {
      "Lui":
        "Yes, the author did an excellent job of setting the scene, but I'm more interested in the historical context behind Professor Wychwood's invention.",
    },
    {
      "Billy":
        "I was thinking about that too! Do you think it's true that penicillin was discovered by accident?",
    },
    {
      "Kerry":
        "Whoa, hold on! If Professor Wychwood is trying to harness the power of penicillin, doesn't that mean he's already aware of its properties? So, it can't be an accident, right?",
    },
    {
      "Meg":
        "Actually, I think Kerry has a point. Maybe the author meant that Professor Wychwood is building upon Fleming's discovery rather than discovering it by chance himself.",
    },
    {
      "Lui":
        "That's a fair interpretation, Meg. And Billy, yes, penicillin was discovered by Alexander Fleming when he left his petri dish uncovered, leading to the growth of mold and the subsequent discovery of its antibacterial properties.",
    },
    {
      "Billy":
        "Whoa, that's so cool! I didn't know that. But what do you guys think about Professor Wychwood's device? Do you think it could actually work?",
    },
  ],
  "quiz": [
    {
      "question": "What is Professor Wychwood's goal with his invention?",
      "options": [
        "To discover a new disease",
        "To create a cure for penicillin",
        "To harness the power of penicillin",
        "To build a clockwork machine",
        "To understand Alexander Fleming's discovery",
      ],
      "answer": 2,
    },
    {
      "question": "How was penicillin originally discovered?",
      "options": [
        "By accident when Professor Wychwood left his petri dish uncovered",
        "By chance when Alexander Fleming left his petri dish uncovered",
        "As a result of thorough research by Professor Wychwood",
        "Through extensive experimentation",
        "Not mentioned in the text",
      ],
      "answer": 2,
    },
    {
      "question": "What is the setting for Professor Wychwood's invention?",
      "options": [
        "A hospital room",
        "A laboratory",
        "A library",
        "A park",
        "A classroom",
      ],
      "answer": 1,
    },
    {
      "question": "Who discovered penicillin by accident?",
      "options": [
        "Professor Wychwood",
        "Alexander Fleming",
        "Meg",
        "Lui",
        "None of the above",
      ],
      "answer": 2,
    },
    {
      "question": "What is the purpose of Professor Wychwood's machine?",
      "options": [
        "To cure a specific disease",
        "To harness the power of penicillin",
        "To build a clockwork machine",
        "To create a new discovery",
        "To understand Alexander Fleming's discovery",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Science",
    "flavor": "Steampunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_8",
  },
};
export default data;
