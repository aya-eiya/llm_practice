import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Eiffel Tower opens to the public",
    "details":
      "The Eiffel Tower, built for the 1889 World's Fair, officially opened to the public on September 4th of that year.",
  },
  "date": "2024-09-04",
  "title": "The Eiffel Tower in Space",
  "body":
    "In the year 2154, humanity had finally reached the pinnacle of technological advancement. The Eiffel Tower, once a symbol of Parisian ingenuity, had been upgraded and transported to space. Now, it floated majestically above the Earth's atmosphere, a beacon of hope for the universe.  \n\n As I stepped out of my spaceship and onto the tower's platform, I felt a sense of awe wash over me. The stars twinkled like diamonds against the inky blackness of space, and the Earth glowed softly beneath me. I was one of the lucky few who had been chosen to be part of the Tower's maintenance crew.  \n\n My task was to perform a routine check on the tower's propulsion system. It was a job that required precision and care, but I was confident in my abilities. As I made my way through the cramped corridors, I couldn't help but feel a sense of pride knowing that I was helping to keep this marvel of engineering running smoothly.  \n\n But as I reached the control room, I noticed something strange. The readings were off, and the tower's systems were beginning to malfunction. I quickly sprang into action, trying to diagnose the problem before it was too late.",
  "word count": 200,
  "dialog": [
    {
      "Billy":
        "I love this sci-fi novel! The Eiffel Tower in space is such an amazing idea.",
    },
    {
      "Kerry":
        "Yeah, it's so cool how the tower has been upgraded and transported to space. I can imagine how it would feel like being there.",
    },
    {
      "Meg":
        "I'm still trying to wrap my head around the propulsion system malfunctioning. It's such a complex technology that I don't fully understand yet.",
    },
    {
      "Lui":
        "Well, let's take a closer look at the control room and see if we can find any clues about what went wrong.",
    },
    {
      "Billy":
        "I think I found something! The readings were off because of a minor glitch in the system. It's easily fixable.",
    },
    {
      "Kerry":
        "Whoa, that was quick! You're like a space detective or something!",
    },
    {
      "Meg":
        "But what about the consequences? Could this malfunction have any impact on the rest of the Earth?",
    },
    {
      "Lui":
        "Good point, Meg. We should definitely consider all possible outcomes before making any changes.",
    },
  ],
  "quiz": [
    {
      "question": "What is the main task that the narrator needs to perform?",
      "options": [
        "To explore the Eiffel Tower",
        "To perform a routine check on the tower's propulsion system",
        "To fix a malfunctioning system",
        "To take care of the Earth's atmosphere",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question": "What is unusual about the readings in the control room?",
      "options": [
        "The readings are normal",
        "The readings are off and the tower's systems are beginning to malfunction",
        "The readings are too high",
        "The readings are too low",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question": "Who is trying to diagnose the problem in the control room?",
      "options": [
        "Billy",
        "Kerry",
        "Lui",
        "The narrator",
        "None of the above",
      ],
      "answer": 3,
    },
    {
      "question":
        "What is Billy's suggestion for fixing the malfunctioning system?",
      "options": [
        "To replace the entire system",
        "To add more fuel to the tower",
        "To fix a minor glitch in the system",
        "To shut down the tower",
        "None of the above",
      ],
      "answer": 2,
    },
    {
      "question": "What is Meg's concern about the malfunctioning system?",
      "options": [
        "That it might be a prank",
        "That it could have no impact on the rest of the Earth",
        "That it could have any impact on the rest of the Earth",
        "That it might cause a big problem",
        "None of the above",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Science Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
