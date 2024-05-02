import data202404 from "./2024-04/index.ts";
import data202405 from "./2024-05/index.ts";

const dailyData = {
  ...data202404,
  ...data202405,
};

export default dailyData;

export const dates = Object.keys(dailyData) as Array<
  keyof typeof dailyData
>;

export function containsKey(key: string): key is keyof typeof dailyData {
  return (dates as string[]).includes(key);
}
