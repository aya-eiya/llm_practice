import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "The first steam-powered locomotive was patented on September 22, 1804.",
    "details":
      "The first steam-powered locomotive was patented by Richard Trevithick in 1804.",
  },
  "date": "2024-09-22",
  "title": "The Last Inhabitant of a Dying Planet",
  "body":
    "The year was 2154, and the once-thriving planet of Earth was now on its last breath. The effects of climate change, pollution, and nuclear war had taken their toll, leaving only one inhabitant: a young woman named Ava.  \n\n Ava's world was a barren wasteland, devoid of life and color. The sky was a perpetual gray, and the air was thick with toxic fumes. She had grown up in this desolate environment, never knowing a time when the planet was green and vibrant.  \n\n Ava's existence was one of survival, scavenging for food and shelter in a world that seemed determined to destroy her. But she held on to hope, a glimmer of light in the darkness. She had heard stories of a time before the catastrophe, when humans lived in harmony with nature.  \n\n As Ava walked through the ruins of a once-great city, she stumbled upon a hidden underground bunker. It was a relic from a bygone era, a testament to human ingenuity and resilience. And it held a secret that could change the course of her life forever.",
  "word count": 178,
  "dialog": [
    {
      "Billy": "I love the novel!",
    },
    {
      "Kerry": "Yeah, it was so sad about Ava's world being destroyed!",
    },
    {
      "Meg":
        "I felt like I was right there with her, surviving in that harsh environment.",
    },
    {
      "Lui":
        "The author did a great job of painting a vivid picture of what life would be like in a post-apocalyptic world.",
    },
    {
      "Kerry":
        "And the bunker! What was up with that? It was like a secret hideout or something!",
    },
    {
      "Billy":
        "I know, right? It was so cool how Ava discovered it and learned about the past. It really gave her hope for the future.",
    },
    {
      "Meg":
        "I loved how the author explored themes of survival, resilience, and the human spirit. It was so inspiring!",
    },
    {
      "Lui":
        "Exactly! And the way the story was written, it felt like you were right there with Ava, experiencing everything she did.",
    },
    {
      "Kerry":
        "Yeah, it was a real page-turner! I didn't want to put it down. What did you guys think of the ending?",
    },
    {
      "Billy":
        "I thought it was great! It left me wanting more, but in a good way. Like, I wanted to know what happened next.",
    },
    {
      "Meg":
        "Totally agree! And the author did a great job of wrapping up the story without giving too much away. It was just right!",
    },
  ],
  "quiz": [
    {
      "question": "What was the state of Earth in 2154?",
      "options": [
        "A thriving planet",
        "A barren wasteland",
        "A planet on the brink of destruction",
        "A planet with no life",
        "A planet with toxic fumes",
      ],
      "answer": 1,
    },
    {
      "question": "Who was the last inhabitant of Earth?",
      "options": [
        "Ava",
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
      ],
      "answer": 0,
    },
    {
      "question": "What did Ava find in the underground bunker?",
      "options": [
        "A secret hideout",
        "A relic from a bygone era",
        "A testament to human ingenuity and resilience",
        "A source of food and shelter",
        "A way to escape the planet",
      ],
      "answer": 2,
    },
    {
      "question": "What was the theme of the novel?",
      "options": [
        "Survival, resilience, and the human spirit",
        "The importance of technology",
        "The power of nature",
        "The impact of climate change",
        "The role of government",
      ],
      "answer": 0,
    },
    {
      "question": "How did the story make you feel?",
      "options": [
        "Inspired, sad, angry, happy, confused",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Engineering",
    "flavor": "Science Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
