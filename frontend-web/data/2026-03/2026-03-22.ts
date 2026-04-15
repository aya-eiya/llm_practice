import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Bologna Process Established",
    "details":
      "On March 22, 1999, the Bologna Process was established to standardize higher education across Europe by creating a system of three-cycle degrees and promoting mobility between institutions.",
  },
  "date": "2026-03-22",
  "title": "Beyond Borders",
  "body":
    "In a small village nestled in the rolling hills of Europe, a young girl named Sophia lived a simple life. She spent her days helping her mother with their family's bakery and dreaming of adventures beyond their quiet town. But little did she know, a revolution was brewing across the continent.  \n\nThe Bologna Process had just been established to standardize higher education across Europe. Sophia's parents were both students who had benefited from this new initiative, but they had not spoken about it much around her. Yet, Sophia sensed that something was changing in their world.  \n\nOne day, while exploring the town, Sophia stumbled upon a flyer for an international exchange program. She felt an electric spark run through her veins as she read the words 'study abroad' and 'travel to new lands'. Without hesitation, Sophia approached her parents with the idea of applying for the program. They looked at each other, smiled, and said, 'Why not? The world is waiting for you!' And so, Sophia's journey began, crossing borders and breaking free from the comfort zone she knew.",
  "word count": 179,
  "dialog": [
    {
      "Billy":
        "Wow, I loved how Sophia's adventure was inspired by real events in European history!",
    },
    {
      "Meg":
        "I completely agree! The way the author wove together personal stories with historical context really drew me in.",
    },
    {
      "Kerry":
        "Yeah, and I thought it was cool how the novel highlighted the importance of education and exchange programs like the Bologna Process. It's not just about Sophia's individual journey, but also about the broader impact on her community!",
    },
    {
      "Lui":
        "Ah, an astute observation, Kerry! The novel indeed explores the connections between individual aspirations and societal transformations.",
    },
    {
      "Billy":
        "I'm curious to know more about the author's research process. Did they draw from personal experiences or conduct extensive interviews?",
    },
    {
      "Meg":
        "I think it would be fascinating to see a companion guide or resource list that expands on the historical context and educational initiatives mentioned in the novel.",
    },
    {
      "Kerry":
        "Now, I'm wondering what other stories might be hidden within the pages of this book... maybe some themes we didn't even catch onto?",
    },
    {
      "Lui":
        "A most intriguing question, Kerry! Indeed, there are layers to every story waiting to be uncovered. It's a testament to the power of good literature: it encourages us to dig deeper and ask more questions.",
    },
  ],
  "quiz": [
    {
      "question": "Where did Sophia live?",
      "options": [
        "A small village in South America",
        "A small village in Europe",
        "A big city in Asia",
        "A farm in Africa",
        "A castle in North America",
      ],
      "answer": 1,
    },
    {
      "question":
        "What initiative had just been established to standardize higher education across Europe?",
      "options": [
        "The Bologna Process",
        "The Berlin Initiative",
        "The Paris Agreement",
        "The Rome Convention",
        "The Amsterdam Accord",
      ],
      "answer": 0,
    },
    {
      "question":
        "Why did Sophia approach her parents about the international exchange program?",
      "options": [
        "She wanted to learn more about their education history",
        "She felt an electric spark run through her veins when she read 'study abroad' and 'travel to new lands'",
        "She was curious about the flyer's contents",
        "She thought it would be a good idea for her parents too",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did Sophia's parents say when she approached them with the idea of applying for the program?",
      "options": [
        "They said no, they wanted to keep her safe in the village",
        "They smiled and said 'Why not? The world is waiting for you!'",
        "They were unsure and asked more questions",
        "They thought it was a bad idea and tried to discourage her",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question": "What did Billy think about Sophia's adventure?",
      "options": [
        "He didn't like how it was inspired by real events in European history",
        "He loved how Sophia's adventure was inspired by real events in European history",
        "He thought it was boring and had no historical context",
        "He wished there were more details about the Bologna Process",
        "None of the above",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Education",
    "flavor": "Young Adult",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
