import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The premiere of West Side Story",
    "details":
      'The Broadway musical "West Side Story" opened at the Winter Garden Theatre in New York City on April 26, 1957. The show was choreographed by Jerome Robbins and directed by Robert Wise and Jerome Robbins.',
  },
  "date": "2026-04-26",
  "title": "Rival Galaxies Clash",
  "body":
    "The cosmic streets of New York City were ablaze with conflict as two rival galaxies clashed in a spectacular display of light and sound. The galaxy known as the West Side, with its vibrant rhythm and energy, faced off against the dark and ominous forces of the East Side. \n\n Like Jerome Robbins' choreographed moves, the starships danced through the sky, their laser beams weaving a complex pattern of destruction. Meanwhile, the brave warriors of the West Side fought valiantly to defend their territory, but the sheer power of the East Side's army threatened to overwhelm them. \n\n As the battle raged on, a group of rebels emerged from the shadows, determined to bring peace to the galaxy. Led by a young warrior named Maria, they charged into the fray with a fierce determination that inspired their comrades to fight on. But as the dust settled and the smoke cleared, it became clear that this was no ordinary conflict - for in the heart of the West Side lay a secret that could change the course of the galaxy forever.",
  "word count": 178,
  "dialog": [
    {
      "Meg":
        "I'm so glad we finally got to read this novel! I was hooked from the start.",
    },
    {
      "Billy":
        "Yeah, it's like nothing we've ever read before. The way they described the galaxies and starships is amazing!",
    },
    {
      "Kerry":
        "I know what you mean, Billy. And I love how the characters are so well-developed. Maria's determination to bring peace to the galaxy is inspiring.",
    },
    {
      "Lui":
        "Good observation, Kerry. The author did an excellent job of creating relatable and complex characters. But what struck me most was the themes of conflict and unity in the novel.",
    },
    {
      "Meg":
        "I completely agree with you, Mr. Lui! And I loved how the rebels' fight for peace wasn't just about defeating the East Side, but also about understanding and coexisting with them.",
    },
    {
      "Billy":
        "That's so true, Meg. And it made me think about our own world and how we can apply those lessons to our own conflicts and differences.",
    },
    {
      "Kerry":
        "Yeah, like how we have different cliques and groups in school, but we all want the same thing - to be happy and safe. It's really cool to see that reflected in this novel.",
    },
    {
      "Lui":
        "Well said, Kerry. And I think this novel is an excellent example of how literature can help us grow as individuals and learn from others' experiences.",
    },
    {
      "Meg":
        "Can we discuss the ending? What did you guys think about the secret Maria discovered in the heart of the West Side?",
    },
  ],
  "quiz": [
    {
      "question": "What is the name of the young warrior who leads the rebels?",
      "options": [
        "Maria",
        "Billy",
        "Kerry",
        "Lui",
        "Meg",
      ],
      "answer": 0,
    },
    {
      "question": "Which galaxy is known for its vibrant rhythm and energy?",
      "options": [
        "West Side",
        "East Side",
        "Both are the same",
        "It's not mentioned",
        "We can't tell",
      ],
      "answer": 0,
    },
    {
      "question": "What is the main conflict in the novel?",
      "options": [
        "A war between the West and East galaxies",
        "The struggle for peace in a galaxy",
        "A battle to defeat the East Side's army",
        "The discovery of a secret in the heart of the West Side",
        "All of these",
      ],
      "answer": 4,
    },
    {
      "question": "What do the characters think about the novel?",
      "options": [
        "It's too complicated",
        "We love it!",
        "It's not our favorite book",
        "We don't understand it",
        "It's amazing!",
      ],
      "answer": 1,
    },
    {
      "question":
        "What is the secret that Maria discovers in the heart of the West Side?",
      "options": [
        "A hidden city",
        "A powerful artifact",
        "The truth about their galaxy",
        "The identity of an ally or enemy",
        "It's not mentioned",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Dance",
    "flavor": "Science Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
