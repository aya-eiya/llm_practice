import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "Opening of the first Neiman Marcus store",
    "details":
      "May 10, 1907, was a significant day in the fashion industry as Stanley Marcus opened the doors to the first Neiman Marcus store in Dallas, Texas.",
  },
  "date": "2026-05-10",
  "title": "A Gown Fit for a Queen",
  "body":
    "It was the year 1907 and I, Emma, had just arrived in Dallas, Texas. As I strolled down Main Street, I couldn't help but notice the grandeur of the new Neiman Marcus store. Its sparkling windows and elegant façade seemed to whisper secrets of a bygone era.  \n\n I stepped inside, where I was immediately swept up in a whirlwind of luxurious fabrics and exquisite accessories. Mr. Stanley Marcus himself greeted me warmly, his eyes twinkling with a hint of mischief as he offered me a delicate lace fan. As I fanned myself with the elegant creation, I couldn't help but feel a sense of wonder at this new world that lay before me.  \n\n We chatted about everything from high society to music and art, our conversation flowing like a gentle stream on a summer day. As we spoke, I found myself falling for the charming proprietor in a way that left my heart skipping beats. But could a love so fierce truly be meant to last? Only time would tell.",
  "word count": 170,
  "dialog": [
    {
      "Meg":
        "I loved how Emma's character fell for Mr. Marcus, it was so romantic!",
    },
    {
      "Billy":
        "But didn't you think it was weird that she fell for him in like 5 minutes? I mean, they just met.",
    },
    {
      "Lui":
        "Actually, Billy, this is a classic example of how people can fall in love quickly. In the early 20th century, social etiquette and rules were much different.",
    },
    {
      "Kerry":
        "Yeah, but it's also kind of creepy, right? I mean, Emma just walked into his store and he gave her a fan, what even is that?",
    },
    {
      "Meg":
        "But don't you think Kerry, that Mr. Marcus was just being polite? Maybe he really did like Emma's company.",
    },
    {
      "Billy":
        "I guess so. But still, I don't know if I would've fallen for her either. What do you guys think about the historical context?",
    },
    {
      "Lui":
        "Well, Billy, that's a great question. The novel is set in 1907, and Dallas was a very different place back then. The city was rapidly growing, and Neiman Marcus was one of the first luxury department stores.",
    },
    {
      "Kerry":
        "Whoa, that's so cool! I didn't know that about Dallas. But what about Emma? What do you guys think about her as a character?",
    },
  ],
  "quiz": [
    {
      "question": "In what year was Emma in Dallas, Texas?",
      "options": [
        "1905",
        "1907",
        "1910",
        "1912",
        "1915",
      ],
      "answer": 1,
    },
    {
      "question": "What store did Emma visit when she arrived in Dallas?",
      "options": [
        "Neiman Marcus",
        "Macy's",
        "Saks Fifth Avenue",
        "Harrods",
        "Bloomingdale's",
      ],
      "answer": 0,
    },
    {
      "question": "Who greeted Emma warmly at Neiman Marcus?",
      "options": [
        "Mr. Stanley Marcus",
        "Detective Jameson",
        "The store owner",
        "A sales associate",
        "Emma herself",
      ],
      "answer": 0,
    },
    {
      "question":
        "What did Mr. Marcus give to Emma when she entered the store?",
      "options": [
        "A scarf",
        "A hat",
        "A delicate lace fan",
        "Gloves",
        "Shoes",
      ],
      "answer": 2,
    },
    {
      "question":
        "How old were Billy and Kerry according to their conversation about Emma's character?",
      "options": [
        "10 years old",
        "11 years old",
        "12 years old",
        "13 years old",
        "14 years old",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Fashion",
    "flavor": "Historical Romance",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
