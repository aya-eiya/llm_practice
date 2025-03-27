import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The premiere of 'A Doll's House' by Henrik Ibsen",
    "details":
      "A Doll's House is a three-act play written by Norwegian playwright and novelist Henrik Ibsen. It premiered at the Royal Theatre in Copenhagen on December 3, 1879",
  },
  "date": "2025-01-19",
  "title": "Falling for the Frenchman",
  "body":
    "As I stepped off the train in Paris, the cool morning air enveloped me like a gentle caress. I had always dreamed of visiting this city, and now that I was finally here, I couldn't wait to explore its winding streets and charming cafes.  \n\n My friend Rachel had recommended a small boutique hotel in the Latin Quarter, where we could stay for a few days before meeting up with her friends. I had booked the room online, but when we arrived, I realized that it was much nicer than I had expected. The owner, Monsieur Dupont, greeted us warmly and showed us to our cozy little apartment on the top floor.  \n\n We spent the day wandering through the streets, taking in the sights and sounds of this beautiful city. We stopped at a small café for coffee and croissants, and I was amazed by how delicious they were. As we sat there, I noticed a handsome young man sitting across from us, sipping a cup of coffee and typing away on his laptop.  \n\n He caught my eye and smiled, and I felt a flutter in my chest. Who was this charming stranger? And why did I feel such an instant connection to him?",
  "word count": 203,
  "dialog": [
    {
      "Meg":
        "I think the author did an amazing job creating such a vivid atmosphere in Paris. I felt like I was right there with the protagonist, exploring the streets and cafes.",
    },
    {
      "Lui":
        "I agree, Meg. The author's use of sensory details really brings the city to life. And I appreciate how they balanced the romantic elements with the historical context of the novel.",
    },
    {
      "Kerry":
        "Yeah, but what about that handsome young man in the café? I think he's going to be a big part of the story, right?",
    },
    {
      "Billy":
        "Actually, Kerry, I'm not so sure. The author seems to be focusing more on the protagonist's journey and her relationships with the people she meets along the way.",
    },
    {
      "Meg":
        "I see what you mean, Billy. But I still think there's something special about that young man. Maybe he'll show up again later in the story?",
    },
    {
      "Lui":
        "Well, as a history teacher, I appreciate how the author incorporates historical facts and figures into the narrative. It adds depth and context to the story.",
    },
    {
      "Kerry":
        "Yeah, yeah, we get it, Lui. You like history. But what about the romance? Is there going to be a love interest for the protagonist?",
    },
    {
      "Billy":
        "I think we'll just have to keep reading to find out, Kerry. But I'm excited to see where the story goes next.",
    },
  ],
  "quiz": [
    {
      "question": "What was the protagonist's first impression of Paris?",
      "options": [
        "The city was overcrowded",
        "The air was too thick to breathe",
        "She felt a gentle caress from the cool morning air",
        "The streets were too narrow",
        "The people were too rude",
      ],
      "answer": 3,
    },
    {
      "question": "Where did Rachel recommend the protagonist stay?",
      "options": [
        "A hostel in the Latin Quarter",
        "A hotel near the Eiffel Tower",
        "A small boutique hotel in the Latin Quarter",
        "A bed and breakfast on the outskirts of Paris",
        "A luxury hotel in a high-end area",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was the protagonist's reaction to the young man in the café?",
      "options": [
        "She ignored him",
        "She felt annoyed by his presence",
        "She smiled back at him and felt an instant connection",
        "She didn't notice him",
        "She felt scared",
      ],
      "answer": 2,
    },
    {
      "question": "What did Billy think about the protagonist's journey?",
      "options": [
        "He thought it was too focused on romance",
        "He thought it was too slow paced",
        "He appreciated how it balanced romantic elements with historical context",
        "He didn't care about the story",
      ],
      "answer": 2,
    },
    {
      "question": "What did Lui like about the novel?",
      "options": [
        "The protagonist's fashion sense",
        "The way the author described the food",
        "The way the author incorporated historical facts and figures into the narrative",
        "The way the protagonist interacted with the people she met",
        "The ending of the story",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Theater",
    "flavor": "Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
