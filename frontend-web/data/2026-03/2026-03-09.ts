import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Bauhaus School Moves to Dessau",
    "details":
      "On March 9, 1925, the Bauhaus school of art and design relocated from Weimar to Dessau, Germany, where it would remain until 1932 when it was closed by the Nazi regime.",
  },
  "date": "2026-03-09",
  "title": "Rebirth in Bauhaus",
  "body":
    "The Bauhaus School Moves to Dessau \n\n In 1925, the renowned Bauhaus school relocated from Weimar to Dessau, Germany. This significant move marked a new era for the institution, which had been struggling financially and facing opposition from conservative forces in Weimar. The relocation was seen as an opportunity to start anew, with the promise of fresh ideas and innovative approaches to art and design.  \n\n The Bauhaus school's legacy is one of revolutionizing modern art and design. Its founder, Walter Gropius, envisioned a unified approach to art, integrating various disciplines such as painting, sculpture, and architecture. The school's emphasis on experimentation and collaboration led to the development of new techniques and styles that would go on to influence generations of artists and designers.  \n\n However, the Nazi regime's rise to power in 1932 marked a dark chapter for the Bauhaus. With its focus on modernity and international influences, the school was seen as a threat to traditional German culture. The Nazis forced the closure of the Bauhaus, effectively silencing the innovative voices that had been emerging from it. Despite this setback, the Bauhaus's impact continues to be felt in the art world today.",
  "word count": 191,
  "dialog": [
    {
      "Billy":
        "I'm so fascinated by the Bauhaus school! Did you know they revolutionized modern art and design?",
    },
    {
      "Kerry":
        "Yeah, it's crazy how one school can change everything. I wonder what would have happened if they didn't move to Dessau.",
    },
    {
      "Meg":
        "I love the idea of a unified approach to art, integrating different disciplines like painting, sculpture, and architecture. It sounds so ahead of its time!",
    },
    {
      "Lui":
        "Exactly, Meg! The Bauhaus school's emphasis on experimentation and collaboration led to some amazing innovations. But, as you know, their story took a dark turn with the rise of the Nazi regime.",
    },
    {
      "Billy":
        "Yeah, it's heartbreaking how they were forced to close down. But I'm glad we're still feeling their impact today!",
    },
    {
      "Kerry":
        "Totally! It just goes to show that art and design can be a powerful force for change. Maybe one day we'll see a similar revolution in our own time.",
    },
    {
      "Meg":
        "I'd love to see it! And who knows, maybe some of the students at Bauhaus would have made amazing superheroes...",
    },
    {
      "Lui":
        "Ha! Well, perhaps we can discuss that further in class. But for now, let's just say that the Bauhaus school remains an important part of history and continues to inspire us today.",
    },
  ],
  "quiz": [
    {
      "question": "Where did the Bauhaus school relocate from in 1925?",
      "options": [
        "Berlin",
        "Dessau",
        "Weimar",
        "Munich",
        "Hamburg",
      ],
      "answer": 1,
    },
    {
      "question": "Who was the founder of the Bauhaus school?",
      "options": [
        "Walter Gropius",
        "Ludwig Mies van der Rohe",
        "Le Corbusier",
        "Frank Lloyd Wright",
        "Eero Saarinen",
      ],
      "answer": 0,
    },
    {
      "question": "What was the main focus of the Bauhaus school?",
      "options": [
        "Architecture and sculpture only",
        "Unified approach to art, integrating various disciplines",
        "Only painting and design",
        "Experimental music and dance",
        "Theater and performance arts",
      ],
      "answer": 1,
    },
    {
      "question": "Why was the Bauhaus school forced to close down?",
      "options": [
        "Financial struggles",
        "Lack of interest from students",
        "Nazi regime's opposition to modern art",
        "Natural disaster",
        "Move to a different location",
      ],
      "answer": 2,
    },
    {
      "question": "What is the legacy of the Bauhaus school?",
      "options": [
        "Revolutionizing traditional German culture",
        "Influencing only architecture and sculpture",
        "Focusing on experimental music and dance",
        "Impact limited to art and design in Weimar",
        "Changing modern art and design forever",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Academic Essay",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
