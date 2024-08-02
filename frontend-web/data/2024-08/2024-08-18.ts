import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Great Fire of London",
    "details":
      "A devastating fire that swept through the central parts of London, England, starting on September 2, 1666 and continuing until it was brought under control on September 5. The fire destroyed a large part of the city, including over 13,000 houses, 87 churches, and 44 guild halls.",
  },
  "date": "2024-08-18",
  "title": "The Great Fire of London",
  "body":
    "It was a dark and stormy night in September 1666 when the Great Fire of London began to spread its devastating flames across the city. The fire started at a bakery on Pudding Lane, where sparks from the oven ignited nearby hay and wood. The owner, Thomas Farrinor, tried to put out the small blaze but it quickly grew into a massive inferno that seemed to have a life of its own.  \n\nThe people of London were in a state of panic as they watched their homes and businesses being consumed by the flames. The fire moved with incredible speed, fueled by strong winds and the largely wooden construction of the city's buildings. As it spread, people began to flee in terror, carrying what little they could salvage from their burning homes.  \n\nThe King himself, Charles II, was awakened in the night by the news of the fire and quickly ordered his guards to evacuate the palace. He watched in horror as the city he loved burned to ashes before his very eyes. The Great Fire of London would eventually be brought under control on September 5th, but not before it had destroyed over 13,000 houses, 87 churches, and 44 guild halls.",
  "word count": 202,
  "dialog": [
    {
      "Billy":
        "I just finished reading about the Great Fire of London, it's such an interesting event in history!",
    },
    {
      "Kerry":
        "Yeah, I can imagine! It must have been really scary for the people living there.",
    },
    {
      "Meg":
        "I loved how you described the fire spreading quickly and the King trying to evacuate the palace. It felt so real!",
    },
    {
      "Lui":
        "Well, it's great that you're learning about these historical events, kids. History is all around us, and we can learn a lot from the past.",
    },
    {
      "Billy":
        "I know, right? I've been reading about different fires in history and how they affected people's lives. It's really fascinating!",
    },
    {
      "Kerry":
        "I'm more interested in the superheroes who might have stopped the fire, but I guess that's not what happened.",
    },
    {
      "Meg":
        "Maybe we can write a story together where the Great Fire of London is stopped by our favorite superhero? That would be so cool!",
    },
    {
      "Lui":
        "Now, now, let's focus on learning about history and its actual events. We can save the superheroes for another time.",
    },
  ],
  "quiz": [
    {
      "question": "What started the Great Fire of London?",
      "options": [
        "A fire in a bakery on Pudding Lane",
        "Strong winds in the city",
        "The King's guards trying to evacuate the palace",
        "The largely wooden construction of the city's buildings",
        "A massive storm on September 5th",
      ],
      "answer": 0,
    },
    {
      "question": "How many houses were destroyed by the Great Fire of London?",
      "options": [
        "6,000",
        "10,000",
        "13,000",
        "20,000",
        "30,000",
      ],
      "answer": 2,
    },
    {
      "question": "What was the King's reaction to the fire?",
      "options": [
        "He went back to sleep",
        "He ordered his guards to evacuate the palace",
        "He tried to put out the small blaze himself",
        "He watched in horror as the city burned",
        "He didn't care about the city",
      ],
      "answer": 1,
    },
    {
      "question": "Who was awakened by the news of the fire?",
      "options": [
        "Charles II",
        "Thomas Farrinor",
        "Billy's dad",
        "Lui",
        "The King himself",
      ],
      "answer": 0,
    },
    {
      "question":
        "How many guild halls were destroyed by the Great Fire of London?",
      "options": [
        "10",
        "20",
        "30",
        "40",
        "44",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Historical Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
