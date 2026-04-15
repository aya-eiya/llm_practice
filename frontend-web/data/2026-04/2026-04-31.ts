import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Discovery of Tutankhamun's Tomb",
    "details":
      "On May 1, 1922, British archaeologist Howard Carter discovered the tomb of Pharaoh Tutankhamun in Egypt's Valley of the Kings, sparking a global fascination with ancient Egyptian culture.",
  },
  "date": "2026-04-31",
  "title": "The Curse of the Golden Sarcophagus",
  "body":
    "I stepped into the dimly lit chamber, my eyes adjusting to the faint glow emanating from the torches on the walls. The air was thick with the scent of aged dust and forgotten history. I had been searching for this tomb for years, following a series of cryptic clues left behind by Howard Carter himself. \n\n As I approached the sarcophagus, a shiver ran down my spine. Something didn't feel right. The lid was slightly ajar, as if someone or something had recently disturbed it. I pushed it open, and a warm golden light spilled out. \n\n Inside, I found the mummy of Pharaoh Tutankhamun, wrapped in layers of intricate linen and gold jewelry. But it wasn't just any ordinary burial. The pharaoh's face seemed to be staring directly at me, its eyes glowing with an otherworldly intensity. Suddenly, I felt a strange sensation wash over me - as if I was being drawn into the tomb itself. \n\n I knew then that I had to escape, before it was too late. But as I turned to flee, I realized that the door was sealed shut. The curse of the golden sarcophagus had been triggered, and I was trapped.",
  "word count": 196,
  "dialog": [
    {
      "Meg":
        "I'm so glad we got to read this novel! The imagery was incredible!",
    },
    {
      "Billy":
        "Yeah, I loved how the author described the tomb's interior. It felt like I was right there with the protagonist.",
    },
    {
      "Lui":
        "Excellent point, Billy. The author did an excellent job of setting the scene and immersing the reader in the story.",
    },
    {
      "Kerry":
        "I don't know about you guys, but I'm still trying to figure out what triggered the curse. Any theories?",
    },
    {
      "Meg":
        "Hmm, that's a good question! Maybe it was something the protagonist did or said? Or maybe it was just a matter of time before the curse was triggered...",
    },
    {
      "Billy":
        "I think it might have been the way the protagonist interacted with the mummy. I mean, they were pretty respectful at first, but then things started to go wrong.",
    },
    {
      "Lui":
        "That's an interesting observation, Billy. However, I believe the curse was more of a plot device than anything else. The author used it to create tension and keep the reader engaged.",
    },
    {
      "Kerry":
        "I still like my theory better! But what do you guys think about the way the novel ended? Was it satisfying?",
    },
    {
      "Meg":
        "Ooh, yeah! I loved how it tied up loose ends. The author did a great job of wrapping everything up nicely.",
    },
    {
      "Billy":
        "Definitely agree with that. It felt like justice was served in the end.",
    },
  ],
  "quiz": [
    {
      "question": "Where did the protagonist step into?",
      "options": [
        "A dark forest",
        "A dimly lit chamber",
        "An ancient temple",
        "A hidden cave",
        "A vast desert",
      ],
      "answer": 1,
    },
    {
      "question": "What was emitting a faint glow in the chamber?",
      "options": [
        "The torches on the walls",
        "The air itself",
        "The sarcophagus",
        "The mummy's eyes",
        "The surrounding rocks",
      ],
      "answer": 0,
    },
    {
      "question": "Who left cryptic clues for the protagonist to follow?",
      "options": [
        "Howard Carter",
        "Tutankhamun himself",
        "A rival treasure hunter",
        "An unknown figure",
        "The narrator's colleague",
      ],
      "answer": 0,
    },
    {
      "question": "What did Meg say about the novel?",
      "options": [
        "It was boring.",
        "I'm so glad we got to read it!",
        "It was confusing.",
        "I didn't like it.",
        "I thought it was okay.",
      ],
      "answer": 1,
    },
    {
      "question":
        "Why do you think the curse of the golden sarcophagus was triggered?",
      "options": [
        "Because someone disturbed the mummy's rest.",
        "When the protagonist interacted with the mummy in a respectful manner.",
        "As soon as they entered the tomb.",
        "Due to an imbalance in the chamber's energy.",
        "It was just a plot device.",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Archeology",
    "flavor": "Mystery",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
