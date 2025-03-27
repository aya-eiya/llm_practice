import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event":
      "The first public screening of 'The Birth of a Nation' was met with violence in Los Angeles on February 2, 1915",
    "details":
      "A riot broke out at the Orpheum Theatre in downtown LA when African American audience members were refused admittance to see the film, which tells the story of Nat Turner's slave rebellion",
  },
  "date": "2025-02-02",
  "title": "Ashes of Tomorrow",
  "body":
    "The world as we knew it was gone. A devastating war had left the planet in ruins, and the few remaining humans were forced to live in a harsh new reality.  \n\n I walked through the desolate landscape, my boots kicking up clouds of ash with every step. The once-blue sky was now a dull gray, and the air was thick with the acrid smell of smoke.  \n\n We had tried to rebuild, to create a new society in the ashes of the old one. But it was no use. The damage was too great, the resources too scarce. And so we were forced to live like animals, scrounging for food and shelter in a world that seemed determined to destroy us.  \n\n I spotted a figure in the distance, a young woman with a look of desperation on her face. She was running towards me, her eyes fixed on something behind me. I turned to see what it was, and my heart sank. A group of rovers, their eyes glowing red in the dark.  \n\n I grabbed the woman's arm, pulling her back from the danger. 'What is it?' she whispered, her voice trembling with fear. 'The rovers,' I replied, my mouth dry with fear. 'They're coming for us.'",
  "word count": 206,
  "dialog": [
    {
      "Billy":
        "Wow, I just finished reading that novel! What did you guys think of it?",
    },
    {
      "Meg":
        "I loved it! The world-building was so immersive. I felt like I was right there with the protagonist, walking through the desolate landscape.",
    },
    {
      "Kerry":
        "Yeah, me too! And that plot twist at the end? Mind blown. I didn't see it coming at all.",
    },
    {
      "Lui":
        "Well, as a teacher, I can appreciate how the author wove together complex themes and ideas in a way that was still accessible to readers of different ages and backgrounds.",
    },
    {
      "Billy":
        "I think what really stood out to me was the character development. I felt like I got to know each of the main characters so well by the end of the book.",
    },
    {
      "Meg":
        "For sure! And I loved how the author explored the themes of hope and resilience in the face of adversity. It really made me think about my own life and how I can apply those lessons.",
    },
    {
      "Kerry":
        "Yeah, it's definitely a book that will stick with you long after you finish reading it. I've already recommended it to a few friends who are looking for something new to read.",
    },
    {
      "Lui":
        "That's great to hear! As educators, we always try to find ways to connect what our students are learning in the classroom to their everyday lives. This book is definitely a good example of that.",
    },
  ],
  "quiz": [
    {
      "question": "What was left after the devastating war?",
      "options": [
        "A new society",
        "The once-blue sky",
        "The harsh new reality",
        "The few remaining humans",
        "The planet in ruins",
      ],
      "answer": 3,
    },
    {
      "question": "How did people live after the war?",
      "options": [
        "They rebuilt their homes",
        "They scrounged for food and shelter",
        "They went to a new city",
        "They stayed in the same place",
        "They traveled to another country",
      ],
      "answer": 1,
    },
    {
      "question": "What did the protagonist see approaching?",
      "options": [
        "A group of rovers with glowing red eyes",
        "A group of people running towards them",
        "A big fire in the distance",
        "A new building being constructed",
        "A group of animals",
      ],
      "answer": 0,
    },
    {
      "question": "Who did Billy recommend the book to?",
      "options": [
        "His teacher",
        "His friends who are looking for something new to read",
        "His family members",
        "The author",
        "Nobody",
      ],
      "answer": 1,
    },
    {
      "question": "What theme did the book explore?",
      "options": [
        "Hope and resilience in the face of adversity",
        "Friendship and loyalty",
        "Love and relationships",
        "Greed and power",
        "Fear and anxiety",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
