import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Haymarket affair",
    "details":
      "A labor protest in Chicago, Illinois, that resulted in a bomb being thrown at police, killing one officer and injuring several others. The event sparked a national debate about the rights of workers and the use of violence in labor disputes.",
  },
  "date": "2024-05-30",
  "title": "The Chicago Firecracker",
  "body":
    "In the heart of Chicago's bustling streets, detective Emily Carter found herself amidst a puzzling case. A small firecracker, seemingly harmless, had sparked a fatal explosion at a labor protest. Amidst the chaos and smoke, one officer lay dead, and several others were critically injured. As Emily dug deeper, she uncovered a web of tensions between workers and factory owners. Each suspect had their own motive, their own secrets. The factory owner, desperate to quell unrest, the union leader, seeking revenge, the rogue worker with a grudge. With each interview, Emily sifted through a barrage of lies and half-truths. The key, she realized, lay in the details - a torn piece of clothing, a whispered conversation caught in the wind. Using her keen eye for observation and her knowledge of human nature, Emily unraveled the mystery, exposing the true culprit and their twisted plan. Justice was served, but the echoes of that fateful day lingered, a reminder of the dangerous divide between those who toiled and those who profited.",
  "word count": 169,
  "dialog": [
    {
      "Kerry": "Wow! That was an intense story!",
    },
    {
      "Lui":
        "Indeed, the plot was gripping, and the characters were well-developed.",
    },
    {
      "Billy":
        "I loved how Detective Carter pieced together the clues and uncovered the truth.",
    },
    {
      "Meg":
        "But it's sad to think about the divide between the workers and factory owners. It's still relevant today.",
    },
    {
      "Kerry":
        "I agree. The story shows how injustice and inequality can lead to tragedy.",
    },
    {
      "Meg":
        "I also thought the ending was interesting. Justice was served, but it didn't erase the pain of what happened.",
    },
    {
      "Lui":
        "Exactly. The novel serves as a reminder of the consequences of unchecked power and greed.",
    },
    {
      "Billy":
        "I'm glad we read this book. It made me think about the importance of fairness and compassion.",
    },
  ],
  "quiz": [
    {
      "question": "What sparked the fatal explosion?",
      "options": [
        "A bomb",
        "A firecracker",
        "A gas leak",
        "An electrical fire",
        "A chemical spill",
      ],
      "answer": 1,
    },
    {
      "question": "What was Detective Carter's key to solving the mystery?",
      "options": [
        "A fingerprint",
        "A DNA sample",
        "Security camera footage",
        "Details like torn clothing and overheard conversations",
        "A confession from the culprit",
      ],
      "answer": 3,
    },
    {
      "question":
        "What was the underlying issue fueling tensions between the workers and factory owners?",
      "options": [
        "Racial discrimination",
        "Wage disputes",
        "Political differences",
        "Religious beliefs",
        "Personal grudges",
      ],
      "answer": 1,
    },
    {
      "question": "What did the ending of the novel suggest?",
      "options": [
        "Justice always prevails",
        "Trauma can never be fully erased",
        "Power and greed corrupt",
        "The divide between workers and owners remains unresolved",
        "All of the above",
      ],
      "answer": 4,
    },
    {
      "question":
        "What message did the story convey about the consequences of unchecked power and greed?",
      "options": [
        "They lead to poverty and suffering",
        "They destroy lives and communities",
        "They create chaos and instability",
        "They undermine the foundations of society",
        "They are inevitable in a capitalist system",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Society",
    "flavor": "Mystery",
    "models": {
      "main": "gemini",
      "novel": "gemini",
    },
    "level": "Level_5",
  },
};
export default data;
