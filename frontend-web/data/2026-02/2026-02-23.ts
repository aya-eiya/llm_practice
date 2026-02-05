import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Discovery of King Tut's Tomb",
    "details":
      "On February 23, 1922, British archaeologist Howard Carter made a historic discovery when he unearthed the tomb of Pharaoh Tutankhamun in Egypt's Valley of the Kings.",
  },
  "date": "2026-02-23",
  "title": "The Lost Treasure of King Tut",
  "body":
    "The sun beat down on the dusty tombs of Egypt's Valley of the Kings. Dr. Maria Rodriguez, a renowned archaeologist, had spent years searching for the lost treasure of Pharaoh Tutankhamun. She finally stumbled upon an ancient text that hinted at its location - within the tomb itself. With her team by her side, she carefully navigated through the narrow passages, their hearts racing with excitement.\n\n As they reached the inner chamber, they discovered a mysterious inscription etched into the wall. 'The eyes of the pharaoh see all,' it read. Maria felt a shiver run down her spine as she realized that this must be a test for them to prove their worth.\n\n But what followed was a series of cryptic clues and puzzles, each one leading them closer to the treasure. They unraveled hieroglyphics, solved riddles, and decoded hidden messages. With every step, Maria felt like she was unraveling a thousand-year-old mystery, one that would change history forever.\n\n But as they neared their goal, they were confronted by a rival group of treasure hunters, who would stop at nothing to claim the treasure for themselves.",
  "word count": 186,
  "dialog": [
    {
      "Meg":
        "I'm so excited to discuss this novel! I felt like I was right there in Egypt with Dr. Maria Rodriguez.",
    },
    {
      "Lui":
        "Yes, the author did a great job of transporting us to ancient Egypt. But what struck me most was how Maria's team had to solve puzzles and riddles to reach the treasure.",
    },
    {
      "Kerry":
        "I know, right? I loved how they had to figure out the hieroglyphics and the hidden messages! It made it feel like a real adventure.",
    },
    {
      "Billy":
        "And didn't you guys think that the rival group of treasure hunters added an extra layer of tension to the story?",
    },
    {
      "Meg":
        "Totally! I was on the edge of my seat when they were competing with Dr. Rodriguez's team. It made me feel like I was right there in the tomb, racing against time.",
    },
    {
      "Lui":
        "Well, I think what really stood out to me was how Maria and her team worked together as a team. They used their diverse skills and expertise to overcome each challenge.",
    },
    {
      "Kerry":
        "Yeah, that's true. But at the same time, it felt like they were all learning from each other and growing as individuals. It was really inspiring!",
    },
    {
      "Billy":
        "I completely agree! And I think what made this novel so special is how it blended history and mystery with a compelling story.",
    },
    {
      "Meg":
        "Absolutely! Now I'm hooked on ancient Egyptian history and archaeology. Who knows, maybe one of us will become the next Dr. Maria Rodriguez!",
    },
    {
      "Lui":
        "Well, it's clear that this novel has sparked our imaginations and enthusiasm for learning. And who knows what other adventures await us in the world of archaeology?",
    },
  ],
  "quiz": [
    {
      "question":
        "What was Dr. Maria Rodriguez searching for in the Valley of the Kings?",
      "options": [
        "The lost city of Atlantis",
        "The tomb of Pharaoh Tutankhamun",
        "The treasure of King Tut",
        "The secrets of ancient Egypt",
        "The lost civilization",
      ],
      "answer": 2,
    },
    {
      "question": "What did Maria and her team discover in the inner chamber?",
      "options": [
        "A hidden door",
        "A mysterious inscription etched into the wall",
        "A secret passage",
        "A treasure chest",
        "A skeleton",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the name of Dr. Maria Rodriguez's team member who expressed her excitement about the novel?",
      "options": [
        "Lui",
        "Billy",
        "Meg",
        "Kerry",
        "Dr. Rodriguez",
      ],
      "answer": 2,
    },
    {
      "question": "What did Lui think was impressive about Maria's team?",
      "options": [
        "Their ability to solve puzzles and riddles quickly",
        "How they used their diverse skills and expertise to overcome each challenge",
        "Their leadership skills",
        "Their physical strength",
        "Their bravery",
      ],
      "answer": 1,
    },
    {
      "question": "What sparked Kerry's interest in the story?",
      "options": [
        "The rival group of treasure hunters",
        "The mystery and puzzles",
        "The ancient Egyptian history and culture",
        "The teamwork and collaboration between Maria and her team members",
        "All of the above",
      ],
      "answer": 4,
    },
  ],
  "params": {
    "theme": "Archeology",
    "flavor": "Mystery",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
