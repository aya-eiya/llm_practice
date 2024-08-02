import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The first public school in the United States opens.",
    "details":
      "The first public school in the United States, Boston Latin School, was established on August 15, 1821.",
  },
  "date": "2024-08-15",
  "title": "The Unexpected Student",
  "body":
    "It was a typical Monday morning at Boston Latin School when I first saw him - a student with an unusual interest in the history of the school. He had been sitting alone in the corner, reading a book about the school's founding on August 15, 1821.  \n\n As I approached him, he looked up and smiled. 'Hi,' he said, closing his book. 'I'm Max.' I introduced myself, and we started talking about our shared interest in history. He told me that he had been researching the school's past for months, and that he had even written a paper on the significance of Boston Latin School in American education.  \n\n I was impressed by Max's passion and knowledge, and I asked him if he would like to join our school's History Club. He agreed, and soon we were working together on a project to create a timeline of the school's major events. As we worked, I realized that Max was not only knowledgeable but also kind and dedicated. I felt grateful to have met him, and I knew that our friendship would last long after graduation.",
  "word count": 184,
  "dialog": [
    {
      "Billy":
        "I just finished reading the novel, and I have to say it was amazing! I loved how the protagonist's passion for history brought him together with others.",
    },
    {
      "Meg":
        "I completely agree, Billy! The way the author wove together the different storylines was so engaging. And I loved Max's character - he was so kind and dedicated!",
    },
    {
      "Kerry":
        "Yeah, Max was a great character! But what really stood out to me was the way the novel highlighted the importance of community and friendship. It was such a feel-good story.",
    },
    {
      "Lui":
        "I'm glad you all enjoyed it. As a teacher, I appreciated how the novel showed the impact that one person can have on others through their passions and interests.",
    },
    {
      "Billy":
        "That's so true, Lui! And I loved how the author didn't shy away from tackling tough themes like prejudice and inequality. It was really thought-provoking.",
    },
    {
      "Meg":
        "I know, right? It made me think about my own community and what I can do to make a difference. Thanks for reading it with us, everyone!",
    },
    {
      "Kerry":
        "Definitely! And who knows - maybe we'll start a book club now that we've finished this one.",
    },
    {
      "Lui":
        "That's not a bad idea, Kerry! We could call it the 'Readers' Book Club and make sure to include all of our perspectives and insights.",
    },
  ],
  "quiz": [
    {
      "question": "What was Max's interest in?",
      "options": [
        "Music",
        "History of Boston Latin School",
        "Science",
        "Sports",
        "Art",
      ],
      "answer": 1,
    },
    {
      "question": "What did Max and Billy work on together?",
      "options": [
        "A science project",
        "A history paper",
        "A sports team",
        "A art exhibit",
        "Creating a timeline of the school's major events",
      ],
      "answer": 4,
    },
    {
      "question": "Why was Max impressed by Billy?",
      "options": [
        "He was kind and dedicated",
        "He was knowledgeable about history",
        "He was good at sports",
        "He was talented in art",
        "He was passionate about reading",
      ],
      "answer": 0,
    },
    {
      "question": "What did the teacher, Lui, appreciate about the novel?",
      "options": [
        "The way it tackled tough themes",
        "The way it highlighted community and friendship",
        "The way it showed the impact of one person's passions",
        "The way it wove together storylines",
        "The way it was a feel-good story",
      ],
      "answer": 2,
    },
    {
      "question": "What did Billy think about the novel?",
      "options": [
        "It was boring",
        "It was okay",
        "It was amazing",
        "It was terrible",
        "It was good",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Education",
    "flavor": "Young Adult",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_6",
  },
};
export default data;
