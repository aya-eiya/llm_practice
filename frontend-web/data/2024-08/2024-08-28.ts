import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "The first teacher training seminar was held at OISE (Ontario Institute for Studies in Education) in Toronto, Canada on August 28th.",
    "details":
      "This historic event marked a significant milestone in education history as it aimed to improve teaching practices and provide educators with the necessary tools to enhance student learning outcomes.",
  },
  "date": "2024-08-28",
  "title": "The Lost Diary",
  "body":
    "I was rummaging through my grandmother's attic when I stumbled upon an old diary hidden away in a trunk. It belonged to my grandfather, who had passed away when I was just a kid. As I flipped through the pages, I found myself lost in his stories and memories.   \n\n The entries were from his time as a teacher at OISE (Ontario Institute for Studies in Education) back in the 80s. He wrote about attending the first teacher training seminar on August 28th, 1980, which marked a significant milestone in education history. I couldn't help but feel a sense of pride knowing that my grandfather was part of something so important.   \n\n As I continued reading, I realized that the diary was more than just a collection of memories – it was a window into his life as an educator and a person. His stories inspired me to pursue my own passion for teaching, and I felt a sense of connection to him that I never knew existed. The lost diary had found its way back to me, and I was grateful for the journey it took me on.",
  "word count": 187,
  "dialog": [
    {
      "Kerry":
        "I just finished reading the novel about Billy's grandfather's diary, and I have to say, it was really interesting!",
    },
    {
      "Meg":
        "I loved how the author wove together stories from Billy's grandfather's past with his own experiences as a teacher. It felt like I was right there with him.",
    },
    {
      "Lui":
        "As an educator, I appreciated how the novel highlighted the importance of teachers in shaping young minds. It's a reminder that we make a difference in our students' lives.",
    },
    {
      "Billy":
        "I never knew my grandfather was so passionate about teaching! He always seemed like just a regular guy to me, but now I see him as this amazing educator who inspired countless people.",
    },
    {
      "Kerry":
        "I'm with Billy on that. It's cool to see how our family members can have such a big impact on the world, even if we don't always realize it at first.",
    },
    {
      "Meg":
        "I think what I loved most about this novel was how it showed us that everyone has stories and experiences worth sharing. It made me feel more connected to my own family history.",
    },
    {
      "Lui":
        "As a teacher, I've seen firsthand how students can grow and develop as they learn from their own experiences and those of others. This novel is a great reminder of the power of education and community.",
    },
    {
      "Billy":
        "I'm so glad we got to read this novel together! It's made me think about my own place in the world and how I can make a difference, just like Billy's grandfather did.",
    },
  ],
  "quiz": [
    {
      "question": "What was Billy's grandfather doing in his diary?",
      "options": [
        "Working as a businessman",
        "Teaching at OISE",
        "Cooking for his family",
        "Traveling the world",
        "Playing sports",
      ],
      "answer": 1,
    },
    {
      "question":
        "When did Billy's grandfather attend the first teacher training seminar?",
      "options": [
        "August 27th, 1980",
        "August 28th, 1975",
        "August 28th, 1980",
        "August 29th, 1981",
        "August 30th, 1982",
      ],
      "answer": 2,
    },
    {
      "question": "What inspired Billy to pursue his passion for teaching?",
      "options": [
        "His grandfather's business stories",
        "The importance of teacher training seminars",
        "His own experiences as a student",
        "The diary of his grandfather",
        "None of the above",
      ],
      "answer": 3,
    },
    {
      "question":
        "Who appreciated how the novel highlighted the importance of teachers?",
      "options": [
        "Kerry",
        "Meg",
        "Lui",
        "Billy",
        "All of the above",
      ],
      "answer": 2,
    },
    {
      "question":
        "What did Billy realize about his grandfather after reading the diary?",
      "options": [
        "He was just a regular guy",
        "He was passionate about teaching and had a big impact on people's lives",
        "He was only interested in business",
        "He was never involved in education",
        "None of the above",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Education",
    "flavor": "Young Adult",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_5",
  },
};
export default data;
