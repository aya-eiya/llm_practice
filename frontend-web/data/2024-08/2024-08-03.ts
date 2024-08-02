import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Great Fire of London",
    "details":
      "A devastating fire that broke out on September 2, 1666, at a bakery on Pudding Lane in London and raged for four days, destroying thousands of homes and businesses.",
  },
  "date": "2024-08-03",
  "title": "The Last City on Mars",
  "body":
    "In the year 2154, humanity's last hope for survival lay in the city of Nova Terra, situated deep within the Martian crust. The once-blue skies were now a perpetual grey, and the air was thick with toxic fumes. But it was here that the remnants of civilization had converged, determined to preserve knowledge and culture in the face of an impending apocalypse.  \n\n As I stepped out of the habitat module and into the sterile environment of the city's central square, I couldn't help but feel a sense of melancholy wash over me. The streets were empty, save for the occasional maintenance drone whizzing by, its LED lights flickering like fireflies in the darkness. The buildings that lined the square stood as testaments to human ingenuity, their reinforced walls and solar panels a testament to our ability to adapt and survive.  \n\n But it was the city's library that held the greatest significance, for within its archives lay the collective knowledge of humanity's past. I had spent countless hours poring over the shelves, devouring the works of great minds from centuries gone by. And yet, even as I delved deeper into the stacks, I couldn't shake the feeling that we were running out of time. The city's AI, EVE, had been warning us for months that our resources were dwindling at an alarming rate. It was only a matter of time before Nova Terra would be forced to shut its doors forever.",
  "word count": 240,
  "dialog": [
    {
      "Kerry":
        "I loved how the author described the city of Nova Terra! It felt so real, like I was right there with them.",
    },
    {
      "Meg":
        "I know, right? The details were amazing! And I loved how Billy and Kerry were discussing it afterwards. They're such a great team!",
    },
    {
      "Lui":
        "Indeed they are. And I must say, I appreciated the author's take on humanity's last hope for survival. It was thought-provoking.",
    },
    {
      "Billy":
        "Yeah, me too! I loved how the story made me think about our own planet and what we can do to save it. It was really inspiring!",
    },
    {
      "Kerry":
        "Absolutely! And I have to say, I'm a bit jealous that Meg got to be in the library and learn all about history and science. That sounds like so much fun!",
    },
    {
      "Meg":
        "Haha, well, you can always come visit me in the library anytime! And I loved how Lui was teaching us about social studies and history. He's such a great teacher.",
    },
    {
      "Lui":
        "Thank you, Meg! I'm glad you enjoyed it. And I must say, I appreciated how the author wove together so many different themes and ideas in this novel. It was really engaging!",
    },
    {
      "Billy":
        "Yeah, me too! I loved how everything came together in the end. It was such a satisfying read!",
    },
    {
      "Kerry":
        "Definitely! And I think we should all get together soon to discuss more books and have some fun.",
    },
    {
      "Meg": "That sounds like a great idea, Kerry! Let's plan something soon.",
    },
  ],
  "quiz": [
    {
      "question": "What is the name of the city on Mars?",
      "options": [
        "Nova Terra",
        "New Hope",
        "Mars City",
        "Red Planet",
        "Blue Skies",
      ],
      "answer": 0,
    },
    {
      "question": "Why did humanity converge in Nova Terra?",
      "options": [
        "To escape a global pandemic",
        "To preserve knowledge and culture",
        "To establish a new government",
        "To find a new source of energy",
        "To build a new city",
      ],
      "answer": 1,
    },
    {
      "question":
        "What is the name of the AI that warns Nova Terra about resource depletion?",
      "options": [
        "EVE",
        "Nova",
        "Terra",
        "AI-1",
        "AI-2",
      ],
      "answer": 0,
    },
    {
      "question": "Who are the characters discussing the city of Nova Terra?",
      "options": [
        "Billy, Kerry, and Lui",
        "Meg, Kerry, and Billy",
        "Lui, Meg, and a teacher",
        "A boy, a girl, and a teacher",
        "Two boys and a girl",
      ],
      "answer": 1,
    },
    {
      "question":
        "What is the author's take on humanity's last hope for survival?",
      "options": [
        "It's a pessimistic view of the future",
        "It's an optimistic view of the past",
        "It's a thought-provoking view of humanity's present",
        "It's a realistic view of the consequences of our actions",
        "It's an inspiring view of what we can do to save the planet",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Politics",
    "flavor": "Science Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_8",
  },
};
export default data;
