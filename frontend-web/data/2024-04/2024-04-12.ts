import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First public demonstration of the Telephone",
    "details":
      "Alexander Graham Bell demonstrated his telephone invention to a group of reporters and investors at Brantford, Ontario, Canada",
  },
  "date": "2024-04-12",
  "title": "The Dawn of Telecommunication",
  "body":
    "It was a moment that changed the world forever. The year was 1876 and the setting was a small workshop in Brantford, Ontario, Canada. A group of curious onlookers had gathered to witness the first public demonstration of the telephone, an invention by Alexander Graham Bell.  As Bell stood before them, he picked up the receiver and spoke into it. The crowd listened in amazement as they heard his voice echoing through the wires. It was a magical moment that marked the beginning of telecommunication.  From that day on, the telephone became an essential tool for communication. It revolutionized the way people interacted with each other, allowing them to connect from great distances and share their lives in real-time. The invention of the telephone paved the way for modern telecommunications, leading to advancements in technology and connecting the world like never before.",
  "word count": 142,
  "dialog": [
    {
      "Billy":
        "I never thought I'd be so fascinated by a story about the invention of the telephone! Can anyone tell me why it's such an important part of history?",
    },
    {
      "Lui":
        "Well, Billy, it's because the telephone revolutionized communication. It enabled people to connect with each other instantly, no matter where they were in the world.",
    },
    {
      "Kerry":
        "Yeah, and it was like a magic trick! People could hear each other's voices coming out of thin air!",
    },
    {
      "Meg":
        "I love how the novel highlighted the importance of innovation and perseverance. Bell didn't give up when faced with challenges, and look what happened!",
    },
    {
      "Lui":
        "Exactly, Meg. The story shows us that even the most seemingly impossible ideas can become reality if we stay committed and work hard.",
    },
    {
      "Kerry":
        "I also like how it showed how technology can bring people together. I mean, my grandma lives in another country, but with a phone call, I can talk to her whenever I want!",
    },
    {
      "Billy":
        "That's so cool, Kerry! And it makes me think about all the other ways technology has changed our world.",
    },
    {
      "Meg":
        "I'm just glad I got to learn more about this amazing piece of history. It's really inspiring!",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the year when Alexander Graham Bell demonstrated the first public telephone?",
      "options": [
        "1874",
        "1876",
        "1880",
        "1895",
        "1900",
      ],
      "answer": 1,
    },
    {
      "question":
        "Where did Alexander Graham Bell demonstrate the first public telephone?",
      "options": [
        "New York City",
        "Brantford, Ontario, Canada",
        "London, UK",
        "Paris, France",
        "Tokyo, Japan",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was a significant impact of the invention of the telephone?",
      "options": [
        "It made music more popular",
        "It revolutionized communication",
        "It increased food production",
        "It improved transportation",
        "It reduced energy consumption",
      ],
      "answer": 1,
    },
    {
      "question":
        "Who highlighted the importance of innovation and perseverance in the story?",
      "options": [
        "Billy",
        "Lui",
        "Meg",
        "Kerry",
        "Alexander Graham Bell",
      ],
      "answer": 3,
    },
    {
      "question":
        "What was a magical moment that marked the beginning of telecommunication?",
      "options": [
        "The invention of the computer",
        "The first moon landing",
        "The demonstration of the telephone",
        "The discovery of electricity",
        "The creation of the internet",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Engineering",
    "flavor": "Science Fiction",
    "models": { "main": "llama", "novel": "llava" },
    "level": "Level_5",
  },
};
export default data;
