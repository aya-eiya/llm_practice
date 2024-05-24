import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Starry Night by Vincent van Gogh is completed",
    "details":
      "On April 27th, 1889, Vincent van Gogh finished his iconic painting 'The Starry Night' in Arles, France.",
  },
  "date": "2024-04-27",
  "title": "The Starry Night",
  "body":
    "In a small village in France, there lived a man named Vincent van Gogh. He was known for his eccentric behavior and unconventional art style. One evening, he sat by the window of his room in an asylum, staring out at the sky. The stars twinkled brightly and inspired him to create something beautiful. Over the next few days, he worked tirelessly on his latest masterpiece, a painting that would come to be known as 'The Starry Night'. As he painted, the colors seemed to bleed onto the canvas, creating swirling patterns that seemed to dance across the sky. When he was finally finished, Vincent knew that he had created something truly magical. The villagers marveled at the beauty of the painting and it became a symbol of hope and inspiration for all who saw it.",
  "word count": 136,
  "dialog": [
    {
      "Billy":
        "I loved how Vincent van Gogh's art was inspired by the stars! It's amazing to see how something as simple as looking at the sky can spark creativity.",
    },
    {
      "Kerry":
        "Yeah, I know what you mean. His paintings are so vibrant and expressive. And it's cool that he wasn't afraid to be different and follow his own path.",
    },
    {
      "Meg":
        "I loved how Vincent struggled with mental health issues, but still managed to create something beautiful. It shows us that even in difficult times, we can find ways to express ourselves creatively.",
    },
    {
      "Lui":
        "That's a great point, Meg. And I think it's also important to note how Vincent's art was ahead of its time. He wasn't afraid to experiment and try new things, which is something we should all strive for.",
    },
    {
      "Billy":
        "I never thought about it that way, Lui. But you're right - Vincent's willingness to take risks and challenge the status quo really paid off in the end.",
    },
    {
      "Kerry":
        "Totally agree! And I think his art is still inspiring people today. I mean, who wouldn't want to be able to create something as beautiful as 'The Starry Night'?",
    },
    {
      "Meg":
        "Exactly! Art has a way of transcending time and culture. It's amazing to think that Vincent's painting can still bring joy and inspiration to people all these years later.",
    },
    {
      "Lui":
        "Well said, Meg. And I think it's also important to recognize the impact that art can have on our mental health and wellbeing. Vincent's story shows us that creative expression can be a powerful tool for coping with stress and anxiety.",
    },
  ],
  "quiz": [
    {
      "question": "Where did Vincent van Gogh live?",
      "options": [
        "France",
        "Netherlands",
        "Belgium",
        "Germany",
        "Italy",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the inspiration for Vincent's painting 'The Starry Night'?",
      "options": [
        "A dream he had",
        "Watching the stars in the sky",
        "Reading a book on art",
        "Talking to his friends",
        "Looking at the sunset",
      ],
      "answer": 1,
    },
    {
      "question": "What was Vincent van Gogh known for?",
      "options": [
        "His good looks",
        "His love of music",
        "His eccentric behavior and unconventional art style",
        "His ability to make delicious food",
        "His talent in sports",
      ],
      "answer": 2,
    },
    {
      "question": "How did Vincent's art style differ from others?",
      "options": [
        "It was more realistic than others",
        "It was less colorful than others",
        "It was more expressive and vibrant than others",
        "It was less detailed than others",
        "It was more abstract than others",
      ],
      "answer": 2,
    },
    {
      "question": "What is the significance of 'The Starry Night'?",
      "options": [
        "It's a beautiful painting",
        "It shows Vincent's love for nature",
        "It represents hope and inspiration for people who see it",
        "It's a representation of his mental health struggles",
        "It's just a random artwork",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Gothic",
    "models": { "main": "llama3", "novel": "llava" },
    "level": "Level_5",
  },
};
export default data;
