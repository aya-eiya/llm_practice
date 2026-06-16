import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": 'Release of "2001: A Space Odyssey"',
    "details":
      "Stanley Kubrick's groundbreaking science fiction film was released on June 2, 1968",
  },
  "date": "2026-06-02",
  "title": "Shadows of the Cosmos",
  "body":
    "In the depths of space, a mysterious portal had opened, beckoning me towards an otherworldly realm. As I ventured through its dark expanse, I stumbled upon an eerie resemblance to the planet Earth. The stars twinkled like diamonds against the blackness of the universe, yet their light seemed to emanate from a distant memory.  \n\n A figure emerged from the shadows, its presence both captivating and unsettling. It was the silhouette of a filmmaker, surrounded by an aura of creative genius. I watched in awe as it conjured images on a screen, transporting me to a world beyond our own. The story unfolded like a dark fairy tale, where humans confronted the unknown with courage and curiosity.  \n\n As I delved deeper into this cinematic realm, I discovered that the filmmaker's masterpiece was a reflection of humanity's innate desire for exploration. It spoke of a dream to transcend the confines of our world and reach for the stars. Yet, in its depths, I sensed a haunting reminder of our own mortality. The cosmos whispered secrets to me on the wind, reminding me that even in darkness, there lies an eternal beauty.",
  "word count": 189,
  "dialog": [
    {
      "Billy":
        "I love how the novel explores the idea of humanity's innate desire for exploration!",
    },
    {
      "Meg":
        "It's so interesting to see how the story reflects our own mortality, don't you think?",
    },
    {
      "Kerry":
        "Yeah, and I think it's also about how we're all connected in some way. Like, the filmmaker's creation is this bridge between worlds.",
    },
    {
      "Lui":
        "Well, let's not forget that this novel is also a commentary on the power of art to transcend our limitations.",
    },
    {
      "Billy":
        "That's so true! The way the writer uses words to create this entire other world is just amazing!",
    },
    {
      "Meg":
        "I know what you mean. I felt like I was right there with the characters, experiencing everything they went through.",
    },
    {
      "Kerry":
        "And I loved how it challenged me to think about my own place in the universe. Like, what's our purpose?",
    },
    {
      "Lui":
        "A question that has puzzled philosophers and thinkers for centuries. This novel is a reminder that we're all still searching for answers.",
    },
  ],
  "quiz": [
    {
      "question":
        "What did the narrator encounter while venturing through the portal?",
      "options": [
        "A desolate wasteland",
        "An eerie resemblance to Earth",
        "A swarm of hostile aliens",
        "A paradise filled with lush forests",
        "A bustling city",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the narrator's first impression of the filmmaker's creation?",
      "options": [
        "It was too intense for them",
        "It was too boring for them",
        "They were captivated and unsettled by it",
        "They were disappointed in its lack of originality",
        "They didn't notice anything special",
      ],
      "answer": 2,
    },
    {
      "question": "What idea is explored in the novel according to Billy?",
      "options": [
        "The power of art to transcend our limitations",
        "Humanity's innate desire for exploration",
        "Our connection to each other through technology",
        "Our connection to nature and the environment",
        "Our purpose in life",
      ],
      "answer": 1,
    },
    {
      "question":
        "What is a theme that the novel touches on, according to Meg?",
      "options": [
        "The danger of exploring space",
        "The importance of science over art",
        "Humanity's mortality and the desire for transcendence",
        "Our connection to each other through storytelling",
        "The power of technology",
      ],
      "answer": 2,
    },
    {
      "question":
        "What is something that Lui mentions as a topic that has puzzled philosophers and thinkers for centuries?",
      "options": [
        "Humanity's purpose in life",
        "The nature of love",
        "The existence of aliens",
        "Our connection to the universe",
        "The power of art",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Gothic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
