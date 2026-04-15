import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Pentagon Papers Published",
    "details":
      "The New York Times begins publishing a series of classified documents known as the Pentagon Papers, detailing US involvement in Vietnam from 1945 to 1967.",
  },
  "date": "2026-04-25",
  "title": "The Verdict of Deception",
  "body":
    "The courtroom was abuzz with anticipation as the trial of Daniel Ellsberg, the mastermind behind the Pentagon Papers, began. The prosecution argued that Ellsberg's actions were a grave breach of national security, while the defense maintained that he had acted out of patriotic duty to expose the truth about the Vietnam War.  \n\n As the trial progressed, it became clear that the government had gone to great lengths to silence Ellsberg and intimidate him into silence. The CIA had been involved in a complex web of deception, using their vast resources to discredit Ellsberg and undermine his credibility.  \n\n The judge's decision would have far-reaching implications for the country. Would it uphold the principles of free speech and government accountability, or would it perpetuate the culture of secrecy that had plagued the nation? The jury deliberated for hours, weighing the evidence and debating the finer points of law. Finally, after weeks of suspense, they returned their verdict: not guilty. The courtroom erupted into cheers as Ellsberg and his team celebrated their hard-won victory.",
  "word count": 171,
  "dialog": [
    {
      "Billy":
        "Wow, I loved how the novel showed the importance of free speech and government accountability!",
    },
    {
      "Kerry":
        "I know, right? And it's crazy to think about what would have happened if Ellsberg hadn't leaked those papers.",
    },
    {
      "Meg":
        "I'm so inspired by Daniel Ellsberg's courage. I can only imagine how hard it must have been for him to go against the government like that.",
    },
    {
      "Lui":
        "Yes, and it's a great lesson in the power of individual actions to bring about change. But what did you all think of the way the government tried to silence Ellsberg?",
    },
    {
      "Billy":
        "It was so unfair! They used all these underhanded tactics to discredit him and undermine his credibility.",
    },
    {
      "Kerry":
        "I know, it's like they thought they could just bully their way out of it. But in the end, justice prevailed, right?",
    },
    {
      "Meg":
        "Definitely. And I loved how the novel highlighted the importance of staying true to one's values, even when it's hard.",
    },
    {
      "Lui":
        "Well said, Meg. It's always a reminder that our actions have consequences and that we must stand up for what we believe in.",
    },
  ],
  "quiz": [
    {
      "question": "What was Daniel Ellsberg's role in the story?",
      "options": [
        "The judge",
        "The prosecution lawyer",
        "The mastermind behind the Pentagon Papers",
        "A CIA agent",
        "The defendant",
      ],
      "answer": 2,
    },
    {
      "question": "Why did the government try to silence Daniel Ellsberg?",
      "options": [
        "He was a whistleblower",
        "He leaked confidential information",
        "They wanted to discredit him",
        "All of the above",
        "None of the above",
      ],
      "answer": 3,
    },
    {
      "question": "What was the outcome of the trial?",
      "options": [
        "Guilty verdict",
        "Not guilty verdict",
        "The case was dismissed",
        "A retrial was ordered",
        "No verdict was reached",
      ],
      "answer": 1,
    },
    {
      "question":
        "Who were some of the people discussing the story in the dialogue section?",
      "options": [
        "Billy, Kerry, Meg, Lui",
        "Daniel Ellsberg, the judge, the prosecutor",
        "The CIA agents",
        "The defense team",
        "The media",
      ],
      "answer": 0,
    },
    {
      "question": "What was one of the implications of the trial's outcome?",
      "options": [
        "It would uphold the principles of free speech and government accountability",
        "It would perpetuate the culture of secrecy that had plagued the nation",
        "It would silence all whistleblowers in the future",
        "It would result in a significant increase in government transparency",
        "None of the above",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Politics",
    "flavor": "Courtroom Drama",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_8",
  },
};
export default data;
