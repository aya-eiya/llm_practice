import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first Apple I computer is released",
    "details":
      "Apple I, one of the first personal computers, was designed and hand-built by Steve Wozniak and was introduced at the Homebrew Computer Club in Palo Alto on April 7, 1976.",
  },
  "date": "2026-04-07",
  "title": "Byte-Sized History",
  "body":
    "The first Apple I computer was released in 1976 by Steve Wozniak, a pioneer in the field of personal computing. This innovative device marked the beginning of a new era in technology and paved the way for the modern smartphones we use today.  \n\n The Apple I was not only a revolutionary machine but also a symbol of American ingenuity and creativity. It was designed to be user-friendly, allowing individuals with little technical knowledge to operate it easily. This concept of making complex technology accessible to everyone has had a lasting impact on society.  \n\n As we reflect on the history of computing, we can see that each innovation builds upon previous discoveries. The Apple I's influence can be seen in later developments such as the Apple II, which further popularized personal computers. Today, we have laptops and tablets that are more powerful than any mainframe computer from the past.  \n\n In conclusion, the release of the first Apple I computer was a significant event in history, marking the beginning of a new era in technology and innovation. Its impact can still be seen today, inspiring new generations of tech-savvy individuals to push the boundaries of what is possible.",
  "word count": 196,
  "dialog": [
    {
      "Kerry":
        "I loved how it started with the Apple I computer! I didn't know that was the first personal computer.",
    },
    {
      "Meg":
        "Yeah, it's so cool to see how far technology has come since then. It makes me think about all the amazing things we can do now.",
    },
    {
      "Lui":
        "That's exactly what this novel is trying to say - each innovation builds upon previous ones and shapes our world today.",
    },
    {
      "Billy":
        "I know, right? I've always been fascinated by how technology affects society. This novel really made me think about that.",
    },
    {
      "Kerry":
        "And it's not just the tech itself, but also the people behind it - like Steve Wozniak and his impact on American ingenuity.",
    },
    {
      "Meg":
        "I love how the author wove together history, innovation, and creativity. It's a really unique perspective on the world of computing.",
    },
    {
      "Lui":
        "Indeed it is. As educators, we often focus on the technical aspects, but this novel reminds us to appreciate the people and stories behind the innovations.",
    },
    {
      "Billy":
        "I'm going to have to read more about Steve Wozniak now. He's really inspiring!",
    },
  ],
  "quiz": [
    {
      "question": "In what year was the first Apple I computer released?",
      "options": [
        "1975",
        "1976",
        "1977",
        "1980",
        "1990",
      ],
      "answer": 1,
    },
    {
      "question": "Who designed the Apple I computer?",
      "options": [
        "Steve Jobs",
        "Bill Gates",
        "Steve Wozniak",
        "Mark Zuckerberg",
        "Elon Musk",
      ],
      "answer": 2,
    },
    {
      "question": "What was a key feature of the Apple I computer?",
      "options": [
        "It was extremely expensive.",
        "It was user-friendly.",
        "It required technical knowledge to operate.",
        "It only worked with mainframe computers.",
        "It was only available in limited quantities.",
      ],
      "answer": 1,
    },
    {
      "question":
        "What is an example of a later development influenced by the Apple I?",
      "options": [
        "The iPad",
        "The iPhone",
        "The Macintosh computer",
        "The Apple II",
        "None of the above",
      ],
      "answer": 3,
    },
    {
      "question":
        "Who is mentioned as inspiring new generations of tech-savvy individuals to push the boundaries of what is possible?",
      "options": [
        "Steve Jobs",
        "Bill Gates",
        "Mark Zuckerberg",
        "Elon Musk",
        "Steve Wozniak",
      ],
      "answer": 4,
    },
  ],
  "params": {
    "theme": "Technology",
    "flavor": "Academic Essay",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
