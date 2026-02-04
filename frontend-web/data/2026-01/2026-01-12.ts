import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Leonardo da Vinci's The Last Supper painting is unveiled",
    "details":
      "The Last Supper, Leonardo da Vinci's masterpiece mural depicting Jesus Christ and his disciples during the Last Supper meal, was completed on January 12, 1495, at the Convent of Santa Maria delle Grazie in Milan, Italy. This iconic artwork has become one of the most famous paintings in history and is considered a pinnacle achievement in Renaissance art.",
  },
  "date": "2026-01-12",
  "title": "A Passionate Last Supper",
  "body":
    "Alessia stood in front of the towering mural in Milan's Convento di Santa Maria delle Grazie, her heart racing with every passing moment. The Last Supper by Leonardo da Vinci was unlike any artwork she had ever seen. She could almost feel the presence of Jesus and his disciples as they shared their final meal together. \n\n As she gazed deeper into the painting, Alessia noticed a small, hidden detail that no one else seemed to have spotted before. Behind Jesus's right shoulder, there was an intricate drawing of a man with curious eyes. She wondered who this mysterious figure could be and why Leonardo had included him in his masterpiece. \n\n With newfound determination, Alessia decided to follow her passion for art history. She began researching the painting, discovering that The Last Supper had taken da Vinci over three years to complete, using an innovative technique of painting directly on dry plaster rather than traditional tempera on gesso layers. As she delved deeper into the world of Renaissance art, Alessia found herself falling in love with its beauty and mystery.",
  "word count": 179,
  "dialog": [
    {
      "Billy":
        "The way da Vinci painted directly on dry plaster instead of traditional tempera layers, that's so innovative for his time!",
    },
    {
      "Kerry":
        "I know what you mean Billy! It's like he was breaking the rules and doing something totally new.",
    },
    {
      "Meg":
        "The description of Alessia finding that hidden detail behind Jesus's shoulder really grabbed me. I can just imagine how fascinating it would be to discover such a mystery in an ancient painting!",
    },
    {
      "Lui":
        "Yes, Miss Meg, that's exactly the kind of critical thinking we encourage in our history classes. Being observant and asking questions is essential for deep understanding.",
    },
    {
      "Kerry":
        "But I think what's even cooler is how Alessia decided to pursue art history after this experience. It shows how one moment can change someone's life!",
    },
    {
      "Billy":
        "I'm really interested in the science behind da Vinci's painting technique. Did you know he also studied anatomy extensively? That must have influenced his perspective on the human body in his paintings.",
    },
    {
      "Meg":
        "Oh, Billy, that's fascinating! I've always wondered how artists back then knew so much about human anatomy. It must have been quite different from modern medical education!",
    },
    {
      "Lui":
        "Well said both of you. Da Vinci was truly a Renaissance man, combining art, science, and engineering in his work.",
    },
  ],
  "quiz": [
    {
      "question": "How long did da Vinci spend painting The Last Supper?",
      "options": [
        "One year",
        "Two years",
        "Three years",
        "Four years",
        "Five years",
      ],
      "answer": 2,
    },
    {
      "question": "What technique did Leonardo use to paint The Last Supper?",
      "options": [
        "Oil on canvas",
        "Tempera on gesso layers",
        "Directly on dry plaster",
        "Watercolor",
        "Acrylic on wood",
      ],
      "answer": 3,
    },
    {
      "question":
        "Who is the mysterious figure that Alessia discovers behind Jesus's shoulder in The Last Supper?",
      "options": [
        "Leonardo da Vinci himself",
        "One of the disciples",
        "An unknown artist",
        "A self-portrait of Leonardo",
        "No one knows",
      ],
      "answer": 0,
    },
    {
      "question":
        "What is Billy interested in learning about regarding da Vinci's painting technique?",
      "options": [
        "The colors he used",
        "His innovative use of dry plaster",
        "How to paint oil paintings",
        "Da Vinci's anatomy studies",
        "The brushes he preferred",
      ],
      "answer": 3,
    },
    {
      "question": "Who is Lui in the dialog?",
      "options": [
        "Billy's friend",
        "Kerry's teacher",
        "Meg's art teacher",
        "A visiting artist",
        "Billy's younger brother",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Romance",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_3",
  },
};
export default data;
