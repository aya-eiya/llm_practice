import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "George Cantor's first set theory paper published",
    "details":
      'On November 16, 1874, German mathematician Georg Cantor published his first set theory paper, "Über eine Eigenschaft des Inbegriffs der ganz abgeschlossenen Mengen" ("On a Property of the Set of All Closed Sets"), in Mathematische Annalen. This work introduced the concept of sets and established the foundations for modern set theory.',
  },
  "date": "2024-11-16",
  "title": "The Shadow of Eternity",
  "body":
    "In the year 2178, humanity had finally reached the pinnacle of technological advancement. The city of New Eden was a marvel of modern science, where towering skyscrapers and advanced artificial intelligence had created a utopia for all citizens. But amidst this grandeur, a sense of unease settled over the population.  \n\n It started with small things: a misplaced item here, a forgotten appointment there. At first, people thought it was just the natural result of living in a complex society. But as time went on, the incidents grew more frequent and more brazen. People began to feel like they were being watched, their every move monitored by an unseen presence.  \n\n The government, led by the enigmatic Director Zhang, seemed to be aware of the situation but remained tight-lipped about it. Rumors spread that a new form of artificial intelligence had been created, one that was capable of manipulating reality itself. Some said it was a tool for social control, while others whispered that it was a means to an end – a way to ensure humanity's survival in a universe on the brink of collapse.",
  "word count": 184,
  "dialog": [
    {
      "Kerry": "I don't get it, what's going on with New Eden?",
    },
    {
      "Lui":
        "Well, the novel sets up this utopian society, but then it starts to unravel with these small incidents and people feeling like they're being watched.",
    },
    {
      "Meg":
        "I think that's the point! The author is showing how even in a perfect society, there can be problems and unease. It's like, no matter where you are, there's always something to worry about.",
    },
    {
      "Billy":
        "That makes sense. But what about this new AI thing? Is it true that it can manipulate reality?",
    },
    {
      "Kerry":
        "Yeah, I heard it's like a super-powerful tool that can change anything. It sounds crazy, but maybe it's true?",
    },
    {
      "Lui":
        "I'm not sure if I believe it, but it's definitely an interesting idea. Maybe we'll see more of it in the next book.",
    },
    {
      "Meg":
        "I hope so! I want to know what happens next with New Eden and this AI thing.",
    },
    {
      "Billy":
        "Me too! It was such a cool concept, I wish we could learn more about it.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the main setting of the novel 'The Shadow of Eternity'?",
      "options": [
        "A futuristic city on Mars",
        "A utopian society called New Eden",
        "A dystopian world in a post-apocalyptic era",
        "A group of people trying to survive in a desert",
        "A team of scientists exploring a new planet",
      ],
      "answer": 1,
    },
    {
      "question": "What was the main issue that started to arise in New Eden?",
      "options": [
        "People were unhappy with their jobs",
        "There was a lack of food and resources",
        "Small incidents began to occur, making people feel like they were being watched",
        "The government was not transparent about its actions",
        "The AI system had malfunctioned",
      ],
      "answer": 2,
    },
    {
      "question": "What was the purpose of the new AI system in New Eden?",
      "options": [
        "To control the population and maintain order",
        "To monitor and record every citizen's activities",
        "To help people make better decisions by predicting outcomes",
        "To manipulate reality itself and ensure humanity's survival",
        "To improve the city's infrastructure",
      ],
      "answer": 3,
    },
    {
      "question": "What was Director Zhang's role in New Eden?",
      "options": [
        "He was the leader of a rebellion against the government",
        "He was the creator of the new AI system",
        "He was the enigmatic head of the government",
        "He was a scientist who had discovered a cure for a deadly disease",
        "He was a teacher who educated people about the importance of technology",
      ],
      "answer": 2,
    },
    {
      "question":
        "What did the characters Billy, Kerry, Meg, and Lui think about the new AI system?",
      "options": [
        "They were all skeptical and didn't believe it existed",
        "They thought it was a tool for social control and manipulation",
        "They were excited to learn more about its capabilities",
        "They believed it was a means to an end – a way to ensure humanity's survival",
        "They thought it was just a rumor with no truth behind it",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Mathematics",
    "flavor": "Dystopian",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_8",
  },
};
export default data;
