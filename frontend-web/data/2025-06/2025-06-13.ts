import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first film premiere of '2001: A Space Odyssey'",
    "details":
      "Directed by Stanley Kubrick, '2001: A Space Odyssey' premiered in London on June 13th, 1968.",
  },
  "date": "2025-06-13",
  "title": "Echoes of Silence",
  "body":
    "The world had ended in a catastrophic blaze of fire and ash. The once blue skies were now a permanent grey, choked with the soot and debris of what was left behind. I walked through the desolate landscape, my footsteps echoing off the crumbling buildings. It was as if the very silence itself had taken on a life of its own.  \n\n I stumbled upon a small, makeshift shelter, constructed from scraps of metal and plastic. The door creaked as I pushed it open, revealing a dimly lit interior. Inside, I found a small, leather-bound book. It was old, the pages yellowed with age. But as I flipped through them, I saw that they were filled with stories - stories of love, loss, and hope.  \n\n As I read on, I realized that this book was more than just a collection of tales. It was a testament to the human spirit - a reminder that even in the darkest of times, there is always a glimmer of light to hold onto.",
  "word count": 169,
  "dialog": [
    {
      "Meg":
        "I loved how the author described the post-apocalyptic world! The imagery was so vivid in my mind.",
    },
    {
      "Lui":
        "That's what I love about this novel, it's not just a story, it's an experience. It makes you feel like you're right there with the characters.",
    },
    {
      "Billy":
        "I know, right? And the way they used language to create that atmosphere was amazing! It felt like I was walking through the desolate landscape myself.",
    },
    {
      "Kerry":
        "But what really got me was the message of hope at the end. Even in a world that's been destroyed, there's still room for love and redemption.",
    },
    {
      "Meg":
        "Exactly! And I loved how the author didn't shy away from the hard questions. It made me think about my own place in this world and what I can do to make a difference.",
    },
    {
      "Lui":
        "That's the mark of a great novel, it leaves you with something to ponder long after you've finished reading. And I think that's especially true for young readers like Billy and Kerry here.",
    },
    {
      "Billy":
        "Yeah, it was definitely thought-provoking! But also really inspiring. It made me want to be more proactive in making the world a better place.",
    },
    {
      "Kerry":
        "Same here! And I think that's what this novel is all about - giving us hope and showing us that we can make a difference, no matter how small it may seem.",
    },
  ],
  "quiz": [
    {
      "question": "What happened to the world in the story?",
      "options": [
        "The world was at peace",
        "The world had ended in a catastrophic blaze of fire and ash",
        "The world was invaded by aliens",
        "The world was stuck in a time loop",
        "The world was experiencing a severe economic crisis",
      ],
      "answer": 1,
    },
    {
      "question": "What did the protagonist find inside the makeshift shelter?",
      "options": [
        "A small, leather-bound book",
        "A first-aid kit and some food",
        "A radio and a map",
        "A letter from a loved one",
        "A pair of binoculars",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the significance of the book found inside the shelter?",
      "options": [
        "It was a collection of recipes for post-apocalyptic survival",
        "It was a guide to navigating the new world order",
        "It was a testament to the human spirit and a reminder that even in the darkest times, there is always hope",
        "It was a warning about the dangers of climate change",
        "It was a story about a character who escaped from the shelter",
      ],
      "answer": 2,
    },
    {
      "question": "What did Billy say about the novel?",
      "options": [
        "I loved how the author described the post-apocalyptic world!",
        "The way they used language to create that atmosphere was amazing!",
        "It made me think about my own place in this world and what I can do to make a difference",
        "I want to be more proactive in making the world a better place",
        "It was definitely thought-provoking!",
      ],
      "answer": 3,
    },
    {
      "question": "What did Kerry say about the novel?",
      "options": [
        "The author didn't shy away from the hard questions!",
        "I loved how the author described the post-apocalyptic world!",
        "The way they used language to create that atmosphere was amazing!",
        "It made me think about my own place in this world and what I can do to make a difference",
        "I want to be more proactive in making the world a better place",
      ],
      "answer": 4,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
