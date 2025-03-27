import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "National Education Association (NEA) Founded",
    "details":
      "The National Education Association (NEA) was founded on February 16, 1857, in Kalamazoo, Michigan.",
  },
  "date": "2025-02-16",
  "title": "Can't See the Future",
  "body":
    "I woke up early that morning, feeling a mix of excitement and anxiety. The school had just announced that we would be participating in a national science competition, and our team was one of the top contenders. As I got dressed, I couldn't help but think about how much was at stake. We had been working on our project for months, and it was our best chance to win.  \n\n Our team leader, Emma, came over to me as I was eating breakfast. 'Hey, we need to make some changes,' she said, her voice firm but controlled. 'We can't just rely on luck; we have to perfect our presentation.' I nodded in agreement, feeling a surge of determination. We had practiced countless times, but Emma knew that it wasn't enough. She wanted us to be flawless.  \n\n The day of the competition arrived, and our team was nervous but focused. We stood backstage, waiting for our turn to present. Emma gave me a reassuring smile as I adjusted my microphone. It was time to show everyone what we were capable of.",
  "word count": 179,
  "dialog": [
    {
      "Billy":
        "I just finished reading the novel, and I have to say it was amazing! I loved how the story was woven together with the science competition.",
    },
    {
      "Meg":
        "I know, right? I loved the part where they were practicing their presentation. It felt so real!",
    },
    {
      "Kerry":
        "Yeah, and Emma's leadership skills were on point. She really knew what she was doing.",
    },
    {
      "Lui":
        "As a teacher, I appreciated how the novel highlighted the importance of hard work and dedication. It's a great lesson for our students.",
    },
    {
      "Billy":
        "I also loved how the author described the characters' emotions. It made me feel like I was right there with them.",
    },
    {
      "Kerry":
        "Totally! And I have to say, I'm a bit jealous that they got to participate in a national science competition. That sounds like so much fun!",
    },
    {
      "Meg":
        "I know, it's not every day you get to do something that cool. But I'm sure they learned a lot from the experience.",
    },
    {
      "Lui":
        "That's true. And it's not just about winning or losing; it's about what you take away from the experience.",
    },
    {
      "Billy":
        "Absolutely! I think we can all learn from their story and apply it to our own lives.",
    },
  ],
  "quiz": [
    {
      "question": "What was happening early in the morning for Billy?",
      "options": [
        "He was going to school",
        "He woke up late",
        "He was preparing for a science competition",
        "He was getting dressed",
        "He was eating breakfast",
      ],
      "answer": 3,
    },
    {
      "question": "Why did Emma want Billy and his team to make some changes?",
      "options": [
        "Because they were tired of practicing",
        "Because they wanted to win the competition",
        "Because they had to perfect their presentation",
        "Because they were running out of time",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was Billy and his team's goal in the national science competition?",
      "options": [
        "To win a prize",
        "To have fun",
        "To make new friends",
        "To show everyone what they were capable of",
        "To learn something new",
      ],
      "answer": 3,
    },
    {
      "question":
        "Who gave Billy a reassuring smile backstage at the competition?",
      "options": [
        "Emma's team leader",
        "Billy's friend Kerry",
        "Meg, his classmate",
        "Lui, his teacher",
      ],
      "answer": 0,
    },
    {
      "question": "What did Lui appreciate about the novel?",
      "options": [
        "The way it was written",
        "The characters' emotions",
        "The importance of hard work and dedication",
        "The way it highlighted teamwork",
        "The way it showed leadership skills",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Education",
    "flavor": "Young Adult",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
