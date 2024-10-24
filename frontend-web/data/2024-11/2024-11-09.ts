import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Premiere of The Wizard of Oz",
    "details":
      "The premiere of The Wizard of Oz took place at Grauman's Chinese Theatre in Hollywood on November 9, 1939",
  },
  "date": "2024-11-09",
  "title": "Ashes of Eternity",
  "body":
    "The world had ended in a catastrophic blaze of fire and destruction, leaving behind only ash and desolate wasteland. It was as if the very fabric of existence had been torn apart, revealing the raw, brutal truth that humanity was but a fleeting moment in the grand tapestry of time.  \n\n Amidst this barren landscape, a lone figure emerged, her name lost to the annals of history. She wore a tattered cloak and carried a battered rifle, its once-shiny surface now dulled by the constant soot and grime that coated everything. Her eyes, though, still burned with a fierce determination, as if fueled by a desperate hope for something more.  \n\n The ruins of civilization stretched out before her like a graveyard of forgotten dreams. Towering skyscrapers stood as skeletal monoliths, their steel beams twisted and tangled in a mad dance of rust and decay. In the distance, a faint hum of machinery whispered through the silence, a reminder that even in this desolate world, there was still a spark of life to be found.",
  "word count": 173,
  "dialog": [
    {
      "Meg":
        "This novel is so hauntingly beautiful! I feel like I'm right there with her, walking through the desolate wasteland.",
    },
    {
      "Lui":
        "I agree, Meg. The author's use of language is breathtaking. It's a true masterpiece of post-apocalyptic fiction.",
    },
    {
      "Billy":
        "Yeah, and I love how it's not just about the world ending, but also about the human spirit and our ability to hope even in the darkest times.",
    },
    {
      "Kerry":
        "I know, right? It's like, even though everything is destroyed, there's still this spark of life that keeps going. It's so inspiring!",
    },
    {
      "Meg":
        "Exactly! And I love how the main character is just a regular person, not some superhero or anything. She's just trying to survive and make sense of it all.",
    },
    {
      "Lui":
        "That's one of the things that makes this novel so powerful, Meg. It's relatable and real, you know? It feels like something that could actually happen.",
    },
    {
      "Billy":
        "Yeah, and I love how it's not just about the story itself, but also about the themes and ideas it explores. It's really thought-provoking stuff.",
    },
    {
      "Kerry":
        "Totally! And it's not just about the themes, either. The author's use of imagery and description is so vivid that I felt like I was right there with her in the wasteland, feeling the ash and dust under my feet.",
    },
  ],
  "quiz": [
    {
      "question": "What is the main theme of the novel 'Ashes of Eternity'?",
      "options": [
        "Survival",
        "Hope",
        "Desolation",
        "Human Spirit",
        "Destruction",
      ],
      "answer": 3,
    },
    {
      "question": "What is the state of the world after the apocalypse?",
      "options": [
        "Beautiful",
        "Peaceful",
        "Desolate",
        "Futuristic",
        "Boring",
      ],
      "answer": 2,
    },
    {
      "question": "Who is the main character in the novel 'Ashes of Eternity'?",
      "options": [
        "A superhero",
        "A regular person",
        "An alien",
        "A robot",
        "A machine",
      ],
      "answer": 1,
    },
    {
      "question":
        "What is the author's use of language like in the novel 'Ashes of Eternity'?",
      "options": [
        "Boring",
        "Confusing",
        "Hauntingly beautiful",
        "Easy to understand",
        "Difficult to read",
      ],
      "answer": 2,
    },
    {
      "question":
        "What is the main character's goal in the novel 'Ashes of Eternity'?",
      "options": [
        "To survive",
        "To find hope",
        "To destroy everything",
        "To be happy",
        "To be sad",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_8",
  },
};
export default data;
