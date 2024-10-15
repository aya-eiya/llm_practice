import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Great Fire of London",
    "details":
      "A devastating fire that burned for four days, destroying thousands of buildings and leaving many people homeless.",
  },
  "date": "2024-10-26",
  "title": "The Lost Diary",
  "body":
    "It was a dark and stormy night when I stumbled upon an old diary hidden deep within the ruins of a centuries-old mansion. The once grand estate had been abandoned for decades, its walls bearing witness to the secrets that lay within its crumbling stones.  \n\n As I opened the creaky cover, a faint scent of lavender wafted out, transporting me back to a time when life was simpler. The entries were written in a delicate script, each page a window into the soul of the mysterious author. I felt a shiver run down my spine as I read about the Great Fire of London, which had ravaged the city in 1666.  \n\n But it wasn't until I reached the final entry that I discovered the true purpose of the diary. The writer, a young woman named Emily, had been investigating a series of mysterious occurrences in the mansion. She had uncovered a web of secrets and lies that went all the way to the top of society. And now, she was being hunted.  \n\n I realized that I had stumbled into something much bigger than myself. The diary was more than just a personal journal – it was a cryptic map leading me down a rabbit hole of deceit and corruption. And I was about to take a step into the unknown.",
  "word count": 220,
  "dialog": [
    {
      "Meg":
        "I loved how the novel was set in an old mansion with secrets and mysteries! It felt so immersive.",
    },
    {
      "Kerry":
        "Yeah, I was on the edge of my seat when Emily discovered the web of deceit and corruption. It's crazy to think about how deep it went!",
    },
    {
      "Lui":
        "As a history teacher, I appreciated how the novel wove in historical events like the Great Fire of London. It added depth to the story.",
    },
    {
      "Billy":
        "I loved how Emily was a strong and intelligent protagonist! She's so relatable, especially with her love for science and history.",
    },
    {
      "Meg":
        "And I have to say, I loved the way the author used the diary as a prop. It felt like we were right there with Emily, uncovering the secrets.",
    },
    {
      "Kerry":
        "I know, right? The diary was so cool! And it's amazing how it connected us to the past and the present at the same time.",
    },
    {
      "Lui":
        "As a teacher, I'd love to use this novel in my classroom. It's got so much to offer in terms of themes, history, and character development.",
    },
    {
      "Billy":
        "Yeah, me too! I think it would be an awesome read-aloud for kids like us. We could discuss it and learn so much from it!",
    },
  ],
  "quiz": [
    {
      "question": "What was the setting of the novel?",
      "options": [
        "A modern city",
        "A centuries-old mansion",
        "A forest",
        "A beach",
        "A mountain",
      ],
      "answer": 1,
    },
    {
      "question": "Who was the protagonist of the novel?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "Emily",
      ],
      "answer": 4,
    },
    {
      "question": "What event from history was mentioned in the novel?",
      "options": [
        "The Great Fire of London",
        "The American Revolution",
        "World War I",
        "The Civil Rights Movement",
        "The French Revolution",
      ],
      "answer": 0,
    },
    {
      "question": "What was Emily's role in the story?",
      "options": [
        "She was a detective trying to solve a mystery",
        "She was an historian writing about past events",
        "She was being hunted by someone",
        "She was a strong and intelligent protagonist",
        "She was a teacher",
      ],
      "answer": 2,
    },
    {
      "question": "What did the diary reveal to Emily?",
      "options": [
        "A web of secrets and lies that went all the way to the top of society",
        "A hidden treasure",
        "A mysterious occurrence",
        "A series of events from history",
        "A cryptic map",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Society",
    "flavor": "Mystery",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_8",
  },
};
export default data;
