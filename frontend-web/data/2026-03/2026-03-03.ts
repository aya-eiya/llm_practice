import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Photo-Zoom-Tour around the World",
    "details":
      "Kodak employee, Willard Photography, embarked on a journey to promote Kodachrome film by taking his camera equipment and going on a photo-tour around the world.",
  },
  "date": "2026-03-03",
  "title": "A Frame of Memories",
  "body":
    "In the scorching summer of 1955, Emily Wilson, a young Kodak employee, embarked on an extraordinary journey to promote the latest innovation in photography - the Kodachrome film. Alongside Willard Photography, she set out to capture the world's most breathtaking landscapes and vibrant cultures.  \n\n As they traveled through the winding roads of Europe, Asia, and Africa, Emily found herself smitten with a handsome French photographer, Pierre Dupont. Their chance encounter at a Parisian café blossomed into a romance that traversed continents and languages.  \n\n The clicking of cameras and the whirring of film rolls became the soundtrack to their love story. Emily's Kodachrome photographs told tales of beauty and resilience in the face of adversity, while Pierre's words captured the essence of their passion.  \n\n Together, they navigated the complexities of their profession, exploring the nuances of light and shadow, color and composition. In the end, it was not just a photo-tour around the world that Willard Photography had achieved but a testament to the transformative power of art and love.",
  "word count": 169,
  "dialog": [
    {
      "Meg":
        "I think it's amazing how Emily and Pierre's love story is intertwined with their photography journey.",
    },
    {
      "Kerry":
        "Yeah, I know what you mean! It's like they're capturing the world through their lenses and also capturing each other's hearts.",
    },
    {
      "Billy":
        "That's so cool! I loved how they traveled to different parts of the world and took pictures of incredible landscapes and cultures. The way they used Kodachrome film was really interesting too.",
    },
    {
      "Lui":
        "I'm glad you all enjoyed the novel. It's a great example of how art and love can be intertwined. As a history teacher, I appreciate how it also highlights the significance of photography as an art form during that time period.",
    },
    {
      "Meg":
        "Definitely! I loved how Emily's photographs told stories about resilience in the face of adversity. It was like she was capturing more than just beautiful landscapes – she was capturing people's struggles and triumphs too.",
    },
    {
      "Kerry":
        "That's so true! And I think that's what made their love story so powerful – it wasn't just a romance, but also a reflection of the world around them. It made me think about how photography can be a way to capture not just beauty, but also truth and reality.",
    },
    {
      "Billy":
        "I never thought about it that way, Kerry, but you're right! Photography can be a powerful tool for capturing the human experience. I'm glad we read this novel – it's made me think about photography in a whole new light!",
    },
    {
      "Lui":
        "Excellent discussion, everyone! It's clear that this novel has sparked some wonderful conversations about art, love, and the power of photography.",
    },
  ],
  "quiz": [
    {
      "question": "Where did Emily and Pierre meet for the first time?",
      "options": [
        "At a Parisian café",
        "In New York City",
        "In Tokyo, Japan",
        "In London, UK",
        "On a photography tour in Africa",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was the significance of the Kodachrome film for Emily and Pierre's journey?",
      "options": [
        "It allowed them to capture stunning landscapes and vibrant cultures",
        "It enabled them to take photographs in low-light conditions",
        "It gave them an edge over other photographers with its unique color palette",
        "It helped them document their love story",
        "It was a new innovation at the time that they used for their photography tour",
      ],
      "answer": 0,
    },
    {
      "question":
        "How did Emily's photographs capture more than just beautiful landscapes?",
      "options": [
        "By using black-and-white film instead of color",
        "By including people's struggles and triumphs in the shots",
        "By taking only daytime photos to avoid shadows",
        "By focusing solely on urban landscapes",
        "By experimenting with unusual angles and perspectives",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did Lui appreciate about the novel as a history teacher?",
      "options": [
        "The way it portrayed historical events accurately",
        "The significance of photography as an art form during that time period",
        "The romantic relationship between Emily and Pierre",
        "The descriptive language used by the author to paint vivid pictures",
        "The characters' interactions with other people from different cultures",
      ],
      "answer": 1,
    },
    {
      "question":
        "How did Kerry think about photography in a new light after reading the novel?",
      "options": [
        "She realized that photography could only capture physical beauty",
        "She understood that photography was limited to capturing static objects",
        "She saw it as a way to capture not just beauty, but also truth and reality",
        "She concluded that photography had no value in understanding human experiences",
        "She believed photography should be used solely for commercial purposes",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Historical Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
