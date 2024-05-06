import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Premiere of Star Wars",
    "details":
      "The first film in the Star Wars franchise, later subtitled Episode IV: A New Hope, was released on May 24th, 1977.",
  },
  "date": "2024-05-24",
  "title": "Beyond the Stars",
  "body":
    "In a world where the once vibrant cityscapes now lay in ruin, remnants of a society that once thrived are scattered throughout the landscape. The great Star Wars franchise, once the pinnacle of intergalactic entertainment, is now a distant memory for those who survive on the harsh desert planet.In this post-apocalyptic world, a young scavenger named Jax discovers an old holoprojector in an abandoned dome. To his surprise, it contains the original Star Wars film - Episode IV: A New Hope.As Jax watches the film on his makeshift projector, he is transported to a world of adventure, heroes, and villains. He becomes obsessed with recreating the epic battles and daring escapes depicted in the movie. With the help of his friends, Jax sets out on a quest to find the resources needed to repair the holoprojector and bring back the Star Wars franchise.Along the way, they face countless obstacles, including hostile mutants and treacherous desert storms. But as they get closer to their goal, they begin to realize that restoring the franchise is only the beginning of a larger mission - to restore hope and order to a world on the brink of collapse.",
  "word count": 194,
  "dialog": [
    {
      "Billy":
        "I loved how the story took me on a journey to a post-apocalyptic world where people are fighting to restore hope and order. It was so inspiring!",
    },
    {
      "Meg":
        "I completely agree, Billy! The way Jax's obsession with Star Wars helped bring people together and create a sense of community really resonated with me.",
    },
    {
      "Kerry":
        "Yeah, but what really got me pumped up was the action scenes! I loved how Jax and his friends used their skills to overcome obstacles and defeat enemies.",
    },
    {
      "Lui":
        "I think what struck me most was the way the novel explored the importance of preserving our cultural heritage. The Star Wars franchise may seem trivial to some, but it represents a connection to our collective past.",
    },
    {
      "Billy":
        "That's such an important point, Lui! I loved how the story wove together themes of nostalgia, community, and resilience.",
    },
    {
      "Meg":
        "And can we talk about Jax's character development? He starts off as this scrappy survivor but gradually becomes a leader who inspires others to work towards a common goal.",
    },
    {
      "Kerry":
        "Totally! And I loved how the novel didn't shy away from exploring the darker aspects of their world. It added depth and complexity to the story.",
    },
    {
      "Lui":
        "I appreciated how the author balanced action, adventure, and character growth with thought-provoking themes about hope, order, and cultural heritage. It's a true masterpiece!",
    },
    {
      "Billy":
        "I'm so glad we all read this together! It was amazing to see our perspectives intersect and overlap.",
    },
    {
      "Meg":
        "Me too, Billy! Let's do it again sometime and explore more books together.",
    },
  ],
  "quiz": [
    {
      "question": "What is the main plot of the story?",
      "options": [
        "A group of friends try to restore a Star Wars franchise",
        "A young scavenger named Jax finds an old holoprojector",
        "The world is destroyed by a massive storm",
        "Jax and his friends fight against hostile mutants",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question": "What did Billy, Meg, Kerry, and Lui think about the story?",
      "options": [
        "They thought it was too boring",
        "They loved how it took them on a journey to a post-apocalyptic world",
        "They didn't care about the story",
        "They wanted more action scenes",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question": "What did Jax start as and become throughout the novel?",
      "options": [
        "A leader who inspires others to work towards a common goal, then a scrappy survivor",
        "A scrappy survivor, then a leader who inspires others",
        "A hero, then a villain",
        "A villain, then a hero",
        "None of the above",
      ],
      "answer": 0,
    },
    {
      "question": "What theme was emphasized in the novel?",
      "options": [
        "The importance of preserving cultural heritage",
        "The power of friendship and community",
        "The danger of relying on nostalgia",
        "The struggle to restore hope and order",
        "None of the above",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the main obstacle Jax and his friends faced in their quest?",
      "options": [
        "Hostile mutants and treacherous desert storms",
        "Lack of resources and equipment",
        "Betrayal from within their group",
        "The destruction of their home planet",
        "None of the above",
      ],
      "answer": 0,
    },
  ],
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation":
            "The subject is followed by a verb, describing an action or state.",
          "usage": [
            "In a world where...",
            "The great Star Wars franchise...",
          ],
          "words": [
            {
              "S": [
                "world",
                "cityscapes",
                "Star Wars franchise",
              ],
            },
            {
              "V": [
                "lay in ruin",
                "thrive",
                "survive",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation":
            "The subject is followed by a verb and a complement, describing an action or state with additional details.",
          "usage": [
            "As Jax watches...",
            "With the help of...",
          ],
          "words": [
            {
              "S": [
                "Jax",
                "Star Wars franchise",
              ],
            },
            {
              "V": [
                "watches",
                "help",
              ],
            },
            {
              "C": [
                "the film on his makeshift projector",
                "find the resources needed",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation":
            "The subject is followed by a verb and an object, describing an action or state with an affected entity.",
          "usage": [
            "He becomes obsessed...",
            "I loved how...",
          ],
          "words": [
            {
              "S": [
                "Jax",
                "I",
              ],
            },
            {
              "V": [
                "becomes obsessed",
                "loved",
              ],
            },
            {
              "O": [
                "recreating the epic battles",
                "restoring hope and order",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation":
            "The subject is followed by a verb, two objects, describing an action or state with multiple affected entities.",
          "usage": [
            "With the help of...",
            "But as they get...",
          ],
          "words": [
            {
              "S": [
                "Jax",
                "they",
              ],
            },
            {
              "V": [
                "help",
                "get",
              ],
            },
            {
              "O": [
                "his friends",
                "closer to their goal",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "The subject is followed by a verb, an object, and a complement, describing an action or state with additional details.",
          "usage": [
            "Along the way...",
            "But as they get...",
          ],
          "words": [
            {
              "S": [
                "Jax",
                "they",
              ],
            },
            {
              "V": [
                "sets out",
                "get",
              ],
            },
            {
              "O": [
                "on a quest",
                "closer to their goal",
              ],
            },
            {
              "C": [
                "to find the resources needed",
                "to restore hope and order",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "cityscapes",
          "meaning": "the physical appearance of a city",
          "usage": [
            "The once vibrant cityscapes now lay in ruin.",
          ],
          "pronounce": "/sɪˈtɪskoʊpiːz/",
          "example":
            "The new skyscraper transformed the cityscapes of downtown.",
        },
        {
          "class": "Noun",
          "word": "franchise",
          "meaning": "a series of related businesses or organizations",
          "usage": [
            "The great Star Wars franchise, once the pinnacle of intergalactic entertainment.",
          ],
          "pronounce": "/ˈfrænˌtʃiːz/",
          "example": "The company expanded its franchise to new countries.",
        },
        {
          "class": "Adjective",
          "word": "post-apocalyptic",
          "meaning": "occurring or existing after a catastrophic event",
          "usage": [
            "In this post-apocalyptic world, a young scavenger named Jax discovers an old holoprojector.",
          ],
          "pronounce": "/ˌpɒst əˈpæptɪkʊlɪs/",
          "example": "The movie depicted a post-apocalyptic wasteland.",
        },
        {
          "class": "Proper Noun",
          "word": "Star Wars",
          "meaning": "a series of science fiction films and other media",
          "usage": [
            "The great Star Wars franchise, once the pinnacle of intergalactic entertainment.",
          ],
          "pronounce": "/ˈstɑr wərz/",
          "example": "I'm a huge fan of the Star Wars saga.",
        },
        {
          "class": "Proper Noun",
          "word": "Jax",
          "meaning": "a character in the passage, a young scavenger",
          "usage": [
            "In this post-apocalyptic world, a young scavenger named Jax discovers an old holoprojector.",
          ],
          "pronounce": "/dʒæks/",
          "example": "Jax was the leader of the group.",
        },
        {
          "class": "Noun",
          "word": "holoprojector",
          "meaning": "a device that projects three-dimensional images",
          "usage": [
            "In this post-apocalyptic world, a young scavenger named Jax discovers an old holoprojector.",
          ],
          "pronounce": "/hɒloʊˌproʊdʒˈeksɪtər/",
          "example":
            "The scientists used a holoprojector to display the new technology.",
        },
        {
          "class": "Adverb",
          "word": "obsessed",
          "meaning":
            "having a strong and often excessive interest in something",
          "usage": [
            "As Jax watches the film on his makeshift projector, he becomes obsessed with recreating the epic battles.",
          ],
          "pronounce": "/əˈbɛsɪst/",
          "example": "He was obsessed with playing video games.",
        },
        {
          "class": "Adjective",
          "word": "harsh",
          "meaning": "severe or unforgiving",
          "usage": [
            "the harsh desert planet.",
          ],
          "pronounce": "/hɑːrʃ/",
          "example":
            "The harsh weather conditions made it difficult to survive.",
        },
      ],
    },
    "keywords": [
      "post-apocalyptic",
      "starwars",
      "holoprojector",
      "scavenger",
      "desertplanet",
      "adventure",
      "heroes",
      "villains",
      "quest",
      "obstacles",
      "mutants",
      "storms",
      "restoration",
      "hope",
      "order",
    ],
  },
};
export default data;
