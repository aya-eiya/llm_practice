import data20240428 from "./2024-04-28.ts";

// TODO auto-generate this file

const dailyData = {
  "2024-04-28": data20240428,
};
export const dates = Object.keys(dailyData).toSorted() as Array<
  keyof typeof dailyData
>;
export default dailyData;

export function containsKey(key: string): key is keyof typeof dailyData {
  return (dates as string[]).includes(key);
}
