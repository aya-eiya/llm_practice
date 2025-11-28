import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "The opening of the International Design Conference in Aspen, Colorado",
    "details":
      "This was a groundbreaking design conference that brought together leading architects, designers, and artists to discuss modernist principles in architecture and design. The conference featured notable speakers like Frank Lloyd Wright, Eero Saarinen, and Charles Eames.",
  },
  "date": "2025-12-15",
  "title": "The Art of Design: A Journey Through Time",
  "body":
    "The International Design Conference in Aspen, Colorado marked a significant turning point in modern architectural history. As the sun rose over the majestic Rocky Mountains, designers and architects from across the globe gathered to discuss the principles that would shape future generations of buildings and spaces.  \n\n Among the distinguished speakers was Frank Lloyd Wright, who shared his vision for organic architecture that harmonized with nature. His innovative approach emphasized functional simplicity and harmony with the surrounding environment. The renowned architect Eero Saarinen followed, introducing his revolutionary designs for transportation hubs that would later inspire modernist structures worldwide.  \n\n Charles Eames brought a fresh perspective, showcasing his groundbreaking use of new materials and technologies in furniture design. His minimalist approach challenged conventional wisdom about form and function. The conference also featured discussions on the importance of sustainability in design, a concept that would become increasingly relevant in subsequent decades.  \n\n As the conference concluded, it became clear that these innovative thinkers had established a foundation for modern architectural design. Their ideas and principles continue to influence architects and designers today, shaping the built environment of our world.",
  "word count": 184,
  "dialog": [
    {
      "Billy":
        "The conference in Aspen was fascinating! I'm amazed how Frank Lloyd Wright's organic architecture concept still influences modern designs today.",
    },
    {
      "Kerry":
        "Dude, have you seen those transportation hubs inspired by Eero Saarinen? They're so cool! His design philosophy is like a blueprint for future architecture.",
    },
    {
      "Meg":
        "Oh my goodness, Frank Lloyd Wright's vision for harmony with nature is simply magical. I'm totally writing a story about architects who can communicate with trees!",
    },
    {
      "Lui":
        "Young scholars, note how these historical figures shaped modern architectural principles. This novel demonstrates the impact of innovative thinking on our built environment.",
    },
    {
      "Billy":
        "Mr. Lui, I have a question: How did Charles Eames' furniture design influence transportation hubs?",
    },
    {
      "Kerry":
        "Yeah, and why does sustainability in design keep coming up? It's like they knew about climate change way before it was cool!",
    },
    {
      "Meg":
        "I think sustainability is so important because we need to protect our magical natural spaces. Maybe that's why Frank Lloyd Wright emphasized harmony with nature.",
    },
    {
      "Lui":
        "Excellent point, Meg. Billy, your question about Eames' influence touches on the evolution of material use in architecture. This concept continues to shape modern design principles.",
    },
  ],
  "quiz": [
    {
      "question":
        "Who introduced his revolutionary designs for transportation hubs at the International Design Conference in Aspen?",
      "options": [
        "Frank Lloyd Wright",
        "Eero Saarinen",
        "Charles Eames",
        "Billy",
        "Kerry",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was Frank Lloyd Wright's vision for architecture according to Billy?",
      "options": [
        "Minimalist approach",
        "Organic architecture that harmonized with nature",
        "Sustainability in design",
        "Groundbreaking use of new materials",
        "Revolutionary designs for transportation hubs",
      ],
      "answer": 1,
    },
    {
      "question":
        "Which character is amazed by Frank Lloyd Wright's organic architecture concept?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "Charles Eames",
      ],
      "answer": 0,
    },
    {
      "question":
        "Who emphasized the importance of sustainability in design during the conference?",
      "options": [
        "Frank Lloyd Wright",
        "Eero Saarinen",
        "Charles Eames",
        "Billy",
        "Kerry",
      ],
      "answer": 2,
    },
    {
      "question":
        "What material use concept is mentioned by Billy's question according to Lui?",
      "options": [
        "New materials and technologies in furniture design",
        "Sustainability in transportation hubs",
        "Organic architecture with nature",
        "Revolutionary designs for transportation hubs",
        "Minimalist approach",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Design",
    "flavor": "Academic Essay",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_3",
  },
};
export default data;
