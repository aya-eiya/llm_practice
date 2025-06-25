import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "George Eastman Announces Kodak Brownie Camera",
    "details": "On May 10, 1900, George Eastman announced the introduction of the Kodak Brownie camera, a pioneering achievement in photography that made it possible for everyday people to capture photographs. The Brownie camera was the first box camera to be mass-produced and priced affordably, making photography accessible to a wider audience."
  },
  "date": "2025-05-10",
  "title": "Echoes of Silence",
  "body": "The world had ended in a cacophony of destruction, the once blue skies now a perpetual gray, as if the very heavens themselves were mourning the loss of humanity. I walked through the desolate streets, my footsteps echoing off the crumbling buildings, a haunting reminder that I was one of the few remaining survivors.  \n\n The Kodak Brownie camera had been a relic of a bygone era, a device that captured moments in time with precision and clarity. But now, it lay shattered on the ground, its lens cracked beyond repair, a poignant symbol of the world's irreparable damage.  \n\n I came upon a small park, the trees bare and skeletal, their branches like bony fingers reaching towards the sky. In the center of the park stood a lone bench, weathered to a soft gray that seemed almost white in the dim light. On the backrest was etched a phrase: 'The only true wisdom is in knowing you know nothing.' I sat down, and for a moment, the silence was almost palpable.",
  "word count": 170,
  "dialog": [
    {
      "Billy": "Wow, I loved the ending! The desolate streets and the gray skies really painted a picture of a post-apocalyptic world. It was like I was right there with the protagonist."
    },
    {
      "Meg": "I agree, Billy! And the way the author described the Kodak Brownie camera as a relic of a bygone era... it was so poignant! It really made me think about how fragile our world is and how quickly we can lose everything."
    },
    {
      "Kerry": "Ha! Yeah, like that's never going to happen again. I mean, have you guys seen the state of the environment lately? We're basically doomed anyway..."
    },
    {
      "Lui": "Well, let's not be too cynical, Kerry. The novel was actually quite thought-provoking. It made me think about the importance of preserving our history and culture in the face of destruction."
    },
    {
      "Meg": "I loved how the author wove together themes of loss and survival. And that quote on the bench? 'The only true wisdom is in knowing you know nothing.' That's so profound!"
    },
    {
      "Billy": "Yeah, and it was also really cool how the protagonist found solace in that moment of silence on the bench. It made me think about the importance of taking time to reflect and appreciate what we have."
    },
    {
      "Kerry": "I don't know, guys... I still think it's all a bit too serious. Can't we just enjoy the ride and not worry so much about the end of the world?"
    },
    {
      "Lui": "Well, Kerry, sometimes you gotta face reality, even if it's uncomfortable. But hey, at least the novel made us think, right?"
    },
    {
      "Meg": "I'm just gonna go re-read the book now... I need to get lost in that world again..."
    }
  ],
  "quiz": [
    {
      "question": "What was the state of the world in the story?",
      "options": [
        "A peaceful world",
        "A world with perpetual gray skies",
        "A world without humans",
        "A world with only green trees",
        "A world without any problems"
      ],
      "answer": 1
    },
    {
      "question": "What was described as a relic of a bygone era?",
      "options": [
        "The Kodak Brownie camera",
        "A smartphone",
        "A TV",
        "A computer",
        "A book"
      ],
      "answer": 0
    },
    {
      "question": "Who said that the state of the environment is basically doomed anyway?",
      "options": [
        "Billy",
        "Meg",
        "Kerry",
        "Lui",
        "The protagonist"
      ],
      "answer": 2
    },
    {
      "question": "What was etched on the backrest of the bench in the park?",
      "options": [
        "'The only true wisdom is in knowing you know nothing.'",
        "'Knowledge is power.'",
        "'Wisdom is strength.'",
        "'Intelligence is beauty.'",
        "'Beauty is truth.'"
      ],
      "answer": 0
    },
    {
      "question": "What did the protagonist find solace in on the bench?",
      "options": [
        "A book",
        "A phone",
        "The quote on the bench",
        "The silence around him",
        "His friends"
      ],
      "answer": 3
    }
  ],
  "params": {
    "theme": "Photography",
    "flavor": "Post-Apocalyptic",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1"
    },
    "level": "Level_8"
  }
}
export default data;