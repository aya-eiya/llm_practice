import data202412 from "./2024-12/index.ts";
import data202501 from "./2025-01/index.ts";
import data202502 from "./2025-02/index.ts";
import data202503 from "./2025-03/index.ts";
import data202504 from "./2025-04/index.ts";
import data202505 from "./2025-05/index.ts";
import data202506 from "./2025-06/index.ts";
import data202507 from "./2025-07/index.ts";
import data202508 from "./2025-08/index.ts";

const dailyData = {
  ...data202412,
  ...data202501,
  ...data202502,
  ...data202503,
  ...data202504,
  ...data202505,
  ...data202506,
  ...data202507,
  ...data202508,
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
