const videoData = {
  "2024-05-16": {
    "id": "qVxVq4fylGk",
    "title":
      "[2024-05-16][MyniQ] Echoes of Versailles [English Listening Quiz]",
  },
  "2024-05-18": {
    "id": "2IzenF7Iq7k",
    "title":
      "[2024-05-18][MyniQ] The Siege of Syracuse [English Listening Quiz]",
  },
  "2024-05-19": {
    "id": "tk_jvyA3Obg",
    "title":
      "[2024-05-19][MyniQ] Disco Fever: A Tale of Rhythm and Glamour [English Listening Quiz]",
  },
  "2024-05-20": {
    "id": "T9XPzbgvk6U",
    "title": "[2024-05-20][MyniQ] Eclipse of Style [English Listening Quiz]",
  },
  "2024-05-21": {
    "id": "KFUOuZiT4vg",
    "title": "[2024-05-21][MyniQ] A Night to Remember [English Listening Quiz]",
  },
  "2024-05-22": {
    "id": "rwzIQdKS9bM",
    "title":
      "[2024-05-22][MyniQ] Starry Night Over the Rhone Steampunk [English Listening Quiz]",
  },
  "2024-05-23": {
    "id": "ZAeeQmmQ91c",
    "title":
      "[2024-05-23][MyniQ] The Defenestration of Prague [English Listening Quiz]",
  },
  "2024-05-24": {
    "id": "bYiOWC6aBsw",
    "title":
      "[2024-05-24][MyniQ] The Flatiron Dimension [English Listening Quiz]",
  },
  "2024-05-25": {
    "id": "X9axkTfgWJg",
    "title":
      "[2024-05-25][MyniQ] The Knoll Family Tree [English Listening Quiz]",
  },
  "2024-05-26": {
    "id": "HzNqrEuvfp0",
    "title": "[2024-05-26][MyniQ] The Mechanical Mind [English Listening Quiz]",
  },
  "2024-05-27": {
    "id": "c0rM9NMzm1c",
    "title": "[2024-05-27][MyniQ] Love in Bloom [English Listening Quiz]",
  },
  "2024-05-28": {
    "id": "XRdp5iKRk74",
    "title":
      "[2024-05-28][MyniQ] Ghost in the Machine [English Listening Quiz]",
  },
  "2024-05-29": {
    "id": "qAQdDbeW-jU",
    "title": "[2024-05-29][MyniQ] Swan Magic [English Listening Quiz]",
  },
  "2024-05-30": {
    "id": "DfJF4pj8nbw",
    "title":
      "[2024-05-30][MyniQ] The Chicago Firecracker [English Listening Quiz]",
  },
} as const;

export type VideoDate = keyof typeof videoData;
export function isVideoDate(date: string): date is VideoDate {
  return Object.keys(videoData).includes(date);
}

export default videoData;
