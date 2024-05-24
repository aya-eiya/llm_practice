import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Opening of the Guggenheim Museum in New York City",
    "details":
      "The Solomon R. Guggenheim Museum opened to the public on May 21, 1959, but the groundbreaking ceremony was held on May 13th, 1959.",
  },
  "date": "2024-05-13",
  "title": "The Guggenheim Effect",
  "body":
    "In a world where technology had advanced to the point of bending reality itself, the opening of the Guggenheim Museum in New York City marked a turning point for humanity. On May 21st, 2059, the museum opened its doors to the public, revealing a hidden layer of existence that no one could have imagined.  As people walked through the futuristic halls of the museum, they were suddenly struck by an unexplainable phenomenon. The world around them began to shift and change, as if time itself had been rewritten. Buildings disappeared and reappeared in different locations, while trees sprouted from the concrete, creating a jungle-like environment.  Scientists rushed to the scene, trying to understand what was happening. They discovered that the Guggenheim Museum was not just a place for art, but a gateway to a parallel universe. The opening of the museum had created a ripple effect, allowing the two universes to collide and merge in an unpredictable way.  From that day on, the world was never the same again. The Guggenheim Effect had changed everything, ushering in a new era of discovery and understanding.",
  "word count": 184,
  "dialog": [
    {
      "Billy":
        "I'm still trying to wrap my head around this parallel universe concept. How did the Guggenheim Museum even do that?",
    },
    {
      "Kerry":
        "Yeah, me too! It's like our whole reality was turned upside down. I mean, what about all the things we thought were true before?",
    },
    {
      "Meg":
        "I know, right? It's like we're living in a dream or something. But think of all the possibilities now...",
    },
    {
      "Lui":
        "As educators, it's our responsibility to guide our students through this new reality and help them make sense of it.",
    },
    {
      "Kerry":
        "Exactly! We need to be there for Billy here, who's probably feeling a bit overwhelmed by all this.",
    },
    {
      "Meg":
        "I'm more excited than anything. I mean, what if we can actually travel between universes? Can you imagine?",
    },
    {
      "Billy":
        "I don't know... it feels like everything we thought was certain is no longer true. How do we even begin to make sense of this?",
    },
    {
      "Lui":
        "Well, Billy, that's exactly why we need to work together and use our collective knowledge to try and understand what's happening.",
    },
    {
      "Kerry":
        "Yeah, and maybe we can even find a way to communicate with people in the other universe... who knows?",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the significant event that marked a turning point for humanity?",
      "options": [
        "The opening of the Guggenheim Museum in New York City",
        "The discovery of parallel universes",
        "The advancement of technology to bending reality itself",
        "The creation of a new era of discovery and understanding",
        "The rewriting of time itself",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the unexpected phenomenon that occurred when people walked through the Guggenheim Museum?",
      "options": [
        "A sudden change in temperature",
        "A shift in time itself",
        "Buildings disappearing and reappearing",
        "Trees sprouting from concrete",
        "The world around them began to shift and change",
      ],
      "answer": 3,
    },
    {
      "question":
        "What did the scientists discover was happening after the opening of the Guggenheim Museum?",
      "options": [
        "A parallel universe was created",
        "Time itself had been rewritten",
        "The world around us began to change",
        "Reality had been bent",
        "The opening of a new museum",
      ],
      "answer": 0,
    },
    {
      "question":
        "Who expressed excitement about the possibility of traveling between universes?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "No one",
      ],
      "answer": 2,
    },
    {
      "question": "What was Billy trying to wrap his head around?",
      "options": [
        "The concept of parallel universes",
        "The opening of the Guggenheim Museum",
        "The idea that reality could be bent",
        "The possibility of traveling between universes",
        "The new era of discovery and understanding",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Science Fiction",
    "models": { "main": "llama", "novel": "llava" },
    "level": "Level_5",
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation":
            "The simplest sentence structure, where 'S' is the subject and 'V' is the verb.",
          "usage": [
            "In a world...",
            "On May 21st...",
          ],
          "words": [
            {
              "S": [
                "a world",
                "May 21st",
              ],
            },
            {
              "V": [
                "had advanced",
                "opened",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation": "A sentence with a subject, verb, and complement.",
          "usage": [
            "The opening of...",
            "The world around...",
          ],
          "words": [
            {
              "S": [
                "the museum",
                "the world",
              ],
            },
            {
              "V": [
                "marked",
                "began",
              ],
            },
            {
              "C": [
                "a turning point for humanity",
                "to shift and change",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation": "A sentence with a subject, verb, and object.",
          "usage": [
            "As people walked...",
            "Scientists rushed...",
          ],
          "words": [
            {
              "S": [
                "people",
                "scientists",
              ],
            },
            {
              "V": [
                "walked",
                "rushed",
              ],
            },
            {
              "O": [
                "through the museum",
                "to the scene",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation": "A sentence with a subject, verb, two objects.",
          "usage": [
            "Buildings disappeared...",
            "The Guggenheim Effect...",
          ],
          "words": [
            {
              "S": [
                "the world",
                "Billy",
              ],
            },
            {
              "V": [
                "began to shift",
                "changed everything",
              ],
            },
            {
              "O": [
                "buildings and reappeared",
                "our whole reality",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "A sentence with a subject, verb, object, and complement.",
          "usage": [
            "From that day on...",
            "As educators...",
          ],
          "words": [
            {
              "S": [
                "the world",
                "we",
              ],
            },
            {
              "V": [
                "was never the same",
                "need to be there",
              ],
            },
            {
              "O": [
                "Billy here",
                "our students",
              ],
            },
            {
              "C": [
                "usher in a new era",
                "help them make sense",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "technology",
          "meaning":
            "the application of scientific knowledge for practical purposes",
          "usage": [
            "The technology had advanced to the point of bending reality itself.",
            "The latest technology has made our lives easier.",
          ],
          "pronounce": "/tɛkˈnɒlədʒi/",
          "example":
            "The new smartphone is a great example of modern technology in action.",
        },
        {
          "class": "Adjective",
          "word": "futuristic",
          "meaning":
            "relating to or resembling the future; advanced in design or development",
          "usage": [
            "As people walked through the futuristic halls of the museum...",
            "The futuristic cityscape was a sight to behold.",
          ],
          "pronounce": "/ˌfʊtərɪsˈtik/",
          "example": "The futuristic spaceship landed safely on the planet.",
        },
        {
          "class": "Verb",
          "word": "rewrite",
          "meaning": "to write or edit again, typically in a different form",
          "usage": [
            "Time itself had been rewritten.",
            "She rewrote the novel to make it more appealing.",
          ],
          "pronounce": "/rɪˈraɪt/",
          "example": "The author rewrote the entire script for the movie.",
        },
        {
          "class": "Noun",
          "word": "universe",
          "meaning": "the totality of all existence, considered as a unit",
          "usage": [
            "They discovered that the Guggenheim Museum was not just a place for art, but a gateway to a parallel universe.",
            "The universe is full of mysteries.",
          ],
          "pronounce": "/ʌnˈɪvərˌs/",
          "example":
            "Astronomers have been studying the universe for centuries.",
        },
        {
          "class": "Noun",
          "word": "gateway",
          "meaning":
            "a point of entry or exit to a particular place or situation",
          "usage": [
            "They discovered that the Guggenheim Museum was not just a place for art, but a gateway to a parallel universe.",
            "The new highway is a gateway to the city.",
          ],
          "pronounce": "/ˈɡeɪtweɪ/",
          "example": "The airport serves as a gateway to international travel.",
        },
        {
          "class": "Verb",
          "word": "usher",
          "meaning":
            "to introduce or bring something into being, typically in a formal or official manner",
          "usage": [
            "From that day on, the world was never the same again. The Guggenheim Effect had changed everything, ushering in a new era of discovery and understanding.",
            "She ushered in a new era of creativity.",
          ],
          "pronounce": "/ˈʌʃər/",
          "example": "The new CEO ushered in a period of significant change.",
        },
        {
          "class": "Adjective",
          "word": "parallel",
          "meaning":
            "existing or occurring at the same time, but not necessarily in the same place or situation",
          "usage": [
            "They discovered that the Guggenheim Museum was not just a place for art, but a gateway to a parallel universe.",
            "The two parallel universes collided.",
          ],
          "pronounce": "/ˈpærəlɛl/",
          "example": "The two parallel lines never intersect.",
        },
        {
          "class": "Noun",
          "word": "era",
          "meaning":
            "a period of time characterized by a particular feature or set of circumstances",
          "usage": [
            "From that day on, the world was never the same again. The Guggenheim Effect had changed everything, ushering in a new era of discovery and understanding.",
            "The Renaissance was an era of great cultural change.",
          ],
          "pronounce": "/ˈɛrə/",
          "example":
            "The Middle Ages were an era of significant social change.",
        },
        {
          "class": "Noun",
          "word": "discovery",
          "meaning": "the act or process of finding out something new",
          "usage": [
            "From that day on, the world was never the same again. The Guggenheim Effect had changed everything, ushering in a new era of discovery and understanding.",
            "The discovery of gravity revolutionized our understanding of the universe.",
          ],
          "pronounce": "/dɪsˈaɪvəri/",
          "example": "The discovery of penicillin has saved countless lives.",
        },
      ],
    },
    "keywords": [
      "Reality",
      "Technology",
      "Guggenheim Museum",
      "Parallel Universe",
      "Gateway",
      "Ripple Effect",
      "Discovery",
      "Understanding",
      "Transformation",
      "Alternate Reality",
      "Surreal",
      "Futuristic",
    ],
  },
};
export default data;
