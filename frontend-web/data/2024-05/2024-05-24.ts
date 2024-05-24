import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Dedication of the Flatiron Building",
    "details":
      "The Flatiron Building, one of the first skyscrapers in New York City, was dedicated on May 24, 1902. The triangular-shaped building was designed by architect Daniel Burnham and is a landmark of the city's Flatiron District.",
  },
  "date": "2024-05-24",
  "title": "The Flatiron Dimension",
  "body":
    "In the heart of the bustling metropolis, where skyscrapers pierce the heavens, there stood the Flatiron Building. But beneath its iconic facade lay a hidden portal, a gateway to a realm of cosmic wonders.  One fateful night, a group of daring explorers stumbled upon the secret, their hearts pounding with anticipation. As they stepped through the portal, they were transported to a dimension beyond comprehension. Floating islands dotted the iridescent sky, and radiant energies danced through the void.  They encountered enigmatic beings from distant galaxies, creatures of light and shadow, and witnessed the birth and death of stars. Time seemed to warp and fold upon itself as they navigated through this ethereal realm.  But their journey was not without peril. Dark forces lurked in the depths, seeking to devour the explorers' souls. With courage and ingenuity, they faced these cosmic threats, their bond unyielding.  In the end, they emerged from the Flatiron Dimension forever changed, carrying the secrets and wonders of that extraordinary realm within their hearts.",
  "word count": 167,
  "dialog": [
    {
      "Meg":
        "Wow! I've never read anything like this before. It's like a blend of 'Doctor Who' and 'The Hitchhiker's Guide to the Galaxy'.",
    },
    {
      "Billy":
        "I know, right? I loved the part where they encountered the enigmatic beings from distant galaxies. It was like something out of 'Star Trek'.",
    },
    {
      "Kerry":
        "Yeah, but I wish there was more action. I mean, it was cool exploring the Flatiron Dimension, but I wanted to see the explorers really battling some cosmic threats.",
    },
    {
      "Lui":
        "Well, you have to remember, Kerry, that this is a work of fiction. The author is not trying to write a war story. They're trying to create a sense of wonder and exploration.",
    },
    {
      "Meg":
        "I agree with Mr. Lui. I think the author did a great job of capturing the sense of awe and mystery that comes with exploring the unknown.",
    },
    {
      "Billy":
        "Yeah, it's like when you're looking up at the stars at night. You can't help but wonder what's out there, and what kind of amazing things are waiting to be discovered.",
    },
    {
      "Kerry":
        "I guess you're right. It's just that I'm always up for a good adventure, and this book didn't quite scratch that itch for me.",
    },
    {
      "Lui":
        "That's okay, Kerry. Not every book is going to be to your taste. But I'm glad you gave it a try. And who knows, maybe one day you'll write your own adventure story.",
    },
  ],
  "quiz": [
    {
      "question": "What is the setting of the story?",
      "options": [
        "A bustling metropolis",
        "A hidden portal",
        "A distant galaxy",
        "A floating island",
        "A dark dimension",
      ],
      "answer": 0,
    },
    {
      "question": "What do the explorers encounter in the Flatiron Dimension?",
      "options": [
        "Enigmatic beings",
        "Cosmic threats",
        "Birth and death of stars",
        "All of the above",
        "None of the above",
      ],
      "answer": 3,
    },
    {
      "question": "What do Meg and Billy agree on about the story?",
      "options": [
        "It's a blend of 'Doctor Who' and 'The Hitchhiker's Guide to the Galaxy'.",
        "There should be more action.",
        "It captures the sense of awe and mystery.",
        "It's not to Kerry's taste.",
        "It's not well-written.",
      ],
      "answer": 2,
    },
    {
      "question": "Why doesn't Kerry like the story?",
      "options": [
        "It's too boring.",
        "It's too confusing.",
        "It doesn't have enough action.",
        "It's too predictable.",
        "It's too long.",
      ],
      "answer": 2,
    },
    {
      "question": "What does Lui suggest to Kerry?",
      "options": [
        "To write his own adventure story.",
        "To try reading a different book.",
        "To give the story another chance.",
        "To watch a movie instead.",
        "To play a video game.",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Science Fiction",
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
          "explanation": "The subject performs the verb.",
          "usage": [
            "In the heart of the bustling metropolis, where skyscrapers pierce the heavens, there stood the Flatiron Building.",
          ],
          "words": [
            {
              "S": [
                "In the heart of the bustling metropolis, where skyscrapers pierce the heavens",
              ],
            },
            {
              "V": [
                "stood",
              ],
            },
            {
              "O": [
                "the Flatiron Building",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation":
            "The subject performs the verb and is complemented by the complement.",
          "usage": [
            "But beneath its iconic facade lay a hidden portal, a gateway to a realm of cosmic wonders.",
          ],
          "words": [
            {
              "S": [
                "But beneath its iconic facade",
              ],
            },
            {
              "V": [
                "lay",
              ],
            },
            {
              "C": [
                "a hidden portal, a gateway to a realm of cosmic wonders",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation":
            "The subject performs the verb and acts upon the object.",
          "usage": [
            "One fateful night, a group of daring explorers stumbled upon the secret, their hearts pounding with anticipation.",
          ],
          "words": [
            {
              "S": [
                "One fateful night, a group of daring explorers",
              ],
            },
            {
              "V": [
                "stumbled upon",
              ],
            },
            {
              "O": [
                "the secret",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation":
            "The subject performs the verb and acts upon two objects.",
          "usage": [
            "Floating islands dotted the iridescent sky, and radiant energies danced through the void.",
          ],
          "words": [
            {
              "S": [
                "Floating islands",
              ],
            },
            {
              "V": [
                "dotted",
              ],
            },
            {
              "O": [
                "the iridescent sky",
              ],
            },
            {
              "O": [
                "radiant energies",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "The subject performs the verb, acts upon the object, and is complemented by the complement.",
          "usage": [
            "They encountered enigmatic beings from distant galaxies, creatures of light and shadow, and witnessed the birth and death of stars.",
          ],
          "words": [
            {
              "S": [
                "They",
              ],
            },
            {
              "V": [
                "encountered",
              ],
            },
            {
              "O": [
                "enigmatic beings from distant galaxies, creatures of light and shadow",
              ],
            },
            {
              "C": [
                "and witnessed the birth and death of stars",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "metropolis",
          "meaning": "a large and busy city",
          "usage": [
            "In the heart of the bustling metropolis, where skyscrapers pierce the heavens, there stood the Flatiron Building.",
            "They stumbled upon the secret amidst the towering skyscrapers and bustling crowds of the metropolis.",
          ],
          "pronounce": "/məˈtrɑːpəlɪs/",
          "example":
            "The vibrant metropolis was a hub of commerce and culture.",
        },
        {
          "class": "Noun",
          "word": "facade",
          "meaning": "the front of a building",
          "usage": [
            "But beneath its iconic facade lay a hidden portal, a gateway to a realm of cosmic wonders.",
          ],
          "pronounce": "/fəˈsɑːd/",
          "example":
            "The crumbling facade of the old mansion hinted at its long history.",
        },
        {
          "class": "Noun",
          "word": "portal",
          "meaning": "a doorway or gate",
          "usage": [
            "Beneath its iconic facade lay a hidden portal, a gateway to a realm of cosmic wonders.",
            "They stumbled upon the secret, their hearts pounding with anticipation as they approached the ancient portal.",
          ],
          "pronounce": "/ˈpɔːrtəl/",
          "example":
            "The portal shimmered with otherworldly energy, inviting them to step into the unknown.",
        },
        {
          "class": "Noun",
          "word": "dimension",
          "meaning": "a realm of existence",
          "usage": [
            "As they stepped through the portal, they were transported to a dimension beyond comprehension.",
          ],
          "pronounce": "/dɪˈmɛnʃən/",
          "example":
            "They found themselves transported to a parallel dimension where the laws of physics were different.",
        },
        {
          "class": "Adjective",
          "word": "ethereal",
          "meaning": "not of this world",
          "usage": [
            "They navigated through this ethereal realm, where time seemed to warp and fold upon itself.",
          ],
          "pronounce": "/ɪˈθɪəriəl/",
          "example": "The ethereal beauty of the forest enchanted them.",
        },
        {
          "class": "Noun",
          "word": "peril",
          "meaning": "danger",
          "usage": [
            "But their journey was not without peril. Dark forces lurked in the depths, seeking to devour the explorers' souls.",
          ],
          "pronounce": "/ˈpɛrəl/",
          "example":
            "They braved the perils of the stormy seas in search of adventure.",
        },
        {
          "class": "Noun",
          "word": "bond",
          "meaning": "a connection or tie",
          "usage": [
            "With courage and ingenuity, they faced these cosmic threats, their bond unyielding.",
          ],
          "pronounce": "/bɑːnd/",
          "example":
            "The strong bond between the siblings kept them close throughout life.",
        },
        {
          "class": "Noun",
          "word": "realm",
          "meaning": "a kingdom or domain",
          "usage": [
            "They emerged from the Flatiron Dimension forever changed, carrying the secrets and wonders of that extraordinary realm within their hearts.",
          ],
          "pronounce": "/relm/",
          "example":
            "The realm of imagination is a boundless place where anything is possible.",
        },
      ],
    },
    "keywords": [
      "Flatiron Building",
      "Hidden portal",
      "Cosmic wonders",
      "Floating islands",
      "Radiant energies",
      "Enigmatic beings",
      "Birth and death of stars",
      "Time warp",
      "Dark forces",
      "Cosmic threats",
      "Courage and ingenuity",
      "Secrets and wonders",
    ],
  },
};
export default data;
