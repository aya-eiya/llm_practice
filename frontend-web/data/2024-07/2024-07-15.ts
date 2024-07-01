import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Public Screening of Modern Ballet",
    "details":
      "On July 15th, 1885, the first public screening of modern ballet took place at the Paris Opera House, marking a significant milestone in dance history.",
  },
  "date": "2024-07-15",
  "title": "The Cosmic Ballet",
  "body":
    "In the year 2256, humanity's first intergalactic dance competition took place on Neptune's moon, Triton. The event was a testament to the power of art and technology, as dancers from across the galaxy came together to showcase their unique styles. \n\n Among them was Emilia, a young dancer from Earth who had been training in secret for months. She had perfected her moves in zero gravity and was determined to win first prize.  \n\n As the competition heated up, judges from various planets evaluated the performances. The scores were tallied on a giant screen that floated above the dance floor. Emilia's routine, 'Galactic Waltz,' received rave reviews for its innovative use of gravitational waves. \n\n In the end, it was down to Emilia and a robot from Mars, who had mesmerized the audience with his precision choreography. The judges declared Emilia the winner, citing her creativity and passion as the deciding factors. Her victory marked a new era in intergalactic cultural exchange.",
  "word count": 159,
  "dialog": [
    {
      "Lui":
        "I must say, I was impressed by Emilia's determination and creativity in her dance routine. Her Galactic Waltz was a masterpiece.",
    },
    {
      "Meg":
        "Ooh, I loved how the novel combined art and technology! It's so inspiring to see people using their talents to bring people together.",
    },
    {
      "Kerry":
        "Yeah, and did you notice how Emilia used gravitational waves in her dance? That was so cool!",
    },
    {
      "Billy":
        "I know, right? The way the judges evaluated the performances on that giant screen was really cool too. It's amazing what they can do with technology.",
    },
    {
      "Lui":
        "Indeed, it's a testament to human innovation and creativity. I'm glad we got to read about this exciting event.",
    },
    {
      "Meg":
        "I wonder if there will be more intergalactic dance competitions in the future. That would be so much fun!",
    },
    {
      "Kerry":
        "Ha! Can you imagine having to compete against robots and aliens? That would be a real challenge!",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the location of humanity's first intergalactic dance competition?",
      "options": [
        "Mars",
        "Neptune's moon, Triton",
        "Earth",
        "Jupiter's moon, Ganymede",
        "Venus",
      ],
      "answer": 1,
    },
    {
      "question": "Who was the winner of the dance competition?",
      "options": [
        "Emilia",
        "The robot from Mars",
        "A dancer from Jupiter",
        "A group of dancers from Saturn",
        "Tie between Emilia and the robot from Mars",
      ],
      "answer": 0,
    },
    {
      "question": "What was unique about Emilia's dance routine?",
      "options": [
        "Her use of gravitational waves",
        "Her precision choreography",
        "Her zero-gravity moves",
        "Her traditional Earthly style",
        "None of the above",
      ],
      "answer": 0,
    },
    {
      "question": "Who evaluated the dance performances?",
      "options": [
        "Judges from various planets",
        "The audience members",
        "The dancers themselves",
        "Emilia's friends and family",
        "The robot from Mars",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was declared a new era in intergalactic cultural exchange by the judges?",
      "options": [
        "The dance competition itself",
        "Emilia's victory",
        "The use of gravitational waves in dance",
        "The combination of art and technology",
        "None of the above",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Dance",
    "flavor": "Science Fiction",
    "models": {
      "main": "llama3",
      "novel": "llama3",
    },
    "level": "Level_3",
  },
};
export default data;
