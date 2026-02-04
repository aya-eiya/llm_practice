import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Apple releases the first iPhone",
    "details":
      "On January 9, 2007 (with availability starting January 11), Apple Inc. released its first iPhone smartphone at the Macworld convention in San Francisco. The original iPhone was revolutionary for its time with a multi-touch interface, mobile internet access, and high-resolution touch screen display.",
  },
  "date": "2026-01-11",
  "title": "The Neon Mirage",
  "body":
    "In the streets of Neo-San Francisco, neon lights danced through the rain-soaked air as I hurried towards my next job. The city's skyscrapers pierced the dark clouds like metallic dragons, their surfaces reflecting a thousand holographic advertisements. People rushed past me, their faces hidden behind virtual reality visors that turned them into ghosts in this concrete jungle. My own eyes adjusted to the perpetual twilight of this urban nightmare as I navigated through the maze of towering buildings and underground tunnels.  \n\n As I approached my destination, a sleek black hovercar pulled up alongside me. Inside, a well-dressed woman with cybernetic implants gazed at me with artificial eyes that seemed to see right through my worn leather jacket. 'You're late,' she said in a voice that was almost too perfect, barely above a whisper. I slid into the passenger seat, my heart pounding against my ribs as the car took off into the smog-filled sky.  \n\n The city blurred by as we ascended higher into the clouds, the woman's artificial smile never wavering from her face. 'We're going to make you an offer,' she said finally, pulling out a small data chip that glowed with a faint blue light. 'Something that could change your life - and maybe even this city.'",
  "word count": 209,
  "dialog": [
    {
      "Billy":
        "This novel shows how technology can transform our world in both good and bad ways!",
    },
    {
      "Kerry":
        "I know, right? The cybernetic implants remind me of those sci-fi movies we always debate about!",
    },
    {
      "Meg":
        "The rain-soaked streets with neon lights are so vivid! It feels like I'm walking through a living painting.",
    },
    {
      "Lui":
        "Fascinating how the author portrays this futuristic city. It's a warning about where our current path might lead us.",
    },
    {
      "Billy":
        "And look at how they've integrated history with future technology! That hovercar was so cool!",
    },
    {
      "Kerry":
        "Speaking of technology, do you think we'll ever have those VR visors that make people invisible?",
    },
    {
      "Meg":
        "I love the mysterious woman with artificial eyes. She feels like a character from one of my favorite books.",
    },
    {
      "Lui":
        "Yes, she's a great example of how technology can change human interactions in unexpected ways.",
    },
  ],
  "quiz": [
    {
      "question": "Which character made the comment about VR visors?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "The woman in the hovercar",
      ],
      "answer": 1,
    },
    {
      "question": "What is the age of Billy according to the note?",
      "options": [
        "11 years old",
        "12 years old",
        "42 years old",
        "Not specified",
        "Unknown",
      ],
      "answer": 0,
    },
    {
      "question":
        "Which character compared the author's portrayal of the futuristic city to a warning about our current path?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "The woman in the hovercar",
      ],
      "answer": 3,
    },
    {
      "question": "What color is the data chip described as glowing?",
      "options": [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Purple",
      ],
      "answer": 1,
    },
    {
      "question":
        "How many characters are there in total according to the note?",
      "options": [
        "4",
        "5",
        "6",
        "7",
        "Not specified",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Technology",
    "flavor": "Cyberpunk",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_2",
  },
};
export default data;
