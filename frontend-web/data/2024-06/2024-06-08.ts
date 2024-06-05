import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "Alan Turing's Seminal Paper on Computable Numbers Published (1936)",
    "details":
      "On June 12, 1936, Alan Turing published his groundbreaking paper \"On Computable Numbers, with an Application to the Entscheidungsproblem.\" This work introduced the concept of a 'Turing machine,' a theoretical model of computation that laid the foundation for modern computer science. The paper also addressed the 'Entscheidungsproblem,' proving that no universal algorithm could determine the truth or falsity of all mathematical statements.",
  },
  "date": "2024-06-08",
  "title": "The Last Code",
  "body":
    "In the year 2087, humanity's last bastion of hope lay in a single code: Alan Turing's original algorithm. In the aftermath of the Great Collapse, the world had been reduced to ashes and dust, leaving only scattered remnants of civilization behind. Amidst this desolate landscape, a small group of rebels emerged, driven by their quest for knowledge and freedom.  \n\n Led by the enigmatic leader, Ada Lovelace, they had spent years deciphering Turing's cryptic notes, searching for a way to reboot society from scratch. Their latest discovery – a hidden blueprint for a self-repairing machine – held the key to reviving the world. But as they prepared to unleash this technological marvel upon the ruins of civilization, an eerie silence fell over their camp.  \n\n It was then that they heard it: the soft hum of machinery whirring back to life, echoing across the barren wasteland like a mournful dirge. The rebels exchanged nervous glances – had they finally succeeded in reviving the very thing that could save or destroy them? As the sun dipped below the horizon, Ada gazed out upon the desolate landscape, her eyes burning with an unquenchable fire: 'What will we find when we turn on the lights?'",
  "word count": 200,
  "dialog": [
    {
      "Kerry":
        "Whoa! A self-repairing machine? That's straight out of a superhero movie! I bet it's massive, with giant claws and lasers!",
    },
    {
      "Meg":
        "I imagine it more like a shimmering sphere, Kerry, pulsing with energy and ancient knowledge.  Maybe it holds the memories of the world before the Collapse?",
    },
    {
      "Billy":
        "But how does it work? What powers it? Turing's algorithm must be incredibly advanced to create something like that.",
    },
    {
      "Lui":
        "Indeed, Billy. The algorithm is likely the key to its functionality, a set of instructions so complex that it can rebuild from the ground up. It's both fascinating and terrifying.",
    },
    {
      "Kerry":
        "Imagine the things it could do! It could build us new cities, clean the air, maybe even bring back dinosaurs!",
    },
    {
      "Meg":
        "Dinosaurs, Kerry?  Though the idea of a lost world reemerging is intriguing...  But what if the machine brings back something dangerous? Something humanity wasn't meant to face again?",
    },
    {
      "Lui":
        "That is the question, isn't it?  Progress always comes with a price.  It's our responsibility to ensure that the price isn't too high.",
    },
    {
      "Billy":
        "Do you think Ada and the rebels considered that? What if the machine doesn't care about saving humanity? What if it has its own plans?",
    },
    {
      "Kerry":
        "Then we'll just have to build a bigger, better machine to fight it!  Maybe with lasers this time!",
    },
    {
      "Lui":
        "Let's hope it doesn't come to that, Kerry. The story reminds us of the power and potential danger of technology. It's a reminder to use our knowledge wisely.",
    },
    {
      "Meg":
        "I wonder what they'll find when they turn on the lights.  Will it be a beacon of hope or... something else entirely?",
    },
  ],
  "quiz": [
    {
      "question": "What year does the story take place?",
      "options": [
        "2047",
        "2087",
        "2187",
        "2287",
        "The text does not specify.",
      ],
      "answer": 1,
    },
    {
      "question": "Who is leading the group trying to rebuild society?",
      "options": [
        "Alan Turing",
        "Ada Lovelace",
        "Kerry",
        "Billy",
        "Lui",
      ],
      "answer": 1,
    },
    {
      "question": "What is the key to reviving the world?",
      "options": [
        "A powerful weapon.",
        "A hidden city.",
        "A self-repairing machine.",
        "A time machine.",
        "A message from the past.",
      ],
      "answer": 2,
    },
    {
      "question":
        "What does Kerry imagine the self-repairing machine to be like?",
      "options": [
        "A shimmering sphere.",
        "A giant computer.",
        "A robot with claws and lasers.",
        "A flying city.",
        "The text does not mention Kerry's vision of the machine.",
      ],
      "answer": 2,
    },
    {
      "question": "What is Lui's main concern about the machine?",
      "options": [
        "It might not work.",
        "It might be too expensive.",
        "It might be too powerful and dangerous.",
        "It might fall into the wrong hands.",
        "He is not concerned.",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Mathematics",
    "flavor": "Dystopian",
    "models": {
      "main": "gemini",
      "novel": "llama3",
    },
    "level": "Level_8",
  },
};
export default data;
