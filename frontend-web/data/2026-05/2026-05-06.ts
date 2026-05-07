import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Opening of the Crystal Palace",
    "details":
      "On May 6, 1851, the Crystal Palace was opened to the public for the first time in London's Hyde Park after being built for the Great Exhibition of 1851",
  },
  "date": "2026-05-06",
  "title": "Beyond Crystal Spires",
  "body":
    "In the realm of Aethereia, where crystal spires pierced the sky and shimmered with an otherworldly light, the Great Exhibition of Wonders was about to unfold. The palace of glass and steel, a marvel of modern magic, stood tall in the heart of the enchanted forest. As the sun rose on the day of its grand opening, the air vibrated with anticipation.  \n\n Meanwhile, in the shadowy corners of Aethereia, whispers began to spread about a mysterious artifact hidden within the palace's depths. Some claimed it held the secrets of the ancient ones, while others spoke of its power to control the very fabric of reality. As the crowds flocked to witness the wonders on display, a select few sensed an opportunity to claim this treasured relic for themselves.  \n\n Amidst the whirlwind of curiosity and ambition, a young apprentice named Lyra stumbled upon an ancient text hidden within the palace's labyrinthine library. Unbeknownst to her, she was about to unleash a chain of events that would shake the foundations of Aethereia forever.",
  "word count": 171,
  "dialog": [
    {
      "Meg":
        "I'm still trying to process everything that happened in Aethereia. The world-building was incredible!",
    },
    {
      "Kerry":
        "I know, right? I loved how the author wove together mythology and fantasy elements.",
    },
    {
      "Lui":
        "As an educator, I appreciated how the novel approached complex themes like ambition and power.",
    },
    {
      "Billy":
        "I'm so glad we got to read this! The scientific concepts behind the magical system were really interesting.",
    },
    {
      "Meg":
        "And the characters! Lyra's journey was so compelling. I loved watching her grow and learn from her mistakes.",
    },
    {
      "Kerry":
        "Definitely agree. But what did you guys think of the ending? Was it satisfying or did it leave you hanging?",
    },
    {
      "Lui":
        "I think the author did a great job of leaving some threads open for potential sequels, while still providing closure for the main plot.",
    },
    {
      "Billy":
        "Yeah, I'm definitely hoping there's more to come from this world. It was one of my favorite reads all year!",
    },
  ],
  "quiz": [
    {
      "question": "Where did the Great Exhibition of Wonders take place?",
      "options": [
        "Aethereia's capital city",
        "The palace of glass and steel in the heart of the enchanted forest",
        "The mysterious woman's mansion",
        "Detective Jameson's office",
        "The ancient ruins",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was hidden within the palace's depths according to some?",
      "options": [
        "A magical artifact",
        "A treasured relic",
        "The secrets of the ancient ones",
        "The power to control reality",
        "All of the above",
      ],
      "answer": 3,
    },
    {
      "question": "Who stumbled upon an ancient text in the palace's library?",
      "options": [
        "Lyra",
        "Meg",
        "Kerry",
        "Lui",
        "Billy",
      ],
      "answer": 0,
    },
    {
      "question": "What did Lui appreciate about the novel?",
      "options": [
        "The scientific concepts behind the magical system were really interesting",
        "The world-building was incredible",
        "As an educator, I appreciated how the novel approached complex themes like ambition and power",
        "I'm so glad we got to read this!",
        "Lyra's journey was so compelling",
      ],
      "answer": 2,
    },
    {
      "question": "How did Lui feel about the ending of the novel?",
      "options": [
        "It was unsatisfying and left me hanging",
        "It was satisfying but could have been better",
        "I think the author did a great job of leaving some threads open for potential sequels, while still providing closure for the main plot",
        "I didn't care about the ending",
        "I wish it had ended differently",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Fantasy",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
