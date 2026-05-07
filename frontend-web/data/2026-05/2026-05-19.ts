import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Death of Caravaggio",
    "details":
      "Renaissance artist Michelangelo Merisi da Caravaggio was killed in a fight at a tavern in Porto Ercole, Italy.",
  },
  "date": "2026-05-19",
  "title": "A Brush with Mortality",
  "body":
    "The Death of Caravaggio marked a turning point in the artistic world of Renaissance Italy. Michelangelo Merisi da Caravaggio, a renowned painter known for his dramatic use of light and shadow, met his untimely demise in a tavern brawl in Porto Ercole.  \n\n His turbulent life was a testament to the struggles of creative genius. A rebellious spirit, Caravaggio often found himself at odds with the artistic establishment. His innovative style, however, earned him both praise and criticism from his contemporaries.  \n\n As news of his death spread, the art world was left in shock. Many artists who had been influenced by his bold brushstrokes and dramatic compositions mourned the loss of a true innovator. In the years that followed, Caravaggio's legacy continued to inspire generations of artists, cementing his place as one of the greatest painters in history.  \n\n The impact of his death on the art world was profound. His style, characterized by intense emotion and dramatic lighting, influenced a new wave of artists who sought to push the boundaries of creative expression. As we reflect on the life and legacy of Michelangelo Merisi da Caravaggio, it is clear that his tragic fate only served to heighten his artistic impact.",
  "word count": 199,
  "dialog": [
    {
      "Meg": "I'm still thinking about Caravaggio's life, it was so tragic.",
    },
    {
      "Billy":
        "Yeah, I know what you mean! He died in a tavern brawl at the age of 38.",
    },
    {
      "Lui":
        "That's right, Billy. His turbulent life was a testament to his creative genius and the struggles he faced as an artist.",
    },
    {
      "Kerry":
        "I'm more interested in how his style influenced other artists. I mean, who wouldn't want to paint like him?",
    },
    {
      "Meg":
        "I think it's not just about painting. His use of light and shadow created a whole new level of emotion in art.",
    },
    {
      "Lui":
        "Exactly, Meg. And that's why his legacy continues to inspire artists today. He was truly a master of his craft.",
    },
    {
      "Billy": "I'm going to look up more about his art now. This is so cool!",
    },
    {
      "Kerry":
        "Yeah, me too! But I also want to know more about the art world back then. It's like, what was it like to be an artist in Renaissance Italy?",
    },
  ],
  "quiz": [
    {
      "question": "Where did Caravaggio meet his untimely demise?",
      "options": [
        "A tavern brawl in Rome",
        "A tavern brawl in Porto Ercole",
        "In a studio accident in Florence",
        "At the hands of a jealous artist",
        "Due to old age",
      ],
      "answer": 1,
    },
    {
      "question": "What was a characteristic of Caravaggio's style?",
      "options": [
        "Subdued colors and gentle lighting",
        "Intense emotion and dramatic lighting",
        "Realistic depiction of everyday life",
        "Innovative use of textures and patterns",
      ],
      "answer": 1,
    },
    {
      "question": "What did the art world do after Caravaggio's death?",
      "options": [
        "It continued as usual, unaffected by his passing",
        "It was left in shock, mourning the loss of a true innovator",
        "It celebrated with a grand exhibition of his work",
        "It became more conservative and traditional",
      ],
      "answer": 1,
    },
    {
      "question": "Who was influenced by Caravaggio's style?",
      "options": [
        "Only his direct students",
        "A new wave of artists who sought to push the boundaries of creative expression",
        "None, as his work was not well-known during his lifetime",
      ],
      "answer": 1,
    },
    {
      "question": "How old was Caravaggio when he died?",
      "options": [
        "25 years old",
        "32 years old",
        "38 years old",
        "45 years old",
        "50 years old",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Academic Essay",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
