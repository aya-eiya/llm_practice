import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": 'The premiere of "Metropolis"',
    "details":
      "On October 1, 1927, the German science fiction film directed by Fritz Lang premiered in Berlin, Germany.",
  },
  "date": "2024-10-01",
  "title": "Last Hope",
  "body":
    "The world as we knew it was gone. A nuclear apocalypse had ravaged the planet, leaving only a few scattered survivors. I stood atop a crumbling skyscraper, gazing out upon the desolate wasteland that once was New York City.  \n\n The air was thick with toxic fumes, and the smell of smoke lingered in every breath. But it was not just the physical destruction that had ravaged our world - it was the emotional toll as well. We had lost loved ones, friends, and even our own sense of humanity.  \n\n As I looked out at the ruins, I spotted a small group of survivors making their way towards me. They were tired, hungry, and scared, but they held on to each other for support. I knew that we were all that was left - the last hope for a world that had been destroyed.  \n\n We gathered what little we could from the ruins - food, water, medical supplies - and set out on a perilous journey to find a safe haven. It wouldn't be easy, but it was our only chance at survival. And so, we set forth into the unknown, determined to rebuild and reclaim our world.",
  "word count": 197,
  "dialog": [
    {
      "Meg":
        "I just finished reading the novel, and I'm still reeling from the experience.",
    },
    {
      "Lui":
        "What did you think of the world-building? It was quite vivid and immersive, wasn't it?",
    },
    {
      "Billy":
        "Yeah, I loved how the author described the destruction of New York City. It felt so real!",
    },
    {
      "Kerry":
        "I know, right? And the characters! They were all so unique and interesting. I especially liked the protagonist's determination to rebuild.",
    },
    {
      "Meg":
        "Exactly! And the themes of hope and resilience were really powerful. It made me think about our own world and how we can learn from this story.",
    },
    {
      "Lui":
        "That's a great point, Meg. The novel does offer some valuable lessons for us today. As educators, it's our responsibility to help students connect the dots between history and current events.",
    },
    {
      "Billy":
        "I'm so glad we got to discuss this novel together! It really made me think about my own place in the world and what I can do to make a difference.",
    },
    {
      "Kerry":
        "Same here, Billy. And it's not just about individual actions – it's also about how we work together as a community to build a better future.",
    },
  ],
  "quiz": [
    {
      "question": "What happened to the world in the novel?",
      "options": [
        "A nuclear war destroyed the planet",
        "The air became toxic",
        "The smell of smoke lingered",
        "The characters were tired and hungry",
        "The author was sad",
      ],
      "answer": 0,
    },
    {
      "question": "What did the protagonist find in the ruins?",
      "options": [
        "Only their own sense of humanity",
        "A small group of survivors",
        "Food, water, medical supplies",
        "A safe haven",
        "Nothing",
      ],
      "answer": 2,
    },
    {
      "question": "Why was it important for the characters to rebuild?",
      "options": [
        "So they could have fun",
        "To make a profit",
        "Because it was their only chance at survival",
        "To prove themselves",
        "None of the above",
      ],
      "answer": 2,
    },
    {
      "question": "What theme is prominent in the novel?",
      "options": [
        "Hope and despair",
        "Resilience and rebuilding",
        "Fear and anger",
        "Sorrow and regret",
        "Pride and jealousy",
      ],
      "answer": 1,
    },
    {
      "question":
        "Why was it important for the students to learn from this story?",
      "options": [
        "To make them more confident",
        "So they could have fun",
        "Because it offers valuable lessons for our world today",
        "To help them connect the dots between history and current events",
        "None of the above",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
