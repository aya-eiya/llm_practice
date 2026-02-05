import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Public School Opens",
    "details":
      "In Boston, Massachusetts, the first public school system opens its doors on February 16, 1635.",
  },
  "date": "2026-02-16",
  "title": "The Boston Dreamers",
  "body":
    "In the heart of colonial America, young Eliza, a curious 9-year-old, lived in Boston. Her days were filled with chores and stories from her grandfather, a sailor who'd voyaged to distant lands.  \n\n One crisp morning, Eliza heard whispers of an extraordinary event - the opening of the first public school. She was fascinated! This wasn't just any school; it promised education for all, free from wealth or status.  \n\n The day arrived, and Eliza, along with other eager children, walked through the grand doors. Inside, she found classrooms filled with desks and books, a world of knowledge awaiting her. She learned to form sentences, talk about past events, and predict future happenings - all under the watchful eyes of stern but kind teachers.  \n\n Eliza's favorite subject was grammar. She loved constructing sentences, comparing things, and even expressing possibilities. Her favorite phrase became 'I might', a tool to dream about distant lands her grandfather had told her about.  \n\n As she grew older, Eliza's world expanded beyond Boston. She used grammar to describe the vast oceans, the bustling cities, and the diverse people she encountered. The school had ignited in her a thirst for knowledge, turning her into a lifelong learner.",
  "word count": 198,
  "dialog": [
    {
      "Billy":
        "The novel was fascinating! I especially enjoyed the historical context. Did you know that public schools were first established in Boston during this period?",
    },
    {
      "Kerry":
        "I loved how Eliza used grammar to bring her stories to life. It reminded me of the LEGO worlds I build, with characters and scenes all described through detailed sentences.",
    },
    {
      "Meg":
        "Eliza's passion for learning really resonated with me. Her curiosity about distant lands and cultures is something I can relate to as a reader and writer. It inspired me to think about how my own writing could transport readers to different worlds.",
    },
    {
      "Lui":
        "It's wonderful to see how the novel highlights the importance of education for all, regardless of social status. In my history classes, we discuss how access to education has shaped societies and individuals throughout time.",
    },
    {
      "Billy":
        "The novel got me thinking about the scientific method too. Eliza was curious about her grandfather's stories, asking questions and learning more. It's similar to how scientists observe, ask questions, and experiment to gain knowledge.",
    },
    {
      "Kerry":
        "I agree, Billy! And just like Eliza, we can use what we learn to challenge misconceptions or unfair practices in our own time. For instance, using our knowledge about fairness to argue against discrimination.",
    },
    {
      "Meg":
        "Absolutely, Kerry. Education empowers us to dream and create, as Eliza did with her 'I might' phrase. It's a reminder that with learning comes the potential for change and growth, both individually and collectively.",
    },
    {
      "Lui":
        "Well said, Meg. The novel beautifully illustrates how education can spark curiosity, foster critical thinking, and inspire action. These are essential skills in today's world.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was Eliza's age when she first attended the public school?",
      "options": [
        "8",
        "9",
        "10",
        "12",
        "15",
      ],
      "answer": 0,
    },
    {
      "question": "Which subject did Eliza enjoy the most in school?",
      "options": [
        "Mathematics",
        "History",
        "Science",
        "Grammar",
        "Art",
      ],
      "answer": 3,
    },
    {
      "question": "What was Eliza's grandfather's profession?",
      "options": [
        "Sailor",
        "Farmer",
        "Blacksmith",
        "Teacher",
        "Merchant",
      ],
      "answer": 0,
    },
    {
      "question": "How did Eliza use grammar in her life?",
      "options": [
        "She used it to describe distant lands and diverse people.",
        "She used it to build LEGO worlds.",
        "She used it to predict future events.",
        "All of the above",
        "None of the above",
      ],
      "answer": 0,
    },
    {
      "question": "What did Eliza's passion for learning inspire in others?",
      "options": [
        "To become lifelong learners themselves.",
        "To question misconceptions and unfair practices.",
        "To build LEGO worlds.",
        "To dream and create their own stories.",
        "All of the above",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Education",
    "flavor": "Young Adult",
    "models": {
      "main": "granite3.1-dense",
      "novel": "granite3.1-dense",
    },
    "level": "Level_3",
  },
};
export default data;
