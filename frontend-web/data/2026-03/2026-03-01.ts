import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Rousseau's Death",
    "details":
      "French artist Henri Rousseau died in Paris, France on September 29th, but I could not find information confirming his death on March 1st",
  },
  "date": "2026-03-01",
  "title": "La Vie En Rose et Noir",
  "body":
    'It was a chilly autumn evening in Paris when I first met her. Her name was Colette, and she was a mysterious beauty with a passion for art. We met at the Musée d\'Orsay, surrounded by the masterpieces of Monet and Renoir. She was lost in thought, staring at a painting of Rousseau\'s, her eyes filled with tears.  \n\n I approached her cautiously, not wanting to disturb her thoughts. "Excuse me, mademoiselle," I said gently. "Are you okay?" Colette turned to me, and our eyes met for the first time. She smiled softly, and I felt my heart skip a beat.  \n\n We walked along the Seine, talking about art, life, and love. Colette told me about her dream of becoming an artist, just like Rousseau. I shared with her my passion for writing, and she encouraged me to keep pursuing my dreams. As the night fell, we found ourselves lost in conversation, our words flowing like the river.  \n\n And then, it happened. Colette looked at me with tears in her eyes and whispered, "Je suis si heureuse de t\'avoir rencontré." I took her hand, feeling a spark of electricity run through my veins. In that moment, I knew that our love story was just beginning.',
  "word count": 204,
  "dialog": [
    {
      "Billy":
        "I loved the novel, especially the way it was set in Paris! Colette sounded like such an amazing character.",
    },
    {
      "Lui":
        "Indeed, Billy. The author did a great job of creating a sense of atmosphere and romance. What did you think of the writing style?",
    },
    {
      "Kerry":
        "I'm so over the sappy love stories, but this one was actually pretty cool! I liked how they met at the museum and fell in love.",
    },
    {
      "Meg":
        "I know what you mean, Kerry. But for me, it's not just about the romance. I loved how Colette's passion for art was woven throughout the story.",
    },
    {
      "Lui":
        "That's a great point, Meg. The author did an excellent job of incorporating themes and motifs. What did you think of the pacing?",
    },
    {
      "Billy":
        "I thought it was a bit slow at times, but overall, I was engaged. I liked how the story built up to the moment when they shared their first kiss.",
    },
    {
      "Kerry":
        "Yeah, it's definitely a sweet and sentimental story. But what really got me was Colette's dream of becoming an artist like Rousseau.",
    },
    {
      "Meg":
        "I loved that part too! I think we can all learn something from Colette's perseverance and dedication to her craft.",
    },
  ],
  "quiz": [
    {
      "question": "Where did the narrator first meet Colette?",
      "options": [
        "At a café near the Seine",
        "At the Musée d'Orsay surrounded by masterpieces of Monet and Renoir",
        "At a art gallery in Montmartre",
        "In a bookstore near the Louvre",
        "At a street performance in the Latin Quarter",
      ],
      "answer": 1,
    },
    {
      "question": "What was Colette's dream?",
      "options": [
        "To become a writer like Monet",
        "To become an artist like Rousseau",
        "To travel around the world",
        "To learn how to play the piano",
        "To become a famous chef",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did Colette say when she looked at the narrator with tears in her eyes?",
      "options": [
        "Je suis si triste de te voir partir",
        "Je suis si heureuse de t'avoir rencontré",
        "Je suis si fâchée avec toi",
        "Je suis si fatiguée",
        "Je suis si contente",
      ],
      "answer": 1,
    },
    {
      "question": "What did Billy like about the novel?",
      "options": [
        "The way it was set in Paris",
        "The writing style of the author",
        "The romance between Colette and the narrator",
        "The themes and motifs woven throughout the story",
        "All of the above",
      ],
      "answer": 4,
    },
    {
      "question": "What did Meg like about the novel?",
      "options": [
        "The way it was set in Paris",
        "The romance between Colette and the narrator",
        "Colette's passion for art",
        "The themes and motifs woven throughout the story",
        "All of the above",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
