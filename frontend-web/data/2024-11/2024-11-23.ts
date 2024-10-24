import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Release of Star Wars",
    "details":
      "The release of Star Wars on November 23, 1977, marked a turning point in film history. The movie's groundbreaking special effects and immersive storytelling captivated audiences worldwide, making it one of the most successful films of all time.",
  },
  "date": "2024-11-23",
  "title": "The Star-Crossed",
  "body":
    "In the depths of space, a lone spaceship drifted aimlessly, its crew frozen in time like statues. The event that had brought them to this point was the release of Star Wars, a movie that had sparked a chain reaction of terror throughout the galaxy.  [ : paragraph # 2 ] The film's groundbreaking special effects had been hijacked by an evil entity, which used them to create an army of mindless drones. These creatures roamed the cosmos, searching for any remaining signs of life to extinguish.  \n\n As the last remnants of humanity hid in the shadows, a small group of survivors stumbled upon an ancient text that revealed the secret to defeating the entity. The text spoke of a powerful artifact hidden deep within the ruins of a long-abandoned planet.  \n\n With their hopes renewed, the survivors set out on a perilous journey to find the artifact and put an end to the entity's reign of terror. But as they delved deeper into the unknown, they began to realize that the true horror was not the entity itself, but the darkness within themselves that it had awakened.",
  "word count": 187,
  "dialog": [
    {
      "Kerry":
        "What do you guys think about the entity? Is it like, super evil or what?",
    },
    {
      "Meg":
        "I know, right? I was so scared when I first read about it in the ancient text. But then I realized that it's not just the entity itself, but also our own darkness within us.",
    },
    {
      "Billy":
        "Whoa, that's deep! I never thought of it that way. Do you think we can overcome our own darkness?",
    },
    {
      "Lui":
        "That's a great question, Billy. As educators, we always try to teach our students to be aware of their own biases and flaws. It's not easy, but it's possible with self-reflection and hard work.",
    },
    {
      "Kerry":
        "Yeah, I think so too! We just have to face ourselves and our own darkness head-on. Like in the novel, we can't let the entity win by hiding from our problems.",
    },
    {
      "Meg":
        "Exactly! And it's not just about individual growth, but also about community and collective responsibility. We have to work together to overcome our shared challenges.",
    },
    {
      "Billy":
        "I see what you guys mean now. The novel is really making me think about my own role in the world and how I can make a positive impact.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the event that brought the crew to a state of being frozen in time?",
      "options": [
        "The release of Star Wars",
        "The creation of an army of mindless drones",
        "The extinction of all life in the galaxy",
        "A catastrophic solar flare",
        "The entity's reign of terror",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the purpose of the ancient text that the survivors stumbled upon?",
      "options": [
        "To reveal the secret to defeating the entity",
        "To provide a map to the artifact",
        "To explain the origins of the entity",
        "To predict the future of humanity",
        "To describe the entity's army",
      ],
      "answer": 0,
    },
    {
      "question":
        "What did Billy think about his own role in the world after reading the novel?",
      "options": [
        "He thought he was too old to make a difference",
        "He believed he could overcome his own darkness",
        "He didn't think much about it",
        "He thought it was just a story",
        "He thought it was too hard to change",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did Meg realize when she first read about the entity in the ancient text?",
      "options": [
        "That it was super evil",
        "That it was a great opportunity for humanity",
        "That it was not just the entity itself, but also our own darkness within us",
        "That it was a natural part of the galaxy's ecosystem",
        "That it was a myth created to scare people",
      ],
      "answer": 2,
    },
    {
      "question":
        "What did Lui say about individual growth and community responsibility?",
      "options": [
        "It's not possible for individuals to grow, but communities can change",
        "Individuals must face themselves and their own darkness head-on",
        "Communities are more important than individual growth",
        "Self-reflection is the key to personal growth",
        "Both individual and collective responsibility are necessary",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Horror",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_8",
  },
};
export default data;
