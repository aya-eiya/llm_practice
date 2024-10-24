import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first Paris fashion show was held on November 4, 1858.",
    "details":
      "It was organized by Charles Frederick Worth and marked the beginning of modern haute couture.",
  },
  "date": "2024-11-04",
  "title": "Neon Dreams of Paris",
  "body":
    "In the year 2090, Paris was a city unlike any other. The once-famous fashion shows had been replaced by holographic projections, and the streets were filled with augmented reality advertisements. But in the underground clubs, a different kind of fashion emerged. Neon-dyed hair and tattoos were the norm, and style was everything.  \n\n It was on one such night that I met her - a young woman named Lena, with eyes as green as neon lights. She was a designer, creating clothes that were more art than fabric. Her latest collection, 'Neon Dreams,' was being showcased in an exclusive club, and I had managed to score an invitation.  \n\n As we sipped on cyber-cocktails, Lena told me about her inspiration - the first Paris fashion show held by Charles Frederick Worth back in 1858. She spoke of how it marked the beginning of modern haute couture, and how she was trying to bring that same sense of innovation to the neon-lit streets of our time.",
  "word count": 163,
  "dialog": [
    {
      "Billy":
        "This novel has it all! Science, history, and fashion all in one. I loved how it showed the underground clubs in Paris where people are free to express themselves.",
    },
    {
      "Meg":
        "I know, right? The way it described Lena's neon-dyed hair and tattoos was so vivid. It made me imagine myself in that world.",
    },
    {
      "Kerry":
        "And what about Lui? I loved how he was a strict teacher but still had a soft spot for his students. He reminded me of my own teachers who believed in me when I didn't believe in myself.",
    },
    {
      "Lui":
        "I'm glad you liked it, kids. It's always good to see people appreciating the finer things in life. Now, let's get back to class and discuss some real history...",
    },
    {
      "Billy":
        "Hey, Mr. Lui! Can we talk more about Charles Frederick Worth? I had no idea he was so influential in modern haute couture.",
    },
    {
      "Meg":
        "Ooh, yeah! And what about Lena's inspiration? She must have been so brave to follow her dreams and create something truly unique.",
    },
    {
      "Kerry":
        "I'm just wondering... if we could go back in time and meet Charles Frederick Worth, what would you ask him?",
    },
  ],
  "quiz": [
    {
      "question": "What was the name of Lena's latest collection?",
      "options": [
        "Neon Dreams",
        "Paris Fashion Show",
        "Charles Frederick Worth",
        "Augmented Reality Ads",
        "Cyber-Cocktails",
      ],
      "answer": 0,
    },
    {
      "question": "Who inspired Lena to create her collection?",
      "options": [
        "Lui",
        "Billy",
        "Meg",
        "Charles Frederick Worth",
        "A Holographic Projection",
      ],
      "answer": 3,
    },
    {
      "question":
        "What was the year of Charles Frederick Worth's first Paris fashion show?",
      "options": [
        "1858",
        "1890",
        "1900",
        "1910",
        "1920",
      ],
      "answer": 0,
    },
    {
      "question": "What did Billy, Kerry, and Meg discuss in class with Lui?",
      "options": [
        "The History of Paris Fashion Shows",
        "The Influence of Charles Frederick Worth",
        "The Neon Dreams Collection",
        "The Underground Clubs in Paris",
        "Real History",
      ],
      "answer": 2,
    },
    {
      "question":
        "What did Kerry wish he could ask Charles Frederick Worth if they met?",
      "options": [
        "How to create a unique fashion collection",
        "What inspired him to start the first Paris fashion show",
        "How to make cyber-cocktails",
        "How to design augmented reality ads",
        "What would you ask him?",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Fashion",
    "flavor": "Cyberpunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
