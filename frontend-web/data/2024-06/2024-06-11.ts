import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": 'Premiere of "The Blacks"',
    "details":
      'On June 11, 1959, Jean Genet\'s controversial play "The Blacks: A Clown Show" premiered in Paris at the Théâtre de Lutèce. This groundbreaking work, exploring themes of race, colonialism, and identity, would go on to have a significant impact on both French and American theater.',
  },
  "date": "2024-06-11",
  "title": "The Curtain Rises",
  "body":
    "As I walked into the dimly lit theater, the air was electric with anticipation. The premiere of Jean Genet's provocative play, \"The Blacks,\" had finally arrived in Paris. I had heard whispers about its controversial themes and bold storytelling, but nothing could have prepared me for the emotions that would unfold on stage.  \n\n As the lights dimmed, a sea of black faces stared back at us, their eyes gleaming with a mixture of sadness and defiance. The story unfolded like a tapestry, weaving together tales of colonialism, identity, and the struggles of the African diaspora. I felt my heart beating in tandem with the rhythms of the actors' voices, as they poured out their souls onto the stage.  \n\n As the curtain fell, I was left breathless, my mind reeling with the weight of the performances. The play had left me questioning everything I thought I knew about race, power, and humanity. In that moment, I realized that art has the power to challenge our perspectives, to make us see the world through different eyes.",
  "word count": 174,
  "dialog": [
    {
      "Kerry":
        "Whoa, that play sounds intense!  All those eyes staring back... kinda creepy, but cool creepy, you know?",
    },
    {
      "Meg":
        "I know, right? Imagine the emotions!  It's like their stories were leaping off the stage and grabbing you.",
    },
    {
      "Billy":
        "I wonder what historical events they were talking about? Colonialism is a pretty big topic. Were they talking about a specific country?",
    },
    {
      "Lui":
        "That's a great question, Billy.  'The Blacks' is known for using allegory, so it's not always about direct historical events. It's more about the overall experience of oppression and fighting for your identity.",
    },
    {
      "Kerry":
        "So like, they were superheroes, but in real life? Fighting against bad guys, but the bad guys were... ideas?",
    },
    {
      "Meg":
        "Kind of!  Except the play makes you realize it's way more complicated than just good versus evil. Everyone's got their own story.",
    },
    {
      "Lui":
        "Exactly, Meg.  Genet wanted to shake people up, make them uncomfortable and really think about race and power dynamics.",
    },
    {
      "Billy": "Did it work? Did people change their minds after seeing it?",
    },
    {
      "Lui":
        "That's the thing about art, Billy. You can't force change, but you can plant seeds.  The play sparked a lot of debate, which is what Genet wanted.",
    },
    {
      "Kerry":
        "Makes you think, that's for sure.  Bet those actors were amazing to pull it off.",
    },
  ],
  "quiz": [
    {
      "question":
        "What makes the narrator think the play will be interesting even before watching it?",
      "options": [
        "The theater is dimly lit and creates a mysterious atmosphere.",
        "The narrator has heard that the play is controversial and bold.",
        "The narrator is a big fan of Jean Genet's other works.",
        "The play is a premiere, meaning it is the first time it's shown.",
        "The narrator sees many familiar faces in the audience.",
      ],
      "answer": 1,
    },
    {
      "question":
        "How does Kerry describe the feeling of all the actors' eyes staring back?",
      "options": [
        "Inspiring and powerful.",
        "Sad and moving.",
        "Creepy but cool.",
        "Confusing and unsettling.",
        "Angry and intimidating.",
      ],
      "answer": 2,
    },
    {
      "question": "According to Lui, what is 'The Blacks' really about?",
      "options": [
        "Specific historical events during colonialism.",
        "The lives of famous African heroes.",
        "The struggles and triumphs of a particular African tribe.",
        "The universal experience of oppression and the fight for identity.",
        "A fictional superhero story with allegorical meaning.",
      ],
      "answer": 3,
    },
    {
      "question":
        "What does the phrase 'plant seeds' mean in the context of Lui's explanation?",
      "options": [
        "To force people to change their opinions.",
        "To secretly spread propaganda to a large audience.",
        "To start a revolution through art.",
        "To introduce ideas that might lead to change over time.",
        "To inspire people to become activists.",
      ],
      "answer": 3,
    },
    {
      "question": "How does the narrator feel after watching the play?",
      "options": [
        "Confused and overwhelmed.",
        "Angry and motivated to fight injustice.",
        "Deeply moved and intellectually stimulated.",
        "Disappointed by the play's message.",
        "Inspired to become a playwright.",
      ],
      "answer": 2,
    },
  ],
  "params": {
    "theme": "Theater",
    "flavor": "Romance",
    "models": {
      "main": "gemini",
      "novel": "llama3",
    },
    "level": "Level_4",
  },
};
export default data;
