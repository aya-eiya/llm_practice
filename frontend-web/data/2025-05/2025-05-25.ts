import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Premiere of The Muppet Movie",
    "details": "The Muppet Movie, an American musical comedy film directed by James Frawley and written by Jerry Juhl and T.S. Calihan, premiered on May 25, 1979."
  },
  "date": "2025-05-25",
  "title": "The Shadow of The Muppet Movie",
  "body": "It was supposed to be a night like any other at the local cinema, but as the lights dimmed and the projector whirred to life, I felt a chill run down my spine. The year was 1979, and The Muppet Movie was about to premiere. \n\n As I sat in the darkness, watching Kermit and Miss Piggy's big screen debut, I couldn't shake off the feeling that something was off. It started with small things - the sound of my name being whispered in the silence, the faint scent of rubber tires wafting through the air. \n\n But then, it happened. The Muppets began to sing and dance on screen, but their eyes seemed to lock onto me, their gazes piercing through the darkness. I tried to look away, but my eyes were frozen on them, unable to break the spell. \n\n And that's when I saw her - a woman in a Muppet costume, sitting in the row behind me, her eyes glowing with an otherworldly light. She was watching me, and I knew I was doomed.",
  "word count": 175,
  "dialog": [
    {
      "Meg": "I loved how the author used the Muppet Movie as a backdrop for something so dark and sinister. It really added to the mystery!"
    },
    {
      "Billy": "Yeah, I was totally sucked in by the creepy atmosphere! And that woman in the Muppet costume? Mind blown!"
    },
    {
      "Kerry": "I'm still trying to wrap my head around it. The way the author wove together historical events and pop culture references... it's genius!"
    },
    {
      "Lui": "As a teacher, I appreciate how the novel tackled themes of escapism and the power of storytelling. It's a great conversation starter for classrooms!"
    },
    {
      "Meg": "Exactly! And the way the author subverted expectations? Brilliant! I was completely caught off guard by that twist at the end."
    },
    {
      "Billy": "Ha! Yeah, me too! But what really got me was how it made me think about my own relationship with science and history. It's not just about learning facts..."
    },
    {
      "Kerry": "Totally agree! It's about understanding the world around us and our place in it. And that's something we can all learn from."
    },
    {
      "Lui": "Well said, young ones. As educators, we should be fostering that kind of critical thinking and curiosity in our students."
    }
  ],
  "quiz": [
    {
      "question": "What was the supposed event happening at the local cinema in 1979?",
      "options": [
        "The release of Star Wars",
        "The premiere of The Muppet Movie",
        "A film festival for horror movies",
        "The screening of a classic comedy movie",
        "An awards ceremony"
      ],
      "answer": 1
    },
    {
      "question": "What started to happen to the protagonist while watching The Muppet Movie?",
      "options": [
        "They felt happy and excited",
        "They noticed small things were off",
        "They fell asleep",
        "Their name was being whispered in the silence",
        "The projector stopped working"
      ],
      "answer": 1
    },
    {
      "question": "Who appeared to be watching the protagonist in the cinema?",
      "options": [
        "A woman in a Muppet costume",
        "Kermit and Miss Piggy themselves",
        "The film's director",
        "A group of teenagers",
        "The cinema's staff"
      ],
      "answer": 0
    },
    {
      "question": "How old is Billy, according to the dialogue?",
      "options": [
        "10 years old",
        "11 years old",
        "12 years old",
        "13 years old",
        "14 years old"
      ],
      "answer": 1
    },
    {
      "question": "What did Lui appreciate about the novel, as a teacher?",
      "options": [
        "Its light-hearted tone",
        "The way it tackled themes of escapism and storytelling",
        "Its complex plot twists",
        "The way it used historical events",
        "Its focus on science and history"
      ],
      "answer": 1
    }
  ],
  "params": {
    "theme": "Film",
    "flavor": "Horror",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1"
    },
    "level": "Level_2"
  }
}
export default data;