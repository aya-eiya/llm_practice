import { AudioData } from "../../domains/audio.ts";
import videoData from "../../data/videoData.ts";

// TODO: move to videoData.ts
type VideoDate = keyof typeof videoData;
function isVideoDate(date: string): date is VideoDate {
  return Object.keys(videoData).includes(date);
}

export function getAudioData(date: string): AudioData | undefined {
  if (!isVideoDate(date)) {
    return undefined;
  }
  return {
    date: date,
    id: videoData[date].id,
    title: videoData[date].title,
  };
}

export const playerId = "yt_hidden_player";
