import data20240401 from "./2024-04-01.ts";
import data20240402 from "./2024-04-02.ts";
import data20240403 from "./2024-04-03.ts";
import data20240404 from "./2024-04-04.ts";
import data20240405 from "./2024-04-05.ts";
import data20240406 from "./2024-04-06.ts";
import data20240407 from "./2024-04-07.ts";
import data20240408 from "./2024-04-08.ts";
import data20240409 from "./2024-04-09.ts";
import data20240410 from "./2024-04-10.ts";
import data20240411 from "./2024-04-11.ts";
import data20240412 from "./2024-04-12.ts";
import data20240413 from "./2024-04-13.ts";
import data20240414 from "./2024-04-14.ts";
import data20240415 from "./2024-04-15.ts";
import data20240416 from "./2024-04-16.ts";
import data20240417 from "./2024-04-17.ts";
import data20240418 from "./2024-04-18.ts";
import data20240419 from "./2024-04-19.ts";
import data20240420 from "./2024-04-20.ts";
import data20240421 from "./2024-04-21.ts";
import data20240422 from "./2024-04-22.ts";
import data20240423 from "./2024-04-23.ts";
import data20240424 from "./2024-04-24.ts";
import data20240425 from "./2024-04-25.ts";
import data20240426 from "./2024-04-26.ts";
import data20240427 from "./2024-04-27.ts";
import data20240428 from "./2024-04-28.ts";
import data20240429 from "./2024-04-29.ts";

// TODO auto-generate this file
const dailyData = {
  "2024-04-01": data20240401,
  "2024-04-02": data20240402,
  "2024-04-03": data20240403,
  "2024-04-04": data20240404,
  "2024-04-05": data20240405,
  "2024-04-06": data20240406,
  "2024-04-07": data20240407,
  "2024-04-08": data20240408,
  "2024-04-09": data20240409,

  "2024-04-10": data20240410,
  "2024-04-11": data20240411,
  "2024-04-12": data20240412,
  "2024-04-13": data20240413,
  "2024-04-14": data20240414,
  "2024-04-15": data20240415,
  "2024-04-16": data20240416,
  "2024-04-17": data20240417,
  "2024-04-18": data20240418,
  "2024-04-19": data20240419,

  "2024-04-20": data20240420,
  "2024-04-21": data20240421,
  "2024-04-22": data20240422,
  "2024-04-23": data20240423,
  "2024-04-24": data20240424,
  "2024-04-25": data20240425,
  "2024-04-26": data20240426,
  "2024-04-27": data20240427,
  "2024-04-28": data20240428,
  "2024-04-29": data20240429,
};
export const dates = Object.keys(dailyData).toSorted() as Array<
  keyof typeof dailyData
>;
export default dailyData;

export function containsKey(key: string): key is keyof typeof dailyData {
  return (dates as string[]).includes(key);
}
