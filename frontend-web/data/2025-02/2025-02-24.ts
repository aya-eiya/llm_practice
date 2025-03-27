import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The First Film Camera is Invented",
    "details":
      "On February 24, 1888, George Eastman invents the first film camera, which he calls the 'Kodak.' It uses a roll of paper coated with light-sensitive salts to capture multiple photographs.",
  },
  "date": "2025-02-24",
  "title": "Shadows on the Film",
  "body":
    "It was a dark and stormy night when I first laid eyes on the old film camera. My grandfather had given it to me, telling me that it was his most prized possession. As I held it in my hands, I felt a chill run down my spine. Something about it seemed...off.  \n\n I decided to take the camera into my darkroom, eager to develop the first roll of film it had ever shot. But as I worked, I began to feel like something was watching me from the shadows. I tried to shake off the feeling, but it only grew stronger. It wasn't until I developed the last frame that I realized why.  \n\n The final picture showed a figure standing in front of the camera, its eyes glowing with an otherworldly light. I knew then that the camera was not just any ordinary device - it was a portal to another world. And as I looked at the photograph, I felt myself being pulled into its dark and foreboding shadows.",
  "word count": 170,
  "dialog": [
    {
      "Meg":
        "I'm still thinking about that creepy camera... I feel like it's watching me...",
    },
    {
      "Kerry":
        "Dude, what's with the weird feeling? You're not getting all spooked on us, are you?",
    },
    {
      "Billy":
        "I loved how the story was connected to science and history! It made it so much more interesting",
    },
    {
      "Lui":
        "As a teacher, I appreciate how the novel incorporated educational concepts in a fun way... but next time, can we have less suspense?",
    },
    {
      "Meg":
        "Suspense is what makes stories exciting! And it's not like anything bad happened to Billy or Kerry...",
    },
    {
      "Kerry":
        "Yeah, yeah, just calm down Meg. We're fine. But seriously though, who else thought the camera was a nice touch?",
    },
    {
      "Billy":
        "I loved how the story explored different themes and ideas... it made me think about my own experiences",
    },
    {
      "Lui":
        "That's exactly what we want students to take away from stories: connections to their own lives. Now, let's discuss...",
    },
  ],
  "quiz": [
    {
      "question":
        "Why did Meg feel a chill run down her spine when she first laid eyes on the old film camera?",
      "options": [
        "Because it was dark and stormy outside",
        "Because she felt something was off about the camera",
        "Because she had never seen a camera before",
        "Because she loved science and history",
        "Because she was excited to develop the film",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did Meg realize when she developed the final picture on the film?",
      "options": [
        "That the camera was not just any ordinary device",
        "That the camera had never been used before",
        "That the picture showed a normal scene",
        "That the picture showed a beautiful landscape",
        "That the picture showed a happy family",
      ],
      "answer": 0,
    },
    {
      "question": "Why did Billy enjoy the story?",
      "options": [
        "Because it was connected to science and history",
        "Because it had a lot of suspense",
        "Because it was fun to read",
        "Because it made him think about his own experiences",
        "Because it was easy to understand",
      ],
      "answer": 3,
    },
    {
      "question": "What did Kerry comment on?",
      "options": [
        "The camera's ability to take pictures",
        "The story's connection to science and history",
        "The suspense in the story",
        "The teacher's enthusiasm for the story",
        "The camera's creepy feeling",
      ],
      "answer": 4,
    },
    {
      "question": "What did Lui appreciate about the story?",
      "options": [
        "That it was connected to science and history",
        "That it had a lot of suspense",
        "That it made him think about his own experiences",
        "That it incorporated educational concepts in a fun way",
        "That it was easy to understand",
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
    "level": "Level_3",
  },
};
export default data;
