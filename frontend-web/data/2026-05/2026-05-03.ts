import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Euclid's Elements Published",
    "details":
      "May 3, 1484: The first printed edition of Euclid's 'Elements' was published in Venice by Piero da Nicola.",
  },
  "date": "2026-05-03",
  "title": "Cogs of Knowledge",
  "body":
    "The year was 1484, and the city of Venice was abuzz with activity. Scholars and craftsmen gathered at the docks to await the arrival of a precious cargo. Among them was a young inventor named Alessandro, who had spent years studying the ancient texts of Euclid. His eyes widened as he gazed upon the crates bearing the title 'Elements' in gold lettering.  \n\n As Piero da Nicola's team unloaded the books, Alessandro felt his mind racing with possibilities. The ideas within these covers promised to revolutionize his understanding of geometry and mathematics. He envisioned towering clockwork machines, their gears whirring as they computed the secrets of the universe.  \n\n With quill in hand, Alessandro began to pour over the pages, marveling at the clarity of Euclid's language. The concepts of point, line, and plane became tangible realities, like intricate mechanisms waiting to be assembled. As he worked, the air grew thick with excitement, as if the very fabric of reality was unfolding before his eyes.",
  "word count": 163,
  "dialog": [
    {
      "Billy":
        "I love how Alessandro's mind works, it's like he's unlocking secrets of the universe!",
    },
    {
      "Lui":
        "That's a great observation, Billy. The way Alessandro sees the world as mechanisms to be assembled is a testament to the power of human ingenuity.",
    },
    {
      "Meg":
        "I know, right? And the way Euclid's ideas are presented is so clear and concise, it's like magic!",
    },
    {
      "Kerry":
        "Magic? I don't think so! It's all about logic and reason. But I do love how Alessandro envisions these clockwork machines.",
    },
    {
      "Billy":
        "Yeah, and the way he sees the world as a puzzle to be solved is amazing. I feel like that's something we can all learn from.",
    },
    {
      "Lui":
        "Exactly! And it's not just about solving puzzles, but also about understanding the underlying principles of the universe.",
    },
    {
      "Meg":
        "I wish I could see the world like Alessandro does. It sounds so exciting and full of wonder!",
    },
    {
      "Kerry":
        "I think we can all learn to see the world in a new light if we just take the time to observe and think critically.",
    },
  ],
  "quiz": [
    {
      "question": "In what year did the story take place?",
      "options": [
        "1483",
        "1484",
        "1485",
        "1490",
        "1500",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the name of the city where scholars and craftsmen gathered to await a precious cargo?",
      "options": [
        "Rome",
        "Venice",
        "Florence",
        "Milan",
        "Turin",
      ],
      "answer": 1,
    },
    {
      "question": "Who is the young inventor in the story?",
      "options": [
        "Piero da Nicola",
        "Alessandro",
        "Billy",
        "Lui",
        "Kerry",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was the title of the precious cargo that scholars and craftsmen gathered to await?",
      "options": [
        "Elements",
        "Geometry",
        "Mathematics",
        "Algebra",
        "Calculus",
      ],
      "answer": 0,
    },
    {
      "question": "According to Billy, what is unique about Alessandro's mind?",
      "options": [
        "It works very slowly",
        "It works very quickly",
        "It's like he's unlocking secrets of the universe!",
        "It doesn't think at all",
        "It thinks in a completely different way",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Mathematics",
    "flavor": "Steampunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
