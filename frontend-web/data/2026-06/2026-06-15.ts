import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Guernica's Destruction",
    "details":
      "On June 15, 1937, a Spanish Republican bomber accidentally dropped four bombs on the town of Guernica during the Spanish Civil War, killing and injuring hundreds. Pablo Picasso's famous painting 'Guernica' was inspired by this event.",
  },
  "date": "2026-06-15",
  "title": "Shadows of Guernica",
  "body":
    "On that fateful day in June 1937, a senseless act of violence shook the town of Guernica. A Spanish Republican bomber, intent on targeting military forces, accidentally dropped four bombs on the unsuspecting civilians. The destruction was catastrophic, with hundreds killed and injured in the chaos.  \n\n As the news of the tragedy spread, Pablo Picasso was deeply moved by the event. He saw it as a symbol of the brutal nature of war, and the suffering of innocent people caught in its crossfire. Inspired by the tragedy, Picasso created his famous painting 'Guernica', a powerful anti-war statement that would become an iconic representation of the horrors of conflict.  \n\n The bombing of Guernica remains one of the most infamous incidents of the Spanish Civil War, and it continues to serve as a reminder of the devastating consequences of war. As we reflect on this tragic event, let us remember the importance of protecting human life and promoting peace in all its forms.",
  "word count": 161,
  "dialog": [
    {
      "Billy":
        "This novel was so well-written! I love how it highlighted the brutal nature of war.",
    },
    {
      "Meg":
        "I completely agree with Billy, but what really stood out to me was how Picasso's painting 'Guernica' was inspired by this event. It's amazing how art can be used to convey such powerful messages.",
    },
    {
      "Kerry":
        "But don't you guys think the novel was a bit one-sided? I mean, it seems like it only focused on the suffering of civilians and not the military aspect of the war.",
    },
    {
      "Lui":
        "That's a valid point, Kerry. However, the novel does acknowledge that war is complex and multifaceted. By focusing on the human cost of conflict, it serves as a reminder of the importance of promoting peace.",
    },
    {
      "Billy":
        "I see what you mean, Lui. But I still think the novel did a great job in conveying the horrors of war and the need for humanity to come together in times of conflict.",
    },
    {
      "Meg":
        "Can we talk more about Picasso's painting? I've seen it before, but I never really understood its significance until now.",
    },
    {
      "Kerry":
        "Yeah! Let's do it. I think it's really cool how art can be used to bring attention to important issues like war and peace.",
    },
  ],
  "quiz": [
    {
      "question": "What event inspired Picasso's painting 'Guernica'?",
      "options": [
        "The Spanish Civil War",
        "The bombing of Guernica",
        "The rise of fascism in Europe",
        "The death of a close friend",
        "The destruction of the town of Barcelona",
      ],
      "answer": 1,
    },
    {
      "question":
        "Who was deeply moved by the event of the bombing of Guernica?",
      "options": [
        "Pablo Picasso",
        "The townspeople of Guernica",
        "The military forces involved in the Spanish Civil War",
        "A local politician",
        "A foreign journalist",
      ],
      "answer": 0,
    },
    {
      "question": "What was the outcome of the bombing of Guernica?",
      "options": [
        "Only a few civilians were injured",
        "Hundreds of people were killed and injured",
        "The town was completely destroyed",
        "A new hospital was built in its place",
        "It had no significant impact on the war",
      ],
      "answer": 1,
    },
    {
      "question": "What did Picasso's painting 'Guernica' represent?",
      "options": [
        "The glory of war",
        "The suffering of innocent people caught in its crossfire",
        "The bravery of soldiers during battle",
        "The destruction of the town of Guernica",
        "The rise of fascism in Europe",
      ],
      "answer": 1,
    },
    {
      "question": "What did the novel do to convey the horrors of war?",
      "options": [
        "It only focused on the military aspect of the war",
        "It highlighted the brutal nature of war and its effect on civilians",
        "It showed the glory of war",
        "It ignored the topic of war altogether",
        "It only mentioned the destruction of property",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Academic Essay",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
