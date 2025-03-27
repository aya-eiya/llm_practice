import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Black Monday",
    "details":
      "On October 19, 1987, Black Monday occurred, causing a global stock market crash that wiped out nearly $1 trillion in investments and remains one of the worst days for stocks in history.",
  },
  "date": "2025-01-21",
  "title": "Blackout",
  "body":
    "The city was plunged into darkness as the power grid failed, plunging the streets into chaos. People ran wildly, screaming and crying out in panic. Cars stalled in the middle of the road, their headlights and taillights extinguished like so many dead eyes.  \n\n Emily, a young journalist, fought her way through the crowd, desperate to get to the office and file her story. She had been working on a expose about the city's power grid when Black Monday hit, and she was determined to get the scoop of a lifetime. As she pushed through the throngs, she felt a sense of excitement building inside her. This was it, her big break.  \n\n But as she reached the office, Emily found that it was deserted. The other journalists were all out on the streets, trying to get the story. She was left alone, with only her notebook and her wits to keep her going. And then, just as she was starting to feel like she had missed her chance, Emily's phone rang. It was a mysterious caller, offering her a tip that could change everything.",
  "word count": 183,
  "dialog": [
    {
      "Meg":
        "I loved how Emily's determination to get the scoop of a lifetime was so strong, it made me want to be like her too!",
    },
    {
      "Lui":
        "Actually, I think the novel could have explored more about the power grid's failure and its consequences. It felt a bit rushed towards the end.",
    },
    {
      "Billy":
        "Yeah, but that's what makes it so exciting! The mystery of who was behind the power grid's failure kept me on edge until the very end. I loved it!",
    },
    {
      "Kerry":
        "I agree with Billy, it was super suspenseful and I didn't see the twist coming at all. But I also think Emily's character development was really well done. She started off as a bit of a one-dimensional journalist, but by the end she had grown so much.",
    },
    {
      "Lui":
        "As an educator, I appreciate how the novel touched on themes of perseverance and critical thinking. It's essential for students to learn these skills, and this book was a great example of them in action.",
    },
    {
      "Meg":
        "I think what really made the story stand out was its unique blend of science, technology, and mystery. It felt like a real page-turner, and I loved how it explored different perspectives on the power grid's failure.",
    },
  ],
  "quiz": [
    {
      "question": "Why was Emily determined to get to the office?",
      "options": [
        "To meet her friends",
        "To file her story",
        "To go home",
        "To buy food",
        "To take a nap",
      ],
      "answer": 1,
    },
    {
      "question": "What happened when Emily reached the office?",
      "options": [
        "It was full of people",
        "The other journalists were out on the streets",
        "She found her colleagues working together",
        "The building was destroyed",
        "The power grid failed",
      ],
      "answer": 1,
    },
    {
      "question": "Who called Emily with a tip?",
      "options": [
        "A mysterious stranger",
        "Her colleague Kerry",
        "Lui, her teacher",
        "Billy, her friend",
        "Meg, her classmate",
      ],
      "answer": 0,
    },
    {
      "question": "What was the main theme of the story?",
      "options": [
        "Perseverance and critical thinking",
        "Science and technology",
        "Mystery and suspense",
        "Determination and hard work",
        "Friendship and teamwork",
      ],
      "answer": 0,
    },
    {
      "question":
        "Why did Emily feel a sense of excitement building inside her?",
      "options": [
        "Because she was scared",
        "Because she felt sad",
        "Because she wanted to go home",
        "Because this was her big break",
        "Because she was bored",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Economy",
    "flavor": "Thriller",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
