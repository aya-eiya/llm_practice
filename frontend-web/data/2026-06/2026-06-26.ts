import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Stock Market Crash of 1920",
    "details":
      "On June 26, 1920, a stock market crash occurred in New York City, causing widespread financial panic and leading to a decline in stock prices.",
  },
  "date": "2026-06-26",
  "title": "Gears of Panic",
  "body":
    "The fog rolled in off the Hudson River, shrouding Lower Manhattan in a damp mist. I adjusted my goggles and checked the time on my pocket watch - 9:45 AM sharp. The streets were alive with people rushing to and fro, their faces set with determination. But amidst the bustle, a sense of unease hung in the air.  \n\n It started as a whisper, a rumor that spread like wildfire through the trading floors. Stocks were plummeting, fortunes were being lost, and the very fabric of our economy was unraveling. Panic set in, and people scrambled to sell their shares before it was too late.  \n\n I watched from the sidelines as chaos erupted on Wall Street. The crash of '20 had begun, and nothing would ever be the same again. As a member of the Steamworkers' Guild, I knew that this disaster would have far-reaching consequences for our craft. But little did I know, this was only the beginning of a gear-turning revolution that would shake the very foundations of our world.",
  "word count": 171,
  "dialog": [
    {
      "Billy":
        "Wow, I loved how it started with the fog rolling in off the Hudson River! It felt so real.",
    },
    {
      "Meg":
        "I know, right? The author's writing style is amazing. I especially loved the part where they described the trading floors and the panic that set in.",
    },
    {
      "Lui":
        "Ah, yes, the author did an excellent job of capturing the essence of that time period. It's fascinating to see how events like the crash of '20 can shape a nation's history.",
    },
    {
      "Kerry":
        "I'm more concerned about the implications for our world. I mean, what if something similar happened today? How would we cope?",
    },
    {
      "Billy":
        "Good question, Kerry! But I think that's one of the things I loved most about this novel - it made me think about the consequences of our actions.",
    },
    {
      "Meg":
        "I also loved how it explored the idea of a 'gear-turning revolution.' It's like, what if we could change the course of history just by adjusting a few key gears?",
    },
    {
      "Lui":
        "Well, I think that's the beauty of fiction - it allows us to explore these kinds of what-if scenarios and learn from them. And this novel certainly did its job in getting us thinking.",
    },
    {
      "Kerry":
        "Definitely! Although, I have to say, I'm still a bit worried about our world. Do you think we'd be able to handle something like that?",
    },
  ],
  "quiz": [
    {
      "question": "What time was it according to the narrator's pocket watch?",
      "options": [
        "9:00 AM",
        "9:15 AM",
        "9:45 AM",
        "10:00 AM",
        "11:00 AM",
      ],
      "answer": 2,
    },
    {
      "question": "Where did the chaos erupt as described in the text?",
      "options": [
        "Wall Street",
        "The New York Stock Exchange",
        "The Hudson River",
        "Lower Manhattan",
        "The Steamworkers' Guild",
      ],
      "answer": 0,
    },
    {
      "question":
        "According to the dialogue, what are the readers concerned about?",
      "options": [
        "The impact on the Steamworkers' Guild",
        "The implications for our world",
        "The consequences of the crash of '20",
        "The effects on Wall Street",
        "Nothing specific",
      ],
      "answer": 1,
    },
    {
      "question":
        "What is mentioned as starting as a whisper and spreading like wildfire?",
      "options": [
        "The crash of '20",
        "Panic in Lower Manhattan",
        "Rumors of the Steamworkers' Guild's involvement",
        "A gear-turning revolution",
        "Stocks plummeting",
      ],
      "answer": 3,
    },
    {
      "question":
        "Who mentioned that the author did an excellent job capturing the essence of that time period?",
      "options": [
        "Billy",
        "Meg",
        "Lui",
        "Kerry",
        "All of them",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Economy",
    "flavor": "Steampunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
