import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Beatles Release 'Please Please Me'",
    "details":
      "The Beatles release their debut studio album, 'Please Please Me', in the United Kingdom. The album reaches number one on the UK Albums Chart and stays there for 30 weeks.",
  },
  "date": "2026-04-02",
  "title": "Echoes of Liverpool",
  "body":
    "The rain poured down on the streets of Liverpool like a mournful dirge, casting a gloomy shadow over the city's iconic landmarks. It was as if the heavens themselves were weeping for the loss of something precious. I stood there, shivering beneath the awning of a deserted café, my heart heavy with foreboding. \n\n The news had spread like wildfire – The Beatles' debut album 'Please Please Me' had been released just hours ago, and its haunting melodies were already seeping into the city's psyche. But I knew that this was no ordinary music. It was a siren's call, beckoning me towards some dark and foreboding place. \n\n As I walked through the deserted streets, the notes of 'I Saw Her Standing There' seemed to take on a life of their own, swirling around me like a vortex of madness. And then, I saw her – a figure shrouded in shadows, standing on the edge of the Mersey River. She beckoned me closer, and I felt myself being drawn towards her with an otherworldly force.",
  "word count": 173,
  "dialog": [
    {
      "Meg":
        "I was completely absorbed in the story, it felt like I was right there with the narrator!",
    },
    {
      "Kerry":
        "But didn't you find it a bit creepy? The way the narrator got drawn into this dark world?",
    },
    {
      "Lui":
        "Actually, I think that's what made the novel so effective. It tapped into our collective fears and anxieties.",
    },
    {
      "Billy":
        "I was thinking about the scientific aspects of the story. Do you think it's possible for a person to be hypnotized by music like that?",
    },
    {
      "Meg":
        "I don't know, but I loved how the author used imagery to describe the atmosphere in Liverpool. It felt so real!",
    },
    {
      "Kerry":
        "Yeah, and the way the narrator was drawn into this world of dark magic... it was like he was under some kind of spell.",
    },
    {
      "Lui":
        "As an educator, I appreciated how the author wove historical context into the narrative. It added a richness to the story that made it even more compelling.",
    },
    {
      "Billy":
        "I'm not sure about the historical stuff, but I did like how the narrator used music as a way to escape his problems. Maybe there's something to that?",
    },
  ],
  "quiz": [
    {
      "question": "What was released just hours ago?",
      "options": [
        "The Beatles' debut album 'Please Please Me'",
        "The news about the mysterious woman",
        "The story of Detective Jameson",
        "The historical context of Liverpool",
        "The music 'I Saw Her Standing There'",
      ],
      "answer": 0,
    },
    {
      "question":
        "How did the narrator feel when walking through the deserted streets?",
      "options": [
        "He felt happy and carefree",
        "He felt scared but determined",
        "He felt shivering beneath the awning of a deserted café",
        "He felt nothing out of the ordinary",
        "He felt angry at the situation",
      ],
      "answer": 2,
    },
    {
      "question": "What did Meg think about the story?",
      "options": [
        "She found it boring and unengaging",
        "She loved how the author used imagery to describe the atmosphere in Liverpool",
        "She thought it was too long and drawn out",
        "She didn't understand what was happening",
        "She wanted more details about the historical context",
      ],
      "answer": 1,
    },
    {
      "question":
        "Who did Kerry think might be hypnotized by music like 'I Saw Her Standing There'?",
      "options": [
        "The narrator",
        "Meg",
        "Billy",
        "Lui",
        "Detective Jameson",
      ],
      "answer": 2,
    },
    {
      "question": "What added richness to the story for Lui, an educator?",
      "options": [
        "The music 'I Saw Her Standing There'",
        "The historical context of Liverpool",
        "The mysterious woman's appearance",
        "The narrator's feelings and thoughts",
        "The deserted streets of Liverpool",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Horror",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_6",
  },
};
export default data;
