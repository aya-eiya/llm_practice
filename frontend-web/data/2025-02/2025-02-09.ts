import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Discovery of Penicillin",
    "details":
      "On February 9, 1928, Scottish scientist Alexander Fleming discovered penicillin, a bacterium that would revolutionize the treatment of bacterial infections.",
  },
  "date": "2025-02-09",
  "title": "Gearhaven",
  "body":
    "In the misty streets of Gearhaven, where steam-powered contraptions roared to life and hissing pipes spewed forth scalding water, Inspector Clockwork delved into the mystery of a stolen timepiece. The owner, Lady Chronos, was frantic as her precious clockwork pocket watch had vanished from her estate.  \n\n As Clockwork investigated, he discovered a cryptic message on the windowpane: 'The pen is mightier than the gear.' He pondered the meaning behind these enigmatic words, wondering if it was more than just a clever phrase. The case seemed to be linked to a recent discovery of a new type of ink, one that could rewrite history.  \n\n Clockwork followed a trail of clues that led him from the city's black markets to the underground laboratories where scientists experimented with this revolutionary ink. He encountered a cast of characters, each with their own secrets and motives. As he unraveled the threads of the mystery, Clockwork realized that nothing in Gearhaven was as it seemed.",
  "word count": 159,
  "dialog": [
    {
      "Billy":
        "I love the novel! The way it describes Gearhaven's steam-powered contraptions and hissing pipes is so vivid, I can almost hear them working!",
    },
    {
      "Meg":
        "I know, right? And the mystery of the stolen timepiece is so intriguing! I was on the edge of my seat as Clockwork investigated.",
    },
    {
      "Kerry":
        "Yeah, but what really got me was the theme of rewriting history. It's like, if we can change the past, who are we to say what's right or wrong?",
    },
    {
      "Lui":
        "Exactly! And that's what makes this novel so thought-provoking. It challenges us to think critically about our own understanding of history and its impact on society.",
    },
    {
      "Billy":
        "I love how the author wove together science, math, and history in a way that's accessible to everyone. It's like he's saying, 'Hey, kids! You can be interested in anything!'",
    },
    {
      "Meg":
        "And the characters! I adore Clockwork and his determination to solve the mystery. He's so clever and resourceful.",
    },
    {
      "Kerry":
        "Yeah, but what about Lady Chronos? She's like, super rich and powerful, but also really vulnerable at the same time.",
    },
    {
      "Lui":
        "That's a great point, Kerry! The way the author portrays Lady Chronos shows that even those in positions of power can be complex and multifaceted.",
    },
  ],
  "quiz": [
    {
      "question": "What type of contraptions are described in Gearhaven?",
      "options": [
        "Steam-powered engines",
        "Hissing pipes",
        "Clockwork machines",
        "Gear-driven devices",
        "All of the above",
      ],
      "answer": 4,
    },
    {
      "question": "Who is the owner of the stolen timepiece?",
      "options": [
        "Inspector Clockwork",
        "Lady Chronos",
        "The Mayor of Gearhaven",
        "A mysterious stranger",
        "An unknown person",
      ],
      "answer": 1,
    },
    {
      "question":
        "What is the significance of the phrase 'The pen is mightier than the gear'?",
      "options": [
        "It's a clever phrase with no deeper meaning",
        "It refers to the power of writing and knowledge",
        "It's a warning about the dangers of technology",
        "It's a hint at the mystery of the stolen timepiece",
        "It's a joke about clocks",
      ],
      "answer": 1,
    },
    {
      "question": "What is the main theme of the novel?",
      "options": [
        "The importance of history and its impact on society",
        "The power of technology and innovation",
        "The value of friendship and teamwork",
        "The danger of rewriting history",
        "The need for critical thinking",
      ],
      "answer": 0,
    },
    {
      "question": "Who is the main character in the novel?",
      "options": [
        "Inspector Clockwork",
        "Lady Chronos",
        "Billy",
        "Kerry",
        "Meg",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Science",
    "flavor": "Steampunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
