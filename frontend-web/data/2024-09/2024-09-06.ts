import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "First Photograph Taken",
    "details":
      "On September 6, 1816, Joseph Nicéphore Niépce created the first permanent photograph with a view from the window of his workshop in Saint-Loup-de-Bouchard, France.",
  },
  "date": "2024-09-06",
  "title": "Echoes of Silence",
  "body":
    "The world had ended in a catastrophic blur, leaving only ruins and remnants of what once was. I wandered through the desolate landscape, my footsteps echoing off the crumbling buildings. The silence was deafening, punctuated only by the occasional crackle of static from a broken radio or the distant howl of a lonely wind.  \n\nI had lost count of the days since the disaster, time having become meaningless in this new world. My only companions were the shadows that danced across the walls, and the memories that haunted my every step. I remembered the warmth of sun on skin, the taste of fresh air, and the sound of human laughter – all now nothing but distant echoes.  \n\nAs I walked, the ruins gave way to a strange, almost-living landscape. The once-familiar streets were now overgrown with vines and moss, as if nature itself was reclaiming what had been lost. I felt a shiver run down my spine as I realized that in this new world, I was no longer alone – for I had become one with the very earth itself.",
  "word count": 181,
  "dialog": [
    {
      "Kerry":
        "Wow, I just finished reading that novel! The way you described the post-apocalyptic world was so vivid.",
    },
    {
      "Meg":
        "I know, right? I loved how it felt like we were right there with the protagonist, experiencing everything they went through.",
    },
    {
      "Billy":
        "That's what I love about science fiction - the ability to transport us to another world and make us think about our own reality in a different way.",
    },
    {
      "Lui":
        "Exactly! And I appreciated how the novel touched on themes of survival, adaptation, and the human spirit. It was really thought-provoking.",
    },
    {
      "Kerry":
        "I also loved how the author used nature as a kind of character in its own right - it felt like we were becoming one with the earth itself!",
    },
    {
      "Meg":
        "That's so true! And I think that's what made the ending feel so poignant - we'd been through this whole journey with the protagonist, and then suddenly we were left with this sense of... unity, I suppose.",
    },
    {
      "Billy":
        "Yeah, it was like we'd become a part of the world itself. It was really beautiful.",
    },
    {
      "Lui":
        "Well said, Billy. And I think that's what made the novel so powerful - its ability to make us feel connected to something bigger than ourselves.",
    },
  ],
  "quiz": [
    {
      "question": "What was the state of the world after the disaster?",
      "options": [
        "peaceful",
        "desolate",
        "catastrophic",
        "ruined",
        "unharmed",
      ],
      "answer": 1,
    },
    {
      "question": "How did time become meaningful for the protagonist?",
      "options": [
        "they kept a calendar",
        "they had a routine",
        "time became meaningless",
        "they forgot how to count",
        "they never lost track",
      ],
      "answer": 2,
    },
    {
      "question": "What was the protagonist's main companion in the new world?",
      "options": [
        "the shadows on walls",
        "the memories of the past",
        "the sound of wind",
        "the taste of fresh air",
        "the earth itself",
      ],
      "answer": 4,
    },
    {
      "question": "How did nature react to the disaster?",
      "options": [
        "it ignored the ruins",
        "it tried to fix them",
        "it reclaimed the space",
        "it made it worse",
        "it disappeared",
      ],
      "answer": 2,
    },
    {
      "question": "What theme was touched upon in the novel?",
      "options": [
        "survival only",
        "adaptation and human spirit",
        "the power of nature",
        "the importance of time",
        "none of the above",
      ],
      "answer": 1,
    },
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_7",
  },
};
export default data;
