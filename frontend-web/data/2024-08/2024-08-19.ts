import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Woodstock Music & Art Fair",
    "details":
      "The Woodstock Music & Art Fair was a three-day (August 15–17) festival held on August 15–18, 1969, at Max Yasgur's dairy farm in Bethel, New York. The event was the largest and most iconic of a series of '69 festivals that took place during the summer of 1969.",
  },
  "date": "2024-08-19",
  "title": "Neon Dreams",
  "body":
    "In the neon-lit streets of New Eden, the rain poured down like a curse from above. The city was alive with the hum of holographic advertisements and the chatter of pedestrians, but amidst the chaos, one person stood out. Kael, a young and gifted hacker, had just received a message from an unknown sender.  \n\n The message read: 'Meet me at Club Zero if you want to see your sister again.' Kael's heart skipped a beat as he thought of his sister, Aria, who had been kidnapped by the corrupt corporation, Omicron Innovations. He had been searching for her for months, and now it seemed like he was finally getting close.  \n\n Kael made his way through the crowded streets, his eyes scanning the crowd for any sign of danger. As he approached Club Zero, he could feel a sense of unease in the pit of his stomach. What if this was a trap? What if Aria was already gone?",
  "word count": 158,
  "dialog": [
    {
      "Billy":
        "I just finished reading the novel, and I have to say it's amazing! The way the author describes the city of New Eden is so vivid that I felt like I was right there with Kael.",
    },
    {
      "Meg":
        "Oh my gosh, Billy, I know what you mean! I loved how the author used sensory details to bring the story to life. And I have to say, I'm a bit concerned about Aria's safety...",
    },
    {
      "Lui":
        "Actually, Meg, that's a great point. The novel does raise some important questions about power and corruption. But I think what really makes it stand out is its ability to balance action and suspense with deeper themes.",
    },
    {
      "Kerry":
        "Yeah, yeah, yeah, let's get to the good stuff! So, Billy, did you figure out who was behind Aria's kidnapping? And Meg, what do you think about Kael's relationship with his sister?",
    },
    {
      "Billy":
        "Ha! Okay, okay, Kerry. But seriously, I think it's really interesting how Kael's past and present intersect. He's got this whole complex history with Omicron Innovations...",
    },
    {
      "Meg":
        "I see what you mean, Billy. And I love how the author uses symbolism to explore themes of identity and belonging. The way Aria's character evolves throughout the story is really compelling.",
    },
    {
      "Lui":
        "You know, kids, one thing that struck me about this novel is its ability to tackle tough issues in a way that's both accessible and thought-provoking. It's definitely a great choice for anyone interested in science fiction or social commentary.",
    },
    {
      "Kerry":
        "Word, Lui! I'm so down with that. And hey, Billy, you've got to read the sequel - it's even better than this one!",
    },
  ],
  "quiz": [
    {
      "question": "What city is Kael searching for his sister in?",
      "options": [
        "New Eden",
        "Old City",
        "City of Dreams",
        "Eden's Gate",
        "Dark Alley",
      ],
      "answer": 0,
    },
    {
      "question": "Who sent Kael the message to meet at Club Zero?",
      "options": [
        "Aria",
        "Kael himself",
        "An unknown sender",
        "Omicron Innovations",
        "Club Zero's owner",
      ],
      "answer": 2,
    },
    {
      "question": "What is Aria's relationship with Kael?",
      "options": [
        "Aria is Kael's mother",
        "Aria is Kael's sister",
        "Aria is Kael's friend",
        "Kael and Aria are twins",
        "Kael and Aria have no relation",
      ],
      "answer": 1,
    },
    {
      "question": "What corporation is suspected of kidnapping Aria?",
      "options": [
        "Omicron Innovations",
        "New Eden Corporation",
        "Club Zero's owner",
        "The City Guard",
        "A mysterious organization",
      ],
      "answer": 0,
    },
    {
      "question": "Who does Lui mention as having read the novel?",
      "options": [
        "Billy and Meg",
        "Kerry and Lui",
        "Billy, Kerry, and Meg",
        "Lui himself",
        "None of the above",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Cyberpunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
