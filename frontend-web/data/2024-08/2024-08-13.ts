import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The First Performance of Monteverdi's 'L'Orfeo'",
    "details":
      "On August 13, 1607, Claudio Monteverdi's opera 'L'Orfeo' premiered in Mantua, Italy. This was a significant event in the history of music and opera, as it is considered one of the first great operas in the Western classical tradition.",
  },
  "date": "2024-08-13",
  "title": "The Shadows of Mantua",
  "body":
    "In the depths of a dark and foreboding night, I stood before the ancient castle of Mantua, its turrets reaching towards the moon like skeletal fingers. It was said that on this very eve, in the year 1607, Claudio Monteverdi's opera 'L'Orfeo' had premiered within these walls, a masterpiece of music that would forever change the course of art and history.  \n\n As I stepped into the castle's grand halls, I felt an eerie presence surrounding me. The air was thick with the whispers of forgotten memories, and the shadows danced upon the walls like restless spirits. I wandered deeper, my footsteps echoing through the empty corridors, until I stumbled upon a hidden chamber, its door concealed behind a tattered tapestry.  \n\n Within this chamber, I discovered a mysterious manuscript, its pages yellowed with age and filled with cryptic symbols that seemed to hold secrets of their own. As I delicately turned the pages, I felt an otherworldly energy coursing through my veins, as if the very essence of 'L'Orfeo' was awakening within me. And in that moment, I knew that I had uncovered a mystery that would haunt me for eternity.",
  "word count": 190,
  "dialog": [
    {
      "Meg":
        "I'm still reeling from the eerie atmosphere in the castle! I felt like I was right there with you, exploring the hidden chamber.",
    },
    {
      "Kerry":
        "Yeah, and that mysterious manuscript? I loved how it seemed to hold secrets of its own. It's like the author was whispering them directly into our ears!",
    },
    {
      "Billy":
        "I know, right?! And what really got me was when you said 'L'Orfeo' was premiering in 1607 within those very walls. I'm obsessed with history, and that just blew my mind!",
    },
    {
      "Meg":
        "I loved how the story wove together music, mystery, and magic. It's like a dream come true for someone like me who loves fantasy and adventure!",
    },
    {
      "Lui":
        "Well, well, well! I'm impressed with all of you! You've got the essence of the novel down pat. As a teacher, it warms my heart to see students so engaged in their reading.",
    },
    {
      "Kerry":
        "Yeah, and it's not just about the story – it's about how we react to it. I mean, Billy here is going to go off and research that castle some more, while Meg will probably write her own fantasy novel inspired by it...",
    },
    {
      "Billy":
        "And Lui will probably make us all read another book on history, right?!",
    },
    {
      "Lui":
        "Hey, maybe! But only if you're all willing to learn something new. And speaking of which... who's up for a discussion on the themes of 'L'Orfeo'?",
    },
  ],
  "quiz": [
    {
      "question":
        "What was said to have premiered in the castle of Mantua on this very eve?",
      "options": [
        "A Christmas carol",
        "The opera 'L'Orfeo'",
        "A Halloween horror story",
        "A Shakespearean tragedy",
        "A historical documentary",
      ],
      "answer": 1,
    },
    {
      "question": "What was felt as I stepped into the castle's grand halls?",
      "options": [
        "Warmth and comfort",
        "Eerie presence and whispers of forgotten memories",
        "Fear and anxiety",
        "Excitement and joy",
        "Confusion and disorientation",
      ],
      "answer": 1,
    },
    {
      "question": "What was discovered in the hidden chamber?",
      "options": [
        "A treasure chest filled with gold coins",
        "A mysterious manuscript with cryptic symbols",
        "A magical amulet that grants wishes",
        "A portal to another dimension",
        "A secret passageway to the castle's kitchen",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was said to be awakening within me as I delicately turned the pages of the manuscript?",
      "options": [
        "The power of justice",
        "The will of the people",
        "The essence of 'L'Orfeo'",
        "The magic of love",
        "The spirit of adventure",
      ],
      "answer": 2,
    },
    {
      "question": "Who was impressed with Billy's obsession with history?",
      "options": [
        "Meg",
        "Kerry",
        "Lui",
        "All the students",
        "None of the above",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Gothic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
