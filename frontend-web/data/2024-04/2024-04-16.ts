import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Opening of the Guggenheim Museum",
    "details":
      "On April 16, 1959, the Solomon R. Guggenheim Museum in New York City was officially opened to the public.",
  },
  "date": "2024-04-16",
  "title": "The Guggenheim Curse",
  "body":
    "In the early 1900s, the Solomon R. Guggenheim Museum was being constructed in New York City. The museum's board of trustees was excited to open the doors and showcase their collection of art to the world. However, as the opening day approached, strange things began to happen.    The workers on site reported hearing a haunting melody that seemed to emanate from within the walls of the museum. Some claimed to have seen shadowy figures moving about in the dark corridors. Others spoke of finding paintings that had been altered or vandalized overnight.    Despite these unusual occurrences, the board decided to go ahead with the opening. The day finally arrived and a large crowd gathered outside the museum's gates. As the doors opened, the attendees were greeted by an eerie silence. They made their way through the galleries, but found that every painting had been altered or vandalized in some way. Some of the attendees began to feel an overwhelming sense of dread and despair.    The curse of the Guggenheim Museum was now upon them.",
  "word count": 174,
  "dialog": [
    {
      "Billy":
        "I didn't expect the museum to be so creepy! Who vandalized all those paintings?",
    },
    {
      "Meg":
        "I know, it's like the art itself was cursed or something. I loved how the author wove together history and mystery.",
    },
    {
      "Kerry":
        "Yeah, and have you guys noticed that every painting had some kind of strange symbol on it? Like, what does it mean?",
    },
    {
      "Lui":
        "Fascinating point, Kerry. I think it's a commentary on the power of art to reflect and shape our perceptions. The symbols might represent the darker aspects of human nature.",
    },
    {
      "Billy":
        "That makes sense, but what about the strange melody people heard? Do you guys think it was just some weird acoustic thing or something more supernatural?",
    },
    {
      "Meg":
        "Ooh, I loved that part! It adds an extra layer of spookiness to the whole story. Maybe it's connected to the curse somehow.",
    },
    {
      "Kerry":
        "Definitely! The way the author described the music was so eerie. And have you noticed how every character in the book is affected by the curse differently? Some are terrified, others are curious...",
    },
    {
      "Lui":
        "Excellent observation, Kerry. It's a great example of how our individual experiences can shape our perceptions of reality. The curse becomes a metaphor for the complexities of human emotion.",
    },
    {
      "Billy":
        "I see what you mean. And what about the ending? Did anyone else feel like it was just left hanging or something?",
    },
    {
      "Meg":
        "Yeah, I was hoping for more resolution. But maybe that's just me being impatient! What do you guys think happened to the museum after everyone left?",
    },
    {
      "Kerry":
        "Hmm, good question. Maybe the curse is still out there, waiting for its next victim... or maybe the art world has finally found a way to break free from it.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was being constructed in New York City in the early 1900s?",
      "options": [
        "The Solomon R. Guggenheim Museum",
        "The Metropolitan Museum of Art",
        "The Statue of Liberty",
        "Central Park",
      ],
      "answer": 0,
    },
    {
      "question": "What did people report hearing on site at the museum?",
      "options": [
        "A loud construction noise",
        "A haunting melody",
        "People talking loudly",
        "Nothing unusual",
      ],
      "answer": 1,
    },
    {
      "question":
        "How were the paintings in the museum galleries altered or vandalized?",
      "options": [
        "They were painted over entirely",
        "They had strange symbols added to them",
        "They were torn into pieces",
        "Something else",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did Lui think the symbols on the paintings might represent?",
      "options": [
        "The power of nature",
        "The darker aspects of human nature",
        "The beauty of art",
        "Something else",
      ],
      "answer": 1,
    },
    {
      "question":
        "What happened to the attendees who entered the museum as described in the novel?",
      "options": [
        "They became extremely happy and excited",
        "They were unaffected by anything strange",
        "They began to feel an overwhelming sense of dread and despair",
        "Something else",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Economy",
    "flavor": "Thriller",
    "models": { "main": "llama3", "novel": "llava" },
    "level": "Level_5",
  },
};
export default data;
