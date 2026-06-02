import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Death of William Poel",
    "details":
      "William Poel, English actor-manager, dies on June 18th, but his influence on Theatre continues",
  },
  "date": "2026-06-18",
  "title": "Shadows of Poel",
  "body":
    "The old theatre was silent, its wooden seats creaking in the wind. It had been years since William Poel's passing, but his legacy lived on in the memories of those who had witnessed his performances. I had always been fascinated by his ability to bring characters to life, and now, as a detective, I was determined to uncover the truth behind his mysterious death.  \n\n The investigation led me to a dusty old book, hidden away in the theatre's library. Its pages were filled with cryptic notes and sketches, hinting at a deeper meaning that went beyond the surface of Poel's plays. As I delved deeper into the book, I began to suspect that his death was not what it seemed.  \n\n The more I uncovered, the more I realized that Poel's influence extended far beyond the world of theatre. His passion for storytelling had awakened a new generation of artists, and now they were determined to see justice served. But as I got closer to the truth, I knew that I was being watched, and that my own life was at stake.",
  "word count": 181,
  "dialog": [
    {
      "Lui":
        "I must say, I'm impressed with how the author weaved together history and mystery.",
    },
    {
      "Meg":
        "I know, right? It's like they took all these separate threads and tied them together into this beautiful tapestry.",
    },
    {
      "Billy":
        "I love how the main character is a detective. He reminds me of Sherlock Holmes.",
    },
    {
      "Kerry":
        "Yeah, but what I liked was that he wasn't just solving a mystery, he was also uncovering the truth about Poel's life.",
    },
    {
      "Lui":
        "That's true, Kerry. And it shows how much impact someone can have on others, even after they're gone.",
    },
    {
      "Meg":
        "I wish we could learn more about William Poel and his plays in school. I bet he was a fascinating person to study.",
    },
    {
      "Billy":
        "Agreed! I'd love to read more about him and see some of his performances if possible.",
    },
    {
      "Kerry":
        "Yeah, it's crazy how one person can inspire so many others to create and tell stories.",
    },
  ],
  "quiz": [
    {
      "question": "Where was William Poel's legacy said to live on?",
      "options": [
        "In his plays",
        "In the memories of those who witnessed his performances",
        "In the dusty old book",
        "In the theatre's library",
        "In the investigation",
      ],
      "answer": 1,
    },
    {
      "question": "What was the detective determined to uncover in the novel?",
      "options": [
        "The truth about Poel's plays",
        "The meaning behind the cryptic notes and sketches",
        "The influence of Poel on other artists",
        "The reason behind his mysterious death",
        "The life story of William Poel",
      ],
      "answer": 3,
    },
    {
      "question": "What did Lui say about the author's writing style?",
      "options": [
        "They took all these separate threads and tied them together into this beautiful tapestry.",
        "They only wrote about history.",
        "They focused solely on mystery.",
        "They ignored storytelling.",
        "They didn't mention William Poel.",
      ],
      "answer": 0,
    },
    {
      "question":
        "What did the detective suspect as they delved deeper into the book?",
      "options": [
        "That Poel's death was a natural cause.",
        "That his legacy lived on in other artists.",
        "That there was more to Poel's life than met the eye.",
        "That his plays were not popular enough.",
        "That he was a lesser-known playwright.",
      ],
      "answer": 2,
    },
    {
      "question": "Why did Kerry think the main character was interesting?",
      "options": [
        "Because he solved mysteries with ease.",
        "Because he reminded him of Sherlock Holmes.",
        "Because he uncovered truth about Poel's life.",
        "Because he only focused on one mystery at a time.",
        "Because he wasn't related to the case.",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Theater",
    "flavor": "Thriller",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_6",
  },
};
export default data;
