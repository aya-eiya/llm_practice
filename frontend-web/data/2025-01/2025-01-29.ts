import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Beatles Released Sgt Pepper's Lonely Hearts Club Band",
    "details":
      "Sgt. Pepper's Lonely Hearts Club Band is a classic album by The Beatles, released on June 1, 1967, but I found this one for January 29th so it might not be correct. However, the band did have another release date of May 17 1978 with an updated version of Sgt Peppers called 'Sgt Pepper's Lonely Hearts Club Band Gets Better' which is actually a re-release of the original album.",
  },
  "date": "2025-01-29",
  "title": "The Whispering Walls of Sgt. Pepper",
  "body":
    "It was a drizzly evening in Liverpool when I first stumbled upon the mysterious walls of Sgt. Pepper's Lonely Hearts Club Band. The year was 1967, and the Beatles had just released their iconic album, which would change the face of music forever.  \n\nAs I wandered through the streets, I noticed a faint whispering sound emanating from the walls. At first, I thought it was just the wind or my imagination, but as I listened closer, I realized it was actually the voices of the Beatles themselves, singing in harmony with the wind.  \n\nThe more I listened, the more I felt myself being transported to a world where music and magic merged. The whispers grew louder, and I could feel the presence of John, Paul, George, and Ringo, their spirits lingering in the air like a ghostly quartet.  \n\nAs the night wore on, the whispers grew fainter, but the memory of that magical evening stayed with me forever. I knew then that the walls of Sgt. Pepper's were more than just a recording studio – they held the secrets of a bygone era, where music and myth entwined like the threads of a mystical tapestry.",
  "word count": 195,
  "dialog": [
    {
      "Billy":
        "I just finished reading that amazing novel about Sgt. Pepper's Lonely Hearts Club Band! What did you guys think of it?",
    },
    {
      "Kerry":
        "Yeah, I loved it too! The way the author described the magical walls and the Beatles' spirits was so cool!",
    },
    {
      "Meg":
        "I know, right? It felt like I was right there with them, feeling the magic in the air. And I loved how it changed your perspective on music and history.",
    },
    {
      "Lui":
        "Well, as an educator, I think it's great that you guys are excited about learning. That novel is a great way to make history and science come alive.",
    },
    {
      "Billy":
        "Exactly! It made me realize how important it is to have fun while learning. And I loved how the author wove together different concepts in such a creative way.",
    },
    {
      "Kerry":
        "Yeah, and it's not just about the facts – it's about the stories and experiences that make them meaningful. That's what makes history and science so awesome!",
    },
    {
      "Meg":
        "I'm going to write my own story inspired by this novel! I want to create a world where music and magic merge in even more amazing ways.",
    },
    {
      "Lui":
        "That sounds like an exciting project, Meg! Remember, as writers, we have the power to inspire and educate others. Keep pushing boundaries and exploring new ideas!",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the year when the author first stumbled upon the mysterious walls of Sgt. Pepper's Lonely Hearts Club Band?",
      "options": [
        "1965",
        "1967",
        "1968",
        "1970",
        "1972",
      ],
      "answer": 1,
    },
    {
      "question":
        "What were the voices of which musical group emanating from the walls, according to the author?",
      "options": [
        "The Rolling Stones",
        "The Beatles",
        "Queen",
        "Pink Floyd",
        "The Who",
      ],
      "answer": 1,
    },
    {
      "question":
        "As the night wore on, what happened to the whispers of the Beatles' spirits?",
      "options": [
        "They grew louder",
        "They stayed the same",
        "They grew fainter",
        "They disappeared completely",
        "None of the above",
      ],
      "answer": 2,
    },
    {
      "question": "What did Meg want to create after reading the novel?",
      "options": [
        "A new album by The Beatles",
        "A world where music and magic merge",
        "A historical document about Sgt. Pepper's",
        "A biography of John Lennon",
        "A fictional story inspired by the novel",
      ],
      "answer": 3,
    },
    {
      "question":
        "What did Lui, as an educator, think was great about the novel?",
      "options": [
        "It made history and science boring",
        "It was a waste of time",
        "It was a fun way to learn",
        "It changed his perspective on music and history",
        "None of the above",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Historical Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
