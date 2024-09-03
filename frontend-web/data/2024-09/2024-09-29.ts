import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The First Modern Olympic Games Opened",
    "details":
      "The first modern Olympic Games took place on April 6, 1896, at the Panathenaic Stadium in Athens, Greece.",
  },
  "date": "2024-09-29",
  "title": "The Clockwork Crown",
  "body":
    "In the foggy streets of London, 1896, a mysterious clockwork crown was said to have been stolen from the Royal Palace. The thief, known only as 'The Fox,' was rumored to be a master of disguise and a skilled inventor. \n\nI, Inspector Jameson, was tasked with recovering the crown and bringing The Fox to justice. I had heard that The Fox's next target would be the famous Crystal Palace, where the annual Steam Fair was being held. \n\nAs I arrived at the fair, I saw a group of people gathered around a strange machine that seemed to be generating a powerful magnetic field. Suddenly, The Fox appeared out of nowhere and activated the machine, causing a crowd of steam-powered robots to attack me. \n\nI managed to fend off the robots and pursued The Fox through the crowded fairgrounds. We eventually found ourselves in a deserted alleyway, where The Fox revealed that the clockwork crown was just a distraction for a much greater plan...",
  "word count": 163,
  "dialog": [
    {
      "Kerry": "I don't get it, why did The Fox steal the clockwork crown?",
    },
    {
      "Meg":
        "Maybe it was just a distraction for his real plan, which is to sabotage the Steam Fair!",
    },
    {
      "Billy":
        "But that's so cool! I love how The Fox is like a master of disguise and invention!",
    },
    {
      "Lui":
        "Yes, it's clear that The Fox is a clever and resourceful individual. But as a historian, I'm more interested in the social context of the time.",
    },
    {
      "Kerry": "Like what? What does it have to do with the Steam Fair?",
    },
    {
      "Meg":
        "I think Lui means that the Steam Fair was a big event, and The Fox's actions were likely seen as a threat to the established order. It's like he's challenging the status quo!",
    },
    {
      "Billy":
        "That's so true! And I love how The Fox uses his wits and gadgets to outsmart everyone.",
    },
    {
      "Lui":
        "Yes, it's clear that The Fox is a formidable opponent. But as a historian, I'm more interested in the historical context of the time. What were the social and political dynamics like during this period?",
    },
    {
      "Kerry":
        "Ugh, Lui, can we please just talk about the story? It's so cool!",
    },
    {
      "Meg":
        "I think Kerry has a point, Lui. The story is really engaging, and it's fun to speculate about what might have happened next.",
    },
  ],
  "quiz": [
    {
      "question": "What was said to have been stolen from the Royal Palace?",
      "options": [
        "A clockwork robot",
        "The famous Crystal Palace",
        "A steam-powered engine",
        "A mysterious clockwork crown",
        "A valuable gemstone",
      ],
      "answer": 3,
    },
    {
      "question":
        "Where did The Fox and Inspector Jameson find themselves in a deserted alleyway?",
      "options": [
        "In the foggy streets of London",
        "At the Steam Fairgrounds",
        "In the Royal Palace gardens",
        "Near the Crystal Palace",
        "On a steam-powered train",
      ],
      "answer": 1,
    },
    {
      "question": "What was The Fox's real plan, according to Meg?",
      "options": [
        "To steal a valuable gemstone",
        "To sabotage the Steam Fair",
        "To build a clockwork robot",
        "To create a steam-powered engine",
        "To become a master of disguise",
      ],
      "answer": 1,
    },
    {
      "question": "What was The Fox known as, according to Billy?",
      "options": [
        "A master thief",
        "The Steam Engineer",
        "The Clockmaker",
        "The Fox",
        "The Royal Inventor",
      ],
      "answer": 3,
    },
    {
      "question":
        "Who was interested in the social context of the time, according to Lui?",
      "options": [
        "Kerry",
        "Meg",
        "Billy",
        "Lui",
        "Inspector Jameson",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Steampunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
