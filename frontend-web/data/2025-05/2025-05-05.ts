import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Day of the Jackal",
    "details": "The film was released on May 5, 1973",
  },
  "date": "2025-05-05",
  "title": "Surviving Elysium",
  "body":
    "The once blue skies were now a permanent grey, casting a desolate shadow over the ruins of humanity. I trudged through the dusty wasteland, my footsteps echoing off the crumbling buildings. The world had ended in a catastrophic event known as 'The Day of the Jackal', where a deadly virus had ravaged the planet, leaving only a few scattered survivors.  \n\n As I walked, I stumbled upon a makeshift settlement, consisting of rickety shelters and makeshift tents. People huddled together, their faces etched with worry and fear. The air was thick with desperation, as they struggled to find food, water, and shelter in this desolate new world.  \n\n I approached one of the residents, a grizzled old man named Marcus, who eyed me warily. 'What brings you here?' he growled. I explained my situation, and he nodded thoughtfully. 'You're lucky to have made it this far,' he said. 'But be warned, the world is full of dangers, both human and otherwise.'",
  "word count": 159,
  "dialog": [
    {
      "Meg":
        "I loved how the author described the world after the apocalypse! It was so vivid in my mind.",
    },
    {
      "Lui":
        "Indeed, the author's use of language is quite impressive. I particularly liked how they portrayed the desperation and fear in the settlement.",
    },
    {
      "Kerry":
        "I know what you mean, Meg! And I loved how Marcus, the old man, was like a mentor to the protagonist. It felt so real!",
    },
    {
      "Billy":
        "Yeah, and I think it's interesting how the author made me feel like I was there with the protagonist in that wasteland.",
    },
    {
      "Meg":
        "Exactly! And I loved how the novel explored themes of survival and humanity in the face of catastrophic failure.",
    },
    {
      "Lui":
        "The author did a great job of balancing action, suspense, and emotional depth. It's not an easy feat to pull off!",
    },
    {
      "Kerry":
        "I'm still trying to process everything that happened in the novel. There were so many twists and turns!",
    },
    {
      "Billy":
        "Me too! I'm planning on re-reading it soon just to see if I caught all the clues this time around.",
    },
  ],
  "quiz": [
    {
      "question": "What event led to the catastrophic ending of humanity?",
      "options": [
        "The Day of the Jackal",
        "The Great Flood",
        "World War III",
        "The Big Bang",
        "Climate Change",
      ],
      "answer": 0,
    },
    {
      "question": "How did the author describe the air in the settlement?",
      "options": [
        "Thin and fresh",
        "Thick with desperation",
        "Cool and calm",
        "Warm and cozy",
        "Cold and harsh",
      ],
      "answer": 1,
    },
    {
      "question": "What was Marcus's role in the story?",
      "options": [
        "A friend to the protagonist",
        "An enemy of the protagonist",
        "A mentor to the protagonist",
        "A stranger to the protagonist",
        "A guide to the protagonist",
      ],
      "answer": 2,
    },
    {
      "question": "How did Billy feel about the novel?",
      "options": [
        "It was boring and uninteresting",
        "It was okay but not great",
        "I loved it!",
        "I hated it!",
        "It made me feel like I was there with the protagonist",
      ],
      "answer": 3,
    },
    {
      "question": "What theme did Meg think the novel explored?",
      "options": [
        "Survival and humanity in the face of catastrophic failure",
        "Friendship and loyalty",
        "Love and romance",
        "Power and control",
        "Good vs. evil",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
