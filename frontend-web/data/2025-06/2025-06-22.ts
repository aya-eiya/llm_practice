import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": 'The premiere of "Coppelia"',
    "details":
      "Coppélia is a ballet, choreographed by Arthur Saint-Léon to Leo Delibes' music. It premiered on June 22, 1870, at the Théâtre de l'Opéra in Paris.",
  },
  "date": "2025-06-22",
  "title": "Moonlit Masquerade",
  "body":
    'In the enchanted realm of Luminaria, where stars shone bright in the night sky, a magical masquerade ball was held to celebrate the premiere of the mystical ballet, "Coppélia". The guests, dressed in elaborate masks and gowns, danced beneath the radiant moonlight.  \n\n  As they twirled across the ballroom floor, their laughter echoed through the night air. But amidst the joy and revelry, a mysterious figure appeared, cloaked in shadows. No one knew who this enigmatic guest was or why they had come to this enchanted gathering.  \n\n Rumors whispered among the guests that this mysterious figure might be connected to the ballet itself, for it was said that Coppélia\'s creator, Arthur Saint-Léon, had infused his masterpiece with magic. Some believed that on this very night, the boundaries between reality and fantasy would blur.  \n\n As the music reached its climax, the guests parted to reveal a grand stage upon which Coppélia herself stood, her beauty shining brighter than any star in the sky. The mysterious figure stepped forward, removing their mask to reveal the face of Saint-Léon himself, who smiled with knowing eyes as he vanished into the night, leaving behind a trail of wonder and enchantment.',
  "word count": 195,
  "dialog": [
    {
      "Meg":
        "I loved how the novel brought the magical world of Luminaria to life! The description of the masquerade ball was so vivid, I felt like I was there.",
    },
    {
      "Billy":
        "Yeah, and the way the author described the mysterious figure and Saint-Léon's character was really interesting. It made me wonder what other secrets were hidden in the ballet itself.",
    },
    {
      "Kerry":
        "I'm more curious about the idea of boundaries between reality and fantasy blurring. I think that's a really cool concept, especially for a story set in an enchanted realm.",
    },
    {
      "Lui":
        "Well, it seems like we have some readers who appreciate the novel's imaginative qualities. As a teacher, I'd say this is a great example of how storytelling can transport us to different worlds and spark our imagination.",
    },
    {
      "Meg":
        "I agree with Lui! And I also love how the story had elements of mystery and intrigue, keeping me engaged until the very end. It's clear that the author put a lot of thought into crafting this narrative.",
    },
    {
      "Kerry":
        "Yeah, and it's always great to see authors experimenting with different ideas and genres. This novel seems to blend fantasy and reality in a way that works really well, at least for me!",
    },
    {
      "Billy":
        "I think what I loved most about this novel is how it made me realize the power of imagination. It's not just something we have as kids; it's something we can cultivate and nurture throughout our lives.",
    },
    {
      "Lui":
        "That's a great point, Billy! Imagination is indeed a powerful tool that can help us see things from different perspectives and explore new ideas. I think this novel does a wonderful job of showcasing the importance of creativity in all aspects of life.",
    },
  ],
  "quiz": [
    {
      "question": "What was happening at the masquerade ball in the novel?",
      "options": [
        "The guests were watching a play",
        "The guests were dancing under the moonlight",
        "The guests were eating dinner",
        "The guests were sleeping",
        "The guests were having a picnic",
      ],
      "answer": 1,
    },
    {
      "question": "Who was said to have infused magic into Coppélia's ballet?",
      "options": [
        "Arthur Saint-Léon",
        "A mysterious figure",
        "A guest at the masquerade ball",
        "The author of the novel",
        "Coppélia herself",
      ],
      "answer": 0,
    },
    {
      "question": "What happened to Saint-Léon at the end of the story?",
      "options": [
        "He disappeared into thin air",
        "He was seen by no one again",
        "He removed his mask and vanished",
        "He danced on stage with Coppélia",
        "He gave a speech to the guests",
      ],
      "answer": 2,
    },
    {
      "question": "What was discussed among the readers about the novel?",
      "options": [
        "They thought it was too boring",
        "They liked the description of the masquerade ball",
        "They wanted more adventure in the story",
        "They loved how the boundaries between reality and fantasy blurred",
        "They didn't understand the plot",
      ],
      "answer": 1,
    },
    {
      "question": "What did Billy love most about the novel?",
      "options": [
        "The way it was written",
        "The characters in the story",
        "How it made him realize the power of imagination",
        "The ending of the story",
        "The beginning of the story",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Dance",
    "flavor": "Fantasy",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
