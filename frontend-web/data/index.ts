import data20240401 from "./2024-04-01.ts";

// TODO auto-generate this file

const dailyData = {
  "2024-04-01": data20240401,
};
export const dates = Object.keys(dailyData).toSorted() as Array<
  keyof typeof dailyData
>;
export default dailyData;

export function containsKey(key: string): key is keyof typeof dailyData {
  return (dates as string[]).includes(key);
}
