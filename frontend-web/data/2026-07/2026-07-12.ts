import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Broadway premiere of Oklahoma!",
    "details": "Oklahoma! opened at the St. James Theatre on July 12, 1943"
  },
  "date": "2026-07-12",
  "title": "Murder on Broadway",
  "body": "The curtains were about to open at the St. James Theatre on July 12, 1943. The audience was excited for the premiere of Oklahoma!, a new musical that promised to be a hit. But little did they know, something was off.  \n\n Emily, the lead actress, was nervous as she took her place on stage. She had always felt like something was watching her, and tonight was no exception. As the music began, she couldn't shake the feeling that someone was lurking in the shadows.  \n\n It wasn't until intermission that the first scream echoed through the theatre. Emily's understudy, Sarah, lay on the floor, a look of terror frozen on her face. The police were called, and soon the theatre was swarming with detectives. As they searched for clues, one thing became clear: someone had been watching from the wings.  \n\n Detective Jameson was stumped. He had never seen anything like this before. The killer seemed to be always one step ahead, leaving behind only a single clue: a torn piece of fabric caught in the stage door. It would take all his skills to unravel the mystery and bring the perpetrator to justice.",
  "word count": 192,
  "dialog": [
    {
      "Meg": "I was on the edge of my seat the whole time! I loved how they used the musical as a way to distract from the mystery."
    },
    {
      "Kerry": "Yeah, I was totally expecting it, but I didn't see who did it until the end. That detective Jameson is so smart!"
    },
    {
      "Lui": "Actually, Billy, that's not how it works in real life. Clues like a torn piece of fabric would be tested for DNA evidence."
    },
    {
      "Billy": "But Lui, think about it! The killer must have been someone who knew the theatre well, because they were always one step ahead of the detective. And what if they used that to their advantage?"
    },
    {
      "Meg": "That's so true, Billy! I loved how the author made you question everyone until the very end. It was like a puzzle waiting to be solved!"
    },
    {
      "Kerry": "I know, right? I was like 'aha!' when I finally figured out who it was. The way they wove everything together was genius."
    },
    {
      "Lui": "And I think what really made this novel stand out is its historical context. Using the 1940s setting added an extra layer of tension and intrigue to the story."
    }
  ],
  "quiz": [
    {
      "question": "What date was the premiere of Oklahoma! scheduled to open?",
      "options": [
        "July 10, 1943",
        "July 12, 1943",
        "August 15, 1943",
        "September 1, 1943",
        "October 20, 1943"
      ],
      "answer": 1
    },
    {
      "question": "Who was the lead actress in the musical Oklahoma!?",
      "options": [
        "Emily",
        "Sarah",
        "Detective Jameson's wife",
        "A famous Broadway star",
        "The understudy"
      ],
      "answer": 0
    },
    {
      "question": "What was the first clue to the mystery found by Detective Jameson?",
      "options": [
        "A torn piece of fabric caught in the stage door",
        "A suspicious letter opener on a character's desk",
        "A hidden key under a plant pot",
        "A cryptic message scrawled on the wall",
        "A mysterious phone call to the theatre"
      ],
      "answer": 0
    },
    {
      "question": "According to Lui, what would be done with the torn piece of fabric?",
      "options": [
        "It would be used as evidence to convict the killer",
        "It would be tested for DNA evidence",
        "It would be thrown away as irrelevant",
        "It would be used as a plot twist in the story",
        "It would be kept as a souvenir"
      ],
      "answer": 1
    },
    {
      "question": "What was the reaction of Kerry to the mystery?",
      "options": [
        "He thought it was poorly written and predictable",
        "He loved how it took him by surprise",
        "He found it boring and uninteresting",
        "He didn't see who did it until the end",
        "He guessed the killer from the start"
      ],
      "answer": 3
    }
  ],
  "params": {
    "theme": "Theater",
    "flavor": "Thriller",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1"
    },
    "level": "Level_2"
  }
}
export default data;