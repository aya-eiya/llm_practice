import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The First Performance of Hamlet",
    "details":
      "On July 11th, 1603, the first recorded performance of William Shakespeare's play Hamlet took place at the Court of King James I at Elsinore Castle in Denmark.",
  },
  "date": "2024-07-11",
  "title": "A Night to Remember",
  "body":
    "It was a warm summer evening when I first met him. The stars were shining bright, and the sound of laughter and music filled the air. We had both attended the performance of Hamlet at Elsinore Castle, and our eyes met as we waited in line for refreshments.  \n\n As we struck up a conversation, I was struck by his charming smile and piercing blue eyes. His name was Max, and he was an actor himself. He told me about the thrill of performing on stage and the rush of adrenaline when the curtains opened.  \n\n I couldn't help but feel drawn to him as we walked out into the courtyard, taking in the beauty of the night. The moon was full, casting a silver glow over the castle walls. It was then that Max took my hand, his fingers intertwining with mine like the threads of fate.  \n\n As the night wore on, our connection grew stronger. We talked about our dreams and passions, sharing stories of love and loss. And though we had only just met, I knew in that moment that this was a night to remember.",
  "word count": 187,
  "dialog": [
    {
      "Kerry":
        "I loved how the author described the setting and characters. It was like I was right there with Max and the narrator.",
    },
    {
      "Meg":
        "I know what you mean! The way the author used sensory details to bring the scene to life really drew me in.",
    },
    {
      "Lui":
        "As a teacher, I appreciated how the novel explored themes of love, loss, and self-discovery. It's a great example for students.",
    },
    {
      "Billy":
        "I loved Max's passion for acting! It was so cool to see how it brought him closer to the narrator.",
    },
    {
      "Kerry":
        "Yeah, I think what I liked most was how the novel showed that even in the midst of uncertainty and change, people can find common ground and connection with each other.",
    },
    {
      "Meg":
        "I loved the way the author wove together the threads of fate, connecting Max and the narrator's stories. It was so beautifully done.",
    },
    {
      "Lui":
        "And I think what struck me most was how the novel showed that even small moments can have a lasting impact on our lives.",
    },
    {
      "Billy":
        "I agree with Lui! And I loved how the author didn't shy away from exploring deeper themes and emotions. It made the story feel so much more real.",
    },
  ],
  "quiz": [
    {
      "question": "What was the setting where the narrator first met Max?",
      "options": [
        "A park",
        "Elsinore Castle",
        "A theater",
        "A restaurant",
        "The beach",
      ],
      "answer": 1,
    },
    {
      "question": "What did Max tell the narrator about being an actor?",
      "options": [
        "It was boring",
        "He loved it",
        "He hated it",
        "It was okay",
        "He never tried it",
      ],
      "answer": 1,
    },
    {
      "question": "What theme does Lui appreciate in the novel?",
      "options": [
        "Love and loss only",
        "Self-discovery only",
        "Love, loss, and self-discovery",
        "Friendship and adventure",
        "Nothing",
      ],
      "answer": 2,
    },
    {
      "question": "How did Max feel about his passion for acting?",
      "options": [
        "He was neutral",
        "He was passionate",
        "He hated it",
        "He loved someone else's passion",
        "It didn't matter",
      ],
      "answer": 1,
    },
    {
      "question":
        "What does Kerry think the novel shows about people and their connections?",
      "options": [
        "That people are always wrong for each other",
        "That people can find common ground despite differences",
        "That people only care about themselves",
        "That people never change",
        "Nothing",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Theater",
    "flavor": "Romance",
    "models": {
      "main": "llama3",
      "novel": "llama3",
    },
    "level": "Level_6",
  },
};
export default data;
