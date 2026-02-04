import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Opening of the Sydney Opera House",
    "details":
      "The iconic Sydney Opera House, designed by Danish architect Jørn Utzon, opened to the public on February 10, 1973. The building's distinctive sail-like roof structures, known as 'shells,' were a revolutionary design approach that has since influenced architecture worldwide.",
  },
  "date": "2026-02-10",
  "title": "Steam of Time",
  "body":
    "In the year 1895, the steam-powered Sydney Opera House rose from its concrete foundations like a magnificent mechanical bird. Its brass and copper sails gleamed in the morning sun as Professor James Maxwell watched his creation come to life.  \n\n 'The clockwork mechanisms will allow us to adjust every shell's position,' he explained to his eager audience, demonstrating how steam-powered pistons would maintain the building's iconic shape against the elements. The crowd gasped in awe as the first performance of the Opera House's mechanical organ began, its brass pipes shimmering in harmony with the whistling wind.  \n\n As the sun set over Sydney Harbour, the Opera House's copper roof caught fire like a phoenix rising from the flames. But Maxwell was prepared - his team had installed a network of steam-powered cooling systems and water pumps that sprang into action, saving the revolutionary structure. From that day forward, the Steam Opera House became a symbol of innovation in an age of progress.",
  "word count": 160,
  "dialog": [
    {
      "Billy":
        "I love the novel! The mechanical organ is so cool, and Maxwell's steam-powered cooling systems saved it from fire. So innovative!",
    },
    {
      "Kerry":
        "Totally agree, Billy! But what if they had used electricity instead? Would've been faster maybe?",
    },
    {
      "Meg":
        "Oh my goodness, the fire scene was terrifying yet beautiful at the same time. Like a phoenix rising from flames...",
    },
    {
      "Lui":
        "Excellent observation, Meg. Now imagine how this would have impacted Sydney's development in real life.",
    },
    {
      "Billy":
        "And think about it - steam-powered buildings! That would've been amazing in the late 19th century!",
    },
    {
      "Kerry":
        "Yeah but wouldn't it be too slow? What if someone needed to move quickly?",
    },
    {
      "Meg":
        "But the mechanical parts would make it so unique and special. Like a work of art and engineering combined.",
    },
    {
      "Lui":
        "Precisely, Meg. This novel highlights how technological advancements can shape our cities and architecture.",
    },
  ],
  "quiz": [
    {
      "question":
        "In what year was the steam-powered Sydney Opera House built?",
      "options": [
        "1855",
        "1890",
        "1895",
        "1900",
        "1915",
      ],
      "answer": 2,
    },
    {
      "question":
        "Who is credited with inventing the steam-powered cooling systems for the Opera House?",
      "options": [
        "Professor James Maxwell",
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
      ],
      "answer": 0,
    },
    {
      "question":
        "What triggered a fire on the copper roof of the Sydney Opera House in the story?",
      "options": [
        "Lightning strike",
        "Human error",
        "Natural gas leak",
        "Sunset blaze",
        "Unknown reason",
      ],
      "answer": 3,
    },
    {
      "question":
        "Who mentioned that steam-powered buildings might be too slow for quick movements in the dialogue?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "None of them",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did Professor James Maxwell's team install to save the Opera House from fire?",
      "options": [
        "Steam-powered cooling systems",
        "Electrical safety devices",
        "Water pumps only",
        "Fire extinguishers",
        "None of these",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Steampunk",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_4",
  },
};
export default data;
