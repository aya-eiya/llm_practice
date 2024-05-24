import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Beatles Release 'Sgt. Pepper's Lonely Hearts Club Band'",
    "details":
      "On April 21st, 1967, The Beatles released their groundbreaking album 'Sgt. Pepper's Lonely Hearts Club Band', which is widely regarded as one of the most influential and iconic albums in rock music history.",
  },
  "date": "2024-04-21",
  "title": "A Lonely Heart's Love Story",
  "body":
    "As the world was captivated by The Beatles' release of 'Sgt. Pepper's Lonely Hearts Club Band', a young woman named Sophie found herself drawn to the album's themes of love, loss, and the search for meaning in life. She spent every spare moment listening to the album and imagining herself as part of the band.One day, while on a walk through the park, she stumbled upon a man playing a guitar and singing one of her favorite Beatles songs. His name was Jack, and he had a way of performing that made her heart skip a beat. They struck up a conversation, and before they knew it, they were inseparable.Together, they embarked on a journey of self-discovery and love. They spent hours discussing the album's lyrics and what they meant to them. They discovered that they shared a deep connection through their love for The Beatles and their appreciation for the album's message of finding happiness in unexpected places.",
  "word count": 159,
  "dialog": [
    {
      "Billy":
        "I loved how Sophie's love for The Beatles brought her and Jack together. It's like the music was a common language that helped them connect.",
    },
    {
      "Meg":
        "Absolutely! And I think it's great how they found meaning in life through the album. It's a beautiful reminder that we can find joy even in unexpected places.",
    },
    {
      "Lui":
        "Well, as an educator, I appreciate how the novel highlights the importance of shared experiences and connections. It's a powerful message for young people (and adults!) to learn from.",
    },
    {
      "Kerry":
        "Yeah, and I loved how Sophie was so passionate about The Beatles! She wasn't just some average fan; she really got what they were all about. That's something we can all learn from - being true to ourselves and our passions.",
    },
    {
      "Billy":
        "I also liked how the novel explored themes of love, loss, and self-discovery. It's a relatable journey that many people can identify with.",
    },
    {
      "Meg":
        "And I think it's great how Sophie didn't just stop at imagining herself as part of The Beatles; she took action and actually met Jack through music. That takes courage!",
    },
    {
      "Lui":
        "Yes, the novel does a wonderful job of showing how our passions and interests can bring us together with others. It's a beautiful thing to see.",
    },
    {
      "Kerry":
        "I loved how the novel ended too - it left me feeling hopeful and inspired. I think that's what makes this book so special; it leaves you feeling uplifted and motivated.",
    },
  ],
  "quiz": [
    {
      "question": "What was Sophie passionate about?",
      "options": [
        "Music",
        "The Beatles",
        "Love",
        "Self-Discovery",
        "Life",
      ],
      "answer": 1,
    },
    {
      "question": "How did Sophie and Jack meet?",
      "options": [
        "Through a shared love of The Beatles",
        "In the park",
        "At a concert",
        "Online",
        "By chance",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the common language that brought Sophie and Jack together?",
      "options": [
        "Their love for life",
        "The Beatles' music",
        "Their shared experiences",
        "Their passion for learning",
        "Their sense of humor",
      ],
      "answer": 1,
    },
    {
      "question": "What did Sophie learn from her love for The Beatles?",
      "options": [
        "To be more outgoing",
        "To appreciate the little things in life",
        "To find meaning in unexpected places",
        "To take risks and try new things",
        "To play the guitar",
      ],
      "answer": 2,
    },
    {
      "question": "What was the overall tone of the novel's ending?",
      "options": [
        "Sad",
        "Hopeful and inspired",
        "Surprised",
        "Disappointed",
        "Bored",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Romance",
    "models": { "main": "llama", "novel": "llava" },
    "level": "Level_5",
  },
};
export default data;
