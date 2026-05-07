import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "World Wide Web's first website goes live",
    "details":
      "On May 20, 1991, CERN made the World Wide Web available to anyone on the internet.",
  },
  "date": "2026-05-20",
  "title": "Clicking into History",
  "body":
    "The World Wide Web was first made available to the public on August 6, 1991. Tim Berners-Lee, a British computer scientist, invented the web as a way for researchers to share information easily. He wrote the first website using HTML and HTTP protocols.  \n\n CERN, the European Organization for Nuclear Research, hosted the world's first website. It was initially intended for physicists to share documents and data but soon became a platform for information exchange among researchers worldwide. The web revolutionized communication, making it possible for people to access and share information from anywhere in the world.  \n\n As the web grew in popularity, new technologies emerged to facilitate online interactions. Web browsers like Netscape Navigator and Internet Explorer enabled users to navigate and interact with websites. Search engines like Yahoo! and AltaVista helped users find specific information on the vast internet landscape.  \n\n The World Wide Web has come a long way since its inception. From humble beginnings as a tool for researchers, it has evolved into a global network connecting people across cultures and geographical boundaries. Today, the web is an essential part of modern life, influencing the way we communicate, work, and access information.",
  "word count": 194,
  "dialog": [
    {
      "Meg":
        "I loved how it started with Tim Berners-Lee inventing the World Wide Web!",
    },
    {
      "Kerry":
        "Yeah, I didn't know that! But what I liked most was how it changed everything. Suddenly we could access and share information from anywhere in the world.",
    },
    {
      "Lui":
        "Exactly, Kerry. It's amazing to think about how far we've come since then. And let me tell you, the World Wide Web has had a profound impact on modern society.",
    },
    {
      "Billy":
        "I'm surprised it took so long for people to realize its potential. But I guess that's why they say innovation is all about taking what's old and making it new again.",
    },
    {
      "Meg":
        "Definitely! And I think what I liked most was how it transformed communication. No longer were researchers confined to physical locations, sharing their ideas with only a select few. The web broke down those barriers and opened up the world to collaboration on an unprecedented scale!",
    },
    {
      "Kerry":
        "Totally agree, Meg. And have you guys noticed how it's also changed the way we work? I mean, now we can access information from anywhere in the world, at any time.",
    },
    {
      "Lui":
        "That's right, Kerry. The World Wide Web has revolutionized the way we live, work, and interact with one another. It's truly a remarkable achievement!",
    },
    {
      "Billy":
        "Yeah! I'm glad we got to read about its history. It's amazing how something so simple can have such a profound impact on society.",
    },
  ],
  "quiz": [
    {
      "question":
        "When was the World Wide Web first made available to the public?",
      "options": [
        "August 5, 1990",
        "August 6, 1991",
        "September 10, 1992",
        "October 15, 1993",
        "November 20, 1994",
      ],
      "answer": 1,
    },
    {
      "question": "Who invented the World Wide Web?",
      "options": [
        "John Smith",
        "Tim Berners-Lee",
        "Bill Gates",
        "Steve Jobs",
        "Mark Zuckerberg",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was initially intended for physicists to share on the world's first website?",
      "options": [
        "videos and photos",
        "documents and data",
        "music and art",
        "books and research papers",
        "maps and navigation tools",
      ],
      "answer": 1,
    },
    {
      "question":
        "According to Kerry, what was one of the most significant changes brought by the World Wide Web?",
      "options": [
        "making communication more difficult",
        "restricting access to information",
        "allowing people to share ideas globally",
        "increasing physical travel distances",
        "reducing face-to-face interactions",
      ],
      "answer": 2,
    },
    {
      "question":
        "According to Meg, what aspect of the World Wide Web had a profound impact on modern society?",
      "options": [
        "its influence on fashion trends",
        "its role in changing communication methods",
        "its contribution to environmental conservation",
        "its effect on economic systems",
        "its impact on global politics",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Technology",
    "flavor": "Academic Essay",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
