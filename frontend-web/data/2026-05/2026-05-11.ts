import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Discovery of Pluto",
    "details":
      "American astronomer Clyde Tombaugh discovered Pluto on May 11, 1930",
  },
  "date": "2026-05-11",
  "title": "Pluto's Shadow",
  "body":
    "The sky was dark and foreboding, like a shroud cast over the small town of Tombaugh's Peak. It was as if Pluto itself had descended upon them, its icy grip spreading fear and dread throughout the land.  \n\n Clyde Tombaugh, the renowned astronomer, stood at the edge of the observatory, his eyes scanning the horizon for any sign of the elusive planet. He had spent years searching for it, pouring over maps and charts, but still, it remained a mystery.  \n\n And then, suddenly, he saw it - a faint light in the distance, growing larger with each passing moment. Tombaugh's heart raced as he grabbed his telescope, his hands shaking with excitement. He had found it, the discovery of a lifetime!  \n\n But as he gazed deeper into the void, he realized that something was amiss. The light seemed to be shifting, twisting and writhing like a living thing. Tombaugh's breath caught in his throat as he whispered a single word: 'Pluto?'",
  "word count": 160,
  "dialog": [
    {
      "Billy":
        "I loved how the author described the sky as 'dark and foreboding'! It really set the mood for the rest of the story.",
    },
    {
      "Lui":
        "That's a great observation, Billy. The use of descriptive language is one of the key elements of effective storytelling.",
    },
    {
      "Meg":
        "I was so excited when Clyde finally found Pluto! I love how the author wove together science and adventure.",
    },
    {
      "Kerry":
        "I agree with Meg, but I think what really got me was the twist at the end. The light shifting and writhing like a living thing? Mind blown!",
    },
    {
      "Lui":
        "Ah, yes, the twist is indeed a clever plot device. It keeps the reader engaged and curious about what's happening.",
    },
    {
      "Billy":
        "I was trying to figure out what was going on with Pluto myself! Did anyone else think it was just a normal planet at first?",
    },
    {
      "Meg":
        "Totally, Billy! I thought it was just another day in Tombaugh's Peak until the weird light appeared.",
    },
    {
      "Kerry":
        "I'm still trying to wrap my head around the implications of that twist. What if Pluto isn't a normal planet after all?",
    },
    {
      "Lui":
        "Well, as we learned in our history lessons, even science is full of mysteries and surprises. It's always exciting to explore new ideas and theories.",
    },
  ],
  "quiz": [
    {
      "question": "What was the weather like in Tombaugh's Peak?",
      "options": [
        "Sunny and bright",
        "Dark and stormy",
        "Light drizzle",
        "Clear sky",
        "Rainy",
      ],
      "answer": 1,
    },
    {
      "question": "Who found Pluto?",
      "options": [
        "Clyde Tombaugh",
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
      ],
      "answer": 0,
    },
    {
      "question": "What did Clyde Tombaugh use to look at the planet?",
      "options": [
        "Binoculars",
        "Telescope",
        "Microscope",
        "Glasses",
        "Umbrella",
      ],
      "answer": 1,
    },
    {
      "question": "How did the light from Pluto appear in the story?",
      "options": [
        "Steady and constant",
        "Shifting and writhing like a living thing",
        "Flickering",
        "Bright and steady",
        "Dimming",
      ],
      "answer": 1,
    },
    {
      "question": "What was Lui's comment about the twist at the end?",
      "options": [
        "It was boring",
        "It was predictable",
        "It kept us engaged and curious",
        "It was confusing",
        "We didn't like it",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Science",
    "flavor": "Horror",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
