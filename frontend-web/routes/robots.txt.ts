import { Context } from "fresh";

export const handler = {
  GET(_ctx: Context<unknown>) {
    const doc = `\
User-agent: *
disallow: /report

sitemap: ${_ctx.url.origin}/sitemap.xml
`;
    return new Response(
      doc,
      {
        headers: { "content-type": 'text/plain; charset="UTF-8"' },
      },
    );
  },
};
