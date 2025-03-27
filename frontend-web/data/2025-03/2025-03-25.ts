import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Photograph Ever Taken",
    "details":
      "In 1826, French inventor Joseph Nicéphore Niépce captured a view from his window onto the courtyard and surrounding buildings with 'View from the Window at Le Gras', creating the first permanent photograph ever made.",
  },
  "date": "2025-03-25",
  "title": "When Ashes Fall",
  "body":
    "The world had ended in a blaze of fire and smoke. The once blue skies were now a permanent gray, a constant reminder of the destruction that had ravaged the planet. I stood amidst the ruins of what was once our city, the silence deafening as I gazed out at the desolate landscape.  \n\n The few remaining survivors huddled together in small groups, their eyes sunken from hunger and exhaustion. We were a mere shadow of our former selves, our bodies weakened by the harsh conditions that had become our new reality. The air was thick with the smell of smoke and ash, a constant reminder of what we had lost.  \n\n I thought back to the days before the catastrophe, when life was still worth living. When the sun shone bright and the world was full of hope and promise. Now, all that remained was the bitter taste of despair and the knowledge that our future was as uncertain as the wind that whipped through the ruins.  \n\n As I walked through the rubble-strewn streets, I stumbled upon a small piece of paper that had been torn from a book. It read: 'Hope is a choice.' In that moment, I knew what I had to do. I would find a way to rebuild our shattered world, no matter how impossible it seemed. For in the darkness, there was always a glimmer of light waiting to be found.",
  "word count": 235,
  "dialog": [
    {
      "Meg":
        "I loved how the story was set in a post-apocalyptic world, it felt so real!",
    },
    {
      "Kerry":
        "Yeah, I was on the edge of my seat when Billy found that piece of paper with 'Hope is a choice' written on it. It was such a powerful moment!",
    },
    {
      "Lui":
        "As a teacher, I appreciated how the story highlighted the importance of resilience and determination in the face of adversity.",
    },
    {
      "Billy":
        "I loved how the author wove together themes of science, history, and humanity. It felt like a true coming-of-age story.",
    },
    {
      "Meg":
        "I know what you mean, Billy! I loved how the story explored the human condition through the lens of a young boy's experiences. It was so relatable!",
    },
    {
      "Kerry":
        "Yeah, and I think it's interesting how the author used the setting to comment on our current world. It felt like a warning, but also a message of hope.",
    },
    {
      "Lui":
        "I agree with that, Kerry. The story did feel like a commentary on our own world, and how we respond to challenges and crises. It was thought-provoking, for sure.",
    },
    {
      "Billy":
        "I think what I loved most about the story was the way it made me feel. It felt like I was right there with Billy, experiencing his journey alongside him. That's what good storytelling is all about!",
    },
  ],
  "quiz": [
    {
      "question": "What was the state of the world after the catastrophe?",
      "options": [
        "The world was still peaceful and prosperous.",
        "The once blue skies were now a permanent gray, a constant reminder of the destruction that had ravaged the planet.",
        "The air was thick with the smell of smoke and ash.",
        "The people were happy and healthy.",
        "The cities were still intact and functioning normally.",
      ],
      "answer": 1,
    },
    {
      "question": "What did Billy find in the rubble-strewn streets?",
      "options": [
        "A small piece of paper with 'Hope is a choice' written on it.",
        "A book that was still intact.",
        "A bottle of water that was still clean and pure.",
        "A first-aid kit that was still stocked.",
        "A map that showed the location of safe zones.",
      ],
      "answer": 0,
    },
    {
      "question": "What was Billy's response to finding the piece of paper?",
      "options": [
        "He cried and gave up on life.",
        "He ignored it and continued on his way.",
        "He felt a sense of hope and determination that he had to rebuild their shattered world.",
        "He got angry and started fighting with others.",
        "He became depressed and lost interest in everything.",
      ],
      "answer": 2,
    },
    {
      "question": "What did the story highlight?",
      "options": [
        "The importance of science and technology in rebuilding society.",
        "The need for people to follow rules and laws.",
        "The importance of resilience and determination in the face of adversity.",
        "The value of having a strong government and military.",
        "The need for people to be happy and healthy all the time.",
      ],
      "answer": 2,
    },
    {
      "question": "What did Billy love most about the story?",
      "options": [
        "The way it made him feel like he was right there with Billy, experiencing his journey alongside him.",
        "The way it taught him a lot of new things.",
        "The way it showed him how to survive in a post-apocalyptic world.",
        "The way it made him angry and want to fight back.",
        "The way it bored him and wanted to fall asleep.",
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
    "level": "Level_4",
  },
};
export default data;
