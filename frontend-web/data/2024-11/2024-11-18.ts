import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "The first photograph was taken by Joseph Nicephore Niepce on November 18, 1826.",
    "details":
      "Joseph Nicephore Niepce used a process called heliography to create the image, which was of a view from the window of his workshop.",
  },
  "date": "2024-11-18",
  "title": "When Silence Falls",
  "body":
    "The once blue sky was now a deep grey, as if ashes had been poured across the heavens. The air was thick with the stench of smoke and death. It had been five years since the world ended in a catastrophic event known only as 'The Great Silence'.  \n\n I stood atop the ruins of what was once my home, gazing out at the desolate landscape before me. My eyes were dry, for there was no one left to mourn with. The silence was deafening, a constant reminder of all that had been lost. \n\n I thought back to the days when life was still worth living. When children laughed and played in the streets, and love was a thing that could be felt without fear of loss. But those times were gone now, and all that remained was this cold, empty world. \n\n As I stood there, the wind whispered secrets in my ear. Secrets of what had been lost, and what might yet be found. But for now, I had to focus on survival, one day at a time.",
  "word count": 178,
  "dialog": [
    {
      "Meg":
        "I just finished reading this novel, and I have to say it's been one of my favorites so far.",
    },
    {
      "Kerry":
        "I know, right? The way the author described the world after the Great Silence was so vivid and haunting. It really made me feel like I was there with the protagonist.",
    },
    {
      "Lui":
        "I agree with both of you. The novel's exploration of themes such as survival, hope, and humanity in the face of catastrophic loss is truly impactful. As an educator, it's also interesting to see how the author weaves historical context into the narrative.",
    },
    {
      "Billy":
        "I loved how the protagonist's voice was so distinct and relatable. I felt like I could really understand what they were going through. It made me think about my own experiences and how I would cope in a similar situation.",
    },
    {
      "Meg":
        "And the way the author used the wind as a symbol of hope and renewal was just beautiful. It gave me chills every time it happened. I loved how the novel ended on a hopeful note, despite everything that had been lost.",
    },
    {
      "Kerry":
        "Yeah, I know what you mean. The ending really stuck with me. It made me think about the importance of holding onto hope, even in the darkest times. And the way the protagonist found a way to keep going, despite everything, was truly inspiring.",
    },
    {
      "Lui":
        "As educators, it's our job to help students develop critical thinking skills and empathy for others. This novel does an excellent job of showcasing these themes and encouraging readers to reflect on their own values and priorities.",
    },
  ],
  "quiz": [
    {
      "question": "What was the state of the sky after The Great Silence?",
      "options": [
        "Bright blue",
        "Deep grey",
        "Light brown",
        "Dark blue",
        "Black",
      ],
      "answer": 1,
    },
    {
      "question": "How did the protagonist feel about the silence?",
      "options": [
        "Happy and calm",
        "Sad and mournful",
        "Angry and frustrated",
        "Scared and anxious",
        "Dry and numb",
      ],
      "answer": 3,
    },
    {
      "question": "What was the wind described as in the novel?",
      "options": [
        "A source of danger",
        "A symbol of hope",
        "A reminder of loss",
        "A cause of fear",
        "A sign of renewal",
      ],
      "answer": 1,
    },
    {
      "question": "How did the protagonist cope with their situation?",
      "options": [
        "By giving up and surrendering",
        "By fighting back and resisting",
        "By focusing on survival and finding hope",
        "By becoming angry and violent",
        "By ignoring the problem",
      ],
      "answer": 2,
    },
    {
      "question": "What was the overall tone of the novel?",
      "options": [
        "Light-hearted and humorous",
        "Dark and depressing",
        "Hopeful and inspiring",
        "Angry and frustrating",
        "Scary and suspenseful",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
