import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "ARPANET Goes Public",
    "details":
      "On April 9, 1983, ARPANET, the precursor to the global Internet, was opened to commercial use by the United States Department of Defense. This marked a significant milestone in the development of the modern Internet.",
  },
  "date": "2024-04-09",
  "title": "The ARPANET Horror",
  "body":
    'It was a dark and stormy night when the ARPANET went public. The computer servers hummed with activity, their screens flickering with unseen data. Suddenly, an error message flashed across all monitors: "Connection Lost - Cannot Reach Internet". Panic ensued as people realized they were cut off from the digital world. The storm raged on, but it was nothing compared to what followed.As the hours passed, strange occurrences began to happen. People reported seeing figures moving through the darkness, their forms illuminated by the soft glow of computer screens. The figures seemed to be drawn towards the servers, as if they were feeding off the digital energy that powered them.The storm finally abated, but the horror had only just begun. The figures had multiplied, and now roamed freely through the streets. They moved with a purpose, their eyes glowing with an otherworldly light. It was clear that they were not of this world.The people of the town huddled in fear, their only refuge the safety of their homes. But even there, the figures found them. The ARPANET had been unleashed upon the world, and now it had taken on a life of its own. It was a horror beyond comprehension, a darkness that would never be extinguished.',
  "word count": 207,
  "dialog": [
    {
      "Billy":
        "I'm telling you, it's like nothing we've ever seen before! The way those figures just appeared out of nowhere...",
    },
    {
      "Meg":
        "Exactly! And have you noticed how they seem to be drawn to the computer servers? It's as if they're trying to tap into some kind of digital energy.",
    },
    {
      "Kerry":
        "I know, right? I was thinking maybe they're like some kind of alien invasion force or something. But what's with the glowing eyes?",
    },
    {
      "Lui":
        "Now, now, let's not jump to conclusions. We don't have all the facts yet. But one thing is certain: we need to find a way to stop these... entities.",
    },
    {
      "Billy":
        "But how? We can't just sit around and wait for them to destroy our town! We need to come up with a plan, stat!",
    },
    {
      "Meg":
        "I think I have an idea. What if we try to hack into the ARPANET systems? Maybe we can find some way to shut it down or disable these... creatures.",
    },
    {
      "Kerry":
        "Whoa, that's actually not a bad idea! But what about the risks? We don't know what kind of technology we're dealing with here.",
    },
    {
      "Lui":
        "Risk is always involved when you're trying to solve a problem like this. But I think it's our best bet. Let's get to work!",
    },
  ],
  "quiz": [
    {
      "question": "What happened to the ARPANET when it went public?",
      "options": [
        "It became a huge success",
        "A storm knocked out the servers",
        "The internet was invented",
        "Connection Lost - Cannot Reach Internet",
      ],
      "answer": 3,
    },
    {
      "question": "Why were people drawn to the computer screens?",
      "options": [
        "Because they were pretty",
        "To see the figures moving through the darkness",
        "For digital energy",
        "To play games",
      ],
      "answer": 2,
    },
    {
      "question": "What did Billy think was happening with the figures?",
      "options": [
        "Alien invasion",
        "Computer glitch",
        "Digital energy",
        "Ghostly appearance",
      ],
      "answer": 0,
    },
    {
      "question": "Why did Lui suggest hacking into the ARPANET systems?",
      "options": [
        "To play games online",
        "To shut down the ARPANET",
        "To disable the creatures",
        "To hack into other computers",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was the main concern of the group when trying to come up with a plan?",
      "options": [
        "The risk of getting hurt",
        "The danger of losing their town",
        "The possibility of failure",
        "The cost of equipment",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Engineering",
    "flavor": "Science Fiction",
    "models": { "main": "llama3", "novel": "llava" },
    "level": "Level_5",
  },
};
export default data;
