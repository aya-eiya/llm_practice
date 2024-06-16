import data202404 from "./2024-04/index.ts";
import data202405 from "./2024-05/index.ts";
import data202406 from "./2024-06/index.ts";

const dailyData = {
  ...data202404,
  ...data202405,
  ...data202406,
};

const devDate = Deno.env.get("DEV_DATE");
const now = devDate ? new Date(devDate) : new Date();

export default dailyData;
export const today = (() => {
  return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
})();

export const dates = Object.keys(dailyData).filter((date) => {
  const time = Number(date.replaceAll("-", ""));
  return time <= today;
}) as Array<
  keyof typeof dailyData
>;

export function containsKey(key: string): key is keyof typeof dailyData {
  return (dates as string[]).includes(key);
}

export function isThisMonth(date: string): boolean {
  return now.getFullYear() + "-" +
      (now.getMonth() + 1).toString().padStart(2, "0") === date.slice(0, 7);
}
