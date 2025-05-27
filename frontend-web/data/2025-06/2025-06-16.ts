import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Photographic Exhibition",
    "details":
      "The first photographic exhibition was held on June 16th, 1839, at the London Gallery of Nature, where William Henry Fox Talbot displayed his photogenic drawings",
  },
  "date": "2025-06-16",
  "title": "Ashes of Memories",
  "body":
    "The world as we knew it was gone. The once blue skies were now a dull grey, and the air was thick with the smell of ash and smoke. I wandered through the desolate streets, my eyes scanning for any sign of life.  \n\n It had been 20 years since the Great Calamity struck, wiping out most of humanity in an instant. The few remaining survivors lived in small settlements, eking out a meager existence on the outskirts of what was once civilization.  \n\n I stumbled upon an old camera, buried beneath the rubble of a destroyed building. It was a relic from a time before the world ended, and as I picked it up, I felt a spark of nostalgia ignite within me.  \n\n I took the camera with me, determined to preserve the memories of this lost era. As I walked through the ruins, I snapped pictures of the devastation, hoping that someday someone would come along and remember what we had lost.",
  "word count": 162,
  "dialog": [
    {
      "Meg":
        "I loved how the novel described the desolate world after the Great Calamity! It was so vivid in my mind.",
    },
    {
      "Lui":
        "Yes, the author did a great job of painting a picture with words. I especially appreciated the detail about the smell of ash and smoke.",
    },
    {
      "Billy":
        "I know what you mean, Meg! I loved how the main character felt a spark of nostalgia when he found the old camera. It made me think about all the things we've lost since the world ended.",
    },
    {
      "Kerry":
        "That's so true, Billy! And it was great how the author showed how people have to be resourceful and make do with what they have in this new world.",
    },
    {
      "Meg":
        "I loved the way the novel explored the themes of hope and resilience. It made me think about how we can learn from the past and work towards a better future.",
    },
    {
      "Lui":
        "Well said, Meg! And I think it's interesting that you mention learning from the past. I often tell my students that history is not just about dates and events, but also about understanding the human experience.",
    },
    {
      "Billy":
        "I agree with Lui, Meg! History is so important for us to learn from, and this novel did a great job of making it feel relevant and engaging.",
    },
    {
      "Kerry":
        "Yeah, I think what really stood out to me was how the author showed how people are capable of adapting to even the most difficult circumstances. It's a powerful message!",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the name of the event that wiped out most of humanity in the story?",
      "options": [
        "The Great Calamity",
        "World War III",
        "The Apocalypse",
        "The End Times",
        "The Catastrophe",
      ],
      "answer": 0,
    },
    {
      "question":
        "What object did the main character find when he was wandering through the ruins?",
      "options": [
        "A camera",
        "A book",
        "A radio",
        "A phone",
        "A computer",
      ],
      "answer": 0,
    },
    {
      "question":
        "How many years had passed since the Great Calamity when the story took place?",
      "options": [
        "10 years",
        "20 years",
        "30 years",
        "40 years",
        "50 years",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the main character's intention when he found the old camera?",
      "options": [
        "To sell it",
        "To use it for himself",
        "To preserve memories of the lost era",
        "To take pictures of people",
        "To show it to others",
      ],
      "answer": 2,
    },
    {
      "question": "What was one of the themes explored in the story?",
      "options": [
        "Hope and despair",
        "Resilience and determination",
        "Fear and anxiety",
        "Anger and frustration",
        "Hope and resilience",
      ],
      "answer": 4,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
