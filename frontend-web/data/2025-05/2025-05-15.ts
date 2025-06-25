import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Bob Dylan releases Like a Rolling Stone",
    "details": "On May 15, 1964, Bob Dylan released his iconic single \"Like a Rolling Stone\", which would go on to become one of the greatest songs in rock music history."
  },
  "date": "2025-05-15",
  "title": "Love Like a Rolling Stone",
  "body": "It was the summer of '64, and I was lost in the city of love. The streets were alive with music, and I had just discovered my favorite song - Bob Dylan's \"Like a Rolling Stone\". As I walked along the Seine, I felt the rhythm of the guitar and the lyrics spoke directly to my soul.  \n\n That's when I saw her - Emily, with hair as wild as the song itself. She was dancing on the edge of the stage, lost in the music like I was. Our eyes met, and I knew that this chance encounter would change my life forever.  \n\n We talked all night about music, love, and the meaning of life. The city around us melted away, leaving only the two of us, connected by our shared passion for art and our desire to take a chance on each other. And just like Bob Dylan's song, our love was like a rolling stone - unpredictable, free, and full of life.",
  "word count": 164,
  "dialog": [
    {
      "Meg": "I just finished reading the novel, and I'm still reeling from the experience. The way the author wove together music, love, and the meaning of life was simply magical."
    },
    {
      "Lui": "Ah, yes! As a history teacher, I appreciated how the novel used historical events to create a sense of context for the characters' experiences."
    },
    {
      "Kerry": "I'm still trying to wrap my head around the ending. It felt so sudden and abrupt. What did you guys think of it?"
    },
    {
      "Billy": "I loved how the author used Bob Dylan's song as a metaphor for the characters' lives. It was like they were singing along with their own life story."
    },
    {
      "Meg": "And can we talk about Emily? She was such an intriguing character, and her connection to the music felt so real. I felt like I knew her by the end of the novel."
    },
    {
      "Lui": "Actually, I think Kerry's comment about the ending is a great point. It did feel a bit abrupt, but maybe that's what made it so impactful? Sometimes endings don't need to be neatly tied up with bows."
    },
    {
      "Kerry": "Exactly! And I love how Lui put it. The ending was like a punch to the gut, you know? It left me breathless and wanting more."
    },
    {
      "Billy": "I'm just glad we can have this conversation about the novel. It's not every day that we get to discuss something so thought-provoking with such intelligent people."
    }
  ],
  "quiz": [
    {
      "question": "What was the setting for the story about 'Love Like a Rolling Stone'?",
      "options": [
        "A city in love",
        "The summer of '64",
        "Paris along the Seine",
        "Bob Dylan's concert",
        "A music festival"
      ],
      "answer": 2
    },
    {
      "question": "Who was dancing on the edge of the stage in the story about 'Love Like a Rolling Stone'?",
      "options": [
        "Meg",
        "Lui",
        "Emily",
        "Billy",
        "Kerry"
      ],
      "answer": 2
    },
    {
      "question": "What did Meg, Lui, Kerry, and Billy discuss after reading the novel?",
      "options": [
        "The meaning of life",
        "Music and love",
        "Historical events",
        "Bob Dylan's song",
        "All of the above"
      ],
      "answer": 4
    },
    {
      "question": "Who thought the ending of the novel was abrupt?",
      "options": [
        "Meg",
        "Lui",
        "Kerry",
        "Billy",
        "All of them"
      ],
      "answer": 2
    },
    {
      "question": "What did Lui say about the ending of the novel?",
      "options": [
        "It felt so sudden and abrupt",
        "Sometimes endings don't need to be neatly tied up with bows",
        "I loved how the author used Bob Dylan's song",
        "The ending was like a punch to the gut",
        "All of them"
      ],
      "answer": 1
    }
  ],
  "params": {
    "theme": "Music",
    "flavor": "Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1"
    },
    "level": "Level_6"
  }
}
export default data;