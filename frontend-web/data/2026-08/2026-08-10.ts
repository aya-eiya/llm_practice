import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Global Summer Blockbuster Season Kickoff",
    "details":
      "August 10th often marks a critical period in film history as major studios release highly anticipated summer blockbusters. This annual cycle significantly drives global box office trends, shifts cinematic focus toward large-scale entertainment, and defines the cultural conversation for the remainder of the year.",
  },
  "date": "2026-08-10",
  "title": "The Signal of Faded Glory",
  "body":
    "[\n\n] A small group of scavengers moved through the skeletal remains of the city. The structures, which had been devastated by decades of global weather shifts, offered little sustenance. They were searching for anything that could be traded—a battery, a book, or perhaps just a piece of functioning technology.\n\n[\n\n] Near a collapsed theater, one survivor found an ancient projector. It was covered in dust and neglect, yet it held the promise of light. If they managed to repair the generator, they might be able to see something more than the dark ruins. The people, who lived on meager rations, needed more than just survival; they craved distraction.\n\n[\n\n] They finally got a flicker of power. A salvaged film began to play: a massive summer blockbuster about alien invasions. Watching the spectacle in this broken world felt like an absurd luxury. The story, which was filled with explosions and dramatic rescues, offered strange comfort. It was a reminder that once, the world had cared so much about things far larger than themselves.",
  "word count": 175,
  "dialog": [
    {
      "Kerry":
        "I don't know if I call it comfort or just a very sophisticated form of denial. They are living in literal ruins, yet they choose a massive summer blockbuster over finding food.",
    },
    {
      "Lui":
        "That is the central irony of the excerpt, Kerry. It speaks to the enduring human need for narrative, even when that narrative must be consumed by scavengers in a collapsed theater.",
    },
    {
      "Meg":
        "But think about the *feeling*! The sheer scale of it—explosions and dramatic rescues. It's like they found a temporary, vibrant kingdom amidst all the gray decay. A perfect escape.",
    },
    {
      "Billy":
        "From an engineering perspective, that is fascinating. To get enough power from salvaged materials to run such a large projector... the efficiency required for that level of sustained operation must be incredible.",
    },
    {
      "Lui":
        "Survival isn't just about function, Billy. It’s about the human spirit’s capacity to seek meaning. And sometimes, that meaning is found in manufactured fiction.",
    },
    {
      "Meg":
        "Exactly! The film reminds them that once, people cared so much about things far larger than themselves—like saving a galaxy! That's the power of truly big stories.",
    },
    {
      "Kerry":
        "So their ultimate comfort is realizing how ridiculously dramatic and large humanity used to be? It sounds like they are finding solace in historical hubris.",
    },
    {
      "Billy":
        "Maybe the real comfort isn't the story itself, but the fact that they managed to harness enough energy from scraps to run it at all. That speaks to incredible human ingenuity under pressure.",
    },
  ],
  "quiz": [
    {
      "question":
        "What is cited as the primary cause for the state of the city's structures being skeletal remains?",
      "options": [
        "Decades of global weather shifts",
        "A massive, destructive war",
        "The collapse of a major economic system",
        "An ongoing alien invasion",
        "Over-exploitation of natural resources",
      ],
      "answer": 0,
    },
    {
      "question":
        "Which item was specifically mentioned as being sought by the small group of scavengers?",
      "options": [
        "A functioning battery",
        "A complete library of books",
        "Rare industrial metals",
        "Ancient weapons caches",
        "High-grade fuel rods",
      ],
      "answer": 0,
    },
    {
      "question":
        "According to the dialogue, what does Lui suggest that the act of consuming manufactured fiction demonstrates?",
      "options": [
        "The limits of human ingenuity in a broken world",
        "A preference for intellectual pursuits over manual labor",
        "The enduring need for narrative even during hardship",
        "The effectiveness of dramatic storytelling",
        "The inability to repair complex machinery",
      ],
      "answer": 1,
    },
    {
      "question":
        "What specific aspect does one character, Billy, find fascinating from an engineering perspective regarding the movie?",
      "options": [
        "The complexity of the plot's physics",
        "The efficiency required to run the large projector",
        "The quality of the salvaged film reels",
        "The method used by the actors in the theater",
        "The structural integrity of the collapsed building",
      ],
      "answer": 1,
    },
    {
      "question":
        "What theme does Meg highlight when discussing the massive summer blockbuster?",
      "options": [
        "The importance of practical survival skills over entertainment",
        "The struggle to maintain power in a post-apocalyptic setting",
        "A reminder that humanity once cared about grand, large stories",
        "The necessity of finding sustenance amidst decay",
        "The tragic irony of life continuing despite the ruins",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "gemma4",
      "novel": "gemma4",
    },
    "level": "Level_3",
  },
};
export default data;
