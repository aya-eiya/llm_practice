import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Opening Night of 'Hamlet' at the Theatre Royal, Drury Lane",
    "details":
      "On July 29, 1754, the first performance of David Garrick's adaptation of 'Hamlet' was held at the Theatre Royal, Drury Lane in London. The production starred James Quin as Hamlet and Samuel Foote as Polonius.",
  },
  "date": "2024-07-29",
  "title": "A Night to Remember",
  "body":
    "As the curtains drew open at the Theatre Royal, Drury Lane, Sophia felt her heart skip a beat. She had been waiting for this moment for what felt like an eternity - the opening night of 'Hamlet' starring her beloved, James.  \n\n The lights dimmed, and the orchestra began to play the famous overture. Sophia's eyes shone like diamonds as she watched James take his cue and stride onto the stage. His Hamlet was nothing short of captivating, drawing her in with every nuanced expression and powerful delivery.  \n\n But it wasn't just James that captivated her - the entire production was a masterclass in storytelling, weaving a tapestry of emotions that left Sophia breathless. As the night wore on, she found herself swept up in the drama, her heart pounding in time with the actors' every move.  \n\n When the final curtain call came, Sophia felt like she was floating on air. She had never felt so alive, so connected to a performance before. And when James's eyes met hers, she knew that this night would stay etched in her memory forever.",
  "word count": 180,
  "dialog": [
    {
      "Lui": "I must say, I was impressed by James' performance as Hamlet.",
    },
    {
      "Meg":
        "Oh, absolutely! He brought the character to life. And Sophia's emotional journey was so beautifully woven throughout the story.",
    },
    {
      "Kerry":
        "Yeah, and I loved how the production wove together drama, music, and stage presence to create an immersive experience. It felt like we were right there with Hamlet, in Elsinore!",
    },
    {
      "Billy":
        "I know what you mean, Kerry! The way the story unfolded was so engaging. And I appreciated how it explored themes of ambition, mortality, and madness.",
    },
    {
      "Lui":
        "Exactly! The novel's exploration of human psychology is remarkable. James' Hamlet, in particular, was a masterclass in subtlety and nuance.",
    },
    {
      "Meg":
        "I also appreciated the way the story highlighted Sophia's emotional journey. Her character development was so well-written.",
    },
    {
      "Kerry":
        "And can we talk about that finale? It was like nothing I've ever seen before! The way James' eyes met Sophia's... it gave me chills!",
    },
    {
      "Billy":
        "Yeah, the final curtain call was incredible. I felt like I was floating on air, just like Sophia did in the novel.",
    },
    {
      "Lui":
        "Well, I think we can all agree that this was an unforgettable reading experience. The novel has left a lasting impression on us.",
    },
  ],
  "quiz": [
    {
      "question": "Where did Sophia feel like she was floating on air?",
      "options": [
        "Theatre Royal, Drury Lane",
        "Elsinore",
        "The stage",
        "After the final curtain call",
        "In the orchestra",
      ],
      "answer": 4,
    },
    {
      "question": "Who played Hamlet in the production?",
      "options": [
        "James",
        "Billy",
        "Kerry",
        "Lui",
        "Meg",
      ],
      "answer": 0,
    },
    {
      "question": "What did Sophia's eyes shine like during the performance?",
      "options": [
        "Like diamonds",
        "Like rubies",
        "Like emeralds",
        "Like sapphires",
        "Like opals",
      ],
      "answer": 0,
    },
    {
      "question": "What theme was explored in the novel?",
      "options": [
        "Ambition and mortality",
        "Madness and ambition",
        "Human psychology",
        "Love and relationships",
        "Friendship and loyalty",
      ],
      "answer": 2,
    },
    {
      "question": "How did Billy feel after the final curtain call?",
      "options": [
        "He felt bored",
        "He felt disappointed",
        "He felt like he was floating on air",
        "He felt annoyed",
        "He felt confused",
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
    "level": "Level_3",
  },
};
export default data;
