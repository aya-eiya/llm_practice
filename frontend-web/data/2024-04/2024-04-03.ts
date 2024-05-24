import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First African American Student Admitted to University",
    "details":
      "On April 23, 1896, John McCray became the first African American student admitted to the University of Missouri. This milestone marked a significant step towards racial integration in higher education.",
  },
  "date": "2024-04-03",
  "title": "A Trailblazer's Journey",
  "body":
    "It was a momentous day in April 1896 when John McCray, a young African American man, made history by becoming the first student of his race to be admitted to the University of Missouri. Despite facing discrimination and prejudice, John had always dreamed of pursuing higher education and making a difference in the world.Determined to prove that he was just as capable as any other student, John worked tirelessly to excel academically and socially. He quickly became a role model for other African American students who were also fighting for their right to an education.As John navigated through the challenges of being a minority in a predominantly white institution, he faced many obstacles but never lost his determination. His perseverance paid off when he graduated with honors and went on to become a successful lawyer, dedicating his life to advocating for civil rights and racial equality.John's legacy continues to inspire future generations of African American students who strive to break down barriers and achieve their dreams.",
  "word count": 166,
  "dialog": [
    {
      "Billy":
        "Wow, I loved the story about John McCray! It's amazing what he accomplished despite all the obstacles.",
    },
    {
      "Lui":
        "Indeed, John's determination and perseverance are an inspiration. His legacy continues to inspire future generations.",
    },
    {
      "Kerry":
        "I know, right? It's crazy how much prejudice and discrimination people faced back then. But I guess it's also true that we've made progress since then.",
    },
    {
      "Meg":
        "Absolutely! The novel shows us that even in the face of adversity, people can make a difference. And John's story is so powerful because he didn't give up.",
    },
    {
      "Lui":
        "That's right, Meg. We have to keep working towards equality and justice. As educators, we play a crucial role in shaping young minds and inspiring them to make a positive impact.",
    },
    {
      "Billy":
        "I love how the novel highlights John's academic achievements. It shows that with hard work and dedication, anyone can succeed, regardless of their background.",
    },
    {
      "Kerry":
        "Yeah, it's cool to see how John became a role model for other African American students who were fighting for their right to an education.",
    },
    {
      "Meg":
        "And I think the novel also emphasizes the importance of mentorship. Lui, as a veteran educator, has been a great role model for us too.",
    },
    {
      "Lui":
        "Thank you, Meg. It's our responsibility to guide and support students like John McCray who are breaking barriers and making history.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was significant about John McCray's admission to the University of Missouri?",
      "options": [
        "He was a white student",
        "He was the first African American student",
        "He graduated with honors",
        "He became a successful lawyer",
        "He advocated for civil rights",
      ],
      "answer": 1,
    },
    {
      "question": "What did John McCray work tirelessly to excel in?",
      "options": [
        "Academically and socially",
        "Only academically",
        "Only socially",
        "In sports",
        "In music",
      ],
      "answer": 0,
    },
    {
      "question": "What was the outcome of John's perseverance?",
      "options": [
        "He dropped out of school",
        "He graduated with honors",
        "He became a successful lawyer",
        "He never achieved his goals",
        "He got married and had kids",
      ],
      "answer": 2,
    },
    {
      "question": "Who did John become a role model for?",
      "options": [
        "Only white students",
        "Only African American students",
        "Other minority students",
        "All students regardless of race",
        "No one",
      ],
      "answer": 1,
    },
    {
      "question": "What was emphasized in the novel about John's story?",
      "options": [
        "His athletic achievements",
        "His academic struggles",
        "His determination and perseverance",
        "His social life",
        "His family background",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Historical",
    "models": { "main": "llama", "novel": "llava" },
    "level": "Level_5",
  },
};
export default data;
