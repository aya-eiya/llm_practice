import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Rise of Modern Industrial Design",
    "details":
      "While not a single day, August 5th often marks periods in design history where early industrial prototypes and standardized forms began to solidify, moving away from purely ornamental Victorian styles toward functionalism. This period saw the increasing influence of Bauhaus principles on mass-produced goods.",
  },
  "date": "2026-08-05",
  "title": "The Death of the Ornament",
  "body":
    "For a long time, society believed that furniture and tools should resemble fine art. During the Victorian era, designers used a great deal of fancy decorations to make items seem expensive and royal. They often didn't care if a chair was uncomfortable as long as it looked impressive. However, the world eventually started to move away from these heavy, ornamental styles in favor of something more practical.\n\n\n\n As the industrial age took hold, visionary thinkers began to break new ground. The Bauhaus movement pointed out that \"form follows function,\" suggesting that an object's shape should be based on its purpose. Instead of adding useless curls and gold leaf, they focused on clean lines and mass production. This shift allowed a wide range of people to afford high-quality goods. They gave up on old traditions to embrace the efficiency of machines.\n\n\n\n Today, we still see the impact of this change in almost every product we use. By cutting out the excess, modern design emphasizes practicality over pride. It is fascinating how a few bold ideas could completely reshape our world and transform our daily living spaces into places of simple elegance.",
  "word count": 190,
  "dialog": [
    {
      "Billy":
        "It's fascinating how a philosophical shift—from prioritizing appearance to prioritizing function—could completely reshape daily life. The Bauhaus movement really codified that idea with 'form follows function,' which is almost like an engineering principle applied to aesthetics.",
    },
    {
      "Kerry":
        "But wasn't the Victorian style just pure, over-the-top vanity? Like they thought gold leaf and useless curls made them seem more royal than they actually were. It sounds incredibly pretentious.",
    },
    {
      "Lui":
        "That is a keen observation, Kerry. The text highlights that those designs often prioritized the *look* of wealth over genuine comfort or utility. It speaks to a societal obsession with status symbols rather than practical living.",
    },
    {
      "Meg":
        "I wonder if they lost some of the 'magic' when everything became so efficient and clean. The fancy, heavy furniture sounds like it had stories woven into its carvings, even if they were uncomfortable.",
    },
    {
      "Billy":
        "From a historical perspective, the shift wasn't just about taste; it was tied to industrialization. Mass production demanded efficiency, which forced designers to abandon hand-crafted excess for standardized, functional forms.",
    },
    {
      "Kerry":
        "So we traded uncomfortable, expensive vanity pieces for mass-produced simplicity? I guess that means the modern 'simple elegance' is less about artistry and more about cost-cutting. Is there a bit of hypocrisy in that?",
    },
    {
      "Lui":
        "That is a complex ethical question, Kerry. The move was driven by a desire for accessibility—allowing more people to afford high-quality goods. It was an evolution toward democratic design.",
    },
    {
      "Meg":
        "But even if it's practical, doesn't the simplicity mean we have less room for imagination? I prefer objects that look like they could hold a secret or maybe even cast a spell.",
    },
  ],
  "quiz": [
    {
      "question":
        "What guiding principle did the Bauhaus movement introduce regarding design, as mentioned in the text?",
      "options": [
        "Form must always resemble fine art.",
        "Designs should be heavy and ornate to look royal.",
        "Function dictates the object's shape.",
        "Objects must prioritize status symbols over utility.",
        "Efficiency is secondary to aesthetics.",
      ],
      "answer": 1,
    },
    {
      "question":
        "According to the narration, what was a primary characteristic of Victorian-era designs?",
      "options": [
        "They were focused on mass production and clean lines.",
        "They emphasized practicality over pride.",
        "They often used fancy decorations to appear expensive.",
        "They prioritized comfort above all other concerns.",
        "They were driven by cost-cutting measures.",
      ],
      "answer": 2,
    },
    {
      "question":
        "What major historical force prompted the shift away from heavy, ornamental styles?",
      "options": [
        "The rise of democratic design principles.",
        "A sudden preference for simple elegance among consumers.",
        "The demands of industrialization and mass production.",
        "The decline of fine art in society.",
        "The invention of new types of gold leaf.",
      ],
      "answer": 1,
    },
    {
      "question":
        "What concern does Meg express regarding modern, efficient design?",
      "options": [
        "That it lacks sufficient ornamentation to be considered royal.",
        "That the simplicity might reduce room for imagination.",
        "That it is too expensive for the average person to afford.",
        "That it doesn't look as impressive as old designs.",
        "That it relies too heavily on cost-cutting.",
      ],
      "answer": 1,
    },
    {
      "question":
        "What positive social outcome resulted from the shift toward functional design and mass production?",
      "options": [
        "The complete disappearance of all traditional craftsmanship.",
        "An increase in objects that were uncomfortable but impressive.",
        "Designs became less focused on status symbols, leading to greater accessibility.",
        "Designers started using more gold leaf than before.",
        "The establishment of a new tradition of heavy ornamentation.",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Design",
    "flavor": "Academic Essay",
    "models": {
      "main": "gemma4:code",
      "novel": "gemma4:novel",
    },
    "level": "Level_5",
  },
};
export default data;
