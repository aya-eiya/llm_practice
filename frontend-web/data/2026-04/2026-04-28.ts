import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The premiere of 'Romeo and Juliet' at the Globe Theatre",
    "details":
      "On April 28, 1595, Shakespeare's Romeo and Juliet premiered at The Globe Theatre in London, England.",
  },
  "date": "2026-04-28",
  "title": "Gears of Star-Crossed Love",
  "body":
    "In the fog-shrouded streets of London, where steam-powered carriages rattled and clockwork automatons whirred, a young inventor named Emilia gazed longingly at the stars. Her heart belonged to a fellow inventor, Marcus, who had created a time-traveling device that would soon take him to a distant era. Their love was forbidden by the society of scientists, but Emilia and Marcus found solace in each other's company.  \n\nOne fateful evening, as they strolled through the crowded alleys, they stumbled upon an ancient tome hidden away in a dusty bookshop. The cover read 'Romeo and Juliet' – a tale of star-crossed lovers from a bygone era. As they delved into its pages, Emilia and Marcus saw parallels between their own love story and that of the tragic pair.  \n\nTheir romance blossomed amidst the hissing pipes and ticking clockwork hearts, but fate seemed determined to tear them apart. The device was ready, and Marcus would soon depart for a distant time, leaving Emilia behind. As they stood at the crossroads, their love shone like a beacon in the darkness, guiding them through the intricate gears of time.",
  "word count": 184,
  "dialog": [
    {
      "Billy": "I love how the story combines science fiction with romance!",
    },
    {
      "Lui":
        "Yes, it's a unique blend of genres that really makes the novel stand out.",
    },
    {
      "Meg":
        "I know, right? I loved seeing Emilia and Marcus's love story unfold amidst all the clockwork and steam power!",
    },
    {
      "Kerry":
        "I have to say, I was a bit disappointed by the ending. I wanted more of a happy conclusion for the couple.",
    },
    {
      "Billy":
        "But that's what makes it so realistic! In real life, people don't always get happy endings. It adds to the story's emotional depth.",
    },
    {
      "Lui":
        "Well said, Billy. And speaking of emotional depth, I think the author did a great job of exploring the themes of love and sacrifice.",
    },
    {
      "Meg":
        "I'm going to have to disagree with you on that one, Lui. I felt like the story was more about the romance than the themes.",
    },
    {
      "Kerry":
        "Hey, Meg! You can't just dismiss the themes without discussing them! What did you think of how the author handled the societal pressures on Emilia and Marcus?",
    },
  ],
  "quiz": [
    {
      "question":
        "What was Marcus working on that would soon take him away from Emilia?",
      "options": [
        "A time-traveling device",
        "A steam-powered carriage",
        "A clockwork automaton",
        "An ancient tome",
        "A book about Romeo and Juliet",
      ],
      "answer": 0,
    },
    {
      "question": "What did Emilia and Marcus find hidden in a dusty bookshop?",
      "options": [
        "A journal of scientific discoveries",
        "A romance novel",
        "A collection of poetry",
        "'Romeo and Juliet'",
        "An encyclopedia",
      ],
      "answer": 2,
    },
    {
      "question":
        "According to the dialogue, what aspect of the story did Lui appreciate about the author's writing?",
      "options": [
        "The way love stories are portrayed",
        "The exploration of themes like love and sacrifice",
        "The blending of science fiction with romance",
        "The setting in a bygone era",
        "The societal pressures on Emilia and Marcus",
      ],
      "answer": 1,
    },
    {
      "question": "How did Billy feel about the ending of the story?",
      "options": [
        "Disappointed because it was too predictable",
        "Happy that the couple got a happy conclusion",
        "Relieved that the tension between them was resolved",
        "Emotional because of the themes explored",
        "Realistic and impactful",
      ],
      "answer": 3,
    },
    {
      "question": "What did Meg think about the story's focus?",
      "options": [
        "That it should have focused more on the romance",
        "That it was too focused on science fiction elements",
        "That it was a great blend of genres",
        "That it didn't explore themes well enough",
        "That it was all about the themes",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Theater",
    "flavor": "Steampunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
