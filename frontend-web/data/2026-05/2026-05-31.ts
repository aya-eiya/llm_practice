import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Armory Show of 1913",
    "details":
      "A seminal art exhibition held at the 69th Regiment Armory in New York City, which introduced European avant-garde artists such as Marcel Duchamp and Constantin Brancusi to the American public.",
  },
  "date": "2026-05-31",
  "title": "Gears of Rebellion",
  "body":
    "In the fog-shrouded streets of New Babbage, a mysterious exhibition had caught the attention of the city's most brilliant inventors and artists. The Armory Show of 1913 was not just any ordinary art show; it was an explosion of creativity and innovation that challenged the status quo. I, Arabella Wychwood, was one such inventor who found myself drawn to this avant-garde spectacle.  \n\nAs I strolled through the crowded halls, my goggles perched on my forehead, I marveled at the works of Marcel Duchamp and Constantin Brancusi. Their pieces were not just beautiful; they were also a commentary on the social norms of our time. The way they manipulated materials and forms was nothing short of genius.  \n\nBut amidst all this creative ferment, a sense of unease began to stir within me. Was it possible that these artists were more than just visionaries? Were they perhaps agents of change, intent on toppling the established order? I knew I had to uncover the truth behind the Armory Show's true purpose. Little did I know, my curiosity would soon lead me down a rabbit hole of steam-powered intrigue and rebellion.",
  "word count": 187,
  "dialog": [
    {
      "Kerry":
        "I'm so glad we got to read this novel! I loved how it was set in New Babbage, it felt like I was right there with Arabella Wychwood.",
    },
    {
      "Meg":
        "I know what you mean, Kerry. I was a bit skeptical at first because I don't usually read about inventors and artists, but this was really cool.",
    },
    {
      "Billy":
        "Yeah, and the way the author wove together science, art, and history was amazing! It's not every day you get to learn about Marcel Duchamp and Constantin Brancusi in a novel.",
    },
    {
      "Lui":
        "I'm glad you all enjoyed it. I must say, I was impressed by how well the author captured the spirit of innovation and rebellion that defined the Armory Show.",
    },
    {
      "Kerry":
        "Definitely! And I loved how the story raised questions about the role of art in society. It made me think about my own projects and whether they're just for fun or if they could actually make a difference.",
    },
    {
      "Meg":
        "Same here, Kerry. I've been working on this fantasy novel and it's always nice to see real-world inspirations like this one. Maybe I'll incorporate some of these themes into my story too!",
    },
    {
      "Billy":
        "That would be awesome! We could totally write a book together that combines science, art, and history in a fantastical way.",
    },
    {
      "Lui":
        "Now hold on there, young minds! Let's not get ahead of ourselves. But I do think it's great to see you all getting excited about learning and creativity.",
    },
  ],
  "quiz": [
    {
      "question": "Where was the Armory Show of 1913 held?",
      "options": [
        "Paris",
        "New Babbage",
        "London",
        "New York City",
        "Rome",
      ],
      "answer": 1,
    },
    {
      "question":
        "What were the works of Marcel Duchamp and Constantin Brancusi like?",
      "options": [
        "They were beautiful but didn't say much about society.",
        "They were only interesting to inventors and artists.",
        "They manipulated materials and forms in a genius way, also commenting on social norms.",
        "They had no connection to science or history.",
        "They weren't well-known at the time.",
      ],
      "answer": 2,
    },
    {
      "question": "Why did Arabella Wychwood visit the Armory Show?",
      "options": [
        "To see the artwork and be inspired.",
        "Because she was a detective looking for clues.",
        "She was an inventor who wanted to understand the creative process.",
        "To meet the artists and learn from them.",
        "She wasn't interested in art.",
      ],
      "answer": 2,
    },
    {
      "question": "What did Lui say about the author's work?",
      "options": [
        "He thought it was boring and lacked creativity.",
        "He said the author didn't do enough research on science, art, and history.",
        "He praised the way the author captured the spirit of innovation and rebellion.",
        "He didn't like how the story portrayed inventors and artists.",
        "He thought the book was too long.",
      ],
      "answer": 2,
    },
    {
      "question": "What project did Meg say she's been working on?",
      "options": [
        "A fantasy novel",
        "A science textbook",
        "An art history book",
        "An inventor's journal",
        "A mystery story",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Steampunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
