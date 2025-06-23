import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Opening of The Guggenheim Museum",
    "details":
      "The Solomon R. Guggenheim Museum, designed by Frank Lloyd Wright, opened on October 21, 1959 in New York City. However, I found another notable event occurred on July 27th. On this day in 1993, the Guggenheim's first major renovation took place, led by architect Richard Gluckman.",
  },
  "date": "2025-07-27",
  "title": "Moonlit Museum of Wonders",
  "body":
    "In the heart of the mystical forest, there stood a magnificent museum that shone like a beacon under the light of the full moon. \n\n The walls of this enchanting edifice were adorned with glittering crystals and gemstones that refracted the starlight into a kaleidoscope of colors. \n\n It was said that the museum's collection contained artifacts from ancient civilizations, each one whispering secrets to those who dared to listen.  The curator, a wise and enigmatic figure known only as 'The Keeper,' would guide visitors through the labyrinthine halls, sharing tales of the museum's history and the mysteries that lay within. \n\n As I stepped into this wonderland, I felt the weight of centuries of magic and mystery settle upon me. The air was alive with whispers, and the shadows danced to the rhythm of forgotten memories.  As I wandered through the galleries, I discovered a room dedicated to the art of storytelling. \n\n The walls were lined with ancient scrolls, each one containing tales from across the realms. I chose one at random, and as I unrolled it, the words began to shimmer, transporting me to a world beyond my wildest dreams.",
  "word count": 189,
  "dialog": [
    {
      "Meg":
        "I felt like I was right there in the mystical forest with the museum shining under the full moon! The way the author described it made me feel so magical.",
    },
    {
      "Lui":
        "That's a great point, Meg. The author's use of sensory details really helps to transport us into the world of the story.",
    },
    {
      "Kerry":
        "I loved how the museum was like a beacon in the forest, shining bright and full of secrets. It made me want to go exploring myself!",
    },
    {
      "Billy":
        "Yeah, me too! I felt like I was learning so much about history and science through the stories they were telling at the museum.",
    },
    {
      "Meg":
        "And can we talk about how amazing the art of storytelling room was? The ancient scrolls with tales from across the realms... it's like the author took us on a journey through time itself!",
    },
    {
      "Lui":
        "The way the stories were woven together, Meg, it was like a masterful tapestry. Each thread added depth and richness to the narrative.",
    },
    {
      "Kerry":
        "I'm still thinking about that world beyond our wildest dreams... what did you guys think of it? Did you feel like it was within reach?",
    },
    {
      "Billy":
        "Yeah, I felt like it was possible if we just kept exploring and learning. It's a great message for us to take away from this novel.",
    },
  ],
  "quiz": [
    {
      "question": "Where did the Moonlit Museum of Wonders stand?",
      "options": [
        "In the heart of a big city",
        "In the mystical forest",
        "On top of a mountain",
        "Underwater",
        "In a desert",
      ],
      "answer": 1,
    },
    {
      "question": "What was special about the museum's walls?",
      "options": [
        "They were made of solid stone",
        "They were adorned with glittering crystals and gemstones",
        "They were very tall and had windows on every floor",
        "They were made of mud",
        "They were covered in vines",
      ],
      "answer": 1,
    },
    {
      "question": "Who guided visitors through the museum's halls?",
      "options": [
        "A team of experts",
        "The Keeper, a wise and enigmatic figure",
        "A group of students",
        "A security guard",
        "No one",
      ],
      "answer": 1,
    },
    {
      "question": "What was in the room dedicated to storytelling?",
      "options": [
        "Old computers",
        "Ancient scrolls with tales from across the realms",
        "New books",
        "Old furniture",
        "Sports equipment",
      ],
      "answer": 1,
    },
    {
      "question": "How did the museum's stories affect the readers?",
      "options": [
        "They fell asleep",
        "They didn't understand anything",
        "They felt like they were in a different world",
        "They got bored quickly",
        "They learned new things",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Fantasy",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
