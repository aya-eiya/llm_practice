import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Founding of the University of Uppsala",
    "details":
      "On April 28, 1477, the University of Uppsala was founded by Gustav Vasa, King of Sweden. The university is considered one of the oldest and most prestigious in Scandinavia.",
  },
  "date": "2024-04-28",
  "title": "The Dream of Gustav Vasa",
  "body":
    "Gustav Vasa was a man who dreamed of creating a place where knowledge could be shared and celebrated. He envisioned a university that would bring together scholars from all corners of the world, a place where ideas could be exchanged and the human mind could flourish. On April 28, 1477, Gustav Vasa's dream became a reality as he founded the University of Uppsala. The university was to become one of the oldest and most prestigious in Scandinavia, a place where minds were pushed to their limits and the boundaries of knowledge were expanded. But as the years passed, the university began to lose its luster. Scholars from all over Europe flocked to the university, but they brought with them their own ideas and ways of thinking. The university became a melting pot of cultures and ideologies, and soon the dream that Gustav Vasa had envisioned began to fade away. As the years passed, the university became more and more like any other institution, until eventually it was nothing more than a shadow of its former self.",
  "word count": 176,
  "dialog": [
    {
      "Billy":
        "I didn't expect the University of Uppsala to have such a rich history! I mean, who knew Gustav Vasa was a visionary?",
    },
    {
      "Kerry":
        "Yeah, I know what you mean, Billy. And what's crazy is that it's not just about the university - it's about how knowledge can bring people together.",
    },
    {
      "Meg":
        "I loved learning about the scholars from all over Europe coming to Uppsala. It felt like a really special place where people could share their ideas.",
    },
    {
      "Lui":
        "That's exactly what I was thinking, Meg. The idea of a melting pot of cultures and ideologies is fascinating. It shows how knowledge can transcend borders and backgrounds.",
    },
    {
      "Billy":
        "And it's not just about the past - it's also about the present. I mean, we have our own ways of sharing ideas and learning from each other.",
    },
    {
      "Kerry":
        "Totally, Billy! We've got social media, online courses... the possibilities are endless. It's like Gustav Vasa's dream is still alive and kicking today.",
    },
    {
      "Meg":
        "I never thought about it that way, Kerry. But I guess you're right - we do have our own ways of sharing knowledge and celebrating our differences.",
    },
    {
      "Lui":
        "Well said, Meg. And I think that's what makes this story so relevant to us as readers. We can learn from the past and apply those lessons to our own lives today.",
    },
  ],
  "quiz": [
    {
      "question": "What was Gustav Vasa's dream?",
      "options": [
        "to build a castle",
        "to found a university",
        "to conquer Europe",
        "to write a book",
        "to become king",
      ],
      "answer": 1,
    },
    {
      "question": "When was the University of Uppsala founded?",
      "options": [
        "1450",
        "1477",
        "1500",
        "1550",
        "1600",
      ],
      "answer": 1,
    },
    {
      "question": "What happened to the University of Uppsala over time?",
      "options": [
        "it became more prestigious",
        "it lost its luster",
        "it became a melting pot of cultures and ideologies",
        "it moved to another location",
        "it was abandoned",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did the scholars from all over Europe bring with them to the University of Uppsala?",
      "options": [
        "only books",
        "their own ideas and ways of thinking",
        "only friends",
        "only food",
        "only clothes",
      ],
      "answer": 1,
    },
    {
      "question":
        "How does Kerry think Gustav Vasa's dream is still alive today?",
      "options": [
        "it's not relevant to modern times",
        "it's only applicable to the past",
        "through social media and online courses",
        "by building more universities",
        "through writing books",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Philosophy",
    "flavor": "Surrealism",
    "models": { "main": "llama", "novel": "llava" },
    "level": "Level_5",
  },
};
export default data;
