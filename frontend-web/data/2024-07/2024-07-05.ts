import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Storming of the Bastille",
    "details":
      "On July 14th, 1789, a mob of Parisian citizens stormed the Bastille prison in Paris, France, marking the beginning of the French Revolution.",
  },
  "date": "2024-07-05",
  "title": "The Missing Bastille Prisoner",
  "body":
    "It was July 14th, 1789, and Paris was in chaos. The Storming of the Bastille had just taken place, and rumors were spreading like wildfire about a prisoner who had gone missing during the chaos. The authorities were stumped, and no one seemed to know anything.  \n\n As I walked through the streets, I stumbled upon a suspicious-looking figure lurking in the shadows. His name was Pierre, and he claimed to be a former guard at the Bastille. But something about him didn't add up.  \n\n I decided to follow Pierre and see where he led me. We wound our way through the narrow alleys of Montmartre, dodging market stalls and street performers. The air was thick with the smell of freshly baked bread and roasting coffee beans.  \n\n As we turned a corner, I saw a glimmer of light up ahead. It was an abandoned warehouse, its doors slightly ajar. Pierre pushed them open and beckoned me inside. What secrets lay hidden within those crumbling walls?",
  "word count": 164,
  "dialog": [
    {
      "Meg":
        "I'm so excited to be reading this historical fiction novel! The setting and characters are so vivid.",
    },
    {
      "Lui":
        "I agree, Meg. The author does an excellent job of transporting us back in time to Paris during the French Revolution. And I love how Pierre's mysterious figure sparks curiosity in Billy.",
    },
    {
      "Kerry":
        "Yeah, I was on the edge of my seat wondering what secrets he might be hiding! And I'm loving the descriptions of the city and the people's daily lives.",
    },
    {
      "Billy":
        "I know, it's like you can smell the freshly baked bread and coffee beans. The author really knows how to bring history to life.",
    },
    {
      "Meg":
        "Exactly! It's not just a dry recitation of facts. I feel like I'm right there with Pierre, exploring the abandoned warehouse.",
    },
    {
      "Lui":
        "That's what makes historical fiction so powerful. It can make complex events and people relatable and accessible.",
    },
    {
      "Kerry":
        "And I love how it's making me think about my own family history. My grandma told us stories about our ancestors during the war...",
    },
    {
      "Billy":
        "Whoa, that sounds cool! Maybe we can have a project where we research our own families' histories and share them with each other?",
    },
    {
      "Meg":
        "That's such a great idea, Billy! I'd love to learn more about my own ancestors.",
    },
    {
      "Lui":
        "I think that would be a fantastic learning experience for all of us. Historical fiction can be so inspiring!",
    },
  ],
  "quiz": [
    {
      "question": "What was happening in Paris on July 14th, 1789?",
      "options": [
        "The French Revolution had just begun",
        "A royal wedding was taking place",
        "The Storming of the Bastille had occurred",
        "A peace treaty was being signed",
        "A new government was established",
      ],
      "answer": 2,
    },
    {
      "question":
        "What did Billy stumble upon while walking through the streets?",
      "options": [
        "A group of revolutionaries",
        "An abandoned warehouse",
        "A market stall",
        "A street performer",
        "A suspicious-looking figure",
      ],
      "answer": 4,
    },
    {
      "question": "Who claimed to be a former guard at the Bastille?",
      "options": [
        "Pierre",
        "Billy",
        "Lui",
        "Meg",
        "Kerry",
      ],
      "answer": 0,
    },
    {
      "question": "What did Billy and Pierre find in an abandoned warehouse?",
      "options": [
        "A hidden treasure",
        "A secret meeting",
        "An old book",
        "A mysterious figure",
        "Nothing notable",
      ],
      "answer": 3,
    },
    {
      "question": "What topic was suggested as a project by Billy?",
      "options": [
        "Writing a novel about the French Revolution",
        "Researching family histories",
        "Studying world geography",
        "Learning a new language",
        "Solving math problems",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Society",
    "flavor": "Mystery",
    "models": {
      "main": "llama3",
      "novel": "llama3",
    },
    "level": "Level_7",
  },
};
export default data;
