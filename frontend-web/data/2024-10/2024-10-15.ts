import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Opening of the Guggenheim Museum in Bilbao",
    "details":
      "The Guggenheim Museum in Bilbao, designed by Frank Gehry, officially opened on October 15th, 1997.",
  },
  "date": "2024-10-15",
  "title": "The Gilded Palace of Bilbao",
  "body":
    "In the mystical realm of Elyria, where magic and wonder reign supreme, a legendary palace stood tall in the heart of the city of Bilbao. The Gilded Palace, as it was known to the inhabitants, shone with an ethereal light that seemed almost otherworldly.  \n\n Its walls were said to be crafted from the finest silver and gold, infused with the essence of enchanted flowers that bloomed only under the light of a full moon. The palace's grandeur was matched only by its beauty, as if it had been plucked straight from the pages of a fantasy novel.  \n\n As the sun set over Bilbao, the Gilded Palace would come alive with a soft, golden glow that seemed to emanate from within its very walls. It was said that on certain nights, when the stars aligned in just the right way, the palace would radiate an energy so powerful that it could grant wishes to those who stood before it with pure hearts.",
  "word count": 161,
  "dialog": [
    {
      "Meg":
        "I just finished reading The Gilded Palace of Bilbao, and I must say it's one of my favorite novels!",
    },
    {
      "Kerry":
        "I know what you mean, Meg! I loved the way the author described the palace. It was like I was right there in Elyria!",
    },
    {
      "Billy":
        "Yeah, the details were amazing! I especially liked how they incorporated magic and wonder into the story.",
    },
    {
      "Lui":
        "As a teacher, I appreciate how the novel encourages readers to think critically about the themes and motifs. It's not just a fun read, but also a thought-provoking one!",
    },
    {
      "Meg":
        "I completely agree with you, Lui! The author did an excellent job of weaving together historical and cultural references in a way that was both informative and engaging.",
    },
    {
      "Kerry":
        "And the characters! I loved how Billy, Kerry, Meg, and Lui all had their own unique perspectives on the story. It made me feel like I was right there with them, discussing it!",
    },
    {
      "Billy":
        "Exactly! It's always fun to talk about books and share our thoughts with friends. This one really sparked some interesting conversations in class!",
    },
    {
      "Lui":
        "I'm glad to hear that, Billy! As educators, we want to inspire a love of learning in our students, and I think this novel does just that.",
    },
  ],
  "quiz": [
    {
      "question": "What is the name of the legendary palace in the story?",
      "options": [
        "The Gilded Palace",
        "The Silver Castle",
        "The Golden Throne",
        "The Magical Mansion",
        "The Enchanted Palace",
      ],
      "answer": 0,
    },
    {
      "question": "Where is the Gilded Palace located?",
      "options": [
        "In the heart of Bilbao",
        "In a small village in Elyria",
        "On a mountain top in a far-off land",
        "In a dark and mysterious forest",
        "In a bustling city",
      ],
      "answer": 0,
    },
    {
      "question": "What is special about the walls of the Gilded Palace?",
      "options": [
        "They are made of wood",
        "They are crafted from the finest silver and gold",
        "They are decorated with paintings",
        "They are built on a hill",
        "They are surrounded by a moat",
      ],
      "answer": 1,
    },
    {
      "question": "What happens to the Gilded Palace at sunset?",
      "options": [
        "It disappears into thin air",
        "It is attacked by dragons",
        "It comes alive with a soft, golden glow",
        "It is flooded by a tsunami",
        "It is destroyed by a meteor",
      ],
      "answer": 2,
    },
    {
      "question":
        "What can the Gilded Palace grant to those who stand before it with pure hearts?",
      "options": [
        "Wealth and power",
        "Good health and happiness",
        "Wisdom and knowledge",
        "Magic and wonder",
        "Wishes",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Fantasy",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
