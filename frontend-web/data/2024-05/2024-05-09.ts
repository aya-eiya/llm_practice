import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Woodstock Music Festival",
    "details":
      "Three-day music festival held on a dairy farm in Bethel, New York from August 15 to 17, 1969, featuring iconic performances by Jimi Hendrix, The Who, Joan Baez, Crosby, Stills & Nash, Santana, and many others.",
  },
  "date": "2024-05-09",
  "title": "A Summer of Love",
  "body":
    "In the summer of 1969, amidst a backdrop of political and social turmoil, a group of young idealists gathered on a dairy farm in Bethel, New York to celebrate love, peace, and unity. The event, known as the Woodstock Music Festival, was three days of music and camaraderie that brought together some of the most iconic performers of the time - Jimi Hendrix, The Who, Joan Baez, Crosby, Stills & Nash, Santana, and many others. At the heart of this musical utopia was a young couple, Sarah and Jack. They had met at the festival, bonding over their shared love of music and their desire to make a difference in the world. As they danced and sang along to the performances, they fell deeper in love with each other and with the spirit of Woodstock. Over the course of the weekend, Sarah and Jack experienced all that Woodstock had to offer - from the muddy fields and the late-night bonfires, to the mind-blowing performances that left them speechless. As they held hands and watched the sun rise on the final day of the festival, they knew that their love was something special - a love that could weather any storm, and a love that would last a lifetime.",
  "word count": 206,
  "dialog": [
    {
      "Billy":
        "I loved how Sarah and Jack's love story was woven throughout the festival. It felt so real.",
    },
    {
      "Kerry":
        "Yeah, I was skeptical at first, but their romance really added to the magic of Woodstock for me.",
    },
    {
      "Meg":
        "I think what struck me most was how the novel captured the essence of a generation's spirit. The music and the vibes just came alive on those pages.",
    },
    {
      "Lui":
        "As an educator, I appreciated how the novel approached historical events like Woodstock in a way that was both informative and engaging for young readers.",
    },
    {
      "Kerry":
        "And can we talk about the music? I mean, some of those performances were iconic! Jimi Hendrix, The Who...",
    },
    {
      "Billy":
        "Absolutely! The music was such an integral part of the festival's atmosphere. It really brought the characters to life.",
    },
    {
      "Meg":
        "I loved how the novel wove together the music, the romance, and the politics of the time. It felt like a true reflection of that era.",
    },
    {
      "Lui":
        "Well said, Meg. And I think it's great that the novel can serve as a window into the past for young readers today.",
    },
    {
      "Kerry":
        "Definitely. It made me want to learn more about Woodstock and its significance in American history.",
    },
    {
      "Billy":
        "Yeah, me too. The novel has definitely piqued my interest in learning more about that time period.",
    },
  ],
  "quiz": [
    {
      "question": "What was the significance of the Woodstock Music Festival?",
      "options": [
        "A music festival with iconic performers",
        "A historical event marking a generation's spirit",
        "A romantic getaway for Sarah and Jack",
        "An educational experience about American history",
        "A commercial success for the dairy farm",
      ],
      "answer": 1,
    },
    {
      "question": "What was the setting of the novel?",
      "options": [
        "A dairy farm in Bethel, New York",
        "The streets of New York City",
        "A hippie commune in California",
        "A college campus in the Midwest",
        "A beachside resort in Florida",
      ],
      "answer": 0,
    },
    {
      "question": "What was the tone of the novel?",
      "options": [
        "Sad and melancholic",
        "Comedic and lighthearted",
        "Romantic and optimistic",
        "Serious and introspective",
        "Neutral and informative",
      ],
      "answer": 2,
    },
    {
      "question": "What did Sarah and Jack bond over at the festival?",
      "options": [
        "Their love of music and desire to make a difference in the world",
        "Their passion for politics and social justice",
        "Their interest in art and literature",
        "Their appreciation for food and drink",
        "Their desire to travel and explore",
      ],
      "answer": 0,
    },
    {
      "question": "What did the novel capture well?",
      "options": [
        "The music performances only",
        "The historical events surrounding Woodstock",
        "The romance between Sarah and Jack",
        "The essence of a generation's spirit",
        "The commercial success of the festival",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Romance",
    "models": { "main": "llama3", "novel": "llava" },
    "level": "Level_5",
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation":
            "The basic sentence structure, where S is the subject and V is the verb.",
          "usage": [
            "In the summer of 1969, amidst a backdrop of political and social turmoil, a group of young idealists gathered on a dairy farm in Bethel, New York to celebrate love, peace, and unity.",
          ],
          "words": [
            {
              "S": [
                "a group of young idealists",
                "young idealists",
              ],
            },
            {
              "V": [
                "gathered",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation":
            "The sentence structure with a complement, where S is the subject, V is the verb, and C is the complement.",
          "usage": [
            "At the heart of this musical utopia was a young couple, Sarah and Jack.",
          ],
          "words": [
            {
              "S": [
                "a young couple",
                "Sarah and Jack",
              ],
            },
            {
              "V": [
                "was",
              ],
            },
            {
              "C": [
                "a young couple",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation":
            "The sentence structure with an object, where S is the subject, V is the verb, and O is the object.",
          "usage": [
            "They had met at the festival, bonding over their shared love of music and their desire to make a difference in the world.",
          ],
          "words": [
            {
              "S": [
                "They",
              ],
            },
            {
              "V": [
                "had met",
              ],
            },
            {
              "O": [
                "at the festival",
                "music",
                "their desire to make a difference in the world",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation":
            "The sentence structure with two objects, where S is the subject, V is the verb, and O1 and O2 are the first and second objects.",
          "usage": [
            "Over the course of the weekend, Sarah and Jack experienced all that Woodstock had to offer - from the muddy fields and the late- night bonfires, to the mind-blowing performances that left them speechless.",
          ],
          "words": [
            {
              "S": [
                "Sarah and Jack",
              ],
            },
            {
              "V": [
                "experienced",
              ],
            },
            {
              "O": [
                "all that Woodstock had to offer",
                "the muddy fields",
                "the late-night bonfires",
                "the mind-blowing performances",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "The sentence structure with an object and a complement, where S is the subject, V is the verb, O is the object, and C is the complement.",
          "usage": [
            "As they held hands and watched the sun rise on the final day of the festival, they knew that their love was something special - a love that could weather any storm, and a love that would last a lifetime.",
          ],
          "words": [
            {
              "S": [
                "they",
              ],
            },
            {
              "V": [
                "held hands",
                "watched",
              ],
            },
            {
              "O": [
                "the sun rise on the final day of the festival",
              ],
            },
            {
              "C": [
                "their love",
                "a love that could weather any storm, and a love that would last a lifetime",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "summer",
          "meaning": "a season of the year characterized by warm weather",
          "usage": [
            "In the summer of 1969...",
            "The summer of love...",
          ],
          "pronounce": "/ˈsʌmər/",
          "example": "I'm looking forward to a relaxing summer vacation.",
        },
        {
          "class": "Noun",
          "word": "festival",
          "meaning":
            "a special event or celebration, especially one that involves music, dance, or other forms of entertainment",
          "usage": [
            "The Woodstock Music Festival...",
            "The festival was a huge success...",
          ],
          "pronounce": "/ˈfɛstivəl/",
          "example": "I'm planning to attend the jazz festival this weekend.",
        },
        {
          "class": "Noun",
          "word": "idealists",
          "meaning":
            "people who have high ideals or principles, and are often motivated by a desire to make a positive difference in the world",
          "usage": [
            "a group of young idealists gathered...",
            "The idealist believes that...",
          ],
          "pronounce": "/ˌaɪdiˈlɪstz/",
          "example":
            "She's an idealist who wants to change the world through her art.",
        },
        {
          "class": "Verb",
          "word": "celebrate",
          "meaning":
            "to mark or honor a special event or occasion, often with festivities or ceremonies",
          "usage": [
            "They gathered to celebrate love...",
            "The team celebrated their victory...",
          ],
          "pronounce": "/ˈsɛlɪbreɪt/",
          "example": "We're going to celebrate my birthday at the beach.",
        },
        {
          "class": "Adjective",
          "word": "iconic",
          "meaning":
            "widely recognized and admired, often because of their influence or impact on society",
          "usage": [
            "some of the most iconic performers...",
          ],
          "pronounce": "/aɪˈkɒnɪk/",
          "example":
            "The iconic skyscraper in New York City is a symbol of progress.",
        },
        {
          "class": "Pronoun",
          "word": "they",
          "meaning":
            "used to refer to people or animals previously mentioned, or to people or animals that are plural",
          "usage": [
            "As they danced and sang...",
            "They fell deeper in love...",
          ],
          "pronounce": "/ðiː/",
          "example": "What do they want from us?",
        },
        {
          "class": "Noun",
          "word": "weekend",
          "meaning":
            "a period of two days, including Saturday and Sunday, which is often considered a time for leisure or relaxation",
          "usage": [
            "Over the course of the weekend...",
            "The weekend is my favorite part...",
          ],
          "pronounce": "/ˈwiːkɛnd/",
          "example": "I'm looking forward to the weekend.",
        },
        {
          "class": "Adverb",
          "word": "deeply",
          "meaning": "to a great extent or degree; thoroughly",
          "usage": [
            "They fell deeply in love...",
          ],
          "pronounce": "/ˈdiːpli/",
          "example": "I'm deeply disappointed by the news.",
        },
        {
          "class": "Adverb",
          "word": "special",
          "meaning":
            "unique or unusual, often in a way that is pleasing or appealing",
          "usage": [
            "a love that was special...",
            "The sunset was a special sight...",
          ],
          "pronounce": "/ˈspɛʃəl/",
          "example": "This cake is special because it's my birthday.",
        },
      ],
    },
    "keywords": [
      "youthful",
      "idealistic",
      "celebratory",
      "musicianary",
      "unifying",
      "iconic",
      "musical",
      "utopian",
      "love",
      "peace",
      "unity",
      "cultural",
    ],
  },
};
export default data;
