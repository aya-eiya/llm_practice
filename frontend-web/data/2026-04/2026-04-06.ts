import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Guernica Bombing",
    "details":
      "On April 6, 1937, German and Italian warplanes bombed the town of Guernica during the Spanish Civil War, resulting in widespread destruction and a loss of innocent lives. Pablo Picasso's powerful anti-war painting 'Guernica' was inspired by this event.",
  },
  "date": "2026-04-06",
  "title": "Shadows of Guernica",
  "body":
    "The streets of Guernica lay in ruins after the devastating bombing on April 6, 1937. German and Italian warplanes had unleashed a barrage of bombs, leaving a trail of destruction and death in their wake. The once peaceful town was now a scene of utter chaos, with buildings reduced to rubble and civilians fleeing for their lives.  \n\n Picasso's famous painting 'Guernica' captured the horrors of that fateful day, depicting the brutal reality of war. The screaming horses, fallen bodies, and shattered glass all conveyed the senseless violence that had ravaged the town. As I stood before the painting, I couldn't help but feel a deep sense of sorrow for the innocent lives lost.  \n\n Yet, amidst the ruins, there was also a glimmer of hope. The people of Guernica refused to be defeated by the horrors they had endured. They rebuilt their town, and their spirit remained unbroken. This resilience in the face of adversity is a powerful reminder that even in the darkest of times, there is always a way forward.",
  "word count": 171,
  "dialog": [
    {
      "Lui":
        "What did you think of Picasso's painting 'Guernica'? It really captured the horrors of war.",
    },
    {
      "Meg":
        "I loved how it depicted the senseless violence and chaos. I felt like I was right there with the people of Guernica.",
    },
    {
      "Kerry":
        "I agree, but what really stood out to me was the resilience of the people. They rebuilt their town and didn't let war break them.",
    },
    {
      "Billy":
        "That's so true! And it makes you think about how we can apply that same resilience in our own lives when faced with challenges.",
    },
    {
      "Lui":
        "Exactly, Billy! And I think that's why this novel is so important - it shows us the power of human spirit even in the darkest times.",
    },
    {
      "Meg":
        "I also loved how the novel highlighted the importance of empathy and understanding. It made me realize how little we know about history and its impact on people's lives.",
    },
    {
      "Kerry":
        "I'm glad you brought that up, Meg! And it makes me wonder, what can we do to make sure something like this never happens again?",
    },
    {
      "Billy":
        "That's a great question, Kerry. Maybe if we learn from the past and work together, we can create a more peaceful future.",
    },
    {
      "Lui":
        "Well said, Billy. And I think that's the most important lesson we can take away from this novel - the importance of working towards a better tomorrow.",
    },
  ],
  "quiz": [
    {
      "question": "What event occurred on April 6, 1937, in Guernica?",
      "options": [
        "The bombing of Pearl Harbor",
        "The sinking of the Titanic",
        "The devastating bombing of Guernica",
        "The start of World War I",
        "The end of World War II",
      ],
      "answer": 2,
    },
    {
      "question": "Who created the famous painting 'Guernica'?",
      "options": [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Claude Monet",
        "Salvador Dali",
      ],
      "answer": 1,
    },
    {
      "question":
        "What emotion did the narrator feel when standing before 'Guernica'?",
      "options": [
        "Frustration",
        "Sadness",
        "Anger",
        "Confusion",
        "Excitement",
      ],
      "answer": 2,
    },
    {
      "question":
        "How did the people of Guernica respond to the devastation caused by the bombing?",
      "options": [
        "They fled and never returned",
        "They rebuilt their town and remained unbroken",
        "They surrendered to the invading forces",
        "They sought revenge against the bombers",
        "They blamed each other for the tragedy",
      ],
      "answer": 1,
    },
    {
      "question": "What is one lesson that can be learned from the novel?",
      "options": [
        "The importance of empathy and understanding",
        "The power of human spirit in adversity",
        "The dangers of war and its consequences",
        "The need for revenge against those responsible",
        "The futility of rebuilding a destroyed town",
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
