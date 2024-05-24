import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Beatles Release 'Abbey Road'",
    "details":
      "On April 17th, 1969, The Beatles released their iconic album 'Abbey Road', which would go on to become one of the best-selling albums in history.",
  },
  "date": "2024-04-17",
  "title": "The Abbey Road Haunting",
  "body":
    "It was a cold and dreary October night when the small town of Abbeyville was suddenly plunged into darkness. The power lines had been cut, leaving the residents in complete darkness. As the clock struck midnight, strange noises began to echo through the streets. A cacophony of screams and laughter filled the air, coming from an abandoned building on the outskirts of town.  The following morning, a group of friends decided to investigate the source of the noises. Upon entering the old building, they were greeted by a chilling sight: several mannequins dressed in vintage 1960s clothing, arranged as if posing for a photo. The mannequins seemed to be alive, moving and speaking in hushed whispers.  As the night wore on, the group began to feel uneasy. The laughter of the mannequins grew louder, their movements more erratic. Suddenly, the lights flickered back on, revealing a shocking sight: several figures standing around the room, dressed in identical white outfits and holding red guitars.  The group realized that they were not alone in the building. The figures seemed to be waiting for something, their attention fixated on a large, open door at the end of the hall. As the clock struck midnight, the figures began to play a haunting melody, filling the air with eerie chords and howls.",
  "word count": 217,
  "dialog": [
    {
      "Billy":
        "I still can't believe what we saw in that abandoned building! The mannequins seemed so real.",
    },
    {
      "Kerry":
        "Yeah, I know what you mean! And have you noticed that the figures with guitars were playing a weird melody? It gave me chills.",
    },
    {
      "Meg":
        "I loved the way the old building looked like a movie set. It was like stepping into a different era. And those mannequins... they were so lifelike!",
    },
    {
      "Lui":
        "As a historian, I'm fascinated by the setting and the atmosphere of that place. The 1960s vibe really added to the mystery.",
    },
    {
      "Billy":
        "I think what creeped me out the most was how quiet everything got after midnight. It was like time stopped.",
    },
    {
      "Kerry":
        "Yeah, and then those figures started playing their guitars... it was like they were summoning something. Spooky!",
    },
    {
      "Meg":
        "I wish we could've seen what was behind that open door at the end of the hall. I bet it would've been amazing.",
    },
    {
      "Lui":
        "We should do some research on the history of that building and see if there are any connections to the strange occurrences we experienced.",
    },
  ],
  "quiz": [
    {
      "question": "What happened on a cold October night in Abbeyville?",
      "options": [
        "The power lines were cut",
        "It was Halloween",
        "A parade took place",
        "The town's festival ended",
        "Christmas decorations were put up",
      ],
      "answer": 0,
    },
    {
      "question":
        "Where did the group of friends decide to investigate the strange noises?",
      "options": [
        "An abandoned building on the outskirts of town",
        "The local police station",
        "A nearby café",
        "Their own homes",
        "The town's library",
      ],
      "answer": 0,
    },
    {
      "question": "What did the figures with guitars seem to be waiting for?",
      "options": [
        "The mannequins to start moving",
        "Some unknown event",
        "The group of friends to leave",
        "Their leader to arrive",
        "The night to end",
      ],
      "answer": 1,
    },
    {
      "question": "What was the atmosphere of the old building like?",
      "options": [
        "Modern and sleek",
        "Old-fashioned and dusty",
        "Lively and colorful",
        "Spooky and eerie",
        "Calming and peaceful",
      ],
      "answer": 4,
    },
    {
      "question":
        "Who is fascinated by the setting and atmosphere of the abandoned building?",
      "options": [
        "Kerry",
        "Billy",
        "Meg",
        "Lui",
        "The group as a whole",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Horror",
    "models": { "main": "llama", "novel": "llava" },
    "level": "Level_5",
  },
};
export default data;
