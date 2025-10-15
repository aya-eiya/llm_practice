import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Opening Night of 'West Side Story' on Broadway",
    "details":
      "'West Side Story', Leonard Bernstein's musical, opened at the Winter Garden Theatre in New York City on September 20, 1964. The production featured Jerome Robbins as director and choreographer, with book by Arthur Laurents. Based on William Shakespeare's Romeo and Juliet, it tells the story of two rival gangs in New York City.",
  },
  "date": "2025-09-20",
  "title": "The Clockwork Romeo",
  "body":
    "In the misty streets of New York City, 1894, a peculiar clockwork figure moved through the gaslit fog. The automaton's brass body reflected light from the streetlamps as it glided past the towering buildings with their intricate gears and steam-powered elevators. \n \n\n The mysterious machine was drawn to a specific location – a small theater tucked away in an alley, where a peculiar production of 'Romeo and Juliet' was about to begin. The show's creator, Professor Whistler, had designed the performance to incorporate the latest mechanical innovations, including clockwork lovers. \n \n\n As the curtain rose on opening night, the audience witnessed a spectacle unlike any they'd seen before. The mechanical Romeo and Juliet moved with fluid grace, their movements controlled by intricate levers and pulleys hidden within their metallic bodies. \n \n\n The production was a triumph of Victorian engineering and theatrical artistry. Steam-powered wings sprouted from the lovers' backs during the balcony scene, while gears whirred softly throughout the performance, creating an otherworldly ambiance that captivated all who witnessed it.",
  "word count": 167,
  "dialog": [
    {
      "Meg":
        "The automaton's design was so intricate! I kept imagining how it would move with those gears and levers.",
    },
    {
      "Billy":
        "I'm fascinated by the Victorian engineering described in the novel. The steam-powered wings during the balcony scene must have been incredible to see!",
    },
    {
      "Kerry":
        "Man, this Professor Whistler sounds like a total genius. I wish he was alive today - we could learn so much from him about combining technology and art.",
    },
    {
      "Lui":
        "While the mechanical Romeo and Juliet is an interesting concept, it's also quite telling of the period's values. They saw nothing wrong with using machines to replicate human emotion.",
    },
    {
      "Meg":
        "The gaslit streets of 1894 New York City really set the mood for me. I felt like I was there in the misty fog alongside that clockwork figure.",
    },
    {
      "Billy":
        "The way they integrated math and physics into their performances must have been groundbreaking for its time. It's amazing to see how far we've come with technology since then!",
    },
    {
      "Kerry":
        "I'm curious about the social dynamics of that era too. The fact that a woman like Professor Whistler was creating mechanical art shows how progressive some Victorians were.",
    },
    {
      "Lui":
        "Yes, but let's not forget the limitations and biases of that time period either. We need to understand both the achievements and the flaws in historical works like this.",
    },
  ],
  "quiz": [
    {
      "question": "In what year does 'The Clockwork Romeo' take place?",
      "options": [
        "1884",
        "1894",
        "1904",
        "1914",
        "1924",
      ],
      "answer": 1,
    },
    {
      "question":
        "What is Professor Whistler's profession according to the text?",
      "options": [
        "Engineer",
        "Actor",
        "Professor",
        "Writer",
        "Director",
      ],
      "answer": 2,
    },
    {
      "question": "How do the mechanical Romeo and Juliet move in the play?",
      "options": [
        "With wheels",
        "Using pulleys and levers",
        "By walking normally",
        "Through magic",
        "Via electricity",
      ],
      "answer": 1,
    },
    {
      "question":
        "What technology is mentioned as being used in the clockwork figure's design?",
      "options": [
        "Steam power",
        "Electricity",
        "Gaslight",
        "Pulleys only",
        "Brass metal",
      ],
      "answer": 0,
    },
    {
      "question":
        "Which character expressed interest in learning from Professor Whistler today?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "The narrator",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Theater",
    "flavor": "Steampunk",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_8",
  },
};
export default data;
