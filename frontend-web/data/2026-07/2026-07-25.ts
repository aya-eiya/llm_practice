import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Discovery of Ancient Egyptian Tomb by Howard Carter",
    "details": "On July 25, 1922, British archaeologist Howard Carter made a groundbreaking discovery when he uncovered the tomb of Pharaoh Tutankhamun in Egypt's Valley of the Kings."
  },
  "date": "2026-07-25",
  "title": "Shadows in the Valley of the Kings",
  "body": "As I stepped into the scorching desert sun, the whispers of the ancients seemed to echo through the sands. The Valley of the Kings lay before me, a labyrinth of mysteries waiting to be unraveled. My heart beat with anticipation as I followed Howard Carter's footsteps, tracing the path he had taken all those years ago.  \n\n The tomb of Pharaoh Tutankhamun loomed before us, its grandeur a testament to the ingenuity and craftsmanship of the Egyptians. As we ventured deeper into the crypt, the air grew thick with an otherworldly presence. I felt the weight of history upon me, the whispers growing louder with each step.  \n\n And then, it happened. The moment that would change my life forever. A glint of gold caught my eye, and I beheld the face of the Pharaoh himself. His eyes seemed to gaze into mine, as if sharing a secret known only to the dead. In that instant, the veil between worlds parted, and I was initiated into a realm beyond mortal comprehension.",
  "word count": 169,
  "dialog": [
    {
      "Meg": "I just finished reading the novel and I have to say, it's one of my favorites."
    },
    {
      "Kerry": "Yeah, me too! The way the author described the Valley of the Kings was so vivid."
    },
    {
      "Lui": "Yes, the author did a great job of bringing the history to life. But what struck you most about the novel?"
    },
    {
      "Billy": "I loved how the protagonist felt like they were transported back in time. It made me think about how much we take our own world for granted."
    },
    {
      "Meg": "That's so true, Billy! And I loved how the author wove together the mystery of the Pharaoh's tomb with the protagonist's personal journey."
    },
    {
      "Kerry": "Yeah, it was like a puzzle coming together. But what did you think about the ending?"
    },
    {
      "Lui": "The ending was quite fitting, considering the themes of the novel. It left me with a lot to think about."
    },
    {
      "Billy": "Definitely. I'm still trying to process everything that happened in the story."
    }
  ],
  "quiz": [
    {
      "question": "What was the name of the pharaoh whose tomb the protagonist visited?",
      "options": [
        "Ramses II",
        "Tutankhamun",
        "Khufu",
        "Hatshepsut",
        "Cleopatra"
      ],
      "answer": 1
    },
    {
      "question": "According to the novel, what was the atmosphere like in the tomb as the protagonist ventured deeper?",
      "options": [
        "Bright and airy",
        "Thick with an otherworldly presence",
        "Musty and dimly lit",
        "Cool and refreshing",
        "Unsettling and eerie"
      ],
      "answer": 1
    },
    {
      "question": "What did Billy like about the protagonist's experience in the story?",
      "options": [
        "He felt transported back in time.",
        "He enjoyed the historical details.",
        "It made him think about how much we take our own world for granted.",
        "He liked the puzzle aspect of the novel.",
        "None of the above"
      ],
      "answer": 2
    },
    {
      "question": "What did Meg like about the author's description of the Valley of the Kings?",
      "options": [
        "It was too vivid.",
        "It was too dull.",
        "She loved how it brought history to life.",
        "She didn't notice anything special.",
        "None of the above"
      ],
      "answer": 2
    },
    {
      "question": "What did Lui think about the ending of the novel?",
      "options": [
        "He thought it was rushed.",
        "He thought it was dragged out too long.",
        "It left him with a lot to think about.",
        "He didn't care for the ending.",
        "None of the above"
      ],
      "answer": 2
    }
  ],
  "params": {
    "theme": "Archeology",
    "flavor": "Gothic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1"
    },
    "level": "Level_8"
  }
}
export default data;