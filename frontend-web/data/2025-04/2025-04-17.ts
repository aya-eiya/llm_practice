import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Beatles release their first album, Please Please Me",
    "details":
      "The Beatles released their debut album, Please Please Me, on March 22, 1963, in the UK, and on April 17, 1963, in the US. It was a groundbreaking album that introduced the world to the Fab Four's unique sound and style.",
  },
  "date": "2025-04-17",
  "title": "When Love Found Us",
  "body":
    "It was the summer of 1963, and The Beatles had just released their debut album, Please Please Me. I was a shy and introverted teenager, but when I heard Paul's voice on 'From Me to You', I knew that my life would never be the same.  \n\n As a member of a working-class family, I could only afford to attend local concerts in Liverpool. But one night, as I watched The Beatles perform at the Cavern Club, I met a girl who would change my destiny. She was the daughter of a wealthy businessman, and we came from different worlds.  \n\n Despite our social differences, we found common ground in our love for music and each other. As we danced to 'All My Loving' under the stars, I knew that I had found my soulmate. Our love story became an inspiration to many, a testament to the power of true love transcending class boundaries.  \n\n Years later, as Paul McCartney looked back on The Beatles' early days, he would say that our love was 'the beat of a different drummer'. It may have been a chance encounter in Liverpool, but it had set our hearts beating as one, forever changing the rhythm of our lives.",
  "word count": 202,
  "dialog": [
    {
      "Billy":
        "I loved the way the author described the summer of '63, it felt like I was right there in Liverpool with The Beatles!",
    },
    {
      "Meg":
        "I know, right? It's like we're transported to another era! And how they met at a concert is just so romantic.",
    },
    {
      "Lui":
        "Yes, it's clear that the author has done their research on the time period. The details about The Beatles' early days are spot on.",
    },
    {
      "Kerry":
        "But what I love most about this novel is how it shows that true love can conquer all, even class differences. It's a beautiful message!",
    },
    {
      "Billy":
        "Totally agree! And the way Paul McCartney reflects on their love story as 'the beat of a different drummer'... genius!",
    },
    {
      "Meg":
        "I was so invested in the characters and their journey. I felt like I was right there with them, dancing to 'All My Loving' under the stars.",
    },
    {
      "Lui":
        "The author has done a great job of making history feel relevant and engaging. It's not just about the past; it's about the people who lived through it.",
    },
    {
      "Kerry":
        "I think what I love most about this novel is how it shows that our experiences, no matter how different they may be, can bring us together in a way that nothing else can.",
    },
  ],
  "quiz": [
    {
      "question": "What was the summer of 1963 significant for The Beatles?",
      "options": [
        "The release of their debut album 'Revolver'",
        "The start of their world tour",
        "The release of their debut album 'Please Please Me'",
        "The end of their career",
        "Their first concert at the Cavern Club",
      ],
      "answer": 2,
    },
    {
      "question":
        "Where did The Beatles perform on a night that changed Billy's destiny?",
      "options": [
        "The Liverpool Stadium",
        "The Cavern Club",
        "The Albert Hall",
        "The Liverpool Arena",
        "The Liverpool Theatre",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the name of the song that inspired Billy to find his soulmate?",
      "options": [
        "'All You Need is Love'",
        "'Yesterday'",
        "'Hey Jude'",
        "'From Me to You'",
        "'All My Loving'",
      ],
      "answer": 4,
    },
    {
      "question": "How did Paul McCartney reflect on Billy's love story?",
      "options": [
        "It was a chance encounter",
        "The beat of a different drummer",
        "A love that changed the rhythm of their lives",
        "Their first kiss under the stars",
        "Their first concert at the Cavern Club",
      ],
      "answer": 1,
    },
    {
      "question": "What message did Billy's love story convey?",
      "options": [
        "That true love can conquer all, even class differences",
        "That The Beatles were a working-class band",
        "That their music was only for the wealthy",
        "That their concerts were only in Liverpool",
        "That they had no fans",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_6",
  },
};
export default data;
