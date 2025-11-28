import { define } from "../tools/utils.ts";

export const handler = define.handlers({
  GET(_ctx) {
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
});
