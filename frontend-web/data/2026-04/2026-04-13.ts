import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first performance of 'Hamlet' by William Shakespeare",
    "details":
      "On April 13, 1603, at the Globe Theatre in London, England, 'Hamlet' was performed for the first time. The play was written by William Shakespeare and directed by Richard Burbage.",
  },
  "date": "2026-04-13",
  "title": "Moonlit Tragedy",
  "body":
    "The stage was set for the first performance of 'Hamlet', a tragic tale of love and betrayal. As I took my seat at the Globe Theatre, I couldn't help but feel a sense of unease. The whispers in the crowd spoke of a play that would shake the very foundations of our understanding.  \n\n Richard Burbage's passion poured onto the stage as he portrayed the troubled prince Hamlet. His words dripped with sorrow and anguish, drawing me into the world of Elsinore Castle. I felt the weight of Ophelia's madness, her despair echoing through my own heart.  \n\n As the night wore on, I found myself lost in the tragic tale. The lines between reality and fiction blurred, and I became one with the characters. In that moment, I understood the true meaning of 'The Tragedy of Hamlet'. It was not just a play, but a reflection of our own mortality.  \n\n As the curtain fell, I felt a sense of melancholy wash over me. The performance had left an indelible mark on my soul. I knew that I would never forget this night, this play, and the emotions it stirred within me.",
  "word count": 190,
  "dialog": [
    {
      "Kerry":
        "Wow, that play was intense! I felt like I was right there in Elsinore Castle with Hamlet.",
    },
    {
      "Lui":
        "Yes, the way Shakespeare uses language to convey emotion is truly masterful. It's a testament to his genius as a playwright.",
    },
    {
      "Meg":
        "I loved how the author described Ophelia's madness! It was so vivid and made me feel like I was experiencing it too.",
    },
    {
      "Billy":
        "But don't you think the play was a bit slow? I mean, it took them forever to get to the point where Hamlet finally confronts Claudius.",
    },
    {
      "Kerry":
        "That's true, Billy. But that's what makes it so great! The suspense builds up and up until the very end.",
    },
    {
      "Lui":
        "I think you both make valid points. The play does take its time to develop, but that's part of its beauty. It's a reflection of how life often unfolds in slow, incremental steps.",
    },
    {
      "Meg":
        "Yeah, I never thought about it that way before. But now that you mention it, the play is like a journey through the characters' inner worlds.",
    },
  ],
  "quiz": [
    {
      "question": "Where was the performance of 'Hamlet' held?",
      "options": [
        "The Globe Theatre",
        "A local school auditorium",
        "A film studio",
        "Elsinore Castle",
        "A concert hall",
      ],
      "answer": 0,
    },
    {
      "question":
        "How did Richard Burbage's portrayal of Hamlet affect the narrator?",
      "options": [
        "He fell asleep during the performance",
        "He was disappointed with the acting",
        "He felt sorrow and anguish, drawing him into the world of Elsinore Castle",
        "He thought it was boring",
        "He laughed throughout the play",
      ],
      "answer": 2,
    },
    {
      "question":
        "According to Meg, what aspect of Ophelia's character stood out in her portrayal?",
      "options": [
        "Her beauty and charm",
        "Her intelligence and wit",
        "Her madness, which was vividly described by the author",
        "Her bravery and strength",
        "Her kindness and compassion",
      ],
      "answer": 2,
    },
    {
      "question":
        "What opinion did Billy express about the pacing of the play?",
      "options": [
        "He thought it moved at a perfect pace",
        "He didn't mind the slow build-up to the climax",
        "He found it too slow, taking forever to get to the point where Hamlet confronts Claudius",
        "He preferred faster-paced plays",
        "It didn't affect his enjoyment of the play",
      ],
      "answer": 2,
    },
    {
      "question":
        "How did Lui interpret the play's use of time in its narrative?",
      "options": [
        "As a rapid-fire succession of events",
        "As a straightforward, linear progression",
        "As a reflection of how life often unfolds in slow, incremental steps",
        "As a series of coincidences and chance encounters",
        "As a collection of unrelated stories",
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
    "level": "Level_3",
  },
};
export default data;
