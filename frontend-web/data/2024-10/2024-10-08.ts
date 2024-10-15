import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "The first performance of 'Hamlet' by William Shakespeare took place on October 8, 1603.",
    "details":
      "It was performed at The Globe Theatre in London and was a major success, running for several performances before it was temporarily closed due to the plague.",
  },
  "date": "2024-10-08",
  "title": "Love at The Globe",
  "body":
    "It was a chilly autumn evening in 1603 when William Shakespeare's 'Hamlet' premiered at The Globe Theatre in London. Elizabeth, a young and talented actress, had just landed the lead role of Ophelia. As she took to the stage, her eyes locked with those of Hamlet's prince, and time seemed to stand still.  \n\nThe performance was a huge success, running for several nights before The Globe Theatre was temporarily closed due to the plague. Elizabeth's talent had won over the hearts of the audience, and she became an overnight sensation. As the days passed, she found herself falling deeply in love with her co-star, Prince Hamlet.  \n\nBut alas, their love was forbidden. Prince Hamlet was already betrothed to another woman, and Elizabeth knew that she could never be with him. Yet, they couldn't help but steal glances at each other during rehearsals and performances. Their love became the stuff of whispers and gossip among the theatre community.  \n\nAs the plague swept through London, The Globe Theatre was closed, and Elizabeth was forced to flee the city. She left behind her heart, which she had given so freely to Prince Hamlet. Though they were apart, their love remained strong, and they continued to secretly communicate with each other through letters.",
  "word count": 209,
  "dialog": [
    {
      "Billy":
        "I loved the way the author wove Shakespeare's 'Hamlet' into this modern retelling!",
    },
    {
      "Kerry":
        "Yeah, I was surprised by how well it worked! But what did you think of Elizabeth and Prince Hamlet's love story?",
    },
    {
      "Meg":
        "I know, right? It was so romantic! And I loved how they had to keep their love a secret because of the prince's betrothal.",
    },
    {
      "Lui":
        "As an educator, I appreciated how the novel used historical context to add depth to the story. But what did you all think of the way the plague affected Elizabeth and Prince Hamlet?",
    },
    {
      "Billy":
        "I thought it was really interesting! It made me think about how people in different time periods dealt with similar challenges.",
    },
    {
      "Kerry":
        "Yeah, and I loved how the author showed how even in difficult times, love can still be a powerful force. It was really inspiring!",
    },
    {
      "Meg":
        "Definitely! And I have to say, I'm excited to see where Elizabeth's story goes from here... maybe there will be a sequel?",
    },
    {
      "Lui":
        "Well, as we discussed in class, the novel does leave some things open to interpretation. But what are your thoughts on how the author handled the themes of love and sacrifice?",
    },
  ],
  "quiz": [
    {
      "question": "What was the historical event that occurred in 1603?",
      "options": [
        "The plague swept through London",
        "William Shakespeare's 'Hamlet' premiered at The Globe Theatre",
        "Elizabeth became an overnight sensation",
        "Prince Hamlet was already betrothed to another woman",
        "Love at The Globe began",
      ],
      "answer": 1,
    },
    {
      "question":
        "Why did Elizabeth and Prince Hamlet's love story have to be kept a secret?",
      "options": [
        "Because of the plague",
        "Because Prince Hamlet was already betrothed to another woman",
        "Because Elizabeth was not good enough for Prince Hamlet",
        "Because The Globe Theatre was closed",
        "Because of their social status",
      ],
      "answer": 1,
    },
    {
      "question": "What did the author use to add depth to the story?",
      "options": [
        "Historical context",
        "Literary devices",
        "Emotional connections",
        "Character development",
        "Plot twists",
      ],
      "answer": 0,
    },
    {
      "question":
        "How did Elizabeth and Prince Hamlet communicate with each other when they were apart?",
      "options": [
        "Through letters",
        "Through messages",
        "Through phone calls",
        "Through social media",
        "Through in-person meetings",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the impact of the plague on Elizabeth and Prince Hamlet's love story?",
      "options": [
        "It ended their relationship",
        "It strengthened their love for each other",
        "It made them realize they couldn't be together",
        "It showed how people in different time periods dealt with similar challenges",
        "It had no effect on their love story",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Theater",
    "flavor": "Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
