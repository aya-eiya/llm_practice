import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Public Display of Kodak Camera",
    "details":
      "On July 23rd, 1888, George Eastman publicly demonstrated the first camera using roll film, marking a significant milestone in photography history.",
  },
  "date": "2024-07-23",
  "title": "The Last Roll",
  "body":
    "As I walked through the ruins of what once was a bustling city, I stumbled upon an old camera lying on the ground. It was a Kodak, just like the one my grandfather used to take pictures with. I picked it up and examined it carefully, wondering how something from before the Great Disaster had survived.  \n\n I decided to take a chance and try using it. The roll of film inside was still intact, so I loaded it into the camera and started snapping away. It felt strange, like I was trying to capture a moment that would never be seen again. But as I looked through the viewfinder, something changed. For a brief moment, the desolation and destruction around me faded away, replaced by a sense of hope.  \n\n I took one last picture before the roll ran out. It was of the ruins themselves – crumbling buildings, twisted metal, and debris-filled streets. I wondered what my grandfather would think if he saw this city now. Would he still take pictures, or would the devastation be too much to bear? The camera slipped from my fingers as I walked away, leaving it behind with its last roll of film.",
  "word count": 199,
  "dialog": [
    {
      "Lui":
        "I was skeptical at first, but the way the author used the old camera to capture hope amidst destruction really resonated with me.",
    },
    {
      "Kerry":
        "Yeah, I loved how the novel explored the idea that even in the darkest times, there's always a glimmer of hope. It's so inspiring!",
    },
    {
      "Meg":
        "I completely agree. The way the author used imagery and symbolism to convey the characters' emotions really drew me in.",
    },
    {
      "Billy":
        "And I loved how it made me think about my own grandfather and what he might have experienced during the Great Disaster. It was a real emotional connection.",
    },
    {
      "Lui":
        "Exactly! As educators, we always strive to connect our students with historical events on a personal level. This novel does just that.",
    },
    {
      "Kerry":
        "Plus, it's so well-written! The author has such a vivid way of describing the setting and characters. I felt like I was right there with them in the ruins.",
    },
    {
      "Meg":
        "I know what you mean. I felt like I was transported to this post-apocalyptic world, and it was both thrilling and terrifying at the same time.",
    },
    {
      "Billy":
        "Absolutely! It's one of those books that stays with you long after you finish reading it. Like, I'm still thinking about the characters and their struggles today.",
    },
  ],
  "quiz": [
    {
      "question": "What type of camera did the protagonist find in the ruins?",
      "options": [
        "Nikon",
        "Kodak",
        "Canon",
        "Fujifilm",
        "Polaroid",
      ],
      "answer": 1,
    },
    {
      "question":
        "How did the author describe the protagonist's experience using the old camera?",
      "options": [
        "It was boring",
        "It felt strange",
        "It was exciting",
        "It was scary",
        "It was sad",
      ],
      "answer": 1,
    },
    {
      "question": "What is the title of the novel being discussed?",
      "options": [
        "The Last Roll",
        "The End",
        "The Beginning",
        "The Aftermath",
        "The Ruins",
      ],
      "answer": 0,
    },
    {
      "question":
        "How did the author make the reader feel about the characters' struggles?",
      "options": [
        "It made me angry",
        "It made me sad",
        "It made me excited",
        "It made me inspired",
        "It didn't affect me",
      ],
      "answer": 3,
    },
    {
      "question": "What did Billy say about his experience reading the novel?",
      "options": [
        "I hated it",
        "I loved it",
        "I was bored by it",
        "I thought about my own grandfather",
        "I forgot about it",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3",
      "novel": "llama3",
    },
    "level": "Level_4",
  },
};
export default data;
