import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Guglielmo Marconi Transmits First Photograph by Wireless",
    "details":
      "On May 12, 1901, Guglielmo Marconi successfully transmitted a photograph over a wireless telegraph from Poldhu in Cornwall to St. John's, Newfoundland",
  },
  "date": "2026-05-12",
  "title": "Wireless Wasteland",
  "body":
    "The sun was setting over the barren wasteland, casting a golden glow over the ruins of civilization. I trudged through the dust, my footsteps echoing off the crumbling buildings. It had been years since the Great Disaster, and yet we still relied on the old wireless telegraph to communicate with the few remaining settlements.  \n\n I stumbled upon a small group of survivors huddled around a makeshift transmitter. They were attempting to send a message to the distant outpost, but the signal kept fading in and out. One of them spotted me approaching and rushed over to intercept me. 'Please,' he begged, 'you have to help us fix this. We need to contact the others.'  \n\n I examined the transmitter, my mind racing with the knowledge that we had once transmitted photographs wirelessly across continents. What were the chances of success now? But desperation fueled their efforts, and together we managed to send a weak signal into the void. The wait for a response was agonizing, but finally, a faint message crackled back through the airwaves. 'We receive you,' it read. For the first time in years, hope flickered to life.",
  "word count": 189,
  "dialog": [
    {
      "Billy":
        "I loved how the author described the setting, it felt so immersive!",
    },
    {
      "Lui":
        "Immersive? I would say it was more like sentimentalizing the past.",
    },
    {
      "Kerry":
        "Sentimentalizing? Come on, Mr. Lui! The author was just trying to make us feel something for the characters.",
    },
    {
      "Meg":
        "I think both of you are right. The setting was beautiful, but it also highlighted how far we've fallen since the Great Disaster.",
    },
    {
      "Lui":
        "Fallen? We've learned from our mistakes and adapted. That's what matters.",
    },
    {
      "Billy":
        "But isn't that exactly what the author was trying to say? How we can learn from our past?",
    },
    {
      "Kerry":
        "Yeah, and how sometimes it feels like we're stuck in a rut, but then something happens and we get hope again.",
    },
  ],
  "quiz": [
    {
      "question": "Where was the sun setting over?",
      "options": [
        "A distant outpost",
        "A bustling city",
        "The barren wasteland",
        "A dense forest",
        "A vast desert",
      ],
      "answer": 2,
    },
    {
      "question":
        "What were the survivors trying to send using the transmitter?",
      "options": [
        "A message to the author",
        "A signal to the wireless telegraph",
        "A message to the distant outpost",
        "A distress call for help",
        "A photo of the wasteland",
      ],
      "answer": 2,
    },
    {
      "question": "What was the result of sending a weak signal?",
      "options": [
        "The survivors received no response",
        "The signal was blocked by interference",
        "The distant outpost responded with a message",
        "The transmitter broke down completely",
        "The survivors gave up trying",
      ],
      "answer": 2,
    },
    {
      "question": "What did the author hope to convey through the setting?",
      "options": [
        "How exciting it is to live in the wasteland",
        "How far we've fallen since the Great Disaster",
        "How beautiful the wasteland looks at sunset",
        "How hard life is for survivors",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question": "What did Lui think was wrong with the author's description?",
      "options": [
        "It was too detailed",
        "It was too vague",
        "It sentimentalized the past",
        "It was boring",
        "None of the above",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
