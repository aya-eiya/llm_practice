import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Rise of Post-Impressionism Exhibitions",
    "details":
      "While not a single event, August 4th falls within a period where the influence and exhibitions of Post-Impressionist artists (such as Van Gogh, Gauguin, and Cézanne) were gaining significant traction in European art centers, challenging established academic traditions and leading to major shifts in modern art perception.",
  },
  "date": "2026-08-04",
  "title": "Shadows of the Gilded Frame",
  "body":
    "Julian arrived at Blackwood Manor to organize the old items left behind by its owner. He loved exploring dark, dusty halls, didn't he? While walking through the house, he found a heavy, locked door in the basement. The housekeeper had told him that this room was completely forbidden, but Julian decided to see what lay inside anyway.\n\n\n\n Inside, he discovered paintings that challenged every old rule of art. Instead of perfect lines and calm colors, these works used swirling yellows and deep, emotional blues. He started wondering if the artists had truly lost their minds while painting. One canvas showed a starry night that seemed to pulse and move. It was terrifying to imagine such chaos trapped in oil, wasn't it?\n\n\n\n Suddenly, Julian felt the paintings watching him with invisible eyes. He remembered his professor saying that art must always be realistic, but these colors spoke of hidden pain and wild dreams. Trying to leave the room, Julian realized that the door had closed silently behind him. The swirling paint began to flow across the floor like a river, threatening to pull him into their haunting world forever.",
  "word count": 188,
  "dialog": [
    {
      "Billy":
        "The description of the colors—swirling yellows and deep, emotional blues—it makes me wonder if there's a scientific explanation for that kind of visual intensity. Is it just pigment, or is there some psychological element at play?",
    },
    {
      "Meg":
        "It wasn't just paint; it felt like trapped emotion! I imagined the artists were channeling pure chaos onto the canvas. It was terrifying in a beautiful way.",
    },
    {
      "Kerry":
        "Terrifying, yes, but Julian is such an idiot for going into a forbidden room. He should have respected the 'No Trespassing' sign, even if it was just implied by the housekeeper.",
    },
    {
      "Lui":
        "While curiosity can be admirable, Kerry, we must also consider the concept of boundaries. Ignoring clear warnings often leads to unnecessary danger or obsession. That is a lesson in self-control.",
    },
    {
      "Billy":
        "But if you look at it from an artistic perspective, the paintings are challenging established norms. They reject realism for something more visceral—a kind of emotional data visualization, almost?",
    },
    {
      "Meg":
        "I think they were having a fever dream! The idea that the paint could flow like a river and pull him in... it's pure gothic magic.",
    },
    {
      "Kerry":
        "Magic? No. It sounds more like bad interior design choices leading to a dramatic, albeit cliché, ending. Still, I liked the part where he felt 'watched.' That was genuinely creepy.",
    },
    {
      "Lui":
        "The narrative successfully uses that fear—the feeling of being judged by something inanimate—to heighten the tension. It speaks to the human tendency to project our own anxieties onto things we don't understand.",
    },
  ],
  "quiz": [
    {
      "question": "Where did Julian find the heavy, locked door?",
      "options": [
        "In a dark, dusty hall",
        "Near the main staircase",
        "In the basement",
        "Behind the forbidden paintings",
        "In the manor's library",
      ],
      "answer": 2,
    },
    {
      "question":
        "According to the narration, what characteristics defined the art found in the room?",
      "options": [
        "Perfect lines and calm colors",
        "Realistic depictions of nature",
        "Swirling yellows and deep, emotional blues",
        "Strict adherence to classical rules",
        "Monochromatic tones with sharp contrasts",
      ],
      "answer": 2,
    },
    {
      "question":
        "What concept did Billy suggest when discussing the visual intensity of the paintings?",
      "options": [
        "A psychological element at play",
        "The need for more realistic pigments",
        "An emotional data visualization",
        "A scientific explanation for color mixing",
        "A study in gothic horror",
      ],
      "answer": 2,
    },
    {
      "question":
        "What lesson did Lui emphasize when discussing the concept of boundaries?",
      "options": [
        "The importance of artistic rebellion",
        "The necessity of respecting historical norms",
        "The danger of ignoring clear warnings and leading to obsession",
        "The value of exploring dark, dusty halls",
        "The superiority of emotional over realistic art",
      ],
      "answer": 1,
    },
    {
      "question": "What did Julian feel as he looked at the paintings?",
      "options": [
        "A sense of profound boredom",
        "An overwhelming feeling of heat",
        "That they were watching him with invisible eyes",
        "The urge to paint them himself",
        "Fear that the colors would fade quickly",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Gothic",
    "models": {
      "main": "gemma4:code",
      "novel": "gemma4:novel",
    },
    "level": "Level_4",
  },
};
export default data;
