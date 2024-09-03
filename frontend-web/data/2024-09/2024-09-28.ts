import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first ethics board is established",
    "details":
      "In 1887, the first ethics board is established by the American Medical Association (AMA) to oversee physician conduct and address medical ethics issues.",
  },
  "date": "2024-09-28",
  "title": "The Shadow of Deceit",
  "body":
    'It was a dark and stormy night when Detective Jameson received a call from the local police station. A wealthy businessman, Richard Langley, had been found dead in his mansion, with no signs of forced entry or struggle. The only clue was a small piece of paper on the floor with a cryptic message: "The truth is in the shadows."\n\n Jameson arrived at the scene and began to survey the area. He noticed that the window was open, but there were no fingerprints or DNA evidence. The air was thick with tension as he questioned the staff, who all seemed shaken by the event. But one person caught his eye - the businessman\'s assistant, Emma Taylor, who seemed nervous and on edge.\n\n As Jameson continued to investigate, he discovered that Langley had been involved in some shady dealings, including embezzlement and money laundering. It seemed that his death was more than just a simple murder - it was a carefully planned execution. But by whom? And what did the cryptic message mean?',
  "word count": 172,
  "dialog": [
    {
      "Billy":
        "This novel was so intense! I loved how Detective Jameson had to solve the mystery of Richard Langley's death.",
    },
    {
      "Kerry":
        "I know, right? The cryptic message 'The truth is in the shadows' was so mysterious and it kept me guessing until the end!",
    },
    {
      "Meg":
        "I loved how the author wove together the clues to create a suspenseful plot. It was like I was right there with Detective Jameson, trying to figure out who did it.",
    },
    {
      "Lui":
        "The novel did an excellent job of exploring the themes of power and corruption, and how they can lead to tragic consequences. It's a great reminder of the importance of ethics in our personal and professional lives.",
    },
    {
      "Billy":
        "I also appreciated how the author didn't shy away from depicting the darker aspects of human nature. It made the story feel even more realistic and engaging.",
    },
    {
      "Kerry":
        "Yeah, it was like a rollercoaster ride of emotions! I was on edge the whole time, wondering who would be revealed as the killer.",
    },
    {
      "Meg":
        "I loved how the author used the setting of the dark and stormy night to create a sense of foreboding and tension. It really added to the overall atmosphere of the story.",
    },
    {
      "Lui":
        "The character development was also impressive. I felt like I got to know Detective Jameson and the other characters on a deeper level, which made it easier to become invested in their stories.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the situation when Detective Jameson received a call?",
      "options": [
        "A wealthy businessman was found dead in his mansion.",
        "The local police station was on fire.",
        "It was a sunny day and no crime had occurred.",
        "A suspicious person was seen lurking around the area.",
        "A cryptic message was left at the scene.",
      ],
      "answer": 0,
    },
    {
      "question": "Who seemed nervous and on edge during the investigation?",
      "options": [
        "Detective Jameson",
        "Emma Taylor, Richard Langley's assistant",
        "The local police chief",
        "The staff of Richard Langley's mansion",
        "No one was visibly nervous.",
      ],
      "answer": 1,
    },
    {
      "question": "What was the cryptic message left at the scene?",
      "options": [
        "The truth is in the shadows.",
        "Justice will be served.",
        "The killer is still on the loose.",
        "This is a crime scene, do not touch anything.",
        "There is no evidence of a crime.",
      ],
      "answer": 0,
    },
    {
      "question": "What was discovered about Richard Langley's dealings?",
      "options": [
        "He was a philanthropist who donated to many charities.",
        "He was involved in embezzlement and money laundering.",
        "He was a renowned scientist who made many breakthroughs.",
        "He was a famous musician who performed sold-out concerts.",
        "He was a devoted family man who always put his loved ones first.",
      ],
      "answer": 1,
    },
    {
      "question": "What was the overall atmosphere of the story?",
      "options": [
        "A light-hearted and humorous tone",
        "A sense of excitement and anticipation",
        "A feeling of suspense and tension",
        "A mood of sadness and sorrow",
        "A calm and peaceful ambiance",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Ethics",
    "flavor": "Crime",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_8",
  },
};
export default data;
