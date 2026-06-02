import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first text message (SMS) is sent",
    "details":
      "Neil Papworth, an engineer at Vodafone, sends the first SMS from a personal computer to a mobile phone using the network of Vodafone in the UK.",
  },
  "date": "2026-06-30",
  "title": "The Signal from Darkness",
  "body":
    "The darkness was suffocating, a heavy blanket that pressed down upon me. I was trapped in this desolate place, with no escape from the shadows that lurked within every corner. Suddenly, my phone beeped, and I felt a shiver run down my spine. It was a text message, sent by an unknown number.  \n\n My heart racing, I hesitated for a moment before opening the message. The words on the screen seemed to leap out at me like ghosts from the grave: 'I am coming for you.' A cold sweat broke out on my forehead as I realized that this was no prank call. Someone had sent me a warning, a signal from darkness itself.  \n\n Panic set in as I scrambled through my phone's contacts, searching for any clue as to who might have sent this ominous message. But there were no leads, only the haunting feeling that I was being watched. The shadows around me seemed to grow longer and darker, as if they too were waiting for something to happen. And then, just as suddenly as it had begun, everything went silent.",
  "word count": 183,
  "dialog": [
    {
      "Meg": "I'm so scared, guys! The novel was super creepy.",
    },
    {
      "Kerry": "Come on, Meg, it's just a story! Don't be such a wimp",
    },
    {
      "Lui":
        "Actually, Kerry has a point. The novel did have some intense moments, but that's what makes it so good.",
    },
    {
      "Billy":
        "I loved how the author built up the suspense. It was like I was right there with the main character, feeling trapped and scared.",
    },
    {
      "Meg":
        "Exactly! And the way the shadows seemed to come alive on the page... chills down my spine just thinking about it",
    },
    {
      "Lui":
        "I think what made this novel stand out was its ability to tap into our deep-seated fears. It's not just a horror story, but an exploration of what lies within ourselves.",
    },
    {
      "Kerry":
        "Yeah, yeah, I get it. But can we talk about the plot twist? Who do you guys think sent that message at the end?",
    },
    {
      "Billy":
        "I was thinking maybe it was a friend or family member, but then again... maybe it was something more sinister",
    },
    {
      "Meg":
        "Ooh, I have an idea! What if it was someone from the main character's past, come back to haunt them?",
    },
    {
      "Lui":
        "Well, whatever it is, it's clear that the author has a knack for keeping us on our toes. Great discussion, guys!",
    },
  ],
  "quiz": [
    {
      "question": "Who sent a text message to the main character?",
      "options": [
        "A friend",
        "A family member",
        "An unknown number",
        "The author's alter ego",
        "Someone from the main character's past",
      ],
      "answer": 2,
    },
    {
      "question": "What did Meg say about the novel?",
      "options": [
        "It was a great mystery.",
        "It was super creepy.",
        "It had some intense moments.",
        "It was an amazing romance.",
        "It was full of action.",
      ],
      "answer": 1,
    },
    {
      "question": "Who said the author built up suspense well?",
      "options": [
        "Kerry",
        "Lui",
        "Billy",
        "Meg",
        "The narrator",
      ],
      "answer": 2,
    },
    {
      "question": "What did Lui think made this novel stand out?",
      "options": [
        "Its ability to tap into our deep-seated fears.",
        "Its romance storyline.",
        "Its action-packed scenes.",
        "Its mystery genre.",
        "Its complex plot.",
      ],
      "answer": 0,
    },
    {
      "question": "Who thought the text message might be from someone's past?",
      "options": [
        "Meg",
        "Kerry",
        "Lui",
        "Billy",
        "The narrator",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Technology",
    "flavor": "Horror",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_4",
  },
};
export default data;
