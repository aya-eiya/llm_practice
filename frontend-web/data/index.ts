import data20240401 from "./2024-04-01.ts";
import data20240402 from "./2024-04-02.ts";
import data20240403 from "./2024-04-03.ts";
import data20240404 from "./2024-04-04.ts";
import data20240405 from "./2024-04-05.ts";
import data20240406 from "./2024-04-06.ts";

// TODO auto-generate this file

const dailyData = {
  "2024-04-01": data20240401,
  "2024-04-02": data20240402,
  "2024-04-03": data20240403,
  "2024-04-04": data20240404,
  "2024-04-05": data20240405,
  "2024-04-06": data20240406,
};
export const dates = Object.keys(dailyData).toSorted() as Array<
  keyof typeof dailyData
>;
export default dailyData;

export function containsKey(key: string): key is keyof typeof dailyData {
  return (dates as string[]).includes(key);
}
