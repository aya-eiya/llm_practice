import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "The first public screening of the film 'A Trip to the Moon' (1902)",
    "details":
      " Directed by Georges Méliès, 'A Trip to the Moon' was a groundbreaking science fiction film that premiered at the Grand Café in Paris on January 13, 1902.",
  },
  "date": "2025-01-13",
  "title": "Ashes of Eternity",
  "body":
    "The world had ended in a catastrophic blaze of fire and fury, leaving behind only smoldering ruins and the echoes of a forgotten past. I stood at the edge of the ravaged city, my eyes scanning the horizon for any sign of life. But there was nothing - just an endless expanse of charred earth and blackened steel.  \n\n As I wandered through the desolate landscape, I stumbled upon a small group of survivors huddled around a flickering flame. They looked up at me with a mix of curiosity and suspicion, their faces etched with the lines of hardship and struggle. I approached them cautiously, aware that in this new world, trust was a luxury few could afford.  \n\n One of them, an elderly woman with a kind face, beckoned me to join them. We sat in silence for a moment, watching as the flames danced and crackled in the darkness. Then she spoke up, her voice barely above a whisper, 'What's your name?' I hesitated, unsure how to respond. In this new world, names were just words - but they also held power.",
  "word count": 182,
  "dialog": [
    {
      "Billy":
        "I just finished reading the novel, and I'm still trying to process everything that happened. It was so intense!",
    },
    {
      "Kerry":
        "Dude, it was crazy! The world ending in a catastrophic blaze of fire and fury? That's wild!",
    },
    {
      "Meg":
        "I know, right? And the way the author described the scene where the main character is standing at the edge of the ravaged city... it gave me chills. I felt like I was right there with him.",
    },
    {
      "Lui":
        "Yes, the descriptive language used by the author is indeed effective in conveying the sense of desolation and devastation. It's a great example of how words can be used to paint a vivid picture in one's mind.",
    },
    {
      "Billy":
        "I love how the novel explores themes of survival and humanity in the face of catastrophic events. It's really making me think about what I would do if something like that happened in real life.",
    },
    {
      "Kerry":
        "Yeah, it's definitely a thought-provoking read. And I have to say, the character development is on point too. The main character's struggles and emotions are so relatable, even though the circumstances are extreme.",
    },
    {
      "Meg":
        "I'm with Billy on this one - the novel has me thinking about my own preparedness and what I would do in a disaster scenario. It's making me want to take action and prepare myself for anything that might come our way.",
    },
    {
      "Lui":
        "As an educator, it's heartening to see young people like you all engaging with complex themes and ideas in this way. It just goes to show that even the most challenging topics can be approached from a place of curiosity and empathy.",
    },
  ],
  "quiz": [
    {
      "question": "What happened to the world according to the novel?",
      "options": [
        "It was taken over by aliens.",
        "It ended in a catastrophic blaze of fire and fury.",
        "It became a peaceful utopia.",
        "It remained unchanged.",
        "It was destroyed by a giant asteroid.",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did the main character find at the edge of the ravaged city?",
      "options": [
        "A group of survivors huddled around a flickering flame.",
        "A hidden underground bunker.",
        "A abandoned building with no one inside.",
        "A small pond with fresh water.",
        "A large herd of wild animals.",
      ],
      "answer": 0,
    },
    {
      "question":
        "What did the elderly woman in the novel ask the main character?",
      "options": [
        "Where are you going?",
        "How did you survive the disaster?",
        "What's your name?",
        "Can I trust you?",
        "Do you have any food?",
      ],
      "answer": 2,
    },
    {
      "question":
        "Why was the main character hesitant to answer the elderly woman's question?",
      "options": [
        "Because he didn't know her.",
        "Because he didn't want to reveal his identity.",
        "Because he thought it was a trap.",
        "Because in this new world, names were just words - but they also held power.",
        "Because he was tired.",
      ],
      "answer": 3,
    },
    {
      "question": "What theme does the novel explore?",
      "options": [
        "The importance of being prepared for disasters.",
        "The power of friendship and teamwork.",
        "Survival and humanity in the face of catastrophic events.",
        "The impact of climate change on society.",
        "The role of technology in saving lives.",
      ],
      "answer": 2,
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
