import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Treaty of Versailles",
    "details":
      "The Treaty of Versailles is signed, officially ending World War I and imposing harsh penalties on Germany",
  },
  "date": "2024-05-16",
  "title": "Echoes of Versailles",
  "body":
    "In a parallel universe, the Treaty of Versaille was not signed and World War I raged on for years. The world had changed dramatically, with advanced technology and new forms of energy dominating the landscape. However, amidst this new era, memories of the past lingered.    As a group of scientists and historians delved deeper into the archives of history, they discovered an alternative timeline where the Treaty of Versaille had been signed and World War I had ended. They were fascinated by the potential consequences of this event and set out to explore it further.    Using advanced time-travel technology, they journeyed back in time to the signing of the Treaty of Versailles. Upon arrival, they were greeted by a world vastly different from their own. The harsh penalties imposed on Germany had left deep scars on the nation and its people.    As they explored this new timeline, they began to unravel the complex web of consequences that stemmed from the signing of the Treaty of Versailles. They discovered a world where technology had advanced beyond their wildest dreams, but at what cost? And as they returned to their own time, they were left to wonder if the events of the past could ever truly be changed.",
  "word count": 206,
  "dialog": [
    {
      "Billy":
        "I loved how the novel explored the consequences of the Treaty of Versailles. It really made me think about how our actions can have far-reaching effects.",
    },
    {
      "Meg":
        "Oh, I know what you mean, Billy! And I was blown away by the technology in this world. It's like a dream come true... but at what cost, right?",
    },
    {
      "Kerry":
        "Yeah, it's all about balance, folks. We can't just keep advancing without considering the impact on people and the environment.",
    },
    {
      "Lui":
        "I agree with you both. The novel raises important questions about responsibility and the human condition. As educators, we need to consider these themes in our teaching.",
    },
    {
      "Billy":
        "Exactly! And I think that's what makes this novel so powerful - it challenges us to think critically about the past and how it shapes our present.",
    },
    {
      "Meg":
        "And it made me realize how important it is to appreciate the small things in life. In a world with advanced technology, we can get lost in the details...",
    },
    {
      "Kerry":
        "But what if that's exactly what's happening? What if our obsession with tech is distracting us from the bigger picture?",
    },
    {
      "Lui":
        "Well, Kerry, I think that's a valid concern. As educators, we need to ensure that our students are aware of these issues and can make informed decisions.",
    },
    {
      "Billy":
        "I'm glad the novel didn't sugarcoat anything. It was refreshing to see characters grappling with real-world problems.",
    },
    {
      "Meg":
        "Absolutely! And I loved how the novel wove together history, science, and imagination. It was a true adventure!",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the main event that did not happen in the parallel universe described in the novel?",
      "options": [
        "The Treaty of Versailles was signed",
        "World War I ended",
        "A new form of energy emerged",
        "The scientists traveled back in time",
        "The world remained unchanged",
      ],
      "answer": 0,
    },
    {
      "question":
        "According to the dialogue, what did Billy think about the novel?",
      "options": [
        "It was too complex",
        "It didn't explore consequences well",
        "It made him think critically",
        "It was boring",
        "It had too much technology",
      ],
      "answer": 2,
    },
    {
      "question": "What concern did Kerry raise in the dialogue?",
      "options": [
        "The novel didn't have enough science",
        "The characters were not relatable",
        "Our obsession with tech is distracting us from the bigger picture",
        "The world was too perfect",
        "There wasn't enough history",
      ],
      "answer": 2,
    },
    {
      "question": "What did Meg think about the technology in the novel?",
      "options": [
        "It was outdated",
        "It was a dream come true but at what cost",
        "It was irrelevant to the story",
        "It was too complex",
        "It wasn't described",
      ],
      "answer": 1,
    },
    {
      "question": "What did Lui think about the novel's themes?",
      "options": [
        "They were too simplistic",
        "They didn't relate to education",
        "They raised important questions about responsibility and the human condition",
        "They were too complex for students",
        "They weren't relevant",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Politics",
    "flavor": "Science",
    "models": { "main": "llama", "novel": "llava" },
    "level": "Level_5",
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation": "The subject (S) performs an action (V).",
          "usage": [
            "In a parallel universe, the Treaty of Versaille was not signed and World War I raged on for years.",
          ],
          "words": [
            {
              "S": [
                "parallel universe",
                "Treaty of Versaille",
              ],
            },
            {
              "V": [
                "was not signed",
                "raged on for years",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation":
            "The subject (S) performs an action (V) with a complement (C).",
          "usage": [
            "Using advanced time-travel technology, they journeyed back in time to the signing of the Treaty of Versailles.",
          ],
          "words": [
            {
              "S": [
                "they",
                "Treaty of Versailles",
              ],
            },
            {
              "V": [
                "journeyed back in time",
              ],
            },
            {
              "C": [
                "to the signing",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation":
            "The subject (S) performs an action (V) with an object (O).",
          "usage": [
            "They discovered a world where technology had advanced beyond their wildest dreams, but at what cost?",
          ],
          "words": [
            {
              "S": [
                "they",
              ],
            },
            {
              "V": [
                "discovered",
              ],
            },
            {
              "O": [
                "a world",
                "technology",
                "their wildest dreams",
                "at what cost",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation":
            "The subject (S) performs an action (V) with two objects (O).",
          "usage": [
            "I loved how the novel explored the consequences of the Treaty of Versailles.",
          ],
          "words": [
            {
              "S": [
                "I",
              ],
            },
            {
              "V": [
                "loved",
              ],
            },
            {
              "O": [
                "how",
                "the novel",
                "the consequences of the Treaty of Versailles",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "The subject (S) performs an action (V) with an object (O) and a complement (C).",
          "usage": [
            "And I think that's what makes this novel so powerful - it challenges us to think critically about the past and how it shapes our present.",
          ],
          "words": [
            {
              "S": [
                "I",
              ],
            },
            {
              "V": [
                "think",
              ],
            },
            {
              "O": [
                "what",
                "this novel",
              ],
              "C": [
                "it challenges us to think critically about the past and how it shapes our present",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "universe",
          "meaning":
            "a self-contained system or set of interconnected things, including galaxies and all their contents",
          "usage": [
            "In a parallel universe, the Treaty of Versaille was not signed",
          ],
          "pronounce": "/ˈʌnɪvərs/",
          "example":
            "The concept of multiverse has led to the discovery of many new universes.",
        },
        {
          "class": "Noun",
          "word": "technology",
          "meaning":
            "the application of scientific knowledge for practical purposes, especially in industry",
          "usage": [
            "Using advanced time-travel technology",
            "technology had advanced beyond their wildest dreams",
          ],
          "pronounce": "/tɛkˈnɒlədʒi/ ",
          "example":
            "The new smartphone features advanced technology to enhance user experience.",
        },
        {
          "class": "Adjective",
          "word": "advanced",
          "meaning": "more developed or sophisticated than usual",
          "usage": [
            "advanced technology",
            "advanced beyond their wildest dreams",
          ],
          "pronounce": "/ədˈvɑnsd/",
          "example":
            "The advanced materials used in the spacecraft enabled it to withstand extreme temperatures.",
        },
        {
          "class": "Adverb",
          "word": "further",
          "meaning": "to a greater extent or degree",
          "usage": [
            "set out to explore it further",
          ],
          "pronounce": "/ˈfʌðər/",
          "example": "We will discuss this topic further in the next meeting.",
        },
        {
          "class": "Noun",
          "word": "treaty",
          "meaning":
            "an agreement between nations, states, or organizations to settle certain matters",
          "usage": [
            "Treaty of Versaille",
            "the signing of the Treaty of Versailles",
          ],
          "pronounce": "/ˈtriːti/ ",
          "example":
            "The treaty has led to a significant reduction in international tensions.",
        },
        {
          "class": "Noun",
          "word": "war",
          "meaning":
            "a state of armed conflict between different nations, states, or organizations",
          "usage": [
            "World War I",
            "raged on for years",
          ],
          "pronounce": "/wɔː/ ",
          "example": "The war has resulted in significant humanitarian crises.",
        },
        {
          "class": "Adjective",
          "word": "parallel",
          "meaning": "similar but separate",
          "usage": [
            "a parallel universe",
            "a world vastly different from their own",
          ],
          "pronounce": "/ˈpærəlɛl/",
          "example": "The two companies have parallel business strategies.",
        },
        {
          "class": "Adverb",
          "word": "vastly",
          "meaning": "to a very great extent or degree",
          "usage": [
            "a world vastly different from their own",
          ],
          "pronounce": "/ˈvæstli/",
          "example":
            "The new policy has vastly improved the company's financial performance.",
        },
      ],
    },
    "keywords": [
      "parallel",
      "universe",
      "technology",
      "energy",
      "memories",
      "past",
      "scientists",
      "historians",
      "archive",
      "timeline",
      "consequences",
      "Treaty",
      "Versailles",
      "Germany",
      "scars",
      "nation",
      "people",
      "cost",
      "change",
    ],
  },
};
export default data;
