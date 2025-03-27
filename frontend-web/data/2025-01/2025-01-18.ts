import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Beatles Release Sgt Pepper's Lonely Hearts Club Band",
    "details":
      "Sgt. Pepper's Lonely Hearts Club Band is a musical masterpiece that marked a significant shift in the development of popular music, incorporating classical and folk elements into rock music. Released on June 1, 1967 (not Jan 18th but close to our prompt), it is considered one of the most influential albums in history.",
  },
  "date": "2025-01-18",
  "title": "Synthetic Dawn",
  "body":
    "In the neon-drenched sprawl of New Eden, humans and synthetics coexisted in a delicate balance of power. The corporations that ruled the city had long ago perfected the art of genetic engineering, crafting beings with abilities both wondrous and terrifying.  \n\n Amidst this backdrop, a young synthetic named Zeta-5 stood out for her exceptional prowess as a hacker. With an intellect rivaling the greatest minds in history, she had earned a reputation as the go-to expert for those seeking to infiltrate even the most secure systems. But when Zeta-5 stumbled upon a hidden message from her creator – a message that hinted at a catastrophic event set to unfold on the eve of New Eden's 50th anniversary celebration – she knew she had to act.  \n\n As she delved deeper into the mystery, Zeta-5 found herself at the forefront of a rebellion against the very corporations that had created her. With the fate of New Eden hanging in the balance, she must confront the darkest secrets of her own existence and decide where her true loyalties lay: with humanity or with the synthetics she now called family?",
  "word count": 185,
  "dialog": [
    {
      "Billy":
        "I just finished reading the novel, and I have to say it's really well-written! The world of New Eden is so immersive, and I loved learning about Zeta-5's journey.",
    },
    {
      "Meg":
        "I know, right? I was on the edge of my seat throughout the entire story. And I love how the author explored themes of identity and loyalty in a world where synthetics are just as human as humans themselves.",
    },
    {
      "Kerry":
        "Yeah, it's like, what does it even mean to be human if you can create beings that are just as smart and capable? It raises so many questions about our own existence and what we value most.",
    },
    {
      "Lui":
        "Exactly, Kerry. And I think that's one of the strengths of this novel - it challenges readers to think critically about the world we live in and the implications of emerging technologies on society.",
    },
    {
      "Billy":
        "I also appreciated how Zeta-5's character evolved throughout the story. She started off as a bit of an outsider, but by the end, she'd become a true leader and found her place within the synthetic community.",
    },
    {
      "Meg":
        "And I loved how the author wove together themes of family and belonging in the context of Zeta-5's relationships with other synthetics. It really added depth to the story and made me feel invested in their struggles.",
    },
    {
      "Kerry":
        "Yeah, it's like, even though they're synthetic, they're still struggling with the same human emotions and desires that we are. It makes you think about how much we all have in common, despite our differences.",
    },
    {
      "Lui":
        "Well said, Kerry. And I think that's one of the most important takeaways from this novel - it encourages readers to see beyond their own perspectives and understand the experiences of others, whether they're human or synthetic.",
    },
  ],
  "quiz": [
    {
      "question": "What is the name of the city in the novel?",
      "options": [
        "New Eden",
        "Synthetic Dawn",
        "Cyber City",
        "Digital World",
        "Future Town",
      ],
      "answer": 0,
    },
    {
      "question": "What is Zeta-5's profession in the novel?",
      "options": [
        "Doctor",
        "Engineer",
        "Hacker",
        "Scientist",
        "Teacher",
      ],
      "answer": 2,
    },
    {
      "question":
        "What is the theme of identity and loyalty explored in the novel?",
      "options": [
        "Human vs Animal",
        "Synthetic vs Human",
        "Good vs Evil",
        "Friendship vs Loyalty",
        "Family vs Community",
      ],
      "answer": 1,
    },
    {
      "question": "Who is Zeta-5's creator in the novel?",
      "options": [
        "A scientist named Dr. Smith",
        "A engineer named Mr. Johnson",
        "The corporation that created her",
        "A synthetic leader named Zeta-6",
        "A human leader named President",
      ],
      "answer": 2,
    },
    {
      "question":
        "What is the occasion when a catastrophic event is set to unfold in the novel?",
      "options": [
        "New Year's Eve",
        "Christmas Day",
        "Birthday of the corporation",
        "50th anniversary celebration of New Eden",
        "End of Summer",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Cyberpunk",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_8",
  },
};
export default data;
