import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Photojournalism Exhibition",
    "details":
      "The first photojournalism exhibition opened at the International Center of Photography (ICP) in New York City on November 7, 1976. The groundbreaking show featured works by renowned photographers such as Margaret Bourke-White, Dorothea Lange, and W. Eugene Smith, showcasing their iconic images that captured historical moments and human stories.",
  },
  "date": "2025-11-07",
  "title": "Through Ashes of Time",
  "body":
    "The remnants of civilization lay scattered across what was once vibrant city streets, a testament to humanity's catastrophic descent into oblivion.\n\n\n\n\nThe last photojournalist, Sarah Chen, huddled in her makeshift shelter, salvaging whatever technology still functioned from the ruins around her. Her prized possession - a battered Nikon camera - glowed with an otherworldly blue light, its lens capturing the surreal beauty of a dying world.\n\n\n\n\nThe year was 2087, and what remained of humanity survived in isolated pockets, their stories told through fragments of memory and scattered images. In her hands, Sarah held not just a camera, but a bridge between past and present, documenting the final chapters of human existence.\n\n\n\n\nThe air grew thick with radiation, each breath a struggle against the toxic atmosphere that suffocated life from the earth's surface. Yet in this wasteland, hope flickered like a dying star - through the lens of her camera, Sarah saw not just destruction, but the raw beauty of human resilience, preserved for those who might one day rebuild.",
  "word count": 170,
  "dialog": [
    {
      "Kerry":
        "This story really makes you think about how fragile our world is!",
    },
    {
      "Billy":
        "The science behind it is fascinating! I love how they described the radiation levels.",
    },
    {
      "Meg":
        "I can totally imagine living in a post-apocalyptic world like Sarah Chen. It's so vividly written!",
    },
    {
      "Lui":
        "As an educator, I appreciate how this novel tackles complex historical themes through a dystopian lens.",
    },
    {
      "Billy":
        "The technology aspects are really interesting too! Like the Nikon camera still working in 2087 - what kind of power source would that need?",
    },
    {
      "Kerry":
        "I wonder if they could have fixed the atmosphere somehow? Maybe with some advanced tech or science?",
    },
    {
      "Meg":
        "Sarah Chen's perspective is so compelling. She sees beauty in destruction - I love how she documents everything!",
    },
    {
      "Lui":
        "The themes of human resilience and hope are timeless. Even in the darkest times, people find ways to preserve their culture.",
    },
  ],
  "quiz": [
    {
      "question": "In what year does the story take place?",
      "options": [
        "2045",
        "2087",
        "2100",
        "2150",
        "2200",
      ],
      "answer": 1,
    },
    {
      "question": "What is Sarah Chen's profession in the story?",
      "options": [
        "Engineer",
        "Scientist",
        "Photojournalist",
        "Teacher",
        "Doctor",
      ],
      "answer": 2,
    },
    {
      "question": "Which character asks a question about radiation levels?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "Sarah Chen",
      ],
      "answer": 0,
    },
    {
      "question":
        "What is the main theme that the educator (Lui) appreciates in the novel?",
      "options": [
        "Environmental disaster",
        "Human resilience",
        "Technology advancement",
        "Historical accuracy",
        "Scientific research",
      ],
      "answer": 1,
    },
    {
      "question":
        "Who comments on seeing beauty in destruction through Sarah Chen's perspective?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "Sarah Chen",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_7",
  },
};
export default data;
