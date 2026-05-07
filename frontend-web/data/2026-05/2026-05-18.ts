import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Jonestown Massacre",
    "details":
      "On November 18, 1978, a mass murder-suicide occurred at Jonestown, Guyana, where members of the Peoples Temple died in a mass murder-suicide led by Jim Jones.",
  },
  "date": "2026-05-18",
  "title": "The Cult of Deception",
  "body":
    "The sun had just set over the small town of Paradise Valley, casting a golden glow over the lush green hills. But beneath its idyllic surface, a sinister plot was unfolding.  \n\n Jim Jones, a charismatic leader with a messianic complex, had been secretly building a cult-like following in the nearby settlement of Jonestown. His words were laced with a toxic mix of love and control, weaving a web of devotion that would soon prove fatal.  \n\n As I delved deeper into the mystery, I discovered that Jones's followers were not only brainwashed but also armed to the teeth. The once-peaceful town was now on high alert, its residents trapped in a nightmarish cycle of fear and obedience.  \n\n The day of reckoning arrived with eerie calmness, as if nature itself had decided to participate in Jones's twisted game. On November 18th, the very air seemed heavy with anticipation, a palpable sense of dread that would soon become a terrible reality.",
  "word count": 158,
  "dialog": [
    {
      "Meg": "I know, right? It's like we're living in a nightmare!",
    },
    {
      "Kerry":
        "Dude, it's not just a novel! Jim Jones is real and his followers actually did commit mass murder in Jonestown. It's super dark.",
    },
    {
      "Lui":
        "That's exactly what I was trying to tell you kids in class - history can be both fascinating and terrifying. This novel does an amazing job of capturing the complexities of human nature.",
    },
    {
      "Billy":
        "I was totally freaked out by the part where they drink that poisoned Kool-Aid. It's like, how could people do something so horrible to each other?",
    },
    {
      "Meg":
        "And it's not just the violence - it's the way Jim Jones manipulated his followers, making them believe in him and follow him no matter what. That's some crazy stuff right there.",
    },
    {
      "Kerry":
        "I'm reading this one book on cult psychology and it totally blew my mind how these leaders can take control of people's minds like that. It's not just about brainwashing - it's about exploiting their deepest fears and desires.",
    },
    {
      "Lui":
        "Well, kids, I think we've learned a valuable lesson here: the line between good and evil is often blurry, but with knowledge and critical thinking, we can make informed decisions and avoid falling into such dark traps.",
    },
    {
      "Billy":
        "I don't know about you guys, but I'm never going to forget this novel. It's like... what if something like that happened in our own town?",
    },
  ],
  "quiz": [
    {
      "question": "What had just set over the small town of Paradise Valley?",
      "options": [
        "the rain",
        "the sun",
        "the moon",
        "the stars",
        "the clouds",
      ],
      "answer": 1,
    },
    {
      "question":
        "Who was secretly building a cult-like following in Jonestown?",
      "options": [
        "Jim Jones",
        "Lui",
        "Billy",
        "Kerry",
        "Meg",
      ],
      "answer": 0,
    },
    {
      "question": "What did Jim Jones's followers use to commit mass murder?",
      "options": [
        "poisoned Kool-Aid",
        "guns and knives",
        "explosives",
        "fire",
        "drowning",
      ],
      "answer": 0,
    },
    {
      "question": "How many days was it before the day of reckoning arrived?",
      "options": [
        "10 days",
        "5 days",
        "3 days",
        "1 day",
        "no specific number of days is mentioned",
      ],
      "answer": 4,
    },
    {
      "question": "What did Lui tell his students in class about history?",
      "options": [
        "It's always dark and terrible.",
        "History can be both fascinating and terrifying.",
        "We should never learn from it.",
        "It's only good for entertainment.",
        "We should ignore it.",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Society",
    "flavor": "Mystery",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
