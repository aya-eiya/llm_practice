import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Armistice Day",
    "details":
      "The Armistice of Compiègne was signed on November 11, 1918, marking the end of World War I.",
  },
  "date": "2024-11-11",
  "title": "The Shadow of Compiègne",
  "body":
    "It was November 11, 1918, and the war was finally over. But for Emily, a young journalist, the real battle had just begun. She had received a cryptic message from an anonymous source, hinting at a dark secret buried beneath the Armistice celebrations.  \n\n As she navigated through the crowded streets of Compiègne, Emily stumbled upon a mysterious figure who seemed to be watching her every move. He introduced himself as Jacques, a former soldier with ties to the French Resistance. His words were laced with urgency and fear, hinting at a conspiracy that threatened to destroy everything they had fought for.  \n\n Together, Emily and Jacques embarked on a perilous journey to uncover the truth behind the Armistice Day celebrations. They encountered smugglers, black marketeers, and even members of the German army who seemed to be hiding in plain sight. As the night wore on, Emily began to realize that the war was far from over – and that she had become a pawn in a deadly game of cat and mouse.",
  "word count": 171,
  "dialog": [
    {
      "Kerry":
        "I loved how Emily was like a detective, trying to uncover the truth behind the Armistice celebrations!",
    },
    {
      "Meg":
        "I know, right? She's so brave and determined! And I loved how Jacques was mysterious and cryptic.",
    },
    {
      "Billy":
        "Yeah, I liked how they worked together to solve the mystery. It made me think about how history is always more complicated than what we learn in school.",
    },
    {
      "Lui":
        "Exactly, Billy! That's a great point. And Kerry, you're right that Emily was like a detective. She had to navigate through all these different people and clues to figure out what was going on.",
    },
    {
      "Kerry":
        "And I loved how the author made it feel like we were there with Emily, experiencing the excitement and danger of the time. It was so immersive!",
    },
    {
      "Meg":
        "I know, me too! And Lui, you're always saying how history is important, but this book really made me see that. It's not just something that happened a long time ago...",
    },
    {
      "Billy":
        "Yeah, it's still relevant today! Like, think about all the secrets and conspiracies that are going on right now, even if we don't know about them.",
    },
    {
      "Lui":
        "That's true. And Kerry, you're right that the book was very immersive. I felt like I was there with Emily, trying to figure out what was going on.",
    },
  ],
  "quiz": [
    {
      "question": "What was Emily's role in the story?",
      "options": [
        "A young soldier",
        "A journalist",
        "A smuggler",
        "A black marketeer",
        "A member of the German army",
      ],
      "answer": 1,
    },
    {
      "question":
        "Who introduced himself to Emily as a former soldier with ties to the French Resistance?",
      "options": [
        "Jacques",
        "Kerry",
        "Meg",
        "Billy",
        "Lui",
      ],
      "answer": 0,
    },
    {
      "question": "What was Emily and Jacques trying to uncover?",
      "options": [
        "A secret buried beneath the Armistice celebrations",
        "A conspiracy that threatened to destroy everything they had fought for",
        "A mystery about a mysterious figure",
        "A story about a war that was far from over",
        "A truth behind the Armistice Day celebrations",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did Emily realize as she navigated through the crowded streets of Compiègne?",
      "options": [
        "That the war was finally over",
        "That the real battle had just begun",
        "That she had become a pawn in a deadly game of cat and mouse",
        "That she was being watched by a mysterious figure",
        "That she was lost",
      ],
      "answer": 2,
    },
    {
      "question":
        "Who said that history is always more complicated than what we learn in school?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "Jacques",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Ethics",
    "flavor": "Crime",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
