import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Landing on the Moon",
    "details":
      'On July 20, 1969, American astronauts Neil Armstrong and Edwin "Buzz" Aldrin became the first people to set foot on the lunar surface during the Apollo 11 mission.',
  },
  "date": "2026-04-19",
  "title": "Moonwalkers: The First Footprints on History",
  "body":
    'On July 20, 1969, a historic event took place when American astronauts Neil Armstrong and Edwin "Buzz" Aldrin became the first humans to set foot on the lunar surface. Their mission, Apollo 11, was a groundbreaking achievement that marked the culmination of years of hard work and dedication by thousands of scientists, engineers, and technicians.  \n\n The moonwalkers\' incredible feat inspired generations to pursue careers in science, technology, engineering, and mathematics (STEM). It also sparked a wave of interest in space exploration, leading to numerous missions and discoveries that continue to shape our understanding of the universe. As Armstrong famously declared, "That\'s one small step for man, one giant leap for mankind," the moonwalkers\' achievement remains an enduring symbol of human ingenuity and curiosity.  \n\n The Apollo 11 mission was a testament to international cooperation and collaboration. NASA worked closely with its counterparts in Russia, Europe, and other countries to achieve this monumental goal. The successful landing on the moon demonstrated that even the most ambitious goals can be achieved through determination, teamwork, and innovation. As we continue to explore the vast expanse of space, we draw inspiration from the brave men who took their first steps on the lunar surface.',
  "word count": 199,
  "dialog": [
    {
      "Billy":
        "I loved reading about the Apollo 11 mission! It's amazing how they worked together to achieve such a huge goal.",
    },
    {
      "Kerry":
        "Yeah, it's crazy to think about how far we've come since then. I mean, we have robots on Mars now!",
    },
    {
      "Meg":
        "I know, right? The Apollo 11 mission was so inspiring! It makes me want to learn more about space and the scientists who made it happen.",
    },
    {
      "Lui":
        "Well, students, I'm glad you're interested in learning about history. But let's not forget that the Apollo 11 mission wasn't just a achievement of American ingenuity, but also a testament to international cooperation.",
    },
    {
      "Billy":
        "That's so true, Mr. Lui! The fact that they worked with other countries to achieve this goal is really impressive. It shows us that we can accomplish great things when we work together.",
    },
    {
      "Kerry":
        "Yeah, and it's not just about working together. It's also about taking risks and trying new things. I mean, who would have thought that humans could walk on the moon?",
    },
    {
      "Meg":
        "I know, right? The Apollo 11 mission was like a giant leap for mankind. And it's still inspiring people today to pursue careers in science and technology.",
    },
    {
      "Lui":
        "Exactly! The Apollo 11 mission is an enduring symbol of human ingenuity and curiosity. And I think we can all learn from their example.",
    },
  ],
  "quiz": [
    {
      "question":
        "On what date did American astronauts Neil Armstrong and Edwin 'Buzz' Aldrin become the first humans to set foot on the lunar surface?",
      "options": [
        "July 19, 1969",
        "July 20, 1969",
        "August 1, 1969",
        "September 15, 1969",
        "October 10, 1969",
      ],
      "answer": 1,
    },
    {
      "question":
        "Who famously declared 'That's one small step for man, one giant leap for mankind'?",
      "options": [
        "Neil Armstrong",
        "Edwin 'Buzz' Aldrin",
        "John Glenn",
        "Alan Shepard",
        "Jim Lovell",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the name of the Apollo mission that achieved this historic event?",
      "options": [
        "Apollo 10",
        "Apollo 11",
        "Apollo 12",
        "Apollo 13",
        "Apollo 14",
      ],
      "answer": 1,
    },
    {
      "question":
        "According to Billy, what made him love reading about the Apollo 11 mission?",
      "options": [
        "The astronauts were brave and adventurous.",
        "It's amazing how they worked together to achieve such a huge goal.",
        "They were the first humans to walk on the moon.",
        "All of the above",
      ],
      "answer": 1,
    },
    {
      "question":
        "What, according to Lui, is an enduring symbol of human ingenuity and curiosity?",
      "options": [
        "The Apollo 11 mission",
        "Space exploration",
        "Robotics on Mars",
        "International cooperation in space",
        "The astronauts' bravery",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Academic Essay",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
