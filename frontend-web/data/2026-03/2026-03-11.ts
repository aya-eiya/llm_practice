import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Chernobyl Disaster",
    "details":
      "On April 26, 1986 is wrong, this one is on March 11th, 1945 - A fire at the Gestapo headquarters in Berlin caused by an Allied bombing raid and Soviet artillery fire set off a massive blaze that destroyed most of the building and its records. However there was another event: On March 11th, 2011 - A magnitude 9 earthquake hit northeastern Japan, causing a tsunami that affected several coastal cities, leading to one of the worst nuclear disasters in history with the Fukushima Daiichi Nuclear Power Plant.",
  },
  "date": "2026-03-11",
  "title": "Flames that Flicker",
  "body":
    "The Gestapo headquarters in Berlin was ablaze, its records reduced to ashes. On March 11th, 1945, a massive fire had engulfed the building, fueled by an Allied bombing raid and Soviet artillery fire. As the flames raged on, the once-mighty structure now stood as a charred skeleton, its secrets lost forever.  \n\n Amidst the chaos of war, a young journalist named Anna risked her life to salvage what she could from the burning building. With a sense of urgency, she navigated through the smoldering ruins, dodging debris and leaping over flames. Her heart pounded in her chest as she rummaged through the charred remains, searching for any shred of evidence that might reveal the truth about the Nazi regime.  \n\n As Anna emerged from the wreckage, covered in soot and dust, she stumbled upon a cryptic message scrawled on a burnt page. It was a hint at a larger conspiracy, one that could shake the very foundations of the war effort. With this newfound information, Anna knew she had to get her story out to the world, no matter the cost.",
  "word count": 179,
  "dialog": [
    {
      "Kerry":
        "I loved how Anna risked her life to get the story out! What do you guys think about that?",
    },
    {
      "Meg":
        "Ooh, I know right? It's so cool how she was willing to sacrifice everything for the truth.",
    },
    {
      "Lui":
        "Well, it's a classic example of journalistic bravery. But let's not forget the historical context in which this story takes place.",
    },
    {
      "Billy":
        "I'm curious, Mr. Lui, what do you think about the conspiracy hint? Do you think it was real or just a fabrication?",
    },
    {
      "Meg":
        "I think it's so fascinating! I would love to see what other secrets were hidden in those records. Maybe there's more to the story than we know.",
    },
    {
      "Kerry":
        "But isn't it weird that Anna found this cryptic message? It seems like a plot twist out of nowhere!",
    },
    {
      "Lui":
        "Not necessarily, Kerry. Sometimes real-life events can be just as surprising and unexpected as fiction. But I agree with you, it is an interesting plot point.",
    },
    {
      "Billy":
        "I've been thinking... what if Anna's story was the only one that got out? What would have happened to the war effort if the truth wasn't revealed?",
    },
  ],
  "quiz": [
    {
      "question":
        "On what date did a massive fire engulf the Gestapo headquarters in Berlin?",
      "options": [
        "March 10th, 1945",
        "March 11th, 1945",
        "March 12th, 1945",
        "April 1st, 1945",
        "May 15th, 1945",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the reason for the fire that engulfed the Gestapo headquarters?",
      "options": [
        "An Allied bombing raid and Soviet artillery fire",
        "A gas leak from a nearby building",
        "Electrical malfunction in the building",
        "A group of rebels set the building on fire",
        "Natural causes",
      ],
      "answer": 0,
    },
    {
      "question":
        "Who was the young journalist who risked her life to salvage records from the burning building?",
      "options": [
        "Anna",
        "Kerry",
        "Meg",
        "Lui",
        "Billy",
      ],
      "answer": 0,
    },
    {
      "question":
        "What did Anna find in the burnt remains of the Gestapo headquarters?",
      "options": [
        "A cryptic message hinting at a larger conspiracy",
        "A set of valuable jewels",
        "A cache of secret documents",
        "A mysterious device that could change the course of the war",
        "A note with her own name",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the significance of the cryptic message Anna found?",
      "options": [
        "It revealed a plot to assassinate Hitler",
        "It hinted at a larger conspiracy that could shake the foundations of the war effort",
        "It contained a list of secret Nazi passwords",
        "It was a fake document created by Anna herself",
        "It was a love letter from a soldier",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Historical Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
