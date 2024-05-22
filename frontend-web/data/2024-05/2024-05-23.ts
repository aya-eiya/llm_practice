import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Art Deco, an influential design style, emerged",
    "details":
      "On May 23, 1925, the Exposition Internationale des Arts Décoratifs et Industriels Modernes (International Exhibition of Modern Decorative and Industrial Arts) opened in Paris, France. This exhibition showcased a new style of art and design that became known as Art Deco. Art Deco was characterized by its geometric shapes, bold colors, and luxurious materials.",
  },
  "date": "2024-05-23",
  "title": "The Deco Reaper",
  "body":
    "In the depths of an opulent Art Deco mansion, shadows danced ominously. Sharp angles and gleaming chrome masked a sinister secret. As the night crept in, the eerie glow of geometric lamps cast haunting shadows, revealing a grotesque figure lurking within. Its porcelain-like skin was adorned with Art Deco patterns, its eyes cold and unforgiving. The Deco Reaper, they whispered, a harbinger of terror inspired by the heartless beauty of the era. Its every step echoed with the chilling chime of a crystal chandelier, its presence sending shivers down the spines of all who dared to approach. In the mansion's grand hall, a lavish party raged on, oblivious to the horror unfolding within. But as the clock struck midnight, the Deco Reaper emerged, its cold embrace claiming its victims one by one. Amidst the splendor and decadence, the mansion became a stage for a macabre dance of death, a chilling testament to the darkness that lurked beneath the alluring surface of Art Deco.",
  "word count": 163,
  "dialog": [
    {
      "Kerry":
        "Guys, I just finished the 'Deco Reaper' novel! It was totally chilling!",
    },
    {
      "Meg":
        "I know, right? The mansion's description was so vivid, I felt like I was there!",
    },
    {
      "Billy":
        "I loved how the novel combined Art Deco with horror. It was such a unique concept!",
    },
    {
      "Lui":
        "It's a great example of how literature can explore the darker aspects of human nature.",
    },
    {
      "Meg":
        "But I also thought it was a commentary on the superficiality of the era. The mansion's splendor hides something truly horrifying.",
    },
    {
      "Kerry": "Yeah, the Deco Reaper itself was such a creepy symbol of that.",
    },
    {
      "Lui":
        "It's a reminder that even in glamorous times, there can be a hidden darkness.",
    },
  ],
  "quiz": [
    {
      "question": "In what setting does the 'Deco Reaper' novel take place?",
      "options": [
        "A gothic castle",
        "A modern skyscraper",
        "An opulent Art Deco mansion",
        "A dark labyrinth",
        "A bustling city street",
      ],
      "answer": 2,
    },
    {
      "question":
        "What is a prominent feature of the Deco Reaper's appearance?",
      "options": [
        "Long, flowing hair",
        "Bulging eyes",
        "Art Deco patterns on its skin",
        "Sharp claws and teeth",
        "A ragged cloak",
      ],
      "answer": 2,
    },
    {
      "question":
        "How does the Deco Reaper's presence affect those who approach it?",
      "options": [
        "It makes them laugh uncontrollably",
        "It puts them to sleep",
        "It gives them a sense of calm",
        "It sends shivers down their spines",
        "It makes them lose their minds",
      ],
      "answer": 3,
    },
    {
      "question":
        "What is the significance of the lavish party taking place in the mansion?",
      "options": [
        "It symbolizes the hidden darkness that lies beneath the surface",
        "It provides a setting for the Deco Reaper to make its victims",
        "It contrasts with the horrifying events that are occurring within",
        "It is a celebration of the Art Deco era",
        "It is a subplot that has no bearing on the main story",
      ],
      "answer": 0,
    },
    {
      "question": "What does the 'Deco Reaper' novel ultimately explore?",
      "options": [
        "The beauty of Art Deco design",
        "The dangers of excessive wealth",
        "The darker aspects of human nature",
        "The importance of facing one's fears",
        "The rise and fall of civilizations",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Design",
    "flavor": "Horror",
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
          "explanation": "Subject performs an action without a direct object.",
          "usage": [
            "In the depths of an opulent Art Deco mansion, shadows danced ominously.",
          ],
          "words": [
            {
              "S": [
                "Shadows",
              ],
            },
            {
              "V": [
                "danced",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation":
            "Subject performs an action with a complement that completes the meaning of the verb.",
          "usage": [
            "Sharp angles and gleaming chrome masked a sinister secret.",
          ],
          "words": [
            {
              "S": [
                "Sharp angles",
                "gleaming chrome",
              ],
            },
            {
              "V": [
                "masked",
              ],
            },
            {
              "C": [
                "a sinister secret",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation":
            "Subject performs an action with a direct object that receives the action.",
          "usage": [
            "As the night crept in, the eerie glow of geometric lamps cast haunting shadows, revealing a grotesque figure lurking within.",
          ],
          "words": [
            {
              "S": [
                "The eerie glow of geometric lamps",
              ],
            },
            {
              "V": [
                "cast",
              ],
            },
            {
              "O": [
                "haunting shadows",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation": "Subject performs an action with two direct objects.",
          "usage": [],
          "words": [],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "Subject performs an action with a direct object and a complement that completes the meaning of the verb.",
          "usage": [],
          "words": [],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "Depths",
          "meaning": "The lowest or most hidden part of something.",
          "usage": [
            "In the depths of an opulent Art Deco mansion, shadows danced ominously.",
            "The Deco Reaper, they whispered, a harbinger of terror inspired by the heartless beauty of the era.",
          ],
          "pronounce": "/dɛpθs/",
          "example":
            "The diver explored the depths of the ocean, searching for sunken treasure.",
        },
        {
          "class": "Adjective",
          "word": "Ominously",
          "meaning": "In a way that suggests something bad is going to happen.",
          "usage": [
            "In the depths of an opulent Art Deco mansion, shadows danced ominously.",
          ],
          "pronounce": "/ˈɑːmɪnəsli/",
          "example":
            "The ominous clouds gathered overhead, threatening to bring a storm.",
        },
        {
          "class": "Noun",
          "word": "Mansion",
          "meaning": "A large, impressive house.",
          "usage": [
            "In the depths of an opulent Art Deco mansion, shadows danced ominously.",
            "The mansion's grand hall, a lavish party raged on, oblivious to the horror unfolding within.",
          ],
          "pronounce": "/ˈmænʃən/",
          "example":
            "The wealthy family lived in a grand mansion on the outskirts of town.",
        },
        {
          "class": "Noun",
          "word": "Reaper",
          "meaning": "A person or thing that causes death.",
          "usage": [
            "The Deco Reaper, they whispered, a harbinger of terror inspired by the heartless beauty of the era.",
          ],
          "pronounce": "/ˈriːpər/",
          "example": "The grim reaper came to take the dying man's soul.",
        },
        {
          "class": "Noun",
          "word": "Horror",
          "meaning": "A feeling of intense fear, shock, or disgust.",
          "usage": [
            "As the clock struck midnight, the Deco Reaper emerged, its cold embrace claiming its victims one by one.",
            "But as the clock struck midnight, the Deco Reaper emerged, its cold embrace claiming its victims one by one.",
          ],
          "pronounce": "/ˈhɒrər/",
          "example": "The horror of the car crash left her traumatized.",
        },
        {
          "class": "Adjective",
          "word": "Macabre",
          "meaning": "Gruesome or horrifying.",
          "usage": [
            "Amidst the splendor and decadence, the mansion became a stage for a macabre dance of death, a chilling testament to the darkness that lurked beneath the alluring surface of Art Deco.",
          ],
          "pronounce": "/məˈkɑːbrə/",
          "example":
            "The macabre tales of Edgar Allan Poe are known for their dark and unsettling themes.",
        },
        {
          "class": "Adjective",
          "word": "Chilling",
          "meaning": "Causing a feeling of intense cold or fear.",
          "usage": [
            "Its every step echoed with the chilling chime of a crystal chandelier, its presence sending shivers down the spines of all who dared to approach.",
          ],
          "pronounce": "/ˈtʃɪlɪŋ/",
          "example":
            "The chilling wind whipped through the trees, making the leaves shake.",
        },
        {
          "class": "Noun",
          "word": "Surface",
          "meaning": "The outer boundary of something.",
          "usage": [
            "Amidst the splendor and decadence, the mansion became a stage for a macabre dance of death, a chilling testament to the darkness that lurked beneath the alluring surface of Art Deco.",
          ],
          "pronounce": "/ˈsɜːrfəs/",
          "example": "The surface of the water was calm and still.",
        },
      ],
    },
    "keywords": [
      "Art Deco",
      "Sinister",
      "Grotesque",
      "Geometric",
      "Porcelain",
      "Deco Reaper",
      "Chilling",
      "Crystal chandelier",
      "Lavish party",
      "Midnight",
      "Macabre",
      "Darkness",
    ],
  },
};
export default data;
