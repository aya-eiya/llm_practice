import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first photograph of the Moon was taken",
    "details":
      "On October 26, 1845, French photographer Louis Daguerre and British astronomer John Herschel independently took photographs of the Moon using daguerreotypy.",
  },
  "date": "2024-10-27",
  "title": "After The Fire",
  "body":
    "The world had ended in a blaze of fire and smoke. The once blue skies were now a deep grey, and the air was thick with ash and debris. I walked through the ruins of what was once my city, the only sound being the crunch of gravel beneath my feet.  \n\nI thought back to the day it happened. A solar flare had hit the Earth, disabling all technology and sending us back to the dark ages. The world as we knew it was over, and a new era had begun. I wondered if there were any other survivors out there, or if I was truly alone.  \n\nI came across a small building that seemed to have been spared from the destruction. It was an old library, and the sign above the door still read 'Open'. I pushed the door open, and was greeted by the musty smell of old books. As I looked around, I saw rows and rows of shelves, stacked high with novels and textbooks.  \n\nI couldn't help but feel a sense of hope as I ran my fingers over the spines of the books. Maybe there were others out there who had survived, and maybe they too had found comfort in the pages of these stories.",
  "word count": 210,
  "dialog": [
    {
      "Meg":
        "I think what I liked most about this novel was how it described the world after the solar flare. It felt so real!",
    },
    {
      "Lui":
        "Yes, the author did a great job of painting a picture with words. But what really stuck out to me was the character's emotional journey.",
    },
    {
      "Kerry":
        "I'm surprised by how much I cared about the protagonist. They were just trying to survive, but it felt like they had so much heart!",
    },
    {
      "Billy":
        "I know, right? And the way the author used the library as a symbol of hope was really powerful. It made me think about what we would do in that situation.",
    },
    {
      "Meg":
        "Exactly! I loved how the protagonist found comfort in the books. It felt like a small reminder of what came before.",
    },
    {
      "Lui":
        "That's one of the things I appreciated most about this novel - it showed us that even in the darkest times, there is still beauty to be found.",
    },
    {
      "Kerry":
        "Yeah, and it made me think about how we can learn from history. The protagonist's experience could have been our own if something like this happened today.",
    },
    {
      "Billy":
        "Wow, I never thought of it that way! But yeah, it's true. We should always be prepared and try to learn from others' experiences.",
    },
  ],
  "quiz": [
    {
      "question": "What happened to the world after the solar flare?",
      "options": [
        "The world became a utopia",
        "The world ended in a blaze of fire and smoke",
        "The world was frozen in time",
        "The world was transformed into a desert",
        "The world remained the same",
      ],
      "answer": 1,
    },
    {
      "question": "What was the protagonist's emotional journey about?",
      "options": [
        "Surviving in a post-apocalyptic world",
        "Finding love in a new world",
        "Learning to use technology again",
        "Discovering a hidden treasure",
        "Getting revenge on the people who caused the solar flare",
      ],
      "answer": 0,
    },
    {
      "question": "What symbolized hope for the protagonist?",
      "options": [
        "A broken radio",
        "A destroyed car",
        "A abandoned library",
        "A ruined building",
        "A dead tree",
      ],
      "answer": 2,
    },
    {
      "question": "What did the author use the library as a symbol of?",
      "options": [
        "Hope and survival",
        "Despair and desperation",
        "Fear and anxiety",
        "Confusion and uncertainty",
        "Anger and revenge",
      ],
      "answer": 0,
    },
    {
      "question": "What did the protagonist find comfort in?",
      "options": [
        "Books and stories",
        "Music and radio",
        "Food and water",
        "Shelter and safety",
        "Technology and gadgets",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
