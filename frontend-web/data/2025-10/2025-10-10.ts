import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Mao Zedong's Birthday",
    "details":
      "The first Chinese President, Mao Zedong (1893-1976), was born on October 10th, 1893 in Shaoshan, Hunan Province, China.",
  },
  "date": "2025-10-10",
  "title": "Dawn of Destiny",
  "body":
    "The Shaoshan morning mist swirled around his small house like a ghostly presence, shrouding the world in an ethereal haze. Mao Zedong had just turned ten, yet he carried within him the seeds of what would become one of the most profound changes in human history.\n\n His father, a struggling farmer, had always encouraged him to read and think deeply, despite their modest circumstances. The young Mao spent countless hours studying classical Chinese texts and dreaming of a future where China could rise from its long slumber into global prominence.[:] In the evenings, as the sun cast its golden glow over the Hunan countryside, he would sit on his father's lap, listening to tales of ancient heroes and philosophers who had shaped their nation's destiny. Mao's eyes sparkled with determination, as if already sensing that his birth in this humble village was not merely an accident of time, but rather a carefully orchestrated moment in history's grand design.[:] These early years in Shaoshan would forever remain etched in the mind of the young man who would one day lead his nation through stormy seas to an unprecedented revolution.",
  "word count": 188,
  "dialog": [
    {
      "Meg":
        "I was really moved by Mao Zedong's humble beginnings in Shaoshan. It shows how great leaders often come from simple, ordinary lives.",
    },
    {
      "Kerry":
        "Yeah, but isn't it ironic that this guy who believed in the power of the people ended up becoming a dictator? I mean, his story is amazing, but there's some dark stuff too.",
    },
    {
      "Billy":
        "Actually, Kerry, that's not entirely accurate. Mao's rise to power was complex and influenced by many factors, including historical context and internal Chinese politics. The novel shows both sides of his character.",
    },
    {
      "Lui":
        "That's a good point, Billy. The book presents a balanced view of Mao Zedong - highlighting both his revolutionary ideals and the challenges he faced in implementing them.",
    },
    {
      "Meg":
        "I'm so glad we got to read this novel! I've always been fascinated by historical figures, and now I have a deeper understanding of Mao's life journey. It's incredible how one person can change an entire nation's course.",
    },
    {
      "Kerry":
        "True story! And the way the author portrays his childhood in Shaoshan is so vivid - you can almost smell the morning mist!",
    },
  ],
  "quiz": [
    {
      "question": "Where did Mao Zedong grow up?",
      "options": [
        "Beijing",
        "Shanghai",
        "Shaoshan",
        "Guangzhou",
        "Hong Kong",
      ],
      "answer": 2,
    },
    {
      "question": "What is the main focus of Mao's early years in Shaoshan?",
      "options": [
        "His farming career",
        "Revolutionary activities",
        "Studying classical texts and dreaming about China's rise",
        "Military training",
        "Political speeches",
      ],
      "answer": 3,
    },
    {
      "question": "According to Kerry, what was ironic about Mao Zedong?",
      "options": [
        "That he believed in people but became a dictator",
        "That he grew up poor but later prospered",
        "That he wrote poetry about nature",
        "That he loved classical music",
        "That he studied Chinese philosophy",
      ],
      "answer": 0,
    },
    {
      "question":
        "Which character in the dialogue mentioned that Mao's rise to power was complex?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "All of them",
      ],
      "answer": 0,
    },
    {
      "question":
        "What did Kerry say about how the author portrays Mao's childhood in Shaoshan?",
      "options": [
        "It was very boring and dull",
        "It was too focused on politics",
        "It was vivid and you could almost smell the morning mist",
        "It didn't include enough historical details",
        "It wasn't accurate at all",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Historical Fiction",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_7",
  },
};
export default data;
