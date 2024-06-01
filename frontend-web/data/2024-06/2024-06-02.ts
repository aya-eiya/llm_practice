import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": 'Alvin Ailey American Dance Theater\'s Premiere of "Revelations"',
    "details":
      'On June 2nd, 1960, Alvin Ailey American Dance Theater premiered "Revelations" at the 92nd Street Y in New York City. This three-part masterpiece, rooted in African American cultural heritage and exploring themes of faith, hope, and perseverance, quickly became one of the most acclaimed and widely seen modern dance works of the 20th century, solidifying Ailey\'s place as a pivotal figure in dance history.',
  },
  "date": "2024-06-02",
  "title": "The Guardian of Revelations",
  "body":
    "In the mystical realm of Aethereia, where the moon dipped into the horizon, a young apprentice named Lyra stumbled upon an ancient tome. The cover, adorned with strange symbols, seemed to whisper secrets only meant for her ears.\n\nAs she delved deeper into the book's mysteries, Lyra discovered that the tome held the power to unlock the gates of Revelations, a realm where ancient wisdom and forgotten knowledge awaited. But a dark force, known as the Shadow Weaver, sought to claim the tome's power for its own nefarious purposes.\n\nWith courage in her heart and determination in her soul, Lyra embarked on a perilous journey to safeguard the tome and thwart the Shadow Weaver's plans. Along the way, she encountered enigmatic allies and overcame treacherous obstacles, ultimately leading her to the threshold of Revelations itself.\n\nIn this mystical realm, Lyra discovered hidden truths about the universe and herself, unlocking a new path forward as a guardian of revelations.",
  "word count": 158,
  "dialog": [
    {
      "Meg":
        "Oh my goodness, that was incredible! I can't believe Lyra found a whole other realm hidden within a book. Imagine the stories it holds!",
    },
    {
      "Kerry":
        "Yeah, that Revelations place sounds pretty epic. Like a superhero headquarters, but with ancient knowledge instead of gadgets.",
    },
    {
      "Billy":
        "I wonder what kind of knowledge? Was it scientific formulas, historical records, or maybe even mathematical theorems lost to time?",
    },
    {
      "Lui":
        "A fascinating thought, Billy.  The pursuit of knowledge, especially lost knowledge, is a powerful motivator.  It's what drives historians and archaeologists alike.",
    },
    {
      "Kerry":
        "But what about the Shadow Weaver?  He sounded like a classic villain, trying to steal the magic for himself.",
    },
    {
      "Meg":
        "He did seem pretty menacing. I wonder if he represents ignorance trying to extinguish enlightenment?",
    },
    {
      "Lui":
        "An interesting interpretation, Meg.  The struggle between light and darkness, knowledge and ignorance, is a recurring theme throughout literature and history.",
    },
    {
      "Billy":
        "I wonder if the symbols on the book had anything to do with Lyra's ability to unlock the realm.  Maybe they were some kind of ancient code or language.",
    },
    {
      "Kerry":
        "Maybe Lyra will learn to decipher them and unlock even more secrets in the next book!",
    },
    {
      "Meg":
        "Oh, I hope so! I can't wait to see what adventures await Lyra in Revelations.",
    },
    {
      "Lui":
        "It certainly leaves one eager for the next chapter.  A well-written story can ignite our imaginations and transport us to other worlds.",
    },
  ],
  "quiz": [
    {
      "question":
        "What is the name of the mystical realm where the story takes place?",
      "options": [
        "Eldoria",
        "Atheria",
        "Aethereia",
        "Ethereia",
        "Arthia",
      ],
      "answer": 2,
    },
    {
      "question": "What is the name of the ancient tome Lyra discovers?",
      "options": [
        "The Book of Shadows",
        "The Grimoire of Secrets",
        "The Tome of Revelations",
        "The Text of Aethereia",
        "The story doesn't say",
      ],
      "answer": 4,
    },
    {
      "question": "Who is the antagonist seeking to claim the tome's power?",
      "options": [
        "The Night Weaver",
        "The Dark Lord",
        "The Shadow Weaver",
        "The Shadow King",
        "The Dream Eater",
      ],
      "answer": 2,
    },
    {
      "question":
        "What did Lui say is a recurring theme throughout literature?",
      "options": [
        "Good vs. Evil",
        "Love and Loss",
        "The Power of Friendship",
        "The Pursuit of Happiness",
        "Light and Darkness",
      ],
      "answer": 4,
    },
    {
      "question":
        "What do the friends hope Lyra will be able to do in the future?",
      "options": [
        "Defeat the Shadow Weaver",
        "Find true love",
        "Return to the ordinary world",
        "Decipher the symbols on the book",
        "Become the ruler of Revelations",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Dance",
    "flavor": "Fantasy",
    "models": {
      "main": "gemini",
      "novel": "llama3",
    },
    "level": "Level_1",
  },
};
export default data;
