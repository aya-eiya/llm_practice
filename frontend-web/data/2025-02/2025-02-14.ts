import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Telephone Call Made",
    "details":
      "The first telephone call was made by Alexander Graham Bell on February 14, 1876.",
  },
  "date": "2025-02-14",
  "title": "Neon Dreams",
  "body":
    "In the depths of Neo-Tokyo, where the city's neon lights pierced the dark sky like a thousand screaming sirens, I found myself lost in a world of virtual reality. The year was 2090, and the boundaries between man and machine had blurred beyond recognition.  \n\n As a skilled Netrunner, I had always been one step ahead of the game, but this latest mission had me questioning my own identity. A mysterious client had hired me to infiltrate the highly secure database of Omicron Innovations, where top-secret research on a revolutionary new technology was being conducted.  \n\n My cyberdeck, an advanced neural interface that allowed me to navigate the virtual world with ease, hummed to life as I prepared for the heist. But something didn't feel right. The client's profile had been sketchy, and I couldn't shake the feeling that I was being set up.  \n\n With a deep breath, I launched myself into the virtual world, my avatar materializing in the Omicron Innovations server room. The security systems were more complex than I had anticipated, but my skills as a Netrunner allowed me to navigate the labyrinthine network with ease. I was getting close, I could feel it.",
  "word count": 195,
  "dialog": [
    {
      "Billy": "I love the novel! I'm so glad we got to read it as a class.",
    },
    {
      "Meg":
        "Yeah, me too! The world-building was amazing. I loved how immersive it felt.",
    },
    {
      "Lui":
        "I'm glad you both enjoyed it. The author did a great job of creating a sense of realism in the story.",
    },
    {
      "Kerry":
        "I know, right? And the Netrunner thingy was so cool! I wish we could do something like that in real life...",
    },
    {
      "Billy":
        "Ha! Yeah, me too. But it's not just about the tech - it's about the people and their relationships.",
    },
    {
      "Meg":
        "Exactly! And the way the author explored themes of identity and morality was so thought-provoking.",
    },
    {
      "Lui":
        "That's one of my favorite aspects of the novel, too. It really makes you think about what's important in life.",
    },
    {
      "Kerry":
        "So, who wants to start a Netrunner club? We could meet up and try out some virtual reality stuff...",
    },
  ],
  "quiz": [
    {
      "question": "What is the setting of the story?",
      "options": [
        "A futuristic city",
        "A medieval castle",
        "A modern office building",
        "A virtual reality world",
        "A historical battlefield",
      ],
      "answer": 3,
    },
    {
      "question": "Who is the protagonist of the story?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "The Netrunner",
      ],
      "answer": 4,
    },
    {
      "question": "What is the occupation of the Netrunner?",
      "options": [
        "Hackers",
        "Programmers",
        "Cyberdeck users",
        "Netrunners",
        "Security experts",
      ],
      "answer": 3,
    },
    {
      "question": "Why did the Netrunner feel uneasy about the mission?",
      "options": [
        "The client's profile was sketchy",
        "The security systems were too complex",
        "The virtual world was too immersive",
        "The Netrunner had a prior commitment",
        "The Netrunner was not paid enough",
      ],
      "answer": 0,
    },
    {
      "question": "What did Kerry suggest starting?",
      "options": [
        "A book club",
        "A Netrunner club",
        "A programming team",
        "A virtual reality experience",
        "A security company",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Technology",
    "flavor": "Cyberpunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
