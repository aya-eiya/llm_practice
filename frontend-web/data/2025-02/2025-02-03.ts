import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The First Performance of Hamlet at the Globe Theatre",
    "details":
      "On February 3rd, 1604, Shakespeare's 'Hamlet' premiered at the Globe Theatre in London, England.",
  },
  "date": "2025-02-03",
  "title": "Moonlit Kisses",
  "body":
    "As I stood on the moonlit balcony, the warm breeze carried the sweet scent of blooming flowers from the garden below. The sound of the waves gently lapping against the shore created a soothing melody that seemed to match the rhythm of my heart. It was as if fate had brought me to this moment, where the beauty of nature and the magic of love converged.  \n\n I turned to see him standing behind me, his eyes locked onto mine with an intensity that made my breath catch in my throat. The dim moonlight cast a silver glow on his face, accentuating the strong lines of his jaw and the gentle curve of his lips. I felt a shiver run down my spine as he took a step closer, his presence filling the space around me.  \n\n His eyes never left mine as he reached out to brush a strand of hair behind my ear. The touch sent sparks flying through my body, and I felt myself melting into his gaze. It was as if we were the only two people in the world, lost in a sea of love and desire.  \n\n In that moment, I knew that our love would last an eternity, a bond forged in the fires of passion and strengthened by the gentle whispers of the night.",
  "word count": 219,
  "dialog": [
    {
      "Billy":
        "I love this novel! The way it describes the moonlit balcony and the warm breeze carrying the scent of blooming flowers is so vivid!",
    },
    {
      "Meg":
        "I know, right? I felt like I was there with the author. And the way he described the protagonist's emotions, especially when he saw her standing behind him...",
    },
    {
      "Kerry":
        "Yeah, that part was intense! It felt like they were sharing a secret moment, and it made me wonder what would happen next.",
    },
    {
      "Lui":
        "I think what I loved most about this novel is how it explores the themes of love and connection. It's not just a romantic story, but also a reflection on human emotions.",
    },
    {
      "Billy":
        "That's so true! And it's not just limited to romance. The way it talks about the beauty of nature and how it can bring people together is really beautiful.",
    },
    {
      "Meg":
        "I agree with Billy. I think that's one of the most important takeaways from this novel - the power of nature to inspire love and connection in our lives.",
    },
    {
      "Kerry":
        "I also loved how the author described the protagonist's feelings as they stood on the balcony, looking out at the sea. It was like I was right there with them, feeling the same emotions.",
    },
  ],
  "quiz": [
    {
      "question":
        "What was happening in the story as the protagonist stood on the moonlit balcony?",
      "options": [
        "The protagonist was feeling sad and lonely.",
        "The protagonist was thinking about their past memories.",
        "The warm breeze carried the sweet scent of blooming flowers from the garden below.",
        "The sound of the waves gently lapping against the shore created a soothing melody that seemed to match the rhythm of my heart.",
        "The protagonist was feeling anxious and nervous.",
      ],
      "answer": 3,
    },
    {
      "question": "What did the protagonist see when they turned around?",
      "options": [
        "Their friend standing behind them, with a book in their hand.",
        "A cat sitting on the balcony, looking at them.",
        "He was standing behind her, his eyes locked onto mine with an intensity that made my breath catch in my throat.",
        "A bird flying overhead, singing a sweet melody.",
        "Their family member walking towards them, with a smile on their face.",
      ],
      "answer": 2,
    },
    {
      "question":
        "What happened when the protagonist saw him standing behind her?",
      "options": [
        "She felt happy and excited to see him.",
        "She felt scared and wanted to run away.",
        "He reached out to brush a strand of hair behind her ear, and she felt sparks flying through her body.",
        "They started talking about their day and shared some funny stories.",
        "She felt bored and didn't want to interact with him.",
      ],
      "answer": 3,
    },
    {
      "question":
        "What did the protagonist feel when he reached out to brush a strand of hair behind her ear?",
      "options": [
        "She felt calm and relaxed.",
        "He felt happy and excited.",
        "She felt sparks flying through her body, and she felt herself melting into his gaze.",
        "They both felt sad and lonely.",
        "Nothing special happened.",
      ],
      "answer": 3,
    },
    {
      "question": "What did Billy like about the novel?",
      "options": [
        "He liked the way it described the moonlit balcony and the warm breeze carrying the scent of blooming flowers.",
        "He liked the way it talked about the beauty of nature and how it can bring people together.",
        "He didn't like it at all.",
        "He loved the way it explored the themes of love and connection.",
        "He thought it was too long.",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Theater",
    "flavor": "Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_3",
  },
};
export default data;
