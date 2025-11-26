import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Nuremberg Trials Begin",
    "details":
      "On October 23, 1946, the Nuremberg trials commenced at the Palace of Justice in Nuremberg, Germany. The trials were held to prosecute major Nazi war criminals for crimes against peace, war crimes, and crimes against humanity during World War II.",
  },
  "date": "2025-10-23",
  "title": "Shadows of Nuremberg",
  "body":
    "The autumn sun cast long shadows across the Palace of Justice in Nuremberg as I sat at my desk, reviewing yet another document for the upcoming trials. As a translator assigned to the case against Klaus von der Schulenburg, I had become an unwilling participant in history's darkest chapters. \n\n Von der Schulenburg, once a respected military officer, now stood accused of ordering the execution of captured Allied soldiers. The evidence was overwhelming - photographs, testimonies, and intercepted communications that painted him as a ruthless war criminal. My role was to ensure every word of his defense was translated accurately, but in my heart, I knew the truth must come out. \n\n As I worked late into the night, poring over documents and transcripts, I couldn't help but wonder about the weight of history we were creating here. These trials would become a benchmark for justice in a world torn apart by hatred and greed. And yet, as I looked around at my colleagues, each one carrying their own burden of conscience, I realized that sometimes the greatest crimes are committed not with guns or bombs, but with silence and indifference.",
  "word count": 189,
  "dialog": [
    {
      "Billy":
        "I love how the translator works in Nuremberg, trying to be neutral but knowing the truth! It reminds me of those historical movies about WWII.",
    },
    {
      "Kerry":
        "Dude, the book is so boring. I'd rather read about superheroes!",
    },
    {
      "Meg":
        "No no, it's actually really good! The translator has this moral dilemma - like when you're supposed to be neutral but something feels wrong.",
    },
    {
      "Lui":
        "Now, now, students. We must respect the gravity of this historical event. These trials were a turning point in human justice.",
    },
    {
      "Billy":
        "Mr. Lui is right! The translator's situation is super complex - like trying to translate between truth and lies. Fascinating!",
    },
    {
      "Kerry":
        "But what if someone got wrongly accused? Like in that one history movie where the good guy was framed?",
    },
    {
      "Meg":
        "I think the book does a great job showing how justice can be messy, but also how important it is to speak up for truth.",
    },
    {
      "Lui":
        "That's why these trials are so significant. They set precedents for future generations about accountability and human rights.",
    },
  ],
  "quiz": [
    {
      "question": "Where did the translator work in the story?",
      "options": [
        "Berlin",
        "London",
        "Nuremberg",
        "Paris",
        "Vienna",
      ],
      "answer": 2,
    },
    {
      "question": "What is Klaus von der Schulenburg accused of?",
      "options": [
        "Selling secrets",
        "Ordering executions",
        "Stealing art",
        "Plotting treason",
        "Betraying allies",
      ],
      "answer": 1,
    },
    {
      "question": "How old is Billy according to the dialogue descriptions?",
      "options": [
        "9 years old",
        "11 years old",
        "12 years old",
        "13 years old",
        "14 years old",
      ],
      "answer": 0,
    },
    {
      "question": "What does Mr. Lui think about the historical event?",
      "options": [
        "It's just a boring movie",
        "It's fascinating but fictional",
        "It's significant for human justice",
        "It's unimportant today",
        "It's only relevant to history",
      ],
      "answer": 2,
    },
    {
      "question": "Which student initially found the book boring?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "None of them",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Ethics",
    "flavor": "Crime",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_6",
  },
};
export default data;
