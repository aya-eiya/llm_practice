import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Successful Nuclear Reactor Launch",
    "details":
      "The first successful nuclear reactor, Chicago Pile-1 (CP-1), was launched at the University of Chicago's Stagg Field on August 9, 1942. Led by Enrico Fermi and Arthur Compton, this groundbreaking experiment marked a historic moment in nuclear science as it achieved the first controlled self-sustaining nuclear chain reaction.",
  },
  "date": "2025-08-09",
  "title": "The Copper Plutonium",
  "body":
    "The Victorian airship 'Aetherion' glided majestically through the evening sky, its brass hull reflecting the last rays of sunlight as it approached Stagg Field. Professor Enrico Fermi stood at the helm, his monocle gleaming with scientific enthusiasm.\n\n\n\n Beneath the field's sprawling copper dome lay a maze of pneumatic tubes and pressure gauges, where the University of Chicago's brightest minds labored over their latest contraption – a self-sustaining nuclear reaction engine. The air was thick with coal smoke and the aroma of sizzling copper.\n\n\n\n Arthur Compton, his silver hair styled perfectly beneath his top hat, adjusted the brass chronometer on his wrist, noting the precise moment when the first controlled chain reaction would occur. The crowd below hushed in anticipation, their gas lamps casting long shadows across the field's weathered cobblestones.\n\n\n\n With a final hiss of steam and a thunderous roar from within the copper sphere, the reactor burst into life, its atomic heart pulsing with an ethereal blue glow that illuminated the night sky like a second moon. The Aetherion's crew cheered as history was made, marking the dawn of a new era in human progress.",
  "word count": 186,
  "dialog": [
    {
      "Billy":
        "I love the novel! The blend of historical accuracy with imaginative steampunk elements makes it so fascinating!",
    },
    {
      "Kerry":
        "Man, that's so cool how they combined actual science with airships and stuff. Makes history feel like a sci-fi movie!",
    },
    {
      "Meg":
        "Oh my goodness, I wish the Aetherion existed! It's just like something out of one of those classic sci-fi novels I love to read...",
    },
    {
      "Lui":
        "Well, while this depiction is certainly imaginative, it's worth noting that controlled nuclear reactions weren't achieved until many years later.",
    },
    {
      "Billy":
        "But isn't it amazing how they took real science and ran with it? Like Fermi and his team, just pushing the boundaries of what was possible!",
    },
    {
      "Kerry":
        "And think about all those people down there on Stagg Field. They must have been so excited to see that first controlled reaction happen!",
    },
    {
      "Meg":
        "I bet it felt like a magical moment for everyone. The glow from the reactor, the cheers, everything just coming together in this perfect historical scene...",
    },
    {
      "Lui":
        "Indeed, and while some details may be embellished, it's still a compelling narrative that brings these important scientific developments to life.",
    },
  ],
  "quiz": [
    {
      "question": "What was the name of the airship in the story?",
      "options": [
        "Zephyr",
        "Aetherion",
        "Nebula",
        "Voyager",
        "Stellaris",
      ],
      "answer": 1,
    },
    {
      "question": "Who stood at the helm of the Aetherion?",
      "options": [
        "Arthur Compton",
        "Professor Enrico Fermi",
        "Billy",
        "Kerry",
        "Meg",
      ],
      "answer": 2,
    },
    {
      "question": "What color was the glow coming from the reactor?",
      "options": [
        "Red",
        "Blue",
        "Green",
        "Purple",
        "Orange",
      ],
      "answer": 1,
    },
    {
      "question": "Who first achieved controlled nuclear reactions?",
      "options": [
        "Arthur Compton",
        "Professor Enrico Fermi",
        "Billy",
        "Kerry",
        "Lui",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was the name of the location where the reactor burst into life?",
      "options": [
        "Stagg Field",
        "Copper Plutonium",
        "Aetherion",
        "University of Chicago",
        "Stellaris",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Science",
    "flavor": "Steampunk",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_8",
  },
};
export default data;
