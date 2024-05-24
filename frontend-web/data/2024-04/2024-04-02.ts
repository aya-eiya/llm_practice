import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Rumba Becomes a Popular Style",
    "details":
      "On April 3rd, 1916, Cuban musician Don Azpiazu's recording of 'Rum Bar' becomes a huge hit in the United States, marking the beginning of the Rumba's popularity as a dance style.",
  },
  "date": "2024-04-02",
  "title": "The Rise of the Rumba",
  "body":
    "In a world where dance was a means to express one's emotions and identity, the Rumba was a style that swept through society. On April 3rd, 1916, Cuban musician Don Azpiazu recorded 'Rum Bar', a song that would change the course of history. The record quickly became a sensation in the United States, with people flocking to dance halls and nightclubs to hear the Rumba's infectious rhythms. As the popularity of the Rumba grew, so did its influence on other styles of dance. People from all walks of life were drawn to the Rumba's unique blend of passion and energy, and it soon became a symbol of freedom and self-expression. The Rumba had not only created a new genre of music but also brought people together in a way that had never been seen before.",
  "word count": 135,
  "dialog": [
    {
      "Billy":
        "I loved how the novel explored the connection between dance and emotions! It really made me think about my own feelings.",
    },
    {
      "Lui":
        "Yes, I agree with Billy. The way the Rumba brought people together was truly remarkable. As a history teacher, it's fascinating to see how music can transcend cultures and generations.",
    },
    {
      "Kerry":
        "I know what you mean, Lui! And I loved how the novel highlighted the importance of self-expression and individuality. It's like, dance is not just about following rules, but also about sharing your own unique vibes with others.",
    },
    {
      "Meg":
        "Oh, absolutely Kerry! As a bookworm, I appreciated how the novel wove together historical facts with fictional characters. It was like stepping into a world where music and dance were intertwined.",
    },
    {
      "Billy":
        "And don't forget how the Rumba influenced other styles of dance! I mean, it's crazy to think that one song can have such a profound impact on popular culture.",
    },
    {
      "Lui":
        "Well said, Billy. As educators, we often focus on the 'big picture' historical events, but this novel reminds us of the power of everyday moments and cultural exchanges.",
    },
    {
      "Kerry":
        "Yeah, it's like, sometimes you need to look at the little things to understand the bigger picture. And in this case, that little thing was a song called 'Rum Bar'!",
    },
  ],
  "quiz": [
    {
      "question": "When was the song 'Rum Bar' recorded?",
      "options": [
        "April 1st, 1915",
        "April 3rd, 1916",
        "May 10th, 1920",
        "June 20th, 1930",
      ],
      "answer": 1,
    },
    {
      "question": "What was the Rumba style of dance known for?",
      "options": [
        "Its slow and romantic tempo",
        "Its fast and energetic rhythms",
        "Its ability to bring people together",
        "None of the above",
      ],
      "answer": 2,
    },
    {
      "question":
        "Who recorded the song 'Rum Bar' that changed the course of history?",
      "options": [
        "Don Azpiazu",
        "Billy",
        "Lui",
        "Kerry",
      ],
      "answer": 0,
    },
    {
      "question": "What was the Rumba's influence on other styles of dance?",
      "options": [
        "It slowed down their tempo",
        "It sped up their rhythms",
        "It brought people together",
        "None of the above",
      ],
      "answer": 2,
    },
    {
      "question": "What did the novel highlight as important about the Rumba?",
      "options": [
        "Its ability to express emotions",
        "Its influence on popular culture",
        "Its connection to self-identity",
        "All of the above",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Dance",
    "flavor": "Science Fiction",
    "models": { "main": "llama", "novel": "llava" },
    "level": "Level_5",
  },
};
export default data;
