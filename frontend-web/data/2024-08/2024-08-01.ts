import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first public screening of 'A Trip to the Moon' (1902)",
    "details":
      "The film was directed by Georges Méliès, a French filmmaker who is considered one of the earliest and most influential filmmakers in cinema history.",
  },
  "date": "2024-08-01",
  "title": "The Dark Reflection of 'A Trip to the Moon'",
  "body":
    "It was a dark and stormy night when I stumbled upon an ancient cinema in the heart of the city. The marquee above the entrance read 'A Trip to the Moon' - a film directed by Georges Méliès, a French filmmaker who is considered one of the earliest and most influential filmmakers in cinema history.\n\n\n\n As I entered the cinema, I felt an eerie sense of déjà vu. The seats were old and worn, but the screen at the back of the room seemed to be calling me. Suddenly, the lights flickered and the film began to play. But it was not just any film - it was a dark reflection of my own fears and desires.\n\n\n\n The movie showed a group of astronauts on a mission to the moon, but as they descended onto its surface, they were met with an otherworldly presence. The creatures that inhabited the moon were unlike anything I had ever seen before - their faces twisted and distorted, like reflections in a funhouse mirror.\n\n\n\n As the film reached its climax, I felt myself being pulled into the screen. The astronauts' screams echoed through my mind as they realized too late that they were not alone on the moon. And then, everything went black.",
  "word count": 209,
  "dialog": [
    {
      "Meg":
        "I had no idea Georges Méliès was a real person! I loved learning about his contributions to cinema history.",
    },
    {
      "Kerry":
        "Yeah, I know right? And the film 'A Trip to the Moon' is like, super old and still so cool!",
    },
    {
      "Lui":
        "Actually, Billy, it's great that you're interested in learning more about Méliès. He was a true pioneer in the industry.",
    },
    {
      "Billy":
        "Thanks, Lui! I'm always up for learning new things. And Meg, what did you think of the movie? Did you find it scary at all?",
    },
    {
      "Meg":
        "Oh, yeah! It was so eerie and creepy! But also really beautiful and imaginative. I loved the special effects.",
    },
    {
      "Kerry":
        "Yeah, me too! The way they used miniatures and sets to create the moon landscape was incredible. And that 'Moon Monster' was so trippy!",
    },
    {
      "Lui":
        "Well, it's great that you all enjoyed the film. It's a classic for a reason, after all.",
    },
    {
      "Billy":
        "I'm definitely going to look more into Méliès and his work. Thanks for the recommendation, everyone!",
    },
  ],
  "quiz": [
    {
      "question": "What was the title of the film that Billy watched?",
      "options": [
        "A Trip to the Moon",
        "The Dark Reflection",
        "The Moon Monster",
        "Georges Méliès' Best Film",
        "Classic Cinema",
      ],
      "answer": 0,
    },
    {
      "question": "Who directed the film 'A Trip to the Moon'?",
      "options": [
        "Walt Disney",
        "George Lucas",
        "James Cameron",
        "Georges Méliès",
        "Steven Spielberg",
      ],
      "answer": 3,
    },
    {
      "question":
        "What was unique about the creatures on the moon in the film?",
      "options": [
        "They were friendly and helpful",
        "They had superpowers",
        "Their faces were twisted and distorted",
        "They were invisible",
        "They were robots",
      ],
      "answer": 2,
    },
    {
      "question": "Who was Billy talking to about the film?",
      "options": [
        "Meg, Kerry, and Lui",
        "Kerry and Meg",
        "Lui and Meg",
        "Billy, Kerry, and Lui",
        "Just Kerry",
      ],
      "answer": 0,
    },
    {
      "question":
        "What did Billy say he was going to do after watching the film?",
      "options": [
        "Go to sleep",
        "Watch another movie",
        "Learn more about Méliès",
        "Eat a snack",
        "Play outside",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Horror",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_6",
  },
};
export default data;
