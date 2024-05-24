import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Treaty of Westphalia",
    "details":
      "The Treaty of Westphalia was a series of peace treaties signed on May 17, 1648, that ended the Thirty Years' War in Europe.",
  },
  "date": "2024-05-17",
  "title": "The Treaty of Westphalia",
  "body":
    "In the midst of a brutal war that had been raging for decades, a group of powerful rulers gathered in the small town of Munster to negotiate a peace treaty. The Thirty Years' War had left countless lives and cities in ruins, and it was clear to all that something needed to be done to end the bloodshed.  As the negotiations dragged on for weeks, tensions between the various parties threatened to derail the entire process. But eventually, a compromise was reached: the Treaty of Westphalia. It was a complex set of agreements that recognized the sovereignt of each party and established the boundaries of their territories.  The treaty was signed on May 17, 1648, and it marked the end of the Thirty Years' War. But as the rulers returned to their respective lands, they couldn't shake the feeling that the peace was only temporary - that another war might be inevitable in the future.  As it turned out, they were right. The Treaty of Westphalia did little to quell the simmering tensions between the various parties, and within a few years, another conflict broke out. But for now, at least, there was peace in Europe.",
  "word count": 196,
  "dialog": [
    {
      "Billy":
        "I never thought I'd say this about a war, but the Treaty of Westphalia seems like a pretty good idea. It's not perfect, but it's a start.",
    },
    {
      "Kerry":
        "Yeah, and think about all the wars that will be avoided because of this treaty! We can finally have some peace in Europe.",
    },
    {
      "Meg":
        "I'm so glad we got to learn about this in class. It's amazing how one little treaty can change the course of history.",
    },
    {
      "Lui":
        "Indeed it is, Meg. The Treaty of Westphalia marks a significant turning point in European history. But we must also remember that peace is not just the absence of war, but the presence of justice and equality.",
    },
    {
      "Billy":
        "I never thought I'd agree with Mr. Lui on anything, but he's right. We can't just stop at ending wars; we have to work towards creating a more just society.",
    },
    {
      "Kerry":
        "That's deep, Billy! But don't you think it's a bit too idealistic? I mean, humans will always find ways to fight and argue.",
    },
    {
      "Meg":
        "But what if we could create a world where people actually cared about each other? Where we worked together instead of against each other?",
    },
    {
      "Lui":
        "Ah, Meg, you're thinking like an idealist indeed. But I think that's exactly what we need more of - idealists who dream of a better world and work towards making it happen.",
    },
  ],
  "quiz": [
    {
      "question": "When was the Treaty of Westphalia signed?",
      "options": [
        "May 15, 1648",
        "May 17, 1648",
        "June 1, 1648",
        "July 10, 1648",
        "August 20, 1648",
      ],
      "answer": 1,
    },
    {
      "question": "What was the main outcome of the Treaty of Westphalia?",
      "options": [
        "The end of the Thirty Years' War",
        "The rise of a new European power",
        "The division of Europe into smaller territories",
        "The establishment of a European union",
        "The recognition of the sovereignty of each party",
      ],
      "answer": 4,
    },
    {
      "question": "According to Billy, what is the Treaty of Westphalia?",
      "options": [
        "A bad idea that will lead to more wars",
        "A good start towards creating a more just society",
        "A complex set of agreements that recognized the sovereignty of each party",
        "A useless treaty that did nothing for Europe",
        "A war-mongering treaty",
      ],
      "answer": 2,
    },
    {
      "question": "What is Lui's opinion on the Treaty of Westphalia?",
      "options": [
        "It's a temporary solution to a deeper problem",
        "It's a perfect solution that will never be questioned",
        "It's a significant turning point in European history",
        "It's a failure that will lead to more wars",
        "It's not important at all",
      ],
      "answer": 2,
    },
    {
      "question": "What does Meg think the Treaty of Westphalia represents?",
      "options": [
        "A symbol of European domination over other continents",
        "A turning point in world history",
        "A start towards creating a more just society",
        "A useless agreement that did nothing for anyone",
        "A way to avoid future wars",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Society",
    "flavor": "Mystery",
    "models": { "main": "llama3", "novel": "llava" },
    "level": "Level_5",
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation": "Simple statement with a subject and verb.",
          "usage": [
            "In the midst of a brutal war that had been raging for decades, a group of powerful rulers gathered in the small town of Munster to negotiate a peace treaty.",
          ],
          "words": [
            {
              "S": [
                "a group of powerful rulers",
              ],
            },
            {
              "V": [
                "gathered",
                "negotiate",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation": "Statement with a subject, verb, and complement.",
          "usage": [
            "The Treaty of Westphalia marks a significant turning point in European history.",
          ],
          "words": [
            {
              "S": [
                "The Treaty of Westphalia",
              ],
            },
            {
              "V": [
                "marks",
                "turning",
              ],
            },
            {
              "C": [
                "a significant turning point in European history",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation": "Statement with a subject, verb, and object.",
          "usage": [
            "The Thirty Years' War had left countless lives and cities in ruins.",
          ],
          "words": [
            {
              "S": [
                "The Thirty Years' War",
              ],
            },
            {
              "V": [
                "had left",
              ],
            },
            {
              "O": [
                "countless lives",
                "cities in ruins",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation": "Statement with a subject, verb, and two objects.",
          "usage": [
            "It was signed on May 17, 1648, and it marked the end of the Thirty Years' War.",
          ],
          "words": [
            {
              "S": [
                "It",
              ],
            },
            {
              "V": [
                "was",
                "marked",
              ],
            },
            {
              "O": [
                "signed",
                "end of the Thirty Years' War",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "Statement with a subject, verb, object, and complement.",
          "usage": [
            "The Treaty of Westphalia did little to quell the simmering tensions between the various parties.",
          ],
          "words": [
            {
              "S": [
                "The Treaty of Westphalia",
              ],
            },
            {
              "V": [
                "did",
                "quell",
              ],
            },
            {
              "O": [
                "the simmering tensions between the various parties",
              ],
            },
            {
              "C": [
                "little",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "war",
          "meaning":
            "a state of armed conflict between different countries, groups, or individuals",
          "usage": [
            "In the midst of a brutal war that had been raging for decades...",
            "The Thirty Years' War had left countless lives and cities in ruins...",
          ],
          "pronounce": "/wɔr/",
          "example":
            "The devastating effects of the war were felt across the country.",
        },
        {
          "class": "Pronoun",
          "word": "they",
          "meaning":
            "used to refer to people or animals previously mentioned or easily identified",
          "usage": [
            "As they returned to their respective lands...",
            "They couldn't shake the feeling that the peace was only temporary...",
          ],
          "pronounce": "/ðeɪ/",
          "example": "They went to the store and bought some milk.",
        },
        {
          "class": "Noun",
          "word": "rulers",
          "meaning": "people who have a high position of authority or power",
          "usage": [
            "A group of powerful rulers gathered in the small town of Munster...",
            "The rulers returned to their respective lands...",
          ],
          "pronounce": "/ˈruːlərz/",
          "example": "The rulers of the country met to discuss the new laws.",
        },
        {
          "class": "Adjective",
          "word": "powerful",
          "meaning": "having a lot of strength or influence",
          "usage": [
            "A group of powerful rulers gathered in the small town of Munster...",
          ],
          "pronounce": "/ˈpɔːfəl/",
          "example": "The powerful storm caused widespread damage.",
        },
        {
          "class": "Adverb",
          "word": "temporarily",
          "meaning": "for a short time, but not permanently",
          "usage": [
            "They couldn't shake the feeling that the peace was only temporarily...",
          ],
          "pronounce": "/ˌtɛmˈpɔrəri/",
          "example":
            "The company will be closed temporarily due to renovations.",
        },
        {
          "class": "Noun",
          "word": "territories",
          "meaning":
            "an area of land that is controlled or owned by a country, organization, etc.",
          "usage": [
            "It was a complex set of agreements that recognized the sovereignty of each party and established the boundaries of their territories...",
          ],
          "pronounce": "/tərˈɪtɔri/zi/",
          "example":
            "The country has several territories in the Pacific Ocean.",
        },
        {
          "class": "Verb",
          "word": "negotiate",
          "meaning":
            "to talk and discuss with someone to reach an agreement or compromise",
          "usage": [
            "A group of powerful rulers gathered in the small town of Munster to negotiate a peace treaty...",
          ],
          "pronounce": "/ˌnɛgəˈteɪt/",
          "example": "The two sides will negotiate to find a solution.",
        },
        {
          "class": "Noun",
          "word": "Europe",
          "meaning":
            "a continent that includes many countries in the northern hemisphere",
          "usage": [
            "But for now, at least, there was peace in Europe.",
          ],
          "pronounce": "/ˈjʊərəp/",
          "example": "Many tourists visit Europe every year.",
        },
      ],
    },
    "keywords": [
      "negotiation",
      "war",
      "peace",
      "treaty",
      "compromise",
      "sovereignty",
      "boundaries",
      "territory",
      "agreement",
      "bloodshed",
      "ruin",
      "complexity",
      "instability",
    ],
  },
};
export default data;
