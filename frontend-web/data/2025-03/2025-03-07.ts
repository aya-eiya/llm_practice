import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The First Man Steps on the Moon",
    "details":
      "On July 20, 1969, Neil Armstrong became the first person to set foot on the lunar surface during the Apollo 11 mission.",
  },
  "date": "2025-03-07",
  "title": "The Starlight Serenade",
  "body":
    "It was a night like any other in the small town of Willow Creek, but for Emily, it was a night she would never forget. The year was 1969, and the world was on the cusp of a new era. As she walked through the deserted streets, the sound of her footsteps echoed off the buildings, a lonely serenade to the stars above.\n\n\n\nShe had always been fascinated by the mysteries of space, and as she gazed up at the night sky, she felt an overwhelming sense of wonder. The stars twinkled like diamonds against the inky blackness, and she couldn't help but feel a deep connection to the universe.\n\n\n\nAs she continued her walk, Emily stumbled upon a small park, where a group of people were gathered around a radio. They were listening intently to the news, their faces filled with excitement and anticipation. And then, in a moment that would go down in history, Neil Armstrong's voice crackled through the speakers, 'That's one small step for man, one giant leap for mankind.' Emily felt a shiver run down her spine as she realized the magnitude of what she was witnessing.",
  "word count": 192,
  "dialog": [
    {
      "Kerry":
        "I'm still trying to wrap my head around that moment when Neil Armstrong stepped on the moon. I mean, what's the significance of that event?",
    },
    {
      "Meg":
        "Oh my gosh, I had no idea it was such a big deal! I thought it was just another day in history",
    },
    {
      "Billy":
        "It's huge, Meg! It marked the first time humans left Earth's orbit and set foot on another celestial body. That's like, a huge milestone for humanity!",
    },
    {
      "Lui":
        "That's right, Billy. And it wasn't just about stepping on the moon. It was about the technological advancements that made it possible, and the impact it had on our understanding of space exploration",
    },
    {
      "Kerry":
        "I see what you mean, Lui. But for me, it's more about the people involved. Like, what were they thinking when they first landed on the moon?",
    },
    {
      "Meg":
        "Ooh, that's a great question, Kerry! I wonder if we'll ever know what they were really thinking",
    },
    {
      "Billy":
        "I think we can make some educated guesses based on their reactions and interviews. It was definitely a historic moment for them, and for us!",
    },
    {
      "Lui":
        "That's right, Billy. And it's always interesting to see how people react in the face of something so monumental. It says a lot about our human nature",
    },
  ],
  "quiz": [
    {
      "question":
        "What was Emily's emotional state as she walked through the deserted streets?",
      "options": [
        "Happy",
        "Sad",
        "Wonderful",
        "Excited",
        "Lonely",
      ],
      "answer": 4,
    },
    {
      "question": "Who first stepped on the moon?",
      "options": [
        "Neil Armstrong",
        "Buzz Aldrin",
        "John Glenn",
        "Alan Shepard",
        "Tom Hanks",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the significance of Neil Armstrong's voice crackling through the speakers?",
      "options": [
        "It was a funny joke",
        "It was a sad song",
        "It marked the first time humans left Earth's orbit and set foot on another celestial body",
        "It was a historic moment for humanity",
        "It was a normal news report",
      ],
      "answer": 2,
    },
    {
      "question": "What did Billy think about the moon landing?",
      "options": [
        "It was just another day in history",
        "It's huge, it marked a milestone for humanity",
        "I'm still trying to wrap my head around that moment",
        "It wasn't a big deal",
        "I don't know what he thinks",
      ],
      "answer": 1,
    },
    {
      "question":
        "Who made some educated guesses about the people involved in the moon landing?",
      "options": [
        "Kerry",
        "Meg",
        "Billy",
        "Lui",
        "Emily",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Historical Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
