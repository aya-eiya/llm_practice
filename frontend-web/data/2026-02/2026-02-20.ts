import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Death of Caravaggio",
    "details":
      "On February 20, 1610, Italian Baroque painter Michelangelo Merisi da Caravaggio was stabbed to death in a fight outside a tavern in Porto Ercole, Italy.",
  },
  "date": "2026-02-20",
  "title": "Midnight in Porto Ercole",
  "body":
    "The sun had set over Porto Ercole, casting a golden glow over the cobblestone streets. Michelangelo Merisi da Caravaggio, known to his friends as 'Il Bagatto,' walked alone, lost in thought. His latest brushstroke on canvas was a masterpiece, but the critics would never understand its true value. \n\n The sound of laughter and music drifted from the tavern, drawing Il Bagatto's attention like a moth to flame. He pushed open the door, his eyes scanning the room for a familiar face. That's when he saw him – a young man with a cruel glint in his eye, who had been spreading rumors about Caravaggio's scandalous past. \n\n The air was thick with tension as the two men faced off in the center of the tavern. Words were exchanged, and soon the fight spilled out into the streets. Il Bagatto stumbled, his vision blurring, and that's when he felt the stab. It was a fatal wound, and as he fell to the ground, all he could think about was his unfinished canvas, left behind in the studio.",
  "word count": 175,
  "dialog": [
    {
      "Meg":
        "I'm so obsessed with Caravaggio's art! I love how the author described his techniques.",
    },
    {
      "Kerry":
        "Yeah, but what really gets me is the way the author portrayed the society back then. It was all about reputation and social status.",
    },
    {
      "Lui":
        "That's a great point, Kerry. The novel does an excellent job of showing how people were judged based on their actions and appearance.",
    },
    {
      "Billy":
        "I love how the author used descriptive language to paint a picture in my mind! I felt like I was right there with Caravaggio in Porto Ercole.",
    },
    {
      "Meg":
        "And what really stood out to me is the way the author explored the theme of mortality. It's so poignant and thought-provoking.",
    },
    {
      "Kerry":
        "I know, right? The scene where Caravaggio gets stabbed is just heart-wrenching. I felt like I was on edge the whole time!",
    },
    {
      "Lui":
        "As a history teacher, it's amazing to see how the author wove historical facts into the narrative. It adds so much depth and authenticity.",
    },
    {
      "Billy":
        "I'm going to have to read more about Caravaggio now! This novel has definitely sparked my interest in art history.",
    },
  ],
  "quiz": [
    {
      "question":
        "Who was Michelangelo Merisi da Caravaggio known to his friends as?",
      "options": [
        "Caravaggio",
        "Il Bagatto",
        "Michelangelo",
        "The Artist",
        "The Painter",
      ],
      "answer": 1,
    },
    {
      "question": "What happened to Il Bagatto when he fell to the ground?",
      "options": [
        "He got up and walked away",
        "He was arrested by the police",
        "He received a fatal wound",
        "He started laughing",
        "He forgot about his canvas",
      ],
      "answer": 2,
    },
    {
      "question": "What did Billy say he felt like when reading the novel?",
      "options": [
        "That he was bored",
        "That he was on edge",
        "That he was lost in thought",
        "That he was right there with Caravaggio in Porto Ercole",
        "That he was confused",
      ],
      "answer": 3,
    },
    {
      "question": "What theme did the author explore in the novel?",
      "options": [
        "The power of art",
        "The importance of social status",
        "Mortality and the fleeting nature of life",
        "The impact of technology on society",
        "The role of love in relationships",
      ],
      "answer": 2,
    },
    {
      "question": "Who is Lui, as described in the dialogue?",
      "options": [
        "A 42-year-old male teacher",
        "An 11-year-old boy",
        "A 12-year-old girl",
        "A famous artist from history",
        "A fictional character",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
