import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Beatles Release Sgt. Pepper's Lonely Hearts Club Band",
    "details":
      "Sgt. Pepper's Lonely Hearts Club Band is the eighth studio album by English rock band The Beatles, released in June 1967 on Parlophone in the UK and on Capitol Records in the US. It was also referred to as the 'Magical Mystery Tour' album because it was originally intended to be paired with the film of the same name, which had premiered a few months earlier.",
  },
  "date": "2025-01-24",
  "title": "Love in the Time of Revolution",
  "body":
    "As I walked through the streets of Paris, the smell of freshly baked bread wafted through the air, mingling with the scent of revolution. The year was 1967, and the city was alive with the spirit of change. I had come to join the students protesting against the war in Vietnam, but as I looked around at the sea of faces, I felt a sense of disconnection. That was when I saw her, standing on the edge of the crowd, her eyes shining with a fierce determination.  \n\n We locked eyes for what felt like an eternity, and I knew in that moment that I had found someone who understood me. Her name was Sophie, and she was a poet, driven by the same passion for justice that burned within me. As we talked, our words spilled out like a river, filling the spaces between us with a sense of belonging.  \n\n We danced through the streets, our feet moving in time as we chanted slogans and sang songs of revolution. The world around us was ablaze with colour and sound, but all I could see was Sophie's face, shining like a beacon in the chaos. And when the night finally came to an end, and the protests dispersed, I knew that I would never be the same again.",
  "word count": 217,
  "dialog": [
    {
      "Billy":
        "I just finished reading that novel, and I have to say, it was amazing! The way the author described the streets of Paris in 1967 was so vivid and immersive.",
    },
    {
      "Meg":
        "I know, right? I loved how the main character felt a sense of disconnection at first, but then met Sophie and found a connection through their shared passion for justice. It's like she understood him on a deeper level.",
    },
    {
      "Kerry":
        "That's so cool! I think it's awesome how the author used that as a way to explore themes of identity and belonging. It made me think about my own relationships and how we form connections with others.",
    },
    {
      "Lui":
        "As a teacher, I appreciate how the novel tackled complex issues like revolution and social justice in a way that's accessible to readers of all ages. It's a great example of how literature can be used to educate and inspire us.",
    },
    {
      "Billy":
        "I love how the author wove historical context into the narrative without making it feel like a history lesson. It was so engaging, and I felt like I learned something new while still being entertained.",
    },
    {
      "Meg":
        "Yes! And the way Sophie's character shone through as a poet was incredible. It made me think about how our passions and interests can be used to connect with others and find common ground.",
    },
    {
      "Kerry":
        "Totally! I think that's one of the things I love most about this novel – it shows us that even in the midst of chaos and uncertainty, we can find meaning and purpose through our relationships and shared values.",
    },
    {
      "Lui":
        "Well said, Kerry. And I think that's something that readers of all ages can take away from this novel: the importance of connection, community, and standing up for what we believe in.",
    },
  ],
  "quiz": [
    {
      "question": "What year was the novel set in?",
      "options": [
        "1957",
        "1967",
        "1977",
        "1987",
        "1997",
      ],
      "answer": 1,
    },
    {
      "question": "Where did the main character meet Sophie?",
      "options": [
        "In a classroom",
        "On the streets of Paris",
        "At a bookstore",
        "In a cafe",
        "At a museum",
      ],
      "answer": 1,
    },
    {
      "question": "What was Sophie's profession?",
      "options": [
        "Teacher",
        "Doctor",
        "Poet",
        "Lawyer",
        "Artist",
      ],
      "answer": 2,
    },
    {
      "question":
        "Why did the main character feel a sense of disconnection at first?",
      "options": [
        "He was shy",
        "He didn't like the protests",
        "He felt out of place in Paris",
        "He didn't know anyone",
        "He was tired",
      ],
      "answer": 2,
    },
    {
      "question":
        "What theme did the novel explore through the main character's relationships?",
      "options": [
        "Identity and belonging",
        "Social justice and revolution",
        "Friendship and loyalty",
        "Family and love",
        "Community and purpose",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
