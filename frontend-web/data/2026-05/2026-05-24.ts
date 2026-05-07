import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Death of Caravaggio",
    "details":
      "On May 24, 1610, the Italian Baroque painter Michelangelo Merisi da Caravaggio died under mysterious circumstances in Porto Ercole, Italy.",
  },
  "date": "2026-05-24",
  "title": "Shadows of Porto Ercole",
  "body":
    "In the sweltering heat of an Italian summer, a man lay dying on the shores of Porto Ercole. His name was whispered in terror by the locals - Michelangelo Merisi da Caravaggio, the infamous painter with a talent for death and destruction.  \n\n As the sun dipped into the Mediterranean, casting long shadows across the sandy beach, Caravaggio's thoughts turned to his own mortality. He had lived a life of passion and excess, leaving a trail of broken hearts and shattered dreams in his wake. And now, it seemed, his time was finally at hand.  \n\n But as he drew his last breath, a strange sensation washed over him - a sense of freedom from the burdens that had weighed him down for so long. He saw himself standing tall, his brushstrokes bold and confident, as he painted the very darkness that had consumed him.  \n\n And in that moment, Caravaggio knew that he would never truly die. His art would live on, a testament to the beauty and power of human creativity. As the shadows closed in around him, he smiled, knowing that his legacy would endure long after his own mortal coil had been reduced to dust.",
  "word count": 196,
  "dialog": [
    {
      "Lui": "What did you all think of the novel?",
    },
    {
      "Meg":
        "I loved how Caravaggio's life was woven into the story, it made him feel so much more real!",
    },
    {
      "Kerry":
        "I know what you mean, Meg! But I'm still trying to figure out why the author ended with that note about his art living on.",
    },
    {
      "Billy":
        "I think it's because Caravaggio's art is a representation of his soul, and even though he died, his creations continue to inspire people!",
    },
    {
      "Meg":
        "Exactly! And I loved how the novel highlighted the importance of creativity and self-expression.",
    },
    {
      "Lui":
        "I'm glad you all appreciated that aspect. I must say, I was impressed by the author's ability to convey the complexity of Caravaggio's character without glamorizing his flaws.",
    },
    {
      "Kerry":
        "Yeah, it wasn't a sanitized version of history at all! But what really got me was how it made me think about my own relationship with art and creativity.",
    },
    {
      "Billy":
        "Me too! I'm definitely going to try drawing more now that I've read this novel.",
    },
    {
      "Lui":
        "I'm glad you're inspired, Billy. As educators, we should always be encouraging our students to explore their creative sides.",
    },
  ],
  "quiz": [
    {
      "question": "Where did Caravaggio lay dying?",
      "options": [
        "Porto Ercole",
        "Rome",
        "Florence",
        "Venice",
        "Milan",
      ],
      "answer": 0,
    },
    {
      "question": "What was Caravaggio's profession?",
      "options": [
        "Painter",
        "Poet",
        "Musician",
        "Actor",
        "Writer",
      ],
      "answer": 0,
    },
    {
      "question":
        "Why did the author end with a note about Caravaggio's art living on?",
      "options": [
        "To show his artistic growth",
        "To highlight his flaws",
        "Because his art is a representation of his soul",
        "To illustrate his creative process",
        "To describe his relationships",
      ],
      "answer": 2,
    },
    {
      "question":
        "What aspect of Caravaggio's life was highlighted in the novel?",
      "options": [
        "His romantic relationships",
        "His struggles with addiction",
        "The importance of creativity and self-expression",
        "His family background",
        "His involvement in politics",
      ],
      "answer": 2,
    },
    {
      "question": "What did Billy decide to do after reading the novel?",
      "options": [
        "Try cooking more often",
        "Practice yoga daily",
        "Draw more frequently",
        "Read more novels on art history",
        "Write a book review",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Gothic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
