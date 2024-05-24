import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Woodstock Music & Art Fair",
    "details":
      "A three-day music festival held on August 15-17, 1969, on a dairy farm in Bethel, New York, featuring performances by Jimi Hendrix, Janis Joplin, The Who, and many others.",
  },
  "date": "2024-04-11",
  "title": "The Bethel Horror",
  "body":
    "It was August 15-17, 1969, and a group of people had gathered on a dairy farm in Bethel, New York, for the Woodstock Music & Art Fair. The festival was meant to be a celebration of peace, love, and music, but something sinister lurked beneath the surface.As night fell over the festival grounds, strange occurrences began to take place. People reported seeing figures lurking in the shadows, whispering eerie phrases like 'join us' and 'never-ending'. The music stopped abruptly at midnight, and a deafening silence fell over the crowd.Suddenly, the sky turned a sickly green color and the ground began to shake violently. People ran for cover as the earth split open and monstrous creatures emerged from the depths of the earth. The festival-goers were picked off one by one, their screams echoing through the night.By morning, only a handful of survivors remained. They emerged from their hiding spots to find the festival grounds littered with bodies and covered in blood. The horror had come to Bethel, leaving a trail of carnage in its wake.",
  "word count": 175,
  "dialog": [
    {
      "Billy":
        "I'm still trying to wrap my head around what happened at Woodstock. I mean, monsters emerging from the earth? It's like something out of a science fiction movie!",
    },
    {
      "Meg":
        "Exactly! And don't even get me started on the eerie green sky and the way the music just stopped. It was so creepy!",
    },
    {
      "Kerry":
        "I know, right? I was totally freaked out when the ground started shaking. But what really gets me is how quickly things went from peace-loving hippies to total chaos.",
    },
    {
      "Lui":
        "As a historian, I have to say that this novel raises some interesting questions about the power of fear and the consequences of unchecked emotions. I mean, think about it - the festival-goers were initially celebrating peace and love, but then things took a dark turn...",
    },
    {
      "Billy":
        "Yeah, and what really gets me is how the novel leaves us wondering what happened to the survivors after the fact. Did they get rescued? Did they have to fend for themselves? The lack of closure is really haunting.",
    },
    {
      "Meg":
        "I know I wouldn't want to be stuck in a world where monsters are roaming free! Can you imagine having to live with that kind of fear every day?",
    },
    {
      "Kerry":
        "And what about the government's role in all this? Were they aware of the supernatural events unfolding at Woodstock, or did they just cover it up?",
    },
    {
      "Lui":
        "Those are all excellent questions. As a teacher, I'd love to explore these themes and ideas with my students. It's a great opportunity for critical thinking and analysis.",
    },
  ],
  "quiz": [
    {
      "question": "What was the purpose of the Woodstock Music & Art Fair?",
      "options": [
        "A celebration of war",
        "A festival of peace, love, and music",
        "An event to raise awareness about environmental issues",
        "A competition for musicians",
        "A party for politicians",
      ],
      "answer": 1,
    },
    {
      "question": "What happened to the crowd at midnight during the festival?",
      "options": [
        "The music got louder",
        "The music stopped abruptly",
        "The lights went out",
        "The performers took a break",
        "The festival-goers started dancing",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did the survivors find when they emerged from their hiding spots in the morning?",
      "options": [
        "A peaceful crowd enjoying the music",
        "A mess of trash and debris",
        "Bodies and blood on the ground",
        "The festival grounds were empty",
        "The performers had left",
      ],
      "answer": 2,
    },
    {
      "question": "What was Lui, a historian, discussing about the novel?",
      "options": [
        "The power of love",
        "The impact of music",
        "The consequences of unchecked emotions",
        "The importance of government intervention",
        "The role of media",
      ],
      "answer": 2,
    },
    {
      "question":
        "What did Kerry mention as one of her concerns about the events at Woodstock?",
      "options": [
        "The noise level was too high",
        "The crowd was getting too rowdy",
        "The ground started shaking violently",
        "The music stopped suddenly",
        "The monsters emerged",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Gothic",
    "models": { "main": "llama", "novel": "llava" },
    "level": "Level_5",
  },
};
export default data;
