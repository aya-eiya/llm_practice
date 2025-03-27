import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Beatles release their debut album 'Please Please Me'",
    "details":
      'The Beatles, previously known as The Quarrymen, release their first official album, which features hits like "I Saw Her Standing There" and "Misery."',
  },
  "date": "2025-01-02",
  "title": "Neon Dreams in a Dying City",
  "body":
    "In the ravaged streets of New Eden, the once-vibrant neon lights now flickered with a desperate intensity. The air reeked of smoke and desperation as the city's inhabitants struggled to survive amidst the ruins of their former lives.  \n\n Amidst this bleak backdrop, a lone figure emerged - a young woman named Aria, her eyes fixed on the horizon as she navigated the treacherous landscape with a practiced ease. Her mind was consumed by a singular goal: to uncover the truth behind the mysterious disappearance of her sister, and to bring those responsible to justice.  \n\n As Aria delved deeper into the city's underbelly, she encountered a cast of characters as twisted and fractured as the city itself - from the enigmatic leader of the scavenger gangs to the brilliant but reclusive scientist hiding in the shadows. Each one revealed a piece of the puzzle, slowly illuminating the dark forces driving New Eden's downfall.  \n\n But with every step forward, Aria sensed that she was being pulled into a world where the lines between right and wrong were blurred - where even her own loyalties would be tested in the crucible of revolution. And as the city teetered on the brink of collapse, one question echoed through her mind: could she find redemption in this dying world?",
  "word count": 214,
  "dialog": [
    {
      "Billy":
        "I loved how Aria navigated through the treacherous landscape with a practiced ease.",
    },
    {
      "Meg":
        "And I loved how the author described the city's underbelly, it was so vivid!",
    },
    {
      "Kerry":
        "Yeah, but what I didn't like was how the lines between right and wrong were blurred. It felt like the protagonist was getting pulled into a world where anything goes.",
    },
    {
      "Lui":
        "Actually, Kerry, that's one of the strengths of the novel. It shows how in a world with so much chaos and destruction, it's easy to get caught up in the gray areas.",
    },
    {
      "Billy":
        "I never thought of it that way, Lui. But what about Aria's sister? What was your take on her disappearance?",
    },
    {
      "Meg":
        "Oh, I loved how the author kept hinting at a larger conspiracy throughout the novel. It made me want to keep reading to find out more.",
    },
    {
      "Kerry":
        "Yeah, and it was so frustrating because Aria seemed to be getting closer to the truth, but then something would happen and she'd have to start over again.",
    },
    {
      "Lui":
        "Well, that's what makes it a good mystery. It keeps you guessing until the very end.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was Aria's goal in navigating through the treacherous landscape?",
      "options": [
        "To find food",
        "To uncover the truth behind her sister's disappearance",
        "To escape from New Eden",
        "To meet with Billy",
        "To attend a party",
      ],
      "answer": 1,
    },
    {
      "question": "Who was the leader of the scavenger gangs?",
      "options": [
        "A mysterious figure",
        "The scientist",
        "Billy",
        "Meg",
        "Kerry",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was described in the novel as being twisted and fractured?",
      "options": [
        "The characters",
        "The city itself",
        "Aria's mind",
        "New Eden's downfall",
        "The lines between right and wrong",
      ],
      "answer": 1,
    },
    {
      "question": "Why did Kerry not like the novel?",
      "options": [
        "It was too long",
        "It had too many characters",
        "The lines between right and wrong were blurred",
        "It didn't have enough action",
        "It wasn't interesting",
      ],
      "answer": 2,
    },
    {
      "question": "What did Lui think was a strength of the novel?",
      "options": [
        "It had a happy ending",
        "It showed how in a world with so much chaos and destruction, it's easy to get caught up in the gray areas",
        "It had too many characters",
        "It was too long",
        "It wasn't interesting",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Cyberpunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_6",
  },
};
export default data;
