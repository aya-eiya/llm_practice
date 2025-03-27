import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Pierre-Simon Laplace Publishes Celestial Mechanics",
    "details":
      "French mathematician Pierre-Simon Laplace publishes his five-volume work 'Traité de Mécanique Céleste', which presents a comprehensive and systematic treatment of celestial mechanics.",
  },
  "date": "2025-03-02",
  "title": "Shadows of Eternity",
  "body":
    "The once blue skies were now a perpetual gray, as if the very heavens themselves had given up on humanity. Cities lay in ruins, their steel and concrete skeletons piercing the air like jagged teeth. The streets were empty, save for the occasional group of robed figures moving with purpose.  \n\n I stood amidst this desolation, my heart heavy with the weight of what we had lost. The world had been ravaged by war and environmental disaster, leaving only a handful of survivors to pick up the pieces. Our people had been forced to flee underground, where we lived in cramped tunnels and caverns, eking out a meager existence.  \n\n But even in this darkness, there was hope. A new generation was rising, one that refused to accept the status quo. They spoke of a future where the skies were once again blue, where the land was green and fertile, and where humanity lived in harmony with the earth. I watched as they rallied, their voices growing louder, their determination burning brighter with every passing day.",
  "word count": 174,
  "dialog": [
    {
      "Kerry": "I don't get it, what's going on in this world?",
    },
    {
      "Meg":
        "It's like, humanity has gone through all these disasters and now they're living underground...",
    },
    {
      "Billy":
        "But that's the thing, Kerry! It's not just about the apocalypse. It's about hope and resilience!",
    },
    {
      "Lui":
        "Exactly, Billy. The novel shows how even in the darkest times, there's always a chance for renewal.",
    },
    {
      "Kerry":
        "I see what you mean, Lui. And it's not just about the people, it's also about the environment and how we've ruined the planet...",
    },
    {
      "Meg":
        "I love how the author describes the world as 'a perpetual gray'. It's so vivid and sad at the same time.",
    },
    {
      "Billy":
        "And the kids in the novel, they're like us! They're trying to make a difference and create a better future.",
    },
    {
      "Lui":
        "That's right, Billy. The next generation is always full of promise and possibility. We just have to give them the chance to succeed.",
    },
    {
      "Kerry":
        "I'm gonna go read it again. I feel like there's more to it than I initially thought...",
    },
    {
      "Meg":
        "Same here! I want to see if I can find any connections between this novel and my favorite fantasy series...",
    },
  ],
  "quiz": [
    {
      "question": "What is the state of the world in the novel?",
      "options": [
        "It's a beautiful place",
        "The skies are blue",
        "Cities lay in ruins",
        "Humans live in harmony with nature",
        "Everything is perfect",
      ],
      "answer": 2,
    },
    {
      "question": "Where do humans live after the apocalypse?",
      "options": [
        "Above ground",
        "In spacious underground tunnels and caverns",
        "On a spaceship",
        "Underwater",
        "In a fantasy world",
      ],
      "answer": 1,
    },
    {
      "question": "What is the theme of the novel?",
      "options": [
        "The power of technology",
        "The importance of family",
        "Hope and resilience in the face of adversity",
        "The dangers of climate change",
        "The value of friendship",
      ],
      "answer": 2,
    },
    {
      "question": "Who are the main characters in the dialogue?",
      "options": [
        "Billy, Kerry, Meg, Lui, Teacher",
        "Teacher, Billy, Kerry, Meg, Student",
        "Meg, Billy, Kerry, Lui, Parent",
        "Lui, Teacher, Billy, Meg, Kerry",
        "Kerry, Billy, Meg, Lui, Friend",
      ],
      "answer": 0,
    },
    {
      "question": "What is the mood of the novel?",
      "options": [
        "Happy and uplifting",
        "Sad and depressing",
        "Exciting and adventurous",
        "Serious and thought-provoking",
        "Perpetual gray",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Mathematics",
    "flavor": "Dystopian",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
