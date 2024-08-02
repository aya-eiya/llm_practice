import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The First Photographs Are Captured",
    "details":
      'Joseph Nicéphore Niépce uses a process called heliography to capture the first permanent photograph, "View from the Window at Le Gras", on August 11, 1826.',
  },
  "date": "2024-08-11",
  "title": "The Last Refuge",
  "body":
    "The world had ended in a catastrophic fire that consumed everything in its path. I stood outside what was once my home, now nothing but a pile of ashes and rubble. My family and friends were all gone, victims of the inferno that had ravaged our planet.  \n\n As I walked through the desolate landscape, I stumbled upon a small building that seemed to have withstood the flames. It was an old library, its doors still intact despite the chaos that surrounded it. I pushed them open and stepped inside, my eyes adjusting to the dim light within.  \n\n The shelves were bare, but on a single table in the center of the room, I found a small book. It was a child's dictionary, worn and faded from years of use. As I flipped through its pages, I realized that it was the only thing that could bring me hope in this new world. I knew then that I had to find others who shared my desire for knowledge and understanding.",
  "word count": 169,
  "dialog": [
    {
      "Meg":
        "I loved the way the author described the world after the catastrophic fire. It felt so real!",
    },
    {
      "Lui":
        "Yes, the author's use of language was indeed powerful. It made me feel like I was right there with the protagonist.",
    },
    {
      "Kerry":
        "I didn't expect to feel so emotional about a post-apocalyptic story, but this one got me!",
    },
    {
      "Billy":
        "I loved the theme of hope and rebuilding in the face of destruction. It's so important for our times.",
    },
    {
      "Meg":
        "And I loved how the author used the child's dictionary as a symbol of hope. It was such a beautiful touch.",
    },
    {
      "Lui":
        "As an educator, I appreciated how the story highlighted the importance of knowledge and understanding in rebuilding society.",
    },
    {
      "Kerry":
        "I'm just glad it wasn't too sad. I mean, I loved it, but it's always tough to deal with stories about the end of the world.",
    },
    {
      "Billy":
        "Yeah, it was a great balance between hope and realism. And the characters were all so well-developed!",
    },
  ],
  "quiz": [
    {
      "question": "What happened to the world at the beginning of the story?",
      "options": [
        "It was taken over by aliens",
        "It ended in a catastrophic fire",
        "It was frozen in time",
        "It was flooded with water",
        "It was invaded by robots",
      ],
      "answer": 1,
    },
    {
      "question": "What did the protagonist find inside the library?",
      "options": [
        "A large pile of books",
        "A small child's dictionary",
        "A group of survivors",
        "A hidden room",
        "A secret door",
      ],
      "answer": 1,
    },
    {
      "question": "Why was the library able to withstand the flames?",
      "options": [
        "It had a special fireproof roof",
        "It was made of metal",
        "It was built on a hill",
        "It had a strong foundation",
        "It was just lucky",
      ],
      "answer": 0,
    },
    {
      "question":
        "What did the protagonist realize about the child's dictionary?",
      "options": [
        "It was useless in the new world",
        "It was only for kids",
        "It was the only thing that could bring hope",
        "It was a relic of the past",
        "It was just a book",
      ],
      "answer": 2,
    },
    {
      "question": "What theme is present in the story?",
      "options": [
        "The importance of power and control",
        "The danger of playing with fire",
        "The theme of hope and rebuilding",
        "The value of knowledge and understanding",
        "The impact of climate change",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
