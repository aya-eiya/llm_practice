import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import { RenderFunction } from "$fresh/server.ts";

export const render: RenderFunction = (ctx, render) => {
  if (ctx.url.pathname.includes("forJP")) {
    ctx.lang = "ja";
  } else if (ctx.url.pathname.includes("forCN")) {
    ctx.lang = "zh";
  } else if (ctx.url.pathname.includes("forTW")) {
    ctx.lang = "zh";
  } else if (ctx.url.pathname.includes("forES")) {
    ctx.lang = "es";
  } else if (ctx.url.pathname.includes("forPT")) {
    ctx.lang = "pt";
  }
  render();
};

export default defineConfig({
  plugins: [
    tailwind(),
  ],
  render,
});
