const videoData = {} as const;

export type VideoDate = keyof typeof videoData;
export function isVideoDate(date: string): date is VideoDate {
  return Object.keys(videoData).includes(date);
}

export default videoData;
