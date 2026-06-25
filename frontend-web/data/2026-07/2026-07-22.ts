import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The First Modern Olympic Games Were Documented",
    "details": "On July 22, 1896, French photographer Baron de Hohenlohe took a series of photographs to document the first modern Olympic Games in Athens, Greece."
  },
  "date": "2026-07-22",
  "title": "Love in the Olympic Glow",
  "body": "Athens was abuzz with excitement as I, a young artist, made my way to the newly opened stadium for the first modern Olympic Games. The air was electric with anticipation, and I couldn't help but feel a sense of wonder at the grandeur of it all.  \n\n As I set up my easel to capture the moment on canvas, I caught sight of him - a tall, dark-haired stranger with piercing blue eyes that seemed to see right through me. We exchanged a brief smile, and I felt a spark of attraction that left me breathless.  \n\n Baron de Hohenlohe, the French photographer who had been tasked with documenting the event, approached us with a friendly nod. 'Ah, mes amis, let's capture this moment in time, shall we?' he exclaimed, snapping a photograph that would be etched in my memory forever. And as I gazed into his eyes, I knew that our chance encounter would be a moment to cherish for a lifetime.",
  "word count": 161,
  "dialog": [
    {
      "Kerry": "I loved the setting of the novel! Who wouldn't want to attend the first modern Olympic Games?"
    },
    {
      "Meg": "And I loved how the author described the atmosphere and the characters' emotions. It was so vivid!"
    },
    {
      "Lui": "Indeed, it's a well-written passage that effectively transports us back in time. However, I would have liked to see more historical accuracy."
    },
    {
      "Billy": "I'm surprised you said that, Mr. Lui! I thought the author did a great job of balancing creativity and facts. Can someone explain what happened with the photographer Baron de Hohenlohe?"
    },
    {
      "Meg": "Yeah, it was like he appeared out of nowhere! But I think it added to the romance of the story."
    },
    {
      "Kerry": "I agree that his sudden appearance was unexpected, but it made the scene more interesting. And what's with the strange name 'Baron de Hohenlohe'? Does anyone know who that is in real history?"
    },
    {
      "Lui": "Actually, Kerry, Baron de Hohenlohe was a German aristocrat and photographer who did document some early Olympic Games. But let's not get too sidetracked – what were your overall impressions of the novel?"
    }
  ],
  "quiz": [
    {
      "question": "Where was the narrator headed when they felt a sense of wonder?",
      "options": [
        "A new coffee shop",
        "The newly opened stadium for the first modern Olympic Games",
        "Their art studio",
        "The city library",
        "Their home"
      ],
      "answer": 1
    },
    {
      "question": "Who was the photographer tasked with documenting the event?",
      "options": [
        "Baron de Hohenlohe, a French artist",
        "Pierre-Auguste Renoir, a famous painter",
        "Baron de Hohenlohe, a German aristocrat and photographer",
        "Eugène Delacroix, a French Romantic painter",
        "Claude Monet, an Impressionist painter"
      ],
      "answer": 2
    },
    {
      "question": "What was Kerry's impression of the novel?",
      "options": [
        "He thought it was boring.",
        "He loved the setting of the novel!",
        "He thought the author did a poor job with character development.",
        "He enjoyed the way the story unfolded, but had some issues with historical accuracy.",
        "He didn't enjoy the romance aspect of the story."
      ],
      "answer": 1
    },
    {
      "question": "What was Lui's suggestion for improving the novel?",
      "options": [
        "Adding more characters to the story",
        "Incorporating more action sequences",
        "Including more historical accuracy",
        "Focusing on a different time period",
        "Making the story more predictable"
      ],
      "answer": 2
    },
    {
      "question": "Who asked about Baron de Hohenlohe's significance in real history?",
      "options": [
        "Kerry",
        "Meg",
        "Billy",
        "Lui",
        "All of them"
      ],
      "answer": 3
    }
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Historical Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1"
    },
    "level": "Level_5"
  }
}
export default data;