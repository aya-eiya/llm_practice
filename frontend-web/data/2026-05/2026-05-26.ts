import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Galois' Death",
    "details":
      "Évariste Galois, a French mathematician who made significant contributions to the fields of algebra, geometry, and number theory, was killed in a duel at the age of 20 on May 26, 1832.",
  },
  "date": "2026-05-26",
  "title": "Shadow of the Duel",
  "body":
    "The streets were empty and silent in the dead of night. Évariste Galois walked alone, his eyes fixed on the dim light ahead. He had been warned not to duel again, but he couldn't resist the challenge. His pride was at stake, and he knew it was a risk worth taking. \n\n As he approached the meeting point, a figure emerged from the shadows. It was his opponent, a rival mathematician who had bested him in the past. Galois felt a surge of anger and determination. He would not back down this time. The two men faced each other, their faces tense with anticipation. \n\n The sound of gunfire echoed through the night air, and Galois stumbled backwards, his vision fading to black. When he came to, he was lying on the ground, surrounded by the darkness of death. His opponent stood over him, a look of remorse etched on his face. It was too late for apologies now. The damage was done, and Galois's life had been cut short in its prime. \n\n The city would never be the same without Évariste Galois, the brilliant young mathematician who had given his life to prove a point.",
  "word count": 194,
  "dialog": [
    {
      "Meg": "I know, right? Évariste Galois was so brave to die for his math.",
    },
    {
      "Lui":
        "That's not exactly what happened. He died in a duel over a woman and his pride.",
    },
    {
      "Kerry":
        "Whoa, that's intense! I would never duel someone over a girl or my ego.",
    },
    {
      "Billy":
        "I know, me neither. But I have to ask, did he really die because of math?",
    },
    {
      "Meg":
        "Well, it was more like his love for math and being challenged led him to the duel in the first place.",
    },
    {
      "Lui":
        "That's a fair point, Meg. His passion for mathematics likely contributed to his decision.",
    },
    {
      "Kerry":
        "I think what really bothers me is that his life was cut short because of something so senseless. It's like, math shouldn't be worth dying over!",
    },
    {
      "Billy":
        "Yeah, I see what you mean. But at the same time, it shows how important and valuable math can be to people.",
    },
    {
      "Lui":
        "I agree with both of you. Math is a powerful tool, but it's not worth losing one's life over.",
    },
  ],
  "quiz": [
    {
      "question":
        "What time of day was Évariste Galois walking when he approached the meeting point?",
      "options": [
        "Early morning",
        "Midday",
        "Late afternoon",
        "Dead of night",
        "Evening",
      ],
      "answer": 3,
    },
    {
      "question":
        "Why did Évariste Galois feel a surge of anger and determination as his opponent emerged from the shadows?",
      "options": [
        "He was angry with himself for coming late.",
        "His pride was at stake, and he knew it was a risk worth taking.",
        "He had not eaten breakfast that day.",
        "He was tired after walking all morning.",
        "He did not like his opponent's clothes.",
      ],
      "answer": 1,
    },
    {
      "question":
        "What event occurred when the sound of gunfire echoed through the night air?",
      "options": [
        "Galois's vision faded to black, and he stumbled backwards.",
        "Galois's opponent stood over him with a look of remorse on his face.",
        "The duel ended in a draw without any harm done.",
        "Galois emerged victorious but felt sad for his opponent.",
        "Galois died because of a math problem.",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the discussion topic among Meg, Lui, Kerry, and Billy?",
      "options": [
        "The best way to solve a math problem",
        "The importance of getting enough sleep",
        "Évariste Galois's life and death",
        "The benefits of eating breakfast every day",
        "The advantages of being a mathematician",
      ],
      "answer": 2,
    },
    {
      "question": "According to Meg, what led Évariste Galois to the duel?",
      "options": [
        "His love for math was not strong enough.",
        "He wanted to prove himself as the best mathematician.",
        "His passion for mathematics likely contributed to his decision.",
        "He did not like his opponent's answer to a question.",
        "It was because of a woman he loved.",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Mathematics",
    "flavor": "Dystopian",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
