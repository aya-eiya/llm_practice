import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Paris Exhibition (Exposition Universelle) opens",
    "details":
      "Designed by Charles Girault, the exposition featured a large glass and iron structure that showcased Beaux-Arts architecture. The event marked the beginning of the development of modernist architectural styles in France.",
  },
  "date": "2026-04-14",
  "title": "Shadows of the Eiffel",
  "body":
    "In the year 2154, the city of Paris was rebuilt on top of the old one, with a new Eiffel Tower that shone brighter than ever before. But little did anyone know, a strange phenomenon had begun to occur - buildings and structures from the past were starting to materialize in the present. At first, it was just small things, like a vintage streetlamp here or a forgotten fountain there. \n\n But as time went on, more and more objects began to appear. People started to notice that the old glass and iron structure of the Exposition Universelle was reappearing in the heart of the city. It was as if the past and present were colliding, creating a rift in the space-time continuum. \n\n Dr. Emma Taylor, a renowned physicist, was called upon to investigate the anomaly. She spent countless hours studying the phenomenon, trying to understand its cause and how to stop it. But the more she learned, the more she realized that this was not just a simple case of temporal displacement - something much deeper and more sinister was at play.",
  "word count": 182,
  "dialog": [
    {
      "Meg":
        "I'm so fascinated by the idea of buildings from the past appearing in the present. It's like science fiction come to life!",
    },
    {
      "Kerry":
        "Yeah, it sounds like a total rip-off of that movie 'Back to the Future' where they travel back in time and stuff.",
    },
    {
      "Lui":
        "Actually, Kerry, I think you're misunderstanding the concept here. This is more about temporal displacement and the consequences of altering the timeline.",
    },
    {
      "Billy":
        "But what if it's not just buildings? What if people from the past start appearing too? That would be amazing!",
    },
    {
      "Meg":
        "I know, right? It's like a doorway to another world. I can totally imagine myself walking through it and meeting people from different eras.",
    },
    {
      "Kerry":
        "Hold on, you guys are getting carried away. We don't even know what's causing this phenomenon yet. Let's not jump to conclusions.",
    },
    {
      "Lui":
        "Kerry has a point, Meg. We need to approach this with a clear and open mind, considering all the possibilities before jumping to conclusions.",
    },
    {
      "Billy":
        "But Dr. Taylor is trying to figure it out! Maybe we can help her or learn from her research. It's so cool that she gets to be the scientist in charge of figuring out what's happening!",
    },
  ],
  "quiz": [
    {
      "question": "What year was the city of Paris rebuilt?",
      "options": [
        "2153",
        "2154",
        "2155",
        "2160",
        "2187",
      ],
      "answer": 1,
    },
    {
      "question": "According to Dr. Emma Taylor, what is happening in Paris?",
      "options": [
        "Buildings from the past are disappearing.",
        "Buildings and structures from the past are appearing.",
        "The city of Paris is being rebuilt.",
        "The Eiffel Tower is changing color.",
        "People from the past are arriving.",
      ],
      "answer": 1,
    },
    {
      "question": "Who was called upon to investigate the anomaly?",
      "options": [
        "Dr. Emma Taylor",
        "Kerry",
        "Lui",
        "Billy",
        "Meg",
      ],
      "answer": 0,
    },
    {
      "question":
        "What is the name of the Exposition Universelle structure that reappeared in Paris?",
      "options": [
        "The Eiffel Tower",
        "The Louvre Museum",
        "The Arc de Triomphe",
        "The Palace of Versailles",
        "The Glass and Iron Structure",
      ],
      "answer": 4,
    },
    {
      "question":
        "What is the possible consequence of this phenomenon, according to Lui?",
      "options": [
        "People from the past start appearing.",
        "Buildings from the future arrive.",
        "The timeline changes.",
        "The city's history disappears.",
        "A rift in space-time continuum forms.",
      ],
      "answer": 4,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Science Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
