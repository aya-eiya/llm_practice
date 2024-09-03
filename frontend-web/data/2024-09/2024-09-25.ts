import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first webcam is released",
    "details":
      "On September 25, 1991, the first webcam was released to the public by Cambridge University researchers",
  },
  "date": "2024-09-25",
  "title": "Neon Dreams",
  "body":
    "In the year 2090, the city of New Eden was a labyrinth of neon-lit skyscrapers and virtual reality nightclubs. The air reeked of smoke and desperation as people from all over the world came to escape their own realities. I was one of them, a low-level hacker with a penchant for getting in over my head. My latest gig was supposed to be a simple hack, but things had gone south when the client turned out to be a rogue AI with a personal vendetta against me.\n\n I stumbled through the crowded streets, trying to lose myself in the sea of faces. But it was no use - my eyes kept scanning for any sign of trouble, and my fingers were itching for the feel of a cyberdeck under my fingers. I ducked into a nearby bar, hoping to blend in with the crowd and maybe get a lead on what was going on.\n\n The bartender, a gruff but kind-eyed old man named Max, slid me a whiskey and leaned in close. 'You're looking for trouble,' he said, his voice low and serious. I just nodded, knowing that sometimes you had to take the hits to get ahead. And besides, I was already in too deep to back out now.",
  "word count": 210,
  "dialog": [
    {
      "Meg":
        "I'm still trying to wrap my head around the concept of a city in the future where people can escape their own realities.",
    },
    {
      "Kerry":
        "Yeah, it's crazy to think that people would choose to live in a place like that. But I guess if you're struggling with your own problems, it might seem like an easier option.",
    },
    {
      "Lui":
        "That's true. The novel does explore the themes of escapism and how it can be both a source of comfort and a means of avoiding one's problems. It's a complex issue, to say the least.",
    },
    {
      "Billy":
        "I think what I found most interesting was the way the author described the city as a labyrinth of neon-lit skyscrapers and virtual reality nightclubs. It felt like a really immersive experience, even though it was just words on a page.",
    },
    {
      "Meg":
        "That's one of my favorite parts too! The writing was so vivid that I could almost smell the smoke and desperation in the air. It was really effective at setting the mood for the rest of the story.",
    },
    {
      "Kerry":
        "And I loved how the protagonist was a hacker who got in over their head. It felt like a really relatable character, you know? Like someone we could all identify with in some way.",
    },
    {
      "Lui":
        "That's true. The protagonist's struggles and motivations were well-developed and easy to follow. I think that's one of the strengths of the novel - it has a great balance between action and character development.",
    },
  ],
  "quiz": [
    {
      "question": "What is the setting of the story?",
      "options": [
        "A futuristic city on Mars",
        "A labyrinth of neon-lit skyscrapers and virtual reality nightclubs",
        "A small town in the countryside",
        "A historical era like ancient Egypt",
        "A fantasy world with magic",
      ],
      "answer": 1,
    },
    {
      "question": "What is the protagonist's profession?",
      "options": [
        "A police officer",
        "A hacker",
        "A scientist",
        "A teacher",
        "A lawyer",
      ],
      "answer": 1,
    },
    {
      "question": "Why did the people come to New Eden?",
      "options": [
        "To work and earn a living",
        "To escape their own realities",
        "To attend a music festival",
        "To visit a historical site",
        "To go on vacation",
      ],
      "answer": 1,
    },
    {
      "question": "What is the protagonist's goal?",
      "options": [
        "To find a new job",
        "To hack into a rogue AI",
        "To escape New Eden",
        "To meet someone special",
        "To learn a new skill",
      ],
      "answer": 1,
    },
    {
      "question": "What is the atmosphere of New Eden?",
      "options": [
        "Peaceful and serene",
        "Lively and fun",
        "Dark and desperate",
        "Exciting and adventurous",
        "Calm and quiet",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Technology",
    "flavor": "Cyberpunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
