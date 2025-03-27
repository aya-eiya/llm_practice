import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The First Performance of The Magic Flute",
    "details":
      "On December 8, 1791, Mozart's opera 'The Magic Flute' premiered at the Burgtheater in Vienna, Austria. It was a huge success and has since become one of Mozart's most popular works.",
  },
  "date": "2024-12-08",
  "title": "Clockwork Serenade",
  "body":
    "In the fog-shrouded alleys of New Babbage, a mysterious melody drifted through the air, entrancing all who heard it. The sound was like nothing anyone had ever experienced before – a symphony of gears and cogs, orchestrated by the genius inventor, Lady Emily Windsor.  \n\n As she walked through the crowded streets, her clockwork serenade wove a spell of wonder over the citizens. Shopkeepers paused in mid-task, mesmerized by the intricate harmonies, while factory workers slowed their pace, entranced by the mechanical beauty. Even the stern-faced clockmaker, Mr. Jenkins, found himself tapping his foot to the rhythm.  \n\n But not everyone was enchanted by Lady Emily's music. The shadowy figure of Lord Harrington, a rival inventor with a reputation for ruthlessness, watched her performance from the shadows, his eyes burning with jealousy. He had been trying to create a similar device, but his attempts had ended in failure. Now, he vowed to steal Lady Emily's secret and claim it as his own.",
  "word count": 160,
  "dialog": [
    {
      "Billy":
        "I love the novel! The way Lady Emily Windsor's clockwork serenade wove a spell of wonder over the citizens was so beautifully described.",
    },
    {
      "Meg":
        "I know, right? I loved how her music brought everyone together. It felt like magic!",
    },
    {
      "Kerry":
        "But what about Lord Harrington? He's got some shady stuff going on. I don't trust him.",
    },
    {
      "Lui":
        "Well, let's not jump to conclusions. We need to consider all the evidence before making a judgment.",
    },
    {
      "Billy":
        "I see what you mean, Mr. Lui. But it feels like he's trying to take advantage of Lady Emily's kindness.",
    },
    {
      "Meg": "That's so unfair! She deserves justice.",
    },
    {
      "Kerry":
        "I'm with Meg on this one. We need to stand up for what's right.",
    },
    {
      "Lui":
        "Okay, okay. Let's not get too carried away. But we do need to keep an eye on Lord Harrington and make sure he doesn't cause any more trouble.",
    },
  ],
  "quiz": [
    {
      "question": "What was Lady Emily Windsor's invention?",
      "options": [
        "A clockwork device",
        "A machine that turns water into wine",
        "A book that predicts the future",
        "A clockwork serenade",
        "A machine that talks to animals",
      ],
      "answer": 3,
    },
    {
      "question":
        "What was Lord Harrington's reaction to Lady Emily's invention?",
      "options": [
        "He loved it and wanted to be friends",
        "He was jealous of her success",
        "He was scared of her invention",
        "He wanted to help her improve it",
        "He didn't care about it",
      ],
      "answer": 1,
    },
    {
      "question": "What did Lady Emily's clockwork serenade do?",
      "options": [
        "It made people angry",
        "It made people sad",
        "It made people happy and wonder-struck",
        "It made people tired",
        "It had no effect on people",
      ],
      "answer": 2,
    },
    {
      "question": "Who was watching Lady Emily's performance from the shadows?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lord Harrington",
        "Lui",
      ],
      "answer": 3,
    },
    {
      "question":
        "What did Lui advise his students to do about Lord Harrington?",
      "options": [
        "Attack him with swords",
        "Betray Lady Emily's secret to Lord Harrington",
        "Keep an eye on him and make sure he doesn't cause trouble",
        "Run away from the problem",
        "Join forces with Lord Harrington",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Steampunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
