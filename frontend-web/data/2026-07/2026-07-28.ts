import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Storming of the Bastille (1789)",
    "details": "A mob stormed the Bastille prison in Paris, France, marking a key event in the French Revolution and a turning point in modern history."
  },
  "date": "2026-07-28",
  "title": "Bastille of Betrayal",
  "body": "The rain poured down like a relentless curse upon the streets of Paris. It was July 14th, 1789, and the people were seething with discontent. The Bastille prison loomed before them, a symbol of the monarchy's tyranny. Pierre Dupont, a young blacksmith, stood at the forefront of the crowd, his eyes blazing with determination.  \n\n As the mob stormed the gates, Pierre's heart pounded in his chest. He had lost friends to the Revolution's early struggles, and now he was ready for vengeance. The sound of shattering glass and splintering wood filled the air as they breached the prison walls. Pierre charged forward, his hammer at the ready.  \n\n But amidst the chaos, a figure emerged from the shadows. It was Marquis de Sade, a notorious aristocrat with secrets to hide. His eyes locked onto Pierre's, and for an instant, they shared a spark of understanding. The Bastille's fall would change history, but at what cost? As the people rejoiced in their hard-won freedom, Pierre wondered if true justice had been served.",
  "word count": 170,
  "dialog": [
    {
      "Kerry": "I'm so glad we got to read this novel, it was like being there in the streets of Paris!"
    },
    {
      "Lui": "Indeed, it's a great example of how historical events can be brought to life through fiction. But what did you think about Pierre's character?"
    },
    {
      "Meg": "I loved Pierre! He was so brave and determined to fight for what he believed in. I wish we could have seen more of his story."
    },
    {
      "Billy": "Yeah, I agree with Meg. And can someone explain why the author chose to include Marquis de Sade? What's his significance?"
    },
    {
      "Lui": "Ah, excellent question, Billy! De Sade was a real-life figure who was known for his... let's say, ' libertine' lifestyle and writings. The author likely included him to add depth to the story and highlight the complexities of the French Revolution."
    },
    {
      "Kerry": "I get it now. But what I don't understand is why Pierre had such a strong reaction to the Bastille's fall. Wasn't it a big deal for everyone?"
    },
    {
      "Meg": "Actually, Kerry, it's true that the people were celebrating their freedom, but Pierre had lost friends in the early struggles of the Revolution. It made his emotions more personal and intense."
    },
    {
      "Billy": "That makes sense. I think what I liked most about this novel was how it showed the human side of history. We don't often get to see that in textbooks or documentaries."
    }
  ],
  "quiz": [
    {
      "question": "On what date was the storming of the Bastille prison?",
      "options": [
        "July 13th, 1789",
        "July 14th, 1789",
        "July 15th, 1789",
        "July 16th, 1789",
        "July 17th, 1789"
      ],
      "answer": 1
    },
    {
      "question": "What was Pierre's occupation?",
      "options": [
        "A blacksmith",
        "A baker",
        "A farmer",
        "A soldier",
        "A teacher"
      ],
      "answer": 0
    },
    {
      "question": "Who emerged from the shadows amidst the chaos at the Bastille?",
      "options": [
        "Marquis de Sade",
        "Pierre Dupont",
        "Kerry",
        "Lui",
        "Meg"
      ],
      "answer": 0
    },
    {
      "question": "Why did Pierre have a strong reaction to the Bastille's fall?",
      "options": [
        "He had lost friends in the early struggles of the Revolution",
        "He was angry about the rain on that day",
        "He wanted to be famous for storming the prison",
        "He was there just for fun",
        "None of the above"
      ],
      "answer": 0
    },
    {
      "question": "How did Billy describe the novel's portrayal of history?",
      "options": [
        "It was boring and not relatable",
        "We don't often get to see that in textbooks or documentaries",
        "I didn't like it because it had too many characters",
        "It made me fall asleep",
        "None of the above"
      ],
      "answer": 1
    }
  ],
  "params": {
    "theme": "Ethics",
    "flavor": "Crime",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1"
    },
    "level": "Level_4"
  }
}
export default data;