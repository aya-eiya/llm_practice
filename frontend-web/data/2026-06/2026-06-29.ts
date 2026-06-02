import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Star Wars Turns 40",
    "details":
      "On June 29, 2017, Star Wars celebrated its 40th anniversary of the original film release in 1977.",
  },
  "date": "2026-06-29",
  "title": "Moonlit Memories of Star Wars Past",
  "body":
    "In the dimly lit corridors of my mind, a haunting melody echoed through the ages. It was a symphony of lightsabers clashing, of starships soaring into the unknown. The celebration of forty years had passed, yet the echoes of the original film still lingered, refusing to fade into oblivion.  \n\n I stood in the midst of the anniversary gathering, surrounded by fellow enthusiasts who shared my passion for the epic tale. Our laughter and chatter mingled with the shadows, as we reminisced about the heroes of old: Luke Skywalker, Han Solo, and Leia Organa. Their bravery and sacrifice still resonated within us, a testament to the power of friendship and determination.  \n\n Yet, amidst the nostalgia, I couldn't shake off the feeling that there was more to this celebration than met the eye. A sense of unease settled in, like the whisper of an ancient prophecy. The Force, once a guiding light, now seemed shrouded in mystery. And as the anniversary candles flickered out, I wondered if we were merely delaying the inevitable, or if the darkness that loomed beyond the horizon would soon consume us all.",
  "word count": 185,
  "dialog": [
    {
      "Meg":
        "I loved how the author wove together the past and present, creating this sense of nostalgia and unease at the same time.",
    },
    {
      "Kerry":
        "Totally! I was on edge the whole time, wondering what was going to happen next. And that prophecy thing at the end? Mind blown!",
    },
    {
      "Lui":
        "Yes, the author did an excellent job of exploring the complexities of the Star Wars universe and its impact on the characters.",
    },
    {
      "Billy":
        "I know, right? I loved how they used lightsaber duels and starship battles to represent the struggles between good and evil. It's so cool!",
    },
    {
      "Meg":
        "And the way the author described the Force as shrouded in mystery really added to the sense of tension and foreboding.",
    },
    {
      "Kerry":
        "I'm still trying to figure out what that prophecy means, though. Do you think it's related to something specific or just a general warning?",
    },
    {
      "Lui":
        "Well, as we've discussed in class before, prophecies are often used in literature and mythology to foreshadow significant events or themes.",
    },
    {
      "Billy":
        "Oh yeah! Like how Oedipus Rex predicted his own downfall. But what do you think this prophecy is trying to warn us about?",
    },
  ],
  "quiz": [
    {
      "question": "What event was being celebrated after 40 years?",
      "options": [
        "The making of a new Star Wars film",
        "The anniversary of the original Star Wars film",
        "A new character's birthday",
        "The release of a spin-off novel",
        "The premiere of a new TV series",
      ],
      "answer": 1,
    },
    {
      "question": "Who was the narrator describing as heroes of old?",
      "options": [
        "Luke Skywalker, Han Solo, and Leia Organa",
        "Obi-Wan Kenobi, Darth Vader, and Yoda",
        "Finn, Poe Dameron, and Rey",
        "Kylo Ren, Supreme Leader Snoke, and General Hux",
        "Chewbacca, C-3PO, and R2-D2",
      ],
      "answer": 0,
    },
    {
      "question":
        "What did the narrator feel was lingering in the corridors of their mind?",
      "options": [
        "A sense of excitement about new Star Wars content",
        "Nostalgia for past events",
        "Fear of an upcoming threat",
        "Curiosity about a prophecy",
        "Anticipation for a reunion with friends",
      ],
      "answer": 1,
    },
    {
      "question":
        "According to the dialogue, what literary or mythological concept was used in relation to prophecies?",
      "options": [
        "Mythical creatures predicting the future",
        "Ancient prophecies foretelling significant events",
        "Literary devices for foreshadowing themes",
        "Famous authors using prophecies in their stories",
        "A new theory on how characters receive visions",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was the sense of unease compared to, according to the narrator?",
      "options": [
        "The darkness that loomed beyond the horizon",
        "The light of the Force",
        "Nostalgia for past events",
        "Excitement about new content",
        "Fear of an upcoming threat",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Gothic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
