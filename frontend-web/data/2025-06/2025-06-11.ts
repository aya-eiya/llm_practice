import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Rite of Spring premieres",
    "details":
      "On June 11, 1913, The Rite of Spring premiered at the Théâtre du Champs-Élysées in Paris, France. The ballet, choreographed by Vaslav Nijinsky and scored by Igor Stravinsky, was a groundbreaking work that caused a scandal due to its avant-garde style and abstract choreography.",
  },
  "date": "2025-06-11",
  "title": "Timekeeper's Rebellion",
  "body":
    "In the fog-shrouded streets of 19th century London, a group of rebels known as the Timekeepers' Guild plotted against the tyrannical government. Their leader, a brilliant clockmaker named Arabella, had created a revolutionary timepiece that could manipulate the fabric of time itself.  \n\nArabella's invention, the Chronos device, had been stolen by the authorities, and she was determined to retrieve it. With her loyal companions, a group of skilled clockwork engineers and inventors, they set out on a perilous journey through the city's hidden passages and abandoned buildings.  \n\nAs they navigated the treacherous streets, they encountered various obstacles, from malfunctioning automatons to rival timekeepers who sought to claim the Chronos device for themselves. But Arabella and her team were undaunted, driven by their desire to free humanity from the shackles of time.  \n\nTheir quest was not without its risks, however. The government's agents were relentless in their pursuit, and the Timekeepers' Guild was on the brink of collapse. Would Arabella and her companions be able to recover the Chronos device and restore hope to the people, or would they succumb to the crushing forces against them?",
  "word count": 185,
  "dialog": [
    {
      "Meg":
        "I just finished reading the novel, and I'm still reeling from the twists and turns! The world-building was so immersive, it felt like I was right there with Arabella and her team as they navigated the fog-shrouded streets of London.",
    },
    {
      "Kerry":
        "Yeah, me too! I loved how the author wove together historical facts and fictional events to create a compelling narrative. And that Chronos device? Mind-blowing!",
    },
    {
      "Billy":
        "I'm so impressed by the way the Timekeepers' Guild was depicted as this secret society working against the government's tyranny. It felt like a commentary on our own world, don't you think?",
    },
    {
      "Lui":
        "Indeed it is, Billy. The themes of rebellion and freedom are timeless, aren't they? And I must say, I appreciate how the author handled the complexities of time travel and clockwork machinery – it's clear they did their research!",
    },
    {
      "Meg":
        "And have you guys talked about the characters yet? Arabella is such a strong protagonist – I love her determination and resourcefulness in the face of adversity.",
    },
    {
      "Kerry":
        "Totally! And what about those automatons? Creepy, right? But also kind of fascinating in their own way...like, have you ever wondered what it would be like to be one?",
    },
    {
      "Billy":
        "Ha! Yeah, I think that's a pretty normal teenage question, Kerry. Anyway, back to the novel – what did you guys think about the ending?",
    },
  ],
  "quiz": [
    {
      "question": "Where was Arabella's revolutionary timepiece stolen from?",
      "options": [
        "The Timekeepers' Guild",
        "The government's headquarters",
        "Arabella's workshop",
        "A rival timekeeper's laboratory",
        "The streets of London",
      ],
      "answer": 2,
    },
    {
      "question": "What did the Chronos device have the power to manipulate?",
      "options": [
        "Time itself",
        "Space and gravity",
        "Healing and energy",
        "Weather patterns and climate",
        "Human emotions and thoughts",
      ],
      "answer": 0,
    },
    {
      "question": "Who was the leader of the Timekeepers' Guild?",
      "options": [
        "Arabella's companion, a clockwork engineer",
        "The government agent in charge of capturing Arabella",
        "A rival timekeeper who sought to claim the Chronos device",
        "Arabella herself, a brilliant clockmaker",
      ],
      "answer": 3,
    },
    {
      "question": "What was the purpose of the Timekeepers' Guild?",
      "options": [
        "To maintain the existing social order and government control",
        "To create a new form of entertainment and spectacle for the people",
        "To manipulate time and space for personal gain",
        "To free humanity from the shackles of time and tyranny",
      ],
      "answer": 3,
    },
    {
      "question":
        "What did Lui appreciate about the author's handling of the novel?",
      "options": [
        "Their use of historical facts and fictional events to create a compelling narrative",
        "The way they wove together the complexities of time travel and clockwork machinery",
        "Their ability to craft strong characters with unique personalities",
        "The themes of rebellion and freedom that were woven throughout the story",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Steampunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
