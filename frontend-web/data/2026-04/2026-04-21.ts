import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": 'First performance of "Hamlet"',
    "details":
      'The tragedy "Hamlet" by William Shakespeare was first performed on April 21, 1603 at Elsinore Castle in Denmark.',
  },
  "date": "2026-04-21",
  "title": "Shakespeare's Ghosts",
  "body":
    "The tragic play 'Hamlet' by William Shakespeare has been a source of inspiration for centuries. The first performance took place on April 21, 1603 at Elsinore Castle in Denmark. It is said that the play was inspired by a true story about a young prince who sought to avenge his father's murder.  \n\n The theme of revenge and mortality is still relevant today. Many people can relate to Hamlet's feelings of anger and sadness after losing a loved one. The play also explores the idea of identity and how it can be shaped by our experiences and relationships.  \n\n Shakespeare's use of language and poetic imagery has been praised for its beauty and power. His writing style is often described as 'literary' and can be challenging to understand at times. However, with careful reading and analysis, students can gain a deeper understanding of the play's meaning and significance.   \n\n In studying Shakespeare's works, students can develop their critical thinking skills and learn to appreciate the art of language. The study of literature can also help individuals to better understand themselves and others, leading to greater empathy and compassion.",
  "word count": 185,
  "dialog": [
    {
      "Meg":
        "I know, right? The theme of revenge and mortality is so relevant to our lives today.",
    },
    {
      "Lui":
        "Yes, that's one of the reasons I love teaching Shakespeare's works - it's not just about history, but also about understanding human nature.",
    },
    {
      "Kerry":
        "I don't get why everyone raves about Shakespeare. I mean, his writing is so hard to understand! It's like trying to decipher a secret code or something.",
    },
    {
      "Billy":
        "But that's the beauty of it, Kerry! His language and poetic imagery are like nothing else out there. You just need to learn how to appreciate it, that's all.",
    },
    {
      "Meg":
        "I know what you mean, Lui. But sometimes I feel like Shakespeare is trying too hard to be deep and meaningful. Can't he just write a straightforward story for once?",
    },
    {
      "Lui":
        "Ah, Meg, that's the thing about great literature - it challenges us to think critically and not take things at face value. You can't just skim through a Shakespeare play and expect to get its meaning.",
    },
    {
      "Kerry":
        "Yeah, but what if I don't understand the meaning? Is it still worth reading?",
    },
    {
      "Billy":
        "Of course it is! The more you read and learn about Shakespeare's context, the more you'll appreciate his works. Trust me, I've done it!",
    },
  ],
  "quiz": [
    {
      "question":
        "In what year did the first performance of 'Hamlet' take place?",
      "options": [
        "1599",
        "1601",
        "1603",
        "1605",
        "1610",
      ],
      "answer": 2,
    },
    {
      "question": "What theme is explored in the play 'Hamlet'?",
      "options": [
        "Revenge and mortality",
        "Love and relationships",
        "Identity and experiences",
        "Power and politics",
        "Friendship and loyalty",
      ],
      "answer": 0,
    },
    {
      "question":
        "According to Lui, why is Shakespeare's writing style often described as 'literary'?",
      "options": [
        "Because it is simple and easy to understand.",
        "Because it uses poetic imagery.",
        "Because it is complex and challenging to read.",
        "Because it is only suitable for scholars.",
        "Because it has no artistic value.",
      ],
      "answer": 2,
    },
    {
      "question": "What do Meg and Lui agree on?",
      "options": [
        "That Shakespeare's writing is too hard to understand.",
        "That the theme of revenge and mortality is irrelevant today.",
        "That the play 'Hamlet' is not about human nature.",
        "That it's not just about history, but also about understanding human nature.",
        "That Shakespeare's works are only suitable for scholars.",
      ],
      "answer": 3,
    },
    {
      "question":
        "According to Billy, what will happen if you learn how to appreciate Shakespeare's language and poetic imagery?",
      "options": [
        "You'll start to hate reading Shakespeare.",
        "You'll never understand the meaning of Shakespeare's plays.",
        "You'll get more out of his works and enjoy them more.",
        "You won't be able to read anything else besides Shakespeare.",
        "You'll lose interest in literature.",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Academic Essay",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
