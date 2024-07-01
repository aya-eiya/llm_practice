import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The First Ballet Performance",
    "details":
      "On July 24th, 1581, the first ballet performance was held at the French court of King Henry III. The ballet was called 'Ballet Comique de la Queen' and was performed by a group of professional dancers from Italy, who had been invited to perform for the royal family.",
  },
  "date": "2024-07-24",
  "title": "The Forgotten Dance",
  "body":
    'In the year 2154, humanity had finally reached a point where they could travel through time. The first successful attempt was made by a group of scientists who had been studying the art of dance for centuries. They called their invention the "Dance Engine" and it allowed them to relive any moment in history.  \n\n The team leader, Dr. Sophia Patel, had always been fascinated by the ballet performance that took place at the French court of King Henry III in 1581. She believed that this event held the key to unlocking a deeper understanding of human culture and history. As she activated the Dance Engine for the first time, she felt a strange sensation, as if she was transported back to the royal court.  \n\n The scene unfolded before her eyes like a beautifully choreographed ballet. The Italian dancers, invited by King Henry III, were performing the Comique de la Queen with precision and elegance. Dr. Patel watched in awe as the performers brought the past to life. She realized that this moment was not just a historical event, but a window into the human experience.',
  "word count": 185,
  "dialog": [
    {
      "Meg":
        "Oh my gosh, I loved how the Dance Engine brought history to life! It was like being there in 1581.",
    },
    {
      "Lui":
        "Indeed, it was impressive. But I think we should focus on the historical significance of that event and its impact on human culture.",
    },
    {
      "Kerry":
        "Yeah, yeah, yeah... Can we talk about something else? Like, did you guys notice how Dr. Patel just appeared in the past without any explanation?",
    },
    {
      "Billy":
        "Actually, Kerry, I was thinking about that too. Maybe it's a metaphor for how our understanding of history is always subjective and influenced by our own perspectives.",
    },
    {
      "Meg":
        "Ooh, that's deep! I never thought about it like that. But what about the dancers themselves? Their performances were so precise and elegant... Can we learn more about them?",
    },
    {
      "Lui":
        "Ah, good point, Meg. The Comique de la Queen was a famous ballet performance in its time. We should definitely look into its historical context.",
    },
    {
      "Kerry":
        "Yeah, yeah! And maybe we can even use the Dance Engine to learn more about it!",
    },
    {
      "Billy":
        "That would be so cool! I bet we could learn a lot about different cultures and eras that way.",
    },
    {
      "Meg":
        "I'm already imagining all the possibilities... This novel has really opened my eyes to the power of storytelling and history coming alive.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the main invention that allowed humans to travel through time in the year 2154?",
      "options": [
        "Time Machine",
        "Dance Engine",
        "Teleportation Device",
        "Wormhole Generator",
        "Quantum Leap",
      ],
      "answer": 1,
    },
    {
      "question": "What was Dr. Sophia Patel's fascination with?",
      "options": [
        "The Comique de la Queen ballet performance",
        "The French court of King Henry III",
        "The art of dance in general",
        "Time travel technology",
        "Human culture and history",
      ],
      "answer": 4,
    },
    {
      "question":
        "What did Billy think the Dance Engine's appearance in the past represented?",
      "options": [
        "A magical occurrence",
        "A metaphor for subjective understanding of history",
        "A scientific explanation",
        "A random event",
        "An error in the technology",
      ],
      "answer": 1,
    },
    {
      "question": "What was Meg excited to learn more about?",
      "options": [
        "The Comique de la Queen ballet performance",
        "Dr. Patel's research",
        "Time travel technology",
        "Human culture and history",
        "The dancers themselves",
      ],
      "answer": 4,
    },
    {
      "question": "What did Lui suggest they should focus on?",
      "options": [
        "The historical significance of the event",
        "The art of dance in general",
        "Time travel technology",
        "The dancers' performances",
        "Human culture and history",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Dance",
    "flavor": "Science Fiction",
    "models": {
      "main": "llama3",
      "novel": "llama3",
    },
    "level": "Level_5",
  },
};
export default data;
