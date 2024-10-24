import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "The first ready-to-wear fashion store, Le Bon Marché, opened in Paris on November 7, 1852.",
    "details":
      "Le Bon Marché was a revolutionary retail concept that offered affordable, off-the-rack clothing to women of all classes and ages. The store's success paved the way for modern ready-to-wear fashion.",
  },
  "date": "2024-11-07",
  "title": "Neon Dreams in Darker Skies",
  "body":
    'In the year 2090, the city of Neo-Tokyo sprawled across the horizon like a sprawling metropolis. The once-clear skies were now a perpetual gray, as if the very heavens themselves had been tainted by the endless pollution that poured from the factories and skyscrapers.\n\n\n\n It was in this world that I lived, a street-smart hacker known only by my handle "Zero Cool." I made a living by infiltrating the mainframe of the corporate conglomerate Omicron Innovations, stealing sensitive data and selling it on the black market. But little did I know, my next job would set off a chain reaction that would change the course of history.\n\n\n\n The client was a mysterious figure known only as "The Architect," who claimed to have knowledge of a top-secret project codenamed "Eclipse." Rumors whispered that Eclipse was a revolutionary new technology capable of purifying the air and water, making it possible for humanity to reclaim the planet from the devastating effects of pollution. I couldn\'t resist the allure of such a promise.',
  "word count": 169,
  "dialog": [
    {
      "Billy":
        "I loved the way the author described Neo-Tokyo, it's like I was right there in the city!",
    },
    {
      "Kerry":
        "Yeah, and I love how Zero Cool is this cool hacker guy, but also kinda reckless",
    },
    {
      "Meg":
        "I'm so intrigued by The Architect, I want to know more about their plan for Eclipse!",
    },
    {
      "Lui":
        "Yes, the novel raises some interesting questions about the consequences of playing with technologies that can shape our world",
    },
    {
      "Billy":
        "And I love how Zero Cool's skills are put to the test in this high-stakes heist, it's like a real-life superhero adventure!",
    },
    {
      "Kerry":
        "I'm not so sure about The Architect, they seem kinda sketchy, but also maybe necessary?",
    },
    {
      "Meg":
        "The world-building is amazing, I can see how the pollution and corruption have taken over Neo-Tokyo",
    },
    {
      "Lui":
        "As a historian, it's fascinating to see how the novel explores the intersection of technology and society",
    },
  ],
  "quiz": [
    {
      "question": "What was the setting for Zero Cool's story?",
      "options": [
        "A futuristic city on Mars",
        "A sprawling metropolis in Neo-Tokyo",
        "A post-apocalyptic world",
        "A medieval village",
        "A modern-day city",
      ],
      "answer": 1,
    },
    {
      "question": "What was Zero Cool's profession?",
      "options": [
        "A scientist",
        "A hacker",
        "A musician",
        "An artist",
        "A chef",
      ],
      "answer": 1,
    },
    {
      "question": "Who was the client that hired Zero Cool for a job?",
      "options": [
        "The Architect",
        "Zero Cool's friend",
        "A rival hacker",
        "The government",
        "A corporation",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the name of the top-secret project that Zero Cool was hired to access?",
      "options": [
        "Eclipse",
        "Omega",
        "Nova",
        "Alpha",
        "Beta",
      ],
      "answer": 0,
    },
    {
      "question":
        "What were Billy, Kerry, Meg, and Lui discussing about Zero Cool's story?",
      "options": [
        "The characters in the story",
        "The plot of the story",
        "The world-building in the story",
        "The themes of the story",
        "The author's writing style",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Fashion",
    "flavor": "Cyberpunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_6",
  },
};
export default data;
