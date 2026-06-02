import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Juneteenth",
    "details":
      "Observed on June 19th, but commemorated on June 8th in some countries, Juneteenth marks the emancipation of enslaved African Americans in the United States and is also known as Jubilee Day or Freedom Day.",
  },
  "date": "2026-06-08",
  "title": "The Freedom of the Ancients",
  "body":
    "In the land of Azura, where the sun dipped into the horizon and painted the sky with hues of crimson and gold, the people of the village of Elyria gathered to celebrate a sacred day. It was the anniversary of their freedom from the shackles of slavery, a tale passed down through generations like a precious heirloom.  \n\n According to legend, the ancient sorcerer-king Arin had cast a spell that shattered the chains of bondage, freeing the Elyrians from their oppressors. The people rejoiced, and their voices echoed across the valleys, a melody of gratitude and jubilation.  \n\n As the moon rose high in the night sky, the villagers lit candles made from the purest wax of the sacred tree, symbolizing the light that had guided them through darkness. They shared stories of their ancestors' bravery, and the whispers of their names carried on the wind like a gentle breeze.  \n\n And so, the people of Elyria honored the memory of Arin's sacrifice, their hearts filled with love and appreciation for the freedom they enjoyed. In this moment, they knew that their liberation was not just a gift, but a responsibility to protect and nurture it, lest it be lost like a fleeting dream in the morning mist.",
  "word count": 205,
  "dialog": [
    {
      "Kerry":
        "I'm so glad we read this novel! I loved how it brought history to life.",
    },
    {
      "Meg":
        "I know, right? It's like the author transported us to a different world. I want to learn more about ancient sorcerers now!",
    },
    {
      "Lui":
        "That's exactly what I was hoping for when I chose this novel for our book club. The way it wove together history and fantasy is truly masterful.",
    },
    {
      "Billy":
        "I'm with Meg, I loved the magical elements! But I also thought it was really cool how the author used historical events to inspire the plot.",
    },
    {
      "Kerry":
        "Yeah, that's what makes it so believable. Like, the way they described the rebellion against the oppressors – it felt like we were right there with them.",
    },
    {
      "Meg":
        "And the setting! Oh my gosh, I'm still imagining those sunsets in Azura. The author's descriptions are just incredible.",
    },
    {
      "Lui":
        "I think what I appreciate most about this novel is how it highlights the importance of freedom and responsibility. It's a powerful message for all of us, regardless of our age or background.",
    },
    {
      "Billy":
        "Definitely. I'm going to remember that for a long time. Thanks, Lui, for choosing such an amazing book!",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the occasion being celebrated by the people of Elyria?",
      "options": [
        "A birthday",
        "An anniversary",
        "A wedding",
        "A holiday",
        "A funeral",
      ],
      "answer": 1,
    },
    {
      "question":
        "According to legend, what sorcerer-king had cast a spell that shattered the chains of bondage?",
      "options": [
        "Arin",
        "Jameson",
        "Lui",
        "Kerry",
        "Meg",
      ],
      "answer": 0,
    },
    {
      "question": "What did the villagers light in honor of Arin's sacrifice?",
      "options": [
        "Candles made from the purest wax of the sacred tree",
        "Torches made from animal fat",
        "Lanterns made from glass and oil",
        "Flames that burned in pots",
        "None of the above",
      ],
      "answer": 0,
    },
    {
      "question": "What message do the people of Elyria think is important?",
      "options": [
        "Freedom comes with great responsibility",
        "Liberation must be cherished and protected",
        "We must fight for our rights at all times",
        "We should always stand up to oppressors",
        "None of the above",
      ],
      "answer": 1,
    },
    {
      "question": "What did Billy say he was going to remember from the novel?",
      "options": [
        "The magical elements",
        "The historical events",
        "The setting and descriptions",
        "The importance of freedom and responsibility",
        "Thanks, Lui, for choosing such an amazing book!",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Fantasy",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
