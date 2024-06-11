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
  "2024-05-31": {
    "id": "mef00_ynf6o",
    "title": "[2024-05-31][MyniQ] The Last Refuge [English Listening Quiz]",
  },
  "2024-06-01": {
    "id": "T7sT43YjG0k",
    "title": "[2024-06-01][MyniQ] The Turning Point [English Listening Quiz]",
  },
  "2024-06-02": {
    "id": "YUJzqMJJcVQ",
    "title": "[2024-06-02][MyniQ] Aerial Affection [English Listening Quiz]",
  },
  "2024-06-03": {
    "id": "ql7gmg8zhV8",
    "title":
      "[2024-06-03][MyniQ] The Portrait of Shadows [English Listening Quiz]",
  },
  "2024-06-04": {
    "id": "g954QcLxp2s",
    "title":
      "[2024-06-04][MyniQ] The Last Roll of Film [English Listening Quiz]",
  },
  "2024-06-05": {
    "id": "ZtDKb7m07u8",
    "title": "[2024-06-05][MyniQ] In Rainbows of Love [English Listening Quiz]",
  },
  "2024-06-06": {
    "id": "71Tks6K8Lko",
    "title":
      "[2024-06-06][MyniQ] The Fading Light of D-Day [English Listening Quiz]",
  },
  "2024-06-07": {
    "id": "fDrQH-u1zAM",
    "title":
      "[2024-06-07][MyniQ] The Architect of Tomorrow [English Listening Quiz]",
  },
  "2024-06-08": {
    "id": "Quoy7kqB8dI",
    "title": "[2024-06-08][MyniQ] The Last Code [English Listening Quiz]",
  },
  "2024-06-09": {
    "id": "yjhv2nbtQx8",
    "title": "[2024-06-09][MyniQ] Neon Dreams [English Listening Quiz]",
  },
  "2024-06-10": {
    "id": "NirOOqPHCLU",
    "title":
      "[2024-06-10][MyniQ] Love on Henrik's Birthday [English Listening Quiz]",
  },
  "2024-06-11": {
    "id": "R5sbgPLj_eM",
    "title": "[2024-06-11][MyniQ] A Moment in Time [English Listening Quiz]",
  },
} as const;

export type VideoDate = keyof typeof videoData;
export function isVideoDate(date: string): date is VideoDate {
  return Object.keys(videoData).includes(date);
}

export default videoData;
