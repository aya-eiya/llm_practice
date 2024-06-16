import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Performance of 'The Rite of Spring'",
    "details":
      "On June 27th, 1913, Igor Stravinsky's avant-garde ballet 'The Rite of Spring' premiered at the Théâtre du Champs-Élysées in Paris. The performance was met with a mixture of applause and boos from the audience, and it marked a significant moment in the development of modern classical music and dance.",
  },
  "date": "2024-06-27",
  "title": "The Rite of Spring: A Fantasy Novel",
  "body":
    "In the mystical realm of Elyria, where the sun dipped into the horizon and painted the sky with hues of crimson and gold, the ancient ritual of the Rite of Spring was about to unfold. The air was electric with anticipation as the inhabitants of this enchanted land gathered at the sacred circle.  \n\n At the center of the circle stood the majestic Tree of Life, its branches adorned with glittering gemstones that seemed to hold the secrets of the universe. As the moon reached its zenith in the night sky, a procession of mystics, each carrying an intricately carved wooden flute, began their sacred dance.  \n\n With every step and every note played on the flutes, the very fabric of reality appeared to bend and warp, as if the music itself was weaving a tapestry of possibilities. The trees swayed in rhythm, the stars twinkled in harmony, and the essence of spring burst forth from the heart of Elyria, filling all with an intoxicating sense of rebirth and renewal.",
  "word count": 168,
  "dialog": [
    {
      "Kerry":
        "Wow, I loved how the author described the scenery in Elyria! The way they painted the picture with words was amazing.",
    },
    {
      "Meg":
        "I know what you mean, Kerry. I felt like I was right there with them, watching the sun set over the horizon.",
    },
    {
      "Lui":
        "Actually, what struck me most was the symbolism of the Tree of Life. It's a powerful metaphor for growth and renewal.",
    },
    {
      "Billy":
        "I was thinking about that too, Lui! The way the music seemed to bring everything together was so cool. I loved how it felt like reality was bending and warping.",
    },
    {
      "Kerry":
        "Yeah, and have you guys thought about what this says about the power of art and imagination? Like, the author is using these mystical elements to explore deeper themes...",
    },
    {
      "Meg":
        "Oh, absolutely! I think that's one of the things I loved most about this novel. It's not just a pretty story; it's actually exploring some really big ideas.",
    },
    {
      "Lui":
        "Well said, Meg. And I think that's what makes this novel so special – it's not just a fantasy story, but a commentary on our own world and the ways we can use art to transform it.",
    },
    {
      "Billy":
        "Exactly! It's like, we're reading about this magical place, but really we're thinking about how we can apply those same principles to our own lives.",
    },
  ],
  "quiz": [
    {
      "question": "What was happening at the beginning of the story?",
      "options": [
        "The Rite of Spring was already over",
        "The sun was setting in Elyria",
        "The main character was introducing themselves",
        "The Tree of Life was being cut down",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question": "What did each mystic carry during the sacred dance?",
      "options": [
        "A small stone",
        "An intricately carved wooden flute",
        "A bouquet of flowers",
        "A lantern",
        "A book",
      ],
      "answer": 1,
    },
    {
      "question": "According to Lui, what is the Tree of Life a metaphor for?",
      "options": [
        "Growth and decay",
        "Spring and autumn",
        "Rebirth and renewal",
        "Summer and winter",
        "None of the above",
      ],
      "answer": 2,
    },
    {
      "question": "What did Billy think was cool about the story?",
      "options": [
        "The way reality seemed to bend and warp",
        "The magical creatures that appeared",
        "The music played on the flutes",
        "The description of the scenery",
        "None of the above",
      ],
      "answer": 0,
    },
    {
      "question": "What did Kerry think about the author's writing style?",
      "options": [
        "It was too descriptive",
        "It was too concise",
        "It was amazing and painted a vivid picture",
        "It was boring",
        "None of the above",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Dance",
    "flavor": "Fantasy",
    "models": {
      "main": "llama3",
      "novel": "llama3",
    },
    "level": "Level_6",
  },
};
export default data;
