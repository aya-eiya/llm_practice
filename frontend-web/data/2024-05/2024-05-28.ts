import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "American Ballet Theatre's First Performance",
    "details":
      "On May 28, 1940, the American Ballet Theatre (ABT) held its first performance at the Metropolitan Opera House in New York City. The company was founded by Lucia Chase and Richard Pleasant, and its inaugural season featured a mix of classical and modern ballets. ABT has since become one of the world's leading ballet companies, known for its artistic excellence and innovative productions.",
  },
  "date": "2024-05-28",
  "title": "The Enchanted Theater",
  "body":
    "In the heart of a vibrant metropolis, there stood a grand and opulent theater. Known as the Enchanted Theater, it was a realm where dreams took flight and magic wove its enchanting spell. As the curtain rose on a momentous night, a ballet of unparalleled beauty unfolded before the spellbound audience. Dancers moved with ethereal grace, their every step a tapestry of rhythm and emotion. The music soared through the air, painting an enchanting symphony upon the hearts of all who listened. Among the spectators sat Anya, a young girl whose imagination ignited with each graceful leap and pirouette. As the ballet reached its crescendo, the stage transformed into a realm of shimmering stars and swirling colors. Suddenly, Anya felt an irresistible pull towards the stage. With a gasp, she found herself transported to the heart of the performance, surrounded by the ethereal dancers. Together, they soared through the air, defying gravity and embracing the magic of the enchanted theater.",
  "word count": 160,
  "dialog": [
    {
      "Billy":
        "Wow, that was an amazing ballet! The dancers were so graceful, and the music was beautiful.",
    },
    {
      "Kerry":
        "I know, right? I felt like I was transported to another world. It was like I was actually dancing with them.",
    },
    {
      "Meg":
        "The stage was so magical, with the shimmering stars and the swirling colors. It was like something out of a dream.",
    },
    {
      "Lui":
        "I agree, it was a truly captivating performance. The dancers' technique was impeccable, and the choreography was breathtaking.",
    },
    {
      "Billy":
        "I wonder how they do it. Is it just practice, or is there something more to it?",
    },
    {
      "Kerry":
        "I bet they have some kind of secret formula. Like they drink a magic potion that makes them dance better.",
    },
    {
      "Meg":
        "Or maybe they're just born with it. Some people are just naturally talented.",
    },
    {
      "Lui":
        "It's probably a combination of both. Natural talent is important, but it takes a lot of hard work and dedication to become a truly great dancer.",
    },
  ],
  "quiz": [
    {
      "question": "Where was the Enchanted Theater located?",
      "options": [
        "In the suburbs of a quiet town",
        "In the heart of a vibrant metropolis",
        "On a remote island",
        "In a small, charming village",
        "In a grand palace",
      ],
      "answer": 1,
    },
    {
      "question": "What was one of the most captivating aspects of the ballet?",
      "options": [
        "The intricate costumes",
        "The ethereal grace of the dancers",
        "The powerful music",
        "The imaginative set design",
        "The humorous choreography",
      ],
      "answer": 1,
    },
    {
      "question": "According to Anya, what happened during the ballet?",
      "options": [
        "She was transported to the stage",
        "She met the dancers backstage",
        "She fell asleep and missed the performance",
        "She performed a solo dance",
        "She became a professional dancer",
      ],
      "answer": 0,
    },
    {
      "question": "What did Kerry believe about the dancers' abilities?",
      "options": [
        "They were born with exceptional talent",
        "They practiced for many hours each day",
        "They used a secret formula to enhance their skills",
        "They were possessed by magical beings",
        "Their success was all due to luck",
      ],
      "answer": 2,
    },
    {
      "question":
        "According to Lui, what is essential for becoming a great dancer?",
      "options": [
        "Natural talent alone is sufficient",
        "Hard work and dedication are the only requirements",
        "Both natural talent and hard work are important",
        "Having the right teacher is the most important factor",
        "Participating in competitions is essential",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Dance",
    "flavor": "Fantasy",
    "models": {
      "main": "gemini",
      "novel": "gemini",
    },
    "level": "Level_5",
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation": "Subject and verb",
          "usage": [
            "In the heart of a vibrant metropolis, there stood a grand and opulent theater.",
          ],
          "words": [
            {
              "S": [
                "In the heart of a vibrant metropolis",
              ],
            },
            {
              "V": [
                "stood",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation": "Subject, verb, and object",
          "usage": [
            "As the curtain rose on a momentous night, a ballet of unparalleled beauty unfolded before the spellbound audience.",
            "The music soared through the air, painting an enchanting symphony upon the hearts of all who listened.",
            "Wow, that was an amazing ballet!",
          ],
          "words": [
            {
              "S": [
                "As the curtain",
                "The music",
              ],
            },
            {
              "V": [
                "rose",
                "soared",
                "was",
              ],
            },
            {
              "O": [
                "a ballet of unparalleled beauty",
                "an enchanting symphony",
                "that",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation": "Subject, verb, two objects",
          "usage": [
            "Among the spectators sat Anya, a young girl whose imagination ignited with each graceful leap and pirouette.",
          ],
          "words": [
            {
              "S": [
                "Among the spectators",
              ],
            },
            {
              "V": [
                "sat",
              ],
            },
            {
              "O": [
                "Anya",
                "a young girl whose imagination ignited with each graceful leap and pirouette",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation": "Subject, verb, object, complement",
          "usage": [
            "The stage transformed into a realm of shimmering stars and swirling colors.",
            "With a gasp, she found herself transported to the heart of the performance, surrounded by the ethereal dancers.",
            "Together, they soared through the air, defying gravity and embracing the magic of the enchanted theater.",
          ],
          "words": [
            {
              "S": [
                "The stage",
                "she",
                "Together",
              ],
            },
            {
              "V": [
                "transformed",
                "found",
                "soared",
              ],
            },
            {
              "O": [
                "a realm of shimmering stars and swirling colors",
                "herself",
                "the air",
              ],
            },
            {
              "C": [
                "into a realm of shimmering stars and swirling colors",
                "transported to the heart of the performance, surrounded by the ethereal dancers",
                "defying gravity and embracing the magic of the enchanted theater",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "metropolis",
          "meaning": "a large, busy city",
          "usage": [
            "In the heart of a vibrant metropolis, there stood a grand and opulent theater.",
          ],
          "pronounce": "/məˈtrɑːpəlɪs/",
          "example": "The metropolis was a bustling hub of activity.",
        },
        {
          "class": "Noun",
          "word": "theater",
          "meaning":
            "a building where plays, operas, or other performances are given",
          "usage": [
            "Known as the Enchanted Theater, it was a realm where dreams took flight and magic wove its enchanting spell.",
          ],
          "pronounce": "/ˈθiːətər/",
          "example": "The theater was packed with eager audience members.",
        },
        {
          "class": "Noun",
          "word": "ballet",
          "meaning": "a dance form that involves graceful, stylized movements",
          "usage": [
            "As the curtain rose on a momentous night, a ballet of unparalleled beauty unfolded before the spellbound audience.",
          ],
          "pronounce": "/ˈbæleɪ/",
          "example": "The ballet was a mesmerizing performance.",
        },
        {
          "class": "Noun",
          "word": "audience",
          "meaning": "a group of people who are present at a performance",
          "usage": [
            "Dancers moved with ethereal grace, their every step a tapestry of rhythm and emotion. The music soared through the air, painting an enchanting symphony upon the hearts of all who listened.",
          ],
          "pronounce": "/ˈɔːdiəns/",
          "example":
            "The audience applauded enthusiastically at the end of the performance.",
        },
        {
          "class": "Noun",
          "word": "crescendo",
          "meaning": "a gradual increase in volume or intensity",
          "usage": [
            "As the ballet reached its crescendo, the stage transformed into a realm of shimmering stars and swirling colors.",
          ],
          "pronounce": "/krəˈʃɛndoʊ/",
          "example": "The music reached a thunderous crescendo.",
        },
        {
          "class": "Noun",
          "word": "performance",
          "meaning": "a presentation of a play, dance, or other entertainment",
          "usage": [
            "Together, they soared through the air, defying gravity and embracing the magic of the enchanted theater.",
          ],
          "pronounce": "/pərˈfɔːrməns/",
          "example": "The performance was a critical and commercial success.",
        },
        {
          "class": "Noun",
          "word": "gravity",
          "meaning": "the force that attracts objects towards each other",
          "usage": [
            "Together, they soared through the air, defying gravity and embracing the magic of the enchanted theater.",
          ],
          "pronounce": "/ˈɡrævəti/",
          "example": "The gravity of the situation was apparent.",
        },
        {
          "class": "Noun",
          "word": "magic",
          "meaning":
            "the power to produce seemingly impossible effects by using supernatural means",
          "usage": [
            "As the curtain rose on a momentous night, a ballet of unparalleled beauty unfolded before the spellbound audience. Dancers moved with ethereal grace, their every step a tapestry of rhythm and emotion.",
          ],
          "pronounce": "/ˈmædʒɪk/",
          "example": "The magician pulled a rabbit out of his hat.",
        },
      ],
    },
    "keywords": [
      "Enchanted Theater",
      "ballet",
      "ethereal grace",
      "rhythm and emotion",
      "enchanting symphony",
      "Anya",
      "imagination",
      "shimmering stars",
      "swirling colors",
      "transported to the stage",
      "defying gravity",
      "magic",
    ],
  },
};
export default data;
