import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "The Beatles release their debut album 'Please Please Me' in the UK.",
    "details":
      "It topped the UK Albums Chart for 30 weeks, marking them as a major force in the British music scene.",
  },
  "date": "2024-10-30",
  "title": "Neon Dreams",
  "body":
    "In the city of New Eden, where the streets never slept and the neon lights danced across the sky, I met her. She was a cyber-girl, with skin as white as snow and hair as black as coal. Her eyes were green, like the first leaves of spring, and they sparkled with a fire that seemed to burn from within. \n\n I was a low-level hacker, just trying to make a living in this crazy world. But she was something different, something more. She had a power within her, a power that could change everything. And yet, she was running from it, hiding from the truth about herself and her destiny. \n\n I knew then that I had to help her, no matter what dangers lay ahead. So I joined forces with her, and together we set out on a journey through the dark streets of New Eden, seeking answers to questions we didn't even know how to ask. And in this city of light and shadow, where the past and future collided, I discovered that the line between reality and fantasy was thinner than I ever thought possible.",
  "word count": 187,
  "dialog": [
    {
      "Kerry": "I don't get it, what's the point of the novel?",
    },
    {
      "Meg":
        "Oh my gosh, I loved it! The way it described New Eden was so vivid and immersive.",
    },
    {
      "Billy":
        "Yeah, I felt like I was right there with them in the city. And the cyber-girl thing was so cool!",
    },
    {
      "Lui":
        "Actually, kids, the novel is trying to say something about the dangers of unchecked technological progress.",
    },
    {
      "Meg":
        "That's true, but it's also a story about friendship and helping someone in need. It's not all doom and gloom!",
    },
    {
      "Kerry":
        "Yeah, and it was so relatable! I mean, who hasn't felt like they're stuck in a world that's moving too fast?",
    },
    {
      "Billy":
        "Exactly! And the way it explored the boundaries between reality and fantasy was really interesting.",
    },
    {
      "Lui":
        "Well said, Billy. It's not just a fun adventure story, but also a thought-provoking one.",
    },
    {
      "Meg":
        "I'm going to have to read it again now that we've discussed it. I want to see if I can pick up on any other themes or symbolism.",
    },
  ],
  "quiz": [
    {
      "question": "What city is the story set in?",
      "options": [
        "New York",
        "Los Angeles",
        "New Eden",
        "Chicago",
        "Miami",
      ],
      "answer": 2,
    },
    {
      "question": "What is the cyber-girl's eye color?",
      "options": [
        "Blue",
        "Green",
        "Brown",
        "Grey",
        "Purple",
      ],
      "answer": 1,
    },
    {
      "question": "Who is the protagonist of the story?",
      "options": [
        "Kerry",
        "Billy",
        "Meg",
        "Lui",
        "The hacker",
      ],
      "answer": 4,
    },
    {
      "question": "What power does the cyber-girl possess?",
      "options": [
        "Super strength",
        "Telekinesis",
        "Ability to change reality",
        "Power of teleportation",
        "Nothing special",
      ],
      "answer": 2,
    },
    {
      "question": "Why is the hacker helping the cyber-girl?",
      "options": [
        "Because he likes her",
        "To make a living in New Eden",
        "Because she has a power within her",
        "Because he feels sorry for her",
        "None of the above",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Cyberpunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
