import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Opening of the Museo Nacional del Prado",
    "details":
      "The Spanish national art museum, located in Madrid, opened its doors to the public on December 16, 1819. The museum was founded by King Ferdinand VII and housed Spain's royal collection of fine arts.",
  },
  "date": "2025-12-16",
  "title": "Mastering Through Time: The Prado Museum",
  "body":
    "The Museo Nacional del Prado stands as a testament to Spain's rich artistic heritage, its doors opening in 1819 under the patronage of King Ferdinand VII. Located in Madrid, this national treasure houses the royal collection of fine arts that tell the story of Spanish culture and history through centuries of masterful paintings. \n\n From Velázquez to Goya, and from El Greco to Dalí, the Prado's impressive collection spans diverse periods and artistic styles. The museum not only preserves these valuable works but also provides visitors with an opportunity to immerse themselves in Spain's creative genius. \n\n Throughout its long history, the Prado has witnessed numerous transformations and has played a significant role in shaping Madrid's cultural landscape. Today, it stands as one of Europe's premier art museums, attracting millions of visitors each year who come to marvel at its stunning collection. As we continue to appreciate the beauty and significance of these artistic masterpieces, the Prado Museum remains a vital institution that connects us with our shared human heritage.",
  "word count": 168,
  "dialog": [
    {
      "Billy":
        "This museum sounds so fascinating! The Prado has such an amazing collection of art.",
    },
    {
      "Kerry":
        "I bet they have some crazy stuff too, like weird sculptures or strange paintings!",
    },
    {
      "Meg":
        "Oh my goodness, I'm completely in awe. The way they describe Velázquez and Goya's masterpieces is just magical.",
    },
    {
      "Lui":
        "Now children, let's discuss the historical significance of this museum. It's not just about art, but about preserving Spain's cultural heritage.",
    },
    {
      "Billy":
        "Mr. Lui, I'm curious - how did they get so many famous paintings in one place?",
    },
    {
      "Kerry":
        "Yeah, and why was it founded by King Ferdinand VII? Was he a big art lover or something?",
    },
    {
      "Meg":
        "I just love imagining all the artists who worked there. It must have been such an exciting time!",
    },
    {
      "Lui":
        "Well said Meg. Now let's talk about the impact these artworks had on Spanish culture during those periods.",
    },
  ],
  "quiz": [
    {
      "question": "When was the Museo Nacional del Prado founded?",
      "options": [
        "1754",
        "1819",
        "1868",
        "1892",
        "1995",
      ],
      "answer": 1,
    },
    {
      "question":
        "Which Spanish artists are mentioned in the text as having their works displayed at the Prado Museum?",
      "options": [
        "Picasso, Dalí, Miró",
        "Velázquez, Goya, El Greco",
        "Rubens, Van Dyck, Rembrandt",
        "Dürer, Leonardo da Vinci, Michelangelo",
        "Caravaggio, Titian, Vermeer",
      ],
      "answer": 1,
    },
    {
      "question": "Who founded the Museo Nacional del Prado?",
      "options": [
        "King Philip II of Spain",
        "Queen Isabella I of Castile",
        "King Ferdinand VII",
        "Cervantes Saavedra",
        "Goya",
      ],
      "answer": 2,
    },
    {
      "question": "Which city is the Prado Museum located in?",
      "options": [
        "Barcelona",
        "Valencia",
        "Seville",
        "Madrid",
        "Granada",
      ],
      "answer": 4,
    },
    {
      "question":
        "What is special about the collection of paintings at the Museo Nacional del Prado?",
      "options": [
        "They all depict landscapes only",
        "Most are portraits of royalty",
        "All paintings show saints or religious figures",
        "The collection spans multiple centuries and includes works by many famous Spanish artists",
        "None of these options",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Academic Essay",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_4",
  },
};
export default data;
