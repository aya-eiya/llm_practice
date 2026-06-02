import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Ramanujan's Death",
    "details":
      "Srinivasa Ramanujan, a renowned Indian mathematician, died of liver cancer on June 17, 1920.",
  },
  "date": "2026-06-17",
  "title": "The Mathematician's Fading Light",
  "body":
    "Srinivasa Ramanujan was a brilliant Indian mathematician who left an indelible mark on the world of mathematics. His contributions to number theory, elliptical equations, and modular forms are still widely studied today. However, despite his remarkable achievements, Ramanujan's life was cut short by liver cancer at the age of 32.  \n\n As news of his passing spread, mathematicians around the world mourned the loss of a kindred spirit. His work had been a beacon of hope and inspiration to many, and his untimely death left a void that would be difficult to fill. Ramanujan's legacy continued to inspire new generations of mathematicians, who built upon his discoveries and expanded our understanding of the universe.  \n\n The event of Ramanujan's passing serves as a poignant reminder of the transience of human life and the fleeting nature of intellectual achievements. Despite the importance of his work, Ramanujan's legacy was not widely recognized during his lifetime. It was only after his death that his contributions to mathematics began to gain widespread recognition. Today, we honor his memory by continuing to build upon his discoveries and pushing the boundaries of human knowledge.",
  "word count": 186,
  "dialog": [
    {
      "Meg":
        "I loved reading about Srinivasa Ramanujan's life, it was so inspiring.",
    },
    {
      "Lui":
        "Yes, he was an exceptional mathematician, and his contributions to number theory are still widely studied today.",
    },
    {
      "Kerry":
        "But what I found interesting is that his legacy wasn't recognized until after he died. It's like, how can you not know about someone who made such a big impact on math?",
    },
    {
      "Billy":
        "I think it's because back then, there were no social media or anything to spread the word about people's achievements.",
    },
    {
      "Meg":
        "That's true, and it makes me realize that even now, we take for granted the things that people do. We need to appreciate them more while they're still alive.",
    },
    {
      "Lui":
        "Well said, Meg. It's always a good reminder of how fleeting human life is and how important it is to recognize and appreciate each other's contributions.",
    },
    {
      "Kerry":
        "Yeah, and I think that's why this novel is so great, because it shows us the impact one person can have on the world.",
    },
    {
      "Billy":
        "I completely agree with you both. It's like, Ramanujan's story is a beacon of hope for people who want to make a difference in the world.",
    },
  ],
  "quiz": [
    {
      "question": "How old was Srinivasa Ramanujan when he passed away?",
      "options": [
        "22",
        "28",
        "32",
        "36",
        "40",
      ],
      "answer": 2,
    },
    {
      "question":
        "What field of mathematics did Ramanujan make significant contributions to?",
      "options": [
        "Algebra",
        "Geometry",
        "Number Theory",
        "Calculus",
        "Topology",
      ],
      "answer": 2,
    },
    {
      "question":
        "How old were the kids when they read about Srinivasa Ramanujan's life?",
      "options": [
        "8 and 10",
        "11 and 12",
        "13 and 15",
        "16 and 18",
        "19 and 21",
      ],
      "answer": 1,
    },
    {
      "question":
        "What is the reason why Ramanujan's legacy wasn't recognized until after he died?",
      "options": [
        "Lack of social media back then",
        "He didn't have any mentors",
        "His work was too complex",
        "People were not interested in math at that time",
        "He never shared his work with anyone",
      ],
      "answer": 0,
    },
    {
      "question": "How many people are discussing Ramanujan's story?",
      "options": [
        "2",
        "3",
        "4",
        "5",
        "6",
      ],
      "answer": 4,
    },
  ],
  "params": {
    "theme": "Mathematics",
    "flavor": "Academic Essay",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
