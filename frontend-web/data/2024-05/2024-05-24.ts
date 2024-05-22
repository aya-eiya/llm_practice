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
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation":
            "Contains a subject and a verb, but no object or complement.",
          "usage": [
            "In the heart of the bustling metropolis, where skyscrapers pierce the heavens, there stood the Flatiron Building.",
            "But beneath its iconic facade lay a hidden portal, a gateway to a realm of cosmic wonders.",
            "Time seemed to warp and fold upon itself as they navigated through this ethereal realm.",
            "I've never read anything like this before.",
          ],
          "words": [
            {
              "S": [
                "skyscrapers",
                "portal",
                "Time",
                "I",
              ],
            },
            {
              "V": [
                "stood",
                "lay",
                "seemed to warp and fold",
                "navigated",
                "read",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation":
            "Contains a subject, a verb, and a complement, but no object.",
          "usage": [
            "One fateful night, a group of daring explorers stumbled upon the secret, their hearts pounding with anticipation.",
            "Floating islands dotted the iridescent sky, and radiant energies danced through the void.",
            "Dark forces lurked in the depths, seeking to devour the explorers' souls.",
            "It's like a blend of 'Doctor Who' and 'The Hitchhiker's Guide to the Galaxy'.",
          ],
          "words": [
            {
              "S": [
                "explorers",
                "islands",
                "forces",
                "It",
              ],
            },
            {
              "V": [
                "stumbled",
                "dotted",
                "danced",
                "lurked",
                "is",
              ],
            },
            {
              "C": [
                "with anticipation",
                "through the void",
                "in the depths",
                "a blend of 'Doctor Who' and 'The Hitchhiker's Guide to the Galaxy'",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation":
            "Contains a subject, a verb, and an object, but no complement.",
          "usage": [
            "They encountered enigmatic beings from distant galaxies, creatures of light and shadow, and witnessed the birth and death of stars.",
            "With courage and ingenuity, they faced these cosmic threats, their bond unyielding.",
            "In the end, they emerged from the Flatiron Dimension forever changed, carrying the secrets and wonders of that extraordinary realm within their hearts.",
            "I loved the part where they encountered the enigmatic beings from distant galaxies.",
          ],
          "words": [
            {
              "S": [
                "They",
                "They",
                "They",
                "I",
              ],
            },
            {
              "V": [
                "encountered",
                "faced",
                "emerged",
                "carrying",
                "loved",
              ],
            },
            {
              "O": [
                "enigmatic beings from distant galaxies, creatures of light and shadow, and witnessed the birth and death of stars",
                "these cosmic threats",
                "the secrets and wonders of that extraordinary realm within their hearts",
                "the part where they encountered the enigmatic beings from distant galaxies",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation": "Contains a subject, a verb, and two objects.",
          "usage": [],
          "words": [],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "Contains a subject, a verb, an object, and a complement.",
          "usage": [
            "Well, you have to remember, Kerry, that this is a work of fiction.",
            "The author is not trying to write a war story.",
            "They're trying to create a sense of wonder and exploration.",
            "I agree with Mr.",
            "I think the author did a great job of capturing the sense of awe and mystery that comes with exploring the unknown.",
            "Yeah, it's like when you're looking up at the stars at night.",
            "You can't help but wonder what's out there, and what kind of amazing things are waiting to be discovered.",
          ],
          "words": [
            {
              "S": [
                "you",
                "Kerry",
                "the author",
                "They",
                "I",
                "I",
                "you",
              ],
            },
            {
              "V": [
                "have to remember",
                "is not trying to write",
                "are trying to create",
                "agree",
                "think",
                "did a great job of capturing",
                "can't help but wonder",
              ],
            },
            {
              "O": [
                "this is a work of fiction",
                "a war story",
                "a sense of wonder and exploration",
                "Mr.",
                "the sense of awe and mystery that comes with exploring the unknown",
                "what's out there",
                "what kind of amazing things are waiting to be discovered",
              ],
            },
            {
              "C": [
                "that this is a work of fiction",
                "you have to remember",
                "Kerry",
                "with Mr",
                "at night",
                "and what kind of amazing things are waiting to be discovered",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "metropolis",
          "meaning": "A large, densely populated city",
          "usage": [
            "In the heart of the bustling metropolis, where skyscrapers pierce the heavens, there stood the Flatiron Building.",
          ],
          "pronounce": "/məˈtrɑːpəlɪs/",
          "example": "The metropolis was a bustling hub of activity.",
        },
        {
          "class": "Noun",
          "word": "facade",
          "meaning": "The front of a building, especially the main entrance",
          "usage": [
            "But beneath its iconic facade lay a hidden portal, a gateway to a realm of cosmic wonders.",
          ],
          "pronounce": "/fəˈsɑːd/",
          "example":
            "The facade of the building was adorned with intricate carvings.",
        },
        {
          "class": "Noun",
          "word": "portal",
          "meaning":
            "A gateway or entrance, especially to another world or realm",
          "usage": [
            "But beneath its iconic facade lay a hidden portal, a gateway to a realm of cosmic wonders.",
          ],
          "pronounce": "/ˈpɔːrtl/",
          "example": "The portal led to a world of endless possibilities.",
        },
        {
          "class": "Noun",
          "word": "realm",
          "meaning": "A kingdom, domain, or sphere of activity",
          "usage": [
            "But beneath its iconic facade lay a hidden portal, a gateway to a realm of cosmic wonders.",
          ],
          "pronounce": "/relm/",
          "example": "The realm of imagination is vast and limitless.",
        },
        {
          "class": "Noun",
          "word": "dimension",
          "meaning": "A particular level of existence or reality",
          "usage": [
            "As they stepped through the portal, they were transported to a dimension beyond comprehension.",
          ],
          "pronounce": "/dəˈmɛnʃən/",
          "example": "The dimension of time is often difficult to comprehend.",
        },
        {
          "class": "Noun",
          "word": "void",
          "meaning": "An empty space or area",
          "usage": [
            "Floating islands dotted the iridescent sky, and radiant energies danced through the void.",
          ],
          "pronounce": "/vɔɪd/",
          "example": "The void of space is vast and mysterious.",
        },
        {
          "class": "Noun",
          "word": "threat",
          "meaning": "A danger or risk",
          "usage": [
            "But their journey was not without peril. Dark forces lurked in the depths, seeking to devour the explorers' souls.",
          ],
          "pronounce": "/θrɛt/",
          "example": "The threat of war loomed over the region.",
        },
        {
          "class": "Noun",
          "word": "secrets",
          "meaning": "Something kept hidden from others",
          "usage": [
            "In the end, they emerged from the Flatiron Dimension forever changed, carrying the secrets and wonders of that extraordinary realm within their hearts.",
          ],
          "pronounce": "/ˈsiːkrɪts/",
          "example": "The secrets of the universe are still a mystery to us.",
        },
      ],
    },
    "keywords": [
      "Flatiron Building",
      "Hidden portal",
      "Cosmic wonders",
      "Daring explorers",
      "Floating islands",
      "Radiant energies",
      "Enigmatic beings",
      "Time warp",
      "Dark forces",
      "Courage and ingenuity",
      "Unbreakable bond",
      "Altered perspectives",
    ],
  },
};
export default data;
