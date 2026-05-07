import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "May 9th, 1922: Discovery of King Tut's Tomb",
    "details":
      "Howard Carter discovers the tomb of Pharaoh Tutankhamun in Egypt's Valley of the Kings, sparking a global fascination with ancient Egyptian culture and archaeology.",
  },
  "date": "2026-05-09",
  "title": "The Pharaoh's Secret",
  "body":
    "The sun had just set over the Valley of the Kings, casting a golden glow over the ancient tombs. Dr. Maria Rodriguez, a renowned archaeologist, stood before the entrance to King Tut's tomb, her heart racing with anticipation. She had spent years searching for this moment, and finally, she had discovered the hidden passageway that led to the pharaoh's resting place.  \n\n As she stepped into the tomb, Maria was struck by the eerie silence that filled the air. The walls were adorned with intricate hieroglyphics, telling the story of Tutankhamun's life and reign. She walked deeper into the tomb, her eyes scanning the chamber for any sign of the pharaoh's treasures.  \n\n Suddenly, Maria stumbled upon a hidden compartment, cleverly concealed behind a false stone wall. Inside, she found a collection of ancient artifacts, including a golden ankh and a silver scarab bead. But it was what lay next to them that left her breathless - a tattered papyrus scroll, bearing the pharaoh's own handwriting.  \n\n The implications were staggering. This discovery could rewrite the history of ancient Egypt, revealing secrets that had been lost for millennia. Maria knew she had stumbled upon something much bigger than herself, and she was determined to unravel the mystery of King Tut's tomb once and for all.",
  "word count": 212,
  "dialog": [
    {
      "Kerry":
        "Whoa, this novel was crazy! I loved how they discovered that hidden passageway to King Tut's tomb.",
    },
    {
      "Meg":
        "I know, right? The way Maria described the pharaoh's treasures and the papyrus scroll had me on edge. And what if it's true that she really did discover something groundbreaking?",
    },
    {
      "Billy":
        "It's like a real-life adventure! I loved how they found all those artifacts and the tattered scroll with King Tut's own handwriting on it.",
    },
    {
      "Lui":
        "Well, students, let's not get ahead of ourselves. We need to separate fact from fiction here. Let's analyze what we know about ancient Egypt and the Valley of the Kings.",
    },
    {
      "Kerry":
        "But isn't that the point? To explore new ideas and challenge our understanding? It's what makes history so cool!",
    },
    {
      "Meg":
        "I agree with Kerry. And I think it's amazing how Maria's discovery could change everything we thought we knew about King Tut. It's like a mystery waiting to be solved.",
    },
    {
      "Billy":
        "And the best part is, it's not just about the past – it's about how it can shape our understanding of the world today.",
    },
    {
      "Lui":
        "Okay, let's keep the discussion civil and on topic. We're exploring the historical context, remember?",
    },
  ],
  "quiz": [
    {
      "question": "What had Dr. Maria Rodriguez spent years searching for?",
      "options": [
        "The hidden passageway to King Tut's tomb",
        "A collection of ancient artifacts",
        "A tattered papyrus scroll",
        "The Valley of the Kings",
        "Ancient Egypt's history",
      ],
      "answer": 0,
    },
    {
      "question": "What was inside the hidden compartment?",
      "options": [
        "Only a golden ankh and a silver scarab bead",
        "Only a tattered papyrus scroll",
        "A collection of ancient artifacts, including a golden ankh and a silver scarab bead, and a tattered papyrus scroll",
      ],
      "answer": 2,
    },
    {
      "question":
        "What did Maria find next to the golden ankh and the silver scarab bead?",
      "options": [
        "A map of the Valley of the Kings",
        "A collection of ancient texts",
        "A tattered papyrus scroll bearing King Tut's own handwriting",
      ],
      "answer": 2,
    },
    {
      "question": "What was significant about the discovery that Maria made?",
      "options": [
        "It could rewrite the history of modern Egypt",
        "It could change our understanding of King Tut's reign",
        "It revealed secrets that had been lost for millennia",
        "It found a new hidden passage in the Valley of the Kings",
      ],
      "answer": 2,
    },
    {
      "question": "What was Billy's opinion on the novel?",
      "options": [
        "He thought it was boring",
        "He loved how they discovered the hidden passageway to King Tut's tomb",
        "He didn't like the story at all",
        "It was okay, but not his favorite",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Archeology",
    "flavor": "Mystery",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_8",
  },
};
export default data;
