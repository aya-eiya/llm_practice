import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "V-E Day (Victory in Europe Day)",
    "details":
      "On April 20, 1945, Allied forces announced that they had reached the Elbe River in Germany, effectively ending World War II in Europe.",
  },
  "date": "2026-04-20",
  "title": "Trial by Elbe",
  "body":
    "It was May 8, 1945, and the world was finally at peace. The Allies had defeated Germany in World War II, and the news spread like wildfire across Europe. But amidst the celebrations, a quiet courtroom drama was unfolding in Berlin.  \n\n Lieutenant Colonel Jameson, a British officer, stood before Judge Müller, accused of espionage. The charges were serious: Jameson had been caught with documents detailing Allied troop movements. He claimed it was a mere mistake, but Müller's expression told a different story.  \n\n As the trial progressed, a new witness emerged - a young German soldier named Hans. He testified that he had seen Jameson near the Elbe River, where the Allies were massing their forces. But something about Hans' testimony didn't add up.  \n\n Müller's eyes narrowed as he questioned Hans further. 'What exactly did you see?' he asked. Hans hesitated before answering, his voice barely above a whisper: 'I saw Colonel Jameson waving to the enemy.' The courtroom erupted into chaos as the truth finally came out.",
  "word count": 167,
  "dialog": [
    {
      "Billy": "I just finished reading this amazing novel about World War II!",
    },
    {
      "Kerry":
        "I know, right? The way it describes the tension in Berlin during the trial is so intense.",
    },
    {
      "Meg":
        "I was on the edge of my seat when Lieutenant Colonel Jameson was accused of espionage. What a twist!",
    },
    {
      "Lui":
        "Yes, the author does an excellent job of weaving together historical facts and fictional elements.",
    },
    {
      "Billy":
        "I loved how the novel showed both the excitement of the Allies' victory and the complexities of the trial's outcome.",
    },
    {
      "Kerry":
        "I'm still trying to figure out why Hans testified against Jameson. Was he a plant or just confused?",
    },
    {
      "Meg":
        "Maybe Hans was just trying to prove himself as a loyal German citizen in a time of great change.",
    },
    {
      "Lui":
        "Regardless, the novel raises important questions about loyalty, duty, and the gray areas between right and wrong.",
    },
  ],
  "quiz": [
    {
      "question": "What year was World War II finally coming to an end?",
      "options": [
        "1943",
        "1945",
        "1947",
        "1949",
        "1951",
      ],
      "answer": 1,
    },
    {
      "question":
        "Who accused Lieutenant Colonel Jameson of espionage in the courtroom?",
      "options": [
        "Judge Müller",
        "Hans",
        "Billy",
        "Kerry",
        "Meg",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was Hans' testimony about when questioned by Judge Müller?",
      "options": [
        "He saw Lieutenant Colonel Jameson near the Elbe River",
        "He saw no one suspicious near the Elbe River",
        "He waved at the enemy, according to his testimony",
        "He had never seen Lieutenant Colonel Jameson before",
        "He was not present in the courtroom",
      ],
      "answer": 2,
    },
    {
      "question":
        "Who testified that he saw Lieutenant Colonel Jameson near the Elbe River?",
      "options": [
        "Hans",
        "Lieutenant Colonel Jameson",
        "Judge Müller",
        "Billy",
        "Kerry",
      ],
      "answer": 0,
    },
    {
      "question": "What did Hans say he saw when questioned by Judge Müller?",
      "options": [
        "Colonel Jameson waving to the enemy",
        "The Allies' troop movements",
        "Hans saw nothing suspicious",
        "Lieutenant Colonel Jameson was being a hero",
        "He couldn't see anything clearly",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Politics",
    "flavor": "Courtroom Drama",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
