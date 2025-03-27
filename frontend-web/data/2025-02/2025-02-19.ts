import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first steam engine was patented",
    "details":
      "On February 19, 1698, Thomas Savery patented the first steam engine, which used steam to lift water from mines.",
  },
  "date": "2025-02-19",
  "title": "Timeless Voyage",
  "body":
    "In the year 2154, humanity had colonized several planets in the distant reaches of the galaxy. The United Earth Space Probe Agency (UESPA) had sent a mission to explore a newly discovered wormhole that connected two galaxies. Captain Jaxon and his crew were on board the spaceship Aurora, which was equipped with the latest technology in time travel.  \n\n As they approached the wormhole, strange energy readings began to appear on their instruments. The ship's AI, S.A.R.A., warned of potential anomalies that could affect the space-time continuum. Jaxon hesitated for a moment before deciding to proceed. Suddenly, a massive explosion rocked the Aurora, and the crew was thrown off course.  \n\n When they finally regained control, they found themselves in a desolate, post-apocalyptic world. The once-blue skies were now a deep, foreboding grey. The air was thick with an eerie silence. Jaxon's crew quickly realized that this was not their time, nor was it the future they knew. They had been transported to a different dimension, one where humanity had never existed.  \n\n With a mix of fear and determination, the crew set out to explore this new world, hoping to find a way back home. Their journey would take them through uncharted territories, testing their resolve and forcing them to confront the possibility that they might never return to their own time.",
  "word count": 220,
  "dialog": [
    {
      "Billy":
        "I love the novel! It was so exciting to read about Captain Jaxon and his crew's journey through time.",
    },
    {
      "Kerry":
        "Yeah, I loved how they had to navigate this new world where humanity didn't exist. It was like a sci-fi adventure!",
    },
    {
      "Meg":
        "I know, right? And the way the author described the post-apocalyptic world was so vivid and eerie. I felt like I was right there with them.",
    },
    {
      "Lui":
        "As an educator, I appreciated how the novel incorporated themes of time travel, space exploration, and human resilience. It's a great example of how science fiction can inspire young minds.",
    },
    {
      "Billy":
        "I also liked how the characters had to work together and rely on each other to survive in this new world. It was like they were one big team!",
    },
    {
      "Kerry":
        "Ha! Yeah, and I loved how Billy mentioned that part. But what really got me was when Captain Jaxon's crew discovered that they might never return to their own time. That was such a intense moment!",
    },
    {
      "Meg":
        "I know, it was like my heart stopped reading that part. And then the way the author described the desolate landscape and the eerie silence... it just gave me chills.",
    },
    {
      "Lui":
        "Well, as we discuss this novel, I think it's worth noting how it explores complex themes in a way that's accessible to young readers like Billy, Kerry, and Meg. It's a great example of how science fiction can be both entertaining and thought-provoking.",
    },
  ],
  "quiz": [
    {
      "question":
        "What year was humanity colonized in several planets in the distant reaches of the galaxy?",
      "options": [
        "2010",
        "2050",
        "2154",
        "2200",
        "2250",
      ],
      "answer": 2,
    },
    {
      "question": "Who is the captain of the spaceship Aurora?",
      "options": [
        "Captain Jaxon",
        "Captain Smith",
        "Captain Johnson",
        "Captain Davis",
        "Captain Lee",
      ],
      "answer": 0,
    },
    {
      "question":
        "What happened to the spaceship Aurora when it approached the wormhole?",
      "options": [
        "It exploded and destroyed the crew",
        "It was thrown off course and crashed on a planet",
        "A massive explosion rocked the ship",
        "The ship's AI, S.A.R.A., took control of the ship",
        "The crew was taken to a different dimension",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was the state of the world when Captain Jaxon and his crew arrived?",
      "options": [
        "A beautiful, blue-sky world",
        "A post-apocalyptic world with deep, foreboding grey skies",
        "A world with thick, green forests and happy animals",
        "A world with no humans or life at all",
        "A world with advanced technology and robots",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the crew's hope when they found themselves in a different dimension?",
      "options": [
        "To find a way back home immediately",
        "To explore this new world and its creatures",
        "To survive on their own in this new world",
        "To return to their own time and continue their mission",
        "To rely on each other to survive in this new world",
      ],
      "answer": 4,
    },
  ],
  "params": {
    "theme": "Engineering",
    "flavor": "Science Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
