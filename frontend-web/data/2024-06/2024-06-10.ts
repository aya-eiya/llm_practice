import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Henrik Ibsen's Birthday",
    "details":
      'Norwegian playwright Henrik Ibsen, considered the "father of realism" and a major influence on modern drama, was born on June 10, 1828. While not a specific theatrical event on June 10th itself, his birth marked the beginning of a life that would profoundly shape the course of theater history.',
  },
  "date": "2024-06-10",
  "title": "Love on Henrik's Birthday",
  "body":
    "As I walked into the small café, the aroma of freshly brewed coffee and sweet pastries enveloped me, transporting me to a time when love was in the air. It was Henrik Ibsen's birthday, and the atmosphere was alive with excitement.  \n\n I had always been fascinated by the Norwegian playwright's works, and as I sipped my latte, I couldn't help but think of his famous play, 'Hedda Gabler'. The way he weaved complex characters and themes together was nothing short of genius. And now, on this special day, I found myself face-to-face with a man who embodied the very essence of Ibsen's characters – strong-willed, intelligent, and passionate.  \n\n As our eyes met, I felt a spark ignite within me. His piercing gaze seemed to see right through to my soul, and I knew in that moment, I was doomed. The flutter in my chest grew more insistent as we exchanged pleasantries, the air thick with anticipation. Little did I know, this chance encounter would set off a chain reaction of events, leading me down a path of self-discovery, love, and ultimately, happiness.",
  "word count": 182,
  "dialog": [
    {
      "Kerry":
        "Okay, okay, but did you guys catch that part where she met the guy at the café? It felt like something straight out of a movie!",
    },
    {
      "Meg":
        "Oh, absolutely! It was like destiny had a hand in their meeting, especially on Henrik Ibsen's birthday of all days!  It makes you wonder about fate, doesn't it?",
    },
    {
      "Billy":
        "Destiny? I think it was just a coincidence. But meeting someone in a café, that's statistically probable. There are equations for that sort of thing, you know?",
    },
    {
      "Lui":
        "While your statistical approach is admirable, Billy, remember that literature often explores themes beyond the realm of pure logic. The author might be using this encounter to symbolize something deeper about the protagonist's journey.",
    },
    {
      "Meg":
        "Mr. Lui is right! It's like that quote, 'We meet no ordinary people in our lives.'  Maybe this encounter is meant to be a turning point for her.",
    },
    {
      "Kerry":
        "Yeah, and what about that line, 'doomed'?  Sounds intense, right? Do you think she meant it literally or figuratively?",
    },
    {
      "Lui":
        "Excellent question, Kerry. The author's use of the word 'doomed' certainly creates a sense of foreboding. It suggests that this encounter might lead to both positive and negative consequences, which is often the case in life's most transformative experiences.",
    },
    {
      "Billy":
        "Well, if we analyze the passage logically, 'doomed' probably implies a significant change in the protagonist's life, not necessarily a negative one.",
    },
    {
      "Meg":
        "Maybe 'doomed' to fall in love? To discover new things about herself? It sounds scary and exciting all at the same time!",
    },
    {
      "Kerry":
        "I can't wait to read what happens next! This book is way more interesting than I thought it would be.",
    },
  ],
  "quiz": [
    {
      "question": "Where did the protagonist meet the man?",
      "options": [
        "At a library",
        "At a theatre",
        "At a museum",
        "At a café",
        "At a bookstore",
      ],
      "answer": 3,
    },
    {
      "question": "Whose birthday was it?",
      "options": [
        "William Shakespeare",
        "Jane Austen",
        "Charles Dickens",
        "Henrik Ibsen",
        "Leo Tolstoy",
      ],
      "answer": 3,
    },
    {
      "question":
        "Why does the protagonist compare the man to Henrik Ibsen's characters?",
      "options": [
        "He physically resembled Ibsen.",
        "He was reading Ibsen's play.",
        "He embodied the qualities of Ibsen's characters.",
        "He was a distant relative of Ibsen.",
        "He was a famous actor known for playing Ibsen's characters.",
      ],
      "answer": 2,
    },
    {
      "question":
        "What word does the protagonist use to describe her feelings after meeting the man?",
      "options": [
        "Amused",
        "Indifferent",
        "Annoyed",
        "Doomed",
        "Relieved",
      ],
      "answer": 3,
    },
    {
      "question":
        "According to the dialogue, what literary element might the meeting in the café represent?",
      "options": [
        "Flashback",
        "Foreshadowing",
        "Symbolism",
        "Irony",
        "Hyperbole",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Theater",
    "flavor": "Romance",
    "models": {
      "main": "gemini",
      "novel": "llama3",
    },
    "level": "Level_3",
  },
};
export default data;
