import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Opening of the Tate Modern",
    "details":
      "The museum, designed by Herzog & de Meuron, opened to the public on June 26, 2000, making it one of the largest modern art museums in the world.",
  },
  "date": "2025-06-26",
  "title": "Echoes of a Futuristic Tate",
  "body":
    "In the year 2154, the Tate Modern was more than just a museum – it was a gateway to understanding human creativity and innovation. Located in a sprawling metropolis on Mars, the futuristic structure housed an unparalleled collection of art, science, and technology.   \n\n On this day, June 26th, the museum's director, Dr. Maria Rodriguez, unveiled a groundbreaking new exhibit that pushed the boundaries of what was thought possible. The showcase featured intricate robotic sculptures created by the enigmatic artist, Kaida Grey. These mechanical masterpieces were so advanced that they seemed to defy gravity and blur the lines between reality and fantasy.  \n\n As visitors from all corners of the solar system marveled at the exhibit, Dr. Rodriguez revealed a shocking secret: Kaida Grey was not just an artist – she was also a time-traveler who had traveled back from the present day to inspire humanity's greatest minds. The crowd erupted in awe as the implications sunk in – that art and science could transcend even the boundaries of space and time.",
  "word count": 170,
  "dialog": [
    {
      "Meg":
        "I was so blown away by the exhibit in the novel! The robotic sculptures were incredible!",
    },
    {
      "Lui":
        "That's true, but what really caught my attention was Dr. Rodriguez's revelation about Kaida Grey being a time-traveler.",
    },
    {
      "Kerry":
        "Whoa, that's deep! I mean, think about it - art and science transcending space and time... it's mind-blowing!",
    },
    {
      "Billy":
        "I know, right? It made me think about the possibilities of human creativity and innovation. I'm definitely inspired to try new things in my own projects now.",
    },
    {
      "Meg":
        "And can you believe that Kaida Grey was from our time period? That's just crazy! It makes you wonder what other secrets are out there waiting to be uncovered.",
    },
    {
      "Lui":
        "Well, as educators, we have a responsibility to encourage critical thinking and curiosity in our students. This novel is a great example of how science fiction can inspire us to think creatively about the possibilities.",
    },
    {
      "Kerry":
        "I'm still trying to wrap my head around the whole time-travel thing... but one thing's for sure - this novel was an absolute page-turner!",
    },
    {
      "Billy":
        "Totally agree with you there, Kerry! And I love how the author wove together science, art, and history in a way that felt both realistic and thought-provoking.",
    },
  ],
  "quiz": [
    {
      "question": "What year was the Tate Modern located on Mars?",
      "options": [
        "2154",
        "2123",
        "2050",
        "2200",
        "2500",
      ],
      "answer": 0,
    },
    {
      "question":
        "Who was the director of the museum that unveiled a groundbreaking new exhibit?",
      "options": [
        "Dr. Maria Rodriguez",
        "Kaida Grey",
        "Lui's friend Billy",
        "The author",
        "A time-traveler",
      ],
      "answer": 0,
    },
    {
      "question": "What did Kaida Grey create in the exhibit?",
      "options": [
        "Intricate robotic sculptures",
        "Time machines",
        "Art pieces using science",
        "Science fiction stories",
        "Human creativity and innovation plans",
      ],
      "answer": 0,
    },
    {
      "question": "What was a surprising secret revealed by Dr. Rodriguez?",
      "options": [
        "Kaida Grey was also an artist",
        "The museum was on Earth",
        "The exhibit was fake",
        "Kaida Grey was from the past",
        "Dr. Rodriguez was a time-traveler",
      ],
      "answer": 3,
    },
    {
      "question":
        "How did the novel's revelation about Kaida Grey affect Kerry?",
      "options": [
        "It made him think about human creativity and innovation",
        "He got bored with art and science",
        "It inspired him to try new things in his own projects now",
        "He didn't care about it",
        "He thought it was just a normal exhibit",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Science Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_6",
  },
};
export default data;
