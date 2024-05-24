import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Bauhaus Founded",
    "details":
      "On May 25, 1919, Walter Gropius founded the Staatliches Bauhaus in Weimar, Germany, a school of art, architecture, and design that would come to have a profound influence on the development of modernism.",
  },
  "date": "2024-05-25",
  "title": "A New Beginning",
  "body":
    "On that fateful day in May, Walter Gropius founded the Staatliches Bauhaus in Weimar, Germany. This school of art, architecture, and design would go on to have a profound impact on the development of modernism.The students were eager to learn and explore new ideas. They began with basic sentence structures and tenses, focusing on understanding the differences between affirmation, negation, and interrogation. As they progressed, they learned about modals and perfect tenses, as well as comparing and contrasting adjectives and adverbs.As they continued their journey, they encountered more complex grammar topics such as passive voice, relative clauses, conditionals, and participial constructions. But they were determined to master every concept on the way to success.Gerunds and infinitives proved to be challenging at first, but with practice, they became proficient in using them correctly. They also learned about reported speech and question tags, which allowed them to express themselves more effectively.The final level tested their understanding of advanced sentence structures and phrasal verbs, as well as articles and quantifiers. But the students were ready for the challenge and successfully passed the course.",
  "word count": 180,
  "dialog": [
    {
      "Kerry":
        "Billy, I just finished the novel about the founding of the Bauhaus school!",
    },
    {
      "Billy":
        "Oh, that sounds really interesting, Kerry. I've never heard of it before.",
    },
    {
      "Meg":
        "It was a great story, Billy! It's about this group of artists and architects that came together to change the way we think about art and design.",
    },
    {
      "Kerry":
        "Yeah, and they had some really amazing ideas. Like, they believed that art should be functional and accessible to everyone.",
    },
    {
      "Lui":
        "I think that's a fantastic idea! I've always believed that art should be for everyone, not just the elite.",
    },
    {
      "Meg":
        "I agree, Lui. Art can be so powerful in bringing people together and creating a better world.",
    },
    {
      "Billy":
        "I wish I could have been there to see it. It must have been so exciting.",
    },
    {
      "Lui":
        "Even though we weren't there, we can still learn from their ideas and try to implement them in our own lives.",
    },
    {
      "Kerry":
        "That's a great point, Lui. We can use their ideas to make our own art and design more meaningful.",
    },
  ],
  "quiz": [
    {
      "question": "When was the Staatliches Bauhaus founded?",
      "options": [
        "May",
        "June",
        "July",
        "August",
        "September",
      ],
      "answer": 0,
    },
    {
      "question": "Who founded the Staatliches Bauhaus?",
      "options": [
        "Walter Gropius",
        "Ludwig Mies van der Rohe",
        "Marcel Breuer",
        "Wassily Kandinsky",
        "Paul Klee",
      ],
      "answer": 0,
    },
    {
      "question": "What was the main goal of the Bauhaus school?",
      "options": [
        "To promote traditional art forms",
        "To develop new and innovative approaches to art and design",
        "To educate students in the history of art",
        "To create a new style of architecture",
        "To train students in the skills needed for industrial production",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did the students learn in their first year at the Bauhaus school?",
      "options": [
        "Advanced sentence structures and phrasal verbs",
        "Basic sentence structures and tenses",
        "Grammar topics such as passive voice and relative clauses",
        "Reported speech and question tags",
        "Articles and quantifiers",
      ],
      "answer": 1,
    },
    {
      "question":
        "According to Lui, what can we do with the ideas of the Bauhaus artists?",
      "options": [
        "Ignore them because they are outdated",
        "Try to implement them in our own lives",
        "Use them to create art that is meaningless",
        "Use them to decorate our homes",
        "Use them to make ourselves rich",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Design",
    "flavor": "Thriller",
    "models": {
      "main": "gemini",
      "novel": "llava-llama3",
    },
    "level": "Level_2",
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation": "A sentence with only a subject and a verb.",
          "usage": [
            "Walter Gropius founded the Staatliches Bauhaus in Weimar, Germany.",
          ],
          "words": [
            {
              "S": [
                "Walter Gropius",
              ],
            },
            {
              "V": [
                "founded",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation": "A sentence with a subject, a verb, and a complement.",
          "usage": [
            "The students were eager to learn and explore new ideas.",
          ],
          "words": [
            {
              "S": [
                "The students",
              ],
            },
            {
              "V": [
                "were",
              ],
            },
            {
              "C": [
                "eager to learn and explore new ideas",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation": "A sentence with a subject, a verb, and an object.",
          "usage": [
            "This school of art, architecture, and design would go on to have a profound impact on the development of modernism.",
          ],
          "words": [
            {
              "S": [
                "This school of art, architecture, and design",
              ],
            },
            {
              "V": [
                "would go on to have",
              ],
            },
            {
              "O": [
                "a profound impact on the development of modernism",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation": "A sentence with a subject, a verb, and two objects.",
          "usage": [
            "They began with basic sentence structures and tenses, focusing on understanding the differences between affirmation, negation, and interrogation.",
          ],
          "words": [
            {
              "S": [
                "They",
              ],
            },
            {
              "V": [
                "began",
              ],
            },
            {
              "O": [
                "with basic sentence structures and tenses",
              ],
            },
            {
              "O": [
                "focusing on understanding the differences between affirmation, negation, and interrogation",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "A sentence with a subject, a verb, an object, and a complement.",
          "usage": [
            "But they were determined to master every concept on the way to success.",
          ],
          "words": [
            {
              "S": [
                "they",
              ],
            },
            {
              "V": [
                "were determined to master",
              ],
            },
            {
              "O": [
                "every concept",
              ],
            },
            {
              "C": [
                "on the way to success",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "day",
          "meaning": "a period of 24 hours",
          "usage": [
            "On that fateful day in May, Walter Gropius founded the Staatliches Bauhaus in Weimar, Germany.",
          ],
          "pronounce": "/deɪ/",
          "example": "I had a great day yesterday.",
        },
        {
          "class": "Noun",
          "word": "school",
          "meaning": "an institution for learning",
          "usage": [
            "This school of art, architecture, and design would go on to have a profound impact on the development of modernism.",
          ],
          "pronounce": "/skuːl/",
          "example": "I went to school for 12 years.",
        },
        {
          "class": "Noun",
          "word": "impact",
          "meaning": "a strong effect",
          "usage": [
            "This school of art, architecture, and design would go on to have a profound impact on the development of modernism.",
          ],
          "pronounce": "/ˈɪmpækt/",
          "example": "The impact of the new law was felt immediately.",
        },
        {
          "class": "Noun",
          "word": "journey",
          "meaning": "a trip or voyage",
          "usage": [
            "As they continued their journey, they encountered more complex grammar topics such as passive voice, relative clauses, conditionals, and participial constructions.",
          ],
          "pronounce": "/ˈdʒɜːrni/",
          "example": "I'm going on a journey to find myself.",
        },
        {
          "class": "Noun",
          "word": "concept",
          "meaning": "an abstract idea",
          "usage": [
            "They were determined to master every concept on the way to success.",
          ],
          "pronounce": "/ˈkɑːnsept/",
          "example": "The concept of love is difficult to define.",
        },
        {
          "class": "Noun",
          "word": "practice",
          "meaning": "the action of doing something regularly",
          "usage": [
            "with practice, they became proficient in using them correctly",
          ],
          "pronounce": "/ˈpræktɪs/",
          "example": "I need more practice on my golf swing.",
        },
        {
          "class": "Noun",
          "word": "understanding",
          "meaning": "the ability to understand",
          "usage": [
            "The final level tested their understanding of advanced sentence structures and phrasal verbs, as well as articles and quantifiers.",
          ],
          "pronounce": "/ˌʌndərˈstændɪŋ/",
          "example": "I have a good understanding of the subject matter.",
        },
        {
          "class": "Noun",
          "word": "challenge",
          "meaning": "a difficult task",
          "usage": [
            "But the students were ready for the challenge and successfully passed the course.",
          ],
          "pronounce": "/ˈtʃælɪndʒ/",
          "example": "I'm up for any challenge.",
        },
      ],
    },
    "keywords": [
      "Bauhaus",
      "Walter Gropius",
      "Modernism",
      "Art",
      "Architecture",
      "Design",
      "Education",
      "Grammar",
      "Syntax",
      "Sentences",
      "Tenses",
      "Advanced grammar",
    ],
  },
};
export default data;
