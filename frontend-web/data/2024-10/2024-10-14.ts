import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Armory Show",
    "details":
      "A scandalous art exhibition that took place on October 14, 1913, at the 69th Regiment Armory in New York City.",
  },
  "date": "2024-10-14",
  "title": "The Clockwork Conspiracy",
  "body":
    "In the fog-shrouded streets of London, a mysterious clockwork device had been stolen from the famous Armory Show in 1913. The device, known as the 'Chrono-Trigger,' was said to have the power to control time itself.  \n\n Lady Emily Windsor, a brilliant inventor and member of the aristocracy, had been working on a top-secret project to create an army of clockwork soldiers. She believed that the Chrono-Trigger was the key to unlocking their true potential.  \n\n As she delved deeper into the mystery, she discovered that a rival inventor, Professor Reginald Thistlewaite, had also been searching for the device. He sought to use its power to further his own ambitions and gain control over the city.  \n\n With the help of her loyal butler, Jenkins, Lady Emily set out on a perilous quest to retrieve the Chrono-Trigger before it fell into the wrong hands. Their journey would take them through the dark alleys and gaslit streets of Victorian London, where they would encounter danger at every turn.",
  "word count": 164,
  "dialog": [
    {
      "Meg":
        "I loved how Lady Emily Windsor was a strong and independent character, she reminded me of Elizabeth Bennet from Pride and Prejudice!",
    },
    {
      "Lui":
        "Actually, Meg, Lady Emily's strength comes more from her intelligence and determination rather than her societal status. It's an interesting portrayal of femininity in the early 20th century.",
    },
    {
      "Kerry":
        "I'm surprised no one mentioned how creepy Professor Reginald Thistlewaite is! He's like a villain from a Sherlock Holmes story!",
    },
    {
      "Billy":
        "Yeah, and have you guys noticed how the author uses the fog-shrouded streets of London to create a sense of mystery and foreboding? It really adds to the tension!",
    },
    {
      "Meg":
        "I think what I loved most about this novel is its blend of science fiction and historical fiction. The clockwork device, the Chrono-Trigger, is such an intriguing concept!",
    },
    {
      "Lui":
        "It's a great example of how science fiction can comment on and critique the present. In this case, it's a commentary on the social hierarchies and power struggles of Victorian London.",
    },
    {
      "Kerry":
        "I'm still trying to wrap my head around the implications of time travel and altering historical events. It's mind-blowing stuff!",
    },
    {
      "Billy":
        "Exactly! And I love how the author doesn't shy away from exploring complex themes like morality, power, and the consequences of playing with time.",
    },
  ],
  "quiz": [
    {
      "question": "What is the name of the clockwork device?",
      "options": [
        "Chrono-Key",
        "Time-Trigger",
        "Clockwork Engine",
        "Chrono-Device",
        "Timekeeper",
      ],
      "answer": 1,
    },
    {
      "question": "Who stole the Chrono-Trigger?",
      "options": [
        "Lady Emily Windsor",
        "Professor Reginald Thistlewaite",
        "Jenkins",
        "The Butcher",
        "The Baker",
      ],
      "answer": 1,
    },
    {
      "question": "What is unique about Lady Emily's strength?",
      "options": [
        "Her physical strength",
        "Her intelligence and determination",
        "Her social status",
        "Her magical powers",
        "Her athletic ability",
      ],
      "answer": 1,
    },
    {
      "question": "Who is the rival inventor of Lady Emily?",
      "options": [
        "Professor Reginald Thistlewaite",
        "Jenkins",
        "The Butcher",
        "The Baker",
        "The Candlestick",
      ],
      "answer": 0,
    },
    {
      "question":
        "What theme does the novel explore through time travel and altering historical events?",
      "options": [
        "Power struggles in Victorian London",
        "Social hierarchies of Victorian London",
        "Time travel as a commentary on the present",
        "The consequences of playing with time",
        "Morality",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Steampunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
