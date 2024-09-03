import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": 'The premiere of "2001: A Space Odyssey"',
    "details":
      'The premiere of Stanley Kubrick\'s "2001: A Space Odyssey" took place on September 26, 1968, at the Odeon Leicester Square in London.',
  },
  "date": "2024-09-26",
  "title": "Echoes of Eternity",
  "body":
    "The world had ended a century ago, yet I still remember the day the skies turned crimson. It was as if the very fabric of existence had been torn apart, leaving only desolation and despair in its wake.  \n\n Now, I wander these ruins, searching for any semblance of hope. My footsteps echo through the silence, a reminder that I am not alone in this bleak landscape. I have found strange artifacts, remnants of a civilization that once thrived on this planet. But what purpose do they serve now? Are they merely relics of a bygone era, or are they clues to a brighter future?  \n\n I stumble upon an ancient library, its shelves still standing despite the passage of time. The books within are worn and faded, but their contents remain a mystery waiting to be unlocked. I begin to read, and as the words dance across the pages, I realize that the knowledge contained within holds the key to rebuilding our world.  \n\n But with this newfound understanding comes a sense of responsibility. Can we truly recreate what was lost, or will our efforts only serve to perpetuate the cycle of destruction? The echoes of eternity whisper cautionary tales of a past that has been and gone, leaving me with more questions than answers.",
  "word count": 213,
  "dialog": [
    {
      "Meg": "I had so many feels reading this novel!",
    },
    {
      "Lui":
        "As an educator, I appreciate how the author weaves together historical and scientific concepts to create a compelling narrative.",
    },
    {
      "Billy":
        "Yeah, me too! The way the author describes the world after the apocalypse is so vivid in my mind. I can almost feel like I'm walking through those ruins with the protagonist!",
    },
    {
      "Kerry":
        "I love how the novel raises questions about responsibility and the cycle of destruction. It's so relevant to our current world, you know?",
    },
    {
      "Meg":
        "I completely agree with Kerry! And I think that's what makes this novel so great - it's not just a fun read, but also a thought-provoking one.",
    },
    {
      "Lui":
        "As a teacher, I would definitely recommend this novel to my students. It has so much to offer in terms of critical thinking and analysis.",
    },
    {
      "Billy":
        "Whoa, I never thought of it that way! But you're right, Lui - there's so much depth to this story. I'm gonna go read it again with a new perspective!",
    },
    {
      "Kerry":
        "Haha, yeah me too Billy! And maybe next time we can discuss it in our book club and share more of our thoughts.",
    },
  ],
  "quiz": [
    {
      "question": "What happened to the world a century ago?",
      "options": [
        "The world ended in a fire",
        "The skies turned crimson",
        "The oceans dried up",
        "The earth was covered in ice",
        "The world was never affected",
      ],
      "answer": 1,
    },
    {
      "question": "Why does the protagonist wander through the ruins?",
      "options": [
        "To find food and shelter",
        "To search for hope",
        "To rebuild the city",
        "To escape danger",
        "To have fun",
      ],
      "answer": 1,
    },
    {
      "question": "What did the protagonist find in the ancient library?",
      "options": [
        "A hidden treasure",
        "A magical book",
        "Knowledge that holds the key to rebuilding the world",
        "A map to a new city",
        "A way to escape",
      ],
      "answer": 2,
    },
    {
      "question":
        "What theme is relevant to our current world according to Kerry?",
      "options": [
        "The importance of kindness",
        "The need for responsibility and the cycle of destruction",
        "The value of friendship",
        "The power of imagination",
        "The impact of technology",
      ],
      "answer": 1,
    },
    {
      "question": "What would Lui recommend this novel to?",
      "options": [
        "Teachers only",
        "Students only",
        "Teachers and students alike",
        "Everyone over 18",
        "No one",
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
    "level": "Level_6",
  },
};
export default data;
