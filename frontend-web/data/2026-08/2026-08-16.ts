import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Launch of the first commercial satellite (EXPLORER 1)",
    "details":
      "While Explorer 1 was launched on January 28, 1958, significant developments and related technological milestones surrounding early space exploration were ongoing around August 16th in various ways. However, pinpointing a singular, globally recognized 'Technology event' directly tied to Aug 16th is difficult without further context. A notable area of activity during the late 1950s involved advancements in computing and rocketry which underpinned satellite technology.",
  },
  "date": "2026-08-16",
  "title": "The Silent Signal",
  "body":
    "[\n\nThe small metal box sat on the desk. It was cold to touch. This box held a dream: to see what was far away, past the blue sky. People said it would bring great knowledge. They believed this machine could talk to stars.]\n[\n\nOne night, the lights flickered. A strange sound came from the device. It was not a beep; it was more like a slow, wet sigh. The scientist, who felt very tired, listened closely. He thought he might be imagining things.]\n[\n\nBut then, the signal changed. It became faster, stronger. The data showed patterns that made no sense to human minds. What were these whispers from the void? They seemed sad, and they seemed angry all at once.]\n[\n\nThe scientist felt a fear he could not name. He knew this was more than just science. It felt like something ancient was reaching out. The box did not bring knowledge; it brought company. And that company wanted something from Earth.]",
  "word count": 165,
  "dialog": [
    {
      "Billy":
        "The description of the signal—'slow, wet sigh'—is fascinating from a physics perspective. If it were truly extraterrestrial communication, wouldn't we expect more structured electromagnetic waves? A 'sigh' implies an organic process.",
    },
    {
      "Meg":
        "But Billy, don't you think that's the most beautiful part? It *felt* like something ancient was reaching out. Maybe it isn't about physics; maybe it’s about feeling. Like a cosmic melancholy.",
    },
    {
      "Lui":
        "Melancholy is an emotion, Meg. We are discussing a device described as holding 'great knowledge.' While imagination is valuable, we must ground our analysis in the text. The narrative shifts from scientific curiosity to existential dread very quickly.",
    },
    {
      "Kerry":
        "Dread? I liked it! It’s like a really dramatic sci-fi movie trailer where the aliens are secretly plotting world domination but sound sad while doing it. Who's the scientist, and why is he so tired? Did he not get enough coffee?",
    },
    {
      "Billy":
        "Kerry, focus. The conflict isn't just 'aliens vs. Earth.' It’s the nature of knowledge itself. If this device brings a company that 'wanted something from Earth,' what does that imply about the ethics of seeking ultimate truth?",
    },
    {
      "Meg":
        "It implies that perhaps some secrets are better left undiscovered, Billy. Like if you opened a book and found out the main character was secretly a grumpy space-dragon who needed our socks.",
    },
    {
      "Lui":
        "That is an imaginative leap, Meg. The text warns about 'fear he could not name.' That suggests a profound, perhaps philosophical, danger, rather than just a quirky alien demanding laundry service.",
    },
    {
      "Kerry":
        "See, Lui gets it! It's high stakes. If they wanted something, maybe it was better snacks? I bet the stars have really good space chips. I'd trade my tarantula for interstellar potato chips.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the initial description of the sound that came from the device during the night?",
      "options": [
        "A sharp, high-pitched beep.",
        "A slow, wet sigh.",
        "A mechanical whirring noise.",
        "Silence followed by a crackle.",
        "The sound of shattering glass.",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did the data patterns shown by the signal suggest to human minds?",
      "options": [
        "Perfectly structured mathematical equations.",
        "A clear map of distant galaxies.",
        "Patterns that made no sense.",
        "A repeating pattern of terrestrial weather.",
        "A simple binary code.",
      ],
      "answer": 2,
    },
    {
      "question":
        "According to one speaker in the dialogue, what aspect of the signal is considered 'beautiful'?",
      "options": [
        "Its perfect structural integrity.",
        "The fact that it was a structured electromagnetic wave.",
        "The feeling that something ancient was reaching out.",
        "The clarity of its scientific data.",
        "The predictable rhythm.",
      ],
      "answer": 2,
    },
    {
      "question":
        "What did the text state the box ultimately brought, besides knowledge?",
      "options": [
        "A clear warning about impending war.",
        "A company that wanted something from Earth.",
        "A guide to advanced physics.",
        "The solution to a long-standing mystery.",
        "An invitation to travel into space.",
      ],
      "answer": 1,
    },
    {
      "question":
        "Which character in the dialogue mentioned comparing the potential alien demands to 'a grumpy space-dragon who needed our socks'?",
      "options": [
        "Billy",
        "Lui",
        "Kerry",
        "Meg",
        "The narrator",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Technology",
    "flavor": "Horror",
    "models": {
      "main": "gemma4",
      "novel": "gemma4",
    },
    "level": "Level_2",
  },
};
export default data;
