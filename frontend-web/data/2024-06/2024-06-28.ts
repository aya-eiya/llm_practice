import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first performance of 'Hamilton' by Lin-Manuel Miranda",
    "details":
      "On June 28th, 2015, the hit musical 'Hamilton' premiered at Richard Rodgers Theatre in New York City, marking a major milestone in Broadway history and launching the career of composer-lyricist Lin-Manuel Miranda.",
  },
  "date": "2024-06-28",
  "title": "The Cogwheel Concerto",
  "body":
    "As the clockwork orchestra took to the stage, the air was electric with anticipation. The maestro's eyes gleamed like polished brass as he raised his baton, and the room fell silent in expectation of the first notes. It was a night that would go down in history as the most magnificent performance of 'Cogwheel Concerto' by renowned composer, Archibald Pocketwatch.  \n\n The music began with a gentle hum, like the quiet purr of a well-oiled gear, and gradually built to a crescendo of whirring cogs and ticking mechanisms. The audience was entranced, their eyes fixed on the intricate dance of gears and springs as the musicians coaxed forth a symphony of sound that seemed almost otherworldly.  \n\n As the final notes faded away, the crowd erupted into applause, their cheers and whistles mingling with the sweet scent of steam wafting through the air. It was clear that this was a performance that would be remembered for years to come, one that would inspire generations of inventors, musicians, and dreamers alike.",
  "word count": 168,
  "dialog": [
    {
      "Lui":
        "I must say, I was impressed by the author's use of descriptive language. It really brought the clockwork orchestra to life.",
    },
    {
      "Kerry":
        "Yeah, and the way the music built up to a crescendo was so cool! I felt like I was right there in the audience.",
    },
    {
      "Meg":
        "I loved how the novel wove together history, science, and art. It's not often you see those subjects combined in such an interesting way.",
    },
    {
      "Billy":
        "Totally agree with Meg. The blend of disciplines really made me think about the connections between them. And I loved the steampunk vibe!",
    },
    {
      "Lui":
        "As a history teacher, I appreciated how the novel incorporated real historical events and figures into its narrative. It added a layer of depth to the story.",
    },
    {
      "Kerry":
        "Yeah, it was like learning something new while still having fun with the story. I especially loved the part about Archibald Pocketwatch's inspirations for the Cogwheel Concerto.",
    },
    {
      "Meg":
        "I thought the characters were really well-developed too. You could tell how passionate they were about their work and their art.",
    },
    {
      "Billy":
        "And can we talk about the themes? I felt like it explored some pretty heavy ideas, like innovation, creativity, and perseverance. It was really inspiring!",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the name of the renowned composer who wrote the 'Cogwheel Concerto'?",
      "options": [
        "Archibald Pocketwatch",
        "Einstein",
        "Da Vinci",
        "Newton",
        "Galileo",
      ],
      "answer": 0,
    },
    {
      "question":
        "How did the author describe the sound of the clockwork orchestra at the beginning of the concert?",
      "options": [
        "Loud and boisterous",
        "Gentle hum",
        "Silent as a ghost",
        "Rough like a storm",
        "Whirring cogs",
      ],
      "answer": 1,
    },
    {
      "question": "What did Lui appreciate about the novel?",
      "options": [
        "The use of descriptive language",
        "The blend of history and science",
        "The steampunk vibe",
        "The well-developed characters",
        "The themes explored",
      ],
      "answer": 0,
    },
    {
      "question":
        "Who was inspired by Archibald Pocketwatch's Cogwheel Concerto?",
      "options": [
        "Inventors",
        "Musicians",
        "Dreamers",
        "All of the above",
        "None of the above",
      ],
      "answer": 3,
    },
    {
      "question": "What did Billy find inspiring about the novel?",
      "options": [
        "The use of descriptive language",
        "The blend of history and science",
        "The themes explored",
        "The steampunk vibe",
        "The well-developed characters",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Theater",
    "flavor": "Steampunk",
    "models": {
      "main": "llama3",
      "novel": "llama3",
    },
    "level": "Level_7",
  },
};
export default data;
