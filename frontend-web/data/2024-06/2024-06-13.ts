import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Invention of the Daguerreotype",
    "details": "On June 7th, which is close to June culedle), Louis-Jacques Mandé Daguerre introduced his invention, the daguerreotype process. The announcement was made by François Arago before the Académie des Sciences of France on January 7, 1839. However, public demonstrations and sales began shortly thereafter. Although it is not precisely on June 13th, this event marks a significant milestone in photography history."
  },
  "date": "Jun 13th",
  "title": "A Glimpse of the Past",
  "body": "It was June 7th, 1839, a day that would change the course of history. Louis-Jacques Mandé Daguerre had just introduced his invention, the daguerreotype process, to the world. As I stood in the midst of the bustling crowd, I couldn't help but feel a sense of wonder and awe at the magical images being revealed before my eyes.  \n\n The soft glow of the camera's mercury vapor lamp illuminated the scene, casting an ethereal light on the subjects. It was as if time itself had been captured, suspended in mid-air for all to see. I watched with rapt attention as the first photographs were displayed, each one a testament to the power of innovation and human ingenuity.  \n\n As I gazed upon the daguerreotypes, my thoughts turned to the countless moments that lay hidden in the annals of history, waiting to be uncovered. The past, once shrouded in mystery, was slowly beginning to reveal its secrets. And it was all thanks to the tireless efforts of pioneers like Daguerre, who dared to dream big and challenge the status quo.  \n\n In that instant, I knew that my own life's work would be dedicated to preserving the stories of our collective past. The daguerreotype process had awakened something deep within me – a sense of purpose and duty to bear witness to the events that shaped our world.",
  "word count": 223,
  "quiz": [
    {
      "question": "How old is Billy?",
      "options": [
        "10 years old",
        "11 years old",
        "12 years old",
        "9 years old",
        "8 years old"
      ],
      "answer": 1
    },
    {
      "question": "What age group does Kerry belong to?",
      "options": [
        "6-10 years old",
        "11-13 years old",
        "14-16 years old",
        "17+ years old",
        "Under 5 years old"
      ],
      "answer": 1
    },
    {
      "question": "Who is the teacher in the story?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "None of them"
      ],
      "nswer": 3
    },
    {
      "question": "What type of setting does the novel take place in?",
      "options": [
        "A modern city school",
        "An ancient castle",
        "A space station",
        "An old mansion",
        "On a deserted island"
      ],
      "answer": 3
    },
    {
      "question": "What is the primary relationship depicted in this dialogue?",
      "options": [
        "Friends hanging out after school",
        "Teacher scolding students for misbehavior",
        "Students and teacher discussing a project",
        "A family dinner conversation",
        "Colleagues planning a surprise party"
      ],
      "answer": 2
    }
  ],
  "fulldate": "2024-06-13",
  "theme": "Photography",
  "flavor": "Historical Romance",
  "level": "Level_6",
  "models": {
    "main": "phi3:14b",
    "novel": "llama3"
  },
  "steps": [
    "event",
    "novel",
    "conversation",
    "quiz",
    "make"
  ],
  "temp_files": [
    "/tmp/.research_event_2024-06-13.prompt",
    "/tmp/.gen_novel_2024-06-13.prompt",
    "/tmp/.gen_quiz_2024-06-13.prompt",
    "/tmp/.gen_event_2024-06-13.raw.txt",
    "/tmp/.gen_novel_2024-06-13.raw.txt",
    "/tmp/.gen_conversation_2024-06-13.raw.txt",
    "/tmp/.gen_quiz_2024-06-13.raw.txt",
    "/tmp/.gen_params_2024-06-13.json",
    "/tmp/.gen_event_2024-06-13.json",
    "/tmp/.gen_novel_2024-06-13.json",
    "/tmp/.gen_conversation_2024-06-13.json",
    "/tmp/.gen_quiz_2024-06-13.json"
  ],
  "params": {
    "theme": null,
    "flavor": null,
    "models": null,
    "level": null
  }
}
export default data;