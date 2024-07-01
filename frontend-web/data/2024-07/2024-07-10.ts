import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "One Room Schoolhouse Established",
    "details":
      "On July 10th, 1840, the first one-room schoolhouse was established in New York State, marking a significant milestone in education history as it provided access to education for rural communities and paved the way for future educational reforms.",
  },
  "date": "2024-07-10",
  "title": "The One-Room Schoolhouse",
  "body":
    "It was a hot summer day in July 1840 when the first one-room schoolhouse was established in New York State. The schoolhouse was a small, humble building where children from rural communities could come to learn and grow. The teacher, Mrs. Johnson, was dedicated to her students and worked tirelessly to ensure they received a quality education.  \n\n The one-room schoolhouse was more than just a place for learning - it was a symbol of hope and opportunity. For many children living in rural areas, the chance to attend school was limited due to distance or financial constraints. The one-room schoolhouse brought education right to their doorstep, providing them with a brighter future.  \n\n As the students filed into the schoolhouse each day, they were greeted by Mrs. Johnson's warm smile and the sound of chalk scratching on the blackboard. The room was filled with laughter and learning as the children worked through their lessons, their minds expanding with every new concept.",
  "word count": 160,
  "dialog": [
    {
      "Billy":
        "I never knew that education was so important back then. It's amazing how much of a difference it made in those students' lives!",
    },
    {
      "Kerry":
        "Totally agree! And I love how Mrs. Johnson was dedicated to her students. She must have been an awesome teacher!",
    },
    {
      "Meg":
        "I think what really stood out to me was the sense of community that formed in that one-room schoolhouse. It's like they were all working together towards a common goal.",
    },
    {
      "Lui":
        "As someone who has spent their career teaching, I can attest to the importance of these early education experiences. It sets the foundation for future learning and personal growth.",
    },
    {
      "Billy":
        "And it's not just about the education itself, but also about the relationships formed between students and teachers. Those connections are crucial for a child's development!",
    },
    {
      "Kerry":
        "I love how Mrs. Johnson made learning fun! I bet those kids looked forward to coming to school every day.",
    },
    {
      "Meg":
        "I think what I find most inspiring is how that small schoolhouse was a beacon of hope and opportunity in rural communities. It shows that even with limited resources, education can still thrive.",
    },
    {
      "Lui":
        "As we reflect on this story, let's remember the impact that dedicated educators like Mrs. Johnson have had – and continue to have – on shaping young minds and building brighter futures.",
    },
  ],
  "quiz": [
    {
      "question": "When was the first one-room schoolhouse established?",
      "options": [
        "July 1840",
        "January 1840",
        "June 1839",
        "March 1841",
        "September 1838",
      ],
      "answer": 0,
    },
    {
      "question": "What was Mrs. Johnson's role in the one-room schoolhouse?",
      "options": [
        "Principal",
        "Teacher",
        "Janitor",
        "Counselor",
        "Assistant",
      ],
      "answer": 1,
    },
    {
      "question": "What did the one-room schoolhouse symbolize?",
      "options": [
        "A place for learning only",
        "Hope and opportunity",
        "Friendship and fun",
        "Education and growth",
        "Community and bonding",
      ],
      "answer": 1,
    },
    {
      "question": "How did Mrs. Johnson make learning fun for the students?",
      "options": [
        "By making them do extra work",
        "By telling them stories",
        "By singing songs with them",
        "By using chalk on the blackboard",
        "None of the above",
      ],
      "answer": 2,
    },
    {
      "question": "What was Lui's profession, according to the story?",
      "options": [
        "Teacher",
        "Student",
        "Principal",
        "Counselor",
        "Retired person",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Education",
    "flavor": "Young Adult",
    "models": {
      "main": "llama3",
      "novel": "llama3",
    },
    "level": "Level_5",
  },
};
export default data;
