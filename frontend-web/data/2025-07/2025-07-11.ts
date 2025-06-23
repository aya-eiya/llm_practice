import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Death of Paul Cézanne",
    "details":
      "Paul Cézanne, a French post-Impressionist painter, died on July 11th, 1909",
  },
  "date": "2025-07-11",
  "title": "Shadows of Mont Saint-Victoire",
  "body":
    "The moon cast its silvery glow upon the crumbling chateau, where Paul Cézanne's restless spirit had finally found peace. July 11th, 1909, a day that would mark the end of an era, as the great painter's brush lay still for eternity.  \n\n In the twilight hours, I wandered through the deserted halls, my footsteps echoing off the walls as I searched for answers to questions that had long plagued me. The master's works, once so full of life and energy, now seemed frozen in time, a testament to his untimely demise.  \n\n As I gazed upon the canvas, I saw not just brushstrokes and colors, but the very essence of Mont Saint-Victoire itself - a mountain that had inspired some of Cézanne's most iconic works. And yet, even in death, he continued to speak to me, whispering secrets of the universe, hidden within the folds of his artistic genius.  \n\n The shadows danced around me, as if trying to relive the memories of a bygone era. I felt the presence of Cézanne's spirit, lingering between worlds, a ghostly figure forever trapped in the realm of the imagination.",
  "word count": 184,
  "dialog": [
    {
      "Meg":
        "I just finished reading this novel about Paul Cézanne, and I'm still reeling from it.",
    },
    {
      "Lui":
        "What did you think of the way the author described the moon's silvery glow on the crumbling chateau?",
    },
    {
      "Billy":
        "That was so cool! I loved how it set the tone for the rest of the story. And the way he wrote about Cézanne's spirit still being present in the masterworks, it gave me chills.",
    },
    {
      "Kerry":
        "Yeah, that part was really powerful. It made me think about how art can transcend time and space.",
    },
    {
      "Meg":
        "I know what you mean! I felt like I was right there with Cézanne in his studio, looking at all the paintings he'd created. And then when we went to Mont Saint-Victoire, it was like I was seeing the real thing, not just a painting.",
    },
    {
      "Lui":
        "That's one of the things that struck me about this novel - how it made you feel connected to Cézanne and his work. It was almost as if you were experiencing history firsthand.",
    },
    {
      "Billy":
        "Exactly! And I loved how it explored themes of life, death, and the afterlife through art. It was really thought-provoking.",
    },
    {
      "Kerry": "Yeah, definitely a novel that'll stay with me for a while.",
    },
    {
      "Meg": "I'm going to have to reread this one again soon...",
    },
  ],
  "quiz": [
    {
      "question": "What event occurred on July 11th, 1909?",
      "options": [
        "Paul Cézanne's birthday",
        "The moon landing",
        "Paul Cézanne's death",
        "The end of World War I",
        "The beginning of World War II",
      ],
      "answer": 3,
    },
    {
      "question": "Where did the narrator wander in the twilight hours?",
      "options": [
        "In a forest near Mont Saint-Victoire",
        "Through the deserted halls of a chateau",
        "On a mountain peak",
        "In a studio filled with art supplies",
        "At a café",
      ],
      "answer": 2,
    },
    {
      "question": "What continued to speak to the narrator even in death?",
      "options": [
        "The moon's silvery glow",
        "The whispers of Cézanne's spirit",
        "The beauty of Mont Saint-Victoire",
        "The artist's genius and secrets of the universe",
        "The memories of a bygone era",
      ],
      "answer": 4,
    },
    {
      "question": "Who was reading about Paul Cézanne in the novel?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "All of them",
      ],
      "answer": 3,
    },
    {
      "question": "What did Billy think was cool about the story?",
      "options": [
        "The way it ended on a cliffhanger",
        "The author's description of the moon's silvery glow",
        "The way it explored themes of life, death, and the afterlife through art",
        "The way it made him feel connected to Cézanne and his work",
        "None of these options",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Gothic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
