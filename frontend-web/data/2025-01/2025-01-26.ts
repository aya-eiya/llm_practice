import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Beatles first performed on the Ed Sullivan Show",
    "details":
      "On February 9, 1964, The Beatles first performed on the Ed Sullivan Show in front of a huge American audience.",
  },
  "date": "2025-01-26",
  "title": "A Night to Remember",
  "body":
    "It was February 9th, 1964, and I had just arrived in New York City with my friends, all of us excited to see The Beatles perform on the Ed Sullivan Show. We had heard so much about this British band and their energetic music that we just couldn't wait to experience it for ourselves.  \n\n As we walked into the studio, the excitement was palpable. People were screaming and cheering, holding signs with The Beatles' faces on them. We managed to grab a spot near the front of the stage, and I was amazed by how young they looked. John, Paul, George, and Ringo seemed like regular guys from Liverpool who had stumbled into stardom.  \n\n As the show began, we were all mesmerized by The Beatles' performance. They played a mix of hits like 'I Want to Hold Your Hand' and 'All My Loving', getting the crowd on their feet with every song. I remember feeling like I was part of something special, something that would go down in history.  \n\n As the night came to a close, we all left the studio with huge grins on our faces, buzzing from the energy and excitement of it all. It was indeed a night to remember, one that would stay with me for years to come.",
  "word count": 213,
  "dialog": [
    {
      "Billy":
        "I loved reading about The Beatles' appearance on Ed Sullivan Show! It was such an exciting moment in history.",
    },
    {
      "Meg":
        "I know, right? I felt like I was there with you guys, watching them perform 'I Want to Hold Your Hand' and 'All My Loving'.",
    },
    {
      "Kerry":
        "Yeah, it's crazy how music can bring people together like that. I'm more of a science guy myself, but even I got caught up in the energy of that performance.",
    },
    {
      "Lui":
        "As an educator, it's great to see students so engaged with historical events. It's not just about reading about it in a textbook, but actually experiencing it through stories like this one.",
    },
    {
      "Billy":
        "I loved how you guys all had different perspectives on the story. Meg, your imagination really ran wild with The Beatles' performance! And Kerry, I never knew you were interested in music too!",
    },
    {
      "Meg":
        "Thanks, Billy! Yeah, I love to imagine what it would have been like to be there that night. It's always fun to get lost in a story and see where it takes me.",
    },
    {
      "Kerry":
        "Yeah, and Lui, you're right on the money as usual. It's not just about reading about history, but actually feeling like you were there too.",
    },
  ],
  "quiz": [
    {
      "question": "When did Billy arrive in New York City?",
      "options": [
        "January 1st, 1964",
        "February 9th, 1964",
        "March 15th, 1963",
        "April 20th, 1962",
        "May 25th, 1961",
      ],
      "answer": 1,
    },
    {
      "question": "What was the name of the show where The Beatles performed?",
      "options": [
        "The Tonight Show",
        "The Ed Sullivan Show",
        "Saturday Night Live",
        "Sunday Night Football",
        "Monday Night Raw",
      ],
      "answer": 1,
    },
    {
      "question":
        "Which song did The Beatles not play during their performance?",
      "options": [
        "I Want to Hold Your Hand",
        "All My Loving",
        "Yesterday",
        "Hey Jude",
        "Let It Be",
      ],
      "answer": 2,
    },
    {
      "question": "What was Billy's reaction when he saw The Beatles perform?",
      "options": [
        "He was bored and fell asleep.",
        "He was excited and energized.",
        "He was confused and lost interest.",
        "He was disappointed and left early.",
        "He was happy but not impressed.",
      ],
      "answer": 1,
    },
    {
      "question": "Who did Lui mention was affected by the story?",
      "options": [
        "Only Billy",
        "Only Kerry",
        "Only Meg",
        "Students in general",
        "Everyone present",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Historical Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
