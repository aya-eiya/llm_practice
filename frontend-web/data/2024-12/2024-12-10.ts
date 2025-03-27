import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Beatles release 'A Hard Day's Night' album",
    "details":
      "On August 10, 1964, The Beatles released their third UK studio album, 'A Hard Day's Night'.",
  },
  "date": "2024-12-10",
  "title": "The Shadows of A Hard Day's Night",
  "body":
    "It was a dark and stormy night in Liverpool, the same city where The Beatles had released their album 'A Hard Day's Night' just a few days ago. The rain poured down like a thousand tiny knives, slicing through the streets with an eerie sound that seemed to match the rhythm of my racing heart.  \n\n I was walking home from a friend's house when I stumbled upon an old record store. The sign above the door read 'A Hard Day's Night' in bold letters, and for some reason, it drew me in like a moth to a flame. As I entered the store, I noticed something strange - the records on the shelves seemed to be playing by themselves.  \n\n At first, I thought it was just my imagination, but then I heard the unmistakable sound of 'Can't Buy Me Love' filling the air. The music grew louder and more intense, until I could feel the vibrations of the beat in my bones. Suddenly, the lights flickered and the records stopped playing. I was left standing in darkness, wondering if I had really seen what I thought I saw.",
  "word count": 188,
  "dialog": [
    {
      "Meg":
        "I was so hooked from the beginning, I loved how the story unfolded like a puzzle.",
    },
    {
      "Lui":
        "Excellent choice of setting, it really added to the atmosphere and made me feel like I was there in Liverpool.",
    },
    {
      "Billy":
        "Yeah, and I liked how the author used sensory details to describe the stormy night, it really helped me visualize the scene.",
    },
    {
      "Kerry":
        "I know, right? And the fact that the records were playing by themselves was so cool! I loved the mystery and suspense in that part.",
    },
    {
      "Meg":
        "Exactly! It made me wonder if anything supernatural was happening. And then when it stopped, it just left me with a 'what's next?' feeling.",
    },
    {
      "Lui":
        "Well, that's what makes a good story - leaving the reader wanting more. I think this novel did a great job of keeping me engaged and curious.",
    },
    {
      "Billy":
        "Yeah, and it was so well-written too. The author really had a clear vision and executed it perfectly.",
    },
    {
      "Kerry":
        "I agree, and I loved how the story connected to The Beatles' music. It added an extra layer of depth to the novel for me.",
    },
  ],
  "quiz": [
    {
      "question": "What was happening in Liverpool on a dark and stormy night?",
      "options": [
        "It was a normal day",
        "The Beatles were performing",
        "A record store was playing music by itself",
        "The rain was pouring down",
        "The city was quiet",
      ],
      "answer": 3,
    },
    {
      "question": "What did the narrator see in the record store?",
      "options": [
        "Old records on the shelves",
        "New CDs on the shelves",
        "Books on the shelves",
        "A music concert on stage",
        "Records playing by themselves",
      ],
      "answer": 4,
    },
    {
      "question": "Why was the narrator drawn to the record store?",
      "options": [
        "The sign above the door read 'A Hard Day's Night'",
        "The rain poured down like a thousand tiny knives",
        "The music of The Beatles was playing",
        "The city was quiet",
        "It was a normal day",
      ],
      "answer": 0,
    },
    {
      "question":
        "What did the narrator feel when the lights flickered and the records stopped playing?",
      "options": [
        "Confusion",
        "Suspense",
        "Fear",
        "Excitement",
        "A 'what's next?' feeling",
      ],
      "answer": 4,
    },
    {
      "question": "What was special about the record store?",
      "options": [
        "It had a wide selection of music",
        "It had old records playing by themselves",
        "It had new CDs on the shelves",
        "It had books on the shelves",
        "It was quiet",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Horror",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
