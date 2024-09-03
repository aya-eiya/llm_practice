import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "The first stone of the construction of St. Peter's Basilica was laid by Pope Nicholas V",
    "details":
      "On September 23, 1452, Pope Nicholas V laid the first stone of the construction of St. Peter's Basilica in Rome. The ceremony marked the beginning of a major renovation project that would eventually transform the original church into one of the largest and most famous churches in the world.",
  },
  "date": "2024-09-23",
  "title": "The Lost City of St. Peter",
  "body":
    "In the heart of Rome, a hidden city lay beneath the earth. It was said that on September 23, 1452, Pope Nicholas V laid the first stone of its construction. As the years passed, the city grew in size and grandeur, becoming one of the most magnificent places in all the land.  \n\n The people of Rome whispered about the strange occurrences within the city's walls. Some said that on certain nights, when the moon was full, the buildings would glow with an ethereal light. Others claimed to have seen ghostly apparitions walking among the citizens, as if they were being guided by unseen forces.  \n\n One brave adventurer, named Leo, decided to explore the lost city for himself. As he wandered through its streets, he stumbled upon a hidden chamber deep beneath the earth. Inside, he discovered an ancient artifact that pulsed with power. It was said that this relic held the key to unlocking the secrets of St. Peter's Basilica.",
  "word count": 160,
  "dialog": [
    {
      "Kerry":
        "I just finished reading that novel about the hidden city beneath Rome!",
    },
    {
      "Lui":
        "Ah, yes! The city of secrets and ancient artifacts. I've been teaching my students about it in class.",
    },
    {
      "Meg":
        "I loved the part where Leo discovers the hidden chamber and the artifact that pulses with power! It was so exciting!",
    },
    {
      "Billy":
        "Yeah, me too! I was on the edge of my seat wondering what would happen next. And I have to say, the writing style was amazing. So descriptive and immersive.",
    },
    {
      "Kerry":
        "I know, right? The way the author described the city's buildings glowing with an ethereal light was so vivid. It felt like I was there!",
    },
    {
      "Lui":
        "That's exactly what makes history come alive, kids. When we can connect with the past through stories and imagination.",
    },
    {
      "Meg":
        "I loved how the novel explored themes of curiosity and adventure. It made me think about my own love of reading and learning new things.",
    },
    {
      "Billy":
        "Totally agree! And I have to say, I'm impressed by Leo's bravery in exploring the hidden city. He's like a real-life Indiana Jones!",
    },
  ],
  "quiz": [
    {
      "question":
        "What was said to be the starting date of the construction of the lost city?",
      "options": [
        "September 22, 1452",
        "September 23, 1452",
        "September 24, 1452",
        "September 25, 1452",
        "September 26, 1452",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was said to happen to the buildings in the lost city on certain nights?",
      "options": [
        "They would disappear into thin air",
        "They would glow with an ethereal light",
        "They would be swallowed by a giant snake",
        "They would turn into statues",
        "They would become invisible",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was said to have been discovered by Leo in the hidden chamber?",
      "options": [
        "A golden idol",
        "An ancient artifact that pulsed with power",
        "A magical book",
        "A secret door",
        "A hidden treasure",
      ],
      "answer": 1,
    },
    {
      "question": "Who was the brave adventurer who explored the lost city?",
      "options": [
        "Leo",
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was said to be the theme of the novel about the lost city?",
      "options": [
        "Curiosity and adventure",
        "Bravery and friendship",
        "Love and loyalty",
        "Power and greed",
        "Knowledge and wisdom",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Fantasy",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
