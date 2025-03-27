import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first Japanese student arrives in the US",
    "details":
      "In 1860, a young Japanese boy named Masakazu Taneguchi becomes the first Japanese student to enroll at a United States college, Amherst College in Massachusetts",
  },
  "date": "2025-04-09",
  "title": "Beyond the Sakura Tree",
  "body":
    "It was a warm spring morning in Tokyo when I first met him. His name was Taro and he was from America, just like me. We were both students at a university in Tokyo and had joined the same club to learn Japanese.  \n\n I remember feeling nervous as I walked into the club room for our first meeting. But as soon as I saw Taro, I felt at ease. He was smiling and chatting with everyone, and his English accent made me feel more comfortable.  \n\n As we started learning Japanese together, I realized that Taro had a unique way of understanding the language. He would often point out subtle nuances in grammar and vocabulary that I had never noticed before. I was amazed by his ability to pick up on things so quickly.  \n\n But what really struck me about Taro was his passion for Japanese culture. He would spend hours watching anime, reading manga, and listening to J-pop music. His love for Japan was contagious, and soon I found myself getting caught up in it too.",
  "word count": 176,
  "dialog": [
    {
      "Billy": "I love the novel!",
    },
    {
      "Meg":
        "Yeah, me too! I loved how Taro's passion for Japanese culture was contagious.",
    },
    {
      "Kerry":
        "I know what you mean! It made me want to learn more about Japan and its culture.",
    },
    {
      "Lui":
        "As a teacher, it's great to see students develop an interest in different cultures. Taro's character is a wonderful example of that.",
    },
    {
      "Billy":
        "And I loved how the author described Tokyo as a warm spring morning! It made me feel like I was there too.",
    },
    {
      "Meg":
        "That's so true! The writing was beautiful and immersive. I felt like I was right there with Taro, learning Japanese and exploring Japan.",
    },
    {
      "Kerry":
        "I loved how the author showed Taro's passion for anime, manga, and J-pop music. It made me want to explore those things too!",
    },
    {
      "Lui":
        "As an educator, it's always great to see students develop interests in new areas. And I think this novel is a great way to introduce kids to Japanese culture.",
    },
  ],
  "quiz": [
    {
      "question": "What was Taro's passion for?",
      "options": [
        "Japanese food",
        "Japanese culture",
        "English music",
        "American movies",
        "Sports",
      ],
      "answer": 1,
    },
    {
      "question": "Where did Billy, Kerry, Meg and Lui meet?",
      "options": [
        "A university in Tokyo",
        "A university in America",
        "A school in Japan",
        "A park in Tokyo",
        "A restaurant in Tokyo",
      ],
      "answer": 0,
    },
    {
      "question": "What was Taro's accent?",
      "options": [
        "American accent",
        "Japanese accent",
        "British accent",
        "Australian accent",
        "Canadian accent",
      ],
      "answer": 2,
    },
    {
      "question": "Who was interested in Japanese culture?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "Taro",
      ],
      "answer": 4,
    },
    {
      "question": "What did Billy, Kerry and Meg like about the novel?",
      "options": [
        "The plot",
        "The characters",
        "The writing style",
        "The setting",
        "All of the above",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Education",
    "flavor": "Young Adult",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
