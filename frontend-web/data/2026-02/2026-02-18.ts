import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Public Demonstration of the World Wide Web",
    "details":
      "On February 18, 1993, Tim Berners-Lee and Robert Cailliau gave a public demonstration of the World Wide Web at the European Centre for Nuclear Research (CERN) in Geneva, Switzerland.",
  },
  "date": "2026-02-18",
  "title": "Web of Survival",
  "body":
    "In the charred remnants of a post-apocalyptic world, a solitary figure named Aria scavenged for survival. She stumbled upon an ancient, crumbling structure - CERN. \n\n  Aria's eyes widened as she unearthed a peculiar device - a screen with countless links, unlike anything she'd ever seen. It was a relic from the old world, a precursor to the Web we once knew. \n\n  She managed to power it up, and suddenly, a digital landscape unfolded before her. It was a gateway to information, a treasure trove of knowledge amassed by humanity's collective wisdom. \n\n  Aria learned to navigate this digital maze, from basic sentence structures in old news articles to complex conditional sentences in scientific papers. She mastered gerunds and infinitives, understanding the nuances of 'doing' actions and talking about doing actions. \n\n  The Web became her lifeline, teaching her survival skills, medical knowledge, and even the art of storytelling. It was a beacon of hope in the desolate landscape, a testament to human resilience.",
  "word count": 161,
  "dialog": [
    {
      "Billy":
        "Wow, Aria's story is amazing! I wish we had something like that to learn from.",
    },
    {
      "Kerry":
        "Yeah, imagine having all that knowledge at your fingertips! It'd be like being a superhero with a brain full of answers.",
    },
    {
      "Meg":
        "It's fascinating how she learned so much just by exploring. It shows the power of curiosity and determination.",
    },
    {
      "Lui":
        "Indeed, Meg. It's a testament to human resilience and ingenuity. Despite the apocalypse, Aria found a way to educate herself.",
    },
    {
      "Billy":
        "I wonder what kind of technology she used. I've been tinkering with circuits and I'd love to understand how it worked.",
    },
    {
      "Kerry":
        "Me too, Billy! And can you imagine if we could build something like that today? It'd be epic!",
    },
    {
      "Meg":
        "I'm thinking about writing a story inspired by Aria. She's such an inspiring character for young readers.",
    },
    {
      "Lui":
        "That's a wonderful idea, Meg. Aria's journey could teach us all valuable lessons about perseverance and the thirst for knowledge.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was Aria's primary source of knowledge in the post-apocalyptic world?",
      "options": [
        "A physical library",
        "An ancient, crumbling structure called CERN",
        "A group of survivors",
        "A radio transmission from outer space",
        "A talking animal",
      ],
      "answer": 1,
    },
    {
      "question": "What did Aria learn to navigate on the screen she found?",
      "options": [
        "Basic sentence structures in old news articles",
        "Complex conditional sentences in scientific papers",
        "How to hunt for food",
        "Musical instruments",
        "The art of pottery",
      ],
      "answer": 0,
    },
    {
      "question": "What role did the Web play in Aria's life?",
      "options": [
        "A source of entertainment",
        "A lifeline teaching her survival skills and knowledge",
        "A means to communicate with extraterrestrial beings",
        "A tool for creating physical objects",
        "A method to travel through time",
      ],
      "answer": 2,
    },
    {
      "question": "What inspired Meg to write a story?",
      "options": [
        "The technology Aria used",
        "Aria's perseverance and thirst for knowledge",
        "The post-apocalyptic setting",
        "Aria's ability to hunt",
        "The talking animals in the story",
      ],
      "answer": 2,
    },
    {
      "question": "What did Billy express interest in learning more about?",
      "options": [
        "The technology Aria used",
        "How to build a physical structure like CERN",
        "A new survival technique",
        "The art of pottery",
        "The history of musical instruments",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Technology",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "granite3.1-dense",
      "novel": "granite3.1-dense",
    },
    "level": "Level_5",
  },
};
export default data;
