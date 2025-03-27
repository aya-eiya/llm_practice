import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Woodstock Music Festival",
    "details":
      "A three-day music festival held on August 15-17, 1969, at Max Yasgur's dairy farm in Bethel, New York, featuring performances by iconic musicians such as Jimi Hendrix, Janis Joplin, and The Who.",
  },
  "date": "2025-04-30",
  "title": "The Dark Side of Woodstock",
  "body":
    "The sun was setting over Max Yasgur's dairy farm in Bethel, New York, casting a golden glow over the rolling hills. But amidst the peaceful atmosphere, a sense of unease settled in the pit of my stomach. It was August 1969, and Woodstock Music Festival was about to unleash its dark side.  \n\n I had arrived at the festival with a group of friends, eager to experience the iconic music and counterculture that defined our generation. But as we made our way through the crowded fields, I began to feel a creeping sense of dread. The air was thick with smoke, and the smell of incense wafted through the crowds like a malignant presence.  \n\n As night fell, the music started, and the crowd surged forward, driven by the primal energy of Jimi Hendrix's guitar riffs and Janis Joplin's soulful wails. But beneath the surface, something was stirring – a dark, malevolent force that seemed to be feeding on our collective madness. I felt it in my bones, a chill that ran deeper than any summer breeze.  \n\n And then, it happened. A young couple stumbled through the crowd, their eyes wild with terror. They spoke of a figure they had seen – tall, gaunt, and imposing – lurking just beyond the edge of the festival grounds. I tried to brush it off as mere paranoia, but deep down, I knew that we were not alone in those woods.",
  "word count": 236,
  "dialog": [
    {
      "Billy":
        "I just finished reading that novel about Woodstock, and I have to say it was amazing!",
    },
    {
      "Kerry":
        "I know, right? The way the author described the music festival was so vivid! I felt like I was there.",
    },
    {
      "Meg":
        "I loved how the story explored the darker side of the festival. It was like a mystery unraveling.",
    },
    {
      "Lui":
        "Yes, and the author did a great job of capturing the sense of unease that settled in during those times.",
    },
    {
      "Billy":
        "Exactly! And I have to say, the way the author used language was incredible. So descriptive!",
    },
    {
      "Kerry":
        "Totally agree with you Billy! The writing was like a time machine to the 60s.",
    },
    {
      "Meg":
        "I'm still thinking about that couple who saw something weird in the woods... it gave me chills.",
    },
    {
      "Lui":
        "Yes, it's always interesting to see how authors can create such a sense of tension and suspense.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was happening at Woodstock Music Festival in August 1969?",
      "options": [
        "The music festival was a peaceful event.",
        "The crowd surged forward, driven by the primal energy of Jimi Hendrix's guitar riffs and Janis Joplin's soulful wails.",
        "A young couple stumbled through the crowd, their eyes wild with terror.",
        "The air was thick with smoke, and the smell of incense wafted through the crowds like a malignant presence.",
        "It was a sunny day with clear blue skies.",
      ],
      "answer": 1,
    },
    {
      "question": "What did a young couple see at Woodstock?",
      "options": [
        "A figure they had seen – tall, gaunt, and imposing – lurking just beyond the edge of the festival grounds.",
        "A peaceful atmosphere with no signs of trouble.",
        "The music festival was ending early due to bad weather.",
        "A group of friends arrived at the festival eager to experience the iconic music and counterculture.",
        "The couple saw nothing unusual.",
      ],
      "answer": 0,
    },
    {
      "question": "What was the atmosphere like at Woodstock?",
      "options": [
        "Peaceful with clear blue skies.",
        "A sense of unease settled in the pit of my stomach.",
        "The air was thick with smoke, and the smell of incense wafted through the crowds like a malignant presence.",
        "The crowd surged forward, driven by the primal energy of Jimi Hendrix's guitar riffs and Janis Joplin's soulful wails.",
        "It was a sunny day with clear blue skies.",
      ],
      "answer": 2,
    },
    {
      "question": "What event was being described in the novel?",
      "options": [
        "The Woodstock Music Festival.",
        "A peaceful protest against war.",
        "A group of friends going on a camping trip.",
        "A young couple getting married.",
        "A family reunion.",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the sense that settled in the pit of Billy's stomach?",
      "options": [
        "Hunger and thirst.",
        "Peaceful atmosphere.",
        "A sense of unease.",
        "Fear of something unseen.",
        "Excitement for the music festival.",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Horror",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
