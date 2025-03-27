import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The First Dolly Zoom",
    "details":
      "In 1941, Alfred Hitchcock's film 'Rope' was released, featuring a pioneering use of the dolly zoom effect in its opening scene.",
  },
  "date": "2025-03-12",
  "title": "The Shadow in the Lens",
  "body":
    "It was a dark and stormy night when I received the mysterious letter. The handwriting was unfamiliar, but the words 'Meet me at the old cinema' were clear as day. I had always been curious about the abandoned theater on the outskirts of town, and now I had my chance to explore it.  \n\n As I approached the cinema, I noticed something strange - the windows were boarded up, but the door was slightly ajar. I pushed it open and stepped inside, calling out 'Hello?' but there was no response. The air was thick with dust, and cobwebs hung from the chandeliers like ghostly fingers.  \n\n Suddenly, I heard a faint click behind me. I spun around to see a figure emerging from the shadows - it was a woman with piercing green eyes and long, curly hair. She smiled at me, but there was something unsettling about her gaze. 'Welcome to my home,' she said, her voice dripping with menace. 'I've been waiting for you.'",
  "word count": 164,
  "dialog": [
    {
      "Billy":
        "I loved the mysterious letter at the beginning! It really set the tone for the rest of the story.",
    },
    {
      "Meg": "I know, right? I was so curious about what would happen next!",
    },
    {
      "Kerry":
        "I loved how the author described the old cinema. It felt like I was right there with the protagonist.",
    },
    {
      "Lui":
        "As an educator, I appreciate how the story encourages readers to think critically about what they're reading. Well done, author!",
    },
    {
      "Billy":
        "Yeah, and I love how the protagonist is so brave! He's not afraid to explore the unknown.",
    },
    {
      "Meg":
        "I was a bit scared at first when the woman with green eyes appeared. But then I felt for her character too...",
    },
    {
      "Kerry":
        "Totally agree! The author did a great job of making us empathize with even the most unexpected characters.",
    },
    {
      "Lui":
        "That's what good storytelling is all about – making us feel something and think deeply about the themes. Well done, class!",
    },
  ],
  "quiz": [
    {
      "question": "What was the first thing that happened in the story?",
      "options": [
        "The protagonist received a mysterious letter",
        "The protagonist went to the old cinema",
        "The protagonist met the woman with green eyes",
        "The protagonist explored the unknown",
        "The protagonist felt scared",
      ],
      "answer": 0,
    },
    {
      "question": "What was special about the door of the old cinema?",
      "options": [
        "It was locked",
        "It was slightly ajar",
        "It was boarded up",
        "It was broken",
        "It was not there",
      ],
      "answer": 1,
    },
    {
      "question": "Who did the protagonist meet at the old cinema?",
      "options": [
        "A man with blue eyes",
        "A woman with green eyes",
        "A boy with red hair",
        "A girl with yellow dress",
        "No one",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the tone of the story set by the mysterious letter?",
      "options": [
        "Happy and cheerful",
        "Sad and depressing",
        "Curious and mysterious",
        "Angry and scary",
        "Neutral and boring",
      ],
      "answer": 2,
    },
    {
      "question": "Who had a critical thinking discussion about the story?",
      "options": [
        "Billy, Kerry, and Meg",
        "Lui and Billy",
        "Meg and Kerry",
        "The author only",
        "No one",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Society",
    "flavor": "Mystery",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
