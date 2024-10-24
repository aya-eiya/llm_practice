import data202404 from "./2024-04/index.ts";
import data202405 from "./2024-05/index.ts";
import data202406 from "./2024-06/index.ts";
import data202407 from "./2024-07/index.ts";
import data202408 from "./2024-08/index.ts";
import data202409 from "./2024-09/index.ts";
import data202410 from "./2024-10/index.ts";
import data202411 from "./2024-11/index.ts";

const dailyData = {
  ...data202404,
  ...data202405,
  ...data202406,
  ...data202407,
  ...data202408,
  ...data202409,
  ...data202410,
  ...data202411,
};

const devDate = Deno.env.get("DEV_DATE");
const now = devDate ? new Date(devDate) : new Date();

export default dailyData;
export const today = (() => {
  return now.getUTCFullYear() * 10000 + (now.getUTCMonth() + 1) * 100 +
    now.getUTCDate();
})();

export const dates = Object.keys(dailyData).filter((date) => {
  const time = Number(date.replaceAll("-", ""));
  return time <= today;
}) as Array<keyof typeof dailyData>;

export function containsKey(key: string): key is keyof typeof dailyData {
  return (dates as string[]).includes(key);
}

export function isThisMonth(date: string): boolean {
  return (
    now.getUTCFullYear() +
        "-" +
        (now.getUTCMonth() + 1).toString().padStart(2, "0") ===
      date.slice(0, 7)
  );
}
