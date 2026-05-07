import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Apple Macintosh Computer Goes on Sale",
    "details":
      "Apple Inc.'s first successful foray into personal computers, the Apple Macintosh 128k, was released in a highly publicized event on this day.",
  },
  "date": "2026-05-22",
  "title": "Revolutionizing Computing: The Apple Macintosh Era",
  "body":
    'The introduction of the Apple Macintosh computer in 1984 marked a significant turning point in the history of personal computing. This revolutionary device, with its user-friendly interface and intuitive design, made it accessible to a wider audience. As described by one critic, "the Macintosh was more than just a computer; it was an experience."[  \n\nThe impact of the Macintosh on the industry was substantial, as it paved the way for future innovations in user-friendly interface design and graphical user interfaces (GUIs). The success of the Macintosh also led to increased competition among manufacturers, driving down prices and improving overall quality. This, in turn, contributed to the widespread adoption of personal computers in homes and businesses.  \n\nHowever, the Macintosh was not without its limitations. Critics argued that its lack of expandability and limited software capabilities hindered its potential as a truly powerful tool. Nevertheless, the Macintosh remains an iconic symbol of innovation and design excellence, influencing generations of computer users and manufacturers alike.',
  "word count": 162,
  "dialog": [
    {
      "Billy": "I loved reading about the Apple Macintosh computer!",
    },
    {
      "Lui":
        "Yes, it was indeed a significant turning point in personal computing history.",
    },
    {
      "Meg":
        "I wish they talked more about the users' experiences with the Macintosh. It would've been fascinating to hear their stories!",
    },
    {
      "Kerry":
        "Dude, did you know that the Macintosh was actually a response to IBM's failure to create a user-friendly computer?",
    },
    {
      "Billy":
        "Whoa, that's so cool! I had no idea. But I do think the author could've gone deeper into its impact on society.",
    },
    {
      "Lui":
        "Actually, Billy, the article did discuss how the Macintosh paved the way for future innovations in interface design and graphical user interfaces.",
    },
    {
      "Meg":
        "I'm more interested in learning about the people behind the computer. Can we read a biography of Steve Jobs next?",
    },
    {
      "Kerry":
        "Ugh, don't get me started on Steve Jobs! He was all about the tech, not about helping anyone. Let's read something else.",
    },
    {
      "Lui":
        "Alright, alright. We'll find something that suits everyone's taste.",
    },
  ],
  "quiz": [
    {
      "question": "In what year was the Apple Macintosh computer introduced?",
      "options": [
        "1982",
        "1984",
        "1985",
        "1990",
        "2000",
      ],
      "answer": 1,
    },
    {
      "question":
        "According to one critic, what was the Macintosh considered to be?",
      "options": [
        "a revolutionary device",
        "an experience",
        "just a computer",
        "a powerful tool",
        "a failure",
      ],
      "answer": 1,
    },
    {
      "question":
        "What impact did the success of the Macintosh have on manufacturers?",
      "options": [
        "it led to decreased competition",
        "prices increased and quality improved",
        "it paved the way for future innovations in user-friendly interface design and graphical user interfaces",
      ],
      "answer": 2,
    },
    {
      "question":
        "Who responded to IBM's failure to create a user-friendly computer with the Macintosh?",
      "options": [
        "Apple",
        "IBM",
        "Microsoft",
        "Google",
        "Facebook",
      ],
      "answer": 0,
    },
    {
      "question": "What did Billy wish the article had discussed more about?",
      "options": [
        "the technical specifications of the Macintosh",
        "its impact on society",
        "the people behind the computer",
        "users' experiences with the Macintosh",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Technology",
    "flavor": "Academic Essay",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
