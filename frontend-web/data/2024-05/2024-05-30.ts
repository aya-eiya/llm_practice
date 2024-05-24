import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Vincent van Gogh shoots himself",
    "details":
      "On May 30, 1890, Dutch artist Vincent van Gogh shot himself in the chest with a revolver in a wheat field outside the village of Auvers-sur-Oise, France. He died two days later from his injuries.",
  },
  "date": "2024-05-30",
  "title": "The Wheat Field",
  "body":
    "In the eerie stillness of twilight, as the first whispers of darkness crept across the whispering wheat field, a solitary figure stumbled through the tall stalks. His clothes were torn and stained with blood, his face haggard and etched with despair. With each labored step, Vincent van Gogh drew closer to the inevitable.The revolver, cold and unforgiving in his trembling hand, weighed heavy in his soul. The relentless torment that had plagued his mind for so long had finally consumed him, driving him to this desperate act.As he raised the weapon to his temple, the wheat field seemed to hold its breath, the stalks frozen in a macabre tableau. The deafening silence was shattered by the thunderous discharge, echoing through the desolate landscape.Vincent collapsed into the field, his lifeblood seeping into the thirsty soil. The wheat, once a symbol of hope and renewal, now became a shroud for his shattered dreams and the darkness that had claimed his tormented soul.",
  "word count": 160,
  "dialog": [
    {
      "Billy":
        "This novel is so sad. I can't believe Vincent van Gogh died by suicide.",
    },
    {
      "Lui":
        "It is indeed a tragic tale. Van Gogh struggled with mental illness throughout his life, and his despair ultimately led him to take his own life.",
    },
    {
      "Meg":
        "I was so affected by the description of the wheat field. It was so beautiful and yet so haunting.",
    },
    {
      "Billy":
        "I agree. The wheat field seemed to symbolize both Van Gogh's hope and his despair.",
    },
    {
      "Kerry":
        "I think the novel does a great job of capturing the torment that Van Gogh must have felt. It's hard to imagine what it must have been like to live with such mental anguish.",
    },
    {
      "Lui":
        "It is important to remember that Van Gogh was a brilliant artist who created some of the most beautiful paintings in the world. His legacy will live on long after his death.",
    },
    {
      "Meg":
        "I'm glad that his paintings are still here for us to enjoy. They're a reminder of his genius and his struggle.",
    },
    {
      "Kerry":
        "I think it's important to talk about mental illness and suicide. It's a serious issue that affects many people.",
    },
    {
      "Lui":
        "I agree. We need to be more open about mental health and encourage people to seek help if they are struggling.",
    },
    {
      "Billy":
        "I'm glad that we had this discussion. It's important to remember that we're not alone.",
    },
  ],
  "quiz": [
    {
      "question":
        "What physical state did Vincent van Gogh find himself in when he entered the wheat field?",
      "options": [
        "Drunk and disoriented",
        "Injured and exhausted",
        "Happy and content",
        "Calm and collected",
        "Angry and violent",
      ],
      "answer": 1,
    },
    {
      "question": "Why did Vincent van Gogh take his own life?",
      "options": [
        "He was overcome with grief over a lost love",
        "He was bankrupt and facing eviction",
        "He was plagued by persistent mental illness",
        "He was forced to give up painting",
        "He was diagnosed with a terminal illness",
      ],
      "answer": 2,
    },
    {
      "question": "What symbol did the wheat field represent?",
      "options": [
        "Hope and renewal",
        "Despair and sorrow",
        "Love and passion",
        "Peace and tranquility",
        "Wealth and prosperity",
      ],
      "answer": 0,
    },
    {
      "question":
        "How did the group react to the story of Vincent van Gogh's death?",
      "options": [
        "They were indifferent and unmoved",
        "They were shocked and saddened",
        "They were angry and resentful",
        "They were curious and intrigued",
        "They were inspired and motivated",
      ],
      "answer": 1,
    },
    {
      "question": "What message does the novel convey about mental illness?",
      "options": [
        "It is a weakness that should be hidden",
        "It is a condition that should be met with compassion",
        "It is a punishment for past sins",
        "It is a sign of failure",
        "It is a permanent obstacle to happiness",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Gothic",
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
          "explanation":
            "Subject-Verb pattern. The simplest sentence pattern, consisting of a subject (S) and a verb (V).",
          "usage": [
            "The wheat field seemed to hold its breath, the stalks frozen in a macabre tableau.",
            "It is indeed a tragic tale.",
            "It's hard to imagine what it must have been like to live with such mental anguish.",
            "It is important to remember that we're not alone.",
          ],
          "words": [
            {
              "S": [
                "The wheat field",
                "It",
                "It",
                "It",
              ],
            },
            {
              "V": [
                "seemed to hold",
                "is",
                "hard to imagine",
                "important to remember",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + C",
          "explanation":
            "Subject-Verb-Complement pattern. Adds a complement (C) to the basic subject-verb pattern. The complement can provide additional information about the subject or the verb.",
          "usage": [
            "His clothes were torn and stained with blood, his face haggard and etched with despair.",
            "The relentless torment that had plagued his mind for so long had finally consumed him, driving him to this desperate act.",
            "Van Gogh struggled with mental illness throughout his life, and his despair ultimately led him to take his own life.",
            "His legacy will live on long after his death.",
            "They're a reminder of his genius and his struggle.",
            "I'm glad that we had this discussion.",
          ],
          "words": [
            {
              "S": [
                "His clothes",
                "The relentless torment",
                "Van Gogh",
                "His legacy",
                "They",
                "I",
              ],
            },
            {
              "V": [
                "were",
                "had plagued",
                "had consumed",
                "will live on",
                "are",
                "had",
              ],
            },
            {
              "C": [
                "torn and stained with blood, his face haggard and etched with despair.",
                "driving him to this desperate act.",
                "and his despair ultimately led him to take his own life.",
                "long after his death.",
                "a reminder of his genius and his struggle.",
                "this discussion.",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation":
            "Subject-Verb-Object pattern. Adds an object (O) to the basic subject-verb pattern. The object is a noun or pronoun that receives the action of the verb.",
          "usage": [
            "In the eerie stillness of twilight, as the first whispers of darkness crept across the whispering wheat field, a solitary figure stumbled through the tall stalks.",
            "With each labored step, Vincent van Gogh drew closer to the inevitable.",
            "The revolver, cold and unforgiving in his trembling hand, weighed heavy in his soul.",
            "The wheat, once a symbol of hope and renewal, now became a shroud for his shattered dreams and the darkness that had claimed his tormented soul.",
            "This novel is so sad.",
            "I can't believe Vincent van Gogh died by suicide.",
            "I was so affected by the description of the wheat field.",
            "The wheat field seemed to symbolize both Van Gogh's hope and his despair.",
            "I think the novel does a great job of capturing the torment that Van Gogh must have felt.",
            "I'm glad that his paintings are still here for us to enjoy.",
          ],
          "words": [
            {
              "S": [
                "a solitary figure",
                "Vincent van Gogh",
                "The revolver",
                "The wheat",
                "This novel",
                "I",
                "I",
                "The wheat field",
                "I",
                "I",
              ],
            },
            {
              "V": [
                "stumbled",
                "drew",
                "weighed",
                "became",
                "is",
                "can't believe",
                "was so affected",
                "seemed to symbolize",
                "think",
                "am glad",
              ],
            },
            {
              "O": [
                "through the tall stalks.",
                "closer to the inevitable.",
                "heavy in his soul.",
                "a shroud for his shattered dreams and the darkness that had claimed his tormented soul.",
                "so sad.",
                "Vincent van Gogh died by suicide.",
                "by the description of the wheat field.",
                "both Van Gogh's hope and his despair.",
                "the novel does a great job of capturing the torment that Van Gogh must have felt.",
                "his paintings are still here for us to enjoy.",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + O",
          "explanation":
            "Subject-Verb-Object-Object pattern. Adds a second object (O) to the basic subject-verb-object pattern. The second object is typically an indirect object that receives the indirect action of the verb.",
          "usage": [
            "Vincent collapsed into the field, his lifeblood seeping into the thirsty soil.",
          ],
          "words": [
            {
              "S": [
                "Vincent",
              ],
            },
            {
              "V": [
                "collapsed",
              ],
            },
            {
              "O": [
                "into the field",
                "his lifeblood",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "Subject-Verb-Object-Complement pattern. Adds a complement (C) to the basic subject-verb-object pattern. The complement can provide additional information about the object.",
          "usage": [
            "As he raised the weapon to his temple, the wheat field seemed to hold its breath, the stalks frozen in a macabre tableau.",
            "The deafening silence was shattered by the thunderous discharge, echoing through the desolate landscape.",
          ],
          "words": [
            {
              "S": [
                "he",
                "The deafening silence",
              ],
            },
            {
              "V": [
                "raised",
                "was shattered",
              ],
            },
            {
              "O": [
                "the weapon",
                "by the thunderous discharge",
              ],
            },
            {
              "C": [
                "to his temple, the wheat field seemed to hold its breath, the stalks frozen in a macabre tableau.",
                "echoing through the desolate landscape.",
              ],
            },
          ],
        },
      ],
      "vocabularies": [
        {
          "class": "Noun",
          "word": "twilight",
          "meaning":
            "the soft, dim light from the sky just before sunrise or after sunset",
          "usage": [
            "In the eerie stillness of twilight, as the first whispers of darkness crept across the whispering wheat field, a solitary figure stumbled through the tall stalks.",
          ],
          "pronounce": "/ˈtwaɪlʌɪt/",
          "example": "The twilight hours are a beautiful time to be outdoors.",
        },
        {
          "class": "Verb",
          "word": "crept",
          "meaning": "to move stealthily or quietly",
          "usage": [
            "as the first whispers of darkness crept across the whispering wheat field",
          ],
          "pronounce": "/krɛpt/",
          "example": "The cat crept up on the mouse.",
        },
        {
          "class": "Noun",
          "word": "figure",
          "meaning": "a person or thing that is easily recognizable",
          "usage": [
            "a solitary figure stumbled through the tall stalks",
          ],
          "pronounce": "/ˈfɪɡjər/",
          "example": "A shadowy figure emerged from the darkness.",
        },
        {
          "class": "Verb",
          "word": "stumbled",
          "meaning": "to walk or move unsteadily",
          "usage": [
            "a solitary figure stumbled through the tall stalks",
          ],
          "pronounce": "/ˈstʌmbəl/",
          "example": "The hiker stumbled over a rock.",
        },
        {
          "class": "Noun",
          "word": "revolver",
          "meaning":
            "a handgun that can be fired several times without reloading",
          "usage": [
            "The revolver, cold and unforgiving in his trembling hand, weighed heavy in his soul.",
          ],
          "pronounce": "/rɪˈvɑlvər/",
          "example":
            "The police officer drew his revolver and ordered the suspect to surrender.",
        },
        {
          "class": "Noun",
          "word": "torment",
          "meaning": "great mental or physical suffering",
          "usage": [
            "The relentless torment that had plagued his mind for so long had finally consumed him",
          ],
          "pronounce": "/ˈtɔrmənt/",
          "example":
            "The prisoner was subjected to years of physical and mental torment.",
        },
        {
          "class": "Noun",
          "word": "discharge",
          "meaning": "the act of firing a gun or other weapon",
          "usage": [
            "The deafening silence was shattered by the thunderous discharge",
          ],
          "pronounce": "/dɪsˈtʃɑrdʒ/",
          "example":
            "The discharge of the gun was so loud that it made me jump.",
        },
        {
          "class": "Noun",
          "word": "shroud",
          "meaning": "a cloth that is used to cover a dead body",
          "usage": [
            "The wheat, once a symbol of hope and renewal, now became a shroud for his shattered dreams",
          ],
          "pronounce": "/ʃraʊd/",
          "example": "The body was wrapped in a white shroud.",
        },
      ],
    },
    "keywords": [
      "Depression",
      "Suicide",
      "Vincent van Gogh",
      "Despair",
      "Torment",
      "Isolation",
      "Wheat field",
      "Darkness",
      "Macabre",
      "Desolate",
      "Shattered dreams",
      "Tragedy",
    ],
  },
};
export default data;
