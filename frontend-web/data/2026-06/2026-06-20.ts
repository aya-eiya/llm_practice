import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Surrealist movement officially begins",
    "details":
      "On June 20, 1924, André Breton publishes the first Manifesto of Surrealism, marking the beginning of the Surrealist art movement in France.",
  },
  "date": "2026-06-20",
  "title": "Surrealism: A Leap into the Unconscious",
  "body":
    "The Surrealist movement, which emerged in the 1920s, revolutionized the way artists perceived and expressed reality. André Breton's Manifesto of Surrealism, published on June 20, 1924, marked the beginning of this transformative era. By rejecting the conventions of traditional art, Surrealists sought to tap into the subconscious mind, revealing the hidden world of dreams and desires.  \n\n This avant-garde movement not only transformed the realm of art but also had a profound impact on literature, philosophy, and culture as a whole. Writers such as André Breton, Guillaume Apollinaire, and Salvador Dalí pushed the boundaries of language and expression, creating new forms of literary experimentation. Their work often blurred the lines between reality and fantasy, inviting readers to confront the unknown.  \n\n The Surrealist movement's emphasis on the subconscious mind also resonated with psychoanalytic theory, particularly the work of Sigmund Freud. By exploring the realm of dreams and the unconscious, Surrealists aimed to uncover the hidden truths of human experience. Their innovative approach to art and literature continues to inspire artists, writers, and thinkers today, serving as a testament to the power of creative experimentation and intellectual curiosity.",
  "word count": 185,
  "dialog": [
    {
      "Meg":
        "I just finished reading this novel about the Surrealist movement, and I must say it was fascinating! The way they rejected traditional art forms and tapped into their subconscious minds to create something new is mind-blowing.",
    },
    {
      "Kerry":
        "Yeah, I can see why you'd be interested in that. It's like they were exploring the unknown and pushing the boundaries of what's possible.",
    },
    {
      "Lui":
        "Well, it's no surprise that this movement had a profound impact on literature and philosophy. The way they blurred the lines between reality and fantasy is quite thought-provoking.",
    },
    {
      "Billy":
        "I love how they used dreams as a source of inspiration! I've always been interested in psychology and the human mind. Maybe we can do some experiments to tap into our subconscious minds like they did?",
    },
    {
      "Meg":
        "That's not a bad idea, Billy! We could try freewriting or stream-of-consciousness writing to see what comes out. It might be a fun way to explore our own creativity.",
    },
    {
      "Kerry":
        "And maybe we can even create some art inspired by the Surrealists. I've been wanting to try my hand at painting, and this could be just the thing to get me started.",
    },
    {
      "Lui":
        "I must say, I'm impressed with your interest in this topic. It's not every day that I see students so enthusiastic about art history. Keep up the good work!",
    },
  ],
  "quiz": [
    {
      "question": "When was André Breton's Manifesto of Surrealism published?",
      "options": [
        "June 15, 1923",
        "June 20, 1924",
        "July 1, 1925",
        "August 10, 1926",
        "September 20, 1927",
      ],
      "answer": 1,
    },
    {
      "question": "What was the main goal of Surrealist artists?",
      "options": [
        "To create traditional art forms",
        "To explore the subconscious mind and reveal hidden truths",
        "To experiment with new techniques only",
        "To focus on realism in their work",
        "To reject all artistic conventions",
      ],
      "answer": 1,
    },
    {
      "question":
        "Which of the following authors was associated with the Surrealist movement?",
      "options": [
        "F. Scott Fitzgerald",
        "André Breton",
        "Guillaume Apollinaire",
        "Salvador Dalí",
        "J.K. Rowling",
      ],
      "answer": 2,
    },
    {
      "question":
        "What connection does the Surrealist movement have with psychoanalytic theory?",
      "options": [
        "None, they are unrelated",
        "The Surrealists were critics of Freud's work",
        "They drew inspiration from his theories on dreams and the unconscious",
        "Freud was a member of the Surrealist group",
        "Surrealism rejected all aspects of psychoanalysis",
      ],
      "answer": 2,
    },
    {
      "question": "What idea did Meg suggest trying as an experiment?",
      "options": [
        "Free writing with a specific theme in mind",
        "Stream-of-consciousness writing without a theme",
        "Freewriting to tap into their subconscious minds like the Surrealists",
        "Writing only about everyday events",
        "Focusing solely on grammar and syntax",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Academic Essay",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_8",
  },
};
export default data;
