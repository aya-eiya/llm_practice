import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first public performance of Swan Lake",
    "details":
      "Ballets Russes company's production, choreographed by Michel Fokine",
  },
  "date": "2026-06-16",
  "title": "Moonlit Swan of Dreams",
  "body":
    "In the enchanted forest of Silvermist, where moonlight danced upon the waters, a mystical ballet was born. The swans of legend, with their ethereal beauty and majestic grace, took flight in the night sky.  \n\n Their leader, the majestic White Swan, guided her companions through the dreamworld, weaving a tale of love and loss. With every step, the swans seemed to embody the very essence of the ballet, as if they were dancing on the wind itself.  \n\n As I watched from the forest's edge, entranced by the spectacle before me, I felt my heart entwined with the music. The notes of the orchestra seemed to whisper secrets in my ear, drawing me into a world beyond reality. The swans' movements became a reflection of my own soul, their steps echoing the rhythms of my own heartbeat.  \n\n In this mystical ballet, I saw the beauty of life and death intertwined, as the White Swan's journey came full circle. Her path was one of sacrifice and redemption, where love and loss merged into a harmonious whole. As the final notes faded into silence, I felt transformed by the experience, my spirit lifted on the wings of the moonlit swans.",
  "word count": 196,
  "dialog": [
    {
      "Billy":
        "I loved how the swans embodied the ballet, it was like they were dancing on air!",
    },
    {
      "Kerry":
        "Yeah, I thought that part was cool too! But what really got me was when the White Swan's journey came full circle. It made me think about life and death.",
    },
    {
      "Meg":
        "I know, right? The way the author wove love and loss together was so beautiful. It reminded me of the stories I've read about mythological creatures.",
    },
    {
      "Lui":
        "Ah, yes, the author did a great job of exploring the human condition through the swans' story. And what struck me was how the music seemed to take on a life of its own.",
    },
    {
      "Billy":
        "Exactly! The way the notes whispered secrets in your ear... it was like you were part of the ballet too!",
    },
    {
      "Kerry":
        "Ha! Yeah, I felt like I was right there with the swans. And I'm curious, Meg, what did you think about the author's use of language? It seemed so poetic and evocative.",
    },
    {
      "Meg":
        "Oh, totally! The way the author described the moonlight dancing on the waters... it was just magical. I loved how it set the tone for the rest of the story.",
    },
    {
      "Lui":
        "Well said, Meg. And I think we can all agree that this novel has sparked a lot of interesting discussions and insights. It's a testament to the power of storytelling.",
    },
  ],
  "quiz": [
    {
      "question": "What is the name of the enchanted forest?",
      "options": [
        "Silvermist",
        "Dreamwood",
        "Moonlit Meadow",
        "Forest of Dreams",
        "Whispering Woods",
      ],
      "answer": 0,
    },
    {
      "question": "How did the White Swan's journey end?",
      "options": [
        "With a happy ending",
        "In sacrifice and redemption",
        "As a tragic loss",
        "Without resolution",
        "With a twist",
      ],
      "answer": 1,
    },
    {
      "question":
        "What is mentioned as being danced upon by the moonlight in the story?",
      "options": [
        "The trees of Silvermist",
        "The waters of Silvermist",
        "The stars in the sky",
        "The flowers in the forest",
        "The sun's rays",
      ],
      "answer": 1,
    },
    {
      "question": "What did Billy love about the swans' dance?",
      "options": [
        "That it was slow and steady",
        "That it was fast and wild",
        "That they seemed to be dancing on air",
        "That they were dancing in a circle",
        "That they had no music",
      ],
      "answer": 2,
    },
    {
      "question": "What did Meg think about the author's use of language?",
      "options": [
        "She thought it was too simple",
        "She thought it was perfect for the story",
        "It reminded her of stories she'd read about mythological creatures",
        "It didn't add anything to the story",
        "It made no sense",
      ],
      "answer": 2,
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
