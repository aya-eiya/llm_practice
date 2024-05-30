import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The premiere of Star Wars: The Phantom Menace",
    "details":
      "The film was released in 1999 and marked the beginning of the Star Wars prequel trilogy.",
  },
  "date": "2024-05-31",
  "title": "The Last Refuge",
  "body":
    "The world as we knew it was gone. The once blue skies were now a permanent grey, and the air reeked of smoke and ash. I trudged through the desolate wasteland, my boots kicking up clouds of dust with each step. My mind wandered back to the days before the Great Upheaval, when life was simple and the sun shone bright.  \n\n As I walked, I stumbled upon a small cluster of buildings that had managed to withstand the devastation. It was an old school, its walls cracked but still standing. I cautiously made my way inside, my heart racing with every creak of the old wooden floorboards.  \n\n The silence was oppressive, broken only by the sound of my own ragged breathing. I moved from room to room, taking in the remnants of a life long forgotten. Books lay scattered on the floor, their pages torn and yellowed. Desks were overturned, chairs shattered. It was as if time had stood still since that fateful day.  \n\n And yet, amidst the ruins, I felt a glimmer of hope. This old school could be our last refuge, a place to start anew. The thought sent a spark of determination coursing through my veins. I would rebuild, I would thrive in this desolate world.",
  "word count": 209,
  "dialog": [
    {
      "Billy":
        "I loved how the novel explored the themes of hope and resilience in the face of adversity. It really made me think about what I would do if I were in their shoes.",
    },
    {
      "Kerry":
        "Totally agree with Billy! The way the author described the desolate wasteland was so vivid, it felt like I was right there with them",
    },
    {
      "Meg":
        "I loved how the novel highlighted the importance of community and human connection. It made me realize that even in the darkest times, we can find strength in each other",
    },
    {
      "Lui":
        "As an educator, I appreciated how the novel showed the power of education and knowledge in helping people rebuild and move forward",
    },
    {
      "Billy":
        "I also loved how the characters had to rely on their own resourcefulness and ingenuity to survive. It was like a big puzzle they had to figure out together",
    },
    {
      "Kerry":
        "Yeah, and I loved how the novel didn't shy away from the harsh realities of the world. It made me realize that even in the worst-case scenarios, there's always hope for a better tomorrow",
    },
    {
      "Meg":
        "I think what really struck me was how the characters found beauty in the smallest things - like the old school building or the way the sunlight filtered through the dust clouds",
    },
    {
      "Lui":
        "Ah, yes! The symbolism of those small moments was so powerful. It reminded me that even in the darkest times, we can find moments of beauty and joy if we look for them",
    },
  ],
  "quiz": [
    {
      "question": "What was the state of the world before the Great Upheaval?",
      "options": [
        "A dark and desolate wasteland",
        "A peaceful and prosperous society",
        "A place with simple life but no sun",
        "The once blue skies were now a permanent grey",
        "None of the above",
      ],
      "answer": 3,
    },
    {
      "question": "What did the narrator find in the old school building?",
      "options": [
        "Books, desks, and chairs all intact",
        "A pile of rubble with no sign of life",
        "Scattered books and broken furniture",
        "Nothing at all",
        "The answer is not mentioned in the text",
      ],
      "answer": 2,
    },
    {
      "question": "What was Billy's observation about the novel?",
      "options": [
        "It was too long and boring",
        "I loved how it explored themes of hope and resilience",
        "It was okay but nothing special",
        "The characters were not well developed",
        "I didn't finish reading it",
      ],
      "answer": 1,
    },
    {
      "question": "What did the narrator think about the old school building?",
      "options": [
        "It was a worthless ruin",
        "It could be their last refuge",
        "It was just a pile of rubble",
        "They shouldn't have gone inside",
        "The answer is not mentioned in the dialogue",
      ],
      "answer": 1,
    },
    {
      "question": "What did Kerry like about the novel?",
      "options": [
        "How it described the characters' emotions",
        "The way the author wrote the setting",
        "The vivid description of the desolate wasteland",
        "It was too predictable and boring",
        "Nothing in particular",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3",
      "novel": "llama3",
    },
    "level": "Level_6",
  },
};
export default data;
