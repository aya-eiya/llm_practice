import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "May Day (International Workers' Day)",
    "details":
      "May Day is a public holiday celebrated on May 1st to commemorate the Haymarket affair, which occurred in Chicago in 1886 and led to the establishment of Labor Day in the United States.",
  },
  "date": "2026-05-01",
  "title": "May Day Requiem",
  "body":
    'The year was 1886, and the city of Chicago was ablaze with protests. Workers from all over the country had gathered to demand an eight-hour workday, but their voices were drowned out by the cacophony of factory whistles and police sirens. Amidst the chaos, a group of labor activists huddled in secret, planning their next move.  \n\n The air was thick with tension as they debated the merits of armed resistance versus peaceful protest. Emma, a fiery young woman with a quick wit and sharper tongue, advocated for caution. "We must not let our passion cloud our judgment," she cautioned. But others, fueled by desperation and anger, urged a more radical approach.  \n\n As the debate raged on, a knock at the door interrupted their deliberations. It was Pete, a grizzled old union leader with a heart of gold. He bore news of a devastating blow: a group of police officers had been ordered to disperse the protesters by any means necessary. The activists knew that time was running out, and they must make a choice between fighting for their rights or fleeing in terror.',
  "word count": 183,
  "dialog": [
    {
      "Lui":
        "What did you think of the portrayal of Emma in the novel? I thought she was a strong and independent character.",
    },
    {
      "Meg":
        "I loved how the author described the setting of Chicago in 1886. It made me feel like I was right there with the protesters.",
    },
    {
      "Kerry":
        "But didn't you guys think it was a bit one-sided? I mean, what about the police officers' perspective?",
    },
    {
      "Billy":
        "I was really fascinated by the debate between Emma and the other activists. It made me think about how difficult it must have been for them to make decisions back then.",
    },
    {
      "Lui":
        "Yes, the author did a great job of showing the complexities of the situation. And I loved how he highlighted the importance of activism in bringing about change.",
    },
    {
      "Meg":
        "I was also impressed by how the author wove together historical events and personal stories to create this rich tapestry of history.",
    },
    {
      "Kerry":
        "But what I didn't get was, why did they choose 1886 as the setting? Was it just a random year or was there something specific about that time?",
    },
    {
      "Billy":
        "I think it's because 1886 was actually a significant year in labor history. The Haymarket affair happened around then, which led to major changes in labor laws.",
    },
    {
      "Lui":
        "Excellent point, Billy! And I think the author chose this setting to highlight the importance of perseverance and collective action in achieving social change.",
    },
  ],
  "quiz": [
    {
      "question":
        "What year was it when workers from all over the country gathered to demand an eight-hour workday?",
      "options": [
        "1885",
        "1886",
        "1887",
        "1890",
        "1900",
      ],
      "answer": 1,
    },
    {
      "question": "Who advocated for caution in the group of labor activists?",
      "options": [
        "Pete",
        "Emma",
        "Lui",
        "Meg",
        "Billy",
      ],
      "answer": 2,
    },
    {
      "question": "What news did Pete bring to the group of labor activists?",
      "options": [
        "A new law was passed in their favor.",
        "The protest was going well, but they needed more help.",
        "A group of police officers had been ordered to disperse the protesters by any means necessary.",
        "They were going on strike for a month.",
        "The government would negotiate with them directly.",
      ],
      "answer": 2,
    },
    {
      "question": "Why did Kerry think the portrayal was one-sided?",
      "options": [
        "He thought it didn't focus enough on the police officers' perspective.",
        "He wanted to see more of the activists' personal lives.",
        "He felt like some characters were underdeveloped.",
        "He preferred a different genre, and this book wasn't his favorite.",
        "He liked how they portrayed Emma but not the setting.",
      ],
      "answer": 0,
    },
    {
      "question":
        "What historical event did Billy mention as happening in 1886?",
      "options": [
        "The Haymarket affair",
        "The Great Fire of Chicago",
        "The Labor Movement's beginning",
        "The eight-hour workday law was passed",
        "The end of the Civil War",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Historical Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
