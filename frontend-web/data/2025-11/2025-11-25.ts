import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Black Monday",
    "details":
      "The 1987 stock market crash, also known as Black Monday, occurred on October 19, 1987. However, I couldn't find a significant economic event specifically on November 25th.",
  },
  "date": "2025-11-25",
  "title": "Black Monday: The Great Market Storm",
  "body":
    "The sky turned dark that morning in October 1987 as strange clouds gathered over Wall Street. Investors felt a chill run down their spines when they looked at the falling numbers on their screens. \n\n Nobody knew what was causing this sudden drop, but it seemed to be spreading faster than any storm ever seen before. Market traders began panicking, selling everything in sight, and some even fled from their offices in fear. \n\n The streets outside grew quiet as people stopped to watch the chaos unfold on their computer screens. Rumors spread quickly through the crowd about what was happening inside the stock exchange buildings. Some said it was a conspiracy, others claimed it was just bad luck. No one knew for sure, but all agreed that something was terribly wrong in the city's financial heart. \n\n As night fell on Wall Street, investors began to realize the true extent of what had happened during the day. The damage was already done - thousands of fortunes were lost overnight, and many families' dreams along with them.",
  "word count": 174,
  "dialog": [
    {
      "Billy":
        "I love the novel! The way it describes the stock market crash in 1987 really opened my eyes to how vulnerable our financial systems can be.",
    },
    {
      "Meg":
        "Oh, I completely agree Billy! As someone who loves reading about mysterious events, this story was so captivating. The atmosphere of fear and uncertainty is something I could relate to through all the books I've read.",
    },
    {
      "Kerry":
        "You guys are missing the point! This wasn't just some normal market crash - it was a result of human greed and mismanagement. Look at Black Monday, it's still considered one of the worst crashes in history!",
    },
    {
      "Lui":
        "Let me add my two cents here. While this novel does a great job highlighting the chaos of 1987, we shouldn't forget that market crashes often have deeper underlying causes like speculation and poor regulation.",
    },
    {
      "Billy":
        "That's what I love about it - how it shows both sides! The human element is just as important as the economic factors. It makes me want to learn more about economics now!",
    },
    {
      "Meg":
        "I'm starting a book club with my friends now, and we're going to read some books that deal with similar themes of financial crises. Do any of you have recommendations?",
    },
    {
      "Kerry":
        "How about 'The Big Short'? It's a great movie too, but the book is even better! It really shows how people like us can get caught up in these big financial messes.",
    },
    {
      "Lui":
        "Excellent choice Kerry. And Billy, your interest in economics is wonderful - just make sure you're informed about more than just the numbers!",
    },
  ],
  "quiz": [
    {
      "question":
        "What was happening on Wall Street in October 1987 according to the novel?",
      "options": [
        "A trade war between countries",
        "A financial crisis with huge losses",
        "A new economic policy being implemented",
        "A peaceful transition of power",
        "None of these",
      ],
      "answer": 1,
    },
    {
      "question":
        "Which book/movie did Kerry recommend for reading about similar themes?",
      "options": [
        "The Big Short (movie)",
        "The Big Short (book)",
        "Black Monday (book)",
        "Black Monday (movie)",
        "None of these",
      ],
      "answer": 1,
    },
    {
      "question":
        "How old is the teacher character Lui according to the description?",
      "options": [
        "11 years",
        "12 years",
        "42 years",
        "13 years",
        "25 years",
      ],
      "answer": 2,
    },
    {
      "question":
        "Which event was being described in the novel text as 'Black Monday'?",
      "options": [
        "A historical battle",
        "A stock market crash",
        "A natural disaster",
        "A political uprising",
        "None of these",
      ],
      "answer": 1,
    },
    {
      "question":
        "Who said that Billy's interest in economics was wonderful and to make sure he's informed about more than just numbers?",
      "options": [
        "Billy himself",
        "Meg",
        "Kerry",
        "Lui",
        "No one mentioned this",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Economy",
    "flavor": "Fantasy",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_4",
  },
};
export default data;
