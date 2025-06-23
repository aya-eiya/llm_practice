import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": 'Premiere of "The Godfather"',
    "details":
      "The Godfather, a crime film directed by Francis Ford Coppola, was released on July 13th, 1972",
  },
  "date": "2025-07-13",
  "title": "Ashes of Eternity",
  "body":
    'The world had ended in a catastrophic blaze of fire and brimstone. The once blue skies were now a permanent gray, casting a somber mood over the barren landscape. \n\n The few remaining survivors huddled together, their eyes scanning the horizon for any sign of hope. But there was none. The Premiere of "The Godfather" had been the final event before the apocalypse, and it seemed that even Francis Ford Coppola\'s masterpiece couldn\'t have foreseen the devastation that was to come. \n\n I walked through the ruins of what once was a thriving city, my boots crunching on the debris-strewn streets. The smell of smoke and ash hung heavy in the air, making it hard to breathe. I stumbled upon a small community of survivors, huddled around a makeshift fire. They looked up at me with a mix of fear and hope in their eyes. \n\n "What\'s your name?" one of them asked, his voice shaking slightly. "I\'m Alex," I replied, trying to sound confident. The group nodded in unison, welcoming me into their fold. We shared what little food we had, and I told them stories of the world before the end. \n\n It was a small glimmer of humanity in a desolate world, but it was enough for me to hold on to.',
  "word count": 211,
  "dialog": [
    {
      "Meg":
        "I loved how the author described the world before the end, it felt so real!",
    },
    {
      "Kerry":
        "Yeah, I was thinking, what if we could go back in time and change things?",
    },
    {
      "Lui":
        "That's a interesting perspective, Kerry. But let's not forget the impact of human actions on the environment.",
    },
    {
      "Billy":
        "I'm more interested in how they survived after the apocalypse. I mean, did you notice how they found food and shelter?",
    },
    {
      "Meg":
        "Oh yeah! And Alex's story about the community, it was so heartwarming. It showed that even in a desolate world, there's still hope.",
    },
    {
      "Kerry":
        "I agree with Meg, but I also think we should be thinking about how to prevent something like this from happening again.",
    },
    {
      "Lui":
        "Well said, Kerry. As educators, it's our responsibility to teach the next generation about the importance of sustainability and responsible behavior.",
    },
    {
      "Billy":
        "I'm going to write a letter to my representative about environmental policies. Can I get some tips on how to structure it?",
    },
  ],
  "quiz": [
    {
      "question": "What was the cause of the apocalypse in the story?",
      "options": [
        "A global pandemic",
        "A catastrophic blaze of fire and brimstone",
        "A nuclear war",
        "A severe economic crisis",
        "A natural disaster",
      ],
      "answer": 1,
    },
    {
      "question": "Who asked Alex for his name?",
      "options": [
        "Meg",
        "Kerry",
        "Lui",
        "Billy",
        "One of the survivors didn't ask him",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was the topic of discussion among Kerry, Lui, Billy, and Meg?",
      "options": [
        "The Godfather movie",
        "Environmental policies",
        "Sustainability",
        "How to prevent another apocalypse",
        "Alex's story",
      ],
      "answer": 3,
    },
    {
      "question":
        "Who is interested in writing a letter to his representative about environmental policies?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "None of the above",
      ],
      "answer": 0,
    },
    {
      "question": "How many students are part of the discussion group?",
      "options": [
        "2",
        "3",
        "4",
        "5",
        "6",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
