import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The 1st Star Wars film premieres",
    "details":
      "On April 22, 1977, the original Star Wars film premiered at Grauman's Chinese Theatre in Los Angeles",
  },
  "date": "2026-04-22",
  "title": "May the Dark Force Reap",
  "body":
    "The once-blue skies had turned a sickly shade of gray, as if the very fabric of reality was unraveling. The world had ended in a blaze of fire and destruction, leaving only rubble and ash in its wake. I trudged through the desolate wasteland, my footsteps echoing off the empty buildings.  \n\n The stars above twinkled like diamonds scattered across the velvet blackness, but their beauty was lost on me. My heart was heavy with grief, for I had lost everything: my family, my friends, my home. All that remained was a hollow shell of what once was. I thought back to the day when the first Star Wars film premiered at Grauman's Chinese Theatre in Los Angeles. Little did anyone know then that it would become a harbinger of doom.  \n\n The galaxy had been forever changed by the power of the Force, but not in a way anyone could have imagined. Anakin's fall to the dark side had unleashed a maelstrom of destruction, consuming everything in its path. I stumbled upon an old cinema, its screen cracked and faded. A faint image flickered on the screen, showing the iconic battle between good and evil. But it was too late now – the war was lost. The darkness had won, and all that remained was a desolate landscape of ash and despair.",
  "word count": 221,
  "dialog": [
    {
      "Meg":
        "I didn't see it coming, but the author's perspective on how Star Wars affected the galaxy was so thought-provoking!",
    },
    {
      "Lui":
        "Well, I must say that the novel was quite a departure from what we're used to in terms of sci-fi. It added a new layer of depth to the genre.",
    },
    {
      "Kerry":
        "I loved how the author explored the idea that even something as seemingly innocent as a movie could have catastrophic consequences!",
    },
    {
      "Billy":
        "Yeah, and I think it's interesting how the novel used the Star Wars franchise as a metaphor for the power of media to shape culture and society.",
    },
    {
      "Meg":
        "I'm still trying to wrap my head around the author's use of imagery. The desolate wasteland and the faded cinema screen really drove home the sense of loss and despair.",
    },
    {
      "Lui":
        "As a historian, I appreciated how the novel wove together historical events with fictional narrative. It was a unique blend that kept me engaged throughout.",
    },
    {
      "Kerry":
        "I'm not sure what to make of the ending, though. Did we really lose the war against the darkness?",
    },
    {
      "Billy":
        "Maybe it's not about winning or losing, but rather how we respond to adversity. The novel leaves us with more questions than answers.",
    },
  ],
  "quiz": [
    {
      "question":
        "What event had turned the once-blue skies a sickly shade of gray?",
      "options": [
        "The premiere of the first Star Wars film",
        "Anakin's fall to the dark side",
        "The power of the Force being unleashed",
        "A global catastrophe caused by human actions",
        "A natural disaster",
      ],
      "answer": 1,
    },
    {
      "question": "What was lost by the narrator?",
      "options": [
        "Their home",
        "Their family and friends",
        "The power of the Force",
        "Their planet's blue skies",
        "Their hope for a better future",
      ],
      "answer": 2,
    },
    {
      "question": "According to the dialogue, what is unique about this novel?",
      "options": [
        "It uses multiple timelines",
        "It adds a new layer of depth to the genre",
        "It has no historical context",
        "It only includes female protagonists",
        "It's set in space",
      ],
      "answer": 2,
    },
    {
      "question": "What is implied by the phrase 'the darkness had won'?",
      "options": [
        "The good side of the Force was victorious",
        "The war against evil had been lost",
        "The galaxy was in a state of peace and harmony",
        "The power of the Force was neutralized",
        "The universe was restored to its original state",
      ],
      "answer": 2,
    },
    {
      "question": "What did Billy think about the ending of the novel?",
      "options": [
        "He thought it was too abrupt",
        "He thought it was unsatisfying",
        "He thought it raised more questions than answers",
        "He thought it was a happy ending",
        "He thought it was a typical sci-fi conclusion",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
