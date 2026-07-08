import { QuizData } from "../../domains/quiz.ts";
const data: QuizData = {
  "event": {
    "event": "The Tuskegee Syphilis Study",
    "details":
      "On July 26, 1932, the United States Public Health Service began a study on syphilis in Macon County, Alabama, without informed consent from the African American men who participated. The study went on for 40 years and was only stopped in 1972 after it was exposed by a journalist.",
  },
  "date": "2026-07-26",
  "title": "Beneath the Shadows of Silence",
  "body":
    "In the sweltering heat of Macon County, Alabama, I first heard whispers about a government study on syphilis. My grandfather's eyes clouded over as he spoke in hushed tones about African American men unknowingly participating in this secret experiment. It was the 1930s, and my family lived under the shadow of segregation.  \n\n Years passed, but the memories lingered like a festering wound. I grew up with questions, not answers. Why were these men taken from their families without consent? What did the scientists hope to gain by hiding behind lies? My grandfather's stories fueled my curiosity, and I began to dig deeper.  \n\n The truth slowly unraveled, revealing a web of deceit that spanned decades. I felt a mix of emotions: anger at the injustice, sadness for those who suffered, and shame for being part of a society that allowed such atrocities to occur. As I reflected on my grandfather's words, I realized that even in the darkest corners of history, there is always hope for redemption.",
  "word count": 166,
  "dialog": [
    {
      "Kerry":
        "I'm still trying to process the atrocities that happened in Macon County, Alabama. How could something like that be kept secret for so long?",
    },
    {
      "Meg":
        "I know what you mean, Kerry. It's like they took away these men's autonomy and dignity. And it's not just about the syphilis experiment; it's also about the systemic racism and power dynamics at play.",
    },
    {
      "Lui":
        "As a teacher of social studies and history, I've taught my students about this topic before, but reading the novel again was a humbling experience. It reminded me of the importance of empathy and understanding in the face of complexity.",
    },
    {
      "Billy":
        "I agree with you all. What struck me was how the author wove together personal stories and historical context to create a powerful narrative. It made me think about my own community and how we can learn from these experiences.",
    },
    {
      "Kerry":
        "That's what I love about this novel, Billy - it doesn't shy away from difficult truths but instead uses them as a catalyst for growth and change. We should all be inspired to make a difference in our own ways.",
    },
    {
      "Meg":
        "I'm still trying to find the right words to describe how I feel after reading this book. It's like my heart is heavy with sorrow, but at the same time, I feel hopeful that we can create a better future for everyone.",
    },
    {
      "Lui":
        "As educators, it's our responsibility to facilitate these kinds of conversations and help our students develop critical thinking skills. This novel is an excellent resource for sparking discussions about empathy, justice, and human rights.",
    },
  ],
  "quiz": [
    {
      "question":
        "In what location did the government study on syphilis take place?",
      "options": [
        "New York",
        "Los Angeles",
        "Macon County, Alabama",
        "Chicago",
        "Boston",
      ],
      "answer": 2,
    },
    {
      "question":
        "What was the primary demographic affected by the secret experiment?",
      "options": [
        "African American men",
        "European American women",
        "Native American children",
        "African American women",
        "Latinx individuals",
      ],
      "answer": 0,
    },
    {
      "question":
        "How did the author of the novel approach the difficult truths in the story?",
      "options": [
        "Avoided discussing them altogether",
        "Treated them with humor",
        "Used them as a catalyst for growth and change",
        "Blamed others for the injustices",
        "Minimized their significance",
      ],
      "answer": 2,
    },
    {
      "question": "What emotion did Meg express after reading the novel?",
      "options": [
        "Anger",
        "Sadness",
        "Hopefulness",
        "Empathy",
        "Confusion",
      ],
      "answer": 3,
    },
    {
      "question":
        "Who emphasized the importance of empathy and understanding in teaching history?",
      "options": [
        "Billy",
        "Kerry",
        "Meg",
        "Lui",
        "The narrator",
      ],
      "answer": 3,
    },
  ],
  "params": {
    "theme": "Education",
    "flavor": "Young Adult",
    "models": {
      "main": "llama3.1",
      "novel": "llama3.1",
    },
    "level": "Level_2",
  },
};
export default data;
