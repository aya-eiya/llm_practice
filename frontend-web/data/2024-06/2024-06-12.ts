import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "George Lucas marries Marcia Lou Griffin",
    "details":
      'On June 12, 1969, filmmaker George Lucas, known for creating the "Star Wars" and "Indiana Jones" franchises, married film editor Marcia Lou Griffin. Griffin won the Academy Award for Best Film Editing for her work on Lucas\'s film "Star Wars" (1977). They divorced in 1983.',
  },
  "date": "2024-06-12",
  "title": "The Last Love",
  "body":
    "In the ravaged streets of New Eden, the once-thriving city now lay in ruins. The air reeked of smoke and desperation as survivors scavenged for scraps. Amidst the desolation, a glimmer of hope flickered – George and Marcia's love story, a beacon of resilience in a world gone mad.  \n\n The couple had met amidst the chaos, their paths crossing like two ships passing in the night. As they navigated the treacherous landscape, their bond grew stronger with each step. They shared stories of the past, their laughter echoing off the crumbling buildings as they relived memories of a world that once was.  \n\n Now, they roamed the wasteland together, an unlikely duo in a world where love was a luxury few could afford. George's creative spark still burned bright, and Marcia's editing skills remained sharp as ever. As they explored the ruins, they pieced together fragments of their former lives, rebuilding not just their relationship but also their sense of purpose.  \n\n In this bleak new world, love was a lifeline – a thread connecting two souls in a sea of uncertainty. George and Marcia's love story became a testament to humanity's capacity for hope and survival, a reminder that even in the darkest times, love could bloom like a phoenix from the ashes.",
  "word count": 212,
  "dialog": [
    {
      "Meg":
        "Oh, that was so beautiful! I loved how their love story unfolded amidst all the chaos. It reminds me of 'The Lunar Chronicles' but with a post-apocalyptic twist.",
    },
    {
      "Billy":
        "I know, right? It's crazy to think about how the world could change so drastically. What do you think caused the city to become a wasteland, Mr. Lui?",
    },
    {
      "Lui":
        "Well, Billy, the story doesn't explicitly state the cause, but it could be anything from natural disasters to, unfortunately, human conflict. It's a reminder that our world is precious and we need to protect it.",
    },
    {
      "Kerry":
        "Yeah, and talk about a power couple! I mean, George and Marcia using their creativity and skills to rebuild their lives? That's awesome!  They're like the ultimate survivors.",
    },
    {
      "Meg":
        "I loved how their creativity became a symbol of hope. It shows that even in the darkest of times, we can find ways to express ourselves and find meaning.",
    },
    {
      "Billy":
        "It's like their creativity was a superpower, helping them cope and rebuild. I wonder if they'll ever be able to fully restore New Eden to its former glory.",
    },
    {
      "Lui":
        "That's an interesting thought, Billy.  The story seems to suggest that while the past is gone, there's always potential for a new beginning, a new kind of beauty in the ashes.",
    },
    {
      "Kerry":
        "Do you think their love story is realistic, Mr. Lui?  I mean, finding love in a wasteland seems kinda far-fetched.",
    },
    {
      "Lui":
        "Kerry, love can blossom in the most unexpected of places.  In times of crisis, people often find solace and strength in human connection. Remember, the story is highlighting the power of hope and resilience.",
    },
    {
      "Meg":
        "Exactly!  It's a reminder that even when everything seems lost, love and hope can still thrive.  That's what makes their story so inspiring.",
    },
  ],
  "quiz": [
    {
      "question": "What is the main theme of the story 'The Last Love'?",
      "options": [
        "The importance of survival skills in a post-apocalyptic world.",
        "The destructive nature of human conflict.",
        "The power of love and hope, even in the darkest of times.",
        "The beauty of nature amidst destruction.",
        "The struggle to find food and shelter after a disaster.",
      ],
      "answer": 2,
    },
    {
      "question":
        "How does the story describe George and Marcia's relationship?",
      "options": [
        "A casual acquaintance that develops into friendship.",
        "A long-lasting marriage tested by hardship.",
        "A forbidden romance opposed by their families.",
        "A chance encounter that blossoms into a deep love.",
        "A rivalry that transforms into a grudging respect.",
      ],
      "answer": 3,
    },
    {
      "question":
        "What is the significance of George's creative spark and Marcia's editing skills?",
      "options": [
        "They use their skills to earn a living by entertaining others.",
        "Their skills help them locate resources and navigate the wasteland.",
        "They represent their ability to rebuild their lives and find hope.",
        "They are a source of conflict as they struggle to collaborate.",
        "They are a reminder of the careers they lost in the disaster.",
      ],
      "answer": 2,
    },
    {
      "question":
        "According to Mr. Lui, what is NOT a possible reason for the city's destruction?",
      "options": [
        "Natural disasters",
        "Human conflict",
        "Alien invasion",
        "Climate change",
        "Unknown causes",
      ],
      "answer": 2,
    },
    {
      "question": "Why does Meg find the story inspiring?",
      "options": [
        "It portrays realistic survival strategies.",
        "It offers a warning about environmental destruction.",
        "It celebrates the enduring power of love and hope.",
        "It provides a detailed description of a post-apocalyptic world.",
        "It features relatable characters facing difficult challenges.",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Film",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "gemini",
      "novel": "llama3",
    },
    "level": "Level_5",
  },
};
export default data;
