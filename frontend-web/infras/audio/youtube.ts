import { AudioData } from "../../domains/audio.ts";
import videoData, { isVideoDate } from "../../data/videoData.ts";

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
