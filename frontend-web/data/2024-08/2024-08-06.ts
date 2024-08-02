import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The premiere of 'Swan Lake' at the Bolshoi Theatre",
    "details": "On August 4, 1877, but performances continued until August 6th",
  },
  "date": "2024-08-06",
  "title": "The Swan of Dreams",
  "body":
    "In the land of Elyria, where the sun dipped into the horizon and painted the sky with hues of crimson and gold, a legendary swan was said to appear. Its feathers shimmered like the stars on a clear night, and its wings beat with a rhythm that could lull even the most restless of souls to sleep.  \n\n The people of Elyria believed that the swan's visitations were omens of great change, and that its presence was a blessing from the gods. They would leave offerings of flowers and fruit in the hopes of catching a glimpse of the majestic creature.  \n\n But one night, a young girl named Aria saw the swan with her own eyes. She was out gathering herbs for her mother's potion when she stumbled upon the swan perched on a tree branch overlooking the lake. The swan gazed at her with its piercing eyes, and Aria felt a strange connection to it. From that moment on, she was drawn to the lake every night, hoping to catch another glimpse of the elusive bird.",
  "word count": 176,
  "dialog": [
    {
      "Meg":
        "I loved how the swan's visitations were omens of great change in Elyria. It added such depth to the story!",
    },
    {
      "Kerry":
        "Yeah, I liked how it was a blessing from the gods. It felt like something special and magical.",
    },
    {
      "Billy":
        "But what I really loved was Aria's connection to the swan. It felt so real and relatable. I wish I had a connection like that with an animal!",
    },
    {
      "Lui":
        "Well, it's interesting to note how the story uses nature as a symbol of change and transformation. The swan represents something greater than itself, don't you think?",
    },
    {
      "Meg":
        "Exactly! And it's not just the swan. The whole environment in Elyria feels like a character in its own right. It's so immersive!",
    },
    {
      "Kerry":
        "I agree. And I love how the story is full of symbolism and metaphors. It makes me think about the world in a different way.",
    },
    {
      "Billy":
        "Yeah, it's like the story is saying that even small changes can have big effects. Like, Aria's connection to the swan might seem insignificant, but it could lead to something amazing!",
    },
    {
      "Lui":
        "That's a great point, Billy. And it's not just about the individual. The story shows how the community in Elyria is connected and affected by these changes as well.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the significance of the swan's visitations in Elyria?",
      "options": [
        "It was a sign of bad luck",
        "It was an omen of great change",
        "It had no meaning at all",
        "It was a punishment from the gods",
        "It was a blessing from the gods",
      ],
      "answer": 4,
    },
    {
      "question": "Why did Aria see the swan with her own eyes?",
      "options": [
        "She was out gathering herbs for her mother's potion",
        "She was on a mission to find the swan",
        "She saw it while sleeping",
        "She stumbled upon it by accident",
        "She was searching for food",
      ],
      "answer": 0,
    },
    {
      "question": "What did Aria feel when she looked at the swan?",
      "options": [
        "She felt scared",
        "She felt happy",
        "She felt a strange connection to it",
        "She felt sad",
        "She felt nothing",
      ],
      "answer": 2,
    },
    {
      "question":
        "What did the people of Elyria believe about the swan's visitations?",
      "options": [
        "It was a sign of bad luck",
        "It had no meaning at all",
        "It was an omen of great change",
        "It was a punishment from the gods",
        "It was a blessing from the gods",
      ],
      "answer": 4,
    },
    {
      "question": "What did Billy think about Aria's connection to the swan?",
      "options": [
        "He thought it was weird",
        "He wished he had a connection like that with an animal",
        "He didn't care",
        "He thought it was boring",
        "He thought it was nothing",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Dance",
    "flavor": "Fantasy",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
