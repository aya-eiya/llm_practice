import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Opening night of '2001: A Space Odyssey' film",
    "details":
      "On May 8th, 1968, Stanley Kubrick's groundbreaking science fiction film '2001: A Space Odyssey' was released in theaters",
  },
  "date": "2025-05-08",
  "title": "Shadows in Space",
  "body":
    "As I floated through the vast expanse of space, I couldn't shake off the feeling that I was being watched. The stars twinkled like diamonds against the blackness, but their beauty was marred by an eerie sense of presence. It had been three days since the crew of the spaceship 'Odyssey' disappeared without a trace, and I was left to navigate the treacherous void alone.  \n\n I checked the navigation system for what felt like the hundredth time, but the coordinates were still unclear. The ship's AI, MOTHER, had gone offline hours ago, leaving me with nothing but static and silence. I tried to contact Mission Control, but the response was met with an unsettling pause before the line went dead.  \n\n As night descended on the ship, I huddled in the darkness, trying to convince myself that it was just my imagination playing tricks on me. But then I heard it – a faint whispering in the vents, a soft whisper that seemed to be calling out to me. I knew then that I wasn't alone in space, and that something had been waiting for me all along.",
  "word count": 187,
  "dialog": [
    {
      "Meg":
        "I just finished reading the novel, and I'm still reeling from it! The way it made me feel like I was floating through space with the protagonist was incredible.",
    },
    {
      "Lui":
        "Well, well, well. It seems we have a few readers who were thoroughly immersed in the story. I must say, I enjoyed it myself. The author did an excellent job of creating a sense of unease and uncertainty.",
    },
    {
      "Billy":
        "I love how the novel explores the idea of being alone in space and the psychological effects it has on the protagonist! It's like we're right there with him, feeling the weight of his isolation.",
    },
    {
      "Kerry":
        "Dude, I'm still trying to wrap my head around the whole 'MOTHER' thing. Is the AI really a character in its own right? Or is it just a tool for the protagonist?",
    },
    {
      "Meg":
        "I think that's what makes this novel so great - it raises all these questions and leaves them open to interpretation! It's like we're part of the conversation, trying to figure out what's going on alongside the protagonist.",
    },
    {
      "Lui":
        "Yes, and I think that's where the true power of literature lies. When a book can make us think critically and engage with its themes in such a way... well, that's when we know it's truly special.",
    },
    {
      "Billy":
        "I'm going to have to reread this one again soon! There are just so many layers to it, and I feel like I only scratched the surface this time around.",
    },
    {
      "Kerry":
        "Alright, alright. I get it. This novel is deep. But what about the whole 'alien' thing? Do you guys think there really were aliens lurking in the void?",
    },
  ],
  "quiz": [
    {
      "question":
        "As I floated through the vast expanse of space, I couldn't shake off the feeling that I was being watched.",
      "options": [
        "The stars twinkled like diamonds against the blackness.",
        "I checked the navigation system for what felt like the hundredth time,",
        "The ship's AI, MOTHER, had gone offline hours ago,",
        "As night descended on the ship, I huddled in the darkness,",
        "It was just my imagination playing tricks on me.",
      ],
      "answer": 0,
    },
    {
      "question":
        "I tried to contact Mission Control, but the response was met with an unsettling pause before the line went dead.",
      "options": [
        "The crew of the spaceship 'Odyssey' disappeared without a trace,",
        "I checked the navigation system for what felt like the hundredth time,",
        "The ship's AI, MOTHER, had gone offline hours ago,",
        "As night descended on the ship, I huddled in the darkness,",
        "It was just my imagination playing tricks on me.",
      ],
      "answer": 0,
    },
    {
      "question":
        "I heard it – a faint whispering in the vents, a soft whisper that seemed to be calling out to me.",
      "options": [
        "The stars twinkled like diamonds against the blackness.",
        "I checked the navigation system for what felt like the hundredth time,",
        "The ship's AI, MOTHER, had gone offline hours ago,",
        "As night descended on the ship, I huddled in the darkness,",
        "It was just my imagination playing tricks on me.",
      ],
      "answer": 0,
    },
    {
      "question":
        "I love how the novel explores the idea of being alone in space and the psychological effects it has on the protagonist!",
      "options": [
        "The author did an excellent job of creating a sense of unease and uncertainty.",
        "It's like we're right there with him, feeling the weight of his isolation.",
        "The way it made me feel like I was floating through space with the protagonist was incredible.",
        "I must say, I enjoyed it myself.",
        "Well, well, well. It seems we have a few readers who were thoroughly immersed in the story.",
      ],
      "answer": 1,
    },
    {
      "question":
        "What about the whole 'alien' thing? Do you guys think there really were aliens lurking in the void?",
      "options": [
        "Yes, and I think that's where the true power of literature lies.",
        "Well, well, well. It seems we have a few readers who were thoroughly immersed in the story.",
        "I must say, I enjoyed it myself.",
        "It's like we're part of the conversation, trying to figure out what's going on alongside the protagonist.",
        "That's where the true power of literature lies.",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Horror",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_6",
  },
};
export default data;
