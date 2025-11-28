import dailyData, { containsKey } from "../data/index.ts";
import { define } from "../tools/utils.ts";

const notfoundSVG =
  `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152 28"><text y=".9em" font-size="24">NOT FOUND</text></svg>`;
const notfound = () =>
  new Response(
    notfoundSVG,
    {
      status: 404,
      headers: { "content-type": 'image/svg+xml; charset="UTF-8"' },
    },
  );

export const handler = define.handlers({
  GET(ctx) {
    const req = ctx.req;
    let date: string | undefined = undefined;
    const qDate = new URL(req.url).searchParams.get("date") ?? undefined;
    if (qDate?.match(/^\d{4}-\d{2}-\d{2}$/)) {
      date = qDate;
    } else {
      const ref = req.headers.get("referer") ?? undefined;
      const m = ref?.match(/\/pages\/(\d{4}-\d{2}-\d{2})/);
      if (!m || m.length == 1) {
        return notfound();
      }
      if (!m[1]) {
        return notfound();
      }
      date = m[1];
    }
    if (!date) {
      return notfound();
    }
    if (!containsKey(date)) {
      return notfound();
    }
    const data = dailyData[date];
    const theme = String(data.params?.theme).toLowerCase().replace(/ /g, "-");
    const flavor = String(data.params?.flavor).toLocaleLowerCase().replace(
      / /g,
      "-",
    ).replace(/(science-fiction|sci-fi)/, "sf");
    const dir = Deno.cwd() + "/static/img/bookshelf";
    const stDir = Deno.readDirSync(dir);
    const qImg = new URL(req.url).searchParams.get("img") ?? "webp";
    const format = qImg === "jpg" ? "jpg" : "webp";
    let image_file = format === "webp"
      ? "undefined_x_undefined.jpg.webp"
      : "undefined_x_undefined.jpg";
    for (const entry of stDir) {
      const filename = String(entry.name);
      if (
        !filename.includes(theme + "_x_") &&
        filename.includes("_x_" + flavor) &&
        filename.endsWith(`.${format}`)
      ) {
        image_file = filename;
        continue;
      }
      if (
        filename.includes(theme + "_x_") && filename.includes("_x_" + flavor) &&
        filename.endsWith(`.${format}`)
      ) {
        image_file = filename;
        break;
      }
    }
    const file = Deno.readFileSync(`${dir}/${image_file}`);
    return new Response(file, {
      status: 200,
      headers: {
        "content-type": `image/${format}`,
      },
    });
  },
});
