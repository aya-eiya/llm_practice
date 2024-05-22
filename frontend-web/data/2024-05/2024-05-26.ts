import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Panic of 1873",
    "details":
      "The Panic of 1873 was a financial crisis that began in the United States on September 18, 1873, and spread to Europe. The crisis was caused by a combination of factors, including the overexpansion of the railroad industry, the collapse of the Vienna Stock Exchange, and the failure of the banking firm Jay Cooke & Company. The Panic of 1873 led to a severe economic depression in the United States that lasted for several years.",
  },
  "date": "2024-05-26",
  "title": "The Panic",
  "body":
    "In the heart of the roaring twenties, as the economy boomed and life seemed full of promise, a shadow was lurking, waiting to strike. It was the Panic of 1929, a financial crisis that would change the course of history forever.\n\nAs the stock market soared to unprecedented heights, greed and speculation ran rampant. People poured their life savings into the market, dreaming of quick riches. But like a house of cards, the market came crashing down, leaving behind shattered dreams and financial ruin.\n\nIn the aftermath of the crash, the world was plunged into a decade-long depression. Unemployment skyrocketed, businesses closed their doors, and families were torn apart. The once-booming cities became ghost towns, filled with despair and poverty.\n\nAmidst the chaos and suffering, a sinister force emerged. Driven by desperation, people turned to crime and violence. The streets were haunted by fear as gangs roamed freely, preying on the weak and vulnerable.\n\nIn the darkness, a young woman named Mary found herself alone and adrift. Her family had lost everything in the crash, and she was left to fend for herself. As she wandered the desolate streets, she felt a growing sense of dread. Something was watching her, lurking in the shadows, waiting for the perfect moment to strike.",
  "word count": 211,
  "dialog": [
    {
      "Meg": "This novel was so captivating! I couldn't put it down!",
    },
    {
      "Lui":
        "Indeed, the author did a remarkable job of capturing the tumultuous era of the 1920s and the devastating impact of the Panic of 1929.",
    },
    {
      "Kerry":
        "I was particularly drawn to the character of Mary. Her struggle to survive in such desperate times was both heartbreaking and inspiring.",
    },
    {
      "Billy":
        "I found the historical context fascinating. It's incredible to think how a financial crisis could have such far-reaching consequences.",
    },
    {
      "Meg":
        "I agree, Billy. The novel really highlighted the fragility of our economic systems and the importance of financial literacy.",
    },
    {
      "Lui":
        "Furthermore, it's a sobering reminder of the consequences of greed and speculation.",
    },
    {
      "Kerry":
        "Yeah, it made me wonder how we can prevent history from repeating itself.",
    },
    {
      "Billy":
        "Maybe through education and regulation. By understanding the mistakes of the past, we can be better equipped to avoid them in the future.",
    },
  ],
  "quiz": [
    {
      "question": "What was the major cause of the Panic of 1929?",
      "options": [
        "A political crisis",
        "A financial crisis",
        "A natural disaster",
        "A military conflict",
        "A technological advancement",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the primary motivation for people investing heavily in the stock market during the 1920s?",
      "options": [
        "To secure their retirement savings",
        "To support local businesses",
        "To gain quick riches",
        "To protect against inflation",
        "To fulfill a patriotic duty",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was one of the long-term consequences of the Panic of 1929?",
      "options": [
        "A rapid increase in the standard of living",
        "A sustained period of economic prosperity",
        "A decade-long depression",
        "A major expansion of the welfare state",
        "A strengthening of international relations",
      ],
      "answer": 2,
    },
    {
      "question":
        "What is the significance of the character Mary in the novel?",
      "options": [
        "She represents the hope for a better future",
        "She embodies the resilience of the American people",
        "She highlights the struggles faced by individuals during the Depression",
        "She symbolizes the corruption that led to the Panic",
        "She represents the rise of organized crime",
      ],
      "answer": 2,
    },
    {
      "question":
        "According to the dialogue, what is one lesson that can be learned from the Panic of 1929?",
      "options": [
        "The stock market is always a safe investment",
        "Financial crises can have devastating consequences",
        "History has no impact on present events",
        "Government intervention is always harmful",
        "Personal wealth is more important than community well-being",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Economy",
    "flavor": "Horror",
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
          "explanation": "A sentence with a subject and a verb.",
          "usage": [
            "A shadow was lurking, waiting to strike.",
          ],
          "words": [
            {
              "S": [
                "A shadow",
              ],
            },
            {
              "V": [
                "was lurking",
                "waiting",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation": "A sentence with a subject, a verb, and a complement.",
          "usage": [
            "People poured their life savings into the market, dreaming of quick riches.",
          ],
          "words": [
            {
              "S": [
                "People",
              ],
            },
            {
              "V": [
                "poured",
                "dreaming",
              ],
            },
            {
              "C": [
                "of quick riches",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation": "A sentence with a subject, a verb, and an object.",
          "usage": [
            "It was the Panic of 1929, a financial crisis that would change the course of history forever.",
          ],
          "words": [
            {
              "S": [
                "It",
              ],
            },
            {
              "V": [
                "was",
              ],
            },
            {
              "O": [
                "the Panic of 1929",
                "a financial crisis",
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
          "usage": [],
          "words": [],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "leviathan",
          "meaning": "a large sea monster",
          "usage": [
            "In a dream, I saw a leviathan swimming through the depths of the ocean.",
            "The leviathan opened its mouth and began to speak.",
            "The leviathan's words filled me with fear, but I also felt a strange sense of awe.",
          ],
          "pronounce": "/lɪˈvaɪəθən/",
          "example":
            "The sailors were terrified of the leviathan that was attacking their ship.",
        },
        {
          "class": "Noun",
          "word": "scales",
          "meaning":
            "the hard, overlapping plates that cover the body of a fish or reptile",
          "usage": [
            "Its scales were like diamonds, and its eyes were like fire.",
          ],
          "pronounce": "/skeɪlz/",
          "example": "The fish's scales were shimmering in the sunlight.",
        },
        {
          "class": "Noun",
          "word": "eyes",
          "meaning": "the organ of sight",
          "usage": [
            "Its eyes were like fire.",
            "The leviathan looked at me with its fiery eyes.",
          ],
          "pronounce": "/aɪz/",
          "example": "The cat's eyes were glowing in the dark.",
        },
        {
          "class": "Noun",
          "word": "power",
          "meaning": "the ability to do or act",
          "usage": [
            "It was a creature of immense power and beauty.",
          ],
          "pronounce": "/paʊər/",
          "example": "The superhero had the power to fly.",
        },
        {
          "class": "Noun",
          "word": "beauty",
          "meaning": "the quality of being pleasing to the eye",
          "usage": [
            "It was a creature of immense power and beauty.",
          ],
          "pronounce": "/ˈbjuːti/",
          "example": "The painting was a masterpiece of beauty.",
        },
        {
          "class": "Noun",
          "word": "voice",
          "meaning": "the sound produced by a person or animal",
          "usage": [
            "Its voice was like the sound of thunder.",
          ],
          "pronounce": "/vɔɪs/",
          "example": "The singer had a beautiful voice.",
        },
        {
          "class": "Noun",
          "word": "master",
          "meaning": "a person who has control over others",
          "usage": [
            "I am the Leviathan, and I am the master of the sea.",
          ],
          "pronounce": "/ˈmæstər/",
          "example": "The master of the house was a kind and generous man.",
        },
        {
          "class": "Noun",
          "word": "king",
          "meaning": "a male ruler of a country",
          "usage": [
            "I am the king of all creatures.",
          ],
          "pronounce": "/kɪŋ/",
          "example": "The king was a wise and just ruler.",
        },
      ],
    },
    "keywords": [
      "leviathan",
      "ocean",
      "diamonds",
      "fire",
      "power",
      "beauty",
      "thunder",
      "master",
      "king",
      "prophet",
      "fear",
      "awe",
    ],
  },
};
export default data;
