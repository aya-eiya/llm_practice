import data202404 from "./2024-04/index.ts";
import data202405 from "./2024-05/index.ts";

const dailyData = {
  ...data202404,
  ...data202405,
};

export default dailyData;
const today = (() => {
  const devDate = Deno.env.get("DEV_DATE");
  const now = devDate && Object.keys(dailyData).includes(devDate)
    ? new Date(devDate)
    : new Date();
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
