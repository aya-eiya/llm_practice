import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "Opening Night of The Phantom of the Opera at Her Majesty's Theatre",
    "details":
      "On June 13th, 1986, Andrew Lloyd Webber's 'The Phantom of the Opera' made its debut on Broadway at Her Majesty'cups Theatre in London. This iconic musical went on to become one of the most successful shows in theatre history with numerous awards and a lasting legacy.",
  },
  "date": "2024-06-13",
  "title": "The Phantom of the Opera: A Steampunk Tale",
  "body":
    "In the fog-shrouded streets of London, a mysterious figure emerged from the shadows. The Phantom, a master of clockwork contraptions and steam-powered machinery, had been hiding in plain sight for years. His true identity remained a mystery, but his reputation as a genius inventor spread far and wide.  \n\n One fateful evening, he received an invitation to attend the opening night of Andrew Lloyd Webber's 'The Phantom of the Opera' at Her Majesty's Theatre. The event was a spectacle unlike any other, with intricate clockwork mechanisms and steam-powered special effects woven into the performance.  \n\n As the curtain rose, the Phantom took his seat in the audience, mesmerized by the majesty of the opera house and the wonders of the show. His eyes locked onto Christine Daaé, the beautiful soprano who sang with an otherworldly voice. The Phantom's heart skipped a beat as he realized that this was the moment he had been waiting for – to finally reveal his true identity and unite with Christine in a world of steam-powered magic.",
  "word count": 169,
  "dialog": [
    {
      "Billy":
        "This novel really captured my imagination! The way the author combined steam-powered technology with Victorian London is fascinamooring!",
    },
    {
      "Kerry":
        "I agree, Billy! It's like 'Sweeney Todd' and 'Doctor Who' had a baby. I never thought clockwork mechanics could be so cool.",
    },
    {
      "Meg":
        "Did you guys notice how the character of The Phantom was kind of inspired by Gaston Leroux’s original novel? It adds such an interesting layer to the story!",
    },
    {
      "Lui":
        "That's a keen observation, Meg. I appreciate your attention to historical details.",
    },
    {
      "Billy":
        "I especially loved how they incorporated elements of mathematics and engineering into the plot. The inventions were so cleverly designed!",
    },
    {
      "Kerry":
        "And let’s not forget about Christine's character! I wonder if she could be seen as a precursor to strong, independent female characters like Hermione Granger.",
    },
    {
      "Meg":
        "I love that you brought up Hermione, Kerry. This book really reminds me of how much depth can be added to a story when exploring themes of friendship and courage.",
    },
    {
      "Lui":
        "Indeed, Meg. Literature often reflects the society it originates from – in this case, Victorian England with its gender roles and societal expectations. This novel challenges those norms beautifully.",
    },
  ],
  "quiz": [
    {
      "question":
        "In which city does 'The Phantom of the Opera: A Steampunk Tale' primarily take place?",
      "options": [
        "New York",
        "Paris",
        "London",
        "Rome",
        "Vienna",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was unique about the opening night of 'The Phantom of the Opera' that the Phantom attended?",
      "options": [
        "It featured real steam-powered machine.",
        "It had a surprise appearance by Gaston Leroux.",
        "Clockwork mechanisms were incorporated into the performance.",
        "The show was performed entirely in silence.",
        "The opera house itself was floating on air.",
      ],
      "answer": 2,
    },
    {
      "question":
        "Which character from 'Harry Potter' does Kerry compare Christine to?",
      "options": [
        "Hermione Granger",
        "Ginny Weasley",
        "Luna Lovegood",
        "Cho Chang",
        "Nymphadora Tonks",
      ],
      "answer": 0,
    },
    {
      "question":
        "What element does Meg point out as being inspired by Gaston Leroux’s original novel in the Phantom's character?",
      "options": [
        "Steampunk technology",
        "Clockwork mechanics",
        "Victorian London setting",
        "Mathematical and engineering elements",
        "The Opera Ghost",
      ],
      "answer": 4,
    },
    {
      "question":
        "What societal aspects of Victorian England are challenged in 'The Phantom of the Opera: A Steampunk Tale'?",
      "options": [
        "Technological advancements and innovation.",
        "Gender roles and societal expectations.",
        "Religious beliefs and practices.",
        "Economic class divisions.",
        "Colonial expansion.",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Economy",
    "flavor": "Steampunk",
    "models": {
      "main": "phi3:14b",
      "novel": "llama3",
    },
    "level": "Level_6",
  },
};
export default data;
