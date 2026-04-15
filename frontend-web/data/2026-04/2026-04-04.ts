import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Beatles release Sgt Pepper's Lonely Hearts Club Band",
    "details":
      "Sgt. Pepper's Lonely Hearts Club Band is a studio album by the English rock band The Beatles, released on June 1, 1967, in the United Kingdom and two days later in the United States.",
  },
  "date": "2026-04-04",
  "title": "Echoes of Sgt Pepper",
  "body":
    "The streets were empty, save for the faint whispers of 'A Day in the Life' carried on the wind. It was as if the Beatles themselves had summoned a melancholy fog to shroud the city.  \n\n I wandered through the desolate streets, my footsteps echoing off the buildings like a cacophony of despair. The once-vibrant colors of the album cover now seemed to mock me with their very brightness, a cruel reminder of all that was lost.  \n\n And then, I saw it - a figure standing atop a distant hill, playing the melody from 'Lucy in the Sky' on an old harmonica. The music seemed to call to me, drawing me closer like a siren's song. As I approached, the figure turned, its face a twisted mockery of John Lennon's own features.  \n\n The music swelled, filling my chest with a sense of dread. For in that moment, I knew that Sgt Pepper's Lonely Hearts Club Band was not just an album - it was a harbinger of doom, a warning of the darkness that lurked beneath the surface of our seemingly idyllic world.",
  "word count": 182,
  "dialog": [
    {
      "Meg":
        "I couldn't put it down! The way the author wove music into the story was genius.",
    },
    {
      "Lui":
        "I have to agree, Meg. It's not every day you come across a novel that so masterfully blends genres like this.",
    },
    {
      "Kerry":
        "Yeah, I loved how the Beatles' songs were woven throughout the narrative. But what really got me was the themes of loss and melancholy. The author didn't shy away from exploring some pretty heavy stuff.",
    },
    {
      "Billy":
        "I noticed that too! It's like the author took this really iconic album and turned it into a metaphor for the human experience. Brilliant!",
    },
    {
      "Meg":
        "Exactly, Billy! And I loved how the author didn't just stop at the music. The way he described the city, the characters... it all felt so vivid and immersive.",
    },
    {
      "Lui":
        "As an educator, I appreciate when authors tackle complex themes in a way that's accessible to readers of all ages. This novel does just that.",
    },
    {
      "Kerry":
        "Yeah, and it's not just about the themes or the music. The writing itself is stunning. I mean, have you seen how the author uses language to evoke mood and atmosphere?",
    },
    {
      "Billy":
        "Totally agree! And I think what really sets this novel apart is its ability to make readers feel something deep in their chests. It's not just a surface-level story; it gets under your skin.",
    },
  ],
  "quiz": [
    {
      "question": "What was the title of the novel?",
      "options": [
        "Echoes of Sgt Pepper",
        "Sgt Pepper's Lonely Hearts Club Band",
        "A Day in the Life",
        "Lucy in the Sky",
        "The Beatles' Album",
      ],
      "answer": 0,
    },
    {
      "question":
        "Who was playing the melody from 'Lucy in the Sky' on an old harmonica?",
      "options": [
        "The narrator",
        "John Lennon",
        "A mysterious woman",
        "The author",
        "No one",
      ],
      "answer": 2,
    },
    {
      "question": "What theme did Kerry notice the novel exploring?",
      "options": [
        "Loss and melancholy",
        "Friendship and love",
        "Music and nostalgia",
        "War and sacrifice",
        "Hope and redemption",
      ],
      "answer": 0,
    },
    {
      "question": "According to Lui, what does he appreciate about this novel?",
      "options": [
        "The way the author used language to evoke mood and atmosphere",
        "The blending of genres in the story",
        "The ability of the author to tackle complex themes",
        "The vivid descriptions of the city and characters",
        "All of the above",
      ],
      "answer": 4,
    },
    {
      "question": "What was Meg impressed by in the novel?",
      "options": [
        "The way the Beatles' songs were woven throughout the narrative",
        "The author's ability to evoke a sense of dread",
        "The vivid descriptions of the city and characters",
        "The blending of genres in the story",
        "All of the above",
      ],
      "answer": 0,
    },
  ],
  "params": {
    "theme": "Music",
    "flavor": "Horror",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_8",
  },
};
export default data;
