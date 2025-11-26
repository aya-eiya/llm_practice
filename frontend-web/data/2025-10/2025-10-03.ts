import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Photograph of the Moon",
    "details":
      "Louis Daguerre captures the first photograph of the moon using his daguerreotype process, producing a detailed and clear image that would later be called 'The Man in the Moon'. This groundbreaking photograph was taken on October 3, 1839.",
  },
  "date": "2025-10-03",
  "title": "The Last Lunar Memory",
  "body":
    "The moon hung above what remained of humanity like a ghostly testament to our former glory. The city of New Alexandria, once a beacon of hope in the wasteland, now stood as a crumbling monument to technological hubris.  \n\n Maya had been born in the post-apocalyptic era, but she remembered her grandmother's stories of the great collapse that brought down humanity's civilization. The images were grainy and distorted, like old photographs trying to capture reality beyond their means.  \n\n In a forgotten archive deep beneath the ruins, she discovered a collection of primitive photographic plates. Each one showed the moon in different phases, frozen moments of time captured by those who understood the value of such relics before everything fell apart.  \n\n The photographs were her only connection to humanity's past, to the world that was lost when the great darkness descended upon the earth. As she carefully preserved each plate, she felt a sense of purpose returning to her existence among the dust and debris.",
  "word count": 163,
  "dialog": [
    {
      "Billy":
        "This novel really makes you think about how technology can both help and harm us.",
    },
    {
      "Kerry":
        "I found it super interesting how Maya discovered those old photographs. It's like a mystery story!",
    },
    {
      "Meg":
        "The way the author described New Alexandria was so vivid, I felt like I was there in the wasteland.",
    },
    {
      "Lui":
        "Yes, the depiction of post-apocalyptic society is quite realistic, but some parts seem a bit too optimistic.",
    },
    {
      "Billy":
        "I wonder what kind of technology they used to preserve those photographs? It must have been amazing!",
    },
    {
      "Kerry":
        "The contrast between Maya's life now and her grandmother's stories is pretty wild. She's like a time traveler!",
    },
    {
      "Meg":
        "I loved how the author mixed historical elements with science fiction. The moon as a testament to human legacy was so poetic.",
    },
    {
      "Lui":
        "While the environmental message is clear, I think some parts could have been more detailed about the societal collapse.",
    },
  ],
  "quiz": [
    {
      "question": "Where was Maya born?",
      "options": [
        "In New Alexandria",
        "In a post-apocalyptic era",
        "Before the great collapse",
        "On the moon",
        "During humanity's civilization",
      ],
      "answer": 1,
    },
    {
      "question": "What did Kerry find interesting about Maya's story?",
      "options": [
        "The photographs of the moon",
        "Maya's sense of purpose",
        "New Alexandria's architecture",
        "Humanity's technological advancements",
        "The mystery of preserving photos",
      ],
      "answer": 0,
    },
    {
      "question": "How old is Billy?",
      "options": [
        "12 years old",
        "11 years old",
        "42 years old",
        "13 years old",
        "14 years old",
      ],
      "answer": 1,
    },
    {
      "question":
        "What type of writing style did Meg appreciate most in the novel?",
      "options": [
        "Historical elements with science fiction",
        "Poetic descriptions",
        "Technical specifications",
        "Environmental messages",
        "Societal collapse details",
      ],
      "answer": 0,
    },
    {
      "question":
        "Who mentioned that some parts of the story seemed too optimistic?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "Maya's grandmother",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_7",
  },
};
export default data;
