import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Transcontinental Railroad Opens",
    "details":
      "The First Transcontinental Railroad, built by Union Pacific and Central Pacific Railroads, officially opens on May 10, 1869, after six years of construction. The railroad connects the East Coast to the West Coast of the United States.",
  },
  "date": "2025-03-23",
  "title": "Beyond The Transcontinental Gate",
  "body":
    "In the year 2154, humanity had finally achieved what was thought to be impossible – a transcontinental tunnel that connected the East and West Coasts of the United States. The tunnel, named 'The Great Bridge,' was a marvel of modern engineering, allowing for effortless travel between the two coasts in mere minutes.  \n\n But with great power comes great responsibility. As people began to use The Great Bridge, strange occurrences started to happen. People would disappear while traveling through the tunnel, only to reappear on the other side with no memory of their journey. At first, it was thought to be just a glitch in the system, but as more and more people went missing, it became clear that something was very wrong.  \n\n The government was quick to cover up the incident, citing 'technical difficulties' as the reason for the disappearances. But a small group of rebels, led by a young woman named Maya, were determined to get to the bottom of things. They snuck into the tunnel, avoiding security patrols and making their way deeper into the heart of The Great Bridge.",
  "word count": 182,
  "dialog": [
    {
      "Meg":
        "I'm still trying to wrap my head around the idea of a transcontinental tunnel. It's like something out of a science fiction movie!",
    },
    {
      "Kerry":
        "Yeah, and what's with all these people disappearing? It's so creepy!",
    },
    {
      "Lui":
        "Well, we should be careful not to jump to conclusions. There might be a logical explanation for the disappearances.",
    },
    {
      "Billy":
        "But what if it's not just logic? What if there's something more to it?",
    },
    {
      "Meg": "Like what? You think it's supernatural or something?",
    },
    {
      "Kerry":
        "Ha! Yeah, maybe we should start investigating some paranormal activity!",
    },
    {
      "Lui":
        "Let's not get ahead of ourselves. We need to gather more information before drawing any conclusions.",
    },
    {
      "Billy":
        "But what if the government is hiding something? We know they're capable of covering up anything...",
    },
    {
      "Meg":
        "I don't know...it just feels like there's more to this story than we're being told. Like, what really happens in the tunnel?",
    },
    {
      "Kerry":
        "Dude, I'm getting chills just thinking about it. Maybe we should sneak into the tunnel and see for ourselves...",
    },
  ],
  "quiz": [
    {
      "question": "What is the name of the transcontinental tunnel?",
      "options": [
        "The Great Bridge",
        "The Transcontinental Tunnel",
        "The East-West Tunnel",
        "The America's Tunnel",
        "The United States' Tunnel",
      ],
      "answer": 0,
    },
    {
      "question": "What happens to people who travel through the tunnel?",
      "options": [
        "They get lost on the other side",
        "They disappear and reappear with no memory of their journey",
        "They arrive at their destination safely",
        "They are transported to a different dimension",
        "They experience technical difficulties",
      ],
      "answer": 1,
    },
    {
      "question": "Who is leading a group of rebels to investigate the tunnel?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "Maya",
      ],
      "answer": 3,
    },
    {
      "question": "What might be causing the disappearances in the tunnel?",
      "options": [
        "A supernatural force",
        "A glitch in the system",
        "The government's cover-up",
        "A logical explanation",
        "All of the above",
      ],
      "answer": 4,
    },
    {
      "question":
        "What should Billy, Kerry, Meg, and Lui do to get to the bottom of things?",
      "options": [
        "Believe the government's explanation",
        "Sneak into the tunnel to investigate",
        "Talk to more people about the disappearances",
        "Wait for more information before drawing conclusions",
        "Do nothing",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Engineering",
    "flavor": "Science Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
