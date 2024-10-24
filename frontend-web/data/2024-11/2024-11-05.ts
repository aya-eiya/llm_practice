import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": 'Premiere of the film "Psycho"',
    "details":
      "The film 'Psycho' by Alfred Hitchcock premiered at the Paris premiere on November 5, 1960.",
  },
  "date": "2024-11-05",
  "title": "Ashes of Tomorrow",
  "body":
    "The once blue skies were now a perpetual grey, a reminder of the world that was lost. The air reeked of smoke and ash, a constant presence that seemed to cling to everything it touched.  \n\n I trudged through the desolate landscape, my boots kicking up clouds of dust with each step. The silence was deafening, broken only by the occasional crackle of flames or the distant rumble of thunder. It was as if the world itself was mourning its own demise.  \n\n As I walked, the ruins of a city came into view. Once a thriving metropolis, it was now a mere shadow of its former self. Buildings stood as skeletal remains, their windows blown out, their doors hanging crookedly from hinges that seemed to be made of twisted metal. It was a grim reminder of what we had lost.  \n\n I approached the ruins cautiously, my eyes scanning for any sign of danger. As I stepped inside, I noticed something peculiar - a small, makeshift garden had sprouted in the midst of the devastation. A tiny flower bloomed in the center, its petals a vibrant splash of color against the drab backdrop.  \n\n It was a fleeting moment of beauty, a testament to the resilience of life in the face of overwhelming adversity. As I stood there, a glimmer of hope flickered within me - perhaps, just perhaps, we could rebuild from these ashes and create a brighter future.",
  "word count": 237,
  "dialog": [
    {
      "Meg":
        "I loved how the novel showed hope in the face of adversity, even though it was set in a post-apocalyptic world.",
    },
    {
      "Kerry":
        "That's what I love about this novel - it doesn't shy away from the hard stuff, but still manages to leave you with a sense of optimism.",
    },
    {
      "Billy":
        "I think what really stood out to me was the way the author described the world before the apocalypse. It sounded so beautiful and vibrant, which made the contrast with the post-apocalyptic world even more striking.",
    },
    {
      "Lui":
        "Yes, the author's use of language is indeed vivid and immersive. I appreciate how they wove together themes of hope, resilience, and the human spirit in the face of overwhelming adversity.",
    },
    {
      "Meg":
        "I completely agree with Billy - the way the author described the world before was so captivating! And I loved how the novel showed the importance of small moments of beauty and connection even in the darkest times.",
    },
    {
      "Kerry":
        "That's true, Meg. The novel really emphasizes that even in the most desperate situations, there's always a glimmer of hope to be found. It's a powerful message that I think we can all learn from.",
    },
    {
      "Billy":
        "I never thought about it that way, Kerry, but you're absolutely right! The novel does show us that even when things seem darkest, there's always a chance for renewal and rebuilding.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the color of the skies in the post-apocalyptic world?",
      "options": [
        "Blue",
        "Grey",
        "Red",
        "Green",
        "Yellow",
      ],
      "answer": 1,
    },
    {
      "question":
        "How did the author describe the world before the apocalypse?",
      "options": [
        "Desolate and grey",
        "Beautiful and vibrant",
        "Dreary and dull",
        "Thriving but poor",
        "Cold and unfriendly",
      ],
      "answer": 1,
    },
    {
      "question": "What was blooming in the midst of the devastation?",
      "options": [
        "A small garden",
        "A tiny flower",
        "A big tree",
        "A large building",
        "Nothing at all",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was a testament to the resilience of life in the face of overwhelming adversity?",
      "options": [
        "The destruction of the city",
        "The silence and smoke",
        "The small, makeshift garden with a tiny flower blooming in it",
        "The ruins of the city",
        "Nothing at all",
      ],
      "answer": 2,
    },
    {
      "question": "What message did the novel emphasize?",
      "options": [
        "Even in the darkest times, there's always a chance for renewal and rebuilding",
        "There's no hope in post-apocalyptic world",
        "The small moments of beauty are not important",
        "The destruction is final",
        "Life will never be the same",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
