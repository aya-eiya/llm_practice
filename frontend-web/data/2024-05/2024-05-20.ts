import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The First International Style Exhibition",
    "details":
      "May 20th, 1925 - The Museum of Modern Art (MoMA) in New York City held an exhibition on 'Modern Architecture: International Exposition' that showcased the works of Le Corbusier, Walter Gropius, and Ludwig Mies van der Rohe, marking a significant milestone in the development of the International Style in architecture and design.",
  },
  "date": "2024-05-20",
  "title":
    "Eclipse of Style: A Magical Novel Inspired by the First International Style Exhibition",
  "body":
    "In a world where architecture and design hold magical properties, three legendary architects - Le Corbusier, Walter Gropius, and Ludwig Mies van der Rohe - were brought together by a mysterious force to create a new style. Their works, once displayed in the grand halls of the Museum of Modern Art (MoMA), began to weave a tapestry of modernity that would change the course of history.On May 20th, 1925, MoMA hosted an exhibition celebrating the birth of the International Style. The attendees were transported into a world where buildings danced with the wind and walls whispered secrets to those who passed by. The air was alive with the hum of creativity, as these architects worked in harmony to create structures that defied the norms of their time.As they stood before their masterpieces, Le Corbusier, Walter Gropius, and Ludwig Mies van der Rohe knew that their collaboration had set a new standard for architecture. Their designs were not just aesthetically pleasing but also held a deeper meaning - the promise of a better future.And so, as the sun dipped below the horizon on that fateful day, the trio's creation cast a spell over the city of New York, forever leaving its mark on the world of architecture and design.",
  "word count": 208,
  "dialog": [
    {
      "Billy":
        "I loved how the novel wove together architecture, design, and magic! It was like a dream come true.",
    },
    {
      "Kerry":
        "Totally agree with Billy! The way the authors mixed fantasy and reality was so cool. I wish I could build buildings that danced in the wind.",
    },
    {
      "Meg":
        "For me, it was all about the themes of hope and possibility. The novel showed how even the smallest changes can have a big impact on the world.",
    },
    {
      "Lui":
        "As an educator, I appreciated how the novel highlighted the importance of collaboration and creativity. It's a great reminder that we can achieve more together than alone.",
    },
    {
      "Kerry":
        "I also loved how the novel didn't shy away from exploring complex issues like social justice and equality. It made me think about my own role in making a positive impact.",
    },
    {
      "Meg":
        "And can we talk about the architecture itself? I mean, who wouldn't want to live in a building that whispers secrets to you?",
    },
    {
      "Billy":
        "Absolutely! The descriptions of the buildings were so vivid and detailed. It felt like I was right there with them, exploring the city.",
    },
    {
      "Lui":
        "I think what struck me most was how the novel showed that even in the darkest times, there's always hope for a better future. That's a powerful message we can all learn from.",
    },
  ],
  "quiz": [
    {
      "question": "What was the significant event mentioned in the novel?",
      "options": [
        "The discovery of magic",
        "The first International Style Exhibition",
        "The creation of a new architectural style",
        "A mysterious force brought together three architects",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did Le Corbusier, Walter Gropius, and Ludwig Mies van der Rohe create?",
      "options": [
        "A new type of furniture",
        "A magical potion",
        "A style that defied norms",
        "A set of building plans",
        "None of the above",
      ],
      "answer": 2,
    },
    {
      "question": "What was one of the themes explored in the novel?",
      "options": [
        "The power of magic",
        "The importance of collaboration and creativity",
        "The impact of technology on society",
        "The role of architecture in shaping culture",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was mentioned as being whispered to people by buildings?",
      "options": [
        "Secrets",
        "Lies",
        "Truths",
        "Facts",
        "None of the above",
      ],
      "answer": 0,
    },
    {
      "question":
        "What message did the novel convey about hope and possibility?",
      "options": [
        "That there is no hope for a better future",
        "That small changes can have a big impact on the world",
        "That architecture is not important",
        "That magic has no place in reality",
        "None of the above",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Fantasy",
    "models": { "main": "llama", "novel": "llava" },
    "level": "Level_5",
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation": "Introduces a new sentence with a subject and a verb.",
          "usage": [
            "In a world where architecture and design hold magical properties, three legendary architects - Le Corbusier, Walter Gropius, and Ludwig Mies van der Rohe - were brought together by a mysterious force to create a new style.",
          ],
          "words": [
            {
              "S": [
                "In",
                "a",
                "world",
                "where",
                "architecture",
                "and",
                "design",
                "hold",
                "magical",
                "properties",
                "three",
                "legendary",
                "architects",
              ],
            },
            {
              "V": [
                "were",
                "brought",
                "together",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation": "Adds a complement to the sentence.",
          "usage": [
            "On May 20th, 1925, MoMA hosted an exhibition celebrating the birth of the International Style.",
          ],
          "words": [
            {
              "S": [
                "On",
                "May",
                "20th",
                "1925",
                "MoMA",
              ],
            },
            {
              "V": [
                "hosted",
                "an",
                "exhibition",
                "celebrating",
                "the",
                "birth",
                "of",
                "the",
              ],
            },
            {
              "C": [
                "International Style",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation": "Introduces an object in the sentence.",
          "usage": [
            "Their works, once displayed in the grand halls of the Museum of Modern Art (MoMA), began to weave a tapestry of modernity that would change the course of history.",
          ],
          "words": [
            {
              "S": [
                "Their",
                "works",
              ],
            },
            {
              "V": [
                "began",
                "to",
                "weave",
                "a",
                "tapestry",
                "of",
                "modernity",
                "that",
                "would",
                "change",
                "the",
                "course",
                "of",
                "history",
              ],
            },
            {
              "O": [
                "in the grand halls of the Museum of Modern Art (MoMA)",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation": "Adds a second object to the sentence.",
          "usage": [
            "The attendees were transported into a world where buildings danced with the wind and walls whispered secrets to those who passed by.",
          ],
          "words": [
            {
              "S": [
                "The",
                "attendees",
              ],
            },
            {
              "V": [
                "were",
                "transported",
                "into",
                "a",
                "world",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation": "Adds a complement to the sentence.",
          "usage": [
            "As they stood before their masterpieces, Le Corbusier, Walter Gropius, and Ludwig Mies van der Rohe knew that their collaboration had set a new standard for architecture.",
          ],
          "words": [
            {
              "S": [
                "As",
                "they",
                "stood",
                "before",
                "their",
                "masterpieces",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "architecture",
          "meaning":
            "the art of designing and building structures, such as buildings or bridges.",
          "usage": [
            "The museum's new architecture is a marvel.",
            "The city's skyline is dominated by its iconic architecture.",
          ],
          "pronounce": "/ɑːrˈkiːtɛktʃər/",
          "example":
            "The city's new architecture is inspired by ancient Greek designs.",
        },
        {
          "class": "Adjective",
          "word": "magical",
          "meaning":
            "having or characterized by a mysterious or supernatural power.",
          "usage": [
            "The magician waved his wand with magical gestures.",
            "The movie had a magical quality that captivated audiences.",
          ],
          "pronounce": "/ˈmædʒɪkəl/",
          "example":
            "The game has a magical way of making you feel like you're in another world.",
        },
        {
          "class": "Noun",
          "word": "style",
          "meaning":
            "a manner or approach to doing something, such as a particular type of clothing or architecture.",
          "usage": [
            "The fashion designer's new style is all the rage.",
            "The museum's latest exhibit showcases modern art in a unique style.",
          ],
          "pronounce": "/staɪl/",
          "example":
            "The company's new marketing strategy has a fresh and trendy style.",
        },
        {
          "class": "Verb",
          "word": "celebrate",
          "meaning":
            "to mark or honor the anniversary of an event, person, or thing.",
          "usage": [
            "We're celebrating my birthday with dinner tonight.",
            "The city will celebrate its 100th anniversary with a parade.",
          ],
          "pronounce": "/sɛlɪˈbreɪt/",
          "example":
            "The community is going to celebrate the new park's opening with a big festival.",
        },
        {
          "class": "Adverb",
          "word": "better",
          "meaning": "to an improved or enhanced state.",
          "usage": [
            "I'm feeling better after taking some medicine.",
            "The new policy will make things better for employees.",
          ],
          "pronounce": "/ˈbɛtər/",
          "example":
            "If we work harder, I think our team can do better in the next game.",
        },
        {
          "class": "Noun",
          "word": "Museum",
          "meaning":
            "a building or institution where works of art, scientific specimens, or other items are exhibited.",
          "usage": [
            "The museum is one of the city's most popular tourist attractions.",
            "The museum has an extensive collection of ancient artifacts.",
          ],
          "pronounce": "/ˈmjuːzɪəm/",
          "example":
            "The art museum features a rotating exhibit of contemporary pieces.",
        },
        {
          "class": "Proper Noun",
          "word": "MoMA",
          "meaning":
            "short for Museum of Modern Art, an American modern art museum.",
          "usage": [
            "I'm going to visit MoMA this weekend.",
            "The exhibit at MoMA is a must-see.",
          ],
          "pronounce": "/ˈmoʊmɑː/",
          "example":
            "MoMA's collection includes works by some of the most influential artists of the 20th century.",
        },
        {
          "class": "Adverb",
          "word": "harmoniously",
          "meaning": "in a way that is smooth and pleasant.",
          "usage": [
            "The music played harmoniously with the gentle breeze.",
            "The company's employees work harmoniously together.",
          ],
          "pronounce": "/ˌhɑrˈmənɪsli/",
          "example":
            "The new management team is working harmoniously to improve the company's performance.",
        },
      ],
    },
    "keywords": [
      "magical",
      "architecture",
      "design",
      "legendary",
      "style",
      "modernity",
      "history",
      "International",
      "creativity",
      "harmony",
      "innovation",
      "promise",
      "future",
    ],
  },
};
export default data;
