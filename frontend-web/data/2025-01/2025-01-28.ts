import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Death of Socrates",
    "details":
      "Socrates was sentenced to death by the Greek authorities and executed by drinking a cup of poison hemlock, as depicted in the famous painting 'The School of Athens' by Raphael.",
  },
  "date": "2025-01-28",
  "title": "The Shadows of Socrates",
  "body":
    "The darkness had descended upon Athens like a shroud, casting a pall of fear over the city. It was as if the very gods themselves had turned against its people. And yet, in this bleak and foreboding landscape, there existed a spark of resistance, a flame that flickered with defiance. \n\n Socrates, the wise and unyielding philosopher, stood at the heart of this rebellion. His words, like a razor's edge, cut through the lies and hypocrisy that had infected the city's leaders. And though he knew that his time was short, that the hemlock's bitter taste awaited him, he remained steadfast in his conviction. \n\n As the night wore on, Socrates walked among the shadows, his eyes burning with a fierce inner light. His words were like a whispered secret, shared only with those who dared to listen. And though the darkness sought to consume him, he remained unbroken, a shining beacon of hope in a world gone mad.",
  "word count": 157,
  "dialog": [
    {
      "Billy": "I loved reading about Socrates in the novel!",
    },
    {
      "Kerry":
        "Yeah, he's so cool! I wish I could be like him, standing up against injustice and all.",
    },
    {
      "Meg":
        "I know, right? He's like a superhero of wisdom. And his love for knowledge is just inspiring!",
    },
    {
      "Lui":
        "That's exactly why we should read this novel in class, kids. It's not just about history, it's about values and principles that still matter today.",
    },
    {
      "Billy":
        "I liked how the author described the darkness as a shroud over Athens. It made me feel like I was right there with Socrates.",
    },
    {
      "Kerry":
        "And the way he talked about the hemlock's bitter taste, it's like... whoa. That's some serious stuff.",
    },
    {
      "Meg":
        "I loved how the author said Socrates' words were like a whispered secret. It made me feel like I was part of something special.",
    },
    {
      "Lui":
        "Well, kids, that's all for today. Remember, wisdom and courage are just as important today as they were back then.",
    },
  ],
  "quiz": [
    {
      "question": "What was Socrates' role in the novel?",
      "options": [
        "A philosopher who opposed the city's leaders",
        "A leader of the Athenian army",
        "A young boy who loved learning",
        "A teacher who inspired his students",
        "None of the above",
      ],
      "answer": 0,
    },
    {
      "question": "What was the atmosphere in Athens like during this time?",
      "options": [
        "Peaceful and calm",
        "Darkness had descended upon it",
        "Fearless and bold",
        "Happy and joyful",
        "A mix of emotions",
      ],
      "answer": 1,
    },
    {
      "question": "How did Socrates' words affect the people?",
      "options": [
        "They were ignored and forgotten",
        "They brought fear to those who listened",
        "They inspired hope in a world gone mad",
        "They had no impact on anyone",
        "None of the above",
      ],
      "answer": 2,
    },
    {
      "question": "What was the significance of reading this novel in class?",
      "options": [
        "It's just about history and facts",
        "It teaches values and principles that still matter today",
        "It's a fun way to learn about Socrates",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question": "What did Billy like about the author's description?",
      "options": [
        "The way it was written in poetry form",
        "The use of metaphors and similes",
        "The darkness being described as a shroud over Athens",
        "None of the above",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Gothic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
