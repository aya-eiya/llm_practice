import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First successful polio vaccine testing",
    "details":
      "On May 14th, 1955, Jonas Salk's inactivated poliovirus vaccine was tested on a small group of volunteers, marking the beginning of the end of the global polio epidemic.",
  },
  "date": "2024-05-14",
  "title": "The Polio Eradicator",
  "body":
    "In a world where steam-powered machines ruled supreme, the dreaded polio had long plagued the population. Families lived in constant fear of the crippling disease that seemed to have no cure. But then, hope appeared on the horizon in the form of Dr. Salk and his team of brilliant inventors. Dr. Salk had been working tirelessly on a vaccine for years, but it was only when he discovered the secrets of steam-powered mechanics that he realized the key to unlocking the mystery of polio. With his new invention, he was able to develop an inactivated poliovirus vaccine that promised to put an end to the polio epidemic once and for all. On May 14th, 1955, Dr. Salk and his team tested the vaccine on a small group of volunteers. The results were overwhelmingly positive, marking the beginning of the end of polio. The steam-powered world rejoiced as families were finally able to live free from fear of the crippling disease. Dr. Salk's invention revolutionized the world and paved the way for future medical advancements. His name became synonymous with hope and healing, and he was hailed as a hero by all who knew him.",
  "word count": 191,
  "dialog": [
    {
      "Billy":
        "I loved how Dr. Salk's invention revolutionized the world! It shows that even in the face of adversity, humans can find solutions.",
    },
    {
      "Kerry":
        "Yeah, and it's crazy to think about how steam-powered machines played a role in developing the polio vaccine. Who would have thought?",
    },
    {
      "Meg":
        "I know, right? It's amazing what people can accomplish when they put their minds together. I'm so glad Dr. Salk didn't give up.",
    },
    {
      "Lui":
        "Well said, Meg. This story highlights the importance of perseverance and collaboration in overcoming significant challenges.",
    },
    {
      "Billy":
        "And it's not just about the vaccine itself, but also about how it brought people together. I loved reading about the small group of volunteers who tested it out.",
    },
    {
      "Kerry":
        "That's true! It's a great reminder that even in the midst of crisis, there are always opportunities for growth and connection.",
    },
    {
      "Meg":
        "I think what I liked most was how Dr. Salk's invention had a ripple effect on society as a whole. It's inspiring to see how one person can make such a big difference.",
    },
    {
      "Lui":
        "Well, it just goes to show that even in the face of uncertainty and fear, human ingenuity and compassion can lead the way towards a brighter future.",
    },
    {
      "Billy":
        "Absolutely! I'm so glad we got to read this story together. It's definitely one for the books!",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the main problem in the world before Dr. Salk developed a vaccine for polio?",
      "options": [
        "Pneumonia",
        "Malaria",
        "Polio",
        "Cancer",
        "Heart disease",
      ],
      "answer": 2,
    },
    {
      "question": "How did Dr. Salk's invention revolutionize the world?",
      "options": [
        "It introduced a new form of transportation",
        "It created a new source of energy",
        "It developed an inactivated poliovirus vaccine",
        "It improved agricultural practices",
        "It enhanced communication technology",
      ],
      "answer": 2,
    },
    {
      "question": "Who tested Dr. Salk's vaccine on May 14th, 1955?",
      "options": [
        "A small group of volunteers",
        "A team of experts",
        "The entire population",
        "Families only",
        "Scientists only",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the outcome of Dr. Salk's vaccine testing on May 14th, 1955?",
      "options": [
        "Negative results",
        "Unpredictable results",
        "Positive results with side effects",
        "Positive results without side effects",
        "Failed to produce any result",
      ],
      "answer": 3,
    },
    {
      "question": "What was Dr. Salk's invention known for in the end?",
      "options": [
        "As a source of energy",
        "As a way to treat cancer",
        "As a cure for polio",
        "As a means of transportation",
        "As a method of communication",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Science",
    "flavor": "Steampunk",
    "models": { "main": "llama3", "novel": "llava" },
    "level": "Level_5",
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation":
            "The basic sentence structure with a subject and verb.",
          "usage": [
            "In a world where steam-powered machines ruled supreme, the dreaded polio had long plagued the population.",
          ],
          "words": [
            {
              "S": [
                "In",
                "a",
                "world",
              ],
            },
            {
              "V": [
                "ruled",
                "plagued",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation":
            "The basic sentence structure with a subject, verb, and object.",
          "usage": [
            "Families lived in constant fear of the crippling disease that seemed to have no cure.",
          ],
          "words": [
            {
              "S": [
                "Families",
              ],
            },
            {
              "V": [
                "lived",
              ],
            },
            {
              "O": [
                "constant fear",
                "the crippling disease",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation":
            "The basic sentence structure with a subject, verb, and complement.",
          "usage": [
            "But then, hope appeared on the horizon in the form of Dr. Salk and his team of brilliant inventors.",
          ],
          "words": [
            {
              "S": [
                "But",
                "then",
              ],
            },
            {
              "V": [
                "appeared",
              ],
            },
            {
              "C": [
                "hope",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation":
            "The basic sentence structure with a subject, verb, and two objects.",
          "usage": [
            "With his new invention, he was able to develop an inactivated poliovirus vaccine that promised to put an end to the polio epidemic once and for all.",
          ],
          "words": [
            {
              "S": [
                "With",
                "he",
              ],
            },
            {
              "V": [
                "was",
                "able",
                "develop",
              ],
            },
            {
              "O": [
                "new invention",
                "an inactivated poliovirus vaccine",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "polio",
          "meaning":
            "a highly infectious and sometimes deadly disease caused by a virus.",
          "usage": [
            "The dreaded polio had long plagued the population.",
            "Families lived in constant fear of the crippling disease that seemed to have no cure.",
          ],
          "pronounce": "/ˈpoʊlaɪ/ (POH-lye)",
          "example":
            "The doctor diagnosed the patient with a severe case of polio.",
        },
        {
          "class": "Verb",
          "word": "ruled",
          "meaning": "to have control or dominance over something.",
          "usage": [
            "In a world where steam-powered machines ruled supreme...",
            "Dr. Salk had been working tirelessly on a vaccine for years, but it was only when he discovered the secrets of steam- powered mechanics that he realized the key to unlocking the mystery of polio.",
          ],
          "pronounce": "/ruːld/ (ROOLED)",
          "example": "The government rules the country with an iron fist.",
        },
        {
          "class": "Adjective",
          "word": "dreaded",
          "meaning": "causing fear or unease.",
          "usage": [
            "The dreaded polio had long plagued the population.",
          ],
          "pronounce": "/ˈdrɛtɪd/ (DREH-tid)",
          "example": "The dreaded monster roared loudly in the forest.",
        },
        {
          "class": "Adjective",
          "word": "brilliant",
          "meaning": "extremely clever, talented, or skillful.",
          "usage": [
            "Dr. Salk and his team of brilliant inventors.",
          ],
          "pronounce": "/ˈbrɪlɪənt/ (BRIH-lee-uhnt)",
          "example":
            "The brilliant scientist won the Nobel Prize for her groundbreaking research.",
        },
        {
          "class": "Noun",
          "word": "vaccine",
          "meaning":
            "a substance that is used to protect against a particular disease.",
          "usage": [
            "Dr. Salk had been working tirelessly on a vaccine for years...",
          ],
          "pronounce": "/ˈvaɪsɪn/ (VY-sin)",
          "example":
            "The new vaccine was shown to be highly effective in preventing the spread of the disease.",
        },
        {
          "class": "Adverb",
          "word": "tirelessly",
          "meaning": "without resting or relaxing.",
          "usage": [
            "Dr. Salk had been working tirelessly on a vaccine for years...",
          ],
          "pronounce": "/ˈtaɪərli/ (TYR-lee)",
          "example":
            "The athlete ran tirelessly around the track, setting a new record.",
        },
        {
          "class": "Noun",
          "word": "mechanics",
          "meaning":
            "the branch of physics concerned with the study and application of machines.",
          "usage": [
            "...he discovered the secrets of steam-powered mechanics that he realized the key to unlocking the mystery of polio.",
          ],
          "pronounce": "/ˈmɛkənɪks/ (MEH-kah-niks)",
          "example":
            "The engineer studied mechanical engineering, specializing in automotive mechanics.",
        },
        {
          "class": "Adverb",
          "word": "overwhelmingly",
          "meaning": "in a way that is very strong or impressive.",
          "usage": [
            "The results were overwhelmingly positive, marking the beginning of the end of polio.",
          ],
          "pronounce": "/ˌoʊvərˈhwelmiŋli/ (oh-vur-HWEL-ming-lee)",
          "example":
            "The audience applauded overwhelmingly for the amazing performance.",
        },
      ],
    },
    "keywords": [
      "steam-powered",
      "polio",
      "vaccine",
      "inventors",
      "mechanics",
      "epidemic",
      "cure",
      "hope",
      "healing",
      "revolutionized",
      "paved",
      "medical",
      "advancements",
      "hero",
      "overwhelmingly",
    ],
  },
};
export default data;
