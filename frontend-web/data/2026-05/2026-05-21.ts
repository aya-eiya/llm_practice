import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "IBM announces the development of the first floppy disk",
    "details":
      "On May 21, 1972, IBM announced the development of the first floppy disk, a portable storage device that would become an essential tool for personal computers.",
  },
  "date": "2026-05-21",
  "title": "The Last Floppy Disk",
  "body":
    "In the ravaged streets of New York City, a lone survivor stumbled upon an ancient relic - the first floppy disk. Created by IBM in 1972, it was a marvel of its time, storing precious data that could be taken anywhere. But now, in a world where technology had long been reduced to dust, this humble device was a treasure beyond measure.\n\n\n The survivor, a young woman named Sarah, carefully lifted the disk from the ruins of an old computer store. She held it gingerly, as if it might shatter into a thousand pieces at any moment. As she turned it over in her hand, she wondered what secrets it held - perhaps the last remnants of humanity's knowledge, or maybe even a way to restore the world to its former glory.\n\n\n With a sense of reverence, Sarah made her way back to her makeshift camp, where a small group of fellow survivors waited with bated breath. She presented them with the floppy disk, and as one, they gazed upon it in awe. It was a symbol of what could be done - if only they had the knowledge and the will to rebuild.",
  "word count": 194,
  "dialog": [
    {
      "Billy":
        "This novel was amazing! I loved how it took me back to a time when technology was still in its infancy.",
    },
    {
      "Kerry":
        "I know, right? It made me think about all the old computers my dad used to work on. He had these huge machines that took up an entire room!",
    },
    {
      "Meg":
        "I loved how Sarah found this ancient relic and it gave her hope for rebuilding society. It was so inspiring!",
    },
    {
      "Lui":
        "Yes, it's a powerful reminder of the importance of preserving our knowledge and technology.",
    },
    {
      "Billy":
        "And I'm still trying to figure out what exactly that floppy disk is capable of doing. Can you imagine having data on something as small as a coin?",
    },
    {
      "Kerry":
        "Ha! Yeah, that would be crazy. But I have to say, the way they used it in the story was so cool. It's like they were using it to hold onto their past.",
    },
    {
      "Meg":
        "I think what I loved most about this novel is how it made me realize how much we take our technology for granted. We always think of it as just being there, but really it's something that's been built on top of all these other innovations and discoveries.",
    },
    {
      "Lui":
        "Well said, Meg. And Billy, I think you bring up a great point about the potential of this floppy disk. Who knows what kind of impact it could have if we were to harness its power?",
    },
  ],
  "quiz": [
    {
      "question": "In what year was the first floppy disk created?",
      "options": [
        "1965",
        "1970",
        "1972",
        "1980",
        "1990",
      ],
      "answer": 2,
    },
    {
      "question": "What did Sarah find in the ruins of an old computer store?",
      "options": [
        "A laptop",
        "An old phone",
        "The first floppy disk",
        "A tablet",
        "A desktop computer",
      ],
      "answer": 2,
    },
    {
      "question": "Who found the ancient relic, a floppy disk?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "Sarah",
      ],
      "answer": 4,
    },
    {
      "question": "What did Billy say he loved about the novel?",
      "options": [
        "How it took him back to the past",
        "How it made him think about his dad's work",
        "The way Sarah used the floppy disk to hold onto her past",
        "The potential of the floppy disk",
        "All of the above",
      ],
      "answer": 0,
    },
    {
      "question": "What did Meg say she loved most about the novel?",
      "options": [
        "How it made her realize how much we take our technology for granted",
        "The way the story used the floppy disk as a symbol of hope",
        "The potential of the floppy disk to rebuild society",
        "All of the above",
        "None of the above",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Technology",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_6",
  },
};
export default data;
