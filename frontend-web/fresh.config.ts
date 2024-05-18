import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import { RenderFunction } from "$fresh/server.ts";

export const render: RenderFunction = (ctx, render) => {
  if (ctx.url.pathname.includes("forJP")) {
    ctx.lang = "ja";
  }
  console.log("rendering", ctx.lang);
  render();
};

export default defineConfig({
  plugins: [
    tailwind(),
  ],
  render,
});
