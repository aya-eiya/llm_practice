import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "The premiere of '2001: A Space Odyssey' (1968) took place on July 9, 1968.",
    "details":
      "Directed by Stanley Kubrick and starring Keir Dullea and Gary Lockwood.",
  },
  "date": "2025-07-09",
  "title": "Ashes to Infinity",
  "body":
    "In the year 2154, the world had ended in a catastrophic event known as 'The Great Devastation'. The once blue skies were now a permanent gray, and the air was thick with toxic fumes. The few remaining humans lived in underground bunkers, scrounging for food and resources. \n\n Dr. Rachel Kim, a renowned scientist, had dedicated her life to finding a solution to this new world. She spent countless hours studying the ancient records of '2001: A Space Odyssey', a film that had predicted the downfall of humanity. According to legend, the movie had foretold the arrival of a technological singularity that would wipe out human civilization. \n\n As Rachel delved deeper into her research, she stumbled upon an encrypted message hidden within the film's code. The phrase 'infinity and beyond' echoed in her mind as she realized the true purpose of this hidden message. It was a call to action, urging humanity to transcend its current state and reach for something greater. \n\n With newfound determination, Rachel set out on a perilous journey to unite the scattered remnants of society. She rallied a team of scientists and engineers, and together they embarked on a quest to reclaim their place in the universe.",
  "word count": 200,
  "dialog": [
    {
      "Meg":
        "I'm still thinking about Dr. Rachel Kim's determination to unite humanity. She's so brave!",
    },
    {
      "Lui":
        "Yes, she's a true leader. But I think the most interesting character is Billy. His curiosity and love for science are inspiring.",
    },
    {
      "Kerry":
        "Dude, have you noticed that the novel is predicting a technological singularity? It's like, what if we create something that surpasses human intelligence?",
    },
    {
      "Billy":
        "Whoa, that's heavy! But I think it's cool. Maybe we can use technology to solve our problems and make the world a better place.",
    },
    {
      "Meg":
        "I love how the novel shows us that even in a post-apocalyptic world, there's still hope for humanity. It's so uplifting!",
    },
    {
      "Lui":
        "That's true. And I think the novel is also saying that we need to learn from our past mistakes and work together to create a better future.",
    },
    {
      "Kerry":
        "Exactly! And it's not just about the technology, but also about how we use it. We need to be responsible and consider the consequences of our actions.",
    },
  ],
  "quiz": [
    {
      "question": "What event had ended in the year 2154?",
      "options": [
        "The Great Devastation",
        "A Space Odyssey",
        "Technological Singularity",
        "Post-Apocalyptic World",
        "Infinte and Beyond",
      ],
      "answer": 0,
    },
    {
      "question":
        "Who is the main character that set out on a perilous journey to unite humanity?",
      "options": [
        "Dr. Rachel Kim",
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
      ],
      "answer": 0,
    },
    {
      "question": "What did Dr. Rachel Kim stumble upon in her research?",
      "options": [
        "Encrypted message hidden within the film's code",
        "Ancient records of '2001: A Space Odyssey'",
        "Technological Singularity",
        "Post-Apocalyptic World",
        "Infinity and Beyond",
      ],
      "answer": 0,
    },
    {
      "question": "What is the theme of the novel that Lui mentioned?",
      "options": [
        "Hope for humanity",
        "Importance of science",
        "Responsible use of technology",
        "Learning from past mistakes",
        "Unity of humanity",
      ],
      "answer": 2,
    },
    {
      "question":
        "How old are Billy, Kerry, and Meg according to the dialogue?",
      "options": [
        "All adults over 25",
        "Billy is 11 years old, Kerry is 12 years old, and Meg is also 12 years old",
        "Kerry is 15 years old, Meg is 16 years old, and Billy is 17 years old",
        "Lui is the only adult in the dialogue",
        "All characters are children under 10",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
