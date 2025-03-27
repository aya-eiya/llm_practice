import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Commercial Recording of a Musical Composition",
    "details":
      'Emile Berliner records "Twinkle, Twinkle, Little Star" on April 29, 1887, and later on July 29, 1888, with the first commercial recording of a musical composition. He uses his invention, the phonograph.',
  },
  "date": "2025-01-01",
  "title": "Neon Dreams",
  "body":
    "In the depths of Neo-Tokyo, where the city never slept and the neon lights pierced the darkness like razor-sharp knives, I walked alongside my cyber-deck, its holographic interface flickering with every step. The rain pounded against my face like a million tiny drummers, but I didn't feel it – my implants had long since numbed me to pain.  \n\n My name is Kael, and I was a ghost in the machine – a hacker of some renown, feared by the corporate elite who controlled the city's flow of information. But tonight was different. Tonight, I had received a message from an unknown source, hinting at a hidden server deep within the city's underground network.  \n\n The streets were narrow and winding, with holographic advertisements dancing across the walls like fireflies on a summer night. I navigated through them with ease, my cyber-deck guiding me towards the server's location. But as I turned a corner, I saw them – the corporate goons, armed to the teeth and sporting cybernetic enhancements of their own.  \n\n They spotted me at the same moment, and our eyes locked in a silent challenge. I knew then that I had to make a decision – either run or fight. And in this city of neon dreams and deadly nightscapes, I chose to fight.",
  "word count": 214,
  "dialog": [
    {
      "Billy":
        "I love the novel! I felt like I was right there in Neo-Tokyo with Kael.",
    },
    {
      "Meg":
        "I know, right? The world-building is so immersive. I loved how the city never slept and the neon lights were like razor-sharp knives.",
    },
    {
      "Kerry":
        "Yeah, it's crazy to think about a city where the streets are always alive. But what really got me was Kael's backstory. He's such a tough guy, but you can tell he's got a soft spot for his cyber-deck.",
    },
    {
      "Lui":
        "That's exactly what I want my students to take away from this novel - that even the toughest characters have vulnerabilities and weaknesses. It makes them more relatable and human.",
    },
    {
      "Billy":
        "I never thought of it that way, Mr. Lui! But you're right. Kael's struggles with his cyber-deck made me feel like I was struggling alongside him.",
    },
    {
      "Meg":
        "And the theme of identity is so cool! Kael's constantly questioning who he is and what he wants to be. It's like, he's a ghost in the machine, but he's also so much more than that.",
    },
    {
      "Kerry":
        "I love how the author doesn't just give you easy answers. You have to figure it out for yourself, like with Kael's final decision - whether to run or fight. It's like, what would I do in his shoes?",
    },
  ],
  "quiz": [
    {
      "question": "What is Kael's profession?",
      "options": [
        "A hacker",
        "A scientist",
        "A doctor",
        "An engineer",
        "A teacher",
      ],
      "answer": 0,
    },
    {
      "question": "Where did Kael receive a message from an unknown source?",
      "options": [
        "The city's underground network",
        "The surface of the earth",
        "The corporate elite's headquarters",
        "The city's government building",
        "Kael's home",
      ],
      "answer": 0,
    },
    {
      "question": "What did Kael choose to do when he saw the corporate goons?",
      "options": [
        "Run away",
        "Fight them",
        "Hide behind a wall",
        "Call for help",
        "Do nothing",
      ],
      "answer": 1,
    },
    {
      "question": "What is unique about Neo-Tokyo?",
      "options": [
        "It's a small city",
        "It's a peaceful place",
        "The city never sleeps",
        "There are no streets",
        "It's a beautiful city",
      ],
      "answer": 2,
    },
    {
      "question": "Why did Kael feel like he was struggling alongside him?",
      "options": [
        "Because of his cyber-deck",
        "Because of the corporate goons",
        "Because of his identity crisis",
        "Because of his past",
        "Because of the rain",
      ],
      "answer": 0,
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
