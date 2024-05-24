import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "1618: Defenestrations of Prague",
    "details":
      "The Defenestrations of Prague were two incidents that occurred on May 23, 1618, in Prague, Bohemia (now the Czech Republic). In the first incident, two imperial governors, Jaroslav Borzita of Martinice and Vilém Slavata of Chlum, were thrown out of a window of Prague Castle by Protestant Bohemian noblemen. The incident marked the beginning of the Thirty Years' War.",
  },
  "date": "2024-05-23",
  "title": "The Defenestration of Prague",
  "body":
    "In the year 2042, the world is a very different place. Technology has advanced at an unprecedented rate, and with it, the potential for conflict has grown exponentially.One such conflict is brewing in the city of Prague. A group of rogue scientists have developed a new type of weapon, one that could potentially destroy the entire city. The government is desperate to stop them, but their efforts have been met with fierce resistance.As the conflict escalates, the rogue scientists take their weapons to the top of Prague Castle. They threaten to use them unless the government meets their demands. The government refuses, and a standoff ensues.Suddenly, one of the scientists loses his footing and falls out of a window. The crowd below gasps in horror. The scientist's death is a turning point in the conflict. It shows the government that the scientists are willing to die for their cause.The government is forced to negotiate with the scientists. They eventually reach an agreement, and the conflict is averted. But the defenestration of Prague serves as a warning to the world. The potential for conflict is always present, and it can erupt at any moment.",
  "word count": 193,
  "dialog": [
    {
      "Billy":
        "I wish I could have been there to see the defenestration of Prague. It sounds like something out of a history book!",
    },
    {
      "Kerry":
        "I know, right? It's crazy to think that something like that could happen in the modern world.",
    },
    {
      "Lui":
        "It's a reminder that we can never take peace for granted. Even in the most advanced societies, there is always the potential for conflict.",
    },
    {
      "Kerry": "Yeah, I think it's important to remember that.",
    },
    {
      "Meg":
        "I wonder what it would have been like to be one of the scientists on the castle. They must have been so scared.",
    },
    {
      "Billy":
        "I think they were probably more determined than scared. They believed in what they were fighting for.",
    },
    {
      "Lui": "That's true. They were willing to die for their cause.",
    },
    {
      "Kerry": "It's a shame things had to turn out the way they did.",
    },
    {
      "Meg": "I agree. But at least the conflict was averted.",
    },
  ],
  "quiz": [
    {
      "question": "In what year does the story take place?",
      "options": [
        "2022",
        "2032",
        "2042",
        "2052",
        "2062",
      ],
      "answer": 2,
    },
    {
      "question": "What type of weapon did the rogue scientists develop?",
      "options": [
        "A nuclear bomb",
        "A biological weapon",
        "A chemical weapon",
        "A new type of energy weapon",
        "A mind control device",
      ],
      "answer": 3,
    },
    {
      "question": "What was the turning point in the conflict?",
      "options": [
        "The government agreed to meet the scientists' demands",
        "The rogue scientists were captured",
        "One of the scientists fell out of a window",
        "The government launched a military strike on the castle",
        "The scientists surrendered peacefully",
      ],
      "answer": 2,
    },
    {
      "question":
        "What does the defenestration of Prague serve as a warning to the world?",
      "options": [
        "That technology can be used for good or evil",
        "That peace is fragile and can be easily broken",
        "That scientists are always willing to die for their beliefs",
        "That governments should never negotiate with terrorists",
        "That history is doomed to repeat itself",
      ],
      "answer": 1,
    },
    {
      "question": "Which of the following is NOT a character in the dialogue?",
      "options": [
        "Billy",
        "Kerry",
        "Lui",
        "Meg",
        "Sam",
      ],
      "answer": 4,
    },
  ],
  "params": {
    "theme": "Politics",
    "flavor": "Science Fiction",
    "models": {
      "main": "gemini",
      "novel": "gemini",
    },
    "level": "Level_5",
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation": "A sentence with only a subject and a verb.",
          "usage": [
            "The world is a very different place.",
          ],
          "words": [
            {
              "S": [
                "The world",
              ],
            },
            {
              "V": [
                "is",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation": "A sentence with a subject, a verb, and a complement.",
          "usage": [
            "The defenestration of Prague serves as a warning to the world.",
          ],
          "words": [
            {
              "S": [
                "The defenestration of Prague",
              ],
            },
            {
              "V": [
                "serves",
              ],
            },
            {
              "C": [
                "as a warning to the world",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation": "A sentence with a subject, a verb, and an object.",
          "usage": [
            "One such conflict is brewing in the city of Prague.",
          ],
          "words": [
            {
              "S": [
                "One such conflict",
              ],
            },
            {
              "V": [
                "is brewing",
              ],
            },
            {
              "O": [
                "in the city of Prague",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation": "A sentence with a subject, a verb, and two objects.",
          "usage": [],
          "words": [],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "A sentence with a subject, a verb, an object, and a complement.",
          "usage": [
            "The government is desperate to stop them, but their efforts have been met with fierce resistance.",
          ],
          "words": [
            {
              "S": [
                "The government",
              ],
            },
            {
              "V": [
                "is desperate to stop them",
              ],
            },
            {
              "O": [
                "their efforts",
              ],
            },
            {
              "C": [
                "with fierce resistance",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "Conflict",
          "meaning":
            "A serious disagreement or argument, typically one that involves violence.",
          "usage": [
            "One such conflict is brewing in the city of Prague.",
            "The potential for conflict is always present, and it can erupt at any moment.",
          ],
          "pronounce": "/ˈkɑːnflɪkt/",
          "example":
            "The conflict between the two countries has been going on for years.",
        },
        {
          "class": "Adjective",
          "word": "Exponential",
          "meaning": "Increasing at a very rapid rate.",
          "usage": [
            "Technology has advanced at an unprecedented rate, and with it, the potential for conflict has grown exponentially.",
          ],
          "pronounce": "/ˌɛkspəˈnɛnʃəl/",
          "example":
            "The population of the city has grown exponentially in the last decade.",
        },
        {
          "class": "Noun",
          "word": "Scientist",
          "meaning":
            "A person who is trained in science and who does scientific research.",
          "usage": [
            "A group of rogue scientists have developed a new type of weapon, one that could potentially destroy the entire city.",
            "The rogue scientists take their weapons to the top of Prague Castle.",
          ],
          "pronounce": "/ˈsaɪəntɪst/",
          "example":
            "The scientist was awarded the Nobel Prize for his work in physics.",
        },
        {
          "class": "Noun",
          "word": "Weapon",
          "meaning":
            "An object, such as a gun or a bomb, that is used to kill or injure people or to destroy property.",
          "usage": [
            "A group of rogue scientists have developed a new type of weapon, one that could potentially destroy the entire city.",
            "They threaten to use them unless the government meets their demands.",
          ],
          "pronounce": "/ˈwɛpən/",
          "example":
            "The police confiscated a number of weapons from the criminals.",
        },
        {
          "class": "Noun",
          "word": "Government",
          "meaning":
            "The group of people who have the power to make and enforce laws in a country or state.",
          "usage": [
            "The government is desperate to stop them, but their efforts have been met with fierce resistance.",
            "The government refuses, and a standoff ensues.",
          ],
          "pronounce": "/ˈgʌvənmənt/",
          "example": "The government has promised to reduce taxes.",
        },
        {
          "class": "Noun",
          "word": "Defenestration",
          "meaning":
            "The act of throwing someone or something out of a window.",
          "usage": [
            "The defenestration of Prague serves as a warning to the world.",
          ],
          "pronounce": "/dɪˌfɛnəˈstreɪʃən/",
          "example": "The defenestration of the two men was a tragic event.",
        },
        {
          "class": "Noun",
          "word": "Potential",
          "meaning":
            "The possibility that something will happen or be the case.",
          "usage": [
            "The potential for conflict is always present, and it can erupt at any moment.",
          ],
          "pronounce": "/pəˈtɛntʃəl/",
          "example":
            "There is the potential for a lot of damage if the dam breaks.",
        },
        {
          "class": "Verb",
          "word": "Erupt",
          "meaning": "To burst forth suddenly and violently.",
          "usage": [
            "The potential for conflict is always present, and it can erupt at any moment.",
          ],
          "pronounce": "/ɪˈrʌpt/",
          "example": "The volcano erupted and sent ash and lava into the air.",
        },
      ],
    },
    "keywords": [
      "2042",
      "Advanced technology",
      "Potential for conflict",
      "Rogue scientists",
      "Prague",
      "Destructive weapon",
      "Government",
      "Resistance",
      "Prague Castle",
      "Scientist's death",
      "Negotiation",
      "Defenestration of Prague",
    ],
  },
};
export default data;
