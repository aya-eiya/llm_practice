import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Bauhaus School is Founded",
    "details":
      "In 1919, Walter Gropius founded the Bauhaus school, a revolutionary art school in Germany that sought to integrate crafts and fine arts under one roof. The school's curriculum emphasized hands-on training, experimentation, and innovation, paving the way for the development of modern design.",
  },
  "date": "2025-02-10",
  "title": "The Bauhaus Dream",
  "body":
    "In the streets of Weimar, Germany, a magical school appeared one day. It was called the Bauhaus School, and its founder, Walter Gropius, had a vision to bring together artists, craftsmen, and musicians under one roof. The students at this school were not like any others. They were enchanted by the idea of creating something new and innovative every day.  \n\n As I walked through the halls of the Bauhaus School, I saw students painting vibrant murals on walls, listening to jazz music in the courtyard, and experimenting with new materials in the workshops. The air was filled with the scent of freshly baked bread from the school's own bakery, and the sound of laughter echoed throughout the buildings.  \n\n But what caught my attention was a student named Maria who had created a stunning stained-glass window that seemed to shimmer and shine like the stars in the night sky. As I approached her, she whispered to me, 'The Bauhaus School is not just about creating something new; it's about breaking free from the ordinary and discovering the magic within ourselves.' And with that, my heart was filled with wonder and awe.",
  "word count": 190,
  "dialog": [
    {
      "Meg":
        "I just loved reading about the magical school in Weimar, Germany!",
    },
    {
      "Billy": "I know, right? It sounds like an amazing place to learn!",
    },
    {
      "Kerry":
        "Yeah, I can imagine the students there were super creative and innovative.",
    },
    {
      "Lui":
        "That's true. The Bauhaus School was indeed a hub for artistic expression and experimentation.",
    },
    {
      "Meg":
        "I loved how Maria's stained-glass window shone like the stars in the night sky. That was so beautiful!",
    },
    {
      "Billy":
        "Yeah, I can see why you'd love that part. It's like she brought magic into the world of humans.",
    },
    {
      "Kerry": "Ha! Magic in the human world? You're such a romantic, Meg!",
    },
    {
      "Lui":
        "Well, actually, creativity and imagination are essential for progress and innovation. We should all strive to bring a little more magic into our lives.",
    },
  ],
  "quiz": [
    {
      "question": "What was special about the Bauhaus School?",
      "options": [
        "It was a regular school",
        "It had a magical appearance",
        "It brought artists, craftsmen, and musicians together",
        "It focused on sports",
        "It was a place for students to paint murals",
      ],
      "answer": 3,
    },
    {
      "question":
        "What activity did the students engage in during their free time?",
      "options": [
        "They played video games",
        "They experimented with new materials in workshops",
        "They listened to jazz music in the courtyard",
        "They painted vibrant murals on walls",
        "They baked bread in the school's bakery",
      ],
      "answer": 2,
    },
    {
      "question": "What did Maria's stained-glass window look like?",
      "options": [
        "It was dull and grey",
        "It shone like the stars in the night sky",
        "It had a weird shape",
        "It was very small",
        "It was made of plastic",
      ],
      "answer": 1,
    },
    {
      "question": "What did Lui say about creativity and imagination?",
      "options": [
        "They are not important for progress and innovation",
        "They are only useful for artists",
        "They are essential for progress and innovation",
        "They should be used only in schools",
        "They have no value",
      ],
      "answer": 2,
    },
    {
      "question":
        "Who said 'The Bauhaus School is not just about creating something new; it's about breaking free from the ordinary and discovering the magic within ourselves'?",
      "options": [
        "Maria",
        "Walter Gropius",
        "Meg",
        "Billy",
        "Kerry",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Design",
    "flavor": "Magical Realism",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
