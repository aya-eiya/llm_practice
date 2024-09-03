import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first ethics conference is held in Berlin, Germany",
    "details":
      "The first International Conference on Ethics, sponsored by UNESCO, was held from September 9 to 10, 1953, in Berlin, Germany.",
  },
  "date": "2024-09-10",
  "title": "The Mysterious Case of the Missing Heirloom",
  "body":
    "It was a dark and stormy night when Lady Emma received a mysterious letter from her lawyer, Mr. Jenkins. The letter informed her that her late husband's most precious heirloom, a diamond necklace, had gone missing. Lady Emma was devastated and immediately summoned the police to investigate.  \n\n Detective James, a seasoned and sharp-minded investigator, was assigned to the case. He began questioning the staff and family members, but everyone seemed to have an alibi for the night of the theft. As he dug deeper, he discovered that Lady Emma's nephew, Thomas, had been in deep financial trouble and had a history of dishonesty.  \n\n James decided to pay Thomas a visit and found him acting suspiciously. When questioned about his whereabouts on the night of the theft, Thomas claimed he was at a friend's house, but when James checked with his friend, he said Thomas had left early that evening. James sensed that Thomas might be involved in the theft and decided to keep an eye on him.  \n\n As the investigation continued, James discovered that Thomas had been in deep financial trouble and had a history of dishonesty. He also found a suspicious letter in Thomas's mailbox, which seemed to point to his involvement in the theft. However, when questioned further, Thomas broke down and confessed to the crime.",
  "word count": 218,
  "dialog": [
    {
      "Meg":
        "I loved how Lady Emma was so devastated when she found out about the missing necklace! It felt like I was right there with her.",
    },
    {
      "Lui":
        "Excellent use of emotional language, Meg. It's essential to create a connection with the reader through descriptive passages.",
    },
    {
      "Kerry":
        "I think it's interesting how Detective James is so sharp-minded and suspicious. He's got a good instinct for figuring out who's involved in the theft!",
    },
    {
      "Billy":
        "Yeah, and I loved how he kept an eye on Thomas! It felt like Thomas was getting away with something, but then he finally confessed.",
    },
    {
      "Meg":
        "I know, right? It's always satisfying when the bad guys get caught! And I liked how the author included that suspicious letter in Thomas's mailbox. It added to the mystery!",
    },
    {
      "Lui":
        "That's a great point, Meg. The use of clues and red herrings is crucial in keeping the reader engaged. And Billy, you're right - it's essential to create tension and suspense in a story.",
    },
    {
      "Kerry":
        "I'm just glad they solved the mystery! It would be so frustrating if they never figured out who took the necklace.",
    },
    {
      "Billy": "Yeah, I know what you mean. But it was still a great read!",
    },
  ],
  "quiz": [
    {
      "question": "What happened to Lady Emma's heirloom?",
      "options": [
        "It was stolen",
        "It was lost",
        "It was given away",
        "It was inherited",
        "None of the above",
      ],
      "answer": 0,
    },
    {
      "question": "Who was assigned to investigate the case?",
      "options": [
        "Lady Emma's lawyer",
        "Detective James",
        "Thomas' friend",
        "The police chief",
        "A private investigator",
      ],
      "answer": 1,
    },
    {
      "question": "What did Detective James discover about Thomas?",
      "options": [
        "He was not involved in the theft",
        "He had a good alibi",
        "He was in deep financial trouble and had a history of dishonesty",
        "He was at a friend's house on the night of the theft",
        "None of the above",
      ],
      "answer": 2,
    },
    {
      "question": "What did Detective James find in Thomas' mailbox?",
      "options": [
        "A suspicious letter",
        "A note from his friend",
        "A receipt for something he bought",
        "A photo of himself",
        "None of the above",
      ],
      "answer": 0,
    },
    {
      "question": "Who finally confessed to the crime?",
      "options": [
        "Thomas",
        "Lady Emma's lawyer",
        "Detective James",
        "The police chief",
        "No one was ever caught",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Ethics",
    "flavor": "Crime",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
