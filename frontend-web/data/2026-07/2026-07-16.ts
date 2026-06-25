import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The World Wide Web Goes Public",
    "details": "On July 16, 1991, CERN, led by Tim Berners-Lee, made the World Wide Web available to anyone on the Internet."
  },
  "date": "2026-07-16",
  "title": "The World Wide Web: A Revolution in Communication",
  "body": "On August 6, 1991, a groundbreaking event took place at CERN, marking the beginning of a new era in human communication. Tim Berners-Lee, a British computer scientist, had invented the World Wide Web (WWW), a system that would revolutionize the way people access and share information.  \n\n The idea was simple yet profound: to create a network of interconnected documents that could be accessed by anyone with an internet connection. This innovation was not only a technological marvel but also a social phenomenon, enabling people from diverse backgrounds to connect and collaborate on a global scale. As Berners-Lee envisioned, the web would 'make it easier for experts in one field to share information or work together with others'.  \n\n The impact of the World Wide Web has been transformative, transforming the way we live, work, and interact with each other. It has enabled rapid dissemination of knowledge, facilitated global communication, and opened up new opportunities for education, commerce, and social engagement. Today, as we navigate this digital landscape, it is essential to appreciate the pioneering spirit of Berners-Lee and his vision for a more interconnected world.",
  "word count": 184,
  "dialog": [
    {
      "Billy": "I loved how they explained the World Wide Web in such detail! It's like I'm reliving history all over again."
    },
    {
      "Lui": "Yes, Tim Berners-Lee is a pioneer, and his invention has changed the world. But let's not forget the social implications of this innovation."
    },
    {
      "Meg": "I know, right? The way they described how people from different backgrounds could connect and collaborate... it's like magic!"
    },
    {
      "Kerry": "Magic or not, it's a fact that the web has opened up new opportunities for education, commerce, and social engagement. We should be careful about how we use this power."
    },
    {
      "Billy": "That's so true! I mean, think about all the information we have access to now... it's incredible!"
    },
    {
      "Lui": "Incredible indeed. But with great power comes great responsibility. Let's make sure to use these tools wisely."
    },
    {
      "Meg": "I'm just glad I can learn so much online and get inspired by other people's ideas. It's like having the world at my fingertips!"
    },
    {
      "Kerry": "Yeah, but let's not forget that there are still many people who don't have access to these opportunities. We need to think about how we can make things more equitable."
    }
  ],
  "quiz": [
    {
      "question": "When was the World Wide Web invented?",
      "options": [
        "1990",
        "1991",
        "1995",
        "2000",
        "2010"
      ],
      "answer": 1
    },
    {
      "question": "Who invented the World Wide Web?",
      "options": [
        "Lui",
        "Billy",
        "Tim Berners-Lee",
        "Meg",
        "Kerry"
      ],
      "answer": 2
    },
    {
      "question": "What was Tim Berners-Lee's vision for the web?",
      "options": [
        "to make it easier for experts in one field to share information",
        "to facilitate global communication",
        "to enable rapid dissemination of knowledge",
        "all of the above",
        "none of the above"
      ],
      "answer": 0
    },
    {
      "question": "What is something that people from diverse backgrounds can do on the web?",
      "options": [
        "buy and sell goods online",
        "learn new languages",
        "connect and collaborate with others",
        "watch movies",
        "play video games"
      ],
      "answer": 2
    },
    {
      "question": "Who said 'it's like magic'?",
      "options": [
        "Billy",
        "Lui",
        "Meg",
        "Kerry",
        "None of the above"
      ],
      "answer": 2
    }
  ],
  "params": {
    "theme": "Technology",
    "flavor": "Academic Essay",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1"
    },
    "level": "Level_6"
  }
}
export default data;