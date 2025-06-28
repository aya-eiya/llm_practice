import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Great Fire of London",
    "details":
      "On August 5, 1666, a major fire broke out in the Royal Exchange area of London's financial district and quickly spread to nearby buildings. By morning, it had engulfed much of the city's central district. The fire burned for four days, destroying thousands of houses, ten churches, St. Paul's Cathedral, and many other buildings. Despite these devastating losses, the event led to significant changes in building regulations and firefighting practices.",
  },
  "date": "2025-08-05",
  "title": "Smoke and Steam: The Phoenix of London",
  "body":
    "On a foggy August morning in 1666, as the sun rose over the city of London, a mysterious fire began to spread through the Royal Exchange. The flames danced wildly through the narrow streets, their hungry tongues licking at wooden buildings and thatched roofs. \n\n Inside his workshop, inventor Thomas Blackwood rushed to save his latest creation - a mechanical phoenix designed to protect against fires. With smoke billowing from outside, he frantically worked on its wings, determined not to let another building burn. The smell of burnt wood filled the air as the city's inhabitants scrambled to escape the inferno. \n\n Using his knowledge of steam and pressure, Thomas managed to activate a secret mechanism in the phoenix model that released a burst of steam to help douse the flames. Though many buildings were lost, his invention proved invaluable in saving others from destruction. \n\n As the fire finally subsided on August 9th, London lay in ruins, but from its ashes rose a new city - one built with lessons learned and technologies forged through adversity.",
  "word count": 174,
  "dialog": [
    {
      "Billy":
        "I love the novel! The steam-powered phoenix invention was brilliant. It's amazing how Thomas used science to fight fire!",
    },
    {
      "Meg":
        "Oh my goodness, Billy! I completely forgot about the mechanical phoenix. That's so cool! Meg here thinks this is such an inspiring story - it shows how people can come together in times of crisis.",
    },
    {
      "Kerry":
        "Hold up, hold up! You know what else is cool? The historical accuracy of the fire destroying London in 1666. My grandma actually lives near that area now. But like, what if Thomas had invented something even cooler?",
    },
    {
      "Lui":
        "Fascinating read, indeed. Though I must say, the portrayal of historical events wasn't entirely accurate. But as an educator, I'm glad to see young minds engaged with such complex themes.",
    },
    {
      "Billy":
        "But Lui, isn't the point that fiction often blends facts with imagination? It's still a valuable lesson about how technology and human ingenuity can help overcome challenges!",
    },
    {
      "Meg":
        "Yes, exactly! And I'm so excited to read more books like this. The author really brought the setting and characters to life. Meg thinks it's such an exciting story that you just want to keep reading...",
    },
  ],
  "quiz": [
    {
      "question": "When did the fire start in London?",
      "options": [
        "In July",
        "On August 5th morning",
        "On August 9th morning",
        "At midnight",
        "Before dawn",
      ],
      "answer": 1,
    },
    {
      "question": "What was Thomas Blackwood's invention used for?",
      "options": [
        "To build new buildings",
        "To make the fire worse",
        "To save lives and stop fires",
        "To create foggy weather",
        "To generate electricity",
      ],
      "answer": 2,
    },
    {
      "question": "How old is Billy according to the dialogue text?",
      "options": [
        "9 years old",
        "11 years old",
        "12 years old",
        "13 years old",
        "14 years old",
      ],
      "answer": 1,
    },
    {
      "question":
        "What does Lui mention about the historical accuracy of the story?",
      "options": [
        "It's completely accurate",
        "It has a few inaccuracies",
        "The time period is wrong",
        "The invention doesn't exist in history",
        "London never burned down",
      ],
      "answer": 1,
    },
    {
      "question": "What does Kerry suggest about Thomas's invention?",
      "options": [
        "He wants to read more books like this",
        "He thinks it's too complex for young minds",
        "He wishes Thomas had invented something cooler",
        "He likes the historical setting",
        "He doesn't understand how steam works",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Steampunk",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_4",
  },
};
export default data;
