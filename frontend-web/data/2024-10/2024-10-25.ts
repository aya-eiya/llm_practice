import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The premiere of 'Hamlet' at The Globe Theatre",
    "details":
      "On August 2, 1603, the play was first performed on a stage at The Globe Theatre in London.",
  },
  "date": "2024-10-25",
  "title": "The Clockwork Rebellion",
  "body":
    "In the year 1850, the city of London was on the brink of chaos. The Industrial Revolution had brought about great change, but also great inequality. The once-mighty Empire was now ruled by a council of wealthy aristocrats, who used their power to exploit the working class.  \n\n It was in this tumultuous time that a group of rebels emerged, determined to overthrow the corrupt government and establish a new order. Led by the enigmatic figure known only as 'The Clockmaker', they had one goal: to free London from the chains of oppression.  \n\n The Clockmaker's plan was a complex web of intrigue and deception, using the very technology that had created the Empire's wealth against it. With his team of skilled engineers and inventors, they set out to sabotage the government's machinery and bring the entire system crashing down.  \n\n But as the clock ticked closer to midnight, the stakes grew higher. The Clockmaker's own past began to catch up with him, threatening to destroy everything he had worked for. Would he be able to succeed in his mission, or would the Empire crush the rebellion before it even had a chance to take hold?",
  "word count": 193,
  "dialog": [
    {
      "Billy":
        "I just finished reading the novel, and I'm still reeling from the story! The Clockmaker's plan to overthrow the corrupt government was so cleverly executed.",
    },
    {
      "Kerry":
        "I know, right? I loved how the author wove together historical events with science fiction elements. It made for a thrilling read!",
    },
    {
      "Meg":
        "The way the author described the city of London in 1850 was so vivid! I felt like I was right there with The Clockmaker and his team as they navigated the treacherous landscape.",
    },
    {
      "Lui":
        "As an educator, I'm always impressed by how well-written a novel can be. This one had me on the edge of my seat, wondering what would happen next. Great job, author!",
    },
    {
      "Billy":
        "I loved how The Clockmaker's past caught up with him, threatening to destroy everything he'd worked for. It added a layer of depth to his character and made his ultimate victory all the more satisfying.",
    },
    {
      "Kerry":
        "Yeah, that was a great twist! And I have to say, I'm a bit surprised by how well the author handled the themes of oppression and rebellion. It's definitely food for thought.",
    },
    {
      "Meg":
        "I think what really stood out to me was the way The Clockmaker used his knowledge of science and technology to outwit his enemies. It was so cleverly done, and it made me wonder about the possibilities of such a plan in real life...",
    },
    {
      "Lui":
        "As someone who's taught history and social studies for years, I have to say that this novel hit on some really important themes. The struggle for power and the importance of standing up against oppression are timeless issues that we can all learn from.",
    },
  ],
  "quiz": [
    {
      "question": "What was the main goal of The Clockmaker and his team?",
      "options": [
        "To build a new city",
        "To overthrow the corrupt government",
        "To invent a time machine",
        "To create a utopian society",
        "To explore space",
      ],
      "answer": 1,
    },
    {
      "question": "What was the setting of the story?",
      "options": [
        "Ancient Egypt",
        "Medieval Europe",
        "The Industrial Revolution era London",
        "The American Wild West",
        "A futuristic city on Mars",
      ],
      "answer": 2,
    },
    {
      "question": "What was The Clockmaker's plan to overthrow the government?",
      "options": [
        "To use violence and force",
        "To sabotage the government's machinery",
        "To create a new currency",
        "To build a time machine",
        "To negotiate with the government",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the stakes for The Clockmaker as the clock ticked closer to midnight?",
      "options": [
        "His team would lose their funding",
        "He would be arrested by the police",
        "His own past would catch up with him",
        "The government would declare war on his team",
        "A natural disaster would hit London",
      ],
      "answer": 2,
    },
    {
      "question":
        "Who were the main characters discussing The Clockmaker's story?",
      "options": [
        "Lui, Kerry, and Billy",
        "Meg, Lui, and Billy",
        "Billy, Kerry, and Meg",
        "Kerry, Meg, and Lui",
        "Billy and Kerry",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Theater",
    "flavor": "Steampunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
