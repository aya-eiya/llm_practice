import data20240428 from "./2024-04-28.ts";

const dailyData = {
  "2024-04-28": data20240428,
};
export default dailyData;

export function containsKey(key: string): key is keyof typeof dailyData {
  return Object.keys(dailyData).includes(key);
}
