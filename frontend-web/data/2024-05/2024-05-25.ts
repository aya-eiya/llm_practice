import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Knoll Associates Founded",
    "details":
      "Knoll Associates was founded on May 25, 1938 by Hans Knoll and Florence Knoll. The company is known for its modern furniture designs, which have been used in homes, offices, and public spaces around the world.",
  },
  "date": "2024-05-25",
  "title": "The Knoll Family Tree",
  "body":
    "In a small town nestled amidst rolling hills, a peculiar tree stood tall in the town square. Its leaves were a vibrant shade of emerald, and its branches reached towards the heavens like grasping arms. The townsfolk whispered tales of the tree's magical properties, saying that it could grant wishes and fulfill dreams. One ordinary afternoon, a young girl named Lily approached the tree. With trembling hands, she uttered a wish: for a family to fill her lonely heart. To her astonishment, as the words left her lips, a golden acorn fell from the tree's branches, landing softly in her palm. Lily planted the acorn in her backyard, and as days turned into weeks, a family of minuscule beings emerged from the soil. The father was a skilled carpenter, the mother a talented weaver, and the children were as playful as kittens. From that day forward, Lily's life was filled with love, laughter, and the knowledge that the magical Knoll Family Tree had made her dream come true.",
  "word count": 166,
  "dialog": [
    {
      "Meg":
        "I loved the magical tree and the little family. It was like a fairy tale come true!",
    },
    {
      "Lui":
        "The story is well-written, with a clear and engaging plot. It's a great example of how imagination can bring happiness into our lives.",
    },
    {
      "Billy":
        "I wonder if there are any real trees that have magical powers. It would be amazing to find one!",
    },
    {
      "Kerry":
        "I think the story is a metaphor. It shows us that even when we feel lonely, there's always hope that we'll find happiness and love.",
    },
    {
      "Meg":
        "I agree. The story is about more than just a magical tree. It's about the power of hope and the importance of friendship.",
    },
    {
      "Lui":
        "It's important to remember that no matter how difficult life may seem, there is always hope. This story is a reminder of that.",
    },
    {
      "Billy":
        "I think I'll write a story about a magical tree in my backyard. It will grant wishes and make all my dreams come true!",
    },
    {
      "Kerry": "That sounds like a great idea, Billy. I can't wait to read it!",
    },
  ],
  "quiz": [
    {
      "question": "What was the color of the tree's leaves?",
      "options": [
        "Emerald",
        "Jade",
        "Green",
        "Turquoise",
        "Teal",
      ],
      "answer": 0,
    },
    {
      "question": "What did Lily wish for from the tree?",
      "options": [
        "A new toy",
        "A family",
        "A new dress",
        "A pet",
        "A million dollars",
      ],
      "answer": 1,
    },
    {
      "question": "What emerged from the acorn that Lily planted?",
      "options": [
        "A family of small beings",
        "A giant pumpkin",
        "A talking frog",
        "A pot of gold",
        "A beautiful flower",
      ],
      "answer": 0,
    },
    {
      "question": "According to Kerry, what is the story a metaphor for?",
      "options": [
        "The power of hope and friendship",
        "The importance of hard work",
        "The dangers of magic",
        "The value of family",
        "The beauty of nature",
      ],
      "answer": 0,
    },
    {
      "question": "What does Billy plan to do after reading the story?",
      "options": [
        "Write a story about a magical tree",
        "Visit the tree in the town square",
        "Make a wish to the tree",
        "Plant an acorn in his backyard",
        "Tell the story to his friends",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Design",
    "flavor": "Magical Realism",
    "models": {
      "main": "gemini",
      "novel": "gemini",
    },
    "level": "Level_2",
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation": "Subject followed by a verb.",
          "usage": [
            "In a small town nestled amidst rolling hills, a peculiar tree stood tall in the town square.",
            "Its leaves were a vibrant shade of emerald, and its branches reached towards the heavens like grasping arms.",
            "With trembling hands, she uttered a wish: for a family to fill her lonely heart.",
            "The townsfolk whispered tales of the tree's magical properties, saying that it could grant wishes and fulfill dreams.",
          ],
          "words": [
            {
              "S": [
                "In a small town",
                "Its leaves",
                "Lily",
                "The townsfolk",
              ],
            },
            {
              "V": [
                "stood",
                "were",
                "uttered",
                "whispered",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation": "Subject followed by a verb and a complement.",
          "usage": [
            "Lily planted the acorn in her backyard, and as days turned into weeks, a family of minuscule beings emerged from the soil.",
            "To her astonishment, as the words left her lips, a golden acorn fell from the tree's branches, landing softly in her palm.",
          ],
          "words": [
            {
              "S": [
                "Lily",
                "A golden acorn",
              ],
            },
            {
              "V": [
                "planted",
                "fell",
              ],
            },
            {
              "C": [
                "in her backyard",
                "to her astonishment",
                "from the tree's branches",
                "landing softly in her palm",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation": "Subject followed by a verb and an object.",
          "usage": [
            "One ordinary afternoon, a young girl named Lily approached the tree.",
          ],
          "words": [
            {
              "S": [
                "A young girl named Lily",
              ],
            },
            {
              "V": [
                "approached",
              ],
            },
            {
              "O": [
                "the tree",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation": "Subject followed by a verb and two objects.",
          "usage": [
            "From that day forward, Lily's life was filled with love, laughter, and the knowledge that the magical Knoll Family Tree had made her dream come true.",
          ],
          "words": [
            {
              "S": [
                "Lily's life",
              ],
            },
            {
              "V": [
                "was filled",
              ],
            },
            {
              "O": [
                "with love",
                "laughter",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "Subject followed by a verb, an object, and a complement.",
          "usage": [],
          "words": [],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "tree",
          "meaning":
            "a woody perennial plant, typically having a single stem or trunk growing to a considerable height and bearing lateral branches at some distance from the ground.",
          "usage": [
            "In a small town nestled amidst rolling hills, a peculiar tree stood tall in the town square.",
            "One ordinary afternoon, a young girl named Lily approached the tree.",
          ],
          "pronounce": "/triː/",
          "example": "The oak tree in our backyard is over 100 years old.",
        },
        {
          "class": "Adjective",
          "word": "vibrant",
          "meaning": "full of life and energy; lively.",
          "usage": [
            "Its leaves were a vibrant shade of emerald",
          ],
          "pronounce": "/ˈvaɪbrənt/",
          "example": "The vibrant colors of the sunset filled the sky.",
        },
        {
          "class": "Verb",
          "word": "grant",
          "meaning":
            "give (someone) something, especially as a right or privilege.",
          "usage": [
            "townsfolk whispered tales of the tree's magical properties, saying that it could grant wishes and fulfill dreams.",
          ],
          "pronounce": "/ɡrænt/",
          "example":
            "The king granted the knight permission to leave the kingdom.",
        },
        {
          "class": "Noun",
          "word": "acorn",
          "meaning":
            "the nut of the oak tree, used as food for animals and humans.",
          "usage": [
            "To her astonishment, as the words left her lips, a golden acorn fell from the tree's branches, landing softly in her palm.",
          ],
          "pronounce": "/ˈeɪkɔːrn/",
          "example": "The squirrels were busy gathering acorns for the winter.",
        },
        {
          "class": "Adjective",
          "word": "minuscule",
          "meaning": "extremely small.",
          "usage": [
            "a family of minuscule beings emerged from the soil.",
          ],
          "pronounce": "/ˈmɪnɪskjuːl/",
          "example":
            "The minuscule insects were barely visible to the naked eye.",
        },
        {
          "class": "Noun",
          "word": "carpenter",
          "meaning": "a person who makes and repairs wooden objects.",
          "usage": [
            "The father was a skilled carpenter",
          ],
          "pronounce": "/ˈkɑːrpəntər/",
          "example":
            "The carpenter built a beautiful oak table for the dining room.",
        },
        {
          "class": "Noun",
          "word": "weaver",
          "meaning": "a person who weaves cloth or yarn.",
          "usage": [
            "the mother a talented weaver",
          ],
          "pronounce": "/ˈwiːvər/",
          "example": "The weaver created a beautiful tapestry for the castle.",
        },
        {
          "class": "Noun",
          "word": "laughter",
          "meaning": "the act of laughing.",
          "usage": [
            "From that day forward, Lily's life was filled with love, laughter, and the knowledge that the magical Knoll Family Tree had made her dream come true.",
          ],
          "pronounce": "/ˈlæftər/",
          "example": "The children's laughter filled the house with joy.",
        },
      ],
    },
    "keywords": [
      "Magical tree",
      "Emerald leaves",
      "Grasping branches",
      "Townsfolk whispers",
      "Wish-granting tree",
      "Young girl named Lily",
      "Golden acorn",
      "Minuscule beings",
      "Carpenter father",
      "Weaver mother",
      "Playful children",
      "Knoll Family Tree",
    ],
  },
};
export default data;
