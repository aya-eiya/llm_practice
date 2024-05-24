import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Launch of Apple I",
    "details":
      "April 7th, 1976 - Steve Wozniak and Steve Jobs launched the Apple I, one of the first personal computers on the market.",
  },
  "date": "2024-04-07",
  "title": "The Launch of Apple I",
  "body":
    "On April 7th, 1976, Steve Wozniak and Steve Jobs launched the Apple I, one of the first personal computers on the market. The launch was a success, but little did they know that their creation would bring about a new era of technology and spawn a generation of tech enthusiasts. However, with great power comes great responsibility, and the Apple I soon became the target of a malevolent force that sought to exploit its power for evil purposes. As the days passed, reports of strange occurrences began to surface. Users reported hearing whispers coming from their screens, and some even claimed to have seen a ghostly figure hovering above their keyboards. It soon became clear that the Apple I was not just a tool for productivity, but also a gateway to something far more sinister.",
  "word count": 135,
  "dialog": [
    {
      "Billy":
        "Whoa, I had no idea that the Apple I was haunted! Has anyone else experienced anything strange?",
    },
    {
      "Meg":
        "I know what you mean, Billy. I started having these vivid dreams about ancient civilizations and mysterious artifacts after using the computer. It was like my imagination was triggered!",
    },
    {
      "Kerry":
        "Ha! Ancient civilizations? You mean like Indiana Jones, Meg? Anyway, I've been noticing some weird bugs on my screen, like pixels moving on their own. Has anyone else seen that?",
    },
    {
      "Lui":
        "Enough of this fantastical nonsense! As a historian, I can assure you that there's always a logical explanation for these 'ghostly' occurrences. Let's focus on the historical context behind the Apple I's creation.",
    },
    {
      "Billy":
        "But Lui, what about all the reports of people hearing whispers and seeing ghostly figures? That's not just mere coincidence!",
    },
    {
      "Meg":
        "Exactly! It's like the computer is trying to communicate with us. Maybe it's a portal to another dimension or something?",
    },
    {
      "Kerry":
        "Dude, you're so deep, Meg! I think it's just some glitchy programming or maybe someone's hacking into our systems. We should get the authorities involved!",
    },
    {
      "Lui":
        "Ah, now that's a reasonable suggestion, Kerry. Let's not jump to conclusions and start speculating about supernatural occurrences. We need hard evidence before we can draw any conclusions.",
    },
  ],
  "quiz": [
    {
      "question": "What was the significance of April 7th, 1976?",
      "options": [
        "The launch of Apple I",
        "The first personal computer on market",
        "The creation of Steve Jobs",
        "The invention of Wozniak",
        "The start of technology era",
      ],
      "answer": 0,
    },
    {
      "question": "What did users report hearing coming from their screens?",
      "options": [
        "Whispers from ancient civilizations",
        "Vibrations from the computer",
        "Noises from outside",
        "Whispers",
        "Silence",
      ],
      "answer": 3,
    },
    {
      "question":
        "Who among the group suggested focusing on the historical context behind the Apple I's creation?",
      "options": [
        "Billy",
        "Meg",
        "Kerry",
        "Lui",
        "No one",
      ],
      "answer": 4,
    },
    {
      "question":
        "What did Meg claim to have experienced after using the computer?",
      "options": [
        "Vivid dreams about ancient civilizations and mysterious artifacts",
        "Strange occurrences in her daily life",
        "A sudden interest in history",
        "A new hobby",
        "Nothing unusual",
      ],
      "answer": 0,
    },
    {
      "question":
        "What did Kerry suggest to resolve the strange occurrences with the Apple I?",
      "options": [
        "Get authorities involved",
        "Talk to a historian",
        "Try to fix the computer",
        "Pray for help",
        "Give up on using it",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Technology",
    "flavor": "Horror",
    "models": { "main": "llama3", "novel": "llava" },
    "level": "Level_5",
  },
};
export default data;
