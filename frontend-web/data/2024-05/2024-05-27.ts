import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Bob Dylan Goes Electric",
    "details":
      "On May 27th, 1965, Bob Dylan performed at the Newport Folk Festival, one of the most important events in music history. Dylan had previously been known for his acoustic folk songs, but at this festival, he performed with an electric band, which caused a great deal of controversy among the folk purists in the audience. Dylan's performance marked a turning point in his career and in the history of folk music.",
  },
  "date": "2024-05-27",
  "title": "The Electric Nightmare",
  "body":
    "In the dim recesses of an abandoned barn, the air crackled with an eerie silence. Dust motes danced in the feeble moonlight that filtered through the cracks in the crumbling walls. Suddenly, a surge of electricity coursed through the barn, illuminating the grotesque figure of a man. His skin was pale and translucent, his eyes glowing an unnatural red. In his hands, he held a guitar, its strings trembling as if they were alive.The man began to play, his fingers dancing over the strings with an otherworldly speed. The notes that emerged were not music, but a cacophony of discordant wails that tore through the night. As he played, the barn began to tremble, its walls groaning and creaking like an ancient beast.Outside, the once-peaceful night sky turned a sickly shade of green. The wind howled like a banshee, carrying with it the sound of the man's macabre symphony. The barn became a vortex of pure terror, its inhabitants frozen in a nightmare that seemed to have no end.",
  "word count": 169,
  "dialog": [
    {
      "Kerry":
        "Wow, that story was creepy! I couldn't believe how the barn started to shake and groan.",
    },
    {
      "Billy": "I know, right? It was like something out of a horror movie.",
    },
    {
      "Meg":
        "I loved the part where the man's eyes glowed red. It was so eerie.",
    },
    {
      "Lui":
        "The author did a great job of creating a sense of atmosphere. I could really feel the tension and suspense.",
    },
    {
      "Billy":
        "I wonder what the man's guitar was made of. It sounded like it was made of bone or something.",
    },
    {
      "Kerry":
        "Maybe it was a magic guitar. Like the one in the movie 'The Last Unicorn'.",
    },
    {
      "Meg":
        "I think it was just a normal guitar, but the man was playing it with such power that it made it sound like it was made of something else.",
    },
    {
      "Lui":
        "Whatever it was, it was definitely a powerful instrument. It was able to control the weather and everything.",
    },
    {
      "Kerry": "I wonder what happened to the man after the story ended.",
    },
    {
      "Billy": "I think he just disappeared. Into the night.",
    },
  ],
  "quiz": [
    {
      "question": "What was the setting of the story?",
      "options": [
        "A haunted house",
        "An abandoned barn",
        "A dark forest",
        "A graveyard",
        "A hospital",
      ],
      "answer": 1,
    },
    {
      "question": "What color did the man's eyes glow?",
      "options": [
        "Blue",
        "Green",
        "Red",
        "Yellow",
        "Purple",
      ],
      "answer": 2,
    },
    {
      "question": "What sound did the man's music make?",
      "options": [
        "Beautiful melodies",
        "Discordant wails",
        "Uplifting anthems",
        "Calming lullabies",
        "Energetic dance music",
      ],
      "answer": 1,
    },
    {
      "question": "What happened to the barn as the man played?",
      "options": [
        "It collapsed",
        "It caught fire",
        "It started to shake and groan",
        "It turned into a giant monster",
        "It became invisible",
      ],
      "answer": 2,
    },
    {
      "question":
        "What do you think happened to the man at the end of the story?",
      "options": [
        "He was captured by the police",
        "He was killed by a ghost",
        "He disappeared into the night",
        "He was arrested for disturbing the peace",
        "He became a famous musician",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Music",
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
          "explanation": "Subject + Verb, no objects or complements.",
          "usage": [
            "In the dim recesses of an abandoned barn, the air crackled with an eerie silence.",
            "Dust motes danced in the feeble moonlight that filtered through the cracks in the crumbling walls.",
            "Wow, that story was creepy!",
            "I couldn't believe how the barn started to shake and groan.",
          ],
          "words": [
            {
              "S": [
                "air",
                "dust motes",
              ],
            },
            {
              "V": [
                "crackled",
                "danced",
              ],
            },
            {
              "C": [],
            },
            {
              "O": [],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation": "Subject + Verb + Object, no complements.",
          "usage": [
            "Suddenly, a surge of electricity coursed through the barn, illuminating the grotesque figure of a man.",
            "His skin was pale and translucent, his eyes glowing an unnatural red.",
            "He held a guitar in his hands, its strings trembling as if they were alive.",
            "The notes that emerged were not music, but a cacophony of discordant wails that tore through the night.",
          ],
          "words": [
            {
              "S": [
                "surge",
                "he",
                "man",
                "notes",
              ],
            },
            {
              "V": [
                "coursed",
                "was",
                "held",
                "emerged",
              ],
            },
            {
              "O": [
                "figure",
                "skin",
                "guitar",
                "wails",
              ],
            },
            {
              "C": [],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation": "Subject + Verb + Object + Object, no complements.",
          "usage": [
            "As he played, the barn began to tremble, its walls groaning and creaking like an ancient beast.",
            "Outside, the once-peaceful night sky turned a sickly shade of green.",
          ],
          "words": [
            {
              "S": [
                "he",
                "night sky",
              ],
            },
            {
              "V": [
                "played",
                "turned",
              ],
            },
            {
              "O": [
                "barn",
                "shade",
              ],
            },
            {
              "C": [],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation": "Subject + Verb + Complement, no objects.",
          "usage": [
            "The wind howled like a banshee, carrying with it the sound of the man's macabre symphony.",
            "The barn became a vortex of pure terror, its inhabitants frozen in a nightmare that seemed to have no end.",
          ],
          "words": [
            {
              "S": [
                "wind",
                "barn",
              ],
            },
            {
              "V": [
                "howled",
                "became",
              ],
            },
            {
              "O": [],
            },
            {
              "C": [
                "like a banshee",
                "a vortex of pure terror",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation": "Subject + Verb + Object + Complement, no objects.",
          "usage": [
            "I know, right?",
            "It was like something out of a horror movie.",
            "It sounded like it was made of bone or something.",
            "It was able to control the weather and everything.",
            "It was just a normal guitar, but the man was playing it with such power that it made it sound like it was made of something else.",
          ],
          "words": [
            {
              "S": [
                "I",
                "it",
                "sound",
                "guitar",
                "it",
              ],
            },
            {
              "V": [
                "know",
                "was",
                "sounded",
                "was able",
                "it",
              ],
            },
            {
              "O": [],
            },
            {
              "C": [
                "like something out of a horror movie",
                "like it was made of bone or something",
                "to control the weather and everything",
                "just a normal guitar",
                "with such power",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "recesses",
          "meaning": "a secluded or hidden place",
          "usage": [],
          "pronounce": "rɪˈsɛsɪz",
          "example":
            "The team retreated to the recesses of the forest to regroup.",
        },
        {
          "class": "Noun",
          "word": "mote",
          "meaning": "a tiny speck of dust or other matter",
          "usage": [
            "Dust motes danced in the feeble moonlight that filtered through the cracks in the crumbling walls.",
          ],
          "pronounce": "moʊt",
          "example": "Motes of pollen floated in the air.",
        },
        {
          "class": "Adjective",
          "word": "feeble",
          "meaning": "weak or lacking in strength",
          "usage": [
            "Dust motes danced in the feeble moonlight that filtered through the cracks in the crumbling walls.",
          ],
          "pronounce": "ˈfiːbəl",
          "example":
            "The old man's feeble attempts to walk were heartbreaking.",
        },
        {
          "class": "Noun",
          "word": "surge",
          "meaning": "a sudden increase or rush of something",
          "usage": [
            "Suddenly, a surge of electricity coursed through the barn, illuminating the grotesque figure of a man.",
          ],
          "pronounce": "sɜːrdʒ",
          "example":
            "A surge of adrenaline coursed through his body when he saw the danger.",
        },
        {
          "class": "Adjective",
          "word": "grotesque",
          "meaning": "causing a sense of horror or revulsion",
          "usage": [
            "Suddenly, a surge of electricity coursed through the barn, illuminating the grotesque figure of a man.",
          ],
          "pronounce": "ɡroʊˈtɛsk",
          "example":
            "The grotesque creature had sharp claws and glowing red eyes.",
        },
        {
          "class": "Noun",
          "word": "cacophony",
          "meaning": "a harsh or discordant mixture of sounds",
          "usage": [
            "The notes that emerged were not music, but a cacophony of discordant wails that tore through the night.",
          ],
          "pronounce": "kəˈkɑːfəni",
          "example": "The cacophony of car horns made it difficult to think.",
        },
        {
          "class": "Noun",
          "word": "vortex",
          "meaning":
            "a swirling mass of water or air, especially a whirlpool or tornado",
          "usage": [
            "The barn became a vortex of pure terror, its inhabitants frozen in a nightmare that seemed to have no end.",
          ],
          "pronounce": "ˈvɔːrtɛks",
          "example":
            "The tornado created a vortex that lifted houses into the air.",
        },
        {
          "class": "Noun",
          "word": "banshee",
          "meaning":
            "a female spirit in Irish folklore that wails before a death",
          "usage": [
            "The wind howled like a banshee, carrying with it the sound of the man's macabre symphony.",
          ],
          "pronounce": "ˈbænʃiː",
          "example": "The banshee's wail pierced the night air.",
        },
      ],
    },
    "keywords": [
      "eerie",
      "grotesque",
      "unnatural",
      "discordant",
      "banshee",
      "macabre",
      "vortex",
      "terror",
      "nightmare",
      "supernatural",
      "otherworldly",
      "haunting",
    ],
  },
};
export default data;
