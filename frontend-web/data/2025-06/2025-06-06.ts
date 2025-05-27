import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Death of Vincent van Gogh",
    "details":
      "Vincent Willem Van Gogh was a Dutch post-impressionist painter who died on June 6th, 1890, in Auvers-sur-Oise, France, at the age of 37.",
  },
  "date": "2025-06-06",
  "title": "Shadows of Auvers",
  "body":
    "In the somber village of Auvers-sur-Oise, a darkness descended upon its residents, as if the very soul of the town had been extinguished. It was June 6th, 1890, and Vincent van Gogh, the tortured artist, lay on his bed, his life's canvas forever blanked by the cruel hand of fate.\n\n\n\n\nAs I stood at the edge of the Seine, watching the sun set behind the cypress trees, a sense of despair washed over me. The world, once full of color and light, had become a dull gray, a reflection of Vincent's own inner turmoil. His brushstrokes, once bold and expressive, now faltered, as if the weight of his own demons had crushed him.\n\n\n\n\nThe wind whispered secrets in my ear, telling me of the struggles he faced, the doubts that plagued him, the fears that haunted him. And I knew that on this fateful day, Vincent van Gogh had finally succumbed to the shadows that had pursued him for so long.",
  "word count": 161,
  "dialog": [
    {
      "Kerry":
        "I loved how it was written in a way that made me feel like I was right there with Vincent van Gogh, experiencing his struggles and emotions.",
    },
    {
      "Meg":
        "The author did an amazing job of capturing the essence of Vincent's art and his inner turmoil. It was so vivid and immersive!",
    },
    {
      "Lui":
        "I appreciate how the novel explored the complexities of mental health and the pressures that artists face. It's a valuable lesson for us all.",
    },
    {
      "Billy":
        "What I found really interesting was how the author used descriptive language to paint a picture of Auvers-sur-Oise. It made me want to learn more about the town and its history!",
    },
    {
      "Kerry":
        "I think what resonated with me the most was the theme of perseverance in the face of adversity. Vincent van Gogh's story is a powerful reminder that we all have struggles, but it's how we respond to them that matters.",
    },
    {
      "Meg":
        "The author's use of symbolism and imagery added an extra layer of depth to the narrative. It made me think about my own creative process and how I can incorporate those elements into my writing!",
    },
    {
      "Lui":
        "I must say, I was impressed by the way the novel balanced historical accuracy with artistic license. It's a delicate balance to strike, but the author pulled it off beautifully.",
    },
  ],
  "quiz": [
    {
      "question": "What was happening in the village of Auvers-sur-Oise?",
      "options": [
        "A darkness descended upon its residents",
        "A light shone brightly on its residents",
        "The villagers were busy preparing for a festival",
        "The weather was perfect for painting",
        "The artist Vincent van Gogh moved to a new studio",
      ],
      "answer": 0,
    },
    {
      "question": "What was the state of Vincent van Gogh's art at that time?",
      "options": [
        "His brushstrokes were bold and expressive",
        "His paintings were dull and gray",
        "He had just discovered his true style",
        "He was struggling to find his inspiration",
        "He was experimenting with new techniques",
      ],
      "answer": 1,
    },
    {
      "question": "What did the author do well in writing this passage?",
      "options": [
        "They used simple vocabulary",
        "They captured the essence of Vincent's art and inner turmoil",
        "They wrote a detailed historical account",
        "They didn't use any descriptive language",
        "They made it sound like a children's book",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was interesting about how the author described Auvers-sur-Oise?",
      "options": [
        "It made me want to learn more about the town and its history",
        "It didn't make me feel anything",
        "It sounded like every other village in France",
        "It was too detailed for my taste",
        "I didn't care",
      ],
      "answer": 0,
    },
    {
      "question": "What theme resonated with Kerry the most?",
      "options": [
        "The importance of perseverance in the face of adversity",
        "The dangers of mental health struggles",
        "The need to be creative every day",
        "The value of artistic license",
        "The power of descriptive language",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Gothic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
