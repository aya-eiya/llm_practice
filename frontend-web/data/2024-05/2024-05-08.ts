import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Nuremberg Trials",
    "details":
      "In May 1946, the Nuremberg Trials began, a series of war crimes trials held by the International Military Tribunal (IMT) following World War II. The trials were conducted from November 20, 1945, to October 3, 1946, and resulted in the conviction of several high-ranking Nazi officials.",
  },
  "date": "2024-05-08",
  "title": "Nuremberg Trial: A Crime Novel",
  "body":
    "In a small European town in the aftermath of World War II, a group of survivors band together to uncover the truth about the war and bring those responsible for their suffering to justice. As they delve deeper into the darkness of the past, they discover a network of high-ranking Nazis who have fled the country but continue to wield power from the shadows. Their search leads them to Nuremberg, where the International Military Tribunal (IMT) is holding the Nuremberg Trials. The survivors find themselves drawn into the proceedings, using their knowledge of the atrocities committed during the war to expose the true extent of the Nazi regime's crimes against humanity. As the trials progress, the survivors face increasing threats from those who would prefer to see them silenced forever. But they are determined to speak the truth and ensure that justice is served. In the end, their bravery and perseverance pay off as several high-ranking Nazi officials are convicted of war crimes and brought to account for their actions.",
  "word count": 168,
  "dialog": [
    {
      "Billy":
        "Wow, I had no idea that the Nuremberg Trials were so important in bringing Nazis to justice! I learned a lot about history.",
    },
    {
      "Meg":
        "I know, right? It's crazy how much we don't learn about this stuff in school. I mean, I loved 'The Diary of Anne Frank', but this was on a whole different level.",
    },
    {
      "Kerry":
        "Yeah, and it's not just the trials themselves, but what they reveal about human nature. Like, who knew that some people were so willing to turn a blind eye to atrocities?",
    },
    {
      "Lui":
        "Exactly, Kerry. It's a reminder that we can't just focus on individual actions or intentions; we need to look at the broader context and societal pressures that shape our decisions.",
    },
    {
      "Billy":
        "That makes sense. And it was interesting to see how the novel tied everything together - like, how the survivors' experiences influenced their actions in the present.",
    },
    {
      "Meg":
        "Yeah, I loved seeing how they all came together to support each other and fight for justice. It's so inspiring!",
    },
    {
      "Kerry":
        "Totally agree! And I have to say, it was pretty cool learning about the IMT and its role in the Nuremberg Trials.",
    },
    {
      "Lui":
        "Well, as a history teacher, I'm glad we got to learn more about this period. It's an important reminder of why we need to keep studying and remembering our past.",
    },
    {
      "Billy":
        "Definitely. And now that we know what really went down, we can't just forget it or sugarcoat the truth. We have to keep telling these stories.",
    },
    {
      "Meg":
        "Absolutely! I'm so glad we got to read this novel together - it's sparked some amazing conversations and reflections for me.",
    },
    {
      "Kerry": "Same here! Thanks for letting us discuss it, Lui.",
    },
    {
      "Lui":
        "No problem at all. It's always great to see students engaged and passionate about learning.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the main theme of the Nuremberg Trial: A Crime Novel?",
      "options": [
        "The power of human nature",
        "The importance of justice",
        "The impact of war on survivors",
        "The struggle for truth and accountability",
        "The role of history in shaping our decisions",
      ],
      "answer": 4,
    },
    {
      "question":
        "What did the survivors discover about the Nazi regime's crimes against humanity?",
      "options": [
        "That they were minimal",
        "That they were mostly targeted at Jews",
        "That they were widespread and brutal",
        "That they were limited to a few high-ranking officials",
        "That they didn't exist",
      ],
      "answer": 2,
    },
    {
      "question": "What did the novel reveal about human nature?",
      "options": [
        "That people are inherently good",
        "That people are capable of great evil",
        "That people can change their attitudes over time",
        "That people are generally apathetic",
        "That people are always selfish",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the role of the International Military Tribunal (IMT) in the novel?",
      "options": [
        "It was a group of survivors who sought justice",
        "It was a fictional court that tried to bring Nazis to justice",
        "It was a real court that held trials for high-ranking Nazi officials",
        "It was a council that advised on war crimes",
        "It didn't exist",
      ],
      "answer": 2,
    },
    {
      "question":
        "What did the novel suggest about the importance of learning from history?",
      "options": [
        "That it's not important to learn from history",
        "That we can't learn from history",
        "That we should focus on individual actions, not broader societal pressures",
        "That we need to keep studying and remembering our past",
        "That history is irrelevant",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Ethics",
    "flavor": "Crime",
    "models": { "main": "llama3", "novel": "llava" },
    "level": "Level_5",
  },
  "descriptions": {
    "grammar": {
      "patterns": [
        {
          "pattern": "S + V",
          "explanation": "The subject performs the verb.",
          "usage": [
            "In a small European town in the aftermath of World War II, a group of survivors band together to uncover the truth about the war and bring those responsible for their suffering to justice.",
          ],
          "words": [
            {
              "S": [
                "a group of survivors",
                "those responsible for their suffering",
              ],
            },
            {
              "V": [
                "band together",
                "bring",
                "uncover the truth",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O",
          "explanation": "The subject performs the verb on the object.",
          "usage": [
            "As they delve deeper into the darkness of the past, they discover a network of high-ranking Nazis who have fled the country but continue to wield power from the shadows.",
          ],
          "words": [
            {
              "S": [
                "they",
                "those responsible for their suffering",
              ],
            },
            {
              "V": [
                "delve deeper",
                "discover",
                "wield power",
              ],
            },
            {
              "O": [
                "the darkness of the past",
                "a network of high-ranking Nazis",
              ],
            },
          ],
        },
        {
          "pattern": "S + V + O + C",
          "explanation":
            "The subject performs the verb on the object and complement.",
          "usage": [
            "As the trials progress, the survivors find themselves drawn into the proceedings, using their knowledge of the atrocities committed during the war to expose the true extent of the Nazi regime's crimes against humanity.",
          ],
          "words": [
            {
              "S": [
                "the survivors",
              ],
            },
            {
              "V": [
                "find",
                "drawn into",
                "expose",
              ],
            },
            {
              "O": [
                "the proceedings",
              ],
            },
            {
              "C": [
                "their knowledge of the atrocities committed during the war",
                "the true extent of the Nazi regime's crimes against humanity",
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
            "a state of armed conflict between nations, states, or societies",
          "usage": [
            "The war lasted for four years.",
            "The war effort required a massive mobilization.",
          ],
          "pronounce": "/wɔr/",
          "example": "The war had a profound impact on the economy.",
        },
        {
          "class": "Adjective",
          "word": "small",
          "meaning": "having little size, amount, or degree; not large",
          "usage": [
            "It was a small town.",
            "She wore a small necklace.",
          ],
          "pronounce": "/smɔl/",
          "example": "The small restaurant served delicious food.",
        },
        {
          "class": "Pronoun",
          "word": "those",
          "meaning": "used to refer to people or things previously mentioned",
          "usage": [
            "Those are the best shoes I've ever seen.",
            "I'm looking for those keys.",
          ],
          "pronounce": "/ðoʊz/",
          "example":
            "Those who are willing to take risks will reap the rewards.",
        },
        {
          "class": "Noun",
          "word": "truth",
          "meaning": "the true or actual state of something",
          "usage": [
            "The truth is that I'm not sure.",
            "She spoke the truth, even when it was difficult.",
          ],
          "pronounce": "/truθ/",
          "example": "Seeking the truth is a noble pursuit.",
        },
        {
          "class": "Verb",
          "word": "bring",
          "meaning": "to cause someone or something to come near",
          "usage": [
            "Can you bring me that book?",
            "She will bring her friends over tonight.",
          ],
          "pronounce": "/brɪŋ/",
          "example": "The new policy aims to bring about change.",
        },
        {
          "class": "Noun",
          "word": "justice",
          "meaning": "the quality of being just or fair",
          "usage": [
            "She fought for justice in the community.",
            "He sought justice through the courts.",
          ],
          "pronounce": "/dʒʌstɪs/",
          "example": "Justice is a fundamental human right.",
        },
        {
          "class": "Adverb",
          "word": "increasingly",
          "meaning": "to a greater extent or degree",
          "usage": [
            "The problem has been increasingly evident.",
            "Her fame has been increasingly widespread.",
          ],
          "pronounce": "/ɪn.kriːs.ing.li/",
          "example": "The team has been playing increasingly well.",
        },
        {
          "class": "Noun",
          "word": "officials",
          "meaning": "people authorized to perform certain functions or duties",
          "usage": [
            "He met with government officials.",
            "She was a high-ranking official in the company.",
          ],
          "pronounce": "/ɒˈfɪʃəlz/",
          "example": "The officials were impressed by the presentation.",
        },
      ],
    },
    "keywords": [
      "war",
      "survivors",
      "Nazi",
      "World War II",
      "justice",
      "trials",
      "atrocities",
      "humanity",
      "imperative",
      "accountability",
      "bravery",
      "perseverance",
      "truth",
      "proceedings",
      "international",
      "military",
      "tribunal",
    ],
  },
};
export default data;
