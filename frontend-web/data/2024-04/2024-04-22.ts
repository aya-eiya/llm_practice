import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Edmund Pettus Bridge March",
    "details":
      "On April 22, 1965, a group of African American civil rights activists led by Hosea Williams and John Lewis marched from Selma to Montgomery, Alabama in an effort to gain voting rights for African Americans. The march was violently attacked by state troopers, resulting in many injuries and arrests.",
  },
  "date": "2024-04-22",
  "title": "A March for Justice",
  "body":
    "In a world where technology has advanced beyond our wildest dreams, but racism still persists, a group of brave individuals embark on a march to fight for their rights. Led by a charismatic leader named Hosea, the marchers set out from Selma to Montgomery, Alabama, determined to bring attention to the injustices they face.  As they walk, the group is met with resistance and violence at every turn, but they refuse to be deterred. State troopers attack them, resulting in many injuries and arrests. Despite the hardships they face, the marchers continue their journey, spreading a message of hope and equality.  Through this harrowing experience, they discover that technology can be used for good as well as evil, and that it is up to them to use it wisely. In the end, their efforts pay off as they successfully bring about change and pave the way for a brighter future.",
  "word count": 150,
  "dialog": [
    {
      "Billy":
        "I'm still trying to wrap my head around how technology can be used for good or evil. It's mind-blowing!",
    },
    {
      "Meg":
        "I know what you mean, Billy! I loved how the author showed that even with all this advanced tech, people can still be cruel and biased.",
    },
    {
      "Kerry":
        "Yeah, it's like, just because we have super smart stuff doesn't mean we're automatically better. It's up to us to use our brains wisely.",
    },
    {
      "Lui":
        "Well said, Kerry. As educators, we need to make sure students understand the power of technology and how to wield it responsibly.",
    },
    {
      "Billy":
        "I think that's what I loved most about this novel - it showed that even in the face of adversity, people can come together and make a difference.",
    },
    {
      "Meg":
        "Exactly! And I loved how the author didn't shy away from tough topics like racism and injustice. It was so powerful.",
    },
    {
      "Kerry":
        "Yeah, it's not always easy to read about, but it's important that we do. We need to learn from history and use those lessons to create a better future.",
    },
    {
      "Lui":
        "Well, I think this novel did just that - it inspired us to take action and make a positive impact in our own community.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was the main goal of the march led by Hosea in the novel?",
      "options": [
        "To protest against technology",
        "To fight for racial equality",
        "To celebrate a technological achievement",
        "To promote a peaceful movement",
        "To criticize a government policy",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was one of the challenges faced by the marchers in the novel?",
      "options": [
        "They got lost on the way to Montgomery",
        "State troopers attacked them",
        "It rained heavily throughout their journey",
        "Some marchers were too tired to continue",
        "The group ran out of food",
      ],
      "answer": 1,
    },
    {
      "question": "What was Billy's main concern about technology?",
      "options": [
        "That it was too powerful",
        "That it was not advanced enough",
        "That it could be used for good or evil",
        "That it was only used by a select few",
        "That it didn't exist",
      ],
      "answer": 2,
    },
    {
      "question": "What did the novel show about technology?",
      "options": [
        "That it's always positive",
        "That it can be used for both good and evil",
        "That it's only useful for a select few",
        "That it doesn't exist",
        "That it's not important",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did the group of marchers discover through their experience?",
      "options": [
        "That technology is useless",
        "That it can be used to promote peace",
        "That it's up to them to use it wisely",
        "That they're not capable of change",
        "That they should just give up",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Politics",
    "flavor": "Science",
    "models": { "main": "llama", "novel": "llava" },
    "level": "Level_5",
  },
};
export default data;
