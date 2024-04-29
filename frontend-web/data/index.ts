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
};
export const dates = Object.keys(dailyData).toSorted() as Array<
  keyof typeof dailyData
>;
export default dailyData;

export function containsKey(key: string): key is keyof typeof dailyData {
  return (dates as string[]).includes(key);
}
