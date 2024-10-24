import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first photograph was taken",
    "details":
      "On November 29, 1826, Joseph Nicéphore Niépce took the first permanent photograph, 'View from the Window at Le Gras', using a process called heliography.",
  },
  "date": "2024-11-29",
  "title": "Whispers of Yesterday",
  "body":
    "As I stood before the old mansion, I couldn't help but feel a sense of nostalgia wash over me. It was as if the very air was thick with the whispers of yesterday, reminding me of a love that had once been.  \n\n Emma and I had met on a summer's day, much like this one. Our eyes had locked, and in that instant, I knew she was the one for me. We would take long walks through the gardens, our fingers intertwined as we laughed and loved together.  \n\n But life has a way of tearing us apart, doesn't it? War came, and Emma was sent away to care for wounded soldiers. I stayed behind, waiting for her return, but she never came. The years went by, and I lost all hope.  \n\n Now, as I stood before the mansion, I felt a sense of closure wash over me. I had finally come to terms with what could have been. But then, I saw it – a small piece of paper hidden in the bushes, with a single word scribbled on it: 'Yours'.",
  "word count": 181,
  "dialog": [
    {
      "Billy":
        "I loved reading about Emma's story! It made me think about how our own love stories might be influenced by war and loss.",
    },
    {
      "Meg":
        "Yeah, it was really emotional to see the old mansion again. I felt like I was right there with him as he relived their memories.",
    },
    {
      "Lui":
        "As a historian, I found the historical context of the story fascinating. It highlighted the sacrifices people made during war and how it affected their personal lives.",
    },
    {
      "Kerry":
        "I loved the way the author described the setting! The old mansion felt like a character in itself, with its own history and secrets.",
    },
    {
      "Billy":
        "And that ending line - 'Yours'... It was so poignant. I felt like I was holding my breath as I read it.",
    },
    {
      "Meg":
        "I agree, the ending was perfect. It left me thinking about what could have been if Emma had returned to him sooner.",
    },
    {
      "Lui":
        "It's a reminder that even in the face of adversity, love can conquer all. Or at least, that's how it feels when we're reading about it.",
    },
    {
      "Kerry":
        "But also, I think it shows how war can affect people in different ways. Some might find it hard to move on, while others might be more resilient.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the main reason for Emma's absence in Billy's life?",
      "options": [
        "She went to college",
        "War came, and she was sent away to care for wounded soldiers",
        "She moved abroad with her family",
        "She got married and had kids",
        "She became a teacher",
      ],
      "answer": 1,
    },
    {
      "question": "How did Billy feel when he stood before the old mansion?",
      "options": [
        "He felt happy and excited",
        "He felt sad and nostalgic",
        "He felt angry and frustrated",
        "He felt relieved and free",
        "He felt bored and tired",
      ],
      "answer": 1,
    },
    {
      "question": "What was the significance of the word 'Yours' in the story?",
      "options": [
        "It meant that Emma had moved on and wasn't interested in Billy anymore",
        "It indicated that Emma was still thinking of Billy, even after all these years",
        "It symbolized the end of their relationship and the start of a new chapter",
        "It represented the love that they shared and the memories they created together",
        "It showed that Emma had forgotten about Billy and didn't care",
      ],
      "answer": 3,
    },
    {
      "question": "How did Lui feel as a historian reading the story?",
      "options": [
        "He felt like it was a waste of time",
        "He found it fascinating and wanted to learn more about the historical context",
        "He didn't care one way or the other",
        "He felt like it was too sad and depressing",
        "He felt like it was too happy and unrealistic",
      ],
      "answer": 1,
    },
    {
      "question": "What did Kerry like about the story?",
      "options": [
        "The plot was too predictable",
        "The characters were too one-dimensional",
        "The setting of the old mansion was described in a way that made it feel like a character itself",
        "The ending was too abrupt and unsatisfying",
        "The themes of war and loss were too heavy-handed",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Historical Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
