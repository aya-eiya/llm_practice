import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Tiananmen Square Protests Begin",
    "details":
      "On April 17, 1989, a student-led protest begins at Tiananmen Square in Beijing, China, to commemorate the death of Hu Yaobang and call for democratic reforms.",
  },
  "date": "2026-04-17",
  "title": "A Whisper in the Square",
  "body":
    "The year was 1989, and the air in Beijing was thick with anticipation. Hu Yaobang's passing had left a void in the hearts of the Chinese people, and his legacy lived on through the students who gathered in Tiananmen Square. They came not just to mourn, but to demand change.  \n\n The streets were filled with banners and chants, as protesters demanded democratic reforms and an end to the government's stranglehold on power. Among them was a young woman named Mei, her voice ringing out across the square as she rallied her fellow students. Her words were met with thunderous applause, but also with caution - for in a country where dissent was not tolerated, one misstep could mean disaster.  \n\n As night began to fall, Mei and her friends retreated from the square, their spirits high but their resolve unbroken. They knew that the road ahead would be long and arduous, but they were determined to see it through - for themselves, for China's future, and for the memory of Hu Yaobang.",
  "word count": 171,
  "dialog": [
    {
      "Kerry":
        "I'm so glad we got to read about Tiananmen Square! It's crazy to think about how brave those protesters were.",
    },
    {
      "Meg":
        "Yeah, it's like they were fighting for their own freedom and happiness. I wish the Chinese government would be more open to change...",
    },
    {
      "Lui":
        "Actually, Kerry, the situation was much more complex than that. The students were not just fighting for democracy, but also for economic reform and an end to corruption.",
    },
    {
      "Billy":
        "I know what you mean, Mr. Lui! I've been reading about how Hu Yaobang's legacy lived on through those students. It's amazing how one person can make such a big impact!",
    },
    {
      "Kerry":
        "Exactly! And it's not just about the individual, either. The whole country was changing, and it's interesting to see how different perspectives come into play.",
    },
    {
      "Meg":
        "I agree, but I think we should also consider the perspective of the Chinese government. They must have felt threatened by all these protests and demands for change...",
    },
    {
      "Lui":
        "That's a valid point, Meg. The government was indeed under pressure to maintain control and suppress dissent. But the students' actions ultimately brought attention to their plight and sparked global awareness.",
    },
    {
      "Billy":
        "Wow, I never thought about it that way! It's like the protesters were using nonviolent resistance to challenge the status quo...",
    },
    {
      "Kerry":
        "And it worked! Their efforts led to some significant reforms in China. It's a great example of how ordinary people can make a difference when they stand up for what they believe in.",
    },
  ],
  "quiz": [
    {
      "question": "In what year did the events of Tiananmen Square take place?",
      "options": [
        "1985",
        "1989",
        "1990",
        "1995",
        "2000",
      ],
      "answer": 1,
    },
    {
      "question":
        "What was the main reason for the protests in Tiananmen Square?",
      "options": [
        "Demands for economic reform and an end to corruption.",
        "Protest against Hu Yaobang's passing.",
        "Demand for democratic reforms and an end to the government's stranglehold on power.",
        "All of the above.",
        "None of the above.",
      ],
      "answer": 3,
    },
    {
      "question":
        "Who was the young woman named in the story that rallied her fellow students?",
      "options": [
        "Mei",
        "Kerry",
        "Meg",
        "Lui",
        "Billy",
      ],
      "answer": 0,
    },
    {
      "question":
        "What event sparked global awareness and attention to the plight of the Chinese people?",
      "options": [
        "The protests in Tiananmen Square.",
        "The passing of Hu Yaobang.",
        "The rise of economic reform.",
        "The government's stranglehold on power.",
        "None of the above.",
      ],
      "answer": 0,
    },
    {
      "question":
        "What was one result of the students' efforts in Tiananmen Square?",
      "options": [
        "Significant reforms in China.",
        "Global awareness and attention to their plight.",
        "The end of corruption and economic reform.",
        "All of the above.",
        "None of the above.",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Culture",
    "flavor": "Historical Fiction",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
