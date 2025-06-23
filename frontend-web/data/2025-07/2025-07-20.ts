import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Death of Vincent van Gogh",
    "details":
      "July 29 is often cited as Van Gogh's death date, but he actually died on July 20 at an asylum in Auvers-sur-Oise, a village north of Paris.",
  },
  "date": "2025-07-20",
  "title": "Clockwork Dreams and Midnight Tears",
  "body":
    "In the foggy streets of London, where clock towers pierced the sky and hissing steam pipes crisscrossed the alleys, I met a young artist named Emily. She was known for her exquisite miniature paintings on intricately crafted music boxes. Her artistry was matched only by her sorrow, for she had lost her beloved brother in the recent war between steam-powered nations. \n\n As we strolled through the winding streets, Emily's eyes gleamed with a mixture of sadness and determination. She spoke little of her past, but the lines on her face told tales of heartache and loss. I sensed that she was driven by more than just her passion for art; there was a fire within her, a flame that flickered with every beat of her clockwork heart. \n\n In the quiet hours of midnight, when the city slumbered and the clock towers stood still, Emily's tears fell like rain. I watched as she wept for the brother she had lost, for the dreams they had shared, and for the future that now seemed uncertain. Her sorrow was a symphony of emotions, a reminder that even in a world of gears and steam, humanity still pulsed with a deep and abiding love.",
  "word count": 200,
  "dialog": [
    {
      "Meg":
        "I loved how Emily's artistry was woven into her sorrow, it was so beautifully done!",
    },
    {
      "Kerry":
        "Yeah, I'm still trying to wrap my head around the clockwork heart thing, what did you guys think of that?",
    },
    {
      "Billy":
        "I love the novel! The way the author described the foggy streets and the steam-powered machines made me feel like I was right there in London with Emily.",
    },
    {
      "Lui":
        "The way the author explored the themes of loss and determination was truly remarkable, it's a testament to the human spirit.",
    },
    {
      "Meg":
        "I know, right? And Emily's character development was just incredible, from her initial sadness to her eventual determination, it was so inspiring!",
    },
    {
      "Kerry":
        "Yeah, I think what really got me was the way the author showed how even in a world of machines and gears, humanity is still capable of love and compassion.",
    },
    {
      "Billy":
        "That's true! And it just goes to show that even though we may have differences and conflicts, at the end of the day, we're all human beings with hearts that beat with love and kindness.",
    },
    {
      "Lui":
        "Well said, Billy. I think this novel is a must-read for anyone who wants to explore the complexities of humanity in a world where technology is rapidly advancing.",
    },
  ],
  "quiz": [
    {
      "question": "Where did Emily meet?",
      "options": [
        "In a museum",
        "On a foggy street in London",
        "At a library",
        "In a park",
        "At home",
      ],
      "answer": 1,
    },
    {
      "question": "What was special about Emily's artistry?",
      "options": [
        "She was good at drawing animals",
        "Her miniature paintings on music boxes were exquisite",
        "She could paint fast",
        "She was good at writing stories",
        "She could sing well",
      ],
      "answer": 1,
    },
    {
      "question": "Why did Emily's tears fall like rain?",
      "options": [
        "Because she loved her brother very much",
        "Because she lost her beloved brother in the war",
        "Because she was sad about the future",
        "Because she was happy to see her brother again",
        "Because she loved art",
      ],
      "answer": 2,
    },
    {
      "question": "What did Billy like about the novel?",
      "options": [
        "The way the author described the foggy streets and the steam-powered machines made me feel like I was right there in London with Emily.",
        "The way the author showed how even in a world of machines and gears, humanity is still capable of love and compassion",
        "The way the author explored the themes of loss and determination was truly remarkable",
        "I loved how Emily's artistry was woven into her sorrow",
        "The characters were boring",
      ],
      "answer": 0,
    },
    {
      "question": "What did Lui think about the novel?",
      "options": [
        "It's a must-read for anyone who wants to explore the complexities of humanity in a world where technology is rapidly advancing.",
        "I loved how Emily's artistry was woven into her sorrow",
        "The way the author showed how even in a world of machines and gears, humanity is still capable of love and compassion",
        "The way the author described the foggy streets and the steam-powered machines made me feel like I was right there in London with Emily.",
        "It was boring",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Art",
    "flavor": "Steampunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
