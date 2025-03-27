import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Bauhaus is founded",
    "details":
      "On April 1, 1919, Walter Gropius founded the Bauhaus school in Weimar, Germany.",
  },
  "date": "2025-02-25",
  "title": "The Whispering Walls of Weimar",
  "body":
    "In the heart of Weimar, a city where art and magic entwined, stood an ancient building with walls that whispered secrets to those who listened. The Bauhaus school, founded by Walter Gropius, had once flourished within its halls, but now it lay dormant, its energies waiting to be awakened.  \n\n As the sun dipped into the horizon, casting a warm orange glow over the city, a young apprentice named Lena began to sense the whispers. She felt an inexplicable connection to the building, as if the walls were calling to her. With a thrill of excitement, she stepped inside, and the whispers grew louder.  \n\n The air was thick with anticipation as Lena wandered through the empty corridors, her footsteps echoing off the walls. She discovered hidden rooms, forgotten studios, and secret gardens, each one revealing a piece of the Bauhaus's mysterious past. As she explored, the whispers coalesced into a single, haunting phrase: 'The art of magic lies within the lines.'",
  "word count": 160,
  "dialog": [
    {
      "Billy": "I just finished reading the novel! I loved it!",
    },
    {
      "Meg":
        "Me too! The way the author wove magic into the story was incredible.",
    },
    {
      "Kerry":
        "Yeah, and I love how Lena's connection to the Bauhaus building was a big part of the story. It felt so real!",
    },
    {
      "Lui":
        "I appreciate how the novel touched on themes of history, art, and magic. It was a unique blend.",
    },
    {
      "Billy":
        "The way the author described the whispers in the walls was so vivid! I felt like I was right there with Lena.",
    },
    {
      "Meg":
        "I know what you mean, Billy. The writing was beautiful. And I loved how the story explored the idea that 'the art of magic lies within the lines'.",
    },
    {
      "Kerry":
        "Yeah, it was a really cool concept. And the way the author used it to tie everything together was genius.",
    },
    {
      "Lui":
        "Well said, Kerry. The novel did a great job of balancing action and introspection. It was a pleasure to read.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was happening in Weimar as the sun dipped into the horizon?",
      "options": [
        "The Bauhaus school was being renovated",
        "A young apprentice named Lena began to sense the whispers",
        "The city was getting ready for a festival",
        "The air was thick with anticipation",
        "The buildings were getting old",
      ],
      "answer": 1,
    },
    {
      "question": "What did Lena discover in the Bauhaus building?",
      "options": [
        "A hidden room, forgotten studios, and secret gardens",
        "An ancient magic book, a mysterious artifact, and a magical portal",
        "A beautiful garden, a small library, and a cozy cafe",
        "A big hall, a small kitchen, and a bathroom",
        "A park, a playground, and a swimming pool",
      ],
      "answer": 0,
    },
    {
      "question": "What was the phrase that the whispers coalesced into?",
      "options": [
        "The art of magic lies within the lines",
        "The Bauhaus is a magical place",
        "The building has a secret history",
        "The walls are whispering secrets",
        "The city is full of mysteries",
      ],
      "answer": 0,
    },
    {
      "question":
        "What did Lena feel as she stepped inside the Bauhaus building?",
      "options": [
        "She felt scared and alone",
        "She felt excited and curious",
        "She felt happy and calm",
        "She felt sad and tired",
        "She felt angry and frustrated",
      ],
      "answer": 1,
    },
    {
      "question": "Who was one of the readers who loved the novel?",
      "options": [
        "Billy, Kerry, Meg, Lui, or None of them",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Fantasy",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
