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
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation": "Subject performs an action without a direct object.",
          "usage": [
            "In the depths of an opulent Art Deco mansion, shadows danced ominously.",
          ],
          "words": [
            {
              "S": [
                "Shadows",
              ],
            },
            {
              "V": [
                "danced",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation":
            "Subject performs an action with a complement that completes the meaning of the verb.",
          "usage": [
            "Sharp angles and gleaming chrome masked a sinister secret.",
          ],
          "words": [
            {
              "S": [
                "Sharp angles",
                "gleaming chrome",
              ],
            },
            {
              "V": [
                "masked",
              ],
            },
            {
              "C": [
                "a sinister secret",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation":
            "Subject performs an action with a direct object that receives the action.",
          "usage": [
            "As the night crept in, the eerie glow of geometric lamps cast haunting shadows, revealing a grotesque figure lurking within.",
          ],
          "words": [
            {
              "S": [
                "The eerie glow of geometric lamps",
              ],
            },
            {
              "V": [
                "cast",
              ],
            },
            {
              "O": [
                "haunting shadows",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation": "Subject performs an action with two direct objects.",
          "usage": [],
          "words": [],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "Subject performs an action with a direct object and a complement that completes the meaning of the verb.",
          "usage": [],
          "words": [],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "Depths",
          "meaning": "The lowest or most hidden part of something.",
          "usage": [
            "In the depths of an opulent Art Deco mansion, shadows danced ominously.",
            "The Deco Reaper, they whispered, a harbinger of terror inspired by the heartless beauty of the era.",
          ],
          "pronounce": "/dɛpθs/",
          "example":
            "The diver explored the depths of the ocean, searching for sunken treasure.",
        },
        {
          "class": "Adjective",
          "word": "Ominously",
          "meaning": "In a way that suggests something bad is going to happen.",
          "usage": [
            "In the depths of an opulent Art Deco mansion, shadows danced ominously.",
          ],
          "pronounce": "/ˈɑːmɪnəsli/",
          "example":
            "The ominous clouds gathered overhead, threatening to bring a storm.",
        },
        {
          "class": "Noun",
          "word": "Mansion",
          "meaning": "A large, impressive house.",
          "usage": [
            "In the depths of an opulent Art Deco mansion, shadows danced ominously.",
            "The mansion's grand hall, a lavish party raged on, oblivious to the horror unfolding within.",
          ],
          "pronounce": "/ˈmænʃən/",
          "example":
            "The wealthy family lived in a grand mansion on the outskirts of town.",
        },
        {
          "class": "Noun",
          "word": "Reaper",
          "meaning": "A person or thing that causes death.",
          "usage": [
            "The Deco Reaper, they whispered, a harbinger of terror inspired by the heartless beauty of the era.",
          ],
          "pronounce": "/ˈriːpər/",
          "example": "The grim reaper came to take the dying man's soul.",
        },
        {
          "class": "Noun",
          "word": "Horror",
          "meaning": "A feeling of intense fear, shock, or disgust.",
          "usage": [
            "As the clock struck midnight, the Deco Reaper emerged, its cold embrace claiming its victims one by one.",
            "But as the clock struck midnight, the Deco Reaper emerged, its cold embrace claiming its victims one by one.",
          ],
          "pronounce": "/ˈhɒrər/",
          "example": "The horror of the car crash left her traumatized.",
        },
        {
          "class": "Adjective",
          "word": "Macabre",
          "meaning": "Gruesome or horrifying.",
          "usage": [
            "Amidst the splendor and decadence, the mansion became a stage for a macabre dance of death, a chilling testament to the darkness that lurked beneath the alluring surface of Art Deco.",
          ],
          "pronounce": "/məˈkɑːbrə/",
          "example":
            "The macabre tales of Edgar Allan Poe are known for their dark and unsettling themes.",
        },
        {
          "class": "Adjective",
          "word": "Chilling",
          "meaning": "Causing a feeling of intense cold or fear.",
          "usage": [
            "Its every step echoed with the chilling chime of a crystal chandelier, its presence sending shivers down the spines of all who dared to approach.",
          ],
          "pronounce": "/ˈtʃɪlɪŋ/",
          "example":
            "The chilling wind whipped through the trees, making the leaves shake.",
        },
        {
          "class": "Noun",
          "word": "Surface",
          "meaning": "The outer boundary of something.",
          "usage": [
            "Amidst the splendor and decadence, the mansion became a stage for a macabre dance of death, a chilling testament to the darkness that lurked beneath the alluring surface of Art Deco.",
          ],
          "pronounce": "/ˈsɜːrfəs/",
          "example": "The surface of the water was calm and still.",
        },
      ],
    },
    "keywords": [
      "Art Deco",
      "Sinister",
      "Grotesque",
      "Geometric",
      "Porcelain",
      "Deco Reaper",
      "Chilling",
      "Crystal chandelier",
      "Lavish party",
      "Midnight",
      "Macabre",
      "Darkness",
    ],
  },
};
export default data;
