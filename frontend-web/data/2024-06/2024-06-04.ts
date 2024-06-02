import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "George Eastman registers 'Kodak' trademark",
    "details":
      "On June 4, 1888, George Eastman registered the trademark 'Kodak' for his revolutionary camera. This event marked a significant moment in photography history, making photography accessible to the masses with the simple and portable Kodak camera.",
  },
  "date": "2024-06-04",
  "title": "The Last Roll of Film",
  "body":
    "In the ravaged streets, a lone survivor stumbled upon an old camera, its once-shiny surface now tarnished by the dust of time. It was as if fate had brought it to her hands - a relic from a bygone era when humans documented their lives with precision and care.  \n\n She wound the film around the spool, the familiar hiss and click echoing through the desolate landscape. The camera's worn leather grip fit comfortably in her palm, like an extension of herself. As she looked out upon the ruins, she felt a strange sense of connection to those who had once used it.  \n\n The first roll of film was all she had left - a reminder of the world before the apocalypse. She took a deep breath, and with trembling hands, framed her surroundings. The shutter clicked open, capturing the desolation and decay that surrounded her. It was a moment of reckoning, a chance to preserve the past for whatever future might come.",
  "word count": 162,
  "dialog": [
    {
      "Meg":
        "Wow, that was intense! I can't believe she found a camera in all that destruction. It's like finding a treasure chest!",
    },
    {
      "Kerry":
        "Yeah, but what's the point of taking pictures if there's no one left to see them?",
    },
    {
      "Billy":
        "Maybe it's not about other people seeing them, Kerry. Maybe it's about remembering.  Like those history books Mr. Lui is always talking about, right?",
    },
    {
      "Lui":
        "Precisely, Billy.  Photographs are historical artifacts. They tell a story, even without words. Imagine finding pictures from centuries ago. What would they tell us about how people lived?",
    },
    {
      "Kerry":
        "Hmm, I guess. But wouldn't a video camera be better? You know, to capture everything?",
    },
    {
      "Meg":
        "Maybe, but there's something so powerful about a single image. It's like a frozen moment in time. You can almost feel what the photographer felt when they took it.",
    },
    {
      "Lui":
        "Excellent point, Meg. A single photograph can inspire the imagination, provoke thought and emotion in a way that moving pictures sometimes can't.",
    },
    {
      "Billy":
        "It's like that old camera is a bridge between the past and the future, isn't it? Like she's saying, 'We were here, this is what happened.'",
    },
    {
      "Kerry":
        "You know, that actually gives me chills. What do you think she took pictures of, anyway?",
    },
    {
      "Meg":
        "Maybe ruined buildings, empty streets... or maybe she found a flower growing in the rubble. A sign of hope.",
    },
  ],
  "quiz": [
    {
      "question": "What object does the survivor find in the destroyed city?",
      "options": [
        "A working radio",
        "A photo album",
        "A camera",
        "A diary with blank pages",
        "A map",
      ],
      "answer": 2,
    },
    {
      "question":
        "According to the dialogue, why is taking pictures significant, even after an apocalypse?",
      "options": [
        "To communicate with other survivors",
        "To sell as historical artifacts later",
        "To practice photography skills",
        "To remember and document the past",
        "To attract help from outside",
      ],
      "answer": 3,
    },
    {
      "question": "What does Meg compare the found camera to?",
      "options": [
        "A weapon",
        "A time machine",
        "A treasure chest",
        "A lifeboat",
        "A bridge to the past",
      ],
      "answer": 2,
    },
    {
      "question": "What does Lui say photographs can do even without words?",
      "options": [
        "Guide survivors to safety",
        "Provide scientific data",
        "Predict the future",
        "Tell a story",
        "Replace written language",
      ],
      "answer": 3,
    },
    {
      "question": "What does Billy think the old camera represents?",
      "options": [
        "The futility of hope",
        "The danger of technology",
        "A connection between the past and the future",
        "The beauty of the natural world",
        "The importance of family",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "gemini",
      "novel": "llama3",
    },
    "level": "Level_4",
  },
};
export default data;
