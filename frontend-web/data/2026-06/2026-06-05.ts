import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Guitar Legend Andrés Segovia Dies",
    "details":
      "Spanish classical guitarist Andrés Segovia dies on June 5, 1982",
  },
  "date": "2026-06-05",
  "title": "The Strings of Doom",
  "body":
    "In the sleepy town of Segovia, a legend whispered among musicians spoke of a cursed guitar. Andrés Segovia's spirit, once confined to his mortal form, had been unleashed upon the world. His ethereal fingers danced across the frets, summoning an otherworldly melody that sent shivers down the spines of all who heard it.  \n\n The music grew louder, more discordant, as if the very fabric of reality was being torn apart. People stumbled through the streets, their minds clouded by a creeping madness. They tried to flee, but the sound pursued them, echoing in their minds long after they'd escaped the town.  \n\n Some claimed to have seen Segovia's ghostly form standing on the stage of an abandoned concert hall, his guitar still clutched in his hand. Others spoke of hearing the maestro's voice whispering in their ears, guiding them toward some unknown fate. As the days passed, the townsfolk became increasingly unhinged, unable to resist the siren song of the cursed guitar.",
  "word count": 161,
  "dialog": [
    {
      "Meg":
        "I just finished reading it, and I'm still trying to process everything.",
    },
    {
      "Lui":
        "It's clear that the author wove together historical facts with a unique narrative thread. The result is captivating and thought-provoking.",
    },
    {
      "Kerry":
        "What really struck me was the way Segovia's spirit influenced the townspeople, almost as if it was manipulating their actions.",
    },
    {
      "Billy":
        "I think what I liked most was how the author handled the supernatural elements. It added a sense of mystery and wonder to the story.",
    },
    {
      "Meg":
        "The music in this novel is hauntingly beautiful! I found myself imagining what Segovia's performances must have been like.",
    },
    {
      "Lui":
        "While some might see it as an exaggeration, the author effectively conveys the power of art and its impact on people's lives. A thought-provoking read indeed!",
    },
    {
      "Kerry":
        "I'm not sure if I fully buy into the curse part, but the emotional turmoil that grips the townspeople is disturbingly real.",
    },
    {
      "Billy":
        "Segovia's character development is impressive – you get a sense of his inner struggle and how it affects those around him.",
    },
  ],
  "quiz": [
    {
      "question": "Where was Segovia's spirit unleashed upon the world?",
      "options": [
        "Segovia town",
        "a nearby city",
        "the world at large",
        "his guitar still clutched in his hand",
        "an abandoned concert hall",
      ],
      "answer": 3,
    },
    {
      "question": "How did people react to the sound of Segovia's music?",
      "options": [
        "They danced with joy",
        "Their minds were clouded by a creeping madness",
        "They felt no change",
        "Some tried to flee, while others attempted to follow",
        "None",
      ],
      "answer": 1,
    },
    {
      "question": "What effect did Segovia's spirit have on the townspeople?",
      "options": [
        "It made them stronger and more united",
        "Their actions were not influenced by his presence",
        "They became increasingly unhinged, unable to resist the siren song of the cursed guitar",
        "Their lives improved in many ways",
        "None",
      ],
      "answer": 2,
    },
    {
      "question":
        "What did some people claim to have seen Segovia's ghostly form doing?",
      "options": [
        "Playing the guitar on an empty street",
        "Sitting alone in a park",
        "Standing on the stage of an abandoned concert hall, his guitar still clutched in his hand",
        "Walking down the main road",
        "None",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was particularly effective about how the author handled the supernatural elements?",
      "options": [
        "Adding a sense of mystery and wonder to the story",
        "Making it seem more realistic",
        "Using too many words",
        "Not using enough descriptive language",
        "None",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Horror",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
