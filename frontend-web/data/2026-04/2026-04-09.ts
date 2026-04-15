import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Discovery of Pluto's moon Nix",
    "details":
      "Nix is a small irregular moon that orbits the dwarf planet Pluto. It was discovered in 2005 by the New Horizons spacecraft.",
  },
  "date": "2026-04-09",
  "title": "Moonlit Requiem for Nix",
  "body":
    "In the desolate vastness of Pluto's orbit, a faint glow emanated from the icy surface. It was as if the dwarf planet itself was mourning the loss of its hidden companion, Nix. The New Horizons spacecraft had revealed the moon's existence in 2005, but few knew that its discovery would be a harbinger of doom for those who dwelled in the darkness.  \n\n As I ventured deeper into the lunar landscape, I chanced upon an ancient text etched into the frozen rocks. The words spoke of a forgotten prophecy, one that foretold the demise of Nix and the subsequent collapse of Pluto's fragile ecosystem. The moon's irregular orbit had disrupted the balance of celestial forces, precipitating a catastrophic chain reaction.  \n\n And so, I wandered through the shadows, surrounded by an unsettling silence. The whispers of the ancients still lingered, warning of a calamity that would soon engulf us all. In this forsaken realm, where the light of dawn never pierced the veil of night, I realized that Nix's discovery had been a cruel jest – a reminder that even in the depths of space, there is no escape from the crushing weight of fate.",
  "word count": 193,
  "dialog": [
    {
      "Meg":
        "I just finished reading the novel and I have to say, it was incredible! The way the author described Pluto's orbit and the discovery of Nix was so vivid.",
    },
    {
      "Kerry":
        "I know what you mean, Meg. I loved how the author wove together science, history, and a hint of mystery. It was like reading a sci-fi novel!",
    },
    {
      "Lui":
        "Well, let's not forget the educational value of this book. The way it delves into the complexities of celestial mechanics is impressive.",
    },
    {
      "Billy":
        "Yeah, I thought it was cool how the author used ancient prophecies to create tension and foreshadowing.",
    },
    {
      "Kerry":
        "And what about the theme of fate versus free will? It's like, no matter where we are in the universe, our choices can have unintended consequences.",
    },
    {
      "Meg":
        "I think that's one of the most powerful messages of the novel. It's not just about science or history, but about humanity and our place in the cosmos.",
    },
    {
      "Lui":
        "As an educator, I appreciate how this book encourages critical thinking and exploration. It's a great tool for sparking curiosity in young minds like yours, Billy.",
    },
    {
      "Billy":
        "Thanks, Lui! I'm already thinking of projects to do with my friends, like building a model of Pluto's orbit or creating our own space-themed stories.",
    },
    {
      "Meg":
        "That sounds like so much fun! We should collaborate and create something together. Maybe even write a sequel to the novel?",
    },
    {
      "Kerry":
        "Count me in! I'm always up for a creative challenge. Let's make it happen, guys!",
    },
  ],
  "quiz": [
    {
      "question": "What was revealed by the New Horizons spacecraft in 2005?",
      "options": [
        "The surface of Pluto",
        "The existence of Nix",
        "The composition of Pluto's core",
        "The orbit of Nix around Pluto",
        "The discovery of a new planet",
      ],
      "answer": 1,
    },
    {
      "question":
        "According to the ancient prophecy, what would happen if Nix continued its irregular orbit?",
      "options": [
        "Pluto's ecosystem would flourish",
        "Nix would collide with Pluto",
        "A chain reaction leading to a catastrophe would occur",
        "The balance of celestial forces would remain unchanged",
        "The moon Nix would disappear",
      ],
      "answer": 2,
    },
    {
      "question": "What was Meg's opinion about the novel?",
      "options": [
        "It was too difficult to understand",
        "It was not engaging enough",
        "It was incredible and vividly described Pluto's orbit",
        "It did not meet her expectations",
        "She had already read it before",
      ],
      "answer": 2,
    },
    {
      "question":
        "What theme is discussed by Kerry as one of the most powerful messages of the novel?",
      "options": [
        "Fate versus free will",
        "The importance of exploration and discovery",
        "The impact of human choices on the environment",
        "The role of science in understanding the universe",
        "The significance of celestial mechanics",
      ],
      "answer": 0,
    },
    {
      "question": "What project idea did Billy have after reading the novel?",
      "options": [
        "Building a model of Pluto's orbit or creating his own space-themed stories",
        "Writing a sequel to the novel with Meg and Kerry",
        "Creating a documentary about Nix and its discovery",
        "Designing a new spacecraft to explore Pluto",
        "Developing a video game based on the novel",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Science",
    "flavor": "Gothic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_6",
  },
};
export default data;
