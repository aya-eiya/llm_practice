import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The First Human Spaceflight",
    "details":
      "On January 12, 1961, Soviet cosmonaut Yuri Gagarin became the first human to journey into outer space when he orbited the Earth in Vostok 1, a small, spherical spacecraft that carried him on a single orbit of the planet.",
  },
  "date": "2025-01-11",
  "title": "The Weight of Vostok",
  "body":
    "It was a chilly winter morning in 1961 when the world held its breath as Yuri Gagarin prepared to embark on a historic journey. The Soviet cosmonaut's eyes gleamed with determination as he donned his pressurized suit, his mind fixed on the unforgiving vastness of space. [\n\n As Vostok 1 soared into the sky, the crowd below watched in awe, their collective gaze tracing the trajectory of the spacecraft like a comet. The air was electric with anticipation, the very atmosphere seeming to vibrate with the promise of a new era. [\n\n And yet, as Gagarin's fingers closed around the control stick, a sense of weight settled upon him, a burden he would carry for the rest of his life. The world's hopes and fears, the dreams and nightmares of generations, now rested on his shoulders like an unyielding mantle. [\n\n With each passing moment, the silence grew thicker, as if the very fabric of time itself had been suspended. Gagarin's heart pounded in his chest, a solitary beat that echoed through the void, a reminder that even in the depths of space, humanity remained tied to its fragile existence.",
  "word count": 190,
  "dialog": [
    {
      "Billy":
        "This novel is incredible! I loved how it captured the moment when Yuri Gagarin became the first human to go to space.",
    },
    {
      "Kerry":
        "I know, right? It's so cool that they were able to describe the feeling of weightlessness and the anticipation of the crowd.",
    },
    {
      "Meg":
        "I loved how it described the vastness of space and the sense of wonder that Yuri must have felt. It made me feel like I was there with him.",
    },
    {
      "Lui":
        "Well, well, well. Look who's got a passion for history! This novel is indeed a great way to experience the thrill of exploration.",
    },
    {
      "Billy":
        "I loved how it showed the contrast between Yuri's bravery and the weight of responsibility that came with it. It was so real!",
    },
    {
      "Kerry":
        "And the way it described the silence of space and the beat of Yuri's heart is just amazing! So poetic!",
    },
    {
      "Meg":
        "I think what I loved most about this novel is how it made me feel like I was a part of history. It was so immersive.",
    },
    {
      "Lui":
        "Ah, yes. History has a way of making us feel connected to the past, doesn't it? This novel is a great example of that.",
    },
  ],
  "quiz": [
    {
      "question": "Who was the first human to go to space?",
      "options": [
        "Yuri Gagarin",
        "Neil Armstrong",
        "Buzz Aldrin",
        "Alan Shepard",
        "John Glenn",
      ],
      "answer": 0,
    },
    {
      "question": "What was the name of Yuri Gagarin's spacecraft?",
      "options": [
        "Vostok 1",
        "Soyuz 1",
        "Apollo 11",
        "Gemini 12",
        "Mercury 7",
      ],
      "answer": 0,
    },
    {
      "question": "How did Billy feel about the novel?",
      "options": [
        "It was okay, but I didn't like it.",
        "I loved it!",
        "I hated it.",
        "I was bored.",
        "I was confused.",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did Kerry say about the novel's description of Yuri Gagarin's experience?",
      "options": [
        "It was too boring.",
        "It was okay, but I didn't like it.",
        "I loved how it captured the moment when Yuri Gagarin became the first human to go to space.",
        "I hated it.",
        "I was confused.",
      ],
      "answer": 2,
    },
    {
      "question":
        "What did Meg say about being immersed in history through the novel?",
      "options": [
        "It was too boring.",
        "I loved how it made me feel like I was a part of history, but it didn't work for me.",
        "I hated it.",
        "I was confused.",
        "I loved what it said.",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Historical Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_8",
  },
};
export default data;
