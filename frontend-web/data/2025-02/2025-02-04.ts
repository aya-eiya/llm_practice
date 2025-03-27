import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The First Public Screening of a Film",
    "details":
      "The Lumiere brothers' cinematograph, a motion picture camera and projector, is demonstrated publicly for the first time at the Grand Cafe in Paris on February 4, 1895.",
  },
  "date": "2025-02-04",
  "title": "Ashes of Tomorrow",
  "body":
    "The world as we knew it had ended in a catastrophic event that brought humanity to its knees. The once blue skies were now a dull grey, and the air was thick with toxic fumes. The few remaining survivors were forced to live underground, eking out a meager existence in a desolate landscape.  \n\n I had lost count of the days since the world had ended. Time had become meaningless in this new reality. Our small community struggled to survive, scavenging for food and supplies in the ruins above. The memories of the past seemed like a distant dream, a reminder of a time when life was worth living.  \n\n As I ventured out into the unknown, I stumbled upon a small cache of medical supplies. It was a rare find, and our community's doctor was ecstatic. With this discovery, we could finally start to rebuild and heal. The ashes of tomorrow might just hold a glimmer of hope for us all.",
  "word count": 160,
  "dialog": [
    {
      "Billy":
        "I loved this novel! The world as we knew it had ended in a catastrophic event that brought humanity to its knees.",
    },
    {
      "Kerry":
        "Yeah, I felt so sorry for the survivors who were forced to live underground. It's like, can't they just get back to normal?",
    },
    {
      "Meg":
        "I think what I loved most was the way the author described the world after the catastrophe. The toxic fumes and grey skies were so vivid in my mind.",
    },
    {
      "Lui":
        "Well, I have to say, I appreciated how the novel highlighted the importance of community and resilience in the face of adversity.",
    },
    {
      "Billy":
        "I totally agree! And I loved how they found that medical supply cache. It was like a beacon of hope for them.",
    },
    {
      "Kerry":
        "Yeah, it's like, even in the darkest times, there's always something to cling to. That's what I think is so powerful about this novel.",
    },
    {
      "Meg":
        "I'm just going to say it: I loved the way the author wrote about the past and the future. It was like a beautiful contrast between the before and after.",
    },
    {
      "Lui":
        "Well, as an educator, I think what struck me most was how this novel can be used to teach kids about the importance of community and preparation for disasters.",
    },
  ],
  "quiz": [
    {
      "question": "What happened to the world in the novel?",
      "options": [
        "A catastrophic event occurred",
        "The world was invaded by aliens",
        "The planet was hit by a meteor",
        "The world became a utopia",
        "The world remained unchanged",
      ],
      "answer": 0,
    },
    {
      "question": "Where did the survivors have to live?",
      "options": [
        "Above ground",
        "Underground",
        "In space",
        "On a different planet",
        "In a parallel universe",
      ],
      "answer": 1,
    },
    {
      "question": "What was the significance of finding medical supplies?",
      "options": [
        "It meant the end of humanity",
        "It brought no change to their situation",
        "It allowed them to rebuild and heal",
        "It caused a new catastrophe",
        "It made their lives even harder",
      ],
      "answer": 2,
    },
    {
      "question": "What did the author highlight in the novel?",
      "options": [
        "The importance of individualism",
        "The significance of community and resilience",
        "The need for global unity",
        "The value of technology",
        "The power of nature",
      ],
      "answer": 1,
    },
    {
      "question": "What can be learned from the novel?",
      "options": [
        "The importance of preparation for disasters",
        "The value of individual achievement",
        "The need for global cooperation",
        "The power of community and resilience",
        "The inevitability of fate",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
