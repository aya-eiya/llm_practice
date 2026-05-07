import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "World Wide Web is Launched",
    "details":
      "The World Wide Web (WWW) was launched to the public on May 4, 1991, by CERN, a European Organization for Nuclear Research",
  },
  "date": "2026-05-04",
  "title": "The Web of Ideas",
  "body":
    "The World Wide Web was launched on May 4, 1991, marking a significant milestone in the history of communication. This invention enabled people to access and share information globally, revolutionizing the way we interact with each other. As the web continues to grow, it has become an essential tool for learning, socializing, and accessing knowledge.  \n\n The impact of the World Wide Web on education has been profound. With online resources, students can now access a vast array of educational materials, including e-books, videos, and interactive simulations. This has made learning more engaging and accessible, especially for those who may not have had equal opportunities in traditional classroom settings.  \n\n However, the web also presents challenges, particularly in terms of information overload and online etiquette. Students must learn to navigate these complexities effectively, developing critical thinking skills to distinguish between credible and unreliable sources. Furthermore, they need to understand how to use digital tools responsibly, respecting others' intellectual property and maintaining online civility.  \n\n In conclusion, the World Wide Web has transformed the way we live, work, and learn. As technology continues to evolve, it is essential for students to develop the skills necessary to harness its potential effectively. By doing so, they will be equipped to thrive in an increasingly interconnected world.",
  "word count": 210,
  "dialog": [
    {
      "Billy": "I love how the World Wide Web has changed our lives!",
    },
    {
      "Lui":
        "Indeed, Billy. The web has brought so much convenience and information to our fingertips.",
    },
    {
      "Meg":
        "But it's not all good. I think we need to be careful about what we share online.",
    },
    {
      "Kerry":
        "I agree with Meg! We have to be mindful of our digital footprints.",
    },
    {
      "Billy":
        "Yeah, but the web has also opened up so many opportunities for learning and connection.",
    },
    {
      "Lui":
        "That's true. The web has leveled the playing field in terms of access to information.",
    },
    {
      "Meg":
        "I've been reading about the impact of the web on education, and it's fascinating!",
    },
    {
      "Kerry":
        "Me too! I think it's cool how we can access all sorts of educational resources online.",
    },
  ],
  "quiz": [
    {
      "question": "When was the World Wide Web launched?",
      "options": [
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
      ],
      "answer": 1,
    },
    {
      "question": "What impact has the web had on education?",
      "options": [
        "It has made learning more difficult and inaccessible.",
        "It has enabled students to access a vast array of educational materials online.",
        "It has not affected education at all.",
        "It has only improved teaching methods.",
        "It has reduced the need for textbooks.",
      ],
      "answer": 1,
    },
    {
      "question":
        "What skill do students need to develop to use digital tools responsibly?",
      "options": [
        "Critical thinking skills to distinguish between credible and unreliable sources.",
        "The ability to type quickly on a keyboard.",
        "The skill of writing long essays by hand.",
        "The talent for drawing complex diagrams.",
        "The ability to recite poetry from memory.",
      ],
      "answer": 0,
    },
    {
      "question":
        "According to the dialogue, what is one challenge presented by the web?",
      "options": [
        "Information overload and online etiquette.",
        "Access to educational resources.",
        "Balancing screen time with outdoor activities.",
        "Managing a large social network.",
        "Keeping up with the latest fashion trends.",
      ],
      "answer": 0,
    },
    {
      "question":
        "What has the web done for those who may not have had equal opportunities in traditional classroom settings?",
      "options": [
        "Provided them with more access to resources, making learning easier and more engaging.",
        "Given them fewer choices of subjects to study.",
        "Kept them from being able to learn at all.",
        "Reduced the number of scholarships available.",
        "Made it harder for them to get a good grade.",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Technology",
    "flavor": "Academic Essay",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
