import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first film screening in a theater",
    "details":
      "The Lumière brothers' Cinématographe device is used for the first film screening in a public theater at Salon Indien du Grand Café in Paris, France",
  },
  "date": "2024-05-12",
  "title": "The Last Reel",
  "body":
    "In a desolate future where cities have been reduced to rubble and the world is a shadow of its former self, a group of survivors stumble upon an ancient artifact: a projector with a dusty reel of film. As they huddle in the dimly lit theater, their eyes wide with wonder and hope, they press play. The projector groans to life, casting flickering shadows on the crumbling walls as the first images of a bygone era flicker across the screen.  As the film progresses, the survivors become captivated by the story unfolding before them: a tale of love and loss, of triumph and tragedy, set against the backdrop of a world that has been forever changed. As the reel winds down, the survivors are left with a sense of longing for a time they never knew, yet yearn for in their hearts.  And as the lights come up, they know that they have glimpsed something special, a reminder of a world that was, and perhaps, a blueprint for one that could be.",
  "word count": 172,
  "dialog": [
    {
      "Billy":
        "I loved how the film transported us to a different era. It's amazing how something as simple as a movie can evoke such strong emotions.",
    },
    {
      "Kerry":
        "Totally agree, Billy! I was on the edge of my seat when they were showing the city being destroyed. It was so intense!",
    },
    {
      "Meg":
        "I know what you mean, Billy. The film really made me think about how fragile our world is and how quickly things can change.",
    },
    {
      "Lui":
        "Indeed, Meg. This novel serves as a powerful reminder of the importance of preserving our cultural heritage and learning from the past.",
    },
    {
      "Kerry":
        "Yeah, and I loved how the characters in the film were all trying to make sense of this new world they found themselves in. It was like we were right there with them.",
    },
    {
      "Billy":
        "Exactly! And it's funny because some parts felt so real, like the scenes with the survivors scavenging for food and supplies. It made me realize how easily things can go wrong.",
    },
    {
      "Meg":
        "I think that's what I loved most about this novel - it forced us to confront the possibility of a world gone wrong and the importance of holding on to our humanity.",
    },
    {
      "Lui":
        "Well said, Meg. As educators, we must continue to inspire future generations with stories like this, reminding them of the value of perseverance and hope in the face of adversity.",
    },
    {
      "Kerry":
        "Yeah, and I think it's cool that we got to experience a whole new world through this film. It's like we were able to step into someone else's shoes for a little while.",
    },
    {
      "Billy":
        "I know what you mean, Kerry. It was like our imaginations were sparked, and suddenly we're thinking about the what-ifs of our own world.",
    },
  ],
  "quiz": [
    {
      "question": "What was the main plot of the story?",
      "options": [
        "A group of survivors finding an ancient artifact",
        "A tale of love and loss set against a post-apocalyptic backdrop",
        "The importance of preserving cultural heritage",
        "A blueprint for a new world",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question": "What was Billy's reaction to the film?",
      "options": [
        "He found it boring",
        "It transported him to a different era",
        "He loved how it evoked strong emotions",
        "He didn't care about the film",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question": "What did Meg think about the novel?",
      "options": [
        "She found it too intense",
        "It forced her to confront a world gone wrong",
        "She loved how it showed characters making sense of their new world",
        "She didn't finish reading it",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question": "What did Lui think about the film?",
      "options": [
        "It was too intense for him",
        "It served as a powerful reminder of preserving cultural heritage",
        "He found it boring",
        "It didn't make sense to him",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question": "What did Kerry think about the film?",
      "options": [
        "She loved how it made her feel like she was there with the characters",
        "She found it too boring",
        "It reminded her of a world that could be",
        "She didn't care about the film",
        "None of the above",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Post-Apocalyptic",
    "models": { "main": "llama3", "novel": "llava" },
    "level": "Level_5",
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation":
            "The sentence starts with a subject (S) followed by a verb (V).",
          "usage": [
            "I loved how the film transported us to a different era.",
            "It's amazing how something as simple as a movie can evoke such strong emotions.",
          ],
          "words": [
            {
              "S": [
                "I",
                "it's",
              ],
            },
            {
              "V": [
                "loved",
                "amazing",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation":
            "The sentence starts with a subject (S), followed by a verb (V) and an object (O).",
          "usage": [
            "I was on the edge of my seat when they were showing the city being destroyed.",
            "It made me realize how easily things can go wrong.",
          ],
          "words": [
            {
              "S": [
                "I",
              ],
            },
            {
              "V": [
                "was",
                "made",
              ],
            },
            {
              "O": [
                "the city being destroyed",
                "things",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "The sentence starts with a subject (S), followed by a verb (V) and an object (O) and complement (C).",
          "usage": [
            "As the film progresses, the survivors become captivated by the story unfolding before them: a tale of love and loss, of triumph and tragedy, set against the backdrop of a world that has been forever changed.",
          ],
          "words": [
            {
              "S": [
                "the survivors",
              ],
            },
            {
              "V": [
                "become",
              ],
            },
            {
              "O": [
                "the story",
              ],
            },
            {
              "C": [
                "a tale of love and loss, of triumph and tragedy",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation":
            "The sentence starts with a subject (S), followed by a verb (V) and two objects (O).",
          "usage": [
            "As the reel winds down, the survivors are left with a sense of longing for a time they never knew, yet yearn for in their hearts.",
          ],
          "words": [
            {
              "S": [
                "the survivors",
              ],
            },
            {
              "V": [
                "are left",
              ],
            },
            {
              "O": [
                "a sense of longing",
                "a time they never knew",
              ],
            },
          ],
        },
        {
          "pattern": "S + V",
          "explanation":
            "The sentence starts with a subject (S) followed by a verb (V).",
          "usage": [
            "As educators, we must continue to inspire future generations with stories like this, reminding them of the value of perseverance and hope in the face of adversity.",
          ],
          "words": [
            {
              "S": [
                "As educators",
                "we",
              ],
            },
            {
              "V": [
                "must continue",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "cities",
          "meaning": "large urban centers",
          "usage": [
            "In a desolate future where cities have been reduced to rubble...",
            "The projector groans to life, casting flickering shadows on the crumbling walls...",
          ],
          "pronounce": "/ˈsɪtiz/",
          "example": "The cities were evacuated due to the natural disaster.",
        },
        {
          "class": "Adjective",
          "word": "desolate",
          "meaning": "uninhabited and unpromising",
          "usage": [
            "In a desolate future where cities have been reduced to rubble...",
          ],
          "pronounce": "/dɪˈsoʊtɪl/",
          "example":
            "The desolate landscape stretched out before us, devoid of life.",
        },
        {
          "class": "Adverb",
          "word": "forever",
          "meaning": "in a way that will last forever",
          "usage": [
            "set against the backdrop of a world that has been forever changed.",
          ],
          "pronounce": "/ˈfɔr.əvər/",
          "example":
            "The decision to move was made forever, and we cannot go back.",
        },
        {
          "class": "Verb",
          "word": "press",
          "meaning": "to apply physical force or pressure",
          "usage": [
            "As they huddle in the dimly lit theater, their eyes wide with wonder and hope, they press play.",
          ],
          "pronounce": "/prɛs/",
          "example": "The button needs to be pressed firmly for it to work.",
        },
        {
          "class": "Adjective",
          "word": "dusty",
          "meaning": "covered in or full of dust",
          "usage": [
            "a projector with a dusty reel of film.",
          ],
          "pronounce": "/ˈdʌstɪ/",
          "example": "The dusty bookshelf was covered in cobwebs.",
        },
        {
          "class": "Noun",
          "word": "film",
          "meaning": "photographic material used to create motion pictures",
          "usage": [
            "a projector with a dusty reel of film.",
          ],
          "pronounce": "/fɪlm/",
          "example": "The old film reels were stored in the attic.",
        },
        {
          "class": "Adverb",
          "word": "widely",
          "meaning": "to a great extent or degree",
          "usage": [
            "their eyes wide with wonder and hope, they press play widely.",
          ],
          "pronounce": "/ˈwaɪdli/",
          "example": "The news was received widely across the country.",
        },
        {
          "class": "Adjective",
          "word": "crumbling",
          "meaning": "in a state of decay or disintegration",
          "usage": [
            "casting flickering shadows on the crumbling walls...",
          ],
          "pronounce": "/ˈkrʌmbəlɪŋ/",
          "example": "The old mansion was crumbling into ruin.",
        },
      ],
    },
    "keywords": [
      "apocalyptic",
      "future",
      "survivors",
      "ancient",
      "artifact",
      "projector",
      "film",
      "nostalgia",
      "hope",
      "love",
      "loss",
      "triumph",
    ],
  },
};
export default data;
