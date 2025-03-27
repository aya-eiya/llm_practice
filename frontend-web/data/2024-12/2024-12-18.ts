import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": 'The Beatles release "A Hard Day\'s Night" album',
    "details":
      'The Beatles released their third studio album, "A Hard Day\'s Night", on July 10, 1964, in the United Kingdom and August 26, 1964, in the United States. The album was a commercial success, reaching number one on the UK Albums Chart and number one on the US Billboard 200 chart.',
  },
  "date": "2024-12-18",
  "title": "Shadows in the Night",
  "body":
    "I stepped out of the car and onto the deserted street, the only sound being the creaking of the old wooden sign that swung in the wind. It was a night like any other in this small town, but something felt off. The houses seemed to loom over me, their windows like empty eyes staring back.  \n\n As I walked towards the house, I noticed that the door was slightly ajar. I pushed it open and called out, but there was no response. I stepped inside, my heart racing with every creak of the floorboards beneath my feet.  \n\n The air inside was thick with the scent of decay and rot. I fumbled for my phone to turn on the light, but it had died hours ago. I was trapped in darkness, with only my wits to guide me. And then I heard it. A low whisper that seemed to come from all around me. 'Welcome home.'  \n\n I tried to run, but my feet felt heavy, as if rooted to the spot. The whisper grew louder, more urgent, and I felt myself being pulled towards it. I was consumed by an inky blackness that seemed to have a life of its own. And when I finally emerged into the light, I was no longer alone.",
  "word count": 213,
  "dialog": [
    {
      "Meg":
        "I couldn't believe what happened to you at the beginning of the novel! The atmosphere was so creepy!",
    },
    {
      "Lui":
        "Yes, it was a clever way to draw us in and make us feel like we were experiencing it alongside the protagonist.",
    },
    {
      "Kerry":
        "I loved how the whisper seemed to come from all around you. It was really unsettling!",
    },
    {
      "Billy":
        "I know, right? And then when you emerged into the light, I was surprised that you weren't alone. It was such a twist!",
    },
    {
      "Meg":
        "Exactly! It was like, whoa, this is not what I expected at all. The author did a great job of keeping us guessing.",
    },
    {
      "Lui":
        "As an educator, it's great to see students responding so thoughtfully to the novel. What did you guys think about the themes and messages?",
    },
    {
      "Kerry":
        "I liked how the novel explored ideas of home and identity. It made me think about my own sense of belonging.",
    },
    {
      "Billy":
        "Yeah, and it was also interesting to see how the protagonist's perceptions of reality changed throughout the story. It was like, what's real and what's not?",
    },
    {
      "Meg":
        "I agree! The novel made me realize that our perspectives can shape our understanding of the world in really profound ways.",
    },
    {
      "Lui":
        "Excellent points, everyone. It's clear that this novel has sparked some fantastic discussions among you all.",
    },
  ],
  "quiz": [
    {
      "question":
        "What did the protagonist notice when stepping out of the car?",
      "options": [
        "A dark figure",
        "The houses seemed to loom over him",
        "The door was slightly ajar",
        "The air inside was thick with decay and rot",
        "The whisper seemed to come from all around",
      ],
      "answer": 2,
    },
    {
      "question": "What did the protagonist hear when stepping inside?",
      "options": [
        "A loud noise",
        "A low whisper",
        "A creaking floorboard",
        "A door slamming shut",
        "A cat meowing",
      ],
      "answer": 1,
    },
    {
      "question": "What seemed to come from all around the protagonist?",
      "options": [
        "The whisper",
        "The darkness",
        "The wind",
        "The trees",
        "The houses",
      ],
      "answer": 0,
    },
    {
      "question": "How did the protagonist feel when trying to run?",
      "options": [
        "Free and easy",
        "Heavy as if rooted to the spot",
        "Scared but brave",
        "Curious but cautious",
        "Happy but sleepy",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was unexpected about the protagonist emerging into the light?",
      "options": [
        "They were alone",
        "The door was open",
        "The house was empty",
        "They heard a voice",
        "They saw a figure",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Horror",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
