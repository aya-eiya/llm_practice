import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Aerial Photograph Taken in the United States",
    "details":
      'On June 2, 1860, James Wallace Black took the first successful aerial photograph in the United States.  He captured a picture of Boston, Massachusetts from a hot air balloon floating at an altitude of 1,200 feet. The photograph, titled "Boston, as the Eagle and the Wild Goose See It," is a remarkable achievement in early aerial photography.',
  },
  "date": "2024-06-02",
  "title": "Aerial Affection",
  "body":
    "As the hot air balloon soared above Boston, Emily gazed out at the breathtaking view. It was June 2, 1860, and James Wallace Black had just taken the first successful aerial photograph in the United States. She couldn't help but feel a sense of excitement and wonder as she watched the city unfold before her.  \n\n Emily had always been fascinated by the sky and the way it seemed to stretch on forever. As an amateur photographer herself, she was thrilled to see Black's achievement up close. The two of them chatted excitedly about the possibilities of aerial photography and the stories they could tell through their work.  \n\n As the sun began to set, Emily knew it was time to return to reality. She thanked Black for showing her his incredible photograph and promised to keep in touch. Little did she know that this chance encounter would lead to a lifelong passion for capturing life's moments from above.",
  "word count": 157,
  "dialog": [
    {
      "Kerry":
        "Whoa, imagine taking a photo from a hot air balloon! That James Black guy must have been crazy brave!",
    },
    {
      "Billy":
        "He was a pioneer!  I wonder what kind of camera he used back then.  It couldn't have been easy taking a clear picture while floating in the air.",
    },
    {
      "Meg":
        "I know! It's like something out of a Jules Verne novel!  Emily sounds cool too. She reminds me of a character I'm writing about, always dreaming of adventures.",
    },
    {
      "Lui":
        "This story highlights a pivotal moment in history. Photography was still a relatively new invention in 1860.  Black's aerial photograph wasn't just a picture; it was a glimpse into the future of image-making.",
    },
    {
      "Kerry":
        "Think people back then even knew what to make of it? A photo from the sky? They probably thought it was magic!",
    },
    {
      "Meg":
        "That's what I love about photography.  It's like capturing a little piece of magic, a moment frozen in time.  I bet Emily felt that too.",
    },
    {
      "Billy":
        "Imagine what it must have been like to see those photos for the first time.  People had never seen cities and landscapes from that perspective before. It must have blown their minds!",
    },
    {
      "Lui":
        "Absolutely, Billy. These images provided a completely new understanding of the world around us.  It's fascinating how technology can alter our perceptions.",
    },
    {
      "Kerry":
        "Makes you wonder what cool stuff we'll be able to do with pictures in the future. Maybe we'll even have holographic photos!",
    },
    {
      "Meg": "Or maybe we'll have cameras that can capture our dreams!",
    },
  ],
  "quiz": [
    {
      "question":
        "What was significant about James Wallace Black's photograph?",
      "options": [
        "It was the first photograph taken in Boston.",
        "It was the first aerial photograph taken in the United States.",
        "It was the first photograph of a hot air balloon.",
        "It was the first photograph taken in color.",
        "It was the first photograph published in a newspaper.",
      ],
      "answer": 1,
    },
    {
      "question": "How did Emily feel about seeing Black's photograph?",
      "options": [
        "Confused and skeptical",
        "Amused and indifferent",
        "Excited and inspired",
        "Disappointed and bored",
        "Envious and competitive",
      ],
      "answer": 2,
    },
    {
      "question": "What was Emily's hobby?",
      "options": [
        "Painting",
        "Writing",
        "Photography",
        "Hot air ballooning",
        "Collecting antique cameras",
      ],
      "answer": 2,
    },
    {
      "question":
        "According to Lui, what was the historical significance of early aerial photography?",
      "options": [
        "It revolutionized warfare.",
        "It provided a new perspective on the world.",
        "It made air travel safer.",
        "It led to the invention of the airplane.",
        "It helped to map unexplored territories.",
      ],
      "answer": 1,
    },
    {
      "question": "What did Kerry speculate about the future of photography?",
      "options": [
        "Cameras would become smaller and more portable.",
        "Photographs would be able to capture sound.",
        "Photos could be developed instantly.",
        "We might have holographic photos.",
        "Cameras would be able to predict the future.",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Historical Romance",
    "models": {
      "main": "gemini",
      "novel": "llama3",
    },
    "level": "Level_2",
  },
};
export default data;
