import { Handlers } from "$fresh/server.ts";
import dailyData, { containsKey } from "../data/index.ts";

const notfound = () =>
  new Response(
    `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152 28"><text y=".9em" font-size="24">NOT FOUND</text></svg>`,
    {
      status: 404,
      headers: { "content-type": 'image/svg+xml; charset="UTF-8"' },
    },
  );

export const handler: Handlers = {
  GET(req, ctx) {
    const ref = req.headers.get("referer") ?? undefined;
    const m = ref?.match(/\/pages\/(\d{4}-\d{2}-\d{2})/);
    const t = new URL(req.url).searchParams.get("img") ?? "webp";
    if (!m || m.length == 1) {
      return notfound();
    }
    if (!m[1]) {
      return notfound();
    }
    const date = m[1];
    if (!containsKey(date)) {
      return notfound();
    }
    const data = dailyData[date];
    const theme = String(data.params?.theme).toLowerCase().replace(/ /g, "-");
    const flavor = String(data.params?.flavor).toLocaleLowerCase().replace(
      / /g,
      "-",
    ).replace(/(science fiction|sci-fi)/, "sf");
    const dir = ctx.config.staticDir + "/img/bookshelf";
    const stDir = Deno.readDirSync(dir);
    let image_file = t === "webp"
      ? "undefined_x_undefined.jpg.webp"
      : "undefined_x_undefined.jpg";
    for (const entry of stDir) {
      const filename = String(entry.name);
      if (
        !filename.includes(theme + "_x_") &&
        filename.includes("_x_" + flavor) &&
        filename.endsWith(`.${t}`)
      ) {
        image_file = filename;
        continue;
      }
      if (
        filename.includes(theme + "_x_") && filename.includes("_x_" + flavor) &&
        filename.endsWith(`.${t}`)
      ) {
        image_file = filename;
        break;
      }
    }
    const file = Deno.readFileSync(`${dir}/${image_file}`);
    return new Response(file, {
      status: 200,
      headers: {
        "content-type": `image/${t}`,
      },
    });
  },
};
