import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req, _ctx) {
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
