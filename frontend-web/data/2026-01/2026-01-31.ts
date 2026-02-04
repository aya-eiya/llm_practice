import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Last of Us premiere",
    "details":
      "The first episode of HBO's adaptation of The Last of Us video game, starring Pedro Pascal and Bella Ramsey, premiered on January 31st, 2023, to critical acclaim.",
  },
  "date": "2026-01-31",
  "title": "Echoes in Infected Dust",
  "body":
    "The Last of Us adaptation had unleashed something far more sinister than mere television, as if the very essence of the infected world had permeated through every screen. My sister Emily had always been obsessed with this show; she would watch episode after episode without ever taking a break, her eyes glued to the plasma screens that lined our living room walls. \n\n At first, I thought it was just another one of those mindless entertainment programs that people get so caught up in. But as the days went by and the seasons continued to roll out, something began to change within Emily. She started wearing these strange clothes - long, tattered sleeves and a hooded coat that seemed designed to hide whatever was beneath it. \n\n The most terrifying part wasn't even the infected creatures themselves anymore, but what they represented: a kind of dark reflection of humanity's own capacity for fear, violence, and destruction. And as I sat in our living room watching the final season with Emily, I couldn't help but wonder if we had all become like them - trapped in this endless cycle of survival, always looking over our shoulders waiting for the next threat to emerge from the shadows.",
  "word count": 203,
  "dialog": [
    {
      "Billy":
        "The way they portrayed human psychology in that novel was fascinating! It really shows how fear can change people's behavior.",
    },
    {
      "Meg":
        "I loved Emily's character development. Her obsession with the show felt so real, like it was taking over her life.",
    },
    {
      "Lui":
        "As a teacher, I appreciated how the novel explored complex themes of survival and human nature. It's very educational in terms of understanding societal fears.",
    },
    {
      "Kerry":
        "The infected creatures' symbolism as a reflection of humanity's darker side was brilliant! It made me think about our own society's issues.",
    },
    {
      "Billy":
        "I also liked how the novel used science and technology to explore the limits of human nature. Really makes you think about what we're capable of.",
    },
    {
      "Meg":
        "The setting in a post-apocalyptic world was so immersive! I felt like I was right there with Emily watching every episode.",
    },
    {
      "Lui":
        "What's particularly interesting is how the novel addresses themes that are relevant today, such as societal breakdown and collective survival instincts.",
    },
    {
      "Kerry":
        "I'm curious about your thoughts on whether we're becoming more like those infected creatures in real life. The novel seems to suggest it's possible.",
    },
  ],
  "quiz": [
    {
      "question": "What was Emily's main obsession with?",
      "options": [
        "Reading books",
        "Watching TV shows",
        "Playing video games",
        "Listening to music",
        "Drawing art",
      ],
      "answer": 1,
    },
    {
      "question": "How did Emily change after watching the show?",
      "options": [
        "She became more social",
        "She started dressing differently",
        "She moved away from home",
        "She got a new job",
        "She learned to cook",
      ],
      "answer": 1,
    },
    {
      "question":
        "Which character in the dialogue was discussing human psychology?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "Emily",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was Kerry's main point of discussion about the infected creatures?",
      "options": [
        "Their physical appearance",
        "Their behavior patterns",
        "Their symbolism in society",
        "Their role in the story",
        "Their origin background",
      ],
      "answer": 2,
    },
    {
      "question": "How old is Billy according to the dialogue description?",
      "options": [
        "10 years old",
        "11 years old",
        "12 years old",
        "13 years old",
        "14 years old",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Horror",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_8",
  },
};
export default data;
