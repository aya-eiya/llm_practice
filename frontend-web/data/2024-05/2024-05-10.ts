import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The First Disco",
    "details":
      "On May 10th, 1974, David Mancuso and his team at the Loft in New York City held a party that is widely regarded as the first modern disco event, which set the stage for the disco era that would follow.",
  },
  "date": "2024-05-10",
  "title": "The First Disco",
  "body":
    "It was the year 1974 when a groundbreaking event took place in a small warehouse in New York City. David Mancuso, a visionary DJ and club owner, had a dream to create a space where people could come together and lose themselves in the music. He called it 'The Loft'.  On May 10th, he held a party that would change the course of music history. The attendees were treated to an immersive experience with state-of-the-art sound and light systems. The music was a blend of soul, funk, and R&B, all mixed together in a way that had never been heard before.  As the night went on, something magical happened. The people in the room were transported to another world. They danced, they sang, and they forgot about their worries and woes. The event became known as 'The First Disco', and it set the stage for the disco era that would follow. It was a moment where music, technology, and community came together in perfect harmony.",
  "word count": 165,
  "dialog": [
    {
      "Billy":
        "I loved how the novel captured the essence of the disco era. It's like I was transported back to 1974!",
    },
    {
      "Lui":
        "I must say, I was skeptical at first, but the way the author woven music, technology, and community together was truly remarkable.",
    },
    {
      "Kerry":
        "Dude, the party scene was lit! I mean, who wouldn't want to dance the night away with soulful tunes?",
    },
    {
      "Meg":
        "I adored how the novel highlighted the power of music to bring people together. It's like the author was speaking directly to my soul.",
    },
    {
      "Billy":
        "And can we talk about David Mancuso for a second? The man was a true pioneer in the world of DJing and club culture.",
    },
    {
      "Kerry":
        "Totally! I loved how he created this immersive experience that transported people to another world. That's some crazy cool stuff right there.",
    },
    {
      "Lui":
        "As an educator, it's inspiring to see how music can be used as a tool for social change. The Loft party was more than just a night out – it was a movement.",
    },
    {
      "Meg":
        "I know this might sound weird, but I think the novel would make an amazing musical or movie. Can you imagine the dance scenes?",
    },
    {
      "Kerry":
        "Whoa, that's a great idea! I can totally see it now – flashing lights, spinning records, and people losing themselves in the music.",
    },
    {
      "Lui":
        "Well, if they do make a movie out of this, I hope they don't forget to include the historical context. It's important to remember where we came from.",
    },
    {
      "Billy":
        "Absolutely! The novel did an amazing job of blending history and storytelling. I felt like I was right there in the warehouse with the partygoers.",
    },
  ],
  "quiz": [
    {
      "question":
        "What year did David Mancuso hold a party that would change the course of music history?",
      "options": [
        "1969",
        "1974",
        "1985",
        "1990",
        "2001",
      ],
      "answer": 1,
    },
    {
      "question": "What type of music was played at 'The First Disco' party?",
      "options": [
        "Rock and Roll",
        "Soul, Funk, and R&B",
        "Pop Music",
        "Country Music",
        "Electronic Music",
      ],
      "answer": 1,
    },
    {
      "question":
        "According to the dialogue, what did the author of the novel achieve in terms of capturing the essence of the disco era?",
      "options": [
        "Transported readers to a different time period",
        "Made readers feel bored and disconnected",
        "Captured the exact events as they happened",
        "Brought readers back to 1974",
        "Inspired readers to create their own music",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the name of David Mancuso's club where he held 'The First Disco' party?",
      "options": [
        "Studio 54",
        "The Loft",
        "Disco Heaven",
        "Funky Town",
        "Groovy Night",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did the dialogue suggest was the significance of 'The First Disco' party?",
      "options": [
        "It started a new fashion trend",
        "It brought people together through music",
        "It marked the end of an era in music history",
        "It had no significant impact on music or society",
        "It sparked a global dance craze",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Dance",
    "flavor": "Science",
    "models": { "main": "llama", "novel": "llava" },
    "level": "Level_5",
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation":
            "The basic sentence structure with a subject and verb.",
          "usage": [
            "It was the year 1974 when...",
            "David Mancuso, a visionary...",
          ],
          "words": [
            {
              "S": [
                "It",
                "David Mancuso",
              ],
            },
            {
              "V": [
                "was",
                "had",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation":
            "The sentence structure with a subject, verb, and object.",
          "usage": [
            "On May 10th, he held...",
            "The attendees were treated...",
          ],
          "words": [
            {
              "S": [
                "On",
                "The",
              ],
            },
            {
              "V": [
                "held",
                "were treated",
              ],
            },
            {
              "O": [
                "a party",
                "an immersive experience",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation":
            "The sentence structure with a subject, verb, and two objects.",
          "usage": [
            "The attendees were treated to...",
            "The event became known as...",
          ],
          "words": [
            {
              "S": [
                "The",
              ],
            },
            {
              "V": [
                "were treated",
                "became known",
              ],
            },
            {
              "O": [
                "an immersive experience",
                "The First Disco",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "The sentence structure with a subject, verb, object, and complement.",
          "usage": [
            "The event became known as...",
            "It was a moment...",
          ],
          "words": [
            {
              "S": [
                "The",
              ],
            },
            {
              "V": [
                "became known",
                "was",
              ],
            },
            {
              "O": [
                "an immersive experience",
                "the disco era",
              ],
            },
            {
              "C": [
                "a party",
                "that would follow",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Adverb",
          "word": "groundbreaking",
          "meaning": "of great importance or significance",
          "usage": [
            "When a groundbreaking event took place.",
            "The groundbreaking research has changed our understanding.",
          ],
          "pronounce": "/ˈɡraʊn.dˌbɛtɪŋ/",
          "example":
            "The company's groundbreaking new product has revolutionized the industry.",
        },
        {
          "class": "Noun",
          "word": "visionary",
          "meaning":
            "having a clear and inspiring idea of what will happen in the future",
          "usage": [
            "He is a visionary entrepreneur.",
            "Her vision for the company's future was inspiring.",
          ],
          "pronounce": "/ˌvɪʒənˈæri/ ",
          "example": "The visionary leader has transformed the city's economy.",
        },
        {
          "class": "Verb",
          "word": "create",
          "meaning": "to cause something to exist or happen",
          "usage": [
            "She created a new character in her novel.",
            "He created a beautiful painting.",
          ],
          "pronounce": "/ˈkrɛt/ ",
          "example": "The artist spent years creating his masterpiece.",
        },
        {
          "class": "Adjective",
          "word": "immersive",
          "meaning": "extremely vivid and detailed",
          "usage": [
            "The immersive video game was amazing.",
            "The immersive experience of the play was unforgettable.",
          ],
          "pronounce": "/ɪˈmɛr.sɪv/ ",
          "example":
            "The immersive theater production transported the audience to another world.",
        },
        {
          "class": "Adverb",
          "word": "magical",
          "meaning": "having a special and mysterious power",
          "usage": [
            "It was a magical night.",
            "Her magical touch healed the patient.",
          ],
          "pronounce": "/ˈmædʒɪkəl/ ",
          "example": "The magician's magical tricks left the audience amazed.",
        },
        {
          "class": "Noun",
          "word": "disco",
          "meaning": "a style of music and dance that originated in the 1970s",
          "usage": [
            "I love disco music.",
            "The disco era was a time of great social change.",
          ],
          "pronounce": "/ˈdɪskoʊ/ ",
          "example": "The disco party was a night to remember.",
        },
        {
          "class": "Verb",
          "word": "set",
          "meaning": "to cause something to happen or become established",
          "usage": [
            "The new policy will set the tone for future decisions.",
            "Her leadership style has set an example for others.",
          ],
          "pronounce": "/sɛt/ ",
          "example":
            "The company's innovative product set a new standard in the industry.",
        },
        {
          "class": "Adjective",
          "word": "perfect",
          "meaning": "completely free from fault or error; absolutely so",
          "usage": [
            "Her singing voice was perfect.",
            "The recipe is perfect for this occasion.",
          ],
          "pronounce": "/ˈpɜr.fekt/ ",
          "example": "The couple's love story was a perfect match.",
        },
      ],
    },
    "keywords": [
      "groundbreaking",
      "visionary",
      "immersive",
      "state-of-the-art",
      "magical",
      "disco",
      "era",
      "music",
      "technology",
      "community",
      "harmony",
      "historic",
      "revolutionary",
    ],
  },
};
export default data;
