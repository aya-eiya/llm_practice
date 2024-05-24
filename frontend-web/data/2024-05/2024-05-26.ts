import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Bauhaus School founded in Weimar, Germany",
    "details":
      "The Bauhaus School was founded by Walter Gropius in Weimar, Germany, on April 12, 1919. The school was a merger of the Weimar Saxon School of Arts and Crafts and the Weimar Academy of Fine Art. The Bauhaus School was a center for the study of art, architecture, and design. The school's curriculum was based on the idea that art and technology should be combined to create functional and beautiful objects. The Bauhaus School was closed by the Nazis in 1933, but its influence on modern art and design continues to this day.",
  },
  "date": "2024-05-26",
  "title": "A Thriller Novel Inspired by the Bauhaus School",
  "body":
    "As I stepped into the room, I was immediately struck by the modern art and design that surrounded me. The walls were adorned with abstract paintings, their bold colors and shapes creating a vibrant backdrop for the scene. Furniture pieces, sleek and minimalist in style, filled the space, their clean lines and geometric forms embodying the Bauhaus School's philosophy.I couldn't believe my eyes as I gazed at each piece of art and design. The craftsmanship was impeccable, every detail meticulously crafted to create something truly unique and innovative. I knew that I had stumbled upon a place where creativity and technology came together in perfect harmony.As I explored further, I realized that this wasn't just an art school, it was a testament to the Bauhaus School's vision of combining art and technology for a better future. Every piece of furniture, every painting, and even the buildings themselves were designed with functionality in mind. The school was more than just a place for students; it was a beacon of hope for those who sought to break free from conventional thinking and forge a new path forward.I left that day with an newfound appreciation for the Bauhaus School's impact on modern design and art. I knew that I had witnessed something truly remarkable, a testament to human ingenuity and creativity. The experience stayed with me forever, inspiring me to strive for excellence in everything I do.",
  "word count": 234,
  "dialog": [
    {
      "Billy":
        "I was so amazed by the modern art at that art school, Kerry. It was like nothing I'd ever seen before.",
    },
    {
      "Kerry":
        "I know, right?! The colors and shapes were so bold. It was like they were jumping off the walls at me.",
    },
    {
      "Meg":
        "I especially loved the Bauhaus furniture. It was so sleek and minimalist. I could totally see myself living in a house furnished like that.",
    },
    {
      "Lui":
        "The Bauhaus School was a really important movement in design, you guys. It was all about combining art and technology to create a better future.",
    },
    {
      "Kerry":
        "That's so cool! I never knew that. I'm going to have to learn more about them.",
    },
    {
      "Billy":
        "Me too! I think the Bauhaus School had a lot of great ideas that we can still use today.",
    },
    {
      "Meg":
        "I agree. I love how they used technology to make art more accessible to people.",
    },
    {
      "Lui":
        "Exactly. The Bauhaus School was all about making art that was functional and beautiful.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the most striking feature of the room that the speaker entered?",
      "options": [
        "The classical art and design",
        "The modern art and design",
        "The antique furniture and paintings",
        "The lush greenery and natural light",
        "The large windows and high ceilings",
      ],
      "answer": 1,
    },
    {
      "question": "What was the style of the furniture in the room?",
      "options": [
        "Ornate and elaborate",
        "Sleek and minimalist",
        "Rustic and cozy",
        "Traditional and antique",
        "Colorful and eclectic",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the primary intention behind the Bauhaus School's design principles?",
      "options": [
        "To create art for the sake of beauty",
        "To combine art and technology for functionality",
        "To promote traditional craftsmanship",
        "To encourage abstract and experimental art",
        "To preserve historical architectural styles",
      ],
      "answer": 1,
    },
    {
      "question": "How did the speaker feel after visiting the art school?",
      "options": [
        "Disappointed and underwhelmed",
        "Inspired and amazed",
        "Confused and bewildered",
        "Indifferent and uninterested",
        "Critical and judgmental",
      ],
      "answer": 1,
    },
    {
      "question":
        "According to the dialogue, what did the characters believe the Bauhaus School's ideas can still be relevant today?",
      "options": [
        "Combining art and technology",
        "Using technology to enhance accessibility",
        "Creating functional and beautiful art",
        "Breaking away from conventional thinking",
        "All of the above",
      ],
      "answer": 4,
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
          "explanation": "Subject + Verb",
          "usage": [
            "I was immediately struck by the modern art and design that surrounded me.",
            "The walls were adorned with abstract paintings, their bold colors and shapes creating a vibrant backdrop for the scene.",
            "Furniture pieces, sleek and minimalist in style, filled the space, their clean lines and geometric forms embodying the Bauhaus School's philosophy.",
          ],
          "words": [
            {
              "S": [
                "I",
                "The walls",
                "Furniture pieces",
              ],
            },
            {
              "V": [
                "struck",
                "were adorned",
                "filled",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation": "Subject + Verb + Complement",
          "usage": [
            "I couldn't believe my eyes as I gazed at each piece of art and design.",
            "The craftsmanship was impeccable, every detail meticulously crafted to create something truly unique and innovative.",
          ],
          "words": [
            {
              "S": [
                "I",
                "The craftsmanship",
              ],
            },
            {
              "V": [
                "couldn't believe",
                "was",
              ],
            },
            {
              "C": [
                "as I gazed at each piece of art and design",
                "every detail meticulously crafted to create something truly unique and innovative",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation": "Subject + Verb + Object",
          "usage": [
            "I knew that I had stumbled upon a place where creativity and technology came together in perfect harmony.",
            "As I explored further, I realized that this wasn't just an art school, it was a testament to the Bauhaus School's vision of combining art and technology for a better future.",
          ],
          "words": [
            {
              "S": [
                "I",
                "I",
              ],
            },
            {
              "V": [
                "knew",
                "realized",
              ],
            },
            {
              "O": [
                "that I had stumbled upon a place where creativity and technology came together in perfect harmony",
                "that this wasn't just an art school, it was a testament to the Bauhaus School's vision of combining art and technology for a better future",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation": "Subject + Verb + Object + Object",
          "usage": [
            "Every piece of furniture, every painting, and even the buildings themselves were designed with functionality in mind.",
            "The school was more than just a place for students; it was a beacon of hope for those who sought to break free from conventional thinking and forge a new path forward.",
          ],
          "words": [
            {
              "S": [
                "Every piece of furniture, every painting, and even the buildings themselves",
                "The school",
              ],
            },
            {
              "V": [
                "were designed",
                "was",
              ],
            },
            {
              "O": [
                "with functionality in mind",
                "more than just a place for students",
              ],
            },
            {
              "O": [
                "it was a beacon of hope for those who sought to break free from conventional thinking and forge a new path forward",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation": "Subject + Verb + Object + Complement",
          "usage": [
            "I left that day with an newfound appreciation for the Bauhaus School's impact on modern design and art.",
          ],
          "words": [
            {
              "S": [
                "I",
              ],
            },
            {
              "V": [
                "left",
              ],
            },
            {
              "O": [
                "that day with an newfound appreciation for the Bauhaus School's impact on modern design and art",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "backdrop",
          "meaning": "Something that forms a background or setting",
          "usage": [
            "The bold colors and shapes creating a vibrant backdrop for the scene.",
          ],
          "pronounce": "/ˈbakˌdrɑːp/",
          "example":
            "The backdrop of the stage was a beautiful painting of a forest.",
        },
        {
          "class": "Noun",
          "word": "craftsmanship",
          "meaning": "The skill or art of making something",
          "usage": [
            "The craftsmanship was impeccable, every detail meticulously crafted to create something truly unique and innovative.",
          ],
          "pronounce": "/ˈkrɑːftsmənʃɪp/",
          "example": "The craftsmanship of the furniture was exquisite.",
        },
        {
          "class": "Noun",
          "word": "harmony",
          "meaning":
            "The combination of different things in a way that is pleasing to the eye or the ear",
          "usage": [
            "I knew that I had stumbled upon a place where creativity and technology came together in perfect harmony.",
          ],
          "pronounce": "/ˈhɑːrməni/",
          "example": "The colors in the painting were in perfect harmony.",
        },
        {
          "class": "Noun",
          "word": "ingenuity",
          "meaning": "The quality of being clever or original",
          "usage": [
            "I knew that I had witnessed something truly remarkable, a testament to human ingenuity and creativity.",
          ],
          "pronounce": "/ˌɪndʒəˈnuːɪti/",
          "example":
            "The inventor's ingenuity was evident in the design of the new machine.",
        },
        {
          "class": "Noun",
          "word": "testament",
          "meaning": "Something that is evidence of something else",
          "usage": [
            "Every piece of furniture, every painting, and even the buildings themselves were designed with functionality in mind.",
            "The school was more than just a place for students; it was a beacon of hope for those who sought to break free from conventional thinking and forge a new path forward.",
          ],
          "pronounce": "/ˈtɛstəmɛnt/",
          "example":
            "The old building is a testament to the city's rich history.",
        },
        {
          "class": "Noun",
          "word": "vision",
          "meaning": "The ability to think about or plan the future",
          "usage": [
            "I realized that this wasn't just an art school, it was a testament to the Bauhaus School's vision of combining art and technology for a better future.",
          ],
          "pronounce": "/ˈvɪʒən/",
          "example":
            "The company's vision is to be the world's leading provider of green energy.",
        },
        {
          "class": "Adjective",
          "word": "impressive",
          "meaning": "Making a strong or favorable impression",
          "usage": [
            "I couldn't believe my eyes as I gazed at each piece of art and design.",
          ],
          "pronounce": "/ɪmˈprɛsɪv/",
          "example": "The students' work was very impressive.",
        },
        {
          "class": "Adjective",
          "word": "vibrant",
          "meaning": "Full of life, energy, or color",
          "usage": [
            "The bold colors and shapes creating a vibrant backdrop for the scene.",
          ],
          "pronounce": "/ˈvaɪbrənt/",
          "example": "The city was full of vibrant energy.",
        },
      ],
    },
    "keywords": [
      "Modern Art",
      "Abstract Paintings",
      "Bauhaus School",
      "Sleek Furniture",
      "Minimalism",
      "Geometric Forms",
      "Craftsmanship",
      "Innovation",
      "Creativity",
      "Functionality",
      "Visionary",
      "Inspirational",
    ],
  },
};
export default data;
