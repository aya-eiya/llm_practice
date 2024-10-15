import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "First successful flight of a steam-powered, controlled, and sustained flight",
    "details":
      "On October 13th, 1896, Sir Hiram Maxim made the first successful flight of a steam-powered, controlled, and sustained flight in Ormond, Queensland, Australia. This achievement marked a significant milestone in aviation history.",
  },
  "date": "2024-10-13",
  "title": "The Last Flight",
  "body":
    "In the year 2154, humanity had finally mastered the art of flying with steam-powered machines. The world was on the brink of a new era of innovation and exploration.  \n\nCaptain Zara stood at the controls of her ship, the Aurora's Hope. She had been trained by the best engineers in the world and had spent countless hours practicing her landings and takeoffs. But she had never flown with a cargo as precious as this before.  \n\nThe cargo was a group of scientists who were on their way to a newly discovered planet. The planet, named Nova Terra, was said to have conditions similar to those of Earth in the early 20th century. It was the perfect place for humanity's next step in colonization.  \n\nAs Captain Zara lifted off into the sky, she felt a sense of pride and responsibility wash over her. She knew that this flight would be one for the history books, and she was determined to make it a success.",
  "word count": 163,
  "dialog": [
    {
      "Billy":
        "Wow, I loved this novel! The idea of steam-powered machines taking over is so cool!",
    },
    {
      "Kerry":
        "Yeah, I know right? And the way Captain Zara flew through the skies was so epic! I felt like I was right there with her.",
    },
    {
      "Meg":
        "I loved how the scientists were on their way to Nova Terra. It's such a beautiful and mysterious place. I wish we could explore it more.",
    },
    {
      "Lui":
        "Ah, yes, Nova Terra is indeed a fascinating planet. But let's not forget the importance of Captain Zara's skills as a pilot. She had to be very brave and responsible to make that journey.",
    },
    {
      "Billy":
        "That's true! And I loved how she felt a sense of pride and responsibility when taking on that cargo. It's so cool to see her confidence in action!",
    },
    {
      "Kerry":
        "I know, right? And can we talk about the ship itself? The Aurora's Hope is such an amazing machine. I wish we could see more of its interior.",
    },
    {
      "Meg":
        "I think that would be awesome! But maybe we can imagine it instead. Maybe the ship has secret passages and hidden rooms... wouldn't that be cool?",
    },
    {
      "Lui":
        "Well, let's not get too carried away with our imaginations just yet. But I do agree that it would be interesting to see more of the ship's design and capabilities.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the year when humanity mastered the art of flying with steam-powered machines?",
      "options": [
        "2054",
        "2154",
        "2254",
        "2354",
        "2454",
      ],
      "answer": 1,
    },
    {
      "question": "Who stood at the controls of her ship, the Aurora's Hope?",
      "options": [
        "Captain Zara",
        "Captain Lee",
        "Captain Jack",
        "Captain Smith",
        "Captain Johnson",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the name of the planet that the scientists were on their way to?",
      "options": [
        "Nova Terra",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
      ],
      "answer": 0,
    },
    {
      "question":
        "Who felt a sense of pride and responsibility when taking on the cargo?",
      "options": [
        "Captain Zara",
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
      ],
      "answer": 0,
    },
    {
      "question": "What was the name of Captain Zara's ship?",
      "options": [
        "Aurora's Hope",
        "Starlight Express",
        "Skybound",
        "Cloudhopper",
        "Windrunner",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Engineering",
    "flavor": "Science Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
