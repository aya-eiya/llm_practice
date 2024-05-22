const videoData = {
  "2024-05-16": {
    "id": "qVxVq4fylGk",
    "title":
      "[2024-05-16][Daily English Novels For Learners] Echoes of Versailles",
  },
  "2024-05-18": {
    "id": "2IzenF7Iq7k",
    "title":
      "[2024-05-18][Daily English Novels For Learners] The Siege of Syracuse",
  },
  "2024-05-19": {
    "id": "tk_jvyA3Obg",
    "title":
      "[2024-05-19][Daily English Novels For Learners] Disco Fever: A Tale of Rhythm and Glamour",
  },
  "2024-05-20": {
    "id": "T9XPzbgvk6U",
    "title": "[2024-05-20][Daily English Novels For Learners] Eclipse of Style",
  },
  "2024-05-21": {
    "id": "KFUOuZiT4vg",
    "title":
      "[2024-05-21][Daily English Novels For Learners] A Night to Remember",
  },
  "2024-05-22": {
    "id": "rwzIQdKS9bM",
    "title":
      "[2024-05-22][Daily English Novels For Learners] Starry Night Over the Rhone Steampunk",
  },
  "2024-05-23": {
    "id": "ZAeeQmmQ91c",
    "title":
      "[2024-05-23][Daily English Novels For Learners] The Defenestration of Prague",
  },
} as const;

export type VideoDate = keyof typeof videoData;
export function isVideoDate(date: string): date is VideoDate {
  return Object.keys(videoData).includes(date);
}

export default videoData;
