import { Context } from "fresh";
import dailyData, { dates as dataDates } from "../../../data/index.ts";
import SearchPage from "./[theme].tsx";

const PAGE_SIZE = 10;

export const handler = {
  GET(ctx: Context<unknown>) {
    const req = ctx.req;
    const { theme } = dailyData[dataDates[dataDates.length - 1]].params;
    const _page = new URL(req.url).searchParams.get("page");
    const page = Math.max(_page ? Number(_page) : 1, 1);
    const find = [];
    for (let i = dataDates.length - 1; i >= 0; i--) {
      const key = dataDates[i];
      if (
        dailyData[key].params.theme.toLowerCase() === theme.toLowerCase()
      ) {
        find.push(dailyData[key].date);
      }
    }
    const dates = find.slice(PAGE_SIZE * (page - 1), PAGE_SIZE * page);
    return {
      data: { dates, theme, maxCount: find.length, page },
      status: find.length > 0 ? 200 : 404,
    };
  },
};

export default SearchPage;
