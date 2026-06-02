import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "March on Washington for Jobs and Freedom",
    "details":
      "A major civil rights event where Martin Luther King Jr. delivered his famous 'I Have a Dream' speech, advocating for an end to racism and equal rights for African Americans.",
  },
  "date": "2026-03-27",
  "title": "Beyond the Dream",
  "body":
    "The air was thick with anticipation as I stepped into the National Mall. It had been decades since the March on Washington for Jobs and Freedom, but its echoes still resonated through my mind. Dr. King's words, like a siren's call, beckoned me to march forward. \n\n As I walked among the sea of faces, I felt an unshakeable sense of purpose. We were not just marching for equality; we were fighting against the very fabric of society that seemed determined to hold us back. The echoes of Dr. King's 'I Have a Dream' speech still lingered in my ears, and I knew I was not alone. \n\n Our footsteps merged into a powerful crescendo as we reached the Lincoln Memorial. It was there, beneath the watchful eyes of the 16th President, that Dr. King had declared his dream. As I gazed up at the statue, I realized my own dreams were not so different from those he had proclaimed. We all wanted to break free from the shackles of oppression and forge a new path, one where justice and equality walked hand in hand.",
  "word count": 183,
  "dialog": [
    {
      "Billy":
        "I felt like I was right there with you in Washington D.C., it's amazing how Dr. King's words still resonate today.",
    },
    {
      "Kerry":
        "Totally! And I loved how the author connected the past to our present, showing us how far we've come but also how much work is left to do.",
    },
    {
      "Meg":
        "I was on edge the whole time, wondering if they would actually achieve their goals. It's so powerful to see the impact of one person's determination.",
    },
    {
      "Lui":
        "As an educator, I appreciate how this novel uses history to teach us about social justice and activism. It's a valuable lesson for young people like you all.",
    },
    {
      "Kerry":
        "I was thinking, what if we didn't have someone like Dr. King? Would things be different today?",
    },
    {
      "Billy":
        "That's a good question! I think it shows how one person can make a difference, but also how much work is needed to create real change.",
    },
    {
      "Meg":
        "I liked how the author highlighted the importance of perseverance and community. It's not just about individual actions, but also about coming together for a common cause.",
    },
    {
      "Lui":
        "Well said, Meg! And Billy, you're right that one person can make a difference, but it takes many people working together to create lasting change.",
    },
  ],
  "quiz": [
    {
      "question": "Where did Dr. King declare his dream?",
      "options": [
        "The Lincoln Memorial",
        "The National Mall",
        "Washington D.C.",
        "Dr. King's home",
        "The White House",
      ],
      "answer": 0,
    },
    {
      "question":
        "According to the dialogue, what is the significance of Dr. King's words today?",
      "options": [
        "They are no longer relevant.",
        "They inspire people to take action.",
        "They have been forgotten.",
        "They have not made a difference.",
        "We don't know why they're significant.",
      ],
      "answer": 1,
    },
    {
      "question":
        "Who said, 'It's so powerful to see the impact of one person's determination'?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "The narrator",
      ],
      "answer": 2,
    },
    {
      "question":
        "What is the theme of perseverance and community highlighted in the dialogue?",
      "options": [
        "It's about individual actions, not collective efforts.",
        "It's only important for young people.",
        "It's crucial for creating lasting change.",
        "It's not mentioned at all.",
        "It's only relevant to social justice",
      ],
      "answer": 3,
    },
    {
      "question":
        "According to the dialogue, what if we didn't have someone like Dr. King?",
      "options": [
        "We wouldn't be discussing his legacy today.",
        "Things might be different today.",
        "Dr. King would still exist.",
        "We can't know for sure.",
        "Nothing would change.",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Society",
    "flavor": "Mystery",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
