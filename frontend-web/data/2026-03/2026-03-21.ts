import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Death of Vincent van Gogh",
    "details":
      "On March 29th (but in 3 days we are looking for the 21st), 1890, at the age of 37, Vincent van Gogh died from a self-inflicted gunshot wound. He had been struggling with mental illness and financial difficulties throughout his life.",
  },
  "date": "2026-03-21",
  "title": "Shadows of Absinthe",
  "body":
    "In the dimly lit studio, where the faint scent of absinthe wafted through the air, I found myself surrounded by the remnants of a tortured soul. Vincent's brushstrokes danced across the canvas, a symphony of colors that seemed to echo his own inner turmoil.  \n\n As I gazed upon the vibrant palette, my mind wandered back to the day he took his last breath, March 29th, 1890. The weight of his struggles – mental illness and financial woes – hung heavy in the air, like a specter that refused to depart. His eyes, those expressive orbs that had once shone with creativity, now seemed to hold a deep sorrow.  \n\n I felt an eerie sense of connection to this troubled artist, as if his pain still lingered within these walls. The whispered stories of his final days swirled around me – the gunshot wound, the struggle to find solace in art. In this studio, where creativity had once flowed freely, I sensed a haunting presence that refused to be silenced.",
  "word count": 168,
  "dialog": [
    {
      "Meg":
        "I loved how the author described Vincent's studio and his emotions through his art. It was so vivid!",
    },
    {
      "Billy":
        "Yeah, I know what you mean! I loved how he showed how struggling with mental health can be like a storm inside your head.",
    },
    {
      "Kerry":
        "But what really got me was when he talked about the societal pressures on artists back then. It's crazy to think that they were expected to be geniuses and produce masterpieces all the time!",
    },
    {
      "Lui":
        "I agree with you both, but I also appreciated how the author highlighted the tension between creativity and commercialism. It's a timeless issue, really.",
    },
    {
      "Meg":
        "And what about Vincent's relationships? The way he was misunderstood by his contemporaries... it broke my heart!",
    },
    {
      "Billy":
        "Yeah, that part was really hard to read. But I think it's an important reminder of how even the most creative and talented people can be hurt by others' ignorance.",
    },
    {
      "Kerry":
        "I'm just going to say it: I loved the absinthe reference! That's some fancy stuff right there!",
    },
    {
      "Lui":
        "Haha, well, yes. The author certainly had a flair for the dramatic. But beneath all that, there are some really important themes and messages.",
    },
  ],
  "quiz": [
    {
      "question": "What year did Vincent pass away?",
      "options": [
        "1885",
        "1890",
        "1900",
        "1910",
        "1920",
      ],
      "answer": 1,
    },
    {
      "question": "What was the source of the faint scent in the studio?",
      "options": [
        "paints",
        "turpentine",
        "absinthe",
        "solvent",
        "canvas",
      ],
      "answer": 2,
    },
    {
      "question": "What were some of the struggles Vincent faced?",
      "options": [
        "financial woes only",
        "mental illness and financial woes",
        "only mental health issues",
        "no struggles at all",
        "physical pain and relationship problems",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did Kerry say was the most impactful part of the story?",
      "options": [
        "the societal pressures on artists",
        "Vincent's relationships with his contemporaries",
        "how Vincent struggled with mental health",
        "the absinthe reference",
        "the tension between creativity and commercialism",
      ],
      "answer": 2,
    },
    {
      "question": "How did Lui describe the author's writing style?",
      "options": [
        "fancy but not effective",
        "dramatic and effective",
        "clear but boring",
        "confusing but interesting",
        "overly simple",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Gothic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_8",
  },
};
export default data;
