import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "St. Patrick's Day Parade in New York City",
    "details":
      "The first St. Patrick's Day parade was held on March 4, 1762, by Irish soldiers serving in the British army in what is now the United States.",
  },
  "date": "2026-03-04",
  "title": "Shamrocks of Eternity",
  "body":
    "In the realm of Éirinn, where emerald hills touched the sky and rivers flowed with crystal clear waters, the magic of St. Patrick's Day whispered secrets to those who listened. It was a time when the veil between worlds grew thin, allowing mortals to glimpse the mystical realms beyond their own.\n\n The ancient Irish warriors, clad in armor adorned with shamrocks, marched through the streets of Newgrange, their footsteps beating out a rhythm that echoed across the ages. As they passed, the very air seemed to vibrate with an otherworldly energy, imbuing all who beheld them with a sense of wonder and awe.\n\n The leader of the procession, a towering figure with eyes aglow like lanterns in the night, wielded a staff that shimmered with an ethereal light. With each step, he wove a tapestry of enchantment, drawing the hearts of all who followed into his mystical realm. And as they marched on, the boundaries between worlds grew more tenuous still, until it seemed as though anything might be possible in this, the season of Shamrocks and magic.",
  "word count": 178,
  "dialog": [
    {
      "Lui": "Well, what did you all think of the novel?",
    },
    {
      "Billy":
        "I loved it! The way the author described Éirinn was so vivid and magical.",
    },
    {
      "Kerry":
        "I know, right? It's like I'm there with the warriors marching through Newgrange.",
    },
    {
      "Meg":
        "And the characters are so well-developed. I especially liked the leader of the procession, he seemed so powerful and wise.",
    },
    {
      "Lui":
        "Yes, the author did a great job of creating a sense of wonder and enchantment. What did you think of the way magic was woven into the story?",
    },
    {
      "Billy":
        "I loved that! It's like the author took all the old Irish myths and legends and wove them into this new tale.",
    },
    {
      "Kerry":
        "Yeah, it felt really authentic to me. I've learned a lot about Irish history in school, so it was cool to see it all come together like that.",
    },
    {
      "Meg":
        "I know some people might think it's too fantastical, but for me, that's the beauty of it. It makes you feel like anything is possible.",
    },
    {
      "Lui":
        "Well, I think we can all agree on one thing - the author did an amazing job of transporting us to this mystical world.",
    },
    {
      "Billy": "Definitely! Can we read more of their books now?",
    },
    {
      "Kerry": "Yeah, I want to see what other worlds they create!",
    },
  ],
  "quiz": [
    {
      "question": "What was whispered to those who listened in Éirinn?",
      "options": [
        "Rain",
        "Secrets",
        "Magic",
        "Winds",
        "Thunder",
      ],
      "answer": 1,
    },
    {
      "question":
        "Where did the ancient Irish warriors march through with their shamrocks?",
      "options": [
        "Newgrange",
        "Éirinn",
        "Ireland",
        "Emerald Hills",
        "Crystal Waters",
      ],
      "answer": 0,
    },
    {
      "question":
        "Who wielded a staff that shimmered with an ethereal light in the procession?",
      "options": [
        "The leader of the procession",
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
      ],
      "answer": 0,
    },
    {
      "question": "What did the author do well, according to Lui?",
      "options": [
        "Creating a sense of wonder and enchantment",
        "Welding magic into the story",
        "Describing Éirinn vividly and magically",
        "Transporting readers to a mystical world",
        "Making anything seem possible",
      ],
      "answer": 0,
    },
    {
      "question": "What did Meg like about the leader of the procession?",
      "options": [
        "He was powerful",
        "He was wise",
        "He seemed magical",
        "He was kind",
        "He was strong",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Fantasy",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
