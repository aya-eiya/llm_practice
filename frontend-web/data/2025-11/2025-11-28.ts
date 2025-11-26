import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Death of Julia Margaret Cameron",
    "details":
      "English photographer Julia Margaret Cameron passed away on November 28, 1879. She was a pioneering figure in photography and known for her portrait photographs of Victorian celebrities.",
  },
  "date": "2025-11-28",
  "title": "When Memories Fade",
  "body":
    "The last photograph on Earth lay brittle in my hands. I had spent years documenting humanity's final days, capturing every moment of our downfall with a camera that refused to die. Outside my shelter, the world had crumbled into ruins, but here inside, among the shadows and dust, I found solace in preserving what remained of our past.  \n\n The date was etched into my memory like a scar: November 28, 1879 - the day Julia Margaret Cameron's lens finally closed for good. She had been one of the first to capture life with such intimacy and power, though none knew then that her legacy would survive when all else did not.  \n\n Now, in this dark age where technology had ceased to function, I was a modern-day Julia. My camera captured what no eyes could see - the ghosts of those who had fallen, the whispers of those yet to come. In my shelter's dim light, I developed each image with the same reverence she must have felt, knowing that these were the last windows into a world we'd lost forever.",
  "word count": 180,
  "dialog": [
    {
      "Billy":
        "I love how the photographer preserved memories even after everything else was lost! It's like a time capsule for humanity.",
    },
    {
      "Kerry":
        "Dude, this novel is so heavy it makes me think about how fragile our world really is. Like, we're all just one mistake away from disappearing completely.",
    },
    {
      "Meg":
        "The imagery in this story is absolutely magical! I could feel the dust and decay of the post-apocalyptic world through the words",
    },
    {
      "Billy":
        "And the way they incorporated Julia Margaret Cameron's photography into the narrative was brilliant. It adds a historical depth that makes the whole thing more authentic.",
    },
    {
      "Kerry":
        "Wait, what? They set this in 1879? How did they get all these futuristic tech terms and concepts? Is it some kind of time paradox novel?",
    },
  ],
  "quiz": [
    {
      "question":
        "What date was etched into the protagonist's memory like a scar?",
      "options": [
        "January 1, 1879",
        "November 28, 1879",
        "December 31, 1879",
        "March 15, 1880",
        "October 22, 1878",
      ],
      "answer": 1,
    },
    {
      "question": "Who is the protagonist compared to in terms of photography?",
      "options": [
        "Eadweard Muybridge",
        "Louis Daguerre",
        "Timothy O'Sullivan",
        "Julia Margaret Cameron",
        "Annie Leibovitz",
      ],
      "answer": 3,
    },
    {
      "question": "What is Kerry's main concern about the story?",
      "options": [
        "The world being too clean after the apocalypse",
        "The fragility of human existence and potential extinction",
        "The complexity of historical photography techniques",
        "The difficulty in preserving memories after a disaster",
        "The lack of post-apocalyptic technology",
      ],
      "answer": 1,
    },
    {
      "question":
        "Which character mentions feeling the dust and decay through the words?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "None of these characters",
      ],
      "answer": 2,
    },
    {
      "question":
        "What does Billy praise about the novel's incorporation of historical elements?",
      "options": [
        "The use of modern-day slang in historical settings",
        "The addition of realistic post-apocalyptic details",
        "The historical depth and authenticity added by referencing Julia Margaret Cameron",
        "The use of advanced digital technology for photography",
        "The inclusion of contemporary philosophical themes",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "cogito",
      "novel": "cogito",
    },
    "level": "Level_7",
  },
};
export default data;
