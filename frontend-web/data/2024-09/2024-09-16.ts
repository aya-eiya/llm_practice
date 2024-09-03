import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First photograph of the Moon taken by Louis Daguerre",
    "details":
      "Louis Daguerre takes the first photograph of the Moon on September 16, 1839, using his newly developed daguerreotype process.",
  },
  "date": "2024-09-16",
  "title": "The Moonlit Serenade",
  "body":
    "It was a warm summer evening in 1839 when Louis Daguerre, a young and ambitious photographer, stepped out into the garden to take his first photograph of the moon. The sky was ablaze with stars, and the air was filled with the sweet scent of blooming flowers. As he set up his camera, he couldn't help but feel a sense of excitement and wonder at the possibility of capturing the beauty of the night sky on film.  \n\n Daguerre carefully placed the sensitive plate into the camera and waited patiently for the image to develop. The minutes ticked by, and finally, the plate was ready to be revealed. As he gazed upon the photograph, a smile spread across his face. The moon, once a distant and elusive target, now shone brightly in all its glory on the photographic plate.  \n\n In that moment, Daguerre knew that he had achieved something truly remarkable. His passion for photography had led him to capture the beauty of the night sky, and he was eager to share his discovery with the world. As he looked up at the moon, now a familiar friend in the darkness, he felt a sense of pride and accomplishment.",
  "word count": 198,
  "dialog": [
    {
      "Billy":
        "I loved the novel! The description of Daguerre's first photograph of the moon was so vivid.",
    },
    {
      "Meg":
        "I know, right? I felt like I was there in the garden with him. And the way he felt a sense of pride and accomplishment...",
    },
    {
      "Kerry":
        "Yeah, it's cool how he captured the beauty of the night sky on film. But what's with the ending? It feels a bit abrupt.",
    },
    {
      "Lui":
        "I agree, Kerry. The ending could have been more satisfying. But overall, I think the novel did a great job of showcasing Daguerre's passion for photography.",
    },
    {
      "Billy":
        "I see what you mean about the ending, Lui. But I loved how it made me feel like I was right there with Daguerre in that moment. It was so immersive!",
    },
    {
      "Meg":
        "Yeah, and the writing style was perfect for a historical fiction novel. It felt like I was reading a diary entry or something.",
    },
    {
      "Kerry":
        "That's true. The writing was really engaging. But I still think they could have done more with the ending. Maybe some resolution or closure...",
    },
  ],
  "quiz": [
    {
      "question":
        "Who was the photographer who took his first photograph of the moon?",
      "options": [
        "Louis Daguerre",
        "William Herschel",
        "Galileo Galilei",
        "Isaac Newton",
        "Leonardo da Vinci",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was Louis Daguerre feeling when he looked at his first photograph of the moon?",
      "options": [
        "Panic",
        "Excitement and wonder",
        "Disappointment",
        "Satisfaction",
        "Confusion",
      ],
      "answer": 1,
    },
    {
      "question":
        "Where did Louis Daguerre take his first photograph of the moon?",
      "options": [
        "In a studio",
        "In a garden",
        "On a mountain",
        "In a forest",
        "At the beach",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the mood like on the summer evening when Louis Daguerre took his first photograph of the moon?",
      "options": [
        "Rainy and dark",
        "Sunny and bright",
        "Warm and starry",
        "Cool and breezy",
        "Calm and peaceful",
      ],
      "answer": 2,
    },
    {
      "question": "How did Billy feel about the novel?",
      "options": [
        "I loved it!",
        "It was okay, I guess.",
        "I hated it.",
        "I didn't finish it.",
        "I'm not sure.",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Historical Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
