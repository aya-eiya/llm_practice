import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The New York World's Fair Opens",
    "details": "The 1964/65 New York World's Fair, also known as the Peace Through Understanding, officially opened on April 22 but a new pavilion called \"Space Park\" was dedicated to the United States space program in July. The pavilion included a large model of the Apollo/Saturn rocket and a full-scale mockup of the command module."
  },
  "date": "2026-07-15",
  "title": "Stardust and Wonder",
  "body": "In the realm of Aethoria, where stars danced across the sky and magic was woven into the very fabric of existence, the grand opening of the Celestial Expo had finally arrived. The fair, a marvel of engineering and wonder, showcased the latest innovations in stardust harvesting and celestial cartography.  \n\nAs guests entered the expo, they were greeted by the majestic sight of a life-size model of the Cosmic Chariot, a vessel rumored to be capable of traversing the vast expanse between galaxies. The Chariot's sleek design and advanced propulsion system had sparked heated debates among the scientific community, with some hailing it as a revolutionary breakthrough and others dismissing it as mere fantasy.  \n\nAmong the expo's many attractions was the esteemed Professor Orion's lecture on 'Unlocking the Secrets of Stellar Energy.' With his characteristic charm and wit, the professor regaled the audience with tales of ancient civilizations that had harnessed the power of stardust to build sprawling cities and harness the very fabric of reality. Though some attendees remained skeptical, many were inspired by the prospect of unlocking the secrets of the cosmos.",
  "word count": 183,
  "dialog": [
    {
      "Meg": "I just finished reading the novel, and I have to say it's one of my favorites! The world-building is incredible."
    },
    {
      "Kerry": "I know what you mean, Meg! I loved how they described the Celestial Expo. It sounds like a real-life fantasy come true."
    },
    {
      "Lui": "As an educator, I appreciate how the novel weaves in complex scientific concepts and makes them accessible to readers of all ages."
    },
    {
      "Billy": "I'm more interested in the life-size model of the Cosmic Chariot! Do you think it's really possible to build something like that?"
    },
    {
      "Meg": "I agree with Billy, I want to know more about how they came up with such an advanced propulsion system. It's amazing what humans can create when they work together."
    },
    {
      "Lui": "Indeed, the novel highlights the importance of collaboration and innovation in pushing human knowledge forward. But let's not forget the themes of responsibility that are woven throughout the story."
    },
    {
      "Kerry": "Responsibility? I thought it was more about exploring the unknown and pushing boundaries!"
    },
    {
      "Billy": "I think Kerry has a point, Lui. The novel does make us wonder what lies beyond our galaxy, and whether we'll ever be able to reach it."
    },
    {
      "Meg": "But that's the beauty of it - the novel leaves us with so many questions and possibilities, making us feel like we're part of this grand adventure too."
    }
  ],
  "quiz": [
    {
      "question": "What type of event was taking place at Aethoria?",
      "options": [
        "A grand opening ceremony for a new restaurant",
        "The annual Starlight Festival",
        "The grand opening of the Celestial Expo",
        "A stardust harvesting competition",
        "A celestial cartography conference"
      ],
      "answer": 2
    },
    {
      "question": "What was being showcased at the Celestial Expo?",
      "options": [
        "The latest innovations in space exploration",
        "The grandeur of Aethoria's architecture",
        "Innovations in stardust harvesting and celestial cartography",
        "Ancient civilizations' achievements",
        "The Cosmic Chariot's propulsion system"
      ],
      "answer": 3
    },
    {
      "question": "Who was giving a lecture at the Celestial Expo?",
      "options": [
        "Professor Orion",
        "Detective Jameson",
        "Meg",
        "Kerry",
        "Billy"
      ],
      "answer": 0
    },
    {
      "question": "What sparked debates among the scientific community?",
      "options": [
        "The grand opening of the Celestial Expo",
        "Professor Orion's lecture",
        "The life-size model of the Cosmic Chariot",
        "A new stardust harvesting technique",
        "The advanced propulsion system of the Cosmic Chariot"
      ],
      "answer": 4
    },
    {
      "question": "What was mentioned as a possibility in the novel?",
      "options": [
        "Building sprawling cities on other planets",
        "Harnessing the power of stardust to build cities",
        "Traversing the vast expanse between galaxies using the Cosmic Chariot",
        "Exploring the unknown and pushing boundaries beyond our galaxy",
        "Unlocking the secrets of stellar energy"
      ],
      "answer": 3
    }
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Fantasy",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1"
    },
    "level": "Level_5"
  }
}
export default data;