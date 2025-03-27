import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Evariste Galois's Murder",
    "details":
      "French mathematician Evariste Galois was stabbed to death in a duel over a woman.",
  },
  "date": "2025-04-07",
  "title": "Beyond the Last Horizon",
  "body":
    "In the year 2154, the once blue skies were now a permanent gray, a constant reminder of the devastating effects of climate change. The air was thick with pollutants, and the world was on the brink of collapse.  \n\n Amidst this chaos, a young woman named Ava lived in a sprawling metropolis known as New Eden. It was a self-sustaining city, built to preserve humanity's last hope for survival. But even within its walls, Ava felt trapped and suffocated by the strict rules and regulations that governed every aspect of her life.  \n\n One day, while exploring the city's underground tunnels, Ava stumbled upon a hidden laboratory where scientists were working on a top-secret project. They were experimenting with genetic engineering, trying to create a new breed of humans who could thrive in the harsh environment outside. Ava was horrified by the implications and knew she had to act quickly.  \n\n With the help of a small group of rebels, Ava set out on a perilous journey to expose the truth about New Eden and the sinister forces controlling it. As they navigated through the ruins of the old world, they encountered strange creatures and unexpected allies who joined their fight for freedom.",
  "word count": 200,
  "dialog": [
    {
      "Meg":
        "I loved how Ava's journey was so relatable to our own lives in New Eden.",
    },
    {
      "Kerry":
        "Totally! I mean, who wouldn't want to escape the strict rules and regulations of our city?",
    },
    {
      "Billy":
        "I think what really stood out to me was the part where Ava discovers the hidden laboratory. It's like, you know how we're always learning new things in class? But this is on a whole different level.",
    },
    {
      "Lui":
        "Well, yes and no. While it's true that Ava's discovery was significant, I think what's more important is how she responds to it. She takes action and rallies the rebels, which shows a lot of courage and leadership skills.",
    },
    {
      "Meg":
        "I agree with Lui. And I also loved how the novel explored themes of freedom and rebellion. It made me think about our own lives in New Eden and what we can do to make a difference.",
    },
    {
      "Kerry":
        "Yeah, it's like, we're not just passive citizens, we have the power to change things. And Ava's story shows us that even in the darkest of times, there's always hope for a better future.",
    },
    {
      "Billy":
        "Exactly! And I think what really gets me is how the novel touches on the idea of science and technology being used for good or evil. It's like, we have this amazing capacity to create and innovate, but it can also be used to control and manipulate people.",
    },
    {
      "Lui":
        "Well said, Billy. And I think that's why it's so important for us to educate ourselves and others about the responsible use of technology and science. We need to be aware of the implications and make informed decisions about how we use these tools.",
    },
  ],
  "quiz": [
    {
      "question": "What was the state of the world in the year 2154?",
      "options": [
        "The world was on the brink of collapse.",
        "The world was at peace.",
        "The world was still blue.",
        "The world had already ended.",
        "New Eden was thriving.",
      ],
      "answer": 0,
    },
    {
      "question": "What did Ava discover in the underground tunnels?",
      "options": [
        "A hidden laboratory where scientists were working on a top-secret project.",
        "A secret library with ancient books.",
        "A hidden garden with rare flowers.",
        "A secret room with treasures.",
        "Nothing significant.",
      ],
      "answer": 0,
    },
    {
      "question": "What was Ava's response to her discovery?",
      "options": [
        "She ignored it and continued with her daily life.",
        "She reported it to the authorities.",
        "She took action and rallied the rebels.",
        "She was horrified but didn't do anything.",
        "She was excited to share it with others.",
      ],
      "answer": 2,
    },
    {
      "question": "What theme was explored in the novel?",
      "options": [
        "Freedom and rebellion.",
        "Science and technology.",
        "Hope for a better future.",
        "The importance of education.",
        "The dangers of climate change.",
      ],
      "answer": 0,
    },
    {
      "question": "What did Billy think was important about Ava's story?",
      "options": [
        "That she had a lot of money.",
        "That she was very popular.",
        "That she showed courage and leadership skills.",
        "That she had a big following.",
        "That she had a lot of friends.",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Mathematics",
    "flavor": "Dystopian",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
