import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Beatles release their debut album",
    "details":
      "The Beatles, formerly known as The Quarrymen, released their self-titled first album on February 17, 1963, in the United Kingdom.",
  },
  "date": "2025-02-17",
  "title": "Shadows of Abbeywood",
  "body":
    "The moon cast its silvery glow over the crumbling stones of Abbeywood Manor, a place where shadows danced and whispered secrets to those who dared to listen. It was a night like any other, yet the air was alive with an eerie energy that seemed to reverberate through every cell of Emily's being.  \n\n She had always been drawn to the mystery that surrounded Abbeywood, a place where the past and present converged in a swirling vortex of darkness and despair. It was said that on certain nights, when the moon was full and the wind whispered through the trees, the ghosts of those who had met their untimely demise within its walls would rise from the depths of the earth to relive their final moments.  \n\n Emily felt a shiver run down her spine as she approached the entrance, the heavy wooden door creaking ominously in the wind. She pushed it open, and stepped inside, her heart pounding in anticipation of what lay ahead. The darkness within seemed to swallow her whole, yet she felt an inexplicable sense of peace wash over her, as if she had finally found a place where she truly belonged.",
  "word count": 194,
  "dialog": [
    {
      "Billy":
        "I loved the eerie atmosphere at Abbeywood Manor! It's like I was right there with Emily.",
    },
    {
      "Meg":
        "Yes, yes, yes! I knew it would be a great story from the start. The way the author wove together past and present was simply magic!",
    },
    {
      "Kerry":
        "I'm not sure what to think about the ghosts rising from the earth. It's like, is that even possible?",
    },
    {
      "Lui":
        "Well, students, let's consider this. We've discussed the concept of parallel universes in class before. Perhaps the idea of ghosts rising from the past is a metaphor for...",
    },
    {
      "Billy":
        "I think it's cool how Emily felt at home in that creepy place. It's like she was meant to be there or something.",
    },
    {
      "Meg":
        "Ooh, and I loved her writing style! So descriptive and immersive. I felt like I was right there with her as she explored the manor.",
    },
    {
      "Kerry": "But what if the ghosts were real? Like, in a science-y way?",
    },
    {
      "Lui":
        "Ah, now that's an interesting question, Kerry. Let's consider the possibility of... (starts explaining, but gets interrupted)",
    },
  ],
  "quiz": [
    {
      "question":
        "What was Emily's feeling when she approached Abbeywood Manor?",
      "options": [
        "Excitement",
        "Fear",
        "Peace",
        "Curiosity",
        "Confusion",
      ],
      "answer": 2,
    },
    {
      "question":
        "Why did the author create a sense of mystery around Abbeywood?",
      "options": [
        "To attract tourists",
        "To scare people away",
        "To make it a popular destination",
        "To connect the past and present",
        "To create an eerie atmosphere",
      ],
      "answer": 3,
    },
    {
      "question": "What happened to Emily when she entered Abbeywood Manor?",
      "options": [
        "She felt lost in the darkness",
        "She saw ghosts rising from the earth",
        "She felt a sense of peace wash over her",
        "She heard strange noises",
        "She saw a light in the distance",
      ],
      "answer": 2,
    },
    {
      "question": "What was said about Abbeywood Manor?",
      "options": [
        "It's a place where people go to relax",
        "It's a place where people go to have fun",
        "It's a place where people go to experience paranormal activity",
        "It's a place where people go to learn history",
        "It's a place where people go to feel at home",
      ],
      "answer": 2,
    },
    {
      "question": "What was Kerry's question about?",
      "options": [
        "The possibility of ghosts rising from the earth in a science-y way",
        "The possibility of parallel universes",
        "The possibility of time travel",
        "The possibility of supernatural powers",
        "The possibility of magic",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Gothic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
