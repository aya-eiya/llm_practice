import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "May Ball",
    "details":
      "In 1863, May Ball was first held at the University of Cambridge, becoming an annual dance event that has been held on May 7th every year since then.",
  },
  "date": "2025-05-07",
  "title": "Moonlit Masquerade",
  "body":
    "In the heart of the Whispering Woods, a mystical May Ball was held under the light of the full moon. The air was filled with the sweet scent of blooming flowers and the soft rustle of leaves as the guests arrived in their finest attire.  \n\n As I put on my mask, I couldn't help but feel like a stranger in this enchanted world. The music began to play, and I let myself be swept away by the rhythm and the magic of the night. The May Queen, a vision in white, danced with her courtiers, their masks glinting in the moonlight.  \n\n But as the night wore on, whispers began to circulate about a mysterious figure lurking in the shadows. Some said it was a ghost, while others claimed it was a shapeshifter from the Otherworld. I couldn't resist the allure of the unknown and decided to follow the trail of clues that would lead me on a thrilling adventure through the night.",
  "word count": 162,
  "dialog": [
    {
      "Meg": "I loved the mystical atmosphere of the Whispering Woods!",
    },
    {
      "Lui": "Yes, it was quite vivid and immersive, wasn't it?",
    },
    {
      "Kerry":
        "But what really caught my attention was the mysterious figure lurking in the shadows! It sounded like some kind of supernatural entity.",
    },
    {
      "Billy":
        "I agree with Kerry, that part was so intriguing! I love how it kept you guessing about what was real and what wasn't.",
    },
    {
      "Meg":
        "And the May Queen's courtiers were such an interesting detail. I loved how they added to the mystique of the evening.",
    },
    {
      "Lui":
        "Indeed, the author did a great job of weaving together all these different elements to create this enchanting world.",
    },
    {
      "Kerry":
        "I'm still thinking about what that mysterious figure might have been... A ghost? A shapeshifter?",
    },
    {
      "Billy":
        "Maybe it was something entirely unexpected! I love how stories like this can keep you guessing and thinking long after you finish reading.",
    },
  ],
  "quiz": [
    {
      "question": "Where was the mystical May Ball held?",
      "options": [
        "In a castle",
        "In the heart of the Whispering Woods",
        "On a mountain",
        "In a village",
        "At the beach",
      ],
      "answer": 1,
    },
    {
      "question": "What was the name of the queen at the May Ball?",
      "options": [
        "May Queen",
        "Summer Queen",
        "Autumn Queen",
        "Winter Queen",
        "Queen Elizabeth",
      ],
      "answer": 0,
    },
    {
      "question":
        "What began to circulate about a mysterious figure lurking in the shadows?",
      "options": [
        "Whispers of a ghost",
        "Tales of a shapeshifter from the Otherworld",
        "Stories of a thief",
        "Rumors of a monster",
        "Gossip about a stranger",
      ],
      "answer": 1,
    },
    {
      "question": "What did Meg say she loved about the Whispering Woods?",
      "options": [
        "The music and the magic of the night",
        "The May Queen's courtiers",
        "The mysterious figure lurking in the shadows",
        "The sweet scent of blooming flowers",
        "The soft rustle of leaves",
      ],
      "answer": 4,
    },
    {
      "question": "What did Kerry say was intriguing about the story?",
      "options": [
        "The May Queen's attire",
        "The courtiers' masks glinting in the moonlight",
        "The mysterious figure lurking in the shadows",
        "The shapeshifter from the Otherworld",
        "The ghost",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Dance",
    "flavor": "Fantasy",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
