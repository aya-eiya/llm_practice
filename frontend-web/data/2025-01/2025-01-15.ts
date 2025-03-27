import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Opening of the first department store",
    "details":
      "The Bon Marché, a large department store owned by French brothers Gustave and Alexandre Dufaÿ, opened in Paris on January 15, 1852. It was considered a revolution in retail as it offered a wide range of goods under one roof, with prices clearly marked on the shelves.",
  },
  "date": "2025-01-15",
  "title": "A Rose in the Ruins",
  "body":
    "In the aftermath of the war, Paris lay in ruins. The once beautiful city was now a mere shadow of its former self. Amidst the rubble and debris, a young woman named Colette emerged. She had lost everything - her family, her home, and her sense of purpose. \n\n But amidst the devastation, Colette found a small rose bush growing in the midst of the ruins. It was a tiny, delicate flower that seemed to defy the destruction around it. As she gazed at the rose, Colette felt a spark of hope ignite within her. She began to nurture the plant, and soon, it grew into a beautiful bloom. \n\n The rose became a symbol of resilience for Colette. It reminded her that even in the darkest of times, there was always beauty to be found. As she tended to the flower, Colette started to rebuild her life. She found work as a florist and began to help others restore their homes and gardens. The rose had given her a new sense of purpose, and she was determined to spread its message of hope throughout the city.",
  "word count": 185,
  "dialog": [
    {
      "Billy":
        "I love the novel! It's so inspiring to see Colette find hope in the midst of destruction.",
    },
    {
      "Kerry":
        "Yeah, it's crazy how she found a rose bush growing in the ruins. That's like, totally impossible!",
    },
    {
      "Meg":
        "I know, right? It's like, a symbol of resilience and beauty. It makes me think about the power of nature to heal and restore.",
    },
    {
      "Lui":
        "That's a great point, Meg. And it's not just about Colette's personal journey. The novel is also exploring themes of community and rebuilding after trauma.",
    },
    {
      "Billy":
        "I love how the novel shows Colette starting to rebuild her life as a florist. It's like, she's helping others restore their homes and gardens too!",
    },
    {
      "Kerry":
        "Yeah, and it's not just about the physical stuff. The rose is also a symbol of hope and renewal for the community.",
    },
    {
      "Meg":
        "Exactly! And I think that's what makes the novel so powerful. It's not just a story about one person; it's about the collective journey towards healing and recovery.",
    },
    {
      "Lui":
        "Well said, Meg. The novel is a testament to the human spirit's capacity for resilience and hope in the face of adversity.",
    },
  ],
  "quiz": [
    {
      "question": "What happened to Paris in the aftermath of the war?",
      "options": [
        "It became even more beautiful",
        "It was destroyed",
        "It remained unchanged",
        "A rose bush grew there",
        "People moved away",
      ],
      "answer": 1,
    },
    {
      "question": "What did Colette find growing in the midst of the ruins?",
      "options": [
        "A tree",
        "A flower",
        "A cat",
        "A bird",
        "A rose bush",
      ],
      "answer": 3,
    },
    {
      "question": "How did the rose affect Colette's life?",
      "options": [
        "It made her sad",
        "It gave her a new sense of purpose",
        "It didn't change anything",
        "It made her angry",
        "It scared her",
      ],
      "answer": 1,
    },
    {
      "question": "What work did Colette start to do after finding the rose?",
      "options": [
        "She became a teacher",
        "She started a business",
        "She worked as a florist",
        "She joined the military",
        "She helped rebuild homes",
      ],
      "answer": 2,
    },
    {
      "question":
        "What theme is explored in the novel about Colette's journey?",
      "options": [
        "Community and rebuilding after trauma",
        "Personal growth and self-discovery",
        "Overcoming physical challenges",
        "Emotional healing and recovery",
        "Financial stability",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Fashion",
    "flavor": "Historical Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
