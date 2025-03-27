import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Sinking of the Titanic",
    "details":
      "On April 14, 1912, the RMS Titanic collided with an iceberg in the North Atlantic Ocean and sank on April 15, 1912, resulting in one of the deadliest maritime disasters in history.",
  },
  "date": "2024-12-12",
  "title": "A Night to Remember",
  "body":
    "The year was 1912 and I, Emma, a young nurse on board the RMS Titanic, had just finished my evening shift in the hospital. As I walked up to the deck, the crisp night air filled my lungs and I couldn't help but feel a sense of wonder at the grandeur of this ship. \n\n The stars twinkled above like diamonds against the dark canvas of the sky, and the moon cast an silver glow over the waves below. It was as if the world had come to a standstill, and all that existed was this one moment in time. \n\n But little did I know, fate had other plans. A cry went up from the bridge, and soon the ship's crew were rushing to respond to an alarm. I watched in horror as the iceberg loomed before us, its dark shape threatening to destroy our dreams of a new beginning. \n\n The night that would go down in history as one of the greatest maritime disasters of all time had finally arrived, and I was about to face the true meaning of courage.",
  "word count": 181,
  "dialog": [
    {
      "Billy":
        "I just finished reading the novel about Emma, the young nurse on board the Titanic. What did you guys think of it?",
    },
    {
      "Kerry":
        "I loved how the author described the scene with the stars twinkling above and the moon casting a silver glow over the waves. It was so vivid!",
    },
    {
      "Meg":
        "I know, right? I felt like I was right there with Emma on the ship. And then the iceberg looms... it's just so tragic.",
    },
    {
      "Lui":
        "Yes, the author did an excellent job of setting the scene and creating tension. It's a great example of how to write a compelling narrative.",
    },
    {
      "Billy":
        "I'm still thinking about the fact that this is based on real events. It makes it even more emotional and impactful.",
    },
    {
      "Kerry":
        "I was wondering, Lui, what you thought about the way the author handled the historical context of the Titanic's sinking?",
    },
    {
      "Lui":
        "Well, I think the author did a good job of integrating the historical facts with the narrative. It made the story feel more grounded and real.",
    },
    {
      "Meg":
        "I loved how Emma's character was developed throughout the novel. She's so strong and brave in the face of tragedy.",
    },
    {
      "Billy":
        "Yeah, I agree. And it's interesting to see how the author uses her perspective to tell the story. It's not just about the Titanic sinking, but also about Emma's journey.",
    },
  ],
  "quiz": [
    {
      "question": "What was Emma's occupation on board the Titanic?",
      "options": [
        "A young engineer",
        "A young nurse",
        "A young chef",
        "A young officer",
        "A young sailor",
      ],
      "answer": 1,
    },
    {
      "question": "What was happening in the scene Emma described on deck?",
      "options": [
        "The sun was setting over the ocean",
        "The stars twinkled above and the moon cast a silver glow over the waves",
        "The ship's crew were rushing to respond to an alarm",
        "The iceberg loomed before us, its dark shape threatening to destroy our dreams",
        "The passengers were having dinner in the dining hall",
      ],
      "answer": 1,
    },
    {
      "question": "What happened after the cry went up from the bridge?",
      "options": [
        "The ship's crew started preparing for departure",
        "The ship's crew rushed to respond to an alarm",
        "The passengers started dancing in the ballroom",
        "The officers started arguing over a game of cards",
        "The sailors started singing sea shanties",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was Lui's opinion on how the author handled the historical context?",
      "options": [
        "He thought it was poorly done and took away from the story",
        "He thought it was well-integrated and made the story feel more grounded",
        "He thought it was unnecessary and could have been left out",
        "He thought it was too focused on Emma's character",
        "He thought it was a great way to teach kids about history",
      ],
      "answer": 1,
    },
    {
      "question": "What did Billy think was interesting about the novel?",
      "options": [
        "That it was written by a famous author",
        "That it was based on real events and made it more emotional",
        "That it had a happy ending",
        "That it took place in a different time period",
        "That it had a lot of action and adventure",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Historical Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_6",
  },
};
export default data;
