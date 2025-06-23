import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Apollo 15 spacecraft splashes down",
    "details":
      "On July 26, 1971, the United States' Apollo 15 spacecraft splashed down in the Pacific Ocean, ending a historic mission to the Moon that included the first Lunar Roving Vehicle (LRV) used on any celestial body.",
  },
  "date": "2025-07-26",
  "title": "Moonlit Odyssey",
  "body":
    "July 26th, 1971 was a day that would etch itself in the annals of history as I stood on the cusp of our moon mission. The Apollo 15 spacecraft, our trusty vessel for this odyssey, had just splashed down in the Pacific Ocean, bringing to a close an incredible journey that had pushed the boundaries of human exploration.  \n\nAs I gazed out at the waves, my mind drifted back to the countless hours spent preparing for this moment. The grueling training sessions, the meticulous planning, and the unwavering dedication from our team had all culminated in this singular achievement. Our mission had not only expanded humanity's presence on the moon but also marked a significant milestone in our quest for space exploration.  \n\nAs I reflected on the triumphs of Apollo 15, I couldn't help but feel a sense of pride and awe at the incredible feat we had accomplished. The first Lunar Roving Vehicle had been successfully deployed, allowing us to traverse the lunar surface with unprecedented ease and precision. This groundbreaking achievement would pave the way for future space missions, forever changing the trajectory of human history.",
  "word count": 188,
  "dialog": [
    {
      "Meg":
        "I'm still in awe of the Apollo 15 mission's success! The idea that they were able to deploy the first Lunar Roving Vehicle on the moon's surface is just mind-boggling!",
    },
    {
      "Lui":
        "Indeed, Meg. It was a historic achievement that marked a significant milestone in space exploration. I'm glad you're interested in learning more about it.",
    },
    {
      "Kerry":
        "I know, right? The fact that they were able to travel across the lunar surface with such ease and precision is just incredible. It's amazing what humans can accomplish when we work together towards a common goal!",
    },
    {
      "Billy":
        "I've been doing some research on the Apollo 15 mission, and I came across an article that mentioned how the astronauts had to undergo rigorous training before embarking on the journey. Did they really train for so long?",
    },
    {
      "Meg":
        "Yes, Billy! The article I read said that the astronauts spent months preparing for every possible scenario, from navigating through space debris to dealing with unexpected emergencies on the lunar surface.",
    },
    {
      "Lui":
        "That's correct, Meg. The training process was indeed extensive and demanding. But it's a testament to their dedication and commitment to making this mission a success.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the name of the spacecraft used for the Apollo 15 mission?",
      "options": [
        "Apollo 14",
        "Apollo 15",
        "Gemini 10",
        "Lunar Roving Vehicle",
        "Space Shuttle",
      ],
      "answer": 1,
    },
    {
      "question": "In what year did the Apollo 15 mission take place?",
      "options": [
        "1969",
        "1970",
        "1971",
        "1972",
        "1973",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was deployed on the lunar surface during the Apollo 15 mission?",
      "options": [
        "First Moonwalkers",
        "Lunar Roving Vehicle",
        "Space Station",
        "Rocket Engine",
        "Moon Crater",
      ],
      "answer": 1,
    },
    {
      "question": "Who is discussing the Apollo 15 mission?",
      "options": [
        "Billy and Kerry",
        "Meg and Lui",
        "Apollo 14 astronauts",
        "Gemini 10 astronauts",
        "Space Shuttle crew",
      ],
      "answer": 1,
    },
    {
      "question": "How many years old is Billy according to the dialogue?",
      "options": [
        "9",
        "11",
        "12",
        "13",
        "14",
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
