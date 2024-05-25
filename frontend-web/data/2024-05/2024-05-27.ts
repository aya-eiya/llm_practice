import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Beatles release Sgt. Pepper's Lonely Hearts Club Band",
    "details":
      "Sgt. Pepper's Lonely Hearts Club Band is the eighth studio album by the English rock band The Beatles, released on June 1, 1967 in the United Kingdom and on June 26, 1967 in the United States. It is often referred to as one of the most influential albums in the history of popular music.",
  },
  "date": "2024-05-27",
  "title": "Love in Bloom",
  "body":
    "As I walked into the garden, I couldn't help but feel a sense of nostalgia wash over me. The scent of blooming flowers filled the air, transporting me back to the summer I spent with my love, Alex.It was as if time stood still when we were together. We'd spend hours talking about our dreams, our fears, and our passions. And now, as I gazed upon the vibrant colors surrounding me, I couldn't help but think of him.The memories came flooding back - the way he'd hold my hand, the way his eyes would sparkle in the sunlight, and the way he'd make me laugh with his silly jokes. It was a love that was pure and true, one that I had never experienced before or since.As I stood there, lost in thought, I felt a gentle touch on my shoulder. I turned to see Alex standing behind me, a smile spreading across his face. 'I've been thinking about you too,' he said, his voice low and husky.In that moment, it was as if the entire world had come to a standstill. All that mattered was us, and the love we shared. And as we stood there, surrounded by the beauty of nature, I knew that our love would always be in bloom.",
  "word count": 213,
  "dialog": [
    {
      "Billy": "I loved the garden setting in this novel. It was so peaceful.",
    },
    {
      "Meg":
        "Yeah, I agree. The author did an amazing job of describing the flowers and trees.",
    },
    {
      "Kerry":
        "I didn't even notice that at first. But after reading it again, I noticed how much detail there was.",
    },
    {
      "Lui":
        "For me, the garden represented a sense of freedom and escape from daily life.",
    },
    {
      "Billy":
        "That's so true! The characters seemed to find solace in their own little world.",
    },
    {
      "Meg":
        "And the way the author used descriptive language made it feel like I was right there with them.",
    },
    {
      "Kerry":
        "I loved how the garden was a symbol of growth and renewal for the characters.",
    },
    {
      "Lui":
        "Exactly! It was like they were pruning their own lives, getting rid of old patterns and habits.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the author's purpose in describing the garden setting?",
      "options": [
        "To set a romantic mood",
        "To describe a peaceful atmosphere",
        "To symbolize growth and renewal",
        "To show the characters' daily life",
        "To introduce the main character",
      ],
      "answer": 2,
    },
    {
      "question": "What did the garden represent for Lui?",
      "options": [
        "A place to escape from daily life",
        "A symbol of love and relationships",
        "A reminder of past experiences",
        "A source of inspiration",
        "A means of relaxation",
      ],
      "answer": 0,
    },
    {
      "question": "How did the author use descriptive language in the text?",
      "options": [
        "To summarize the story",
        "To create vivid images",
        "To introduce new characters",
        "To provide background information",
        "To describe a peaceful atmosphere",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the significance of the garden to the main character?",
      "options": [
        "It reminded them of their past experiences",
        "It represented freedom and escape from daily life",
        "It symbolized growth and renewal",
        "It showed a peaceful atmosphere",
        "It introduced new characters",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the author trying to convey through the characters' experiences in the garden?",
      "options": [
        "The importance of love and relationships",
        "The value of freedom and escape from daily life",
        "The significance of personal growth and renewal",
        "The impact of past experiences on current lives",
        "The power of nature",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Romance",
    "models": {
      "main": "llama3",
      "novel": "llama3",
    },
    "level": "Level_2",
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation": "Simple sentence with a subject and verb.",
          "usage": [
            "As I walked into the garden, I couldn't help but feel a sense of nostalgia wash over me.",
          ],
          "words": [
            {
              "S": [
                "As I",
                "I",
              ],
            },
            {
              "V": [
                "walked",
                "help",
                "feel",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation": "Sentence with a subject, verb, and object.",
          "usage": [
            "The scent of blooming flowers filled the air, transporting me back to the summer I spent with my love, Alex.",
          ],
          "words": [
            {
              "S": [
                "The",
                "I",
              ],
            },
            {
              "V": [
                "filled",
                "transporting",
              ],
            },
            {
              "O": [
                "the air",
                "Alex",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation": "Sentence with a subject, verb, and complement.",
          "usage": [
            "It was as if time stood still when we were together.",
          ],
          "words": [
            {
              "S": [
                "It",
                "we",
              ],
            },
            {
              "V": [
                "was",
                "stood",
              ],
            },
            {
              "C": [
                "as if time stood still",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "Sentence with a subject, verb, object, and complement.",
          "usage": [
            "The memories came flooding back - the way he'd hold my hand, the way his eyes would sparkle in the sunlight, and the way he'd make me laugh with his silly jokes.",
          ],
          "words": [
            {
              "S": [
                "The",
                "I",
              ],
            },
            {
              "V": [
                "came",
                "hold",
                "sparkle",
                "make",
              ],
            },
            {
              "O": [
                "memories",
                "my hand",
                "his eyes",
                "me",
              ],
            },
            {
              "C": [
                "- the way he'd hold my hand",
                "- the way his eyes would sparkle in the sunlight",
                "- and the way he'd make me laugh with his silly jokes",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "garden",
          "meaning":
            "a piece of land, often with a variety of plants and flowers",
          "usage": [
            "As I walked into the garden, I couldn't help but feel...",
          ],
          "pronounce": "/ˈɡɑrdn/",
          "example": "The beautiful garden was my favorite place to relax.",
        },
        {
          "class": "Adjective",
          "word": "vibrant",
          "meaning": "full of life, energy, and color",
          "usage": [
            "The vibrant colors surrounding me...",
          ],
          "pronounce": "/ˈvaɪbrənt/",
          "example": "The vibrant music filled the entire room.",
        },
        {
          "class": "Adverb",
          "word": "completely",
          "meaning": "to a very great extent or degree",
          "usage": [
            "It was as if time stood still when we were together, completely...",
          ],
          "pronounce": "/kəmˈpɪtli/",
          "example": "I have always loved reading books completely by myself.",
        },
        {
          "class": "Pronoun",
          "word": "he",
          "meaning": "a person or thing previously mentioned",
          "usage": [
            "The way he'd hold my hand...",
            "He'd make me laugh with his silly jokes.",
          ],
          "pronounce": "/hiː/",
          "example": "He is the best friend a person could ask for.",
        },
        {
          "class": "Noun",
          "word": "love",
          "meaning": "a strong feeling of affection or attachment",
          "usage": [
            "It was a love that was pure and true...",
            "All that mattered was us, and the love we shared.",
          ],
          "pronounce": "/ˈlʌv/",
          "example": "The love I have for my family is beyond words.",
        },
        {
          "class": "Verb",
          "word": "think",
          "meaning": "to consider or ponder something",
          "usage": [
            "As I stood there, lost in thought, I felt a gentle touch on my shoulder. I turned to see Alex standing behind me, thinking about you too.",
          ],
          "pronounce": "/θɪŋk/",
          "example":
            "I have been thinking about taking a vacation for some time now.",
        },
        {
          "class": "Preposition",
          "word": "of",
          "meaning": "belonging to or connected with something",
          "usage": [
            "the way he'd hold my hand of...",
            "the love we shared of...",
          ],
          "pronounce": "/ɒv/",
          "example": "The book is about a story of adventure.",
        },
        {
          "class": "Conjunction",
          "word": "and",
          "meaning": "used to connect two words, phrases, or clauses",
          "usage": [
            "And now, as I gazed upon the vibrant colors surrounding me...",
            "And all that mattered was us, and the love we shared.",
          ],
          "pronounce": "/ənd/",
          "example": "I want to go to the store and buy some milk.",
        },
      ],
    },
    "keywords": [
      "nostalgia",
      "love",
      "memories",
      "passion",
      "dreams",
      "fears",
      "nature",
      "beauty",
      "romance",
      "intimacy",
      "togetherness",
      "uniqueness",
      "timelessness",
    ],
  },
};
export default data;
