import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Premiere of 'Hamlet' by William Shakespeare",
    "details":
      "On July 9th, 1603, the first recorded performance of Hamlet took place at Elsinore Castle in Denmark.",
  },
  "date": "2024-07-09",
  "title": "Love at Elsinore Castle",
  "body":
    "As the sun set over Elsinore Castle, Lady Emma gazed out at the sea, her heart heavy with sorrow. The premiere of 'Hamlet' had just ended, and she couldn't shake off the feeling that something was amiss.  \n\n It had been a magical night, with the stars shining bright in the sky and the sound of laughter and music filling the air. But amidst all the joy and revelry, Emma's thoughts kept straying back to her secret love affair with Prince Hamlet.  \n\n She had always known that their love was forbidden, but she couldn't help the way she felt. And as she looked out at the castle walls, she knew that she had to take a chance and confess her true feelings to him.  \n\n But just as she took a step forward, a figure appeared before her - it was Ophelia, Hamlet's beloved. Emma's heart sank, and she knew that she had to leave the castle before things got any worse.",
  "word count": 160,
  "dialog": [
    {
      "Lui":
        "I was impressed by the way Lady Emma's emotions were portrayed. It really drew me in.",
    },
    {
      "Kerry":
        "Yeah, I loved how the story was set in Elsinore Castle. It added a layer of mystery to it.",
    },
    {
      "Meg":
        "I know what you mean, Lui. The character development was excellent. Lady Emma's struggles with her feelings were so relatable.",
    },
    {
      "Billy":
        "I'm surprised Hamlet wasn't more prominent in the story, considering it's a play about him. Did anyone else think that?",
    },
    {
      "Kerry":
        "Yeah, I felt like we didn't get enough of his perspective. It would have been interesting to see what he was thinking.",
    },
    {
      "Meg":
        "I think that was intentional on the part of the author. The focus was more on Lady Emma's journey and her inner struggles.",
    },
    {
      "Lui":
        "That makes sense, Meg. I appreciated how the novel explored themes of love, duty, and forbidden passion.",
    },
    {
      "Billy":
        "Exactly! And the way it ended left me wondering what would happen next. Did anyone else feel that way?",
    },
  ],
  "quiz": [
    {
      "question": "Where did Lady Emma gaze out at as the sun set?",
      "options": [
        "The premiere of 'Hamlet'",
        "Elsinore Castle",
        "The sea",
        "Prince Hamlet's chambers",
        "Ophelia's quarters",
      ],
      "answer": 2,
    },
    {
      "question": "What was Lady Emma struggling with at the end of the story?",
      "options": [
        "Her love for Prince Hamlet",
        "Her duty to her family",
        "Her own emotions",
        "The premiere of 'Hamlet'",
        "Ophelia's appearance",
      ],
      "answer": 3,
    },
    {
      "question":
        "Who appeared before Lady Emma as she was about to confess her feelings?",
      "options": [
        "Prince Hamlet",
        "Ophelia",
        "King Claudius",
        "Queen Gertrude",
        "Polonius",
      ],
      "answer": 1,
    },
    {
      "question": "What did Billy think was missing from the story?",
      "options": [
        "More about Ophelia's character",
        "A detailed description of Elsinore Castle",
        "Hamlet's perspective and thoughts",
        "More dialogue between characters",
        "A happy ending",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was Meg saying was intentional on the part of the author?",
      "options": [
        "To make the story more exciting",
        "To include more character descriptions",
        "To focus on Lady Emma's journey and inner struggles",
        "To create a sense of mystery",
        "To end the story abruptly",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Theater",
    "flavor": "Romance",
    "models": {
      "main": "llama3",
      "novel": "llama3",
    },
    "level": "Level_4",
  },
};
export default data;
