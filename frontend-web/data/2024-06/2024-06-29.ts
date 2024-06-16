import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "The premiere of 'Jaws' starring Roy Scheider, Robert Shaw and Richard Dreyfuss",
    "details":
      "The thriller film directed by Steven Spielberg opened in theaters across the United States",
  },
  "date": "2024-06-29",
  "title": "The Last Broadcast",
  "body":
    "The world as we knew it had ended. The once bustling streets were now nothing but a desolate wasteland, devoid of life. The few remaining survivors huddled together in small groups, trying to make sense of the new reality. I was one such survivor, clinging to my trusty radio as if it were a lifeline.  \n\n I had been broadcasting on the local frequency for weeks now, sharing what little news and information I could gather with anyone who might still be listening. It was a small comfort, but it gave me hope that there were others out there, too. Today, however, something different caught my attention. A faint signal, barely audible over the static... Could it be?...  \n\n I tuned in closer, my heart racing with excitement. And then I heard it – a voice, weak but clear, speaking of life and hope. It was as if the world had come full circle, like a beacon shining through the darkness. The premiere of 'Jaws' might have been just a movie once, but now it was a symbol of resilience, of human connection in the face of adversity.",
  "word count": 186,
  "dialog": [
    {
      "Lui":
        "I must say, I was blown away by the ending. The way it wrapped up all the loose ends and left me feeling hopeful was really impressive.",
    },
    {
      "Meg":
        "I completely agree! The way the author used 'Jaws' as a symbol of resilience and human connection was so powerful.",
    },
    {
      "Kerry":
        "Yeah, I loved how the novel explored the idea that even in the darkest times, there's always hope. It was like a beacon shining through the darkness.",
    },
    {
      "Billy":
        "I think what I loved most about this novel was the way it made me feel. It was like a ray of sunshine piercing through all the gloom and despair.",
    },
    {
      "Lui":
        "And I appreciated how the author didn't shy away from exploring the complexities of human nature. The characters were so well-developed, it felt like I was right there with them.",
    },
    {
      "Meg":
        "Oh, absolutely! The way the novel wove together all these different storylines and themes was just masterful. It's clear that the author is a true storyteller at heart.",
    },
    {
      "Kerry":
        "I'm gonna go out on a limb here and say that this might be one of my new favorite novels. What about you guys?",
    },
    {
      "Billy":
        "Definitely! I mean, I've read some pretty great books before, but this one really stood out to me. I think it's because it resonated with me on such a deep level.",
    },
    {
      "Lui":
        "I think we can all agree that the novel was a real page-turner. It kept us engaged and invested from start to finish.",
    },
  ],
  "quiz": [
    {
      "question": "What was the world like after it ended?",
      "options": [
        "A desolate wasteland",
        "A bustling city",
        "A peaceful forest",
        "A futuristic metropolis",
        "A post-apocalyptic landscape",
      ],
      "answer": 0,
    },
    {
      "question": "What did the protagonist use to stay connected with others?",
      "options": [
        "A phone",
        "A computer",
        "A radio",
        "A book",
        "A journal",
      ],
      "answer": 2,
    },
    {
      "question":
        "What movie was mentioned in the novel as a symbol of resilience and human connection?",
      "options": [
        "E.T.",
        "Jaws",
        "The Shawshank Redemption",
        "Titanic",
        "The Wizard of Oz",
      ],
      "answer": 1,
    },
    {
      "question": "How did the author use 'Jaws' in the novel?",
      "options": [
        "As a symbol of fear and danger",
        "As a symbol of hope and resilience",
        "As a symbol of love and friendship",
        "As a symbol of war and conflict",
        "As a symbol of environmental destruction",
      ],
      "answer": 1,
    },
    {
      "question": "What did Kerry say might be one of his new favorite novels?",
      "options": [
        "A thriller",
        "An adventure",
        "A romance",
        "A drama",
        "A science fiction",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3",
      "novel": "llama3",
    },
    "level": "Level_8",
  },
};
export default data;
