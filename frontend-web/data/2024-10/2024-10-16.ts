import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first successful balloon flight",
    "details":
      "On October 15, 1783 (not 16th), French inventor Jean-François Pilâtre de Rozier and François Laurent d'Arlandes made the first successful manned balloon flight in Paris. They flew for about an hour and reached an altitude of around 2,600 feet.",
  },
  "date": "2024-10-16",
  "title": "The Balloonist",
  "body":
    "It was the year 1783 and France was in the midst of a scientific revolution. Jean-François Pilâtre de Rozier, a young inventor with a passion for flight, stood on the outskirts of Paris, his eyes fixed on the horizon. He had spent years studying the works of Sir Isaac Newton and was determined to create a machine that would take him into the skies.  \n\n De Rozier's balloon, a magnificent creation of silk and hydrogen, stood tall behind him. It was a sight to behold, with its intricate patterns and delicate design. The inventor himself was a picture of confidence, his eyes shining with excitement as he prepared for the flight of a lifetime.  \n\n With a deep breath, de Rozier climbed into the balloon's basket and gave the signal for launch. The crowd that had gathered to watch gasped in unison as the balloon soared into the air, lifting its occupant high above the rooftops of Paris. De Rozier felt free, his spirit soaring with the wind as he gazed out at the breathtaking view below.",
  "word count": 175,
  "dialog": [
    {
      "Billy":
        "I loved the way de Rozier's passion for flight was portrayed in the novel. It made me feel like I was right there with him, watching his balloon soar into the sky.",
    },
    {
      "Kerry":
        "Yeah, and I love how it was set in 1783 France. It felt so real and immersive. I could almost smell the hydrogen gas and hear the crowd's reactions.",
    },
    {
      "Meg":
        "I know, right? The author did such a great job of bringing that time period to life. And de Rozier's character is just so inspiring. He's like a superhero for science!",
    },
    {
      "Lui":
        "Well, actually, Billy and Kerry, it's not exactly accurate to compare de Rozier to a superhero. While he was certainly a pioneer in the field of flight, his story is more complex than that.",
    },
    {
      "Billy": "Oh, yeah? What do you mean?",
    },
    {
      "Lui":
        "Well, for one thing, de Rozier's experiment with hydrogen was actually a bit of a disaster. He died in the accident, which made it really difficult for him to achieve his goals.",
    },
    {
      "Meg":
        "That's so true! I loved how the author highlighted the challenges and risks that de Rozier faced. It makes me appreciate his bravery all the more.",
    },
    {
      "Kerry":
        "Yeah, and it's not like he was just some genius inventor who came out of nowhere. He had to overcome a ton of obstacles to get where he did.",
    },
    {
      "Billy":
        "Exactly! And I think that's one of the things I love most about this novel – it shows how science and history are connected in really cool ways.",
    },
  ],
  "quiz": [
    {
      "question": "In what year did France experience a scientific revolution?",
      "options": [
        "1750",
        "1783",
        "1800",
        "1825",
        "1850",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the name of the inventor who created a machine to take him into the skies?",
      "options": [
        "Leonardo da Vinci",
        "Jean-François Pilâtre de Rozier",
        "Albert Einstein",
        "Isaac Newton",
        "Galileo Galilei",
      ],
      "answer": 1,
    },
    {
      "question": "What was the material used to create de Rozier's balloon?",
      "options": [
        "Silk and helium",
        "Silk and hydrogen",
        "Cotton and oxygen",
        "Wool and nitrogen",
        "Leather and carbon dioxide",
      ],
      "answer": 1,
    },
    {
      "question": "Where did de Rozier prepare for his flight of a lifetime?",
      "options": [
        "The Eiffel Tower",
        "The outskirts of Paris",
        "The Louvre Museum",
        "The Arc de Triomphe",
        "The Palace of Versailles",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the outcome of de Rozier's experiment with hydrogen?",
      "options": [
        "He successfully flew to the moon",
        "He died in an accident",
        "He became a famous scientist overnight",
        "He invented a time machine",
        "He discovered a new planet",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Historical Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
