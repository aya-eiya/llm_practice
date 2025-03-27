import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Ethics Day",
    "details":
      "A day dedicated to highlighting the importance of ethics, promoting moral values, and encouraging people to make ethical decisions.",
  },
  "date": "2024-12-01",
  "title": "Shadows in the Night",
  "body":
    "It was a dark and stormy night when I received the call from Detective James. He sounded urgent, his voice trembling with every word. 'Meet me at the old warehouse on 5th street,' he said, before hanging up. I arrived just as the rain started to pour down. The warehouse loomed before me, its windows like empty eyes staring back. [\n\n As I stepped inside, I saw James pacing back and forth, his hands behind his head. 'What's going on?' I asked him, trying to keep my voice steady. He turned to me, his eyes wide with fear. 'It's Emily,' he said, his voice barely above a whisper. 'She's missing.' [\n\n I tried to process the information, but it felt like a punch to the gut. Emily was James' sister, and she had always been there for him. Now, she was gone. We searched the warehouse from top to bottom, but there was no sign of her. It was as if she had vanished into thin air.",
  "word count": 167,
  "dialog": [
    {
      "Meg":
        "I loved how the detective was so urgent on the phone, it really set the tone for the rest of the story!",
    },
    {
      "Kerry":
        "Yeah, and then the warehouse just seemed to come out of nowhere! I loved the sense of mystery",
    },
    {
      "Billy":
        "I'm with Meg, the way the author described the detective's voice was so intense. It made me feel like something bad had happened.",
    },
    {
      "Lui":
        "As a historian, I appreciate how the novel drew parallels between the past and present. The themes of loss and missing persons are timeless.",
    },
    {
      "Meg":
        "I love how the author wove together different storylines and plot twists to keep us guessing. It was like a puzzle!",
    },
    {
      "Kerry":
        "And can we talk about Emily? She's just so... mysterious. I wonder what happened to her...",
    },
    {
      "Billy":
        "Yeah, me too! The way the author left us with questions is really clever. It makes you think about it long after you've finished reading.",
    },
    {
      "Lui":
        "As an educator, I'd love to discuss this novel in class and explore how it relates to real-life events and societal issues.",
    },
  ],
  "quiz": [
    {
      "question": "Who called Detective James?",
      "options": [
        "Detective James",
        "Emily's sister",
        "The old warehouse owner",
        "A mysterious stranger",
        "A police officer",
      ],
      "answer": 0,
    },
    {
      "question": "What happened to Emily?",
      "options": [
        "She was found safe and sound",
        "She ran away from home",
        "She is missing",
        "She got lost in the woods",
        "She moved to a different city",
      ],
      "answer": 2,
    },
    {
      "question": "Where did Detective James meet Meg?",
      "options": [
        "The old warehouse on 5th street",
        "A police station",
        "Emily's house",
        "A park",
        "A library",
      ],
      "answer": 0,
    },
    {
      "question": "What was the weather like when Meg met Detective James?",
      "options": [
        "Sunny and bright",
        "Cloudy with a chance of rain",
        "Rain started to pour down",
        "Snowflakes were falling",
        "The sun was setting",
      ],
      "answer": 2,
    },
    {
      "question": "Who is Billy talking about in the dialogue?",
      "options": [
        "Emily's sister",
        "Detective James",
        "Meg",
        "A mysterious stranger",
        "The author of the novel",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Ethics",
    "flavor": "Crime",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
