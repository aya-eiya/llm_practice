import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Guernica's Premiere",
    "details":
      "Pablo Picasso's anti-war painting Guernica is first shown to the public at the Spanish Republic's pavilion at the Exposition Internationale des Arts Décoratifs et Industriels Modernes in Paris, France on April 15th, 1937.",
  },
  "date": "2024-04-15",
  "title": "Guernica's Legacy",
  "body":
    "In a world where steam power had replaced fossil fuels, Europe was embroiled in an industrial war unlike any other. The year was 1897 and the Spanish Republic, once a symbol of peace, now stood as a battlefield for the newest technological advancements - steam-powered tanks and airships.  On April 15th, the premiere of Pablo Picasso's anti-war painting, Guernica, took place at the Exposition Internationale des Arts Décoratifs et Industriels Modernes in Paris, France. The event was more than just an exhibition; it was a call for peace and an end to the senseless destruction wrought by steam power.  The painting depicted the aftermath of a bombing raid on Guernica, Spain, a stark reminder of the horrors of war. As the public viewed the artwork, they were filled with outrage and despair. The message was clear: the advancements in technology had led to unimaginable suffering and devastation.  In response, the world's greatest minds came together to develop new technologies that could harness the power of steam for peaceful purposes. Guernica's legacy lived on, inspiring a movement towards a more peaceful and sustainable future. The painting served as a constant reminder of the dangers of unchecked technological progress and the importance of working towards peace.",
  "word count": 204,
  "dialog": [
    {
      "Billy":
        "Wow, I never thought about war in this way. The painting really brought it home for me.",
    },
    {
      "Lui":
        "I agree, Billy. The impact of war on civilians is always devastating. We need to find a way to harness steam power for peaceful purposes.",
    },
    {
      "Kerry":
        "I'm so sick of seeing these airships and tanks destroying cities! Can't we just make them do something good for once?",
    },
    {
      "Meg":
        "I think the painting was really powerful, but it also made me realize how much we take peace for granted. We need to appreciate what we have.",
    },
    {
      "Billy":
        "Exactly, Meg! And maybe if we work together, we can find a way to use steam power for good. Like Lui said, harnessing its power could be the key.",
    },
    {
      "Kerry":
        "Yeah, and maybe we can even use it to help people who've been affected by war. That would be so cool.",
    },
    {
      "Lui":
        "I'm glad you're all thinking critically about this, kids. It's crucial that we find a way to balance technological advancements with the well-being of humanity.",
    },
    {
      "Meg":
        "I think Guernica's message is clear: we need to work together for peace and sustainability. We can make a difference!",
    },
    {
      "Kerry":
        "Whoa, Meg, you're like a superhero or something! Saving the world one steam-powered invention at a time!",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the year when the industrial war took place in Europe?",
      "options": [
        "1887",
        "1897",
        "1902",
        "1915",
        "1920",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the name of Picasso's anti-war painting that premiered in 1897?",
      "options": [
        "Guernica",
        "The War of the Worlds",
        "The Last Supper",
        "The Starry Night",
        "Starry Eyes",
      ],
      "answer": 0,
    },
    {
      "question": "What was the main theme of Picasso's painting 'Guernica'?",
      "options": [
        "Celebration of war",
        "Commemoration of peace",
        "Depiction of destruction",
        "Portrayal of technology",
        "Expression of art",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was the main idea behind the minds coming together to develop new technologies?",
      "options": [
        "To create more powerful war machines",
        "To find peaceful purposes for steam power",
        "To improve airship designs",
        "To increase the speed of tanks",
        "To reduce energy consumption",
      ],
      "answer": 1,
    },
    {
      "question": "What was Kerry's attitude towards using steam power?",
      "options": [
        "Negative",
        "Positive",
        "Skeptical",
        "Indifferent",
        "Critical",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Steampunk",
    "models": { "main": "llama3", "novel": "llava" },
    "level": "Level_5",
  },
};
export default data;
