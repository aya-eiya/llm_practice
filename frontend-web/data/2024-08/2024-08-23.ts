import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The University of Edinburgh was founded on August 23, 1583.",
    "details":
      "It was established by a royal charter issued by King James VI of Scotland.",
  },
  "date": "2024-08-23",
  "title": "The University of Edinburgh",
  "body":
    "The University of Edinburgh was founded on August 23, 1583, by a royal charter issued by King James VI of Scotland. It was the first university in Scotland and one of the oldest in Britain. The university's motto is 'Crescit Eundo,' which means 'It grows with the going out.' This reflects the university's commitment to its students and alumni as they go out into the world to make a positive impact.  \n\n As I walked through the university's historic buildings, I couldn't help but feel a sense of pride and nostalgia. The university has a long history of academic excellence, and it's been the alma mater of many notable figures, including Charles Dickens, Sir Walter Scott, and Robert Louis Stevenson. Today, the University of Edinburgh is one of the top universities in Scotland and the UK, with a global reputation for research and innovation.  \n\n The university's campus is located in the heart of Edinburgh, surrounded by beautiful gardens and historic buildings. It's a vibrant and diverse community, with students from all over the world coming together to share ideas, experiences, and cultures. As I looked out at the students chatting and laughing together, I felt grateful to be a part of this incredible institution, and I knew that I was in good company.",
  "word count": 212,
  "dialog": [
    {
      "Billy":
        "I loved reading about the University of Edinburgh! It's amazing to think that it was founded in 1583.",
    },
    {
      "Kerry": "Yeah, I know, right? It's like, whoa!",
    },
    {
      "Meg":
        "I loved learning about the university's motto 'Crescit Eundo' - it's so inspiring!",
    },
    {
      "Lui":
        "Yes, it's a great reminder that we should always strive to grow and learn from our experiences.",
    },
    {
      "Billy":
        "I'm impressed by the university's long history of academic excellence. Did you know that Charles Dickens, Sir Walter Scott, and Robert Louis Stevenson all studied there?",
    },
    {
      "Kerry":
        "Whoa, that's so cool! I'd love to visit the university someday and see the historic buildings.",
    },
    {
      "Meg":
        "I loved reading about the students from different countries coming together to share ideas and cultures. It's like a big community!",
    },
    {
      "Lui":
        "Exactly, it's a great example of how education can bring people together and foster understanding.",
    },
  ],
  "quiz": [
    {
      "question": "What year was the University of Edinburgh founded?",
      "options": [
        "1500",
        "1583",
        "1600",
        "1620",
        "1640",
      ],
      "answer": 1,
    },
    {
      "question":
        "Who issued a royal charter to establish the University of Edinburgh?",
      "options": [
        "King Henry VIII of England",
        "King James VI of Scotland",
        "Queen Elizabeth I of England",
        "King Charles I of Scotland",
        "King George II of Scotland",
      ],
      "answer": 1,
    },
    {
      "question": "What is the motto of the University of Edinburgh?",
      "options": [
        "Crescit Eundo",
        "Aut nunquam tentare",
        "Per ardua ad astra",
        "Fortis et liber",
        "Veritas odium parit",
      ],
      "answer": 0,
    },
    {
      "question": "Which authors studied at the University of Edinburgh?",
      "options": [
        "Charles Dickens, Sir Walter Scott, and Robert Louis Stevenson",
        "Jane Austen, J.K. Rowling, and Charles Darwin",
        "William Shakespeare, Edgar Allan Poe, and George Orwell",
        "Mary Shelley, Bram Stoker, and H.G. Wells",
        "Emily Brontë, Charlotte Brontë, and Jane Eyre",
      ],
      "answer": 0,
    },
    {
      "question": "What is a feature of the University of Edinburgh's campus?",
      "options": [
        "It is located in a remote area",
        "It is surrounded by beautiful gardens and historic buildings",
        "It has a large library but no gardens",
        "It has a small campus with limited facilities",
        "It has a modern architecture but no historic buildings",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Education",
    "flavor": "Young Adult",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
