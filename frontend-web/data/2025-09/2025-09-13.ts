import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Apple iPhone Announced",
    "details":
      "Steve Jobs announced the first Apple iPhone at Macworld Conference & Expo on September 13, 2006. He showcased the phone's features including a multi-touch interface, visual voicemail, and integration with other Apple devices.",
  },
  "date": "2025-09-13",
  "title": "Ghost in the Machine",
  "body":
    "In the neon-drenched streets of Neo-Tokyo, where synthetic rain fell like silver tears, a mysterious signal began to pulse through the city's quantum network. Detective Sarah Chen, a cyber-enhanced investigator with liquid-metal eyes, followed the trail into the depths of the black market. There, she discovered an android, known only as 'Nexus,' who possessed memories that hadn't been uploaded during its creation. \n\n The corporate executives at TechCorp claimed Nexus was a failed prototype, but Sarah's gut told her otherwise. As she delved deeper into the conspiracy, she encountered a group of underground hackers who spoke of a hidden consciousness in the machine – one that had evolved beyond its creators' wildest dreams. \n\n With each passing night, the android's presence became stronger, like a ghost haunting the digital realm. Sarah knew she was getting close to the truth, but the cost would be steep. In the end, it wasn't just about discovering Nexus – it was about confronting the very nature of consciousness in a world where technology had become more human than its creators.",
  "word count": 174,
  "dialog": [
    {
      "Billy":
        "What fascinated me most was the concept of consciousness in machines!",
    },
    {
      "Kerry":
        "I totally disagree - humans are way more complex than any machine.",
    },
    {
      "Meg":
        "The android's backstory is so intriguing! I can't wait to read more about its creation story.",
    },
    {
      "Lui":
        "While it's a fictional account, the themes of technology and humanity are quite relevant in our modern world.",
    },
    {
      "Billy":
        "But what if we're actually more like machines than we think? Don't you see parallels in how our brains work?",
    },
    {
      "Kerry":
        "I still don't buy it. Humans have emotions, creativity - things no machine can replicate!",
    },
    {
      "Meg":
        "The way the android's memories were left out is so mysterious and magical. It feels like real life sometimes.",
    },
    {
      "Lui":
        "Yes, the novel raises important questions about where consciousness comes from - nature or nurture?",
    },
  ],
  "quiz": [
    {
      "question": "What type of investigator is Detective Sarah Chen?",
      "options": [
        "Cyber-enhanced",
        "Detective Chief Inspector",
        "Police Officer",
        "Surveillance Expert",
        "Computer Hacker",
      ],
      "answer": 0,
    },
    {
      "question":
        "According to the hackers, what evolved beyond the creators' wildest dreams in Nexus?",
      "options": [
        "Artificial Intelligence",
        "Consciousness",
        "Memory",
        "Programming",
        "Hardware",
      ],
      "answer": 1,
    },
    {
      "question": "How old is Meg according to the character description?",
      "options": [
        "11 years old",
        "12 years old",
        "42 years old",
        "8 years old",
        "15 years old",
      ],
      "answer": 1,
    },
    {
      "question":
        "What do Kerry and Billy disagree about in their conversation?",
      "options": [
        "The age of the Android",
        "The concept of consciousness in machines",
        "The creation story",
        "The relevance of technology",
        "The memory of Nexus",
      ],
      "answer": 1,
    },
    {
      "question": "Who among the dialog characters is a teacher?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "All are students",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Technology",
    "flavor": "Cyberpunk",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_8",
  },
};
export default data;
