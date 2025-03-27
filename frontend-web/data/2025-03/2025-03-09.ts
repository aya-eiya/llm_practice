import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Beatles Release Revolver",
    "details":
      "The Beatles released their sixth studio album, Revolver, on August 5, 1966, in the UK and on August 8, 1966, in the US. The album was a critical and commercial success, and is often considered one of the greatest albums ever made.",
  },
  "date": "2025-03-09",
  "title": "Love in the Revolution",
  "body":
    "It was August 1966, and London was buzzing with excitement. The Beatles' new album, Revolver, had just been released, and everyone was talking about it. For Emma, a young music journalist, it was more than just an album - it was a symbol of the changing times.  \n\n As she walked through the crowded streets, Emma felt like she was part of something bigger than herself. The air was electric with anticipation, and the sound of guitars and drums filled her ears. She had always been passionate about music, but this was different. This was a revolution in sound.  \n\n Emma's eyes met those of Jack, a musician who had just opened his own club. He was charismatic and confident, with a smile that could light up the room. As they talked, Emma felt drawn to him, like a magnet. They discussed music, politics, and life, and she found herself feeling more alive than ever before.  \n\n But as the night wore on, Emma realized that Jack was hiding something from her. Was it his past, or something more? She couldn't help but feel drawn to him, even though she knew it might be trouble.",
  "word count": 192,
  "dialog": [
    {
      "Kerry":
        "I just finished reading the novel, it's so cool! I love how Emma is part of the music revolution.",
    },
    {
      "Meg":
        "I know, right? I was obsessed with the Beatles when I was younger. Their music is timeless!",
    },
    {
      "Lui":
        "As a teacher, I appreciate how the author weaves together history and culture. It's a great way to learn about the times.",
    },
    {
      "Billy":
        "Yeah, it's like they say, 'those were the days'! The novel really captures the spirit of that era.",
    },
    {
      "Kerry":
        "But what I liked most is how Jack is this charismatic musician who opens his own club. It's so inspiring!",
    },
    {
      "Meg":
        "I loved Emma's character development throughout the story. She's so relatable and determined.",
    },
    {
      "Lui":
        "That's true, Emma is a strong protagonist. And I think the author did a great job of showing how music can bring people together.",
    },
    {
      "Billy":
        "Absolutely! It's like the novel says, 'the sound of guitars and drums filled her ears'. That's so vivid!",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the name of the Beatles' album released in August 1966?",
      "options": [
        "Sgt Pepper's Lonely Hearts Club Band",
        "Revolver",
        "Abbey Road",
        "Let It Be",
        "Hey Jude",
      ],
      "answer": 1,
    },
    {
      "question": "Who is Emma, according to the novel?",
      "options": [
        "A young music journalist",
        "A musician who opened his own club",
        "A teacher who loves history and culture",
        "A boy who loved the Beatles' music",
        "A girl who was obsessed with the Beatles",
      ],
      "answer": 0,
    },
    {
      "question":
        "What did Emma feel like she was part of something bigger than herself?",
      "options": [
        "A revolution in sound",
        "A change in politics",
        "A shift in culture",
        "A new era in music",
        "A movement for peace",
      ],
      "answer": 0,
    },
    {
      "question": "What did Jack open, according to the novel?",
      "options": [
        "A club where people could dance and have fun",
        "A restaurant that served delicious food",
        "A music school where people could learn to play instruments",
        "His own club",
        "A gym where people could work out",
      ],
      "answer": 3,
    },
    {
      "question":
        "What did the sound of guitars and drums fill Emma's ears with?",
      "options": [
        "Excitement and anticipation",
        "Electricity and energy",
        "Music and joy",
        "The spirit of the times",
        "A sense of belonging",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
