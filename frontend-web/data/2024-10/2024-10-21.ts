import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "The first successful human spaceflight by Soviet cosmonaut Yuri Gagarin on April 12, 1961 is often cited as a pivotal moment in engineering history.",
    "details":
      "However, a lesser-known but equally significant event occurred on October 21, 1962, when the Mariner 4 spacecraft became the first to successfully fly by Mars.",
  },
  "date": "2024-10-21",
  "title": "The Last Hope of Mars",
  "body":
    "The year was 2055 and the world was on the brink of destruction. Climate change had ravaged the planet, and wars over resources had left humanity on the edge of extinction. The last hope for survival lay in a spaceship called Aurora, which was sent to Mars with the mission of establishing a new colony.\n\n The crew of Aurora consisted of scientists, engineers, and medical experts who were chosen for their skills and expertise. They had been training for years and were equipped with state-of-the-art technology that would allow them to survive on the harsh Martian environment. As they entered Mars' atmosphere, the ship was hit by a fierce storm that sent it plummeting towards the surface.\n\n The crew managed to recover from the crash and assess the damage. They found that some of their equipment had been destroyed, but they still had enough resources to sustain themselves for a while. As they ventured out onto the Martian terrain, they discovered that the planet was not as barren as they thought. There were signs of life, in the form of strange plants and microorganisms that could potentially be used to support human life.",
  "word count": 193,
  "dialog": [
    {
      "Meg":
        "I'm still trying to process what happened at the end of the novel. It was like my world had been turned upside down.",
    },
    {
      "Kerry":
        "I knew it! I always thought that something wasn't quite right about the crew's plan to save humanity. But at least they made it to Mars, right?",
    },
    {
      "Billy":
        "Yeah, but what if they're not alone on Mars? What if there are other beings or even aliens waiting for them?",
    },
    {
      "Lui":
        "Well, we can't say for sure without more information, but the crew did seem to be well-prepared. Maybe we should focus on their survival and adaptation to the Martian environment instead of speculating about unknowns.",
    },
    {
      "Meg":
        "I like that idea, Mr. Lui! But don't you think it's also interesting to consider how their experiences might shape human society back on Earth?",
    },
    {
      "Kerry":
        "Definitely! I mean, if we can make a new home on Mars, maybe we can even start fresh and create a better world than the one we left behind.",
    },
    {
      "Billy":
        "That's true. It's like they say, 'when life gives you lemons, make lemonade.' We could use this opportunity to build something amazing!",
    },
    {
      "Lui":
        "I think that's a great point, Billy. And it's not just about the crew on Mars; it's also about us here on Earth and how we can learn from their experiences.",
    },
    {
      "Meg":
        "Exactly! We should be thinking about what we can do to make our own world better, even if it means starting small.",
    },
  ],
  "quiz": [
    {
      "question": "What was the reason for the crew to go to Mars?",
      "options": [
        "To establish a new colony",
        "To explore the Martian terrain",
        "To find resources on Mars",
        "To escape the wars on Earth",
        "To start a new human society",
      ],
      "answer": 0,
    },
    {
      "question": "What was the result of the crew's plan to save humanity?",
      "options": [
        "The crew failed and humanity went extinct",
        "The crew succeeded in saving humanity",
        "The crew crashed on Mars but found signs of life",
        "The crew survived but were not alone on Mars",
        "The crew made it to Mars but had to adapt to the harsh environment",
      ],
      "answer": 2,
    },
    {
      "question": "What was the significance of the crew's experience on Mars?",
      "options": [
        "It showed that humans could survive on other planets",
        "It proved that aliens existed on Mars",
        "It provided an opportunity for humanity to start fresh and create a better world",
        "It demonstrated that humans were alone in the universe",
        "It highlighted the importance of adapting to new environments",
      ],
      "answer": 2,
    },
    {
      "question":
        "Who made the statement 'when life gives you lemons, make lemonade'?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "Unknown",
      ],
      "answer": 3,
    },
    {
      "question": "What was the focus of Lui's suggestion to the students?",
      "options": [
        "To speculate about unknowns on Mars",
        "To consider how the crew's experiences might shape human society back on Earth",
        "To focus on the crew's survival and adaptation to the Martian environment",
        "To explore other planets in the solar system",
        "To discuss the importance of starting small",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Engineering",
    "flavor": "Science Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
