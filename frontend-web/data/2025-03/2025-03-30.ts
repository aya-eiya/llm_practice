import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Beatles Release 'Let It Be' Album",
    "details":
      "On March 30, 1970, The Beatles released their final album together, 'Let It Be'.",
  },
  "date": "2025-03-30",
  "title": "Letting Love Be",
  "body":
    "It was a beautiful day in Paris when Emma first met him. She had just arrived at the charming café on the Champs-Élysées, and he was already there, sipping on a coffee. Emma couldn't help but notice how handsome he was, with his bright blue eyes and chiseled features.  \n\n They struck up a conversation, and Emma learned that his name was Léon. He was a musician, and had just released a new album, 'Let It Be'. As they talked, Emma felt a connection she couldn't ignore. She had been heartbroken for months after her last relationship ended, but there was something about Léon that made her feel alive again.  \n\n As the day went on, Emma and Léon found themselves lost in conversation. They talked about everything from music to art, and even shared a laugh or two. Emma couldn't believe how easy it was to be around him, and she knew she had to see him again. And as they said their goodbyes, Léon whispered something in her ear that made her heart skip a beat: 'Let me take you somewhere special tomorrow?'",
  "word count": 183,
  "dialog": [
    {
      "Kerry":
        "I'm still trying to wrap my head around the protagonist's connection with Léon. It felt so real!",
    },
    {
      "Meg":
        "I know, right? I loved how the author described their first meeting at the café. It was like I was there!",
    },
    {
      "Lui":
        "As a teacher, I appreciate how the novel promotes empathy and understanding. The characters' interactions are truly insightful.",
    },
    {
      "Billy":
        "I'm more of a sci-fi fan, but I have to admit that the musical aspect of this story really drew me in. The 'Let It Be' album is amazing!",
    },
    {
      "Kerry":
        "Yeah, and the way Léon's passion for music translates to his relationships is incredible. It's like he's got a special gift.",
    },
    {
      "Meg":
        "I think what I loved most about this novel is its ability to make me feel all the emotions. It was like I was right there with Emma, experiencing everything she did.",
    },
    {
      "Lui":
        "That's the mark of a truly great story. When it can evoke such strong feelings in the reader, that's when you know it's done something special.",
    },
    {
      "Billy":
        "Absolutely! And I think the author did an amazing job of creating this sense of connection between Emma and Léon. It felt so real and genuine.",
    },
  ],
  "quiz": [
    {
      "question": "What was Emma's first impression of Léon?",
      "options": [
        "He was very tall",
        "He had bright blue eyes",
        "He was a musician",
        "He was wearing a suit",
        "He was sipping on a coffee",
      ],
      "answer": 1,
    },
    {
      "question": "What was the name of Léon's new album?",
      "options": [
        "Let It Be",
        "Yesterday",
        "Hey Jude",
        "Come Together",
        "Something",
      ],
      "answer": 0,
    },
    {
      "question": "Why did Emma feel a connection with Léon?",
      "options": [
        "They shared the same interests",
        "He was very kind to her",
        "She had been heartbroken for months and he made her feel alive again",
        "He was a famous musician",
        "She had never met him before",
      ],
      "answer": 2,
    },
    {
      "question": "What did Léon whisper in Emma's ear?",
      "options": [
        "Let me take you somewhere special tomorrow?",
        "You're very beautiful",
        "I love your smile",
        "Can I see you again?",
        "This is a nice café",
      ],
      "answer": 0,
    },
    {
      "question": "Who was impressed with the musical aspect of the story?",
      "options": [
        "Kerry",
        "Meg",
        "Billy",
        "Lui",
        "All of them",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
