import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Great Fire of London",
    "details":
      "On July 2, 1666, a devastating fire broke out at a bakery on Pudding Lane in the City of London. Fanned by strong winds and fueled by closely-packed wooden buildings, the fire spread rapidly, consuming everything in its path. The fire was eventually brought under control on July 5, but not before it had destroyed much of the city, including many iconic landmarks like the medieval St. Paul's Cathedral. In response to this disaster, King Charles II commissioned Sir Christopher Wren to design a new St. Paul's Cathedral, which became one of the most famous and influential buildings in London's architectural history.",
  },
  "date": "2025-07-07",
  "title": "Flames of Tomorrow",
  "body":
    "In the year 2154, a devastating fire swept through the city of New London, leaving nothing but ashes and ruins in its wake. The flames were fueled by the tightly-packed skyscrapers and narrow streets that made up the city's skyline.  \n\n But this was no ordinary fire. It had been sparked by an experimental energy source created by the brilliant scientist, Dr. Emma Taylor. Her invention, known as the 'Inferno Reactor,' was meant to revolutionize the way cities generated power, but it had a catastrophic flaw that caused it to spiral out of control.  \n\n As the fire raged on, the people of New London were thrown into chaos. Emergency services scrambled to evacuate the city, while Dr. Taylor frantically worked on a solution to stop the Inferno Reactor before it was too late. But with time running out and the flames closing in, she realized that her creation might be more than just a mere accident – it could be the catalyst for a new era of innovation and transformation.",
  "word count": 169,
  "dialog": [
    {
      "Meg":
        "I loved how Dr. Taylor's creation had such a huge impact on the city! I never thought about how science could be both helpful and destructive at the same time.",
    },
    {
      "Kerry":
        "Yeah, it was crazy to see how one person's invention could change everything. And I love how Billy's passion for science was shown throughout the story!",
    },
    {
      "Lui":
        "That's a great point, Kerry! The novel did an excellent job of highlighting the importance of responsibility and ethics in scientific discoveries.",
    },
    {
      "Billy":
        "I'm still trying to wrap my head around how Dr. Taylor managed to create something so powerful without realizing its potential risks. It's mind-boggling!",
    },
    {
      "Meg":
        "Exactly! And it made me think about all the times we experiment with things in our own lives, like when I try out a new recipe or build something with LEGO. We have to consider the consequences of our actions, no matter how big or small they may seem.",
    },
    {
      "Kerry":
        "Ha! Yeah, Meg's got a point there. We all take risks and experiment with things in our own ways. But it's how we learn from those experiences that matters!",
    },
    {
      "Lui":
        "Well said, Kerry! And speaking of learning, I think the novel did an excellent job of conveying complex ideas to readers like us. It was engaging, yet informative – a great combination!",
    },
  ],
  "quiz": [
    {
      "question": "What was the devastating fire in New London fueled by?",
      "options": [
        "An experimental energy source",
        "Tightly-packed skyscrapers and narrow streets",
        "Emergency services",
        "Dr. Emma Taylor's invention",
        "The Inferno Reactor",
      ],
      "answer": 1,
    },
    {
      "question": "What was Dr. Emma Taylor's creation called?",
      "options": [
        "Inferno Generator",
        "Energy Reactor",
        "Power Source",
        "The Inferno Reactor",
        "New London Engine",
      ],
      "answer": 3,
    },
    {
      "question": "How did the people of New London react to the fire?",
      "options": [
        "They ignored it and continued their daily lives",
        "They panicked and fled the city",
        "Emergency services scrambled to evacuate the city",
        "The city's residents were thrown into chaos",
        "They welcomed the flames with open arms",
      ],
      "answer": 3,
    },
    {
      "question":
        "What did Billy think about Dr. Taylor managing to create something so powerful without realizing its potential risks?",
      "options": [
        "He thought it was a great achievement",
        "He was still trying to wrap his head around it",
        "He didn't care about the risks",
        "He thought it was a disaster waiting to happen",
        "He was bored by it",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did Kerry say about how Dr. Taylor's creation had a huge impact on the city?",
      "options": [
        "It didn't have any impact",
        "It was just a minor incident",
        "It showed that science could be both helpful and destructive at the same time",
        "The story didn't mention it having an impact",
        "He didn't care about the impact",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Science Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
