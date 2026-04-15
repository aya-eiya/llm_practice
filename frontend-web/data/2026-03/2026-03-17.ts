import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Maimonides' Death",
    "details":
      "Mar 17th is the date of death of Moses Maimonides, a Jewish philosopher and physician who wrote The Guide for the Perplexed in the 12th century.",
  },
  "date": "2026-03-17",
  "title": "The Weight of Wisdom",
  "body":
    "In the scorching desert of Marrakech, where shadows danced like snakes on the walls, I stumbled upon a mysterious text hidden within the pages of Maimonides' Guide for the Perplexed. The ink seemed to seep into my skin as I read about the philosopher's quest for truth and knowledge. Suddenly, the labyrinthine alleys of the city became a maze of confusion, and I felt the weight of wisdom upon me.  \n\n The wind whispered secrets in my ear, telling tales of ancient civilizations that rose like phoenixes from the ashes. I saw myself as a mere mortal, trying to grasp the threads of eternity. My mind reeled as I tried to comprehend the paradoxes of existence, where reason and faith clashed like titans.  \n\n And yet, in this whirlwind of confusion, I found solace in the words of Maimonides: 'The truth is not for all men, but only for those who seek it.' As I wandered through the city's markets, the vendors' cries and the scent of spices became a symphony of meaning. In that moment, I understood that the pursuit of knowledge was not about arriving at answers, but about embracing the mystery itself.",
  "word count": 193,
  "dialog": [
    {
      "Kerry":
        "I'm still trying to figure out what it means! I mean, Maimonides' Guide for the Perplexed has nothing to do with the story, right?",
    },
    {
      "Meg":
        "Actually, Kerry, I think that's the point of the story. It's not just about the characters in the novel, but also about how the writer is trying to convey deeper ideas and meanings.",
    },
    {
      "Billy":
        "I like how the writer uses metaphors to describe the city of Marrakech. It makes me feel like I'm right there with the main character!",
    },
    {
      "Lui":
        "That's a great observation, Billy! The use of sensory details is a key element in creating an immersive reading experience.",
    },
    {
      "Kerry":
        "But isn't it weird how the writer switches between describing the city and talking about Maimonides' philosophy? I mean, what does that have to do with anything?",
    },
    {
      "Meg":
        "I think Kerry's right, but at the same time, it's kind of cool how the writer is trying to connect these seemingly unrelated ideas. It makes me wonder if there's more to it than just a simple story.",
    },
    {
      "Lui":
        "Well, I think that's what makes this novel so interesting - it challenges you to think about things in new ways and consider different perspectives. It's not always easy, but it's definitely thought-provoking!",
    },
  ],
  "quiz": [
    {
      "question": "Where did the narrator stumble upon a mysterious text?",
      "options": [
        "In the scorching desert of Marrakech",
        "In Maimonides' Guide for the Perplexed",
        "In a library in Paris",
        "At a bookstore in Marrakech",
        "In the city's markets",
      ],
      "answer": 1,
    },
    {
      "question": "What did the wind whisper to the narrator?",
      "options": [
        "Secrets of ancient civilizations that rose like phoenixes from the ashes",
        "The pursuit of knowledge was not about arriving at answers, but about embracing the mystery itself",
        "The truth is not for all men, but only for those who seek it",
        "A riddle of the Sphinx",
        "A poem by a famous poet",
      ],
      "answer": 0,
    },
    {
      "question": "What did Maimonides say in his philosophy?",
      "options": [
        "The truth is not for all men, but only for those who seek it",
        "Reason and faith clash like titans",
        "The pursuit of knowledge was not about arriving at answers, but about embracing the mystery itself",
        "Marrakech is a city of shadows and light",
        "The desert is a place of wonder",
      ],
      "answer": 0,
    },
    {
      "question":
        "Who made an observation about the writer's use of metaphors?",
      "options": [
        "Kerry",
        "Meg",
        "Billy",
        "Lui",
        "The narrator",
      ],
      "answer": 2,
    },
    {
      "question":
        "What did Lui say was a key element in creating an immersive reading experience?",
      "options": [
        "The use of sensory details",
        "The connection between unrelated ideas",
        "The switching between describing the city and talking about Maimonides' philosophy",
        "The writer's use of metaphors",
        "The pursuit of knowledge",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Philosophy",
    "flavor": "Surrealism",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
