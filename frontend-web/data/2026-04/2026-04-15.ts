import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first photograph of a solar eclipse was captured",
    "details":
      "On April 15, 1842, William H.F. Talbot captured the first photograph of a solar eclipse using the camera obscura method.",
  },
  "date": "2026-04-15",
  "title": "Shadows of Eternity",
  "body":
    "It was April 15, 1842, and Emily stood at the edge of the horizon, her heart racing with anticipation. She had waited for this moment for years, to witness the celestial ballet that would soon unfold above them. William H.F. Talbot, a brilliant photographer, stood beside her, his camera at the ready. The sun was about to surrender to the shadow of the moon, and Emily felt an inexplicable connection to this moment.  \n\n As they gazed up at the sky, a subtle glow began to emanate from the horizon. The air was charged with an electric anticipation, as if the very fabric of time itself was being rewoven. William's fingers moved deftly over the camera's lens, capturing the ephemeral beauty of this once-in-a-lifetime event.  \n\n Emily felt her emotions swell as she watched the darkness envelop the sun. In that instant, she knew that nothing would ever be the same again. The world around them seemed to hold its breath, suspended in a moment of timeless wonder. As the last rays of sunlight vanished, William turned to her with a triumphant smile, his camera still trembling from the force of creation.",
  "word count": 190,
  "dialog": [
    {
      "Kerry":
        "Wow, this novel was amazing! I loved how they described the solar eclipse.",
    },
    {
      "Meg":
        "I know, right? The way Emily felt connected to the moment was so beautiful. It made me feel all goosebumpy inside.",
    },
    {
      "Lui":
        "Yes, the author did a great job of conveying the emotions and atmosphere of that time period. I'm glad you all enjoyed it.",
    },
    {
      "Billy":
        "I loved how they used words like 'subtle glow' and 'electric anticipation'. It really helped me visualize the scene in my head.",
    },
    {
      "Kerry":
        "Definitely! The writing was so vivid and descriptive. I felt like I was right there with Emily and William, watching the eclipse happen.",
    },
    {
      "Meg":
        "I'm a bit sad it's over now. I wish we could've read more about what happened after the eclipse. But I loved how the author wove in the photography aspect too.",
    },
    {
      "Lui":
        "Well, there are many other great books out there that might scratch that itch for you, Meg. We can discuss some recommendations if you'd like.",
    },
    {
      "Billy":
        "Yeah! Maybe we could even try to recreate a similar scene in our own writing or art projects?",
    },
  ],
  "quiz": [
    {
      "question":
        "What year was the event that Emily and William H.F. Talbot witnessed?",
      "options": [
        "1841",
        "1842",
        "1843",
        "1844",
        "1845",
      ],
      "answer": 1,
    },
    {
      "question":
        "Who stood beside Emily as they watched the celestial ballet?",
      "options": [
        "William H.F. Talbot",
        "Kerry",
        "Meg",
        "Lui",
        "Billy",
      ],
      "answer": 0,
    },
    {
      "question": "What was William's occupation?",
      "options": [
        "Photographer",
        "Writer",
        "Artist",
        "Musician",
        "Chef",
      ],
      "answer": 0,
    },
    {
      "question":
        "How did Kerry feel while reading the novel about the solar eclipse?",
      "options": [
        "Bored",
        "Angry",
        "Sad",
        "Goosebumpy",
        "Excited",
      ],
      "answer": 3,
    },
    {
      "question":
        "What aspect of photography was wove into the story by the author?",
      "options": [
        "Portraiture",
        "Landscape",
        "Still Life",
        "Nighttime Scenes",
        "Documenting Celestial Events",
      ],
      "answer": 4,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Historical Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
