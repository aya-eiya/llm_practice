import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Bayeux Tapestry is completed",
    "details":
      "The Bayeux Tapestry, a 700-year-old embroidered cloth depicting the events leading up to the Norman conquest of England in 1066, was finished on April 24th",
  },
  "date": "2024-04-24",
  "title": "The Tapestry's Secret",
  "body":
    "In a quaint village in Normandy, a mysterious tapestry was being woven by a group of skilled artisans under the watchful eye of a wealthy patron. The tapestry depicted scenes of treachery and betrayal, hinting at a dark secret that the villagers had long forgotten.  As the tapestry neared completion on April 24th, the village was thrown into chaos when one of the artisans was found dead. The local constable, a diligent man named Robert, was tasked with unraveling the mystery behind the death and the cryptic messages hidden within the tapestry.  Robert's investigation led him to suspect that the patron was involved in the murder and that the tapestry held clues to his nefarious plans. As he delved deeper into the case, Robert found himself drawn into a web of deceit, corruption, and political intrigue that threatened to tear the village apart.",
  "word count": 143,
  "dialog": [
    {
      "Billy":
        "I'm so glad we read this novel! The mystery really got me thinking about how easy it is to overlook secrets in our own communities.",
    },
    {
      "Kerry":
        "Totally agree, Billy. I loved how the author wove together historical and social commentary with a murder mystery. It was like solving a puzzle!",
    },
    {
      "Meg":
        "I'm still reeling from the symbolism of the tapestry. Did anyone else notice how it mirrored the village's hidden truths?",
    },
    {
      "Lui":
        "Ah, yes! The tapestry was indeed a masterclass in storytelling. And I think we can all relate to feeling like we're trying to unravel mysteries in our own lives.",
    },
    {
      "Kerry":
        "Right? Like, have you guys noticed how often we see similar themes of deception and corruption in history books?",
    },
    {
      "Meg":
        "Oh, absolutely! It's like the author was saying that some secrets never truly go away. And what about Robert's investigation? I loved how he pieced together clues!",
    },
    {
      "Billy":
        "Yeah, his determination to get to the truth was inspiring. But I'm still wondering about the patron's motivations... did anyone else think they were trying to cover something up?",
    },
  ],
  "quiz": [
    {
      "question":
        "What was being woven by a group of skilled artisans in the story?",
      "options": [
        "A tapestry",
        "A book",
        "A painting",
        "A song",
        "A poem",
      ],
      "answer": 0,
    },
    {
      "question":
        "Why was Robert, the local constable, tasked with unraveling the mystery behind the death and the cryptic messages?",
      "options": [
        "Because he was a skilled detective",
        "Because he was a friend of the victim",
        "Because the patron suspected him to be involved in the murder",
        "Because it was his duty as a law enforcement officer",
        "Because nobody else wanted to solve the case",
      ],
      "answer": 2,
    },
    {
      "question": "What did Billy think about the novel?",
      "options": [
        "He found it too boring",
        "He loved how easy it was to overlook secrets in our own communities",
        "He didn't like the way it was written",
        "He thought it was just a murder mystery",
        "He liked its historical and social commentary",
      ],
      "answer": 1,
    },
    {
      "question": "What did Meg notice about the tapestry?",
      "options": [
        "That it was too long",
        "That it had many colors",
        "That it mirrored the village's hidden truths",
        "That it didn't have any characters",
        "That it was just a simple design",
      ],
      "answer": 2,
    },
    {
      "question": "What did Kerry think about the novel?",
      "options": [
        "It was too easy to solve the mystery",
        "It was a masterclass in storytelling",
        "It was boring and didn't have any twists",
        "It was just an okay book",
        "It was like solving a puzzle",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Ethics",
    "flavor": "Crime",
    "models": { "main": "llama", "novel": "llava" },
    "level": "Level_5",
  },
};
export default data;
