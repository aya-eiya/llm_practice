import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Coco Chanel Presents the Little Black Dress",
    "details":
      "On May 25, 1926, Coco Chanel debuted her revolutionary little black dress in the pages of Vogue magazine. The simple yet elegant design quickly became a staple in women's wardrobes and remains a timeless fashion icon today.",
  },
  "date": "2024-05-25",
  "title": "The Black Dress",
  "body":
    "In the neon-drenched labyrinth of Neo-Tokyo, where technology reigned supreme, there lived a fashion icon named Anya. Inspired by the legendary Coco Chanel, Anya sought to create a garment that would transcend time and become the ultimate symbol of power and style in the cybernetic realm.One fateful night, amidst the pulsating rhythms of a techno club, Anya unveiled her masterpiece - the 'Black Dress.' Its sleek, synthetic fabric shimmered like a thousand tiny stars, adorned with intricate cybernetic implants that responded to the wearer's every move.As Anya graced the runway, the crowd gasped in awe. The Black Dress was more than just a garment; it was a statement of rebellion, a celebration of the human spirit in a world dominated by technology. It became an instant icon, worn by the elite of Neo-Tokyo and inspiring countless imitations.And so, the Black Dress became a symbol of hope and empowerment in the cyberpunk dystopia, a reminder that even in the darkest of times, beauty and individuality could prevail.",
  "word count": 166,
  "dialog": [
    {
      "Billy":
        "Wow! The 'Black Dress' sounds amazing! I wonder how the cybernetic implants work.",
    },
    {
      "Kerry":
        "Yeah, I bet it's like something out of a futuristic movie! Maybe it gives the wearer special powers or something.",
    },
    {
      "Meg":
        "I think it's more than just a garment. It's a symbol of hope and rebellion against the cyberpunk society.",
    },
    {
      "Lui":
        "Indeed, Meg. The 'Black Dress' represents the human spirit's triumph over technology, a reminder that individuality can prevail even in the most artificial of worlds.",
    },
    {
      "Billy":
        "I'd love to see it in person. Maybe it's on display at some museum in Neo-Tokyo.",
    },
    {
      "Kerry":
        "Or maybe we could find someone who owns it and convince them to show it to us. Like, a famous fashion designer or something.",
    },
    {
      "Lui":
        "While that may be difficult, the search for the 'Black Dress' could become an adventure in itself. Who knows what we might discover about the history of Neo-Tokyo or ourselves along the way.",
    },
  ],
  "quiz": [
    {
      "question": "Who is the fashion icon that created the 'Black Dress'?",
      "options": [
        "Coco Chanel",
        "Anya",
        "Lui",
        "Billy",
        "Kerry",
      ],
      "answer": 1,
    },
    {
      "question": "Where was the 'Black Dress' first unveiled?",
      "options": [
        "A fashion show",
        "A techno club",
        "A museum",
        "A fashion magazine",
        "A private party",
      ],
      "answer": 1,
    },
    {
      "question": "What is the 'Black Dress' described as being?",
      "options": [
        "A symbol of power and style",
        "A celebration of the human spirit",
        "A work of art",
        "A piece of technology",
        "All of the above",
      ],
      "answer": 4,
    },
    {
      "question":
        "What is the significance of the 'Black Dress' in the cyberpunk dystopia?",
      "options": [
        "It is a symbol of hope and empowerment",
        "It is a warning against the dangers of technology",
        "It is a reminder of the past",
        "It is a sign of wealth and status",
        "It is none of the above",
      ],
      "answer": 0,
    },
    {
      "question":
        "What do the characters in the dialogue suggest doing to find the 'Black Dress'?",
      "options": [
        "Searching for it in a museum",
        "Asking a famous fashion designer",
        "Going on an adventure",
        "All of the above",
        "None of the above",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Fashion",
    "flavor": "Cyberpunk",
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
          "explanation": "The subject performs the action of the verb.",
          "usage": [
            "In the neon-drenched labyrinth of Neo-Tokyo, where technology reigned supreme, there lived a fashion icon named Anya.",
          ],
          "words": [
            {
              "S": [
                "Anya",
              ],
            },
            {
              "V": [
                "lived",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation":
            "The subject performs the action of the verb and the object receives the action.",
          "usage": [
            "Inspired by the legendary Coco Chanel, Anya sought to create a garment that would transcend time and become the ultimate symbol of power and style in the cybernetic realm.",
          ],
          "words": [
            {
              "S": [
                "Anya",
              ],
            },
            {
              "V": [
                "sought",
                "create",
              ],
            },
            {
              "O": [
                "a garment",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation":
            "The subject performs the action of the verb and the two objects receive the action.",
          "usage": [
            "One fateful night, amidst the pulsating rhythms of a techno club, Anya unveiled her masterpiece - the 'Black Dress.",
          ],
          "words": [
            {
              "S": [
                "Anya",
              ],
            },
            {
              "V": [
                "unveiled",
              ],
            },
            {
              "O": [
                "her masterpiece",
                "the 'Black Dress",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "The subject performs the action of the verb and the object receives the action and the complement provides additional information.",
          "usage": [
            "As Anya graced the runway, the crowd gasped in awe.",
          ],
          "words": [
            {
              "S": [
                "Anya",
              ],
            },
            {
              "V": [
                "graced",
              ],
            },
            {
              "O": [
                "the runway",
              ],
            },
            {
              "C": [
                "in awe",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation":
            "The subject performs the action of the verb and the complement provides additional information.",
          "usage": [
            "The Black Dress was more than just a garment; it was a statement of rebellion, a celebration of the human spirit in a world dominated by technology.",
          ],
          "words": [
            {
              "S": [
                "The Black Dress",
              ],
            },
            {
              "V": [
                "was",
              ],
            },
            {
              "C": [
                "more than just a garment",
                "a statement of rebellion",
                "a celebration of the human spirit in a world dominated by technology",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "labyrinth",
          "meaning": "a complex and confusing network of paths or passages",
          "usage": [
            "In the neon-drenched labyrinth of Neo-Tokyo, where technology reigned supreme, there lived a fashion icon named Anya.",
          ],
          "pronounce": "/ˈlæbərɪnθ/",
          "example":
            "The labyrinthine streets of the old city were a maze of narrow alleys and hidden courtyards.",
        },
        {
          "class": "Noun",
          "word": "garment",
          "meaning": "an article of clothing",
          "usage": [
            "Inspired by the legendary Coco Chanel, Anya sought to create a garment that would transcend time and become the ultimate symbol of power and style in the cybernetic realm.",
          ],
          "pronounce": "/ˈɡɑːrmənt/",
          "example":
            "The designer's latest collection featured a range of elegant and sophisticated garments.",
        },
        {
          "class": "Noun",
          "word": "masterpiece",
          "meaning": "a work of outstanding skill or artistry",
          "usage": [
            "One fateful night, amidst the pulsating rhythms of a techno club, Anya unveiled her masterpiece - the 'Black Dress.'",
          ],
          "pronounce": "/ˈmɑːstərpis/",
          "example":
            "The artist's masterpiece was a breathtaking painting that captured the beauty of the natural world.",
        },
        {
          "class": "Noun",
          "word": "imitation",
          "meaning":
            "an act or instance of copying or imitating someone or something",
          "usage": [
            "It became an instant icon, worn by the elite of Neo-Tokyo and inspiring countless imitations.",
          ],
          "pronounce": "/ˌɪmɪˈteɪʃən/",
          "example":
            "The counterfeit goods were a poor imitation of the original designer items.",
        },
        {
          "class": "Noun",
          "word": "dystopia",
          "meaning":
            "an imaginary place or state in which everything is bad or unpleasant",
          "usage": [
            "And so, the Black Dress became a symbol of hope and empowerment in the cyberpunk dystopia, a reminder that even in the darkest of times, beauty and individuality could prevail.",
          ],
          "pronounce": "/dɪsˈtəʊpiə/",
          "example":
            "The novel depicted a dystopian future where society was controlled by a totalitarian government.",
        },
        {
          "class": "Noun",
          "word": "cyberpunk",
          "meaning":
            "a genre of science fiction that deals with the impact of advanced technology on society",
          "usage": [
            "And so, the Black Dress became a symbol of hope and empowerment in the cyberpunk dystopia, a reminder that even in the darkest of times, beauty and individuality could prevail.",
          ],
          "pronounce": "/ˈsʌɪbərpʌŋk/",
          "example":
            "The cyberpunk film explored the themes of technology, identity, and the human condition.",
        },
        {
          "class": "Noun",
          "word": "symbol",
          "meaning": "a thing that represents or stands for something else",
          "usage": [
            "And so, the Black Dress became a symbol of hope and empowerment in the cyberpunk dystopia, a reminder that even in the darkest of times, beauty and individuality could prevail.",
          ],
          "pronounce": "/ˈsɪmbəl/",
          "example": "The dove is a symbol of peace and harmony.",
        },
        {
          "class": "Noun",
          "word": "individuality",
          "meaning": "the quality or state of being an individual",
          "usage": [
            "And so, the Black Dress became a symbol of hope and empowerment in the cyberpunk dystopia, a reminder that even in the darkest of times, beauty and individuality could prevail.",
          ],
          "pronounce": "/ˌɪndɪvɪˈdʒuːəlɪti/",
          "example":
            "She values her individuality and refuses to conform to societal norms.",
        },
      ],
    },
    "keywords": [
      "Neo-Tokyo",
      "Cyberpunk",
      "Anya",
      "Coco Chanel",
      "Black Dress",
      "Cybernetic implants",
      "Technology",
      "Style",
      "Rebellion",
      "Human spirit",
      "Hope",
      "Empowerment",
    ],
  },
};
export default data;
