import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Eiffel Tower was opened to the public",
    "details":
      "On December 5, 1889, the Eiffel Tower, built for the 1889 World's Fair in Paris, was officially opened to the public.",
  },
  "date": "2024-12-05",
  "title": "The Elixir of Dreams",
  "body":
    "In the mystical realm of Somnium, where the skies were painted with hues of crimson and gold, a young apprentice named Lyra stumbled upon an ancient tome hidden within the labyrinthine library of the Council of Mages. The pages, yellowed with age, whispered secrets of a forgotten elixir that could grant the drinker visions of the future.\n\n Intrigued, Lyra devoted herself to unlocking the mysteries of the elixir, pouring over dusty tomes and seeking guidance from the enigmatic Master Orion. As she delved deeper into her research, the whispers of the elixir grew louder, tempting her with promises of wisdom and power.\n\n But as Lyra's obsession with the elixir intensified, she began to realize that its true nature was far more complex than she had initially imagined. The visions it granted were not always clear, and the consequences of its use were shrouded in mystery. As she stood at the threshold of discovery, Lyra was faced with a choice: to pursue the elixir's secrets or to risk everything to protect Somnium from its potential dangers.\n\n The fate of the realm hung in the balance as Lyra wrestled with her decision, the whispers of the elixir echoing through her mind like a siren's call.",
  "word count": 203,
  "dialog": [
    {
      "Meg":
        "I'm still thinking about Lyra's decision to pursue the elixir's secrets. What do you guys think she should have done?",
    },
    {
      "Billy":
        "I think she made the right choice. The potential dangers of the elixir are too great, and Somnium needs her to be careful.",
    },
    {
      "Kerry":
        "But what if Lyra had succeeded in mastering the elixir? Would it have changed everything?",
    },
    {
      "Lui":
        "I agree with Billy. It's always better to err on the side of caution when dealing with powerful forces like the elixir.",
    },
    {
      "Meg":
        "I'm not so sure. Lyra's decision was what made her who she is today, and maybe that's what Somnium needed – someone to take risks and push boundaries.",
    },
    {
      "Billy":
        "But at what cost? If Lyra had failed or gotten too powerful, it could have put the entire realm in jeopardy.",
    },
    {
      "Kerry":
        "Yeah, but think about all the good she could have done with that power. Maybe it was worth the risk...",
    },
    {
      "Lui":
        "I still don't think it's worth it. There are always consequences to our actions, and we must be mindful of them.",
    },
    {
      "Meg":
        "I'm not convinced. Lyra's journey was what made this novel so compelling – the uncertainty, the struggle... it all felt real.",
    },
  ],
  "quiz": [
    {
      "question":
        "What did Lyra find in the labyrinthine library of the Council of Mages?",
      "options": [
        "A magical sword",
        "An ancient tome",
        "A mysterious scroll",
        "A hidden passage",
        "A secret door",
      ],
      "answer": 1,
    },
    {
      "question": "What was the purpose of Lyra's research?",
      "options": [
        "To uncover a hidden treasure",
        "To unlock the mysteries of the elixir",
        "To find a lost city",
        "To discover a new magic spell",
        "To learn a ancient language",
      ],
      "answer": 1,
    },
    {
      "question": "What was Lyra's decision about the elixir?",
      "options": [
        "To pursue its secrets",
        "To destroy it",
        "To hide it",
        "To give it to someone else",
        "To use it for herself",
      ],
      "answer": 0,
    },
    {
      "question": "What was the fate of Somnium hanging in balance?",
      "options": [
        "Its destruction",
        "Its creation",
        "Its protection",
        "Its exploration",
        "Its unknown future",
      ],
      "answer": 2,
    },
    {
      "question": "Who agreed with Billy that Lyra made the right choice?",
      "options": [
        "Kerry",
        "Meg",
        "Lui",
        "All of them",
        "None of them",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Architecture",
    "flavor": "Fantasy",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_6",
  },
};
export default data;
