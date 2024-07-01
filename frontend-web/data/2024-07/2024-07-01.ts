import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First public screening of film",
    "details":
      "On July 1st, 1895, the first public screening of a motion picture took place at the Salon Indien du Grand Café in Paris, France. The film was 'Workers Leaving the Lumière Factory' by Louis and Auguste Lumière.",
  },
  "date": "2024-07-01",
  "title": "The Last Projection",
  "body":
    "The Salon Indien du Grand Café was dark and silent, the only sound being the soft hum of the projector as it spooled out its final reel. The audience had long since departed, leaving behind only a faint scent of cigarette smoke and stale air. But I remained, entranced by the flickering images on the screen.  \n\n The films were old newsreels, grainy and fuzzy, but they still captivated me with their glimpse into a forgotten era. As I watched, the projector suddenly jolted to life again, its beam of light dancing across the walls like a restless spirit. The images on the screen began to warp and distort, as if reality itself was bending and twisting to conform to some madman's vision.  \n\n I felt a presence behind me, but when I turned, there was no one there. The projector continued to whirl and whine, its light illuminating the darkened room in stark, eerie flashes. And then, just as suddenly as it had begun, everything went black. When my eyes adjusted to the darkness, I saw that the screen was now a portal to some other realm, beckoning me with an otherworldly glow.",
  "word count": 192,
  "dialog": [
    {
      "Kerry": "Whoa, that ending was crazy! I didn't see it coming.",
    },
    {
      "Meg":
        "I know, right? It's like the author took us on a wild ride. I loved how the film reels came to life.",
    },
    {
      "Lui":
        "Well, I have to say, I appreciated the way the novel explored the intersection of reality and fantasy. It was thought-provoking.",
    },
    {
      "Billy":
        "Yeah, I liked how it made me question what's real and what's not. And those newsreels were so cool!",
    },
    {
      "Meg":
        "I loved the newsreels too. They added to the sense of nostalgia and wonder.",
    },
    {
      "Kerry": "And don't forget that crazy projector scene. I mean, whoa!",
    },
    {
      "Lui":
        "Yes, the use of the projector was effective in conveying a sense of unease and uncertainty.",
    },
    {
      "Billy":
        "I also liked how the novel explored the themes of memory and perception. It made me think about how our memories shape us.",
    },
    {
      "Meg":
        "Exactly! And I loved how the author used the film reels as a metaphor for how our memories can be distorted or altered over time.",
    },
    {
      "Kerry":
        "Yeah, it was like, what's real and what's just a memory? It was trippy!",
    },
  ],
  "quiz": [
    {
      "question": "What was the setting of the opening scene in the novel?",
      "options": [
        "A dark and silent film theater",
        "A busy street in Paris",
        "An old newsreel archive",
        "The author's home office",
        "A forgotten era",
      ],
      "answer": 0,
    },
    {
      "question": "What happened to the projector at the end of the novel?",
      "options": [
        "It stopped working",
        "It started showing a new film",
        "It began to warp and distort reality",
        "It went black",
        "It disappeared",
      ],
      "answer": 3,
    },
    {
      "question": "Who said, 'I didn't see it coming' in the dialogue?",
      "options": [
        "Kerry",
        "Meg",
        "Lui",
        "Billy",
        "No one mentioned this phrase",
      ],
      "answer": 0,
    },
    {
      "question": "What did Billy appreciate about the novel?",
      "options": [
        "The way it explored the intersection of reality and fantasy",
        "The nostalgic value of old newsreels",
        "The themes of memory and perception",
        "The use of the projector as a metaphor",
        "None of the above",
      ],
      "answer": 0,
    },
    {
      "question": "What did Meg love about the novel?",
      "options": [
        "The way it explored the intersection of reality and fantasy",
        "The nostalgic value of old newsreels",
        "The themes of memory and perception",
        "The use of film reels as a metaphor for memories",
        "None of the above",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Horror",
    "models": {
      "main": "llama3",
      "novel": "llama3",
    },
    "level": "Level_3",
  },
};
export default data;
