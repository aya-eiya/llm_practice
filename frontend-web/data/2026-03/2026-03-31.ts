import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "The Theatre Royal in Drury Lane, London, is destroyed by a fire on March 31st",
    "details":
      "The Theatre Royal in Drury Lane, London was rebuilt and reopened in 1794.",
  },
  "date": "2026-03-31",
  "title": "The Flames of Deception",
  "body":
    "The night was dark and stormy when I received a message from an unknown number. It read: 'Meet me at the old theatre in Drury Lane at midnight. Come alone.' I tried to brush it off as a prank, but something about the words sent shivers down my spine.  \n\n As I walked through the empty streets, the wind howling around me, I couldn't shake off the feeling of being watched. The theatre loomed before me, its grand facade now a twisted ruin after the devastating fire in '94. But it was said that some things were left untouched by the flames - secrets and lies.  \n\n I pushed open the creaky door and stepped inside, my heart racing with anticipation. A faint light flickered in the back room, and I followed its lead to a small office where a figure waited. It was her, the mysterious woman who had been sending me messages. But what did she want from me? And why did I feel like I was walking into a trap?",
  "word count": 171,
  "dialog": [
    {
      "Meg":
        "I loved the way the author described the old theatre in Drury Lane, it felt like I was right there with the protagonist.",
    },
    {
      "Lui":
        "Yes, the setting is quite vivid and helps to build tension in the story. But what did you all think of the plot twists?",
    },
    {
      "Billy":
        "I loved the mystery aspect! It kept me guessing until the very end. I had no idea who the mysterious woman was or what she wanted from the protagonist.",
    },
    {
      "Kerry":
        "Totally agreed, Billy! And I liked how the author didn't shy away from exploring darker themes like secrets and lies. Made it feel more realistic.",
    },
    {
      "Meg":
        "I know, right? The way the author wove those themes into the story was so clever. It made me think about how even in the darkest of times, there's always hope.",
    },
    {
      "Lui":
        "Excellent points, Meg and Kerry! And Billy, you're right on track too. I'm glad to see you all are thinking critically about the novel. What did you think of the ending?",
    },
    {
      "Kerry":
        "Hmmm...I was a bit disappointed it ended so suddenly. I wanted more resolution or at least some kind of wrap-up.",
    },
    {
      "Billy":
        "Yeah, me too! But I guess that's just how life works sometimes, full of unanswered questions and untold stories.",
    },
  ],
  "quiz": [
    {
      "question":
        "Where did the protagonist receive a message from an unknown number?",
      "options": [
        "The old theatre",
        "Their home",
        "A coffee shop",
        "The park",
        "The school",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was said to be left untouched by the fire in '94 at the old theatre?",
      "options": [
        "Secrets and lies",
        "Furniture and decorations",
        "People's lives",
        "Nothing",
        "Everything",
      ],
      "answer": 0,
    },
    {
      "question":
        "Who loved the way the author described the old theatre in Drury Lane?",
      "options": [
        "Lui",
        "Billy",
        "Meg",
        "Kerry",
        "The narrator",
      ],
      "answer": 2,
    },
    {
      "question": "What did Billy like about the mystery aspect of the story?",
      "options": [
        "It was too easy to guess",
        "It kept him guessing until the end",
        "He didn't like it at all",
        "It had no plot twists",
        "None of these",
      ],
      "answer": 1,
    },
    {
      "question": "What did Kerry want from the story's ending?",
      "options": [
        "More resolution or a wrap-up",
        "A happier ending",
        "Less mystery",
        "No changes",
        "The same as it was",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Theater",
    "flavor": "Thriller",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
