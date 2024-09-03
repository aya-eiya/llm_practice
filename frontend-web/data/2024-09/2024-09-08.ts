import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Bauhaus School is Founded",
    "details":
      "On September 8, 1919, the Bauhaus school was founded by Walter Gropius in Weimar, Germany. It was a pioneering art and design school that emphasized practical and theoretical training in crafts, arts, and technology, influencing modern architecture and design.",
  },
  "date": "2024-09-08",
  "title": "The Time Traveler's Dilemma",
  "body":
    "In the year 2154, a group of scientists discovered a way to travel through time using a device called the 'Chrono-Displacer'. The team, led by Dr. Emma Taylor, was ecstatic about their breakthrough and couldn't wait to explore the possibilities.\n\n\n\nHowever, as they began to test the device, they realized that every time they traveled back in time, they created a new parallel universe. The consequences of this were catastrophic, causing multiple timelines to collide and threatening the very fabric of space-time itself.\n\n\n\nAs the team struggled to comprehend the magnitude of their mistake, they received a message from an unknown sender. 'Stop the Chrono-Displacer before it's too late,' the message read. But who was behind this warning, and what did they know about the device?\n\n\n\nDr. Taylor was torn between her desire to explore the past and her duty to protect the timestream. She knew that stopping the Chrono-Displacer would mean sacrificing their chance at immortality, but she also knew that the consequences of inaction would be dire.",
  "word count": 169,
  "dialog": [
    {
      "Meg":
        "I was on the edge of my seat when Dr. Taylor and her team discovered the Chrono-Displacer!",
    },
    {
      "Kerry":
        "Yeah, and then they realized it created new parallel universes? Mind blown!",
    },
    {
      "Billy":
        "That's so cool! I wish we could travel through time like that. Can you imagine all the historical events we could witness?",
    },
    {
      "Lui":
        "Actually, kids, that's a very complex concept. Time travel would have catastrophic consequences on the timeline itself.",
    },
    {
      "Meg":
        "But what about the message they received? 'Stop the Chrono-Displacer before it's too late.' Who do you think sent that?",
    },
    {
      "Kerry":
        "Hmm, that's a good question. Maybe someone from the future is trying to prevent a disaster?",
    },
    {
      "Billy":
        "I love the novel! The author did an amazing job of making us care about Dr. Taylor and her team.",
    },
    {
      "Lui":
        "Indeed, it's a thought-provoking story that raises important questions about science and responsibility.",
    },
    {
      "Meg":
        "I'm still trying to wrap my head around the multiple timelines. It's like... what if we made a change in our own timeline?",
    },
    {
      "Kerry":
        "Whoa, that's a wild idea! Maybe we could even meet ourselves from different timelines!",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the name of the device that Dr. Taylor's team used to travel through time?",
      "options": [
        "Time-Displacer",
        "Chrono-Device",
        "Chrono-Displacer",
        "Time-Machine",
        "Space-Timer",
      ],
      "answer": 3,
    },
    {
      "question":
        "What was the consequence of Dr. Taylor's team using the Chrono-Displacer?",
      "options": [
        "Creating a new parallel universe",
        "Destroying the fabric of space-time",
        "Traveling to the future",
        "Staying in the present",
        "Moving to a different planet",
      ],
      "answer": 0,
    },
    {
      "question": "Who sent the message to Dr. Taylor's team?",
      "options": [
        "A friend from the past",
        "A stranger from the future",
        "Dr. Taylor herself",
        "The team's mentor",
        "An unknown sender",
      ],
      "answer": 4,
    },
    {
      "question": "What was Dr. Taylor's decision after receiving the message?",
      "options": [
        "To continue using the Chrono-Displacer",
        "To stop using the Chrono-Displacer",
        "To ignore the message and keep exploring",
        "To go back in time and try again",
        "To stay in the present",
      ],
      "answer": 1,
    },
    {
      "question":
        "What would happen if Dr. Taylor's team continued to use the Chrono-Displacer?",
      "options": [
        "Nothing bad would happen",
        "The fabric of space-time would be repaired",
        "Multiple timelines would collide and threaten the timestream",
        "A new parallel universe would be created",
        "Time travel would become possible for everyone",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Science Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
