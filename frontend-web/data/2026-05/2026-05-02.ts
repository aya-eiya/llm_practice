import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Fall of Saigon",
    "details":
      "The capital of South Vietnam, Saigon, fell to the North Vietnamese forces, marking the end of the Vietnam War and the reunification of North and South Vietnam under communist rule.",
  },
  "date": "2026-05-02",
  "title": "Shadows of Saigon",
  "body":
    "In the realm of Azura, where the skies raged with perpetual twilight, the city of Eldrador stood as a bastion against the darkness. Its people, akin to the mythical phoenix, had risen from the ashes of their own past traumas. For centuries, they had weathered the tempests of war and famine, their resilience forged in the crucible of suffering.  \n\n Yet, as the winds of change whispered through the streets, a sense of foreboding settled upon Eldrador's inhabitants. The once-mighty walls, now breached by the insidious creep of shadow, seemed to writhe in agony. It was as if the very fabric of their world had begun to unravel, leaving naught but an abyssal void.  \n\n As night descended, casting a sable veil over the city, a lone figure emerged from the shadows. Kael, a warrior-mage with eyes that burned like embers in the dark, stood at the precipice of his people's fate. He knew that to save Eldrador, he must confront the abyss head-on, lest their world succumb to the unyielding darkness.",
  "word count": 170,
  "dialog": [
    {
      "Kerry":
        "I'm so glad we finally got to read this novel! The world-building in Azura is insane!",
    },
    {
      "Meg":
        "I know, right? I was totally transported into the story. The way Kael's character developed really resonated with me.",
    },
    {
      "Lui":
        "Glad you both enjoyed it. I think what struck me most was the themes of resilience and hope in the face of adversity.",
    },
    {
      "Billy":
        "I loved how the author wove together myth and history to create this rich tapestry. And that magical system? Mind-blowing!",
    },
    {
      "Kerry":
        "Totally agree with Billy on that. I've been thinking, what if we applied some of those principles to our own world's problems?",
    },
    {
      "Meg":
        "Ooh, I'd love to see a sequel! The ending was so cliffhanger-y. Do you guys think Kael will be able to save Eldrador?",
    },
    {
      "Lui":
        "Well, we'll just have to wait and see. But in the meantime, let's discuss some of the historical parallels drawn in the novel.",
    },
  ],
  "quiz": [
    {
      "question":
        "Where does the city of Eldrador stand as a bastion against the darkness?",
      "options": [
        "In the realm of Azura",
        "Outside the realm of Azura",
        "In a different world",
        "On a mountain",
        "At sea",
      ],
      "answer": 0,
    },
    {
      "question": "What have the people of Eldrador been forged in?",
      "options": [
        "War and famine",
        "Peace and prosperity",
        "Famine only",
        "War only",
        "Both war and peace",
      ],
      "answer": 0,
    },
    {
      "question": "Who emerged from the shadows at night?",
      "options": [
        "Kerry",
        "Meg",
        "Lui",
        "Billy",
        "Kael",
      ],
      "answer": 4,
    },
    {
      "question": "What did Kerry say about the novel?",
      "options": [
        "I'm so glad we finally got to read this novel!",
        "The world-building in Azura is insane!",
        "I loved how the author wove together myth and history",
        "The magical system? Mind-blowing!",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question":
        "What does Lui think about the historical parallels drawn in the novel?",
      "options": [
        "It was a bit confusing",
        "I'd love to see a sequel!",
        "The ending was so cliffhanger-y",
        "We'll just have to wait and see.",
        "None of the above",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Politics",
    "flavor": "Fantasy",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_8",
  },
};
export default data;
