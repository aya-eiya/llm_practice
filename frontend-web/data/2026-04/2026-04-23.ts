import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Discovery of Pluto",
    "details":
      "On April 23, 1930, American astronomer Clyde Tombaugh discovered Pluto at Lowell Observatory in Flagstaff, Arizona.",
  },
  "date": "2026-04-23",
  "title": "Gears of the Cosmos",
  "body":
    "In the dusty observatory of Flagstaff, Arizona, a lone astronomer toiled away, pouring over celestial maps and star charts. Clyde Tombaugh, a man driven by an insatiable curiosity about the universe, had been searching for something – anything – that could explain the strange anomalies in the heavens. Little did he know, his quest was about to uncover a secret that would change the course of history.  \n\nAs the clock struck midnight on April 23rd, 1930, Tombaugh's eyes widened with excitement as he spotted something peculiar on his telescope lens. It was small, yet faintly luminous – a tiny world hovering at the edge of our solar system. With trembling hands, he scribbled down coordinates and observations, convinced that he had stumbled upon something incredible.  \n\nNews of the discovery spread like wildfire across the globe, sending shockwaves through the scientific community. Pluto, as it came to be known, defied all expectations – a mysterious entity orbiting our sun, yet shrouded in mystery. As the world clamored for answers, Clyde Tombaugh basked in the glory of his triumph, forever etching his name into the annals of astronomical history.",
  "word count": 187,
  "dialog": [
    {
      "Kerry":
        "I loved how they described Clyde Tombaugh's discovery of Pluto! It was so exciting to read about!",
    },
    {
      "Meg":
        "I know, right? I felt like I was right there with him in the observatory, searching for something new.",
    },
    {
      "Lui":
        "Actually, it's interesting to note that Clyde Tombaugh's discovery of Pluto wasn't just a chance find. He had been working on this project for years, pouring over star charts and celestial maps.",
    },
    {
      "Billy":
        "That's so cool! I didn't know he was searching for something specific. What do you think it is about him that made him so determined to discover something new?",
    },
    {
      "Meg":
        "I think it's because he had a sense of wonder and curiosity about the universe. He wasn't just looking for anything, but trying to understand the mysteries of the cosmos.",
    },
    {
      "Kerry":
        "And I loved how the novel talked about how Pluto defied all expectations! It was this tiny, mysterious world that no one knew much about. That's so cool!",
    },
    {
      "Lui":
        "Yes, and it just goes to show you that even when we think we know something, there's always more to learn and discover. Clyde Tombaugh's discovery of Pluto is a great example of that.",
    },
  ],
  "quiz": [
    {
      "question": "Where was Clyde Tombaugh working when he discovered Pluto?",
      "options": [
        "Flagstaff, Arizona",
        "New York City",
        "Los Angeles",
        "Chicago",
        "Boston",
      ],
      "answer": 0,
    },
    {
      "question": "What year did Clyde Tombaugh discover Pluto?",
      "options": [
        "1929",
        "1930",
        "1931",
        "1932",
        "1933",
      ],
      "answer": 1,
    },
    {
      "question": "How did news of the discovery spread?",
      "options": [
        "Slowly through scientific journals",
        "Rapidly across the globe",
        "Only within local communities",
        "Through word of mouth",
        "Unknown",
      ],
      "answer": 1,
    },
    {
      "question": "What was Pluto initially known as after its discovery?",
      "options": [
        "New Planet",
        "Small World",
        "Tiny Entity",
        "Pluto",
        "Unknown",
      ],
      "answer": 3,
    },
    {
      "question":
        "According to Meg, what drove Clyde Tombaugh's determination to discover something new?",
      "options": [
        "A sense of wonder and curiosity about the universe",
        "A desire for fame and recognition",
        "A need for financial gain",
        "A passion for astronomy",
        "Unknown",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Science",
    "flavor": "Steampunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_6",
  },
};
export default data;
