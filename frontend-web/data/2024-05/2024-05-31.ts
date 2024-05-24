import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "The French Academy of Sciences announces the discovery of Neptune",
    "details":
      "The discovery of the planet Neptune was announced to the French Academy of Sciences on May 31, 1846 by Urbain Le Verrier.",
  },
  "date": "2024-05-31",
  "title": "The Discovery of Neptune",
  "body":
    "In a dimly lit room within the hallowed halls of the French Academy of Sciences, a hushed anticipation hung in the air. The year was 1846, and the world was poised on the brink of a scientific revelation.Urbain Le Verrier, a brilliant astronomer, stood before his colleagues, his eyes gleaming with excitement. For years, he had tirelessly studied the irregularities in the orbit of Uranus, convinced that they were caused by the gravitational pull of another, unseen planet beyond.With trembling hands, Le Verrier revealed his calculations. He had predicted the existence and location of a new world, which he named Neptune. A wave of astonishment swept through the academy, followed by an eruption of cheers.The discovery of Neptune was a triumph for science. It not only confirmed Le Verrier's theories but also expanded the known boundaries of our solar system. As the stars twinkled above Paris that night, astronomers gazed up at the heavens, filled with a sense of wonder and the boundless possibilities that lay beyond the darkness.",
  "word count": 169,
  "dialog": [
    {
      "Billy":
        "Wow, I can't believe the discovery of Neptune was made possible through math and science. It's amazing how we can learn about the universe by studying the movements of faraway objects.",
    },
    {
      "Kerry":
        "Totally dude! It's like, a cosmic detective story. Le Verrier was like a celestial Sherlock Holmes, using clues from Uranus' orbit to track down Neptune.",
    },
    {
      "Meg":
        "I wonder what other mysteries are hidden in the vastness of space. It's like there's a whole other world of possibilities out there, waiting to be explored.",
    },
    {
      "Lui":
        "Indeed, my young scholars. The pursuit of scientific knowledge is an ongoing journey, with each discovery paving the way for new questions and the potential to expand our understanding of the universe.",
    },
    {
      "Kerry":
        "So, basically, Neptune's discovery was like a giant cosmic upgrade. It made our solar system bigger and cooler.",
    },
    {
      "Meg":
        "Right! It's like when you get a new toy and it totally revolutionizes your playtime. Imagine how excited astronomers must have been when they realized there was a whole new planet hanging out just beyond Uranus.",
    },
    {
      "Billy":
        "And it's not just about the excitement, it's about the incredible precision and dedication of scientists like Le Verrier. Years of tireless calculations and observations, all leading up to this groundbreaking moment.",
    },
    {
      "Lui":
        "Absolutely, Billy. Scientific discoveries are the culmination of hard work, perseverance, and a deep curiosity about the world around us. Neptune's discovery is a testament to the power of human ingenuity and the boundless potential of scientific inquiry.",
    },
  ],
  "quiz": [
    {
      "question": "In what year was the discovery of Neptune made?",
      "options": [
        "1845",
        "1846",
        "1847",
        "1848",
        "1849",
      ],
      "answer": 1,
    },
    {
      "question": "Who is credited with predicting the existence of Neptune?",
      "options": [
        "Albert Einstein",
        "Isaac Newton",
        "Copernicus",
        "Galileo Galilei",
        "Urbain Le Verrier",
      ],
      "answer": 4,
    },
    {
      "question":
        "What was the name given to the new planet discovered beyond Uranus?",
      "options": [
        "Pluto",
        "Mercury",
        "Venus",
        "Neptune",
        "Saturn",
      ],
      "answer": 3,
    },
    {
      "question":
        "What is the main idea conveyed by the word 'triumph' as used in the text?",
      "options": [
        "A feeling of great joy and success",
        "A minor setback",
        "A sense of failure",
        "A surprising discovery",
        "A minor inconvenience",
      ],
      "answer": 0,
    },
    {
      "question":
        "According to the dialogue, what is one of the potential outcomes of scientific discoveries?",
      "options": [
        "Expanding our understanding of the universe",
        "Making our lives easier",
        "Curing all diseases",
        "Ending wars",
        "Creating new technologies",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Historical Fiction",
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
          "explanation": "Subject followed by a verb, no object or complement.",
          "usage": [
            "Urbain Le Verrier, a brilliant astronomer, stood before his colleagues, his eyes gleaming with excitement.",
          ],
          "words": [
            {
              "S": [
                "Urbain Le Verrier",
                "a brilliant astronomer",
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
          "explanation": "Subject followed by a verb and an object.",
          "usage": [
            "For years, he had tirelessly studied the irregularities in the orbit of Uranus",
          ],
          "words": [
            {
              "S": [
                "he",
              ],
            },
            {
              "V": [
                "had studied",
              ],
            },
            {
              "O": [
                "the irregularities in the orbit of Uranus",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation": "Subject followed by a verb and two objects.",
          "usage": [
            "He had predicted the existence and location of a new world",
          ],
          "words": [
            {
              "S": [
                "He",
              ],
            },
            {
              "V": [
                "had predicted",
              ],
            },
            {
              "O": [
                "the existence",
                "location",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "Subject followed by a verb, an object, and a complement.",
          "usage": [
            "It not only confirmed Le Verrier's theories but also expanded the known boundaries of our solar system.",
          ],
          "words": [
            {
              "S": [
                "It",
              ],
            },
            {
              "V": [
                "confirmed",
                "expanded",
              ],
            },
            {
              "O": [
                "Le Verrier's theories",
                "the known boundaries of our solar system",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation": "Subject followed by a verb and a complement.",
          "usage": [
            "With trembling hands, Le Verrier revealed his calculations.",
          ],
          "words": [
            {
              "S": [
                "Le Verrier",
              ],
            },
            {
              "V": [
                "revealed",
              ],
            },
            {
              "C": [
                "his calculations",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "room",
          "meaning":
            "a separate and enclosed space within a building, used for a particular purpose",
          "usage": [
            "In a dimly lit room within the hallowed halls of the French Academy of Sciences, a hushed anticipation hung in the air.",
          ],
          "pronounce": "/rum/",
          "example": "I went to the living room to watch TV.",
        },
        {
          "class": "Noun",
          "word": "academy",
          "meaning":
            "a society of scholars, artists, or scientists founded for the promotion of a particular subject or field",
          "usage": [
            "The French Academy of Sciences",
          ],
          "pronounce": "/əˈkædᵊmē/",
          "example":
            "The National Academy of Sciences is a private, nonprofit organization of scientists and engineers dedicated to the furtherance of science and its use for the general welfare.",
        },
        {
          "class": "Noun",
          "word": "anticipation",
          "meaning":
            "the feeling of excitement or eagerness that you have before something is going to happen",
          "usage": [
            "a hushed anticipation hung in the air",
          ],
          "pronounce": "/ænˌtɪsəˈpeɪʃən/",
          "example":
            "I couldn't sleep the night before my trip because of anticipation.",
        },
        {
          "class": "Adjective",
          "word": "brilliant",
          "meaning": "very intelligent or talented",
          "usage": [
            "Urbain Le Verrier, a brilliant astronomer",
          ],
          "pronounce": "/ˈbrɪljənt/",
          "example":
            "She is a brilliant student who excels in all her classes.",
        },
        {
          "class": "Noun",
          "word": "astronomer",
          "meaning":
            "a scientist who studies the stars, planets, and other objects in space",
          "usage": [
            "Urbain Le Verrier, a brilliant astronomer",
          ],
          "pronounce": "/əˈstrɑːnəmər/",
          "example":
            "My uncle is an astronomer who works at the local university.",
        },
        {
          "class": "Verb",
          "word": "stood",
          "meaning": "to be in an upright position on your feet",
          "usage": [
            "Urbain Le Verrier, a brilliant astronomer, stood before his colleagues",
          ],
          "pronounce": "/stud/",
          "example": "The boy stood up to answer the question.",
        },
        {
          "class": "Adjective",
          "word": "trembling",
          "meaning":
            "shaking or quivering, especially because of fear, excitement, or weakness",
          "usage": [
            "With trembling hands, Le Verrier revealed his calculations.",
          ],
          "pronounce": "/ˈtrɛmblɪŋ/",
          "example": "He was trembling with fear as he stood before the judge.",
        },
        {
          "class": "Verb",
          "word": "revealed",
          "meaning": "to make something known or visible",
          "usage": [
            "With trembling hands, Le Verrier revealed his calculations.",
          ],
          "pronounce": "/rɪˈviːld/",
          "example": "The scientist revealed his findings to the world.",
        },
      ],
    },
    "keywords": [
      "scientific discovery",
      "French Academy of Sciences",
      "Urbain Le Verrier",
      "astronomer",
      "irregularities in the orbit of Uranus",
      "gravitational pull",
      "new planet",
      "Neptune",
      "astounded",
      "expanded the known boundaries of our solar system",
      "wonder",
      "boundless possibilities",
    ],
  },
};
export default data;
