import { App, staticFiles, trailingSlashes } from "fresh";

export const app = new App<{ lang: string }>()
  .use(staticFiles())
  .use(trailingSlashes("never"))
  .use((ctx) => {
    if (ctx.url.pathname.includes("forJP")) {
      ctx.state.lang = "ja";
    } else if (ctx.url.pathname.includes("forCN")) {
      ctx.state.lang = "zh";
    } else if (ctx.url.pathname.includes("forTW")) {
      ctx.state.lang = "zh";
    } else if (ctx.url.pathname.includes("forES")) {
      ctx.state.lang = "es";
    } else if (ctx.url.pathname.includes("forPT")) {
      ctx.state.lang = "pt";
    }
    return ctx.next();
  })
  .use((ctx) => {
    console.log(ctx.info.remoteAddr, ctx.url);
    if (
      ctx.url.host.includes("deno.dev") ||
      ctx.url.host.startsWith("aya-eiya.work")
    ) {
      const url = new URL(ctx.url);
      url.host = "myniq.aya-eiya.work";
      return ctx.redirect(url.toString(), 301);
    }
    return ctx.next();
  })
  .fsRoutes();
