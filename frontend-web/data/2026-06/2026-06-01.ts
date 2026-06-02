import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Fermat's Last Theorem",
    "details":
      "Pierre de Fermat made a claim that he had a proof for the theorem 'a^n + b^n = c^n has no integer solutions when n > 2', but unfortunately, his proof was lost upon his death. It wasn't until 1994 when Andrew Wiles published a proof of the theorem using modular forms.",
  },
  "date": "2026-06-01",
  "title": "The Lost Theorem of Despair",
  "body":
    "In the ravaged streets of New Mathville, a lone mathematician, Emma, scoured the ruins for any hint of hope. The world had been plunged into darkness by the failed proof of Fermat's Last Theorem, which had been touted as the solution to all mathematical problems. But it was not meant to be.  \n\n As she delved deeper into the abandoned library, Emma stumbled upon an ancient text hidden away in a forgotten corner. Its yellowed pages whispered secrets of the theorem, but also warned of its catastrophic consequences. The more she read, the more she realized that some mathematical truths were better left unspoken.  \n\n With each passing day, the city's mathematically gifted citizens succumbed to madness and despair. Their once-precise calculations now reduced to incoherent scribbles on chalkboards. Emma knew she had to find a way to silence the theorem's eerie whispers before it was too late. For if its secrets were revealed, all would be lost in an abyss of mathematical chaos.",
  "word count": 162,
  "dialog": [
    {
      "Meg":
        "I couldn't put it down, the way Emma's story wove together history and math was so captivating!",
    },
    {
      "Lui":
        "Yes, I appreciated how the author highlighted the importance of understanding the context behind mathematical discoveries.",
    },
    {
      "Kerry":
        "Wait, what happened to Fermat's Last Theorem? Did they really prove it?",
    },
    {
      "Billy":
        "Yeah, that was so cool! I loved how the author made math seem like a mystery to solve, not just something you do in school.",
    },
    {
      "Meg":
        "I know, right? And the way Emma discovered the ancient text was so exciting. It made me want to go searching for hidden treasures in the library!",
    },
    {
      "Lui":
        "That's exactly what I love about this novel - it shows how math is all around us, even in the most unexpected places.",
    },
    {
      "Kerry":
        "But what about the consequences of revealing Fermat's secrets? Do you think that could really happen?",
    },
    {
      "Billy":
        "I don't know... but it would be so cool if we got to see a world where math and science are used for good, not just solving problems.",
    },
  ],
  "quiz": [
    {
      "question": "What was the event that plunged the world into darkness?",
      "options": [
        "The failed proof of Fermat's Last Theorem",
        "A war in New Mathville",
        "A meteor hitting Earth",
        "A pandemic spreading rapidly",
        "A financial crisis",
      ],
      "answer": 0,
    },
    {
      "question": "What did Emma find hidden away in the library?",
      "options": [
        "An ancient text with secrets of Fermat's Last Theorem",
        "A treasure map leading to New Mathville's riches",
        "A mysterious woman who could solve any math problem",
        "A book on advanced calculus",
        "A device that made math easier",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was happening to the city's mathematically gifted citizens?",
      "options": [
        "They were being praised for their work",
        "They were losing interest in math",
        "They were succumbing to madness and despair",
        "They were moving to a new city",
        "They were becoming experts in physics",
      ],
      "answer": 2,
    },
    {
      "question": "What did Emma know she had to do?",
      "options": [
        "She had to find more mathematicians to help her",
        "She had to stop the theorem's eerie whispers before it was too late",
        "She had to learn more about Fermat's Last Theorem",
        "She had to leave New Mathville and never come back",
        "She had to forget about math",
      ],
      "answer": 1,
    },
    {
      "question": "What did Billy think would be cool?",
      "options": [
        "A world where math and science are used for good, not just solving problems",
        "A city filled with mathematicians who could solve any problem",
        "A book that explained all mathematical concepts",
        "A device that made math easier",
        "A treasure map leading to New Mathville's riches",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Mathematics",
    "flavor": "Dystopian",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
