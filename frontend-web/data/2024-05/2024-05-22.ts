import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Starry Night Over the Rhone",
    "details":
      "On May 22nd, 1888, Vincent van Gogh painted 'Starry Night Over the Rhone', a post-impressionist masterpiece that showcased his unique style and innovative use of color.",
  },
  "date": "2024-05-22",
  "title": "Starry Night Over the Rhone Steampunk",
  "body":
    "In the quiet of the night, under a dark and cloudy sky, Vincent van Gogh sat on his painting table, surrounded by the tools of his trade. His oil lamp cast a warm glow over the scene, illuminating the canvas before him. He dipped his brush into a palette filled with colors - greens, blues, yellows - each one swirling together to create a masterpiece. As he worked, he thought about the world around him - the stars twinkling above, the river flowing gently below, and the people living their lives in the city. Each element seemed to be telling a story, just like his own. And then it happened - the moment of creation when all the elements came together. A burst of light filled the canvas, illuminating the night sky with stars that twinkled like diamonds against the dark backdrop. The river below seemed to mirror this celestial spectacle, its surface shimmering under the starlight. In a flash, he had created something truly unique - 'Starry Night Over the Rhone', a post-impressionist masterpiece that would change the course of art history. It was more than just a painting; it was a piece of time captured within four corners.",
  "word count": 197,
  "dialog": [
    {
      "Billy":
        "I loved how Vincent van Gogh's painting came alive in my imagination. The way he captured the stars and the river was like nothing I've ever seen before.",
    },
    {
      "Kerry":
        "Totally agree, Billy! And have you noticed how his struggles with mental health are woven throughout the novel? It's like he's sharing a piece of himself with us.",
    },
    {
      "Meg":
        "Oh, yes! The way Vincent's emotions poured onto the canvas was so moving. I felt like I was right there beside him as he created 'Starry Night Over the Rhone'.",
    },
    {
      "Lui":
        "As an educator, I'm always looking for ways to make history come alive for my students. This novel did just that. The way it tied Vincent's art to his life experiences was fascinating.",
    },
    {
      "Kerry":
        "I know what you mean, Lui! It made me appreciate how art can transcend time and cultures. What do you think about the symbolism in the painting?",
    },
    {
      "Billy":
        "I think it's amazing how the stars represent hope and guidance for Vincent during those tough times. And the river... it's like the flow of life, carrying us forward.",
    },
    {
      "Meg":
        "That's so deep! I loved how the novel explored the intersection of art and reality. It made me realize that our own stories are woven into the fabric of history too.",
    },
    {
      "Lui":
        "Well said, Meg. As teachers, we know that every student has a unique story to tell. This novel reminds us to listen to those stories and find the beauty in them.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was Vincent van Gogh doing when he created 'Starry Night Over the Rhone'?",
      "options": [
        "Painting a self-portrait",
        "Writing letters to his friends",
        "Creating a masterpiece under the night sky",
        "Designing a new painting style",
        "Teaching art classes",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was the significance of the stars in Vincent van Gogh's painting?",
      "options": [
        "They represented his struggles with mental health",
        "They symbolized hope and guidance for him",
        "They were just a random addition to the painting",
        "They had no meaning whatsoever",
        "They represented the beauty of nature",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did Billy find most impressive about Vincent van Gogh's painting?",
      "options": [
        "The way it captured the city atmosphere",
        "The unique blend of colors used",
        "The stars twinkling like diamonds against the dark backdrop",
        "The river flowing gently below",
        "The way it told a story",
      ],
      "answer": 3,
    },
    {
      "question": "What did Lui appreciate most about the novel?",
      "options": [
        "How it tied Vincent's art to his life experiences",
        "The way it explored the intersection of art and reality",
        "The symbolism in the painting",
        "The way it captured the quiet of the night",
        "The emotional impact on the readers",
      ],
      "answer": 0,
    },
    {
      "question":
        "What did Meg find most moving about Vincent van Gogh's painting?",
      "options": [
        "The way his emotions poured onto the canvas",
        "The colors used in the painting",
        "The story it told",
        "The way it captured the flow of life",
        "The beauty of nature",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Steampunk",
    "models": {
      "main": "llama3",
      "novel": "llava-llama3",
    },
    "level": "Level_5",
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation": "Simple sentence with a single subject and verb.",
          "usage": [
            "In the year 42 BC, a tumultuous civil war raged between Julius Caesar and his ruthless assassins Brutus and Cassius.",
          ],
          "words": [
            {
              "S": [
                "Julius Caesar",
                "his ruthless assassins",
              ],
            },
            {
              "V": [
                "raged",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation": "Sentence with a subject, verb, and complement.",
          "usage": [
            "The battle was fierce, with both sides suffering heavy losses.",
          ],
          "words": [
            {
              "S": [
                "The battle",
              ],
            },
            {
              "V": [
                "was fierce",
              ],
            },
            {
              "C": [
                "with both sides suffering heavy losses",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation": "Sentence with a subject, verb, and object.",
          "usage": [
            "Despite their valiant efforts, Brutus and Cassius were no match for Caesar's strategic prowess.",
          ],
          "words": [
            {
              "S": [
                "Their efforts",
                "Brutus and Cassius",
              ],
            },
            {
              "V": [
                "were no match for",
              ],
            },
            {
              "O": [
                "Caesar's strategic prowess",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation": "Sentence with multiple objects.",
          "usage": [
            "Thousands of lives were lost, including those of the two men who would eventually be considered traitors to Rome.",
          ],
          "words": [
            {
              "S": [
                "Thousands of lives",
              ],
            },
            {
              "V": [
                "were lost",
              ],
            },
            {
              "O": [
                "including",
                "those of the two men",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "Sentence with a subject, verb, object, and complement.",
          "usage": [
            "As the dust settled on Philippi's fields, a weary silence fell over the battlefield.",
          ],
          "words": [
            {
              "S": [
                "The dust",
              ],
            },
            {
              "V": [
                "settled",
              ],
            },
            {
              "O": [
                "Philippi's fields",
              ],
            },
            {
              "C": [
                "a weary silence",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "Caesar",
          "meaning":
            "a Roman general and statesman who played a critical role in the transformation of the Roman Republic into the Roman Empire.",
          "usage": [
            "Julius Caesar was a Roman general",
            "Caesar's strategic prowess led to victory",
          ],
          "pronounce": "/ˈsiːzər/",
          "example":
            "The famous Roman leader Julius Caesar rode his chariot through the city.",
        },
        {
          "class": "Adverb",
          "word": "ultimately",
          "meaning": "in the end; finally.",
          "usage": [
            "His relentless tactics ultimately turned the tide of the war",
          ],
          "pronounce": "/ˌʌltɪmətli/",
          "example":
            "The team's hard work ultimately paid off with a championship win.",
        },
        {
          "class": "Verb",
          "word": "raged",
          "meaning":
            "to make a loud, fierce noise; to be in an intense state of turmoil.",
          "usage": [
            "A tumultuous civil war raged between Julius Caesar and his ruthless assassins",
          ],
          "pronounce": "/reɪdʒ/",
          "example":
            "The storm ragged on for hours, causing widespread damage.",
        },
        {
          "class": "Adjective",
          "word": "ruthless",
          "meaning": "showing no pity or compassion; merciless.",
          "usage": [
            "his ruthless assassins",
          ],
          "pronounce": "/ˈruθlɛs/",
          "example":
            "The ruthless business tactics of the corporation led to a major scandal.",
        },
        {
          "class": "Noun",
          "word": "Philippi",
          "meaning": "an ancient city in northern Greece.",
          "usage": [
            "The battle was fierce, with both sides suffering heavy losses on Philippi's fields",
          ],
          "pronounce": "/fɪˈlɪpi/",
          "example":
            "The ancient city of Philippi is now a popular tourist destination.",
        },
        {
          "class": "Pronoun",
          "word": "they",
          "meaning": "used to refer to people previously mentioned.",
          "usage": [
            "Vengeful and determined, they plotted their next move",
          ],
          "pronounce": "/ðeɪ/",
          "example": "They will be attending the meeting tomorrow.",
        },
        {
          "class": "Noun",
          "word": "Rome",
          "meaning": "the capital city of Italy.",
          "usage": [
            "Caesar, now in full control of Rome",
          ],
          "pronounce": "/roʊm/",
          "example": "The ancient city of Rome is famous for its architecture.",
        },
        {
          "class": "Verb",
          "word": "vowed",
          "meaning": "to make a solemn promise or oath.",
          "usage": [
            "Caesar vowed that his victory would not go unnoticed",
          ],
          "pronounce": "/vaʊd/",
          "example":
            "The athlete vowed to train harder for the next competition.",
        },
      ],
    },
    "keywords": [
      "civil war",
      "Julius Caesar",
      "assassination",
      "Philippi",
      "Macedonia",
      "tactics",
      "strategic prowess",
      "Roman legions",
      "victory",
      "vengeance",
      "plotting",
      "conquest",
    ],
  },
};
export default data;
