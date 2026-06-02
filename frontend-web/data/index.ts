import data202507 from "./2025-07/index.ts";
import data202508 from "./2025-08/index.ts";
import data202509 from "./2025-09/index.ts";
import data202510 from "./2025-10/index.ts";
import data202511 from "./2025-11/index.ts";
import data202512 from "./2025-12/index.ts";
import data202601 from "./2026-01/index.ts";
import data202602 from "./2026-02/index.ts";
import data202603 from "./2026-03/index.ts";
import data202604 from "./2026-04/index.ts";
import data202605 from "./2026-05/index.ts";
import data202606 from "./2026-06/index.ts";

const dailyData = {
  ...data202507,
  ...data202508,
  ...data202509,
  ...data202510,
  ...data202511,
  ...data202512,
  ...data202601,
  ...data202602,
  ...data202603,
  ...data202604,
  ...data202605,
  ...data202606,
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
