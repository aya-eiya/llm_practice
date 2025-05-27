import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "John F. Kennedy Assassination Attempt",
    "details":
      "On June 15, 1950, a man named Oscar Collazo attempted to assassinate President Harry Truman in Blair House, Washington D.C., but was stopped by Secret Service agents. This event occurred just nine years before the assassination of John F. Kennedy on November 22, 1963.",
  },
  "date": "2025-06-15",
  "title": "Time Traveler's Dilemma",
  "body":
    "In the year 2050, a group of scientists discovered a way to travel back in time to any moment in history. They called it the 'Chrono-Device.' The government was thrilled and decided to use it to change the course of events that had led to significant problems in the world today.  \n\n However, as they started using the device, they realized that every time they went back in time, something unexpected happened. A man who tried to assassinate a president 60 years ago found himself stuck in a loop, reliving the same moment over and over again. Another scientist discovered that altering events from decades ago had created a parallel universe where the world was now ruled by robots.  \n\n As they continued to use the device, they realized that changing even the smallest detail could have catastrophic consequences on the future. They decided to stop using it altogether, fearing what other unintended effects might occur. The government, however, wanted to keep the technology for itself and refused to shut it down.",
  "word count": 170,
  "dialog": [
    {
      "Meg":
        "I loved how the scientists discovered the Chrono-Device! It's like, who wouldn't want to travel back in time?",
    },
    {
      "Lui":
        "Yes, but as we see from the novel, altering events can have unintended consequences. We need to be careful with our actions and consider the potential outcomes.",
    },
    {
      "Kerry":
        "I'm still trying to wrap my head around the parallel universe where robots rule the world! It's crazy to think that changing one event could lead to such a drastic outcome.",
    },
    {
      "Billy":
        "Exactly! And it makes me wonder, what if we go back in time and change something again? Would we create another parallel universe or alter the existing one?",
    },
    {
      "Meg":
        "I love how the novel explores the idea of free will versus determinism. If our actions can create alternate realities, then do we have control over our choices at all?",
    },
    {
      "Lui":
        "A very astute observation, Meg! This theme is indeed at the heart of the novel, and it's something that I think we should consider in our own lives as well.",
    },
    {
      "Kerry":
        "I'm still thinking about the man who got stuck in a time loop. What if he couldn't get out? Would he be trapped forever, reliving the same moment over and over again?",
    },
    {
      "Billy":
        "That's a great point! And it makes me wonder, what if we could go back in time and fix past mistakes or injustices? Could we change the course of history?",
    },
  ],
  "quiz": [
    {
      "question": "What device did scientists use to travel back in time?",
      "options": [
        "Time Machine",
        "Chrono-Device",
        "Wormhole Generator",
        "Time Portal",
        "Temporal Displacer",
      ],
      "answer": 1,
    },
    {
      "question": "Who got stuck in a time loop?",
      "options": [
        "A scientist",
        "A president",
        "An assassin",
        "The man who tried to assassinate a president",
        "Billy",
      ],
      "answer": 3,
    },
    {
      "question":
        "What happened when scientists changed events from decades ago?",
      "options": [
        "They created a parallel universe where robots ruled the world.",
        "They went back in time and relived the same moment over and over again.",
        "They discovered a new form of energy.",
        "They met aliens.",
        "None of the above.",
      ],
      "answer": 0,
    },
    {
      "question": "What theme is at the heart of the novel?",
      "options": [
        "Free will versus determinism",
        "The importance of science and technology",
        "The dangers of time travel",
        "The power of human imagination",
        "None of the above.",
      ],
      "answer": 0,
    },
    {
      "question":
        "What did Billy wonder if they could go back in time and change something again?",
      "options": [
        "Would we create another parallel universe or alter the existing one?",
        "Would we meet our ancestors?",
        "Would we learn new things?",
        "Would we be able to fix past mistakes or injustices?",
        "None of the above.",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Politics",
    "flavor": "Science Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
