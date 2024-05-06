import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first Victoria's Secret Fashion Show",
    "details":
      "On May 15th, 1995, the first Victoria's Secret Fashion Show took place in New York City, marking a significant moment in fashion history as it launched the brand into the global spotlight and established itself as a premier platform for showcasing lingerie and swimwear.",
  },
  "date": "2024-05-15",
  "title": "Neon Nights: The Victoria's Secret Fashion Show in Cyberpunk",
  "body":
    "The year was 2195, and the Victoria's Secret Fashion Show had become more than just a runway event. It was a spectacle of neon lights, holographic projections, and futuristic fashion. The models strutted down the runway, their outfits glowing with synthetic colors, as they showcased the latest in lingerie and swimwear. The audience was a blur of colors, their eyes drawn to the dazzling display on the runway. Among them, a group of hackers watched intently, their fingers dancing over their keyboards. They were trying to crack the event's security, searching for any weakness they could exploit. But as the lights flared and the music reached its crescendo, the models turned in unison, revealing high-tech armor underneath their lingerie. The audience gasped, their eyes wide with surprise. The hackers exchanged glances, realizing that they had been outsmarted once again by the Victoria's Secret Fashion Show. The event was not just a fashion show; it was a testament to the power of innovation and the allure of the future.",
  "word count": 168,
  "dialog": [
    {
      "Billy":
        "Whoa, did you see that?! The models were wearing actual armor underneath their lingerie! I love how Victoria's Secret always pushes the boundaries.",
    },
    {
      "Kerry":
        "I know, right? It's like they're saying, 'Hey, we can do more than just show off our bodies!' I'm loving this futuristic vibe.",
    },
    {
      "Meg":
        "I was so distracted by the holographic projections! Did you see how lifelike they were? And what's with all the neon lights?!",
    },
    {
      "Lui":
        "Yes, the Victoria's Secret Fashion Show has always been a spectacle. But what struck me was the emphasis on innovation and technology. It's a great reminder that fashion can be a powerful force in shaping our culture.",
    },
    {
      "Billy":
        "Exactly! And have you seen their latest campaign? They're partnering with space agencies to create sustainable fashion solutions for space exploration!",
    },
    {
      "Kerry":
        "That's so cool! I had no idea they were working on something like that. It just goes to show how fashion can be a catalyst for positive change.",
    },
    {
      "Meg":
        "I'm still trying to wrap my head around the holographic projections, though. Did anyone else notice how realistic they looked?",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the year of the Victoria's Secret Fashion Show in Cyberpunk?",
      "options": [
        "2194",
        "2195",
        "2196",
        "2197",
        "2200",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did the models reveal underneath their lingerie during the fashion show?",
      "options": [
        "high-tech jewelry",
        "actual armor",
        "holographic projections",
        "futuristic shoes",
        "neon lights",
      ],
      "answer": 1,
    },
    {
      "question":
        "Why was Billy impressed with the Victoria's Secret Fashion Show?",
      "options": [
        "because of its futuristic vibe",
        "because of the holographic projections",
        "because of the emphasis on innovation and technology",
        "because of the high-tech armor worn by the models",
        "because of the neon lights",
      ],
      "answer": 2,
    },
    {
      "question":
        "What is Victoria's Secret planning to do in space exploration?",
      "options": [
        "create sustainable fashion solutions for space agencies",
        "partner with space agencies to create new fashion trends",
        "launch a space-themed clothing line",
        "send models to space",
        "nothing related to space",
      ],
      "answer": 0,
    },
    {
      "question": "What did Meg find distracting during the fashion show?",
      "options": [
        "the high-tech armor worn by the models",
        "the holographic projections",
        "the neon lights",
        "the futuristic shoes",
        "the lingerie",
      ],
      "answer": 1,
    },
  ],
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation":
            "The basic sentence pattern, where S is the subject and V is the verb.",
          "usage": [
            "The year was 2195, and the Victoria's Secret Fashion Show had become more than just a runway event.",
          ],
          "words": [
            {
              "S": [
                "The year",
                "was",
                "2195",
                "and",
                "the",
                "Victoria's",
                "Secret",
                "Fashion",
                "Show",
              ],
            },
            {
              "V": [
                "had",
                "become",
                "more",
                "than",
                "just",
                "a",
                "runway",
                "event",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation":
            "A sentence pattern with a complement, where S is the subject and V is the verb.",
          "usage": [
            "It was a spectacle of neon lights, holographic projections, and futuristic fashion.",
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
                "a",
                "spectacle",
              ],
            },
            {
              "C": [
                "of",
                "neon",
                "lights,",
                "holographic",
                "projections,",
                "and",
                "futuristic",
                "fashion",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation":
            "A sentence pattern with an object, where S is the subject and V is the verb.",
          "usage": [
            "The models strutted down the runway, their outfits glowing with synthetic colors, as they showcased the latest in lingerie and swimwear.",
          ],
          "words": [
            {
              "S": [
                "The",
                "models",
              ],
            },
            {
              "V": [
                "strutted",
                "down",
                "the",
                "runway,",
                "their",
                "outfits",
                "glowing",
                "with",
                "synthetic",
                "colors,",
                "as",
                "they",
                "showcased",
                "the",
                "latest",
                "in",
                "lingerie",
                "and",
                "swimwear",
              ],
            },
            {
              "O": [
                "the",
                "runway,",
                "their",
                "outfits,",
                "glowing",
                "with",
                "synthetic",
                "colors,",
                "as",
                "they",
                "showcased",
                "the",
                "latest",
                "in",
                "lingerie",
                "and",
                "swimwear",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation":
            "A sentence pattern with two objects, where S is the subject and V is the verb.",
          "usage": [
            "The audience was a blur of colors, their eyes drawn to the dazzling display on the runway.",
          ],
          "words": [
            {
              "S": [
                "The",
                "audience",
              ],
            },
            {
              "V": [
                "was",
                "a",
                "blur",
                "of",
                "colors",
              ],
            },
            {
              "O": [
                "their",
                "eyes",
                "drawn",
                "to",
                "the",
                "dazzling",
                "display",
                "on",
                "the",
                "runway",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "A sentence pattern with a complement and an object, where S is the subject and V is the verb.",
          "usage": [
            "The event was not just a fashion show; it was a testament to the power of innovation and the allure of the future.",
          ],
          "words": [
            {
              "S": [
                "The",
                "event",
              ],
            },
            {
              "V": [
                "was",
                "not",
                "just",
                "a",
                "fashion",
                "show;",
                "it",
                "was",
                "a",
                "testament",
              ],
            },
            {
              "O": [
                "the",
                "power",
                "of",
                "innovation",
                "and",
                "the",
                "allure",
                "of",
                "the",
                "future",
              ],
            },
            {
              "C": [
                "not",
                "just",
                "a",
                "fashion",
                "show;",
                "it",
                "was",
                "a",
                "testament",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "Year",
          "meaning": "a period of 365 days, or 366 days in a leap year.",
          "usage": [
            "The year was 2195...",
            "In the year of 2020...",
          ],
          "pronounce": "/jɪr/",
          "example": "The new employee started in the year 2018.",
        },
        {
          "class": "Adjective",
          "word": "Neon",
          "meaning": "giving off light as if glowing with electricity.",
          "usage": [
            "The neon lights...",
            "The neon sign...",
          ],
          "pronounce": "/ˈniːɒn/",
          "example": "The neon color of the car was quite eye-catching.",
        },
        {
          "class": "Noun",
          "word": "Hackers",
          "meaning":
            "people who secretly get access to and look at or change someone's computer files.",
          "usage": [
            "Among them, a group of hackers...",
            "The hackers exchanged glances...",
          ],
          "pronounce": "/ˈhækərz/",
          "example": "The company hired experts to catch the hackers.",
        },
        {
          "class": "Verb",
          "word": "Strutted",
          "meaning": "to walk proudly and confidently.",
          "usage": [
            "The models strutted down the runway...",
            "The fashion model struts...",
          ],
          "pronounce": "/ˈstrʌtɪd/",
          "example": "She strutted into the room with confidence.",
        },
        {
          "class": "Noun",
          "word": "Armor",
          "meaning":
            "special clothes or equipment to protect someone from harm.",
          "usage": [
            "The models turned in unison, revealing high-tech armor...",
          ],
          "pronounce": "/ˈɑrmər/",
          "example": "The soldier wore a suit of armor.",
        },
        {
          "class": "Adverb",
          "word": "Unanimously",
          "meaning": "in complete agreement.",
          "usage": [
            "The models turned in unison...",
          ],
          "pronounce": "/ˌjuːnɪˈmɪsli/",
          "example": "The team unanimously agreed on the decision.",
        },
        {
          "class": "Verb",
          "word": "Crack",
          "meaning": "to find and get past a secret code or security system.",
          "usage": [
            "They were trying to crack the event's security...",
          ],
          "pronounce": "/kræk/",
          "example": "The team worked hard to crack the puzzle.",
        },
        {
          "class": "Noun",
          "word": "Innovation",
          "meaning":
            "the creation of new and improved products, processes, or systems.",
          "usage": [
            "The event was not just a fashion show; it was a testament to the power of innovation...",
          ],
          "pronounce": "/ɪnˌoʊveɪˈzeɪʃn/",
          "example": "The company's innovation led to a new breakthrough.",
        },
      ],
    },
    "keywords": [
      "neon",
      "holographic",
      "futuristic",
      "synthetic",
      "runway",
      "lingerie",
      "swimwear",
      "hackers",
      "security",
      "armor",
      "innovation",
      "future",
    ],
  },
};
export default data;
