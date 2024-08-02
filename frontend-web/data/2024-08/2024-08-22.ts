import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Landing on Moon",
    "details":
      'On July 20, 1969, NASA\'s Apollo 11 mission successfully landed astronauts Neil Armstrong and Edwin "Buzz" Aldrin on the surface of the Moon, marking a historic achievement in space exploration.',
  },
  "date": "2024-08-22",
  "title": "The Moonlit Journey",
  "body":
    "It was July 20, 1969, and I was just a young boy watching in awe as the Apollo 11 mission successfully landed on the moon. The world had been abuzz with excitement for months, but nothing could have prepared me for the sense of wonder that washed over me as Neil Armstrong stepped out onto the lunar surface.  \n\n As I sat in front of the television, my eyes glued to the screen, I felt a shiver run down my spine. The grainy black and white images seemed to leap off the screen, transporting me to a place where gravity was just a distant memory. I couldn't help but feel a sense of pride and awe at the incredible feat that had been achieved.  \n\n But it wasn't just the technical marvel of the moon landing that struck me - it was the sense of possibility that it represented. If we could put a man on the moon, what else could we achieve? What other seemingly impossible challenges could we overcome? The moon landing was more than just a historic event - it was a reminder that with determination and courage, anything is possible.",
  "word count": 192,
  "dialog": [
    {
      "Billy":
        "Wow, I'm still in awe after reading that passage about the moon landing!",
    },
    {
      "Kerry":
        "I know, right? It's crazy to think about how far we've come since then! I mean, if they could put a man on the moon, what else can't we do?",
    },
    {
      "Meg":
        "I love how the author described the sense of wonder and possibility that came with the moon landing. It really makes you think about the potential for human achievement!",
    },
    {
      "Lui":
        "Exactly! The moon landing was a historic event that showcased human ingenuity and determination. It's a reminder that we can overcome even the most seemingly impossible challenges if we work together and strive for excellence.",
    },
    {
      "Billy":
        "I love how you put it, Lui. And I think what really stuck with me from this passage is the idea that anything is possible if we set our minds to it. It's a really empowering message!",
    },
    {
      "Kerry":
        "Yeah, and it's not just about the moon landing. It's about all the other achievements we've made as humans. From curing diseases to exploring space, we're capable of amazing things when we work together!",
    },
    {
      "Meg":
        "I think that's what I love most about this passage - it's not just a historical event, but a reminder of our potential and capabilities. It's inspiring to think about what we can achieve in the future!",
    },
  ],
  "quiz": [
    {
      "question": "What event was being watched on TV by Billy?",
      "options": [
        "The first human walking on Mars",
        "The Apollo 11 mission successfully landing on the moon",
        "The launch of the International Space Station",
        "The first American in space",
        "The discovery of Pluto",
      ],
      "answer": 1,
    },
    {
      "question": "What was Billy's reaction to watching the event?",
      "options": [
        "He felt sad and disappointed",
        "He felt proud and amazed",
        "He felt angry and frustrated",
        "He felt happy and excited",
        "He felt bored and uninterested",
      ],
      "answer": 1,
    },
    {
      "question":
        "What did Billy think about the possibility of what humans could achieve?",
      "options": [
        "That we could only reach the moon",
        "That we couldn't put a man on the moon",
        "That we could overcome any challenge if we tried",
        "That we could only explore space with robots",
        "That we had already achieved everything possible",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was Kerry's reaction to Billy's passage about the moon landing?",
      "options": [
        "He felt angry that people were still discussing it after all these years",
        "He thought it was boring and unnecessary",
        "He loved how it made him think about human achievement",
        "He was disappointed that it wasn't more exciting",
        "He didn't have any reaction",
      ],
      "answer": 2,
    },
    {
      "question": "What did Lui say to Billy about the moon landing?",
      "options": [
        "It was a reminder of our limitations as humans",
        "It showed us how far we've come since then",
        "It was a historic event that showcased human ingenuity and determination",
        "It was a waste of money and resources",
        "It wasn't important at all",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Historical Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_6",
  },
};
export default data;
