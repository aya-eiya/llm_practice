import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Assassination of John F. Kennedy",
    "details":
      "John F. Kennedy, the 35th President of the United States, was assassinated in Dallas, Texas while riding in an open-top car in a motorcade through Dealey Plaza. Lee Harvey Oswald fired multiple shots from the sixth floor of the Texas School Book Depository building, striking Kennedy in the head and neck.",
  },
  "date": "2026-04-08",
  "title": "Shadows in Dealey Plaza",
  "body":
    "The sun was setting over Dallas, casting long shadows across Dealey Plaza. John F. Kennedy, the charismatic leader, rode in an open-top car, waving to the crowds gathered along the route. But amidst the sea of adoring faces, a sinister presence lurked in the shadows.  \n\n Lee Harvey Oswald, a lone figure with a troubled past, had been stalking his prey for months. His rifle, carefully hidden on the sixth floor of the Texas School Book Depository building, was trained on the President's motorcade. As the car turned onto Elm Street, Oswald's finger tightened around the trigger.  \n\n The sound of gunfire echoed through the plaza, sending panic-stricken screams rippling through the crowd. Kennedy slumped forward, his head and neck torn apart by the deadly bullet. 'They've killed him!' a bystander shouted, as chaos erupted in the streets. Oswald, meanwhile, had vanished into the anonymity of the surrounding buildings, leaving behind a trail of destruction and deceit.",
  "word count": 155,
  "dialog": [
    {
      "Kerry": "What do you guys think about the novel? I loved it!",
    },
    {
      "Meg":
        "I know, right? The way the author described Dealey Plaza was so vivid! I felt like I was there.",
    },
    {
      "Lui":
        "Let's not get too caught up in the emotions of it. We need to analyze the historical context and see what we can learn from this event.",
    },
    {
      "Billy":
        "I love how you said that, Mr. Lui. But don't you think the author did a great job of making us feel like we're right there with Kennedy? It was so immersive!",
    },
    {
      "Kerry":
        "I'm still trying to wrap my head around why Oswald would do something like that. Was he just crazy or was there more to it?",
    },
    {
      "Meg":
        "I think it's interesting how the author showed us both sides of Oswald - his troubled past and his motivations. It made me feel so much empathy for him.",
    },
    {
      "Lui":
        "Empathy is a good word, Meg. But we also need to remember that this was a real event with real consequences. We can't just feel sorry for the perpetrator without understanding their actions.",
    },
    {
      "Billy":
        "I never thought about it like that before, Mr. Lui. You're really making me think critically about what I read!",
    },
  ],
  "quiz": [
    {
      "question": "Who was riding in an open-top car in Dealey Plaza?",
      "options": [
        "Lee Harvey Oswald",
        "John F. Kennedy",
        "A bystander",
        "The motorcade driver",
        "No one",
      ],
      "answer": 1,
    },
    {
      "question": "Where was Lee Harvey Oswald hiding his rifle?",
      "options": [
        "In the Texas School Book Depository building's basement",
        "On the sixth floor of the Texas School Book Depository building",
        "In a nearby alleyway",
        "In a parked car on Elm Street",
        "Nowhere",
      ],
      "answer": 1,
    },
    {
      "question": "What did Kerry say he loved about the novel?",
      "options": [
        "The way the author described Dealey Plaza was so vivid!",
        "I love how you said that, Mr. Lui.",
        "I'm still trying to wrap my head around why Oswald would do something like that.",
        "Empathy is a good word, Meg.",
        "Let's not get too caught up in the emotions of it.",
      ],
      "answer": 0,
    },
    {
      "question": "Who had been stalking his prey for months?",
      "options": [
        "John F. Kennedy",
        "Lee Harvey Oswald",
        "The motorcade driver",
        "A bystander",
        "No one",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did Billy say Mr. Lui made him think about after reading the novel?",
      "options": [
        "How to analyze historical context",
        "Why empathy is a good word",
        "The importance of understanding motivations",
        "How to feel sorry for the perpetrator",
        "To think critically about what I read!",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Politics",
    "flavor": "Thriller",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
