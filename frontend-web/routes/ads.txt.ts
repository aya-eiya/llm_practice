import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req, _ctx) {
    const doc = `
# Google AdSense
google.com, pub-4228655180940549, DIRECT, f08c47fec0942fa0
`;
    return new Response(
      // xml.stringify(xml.parse(doc)),
      doc,
      {
        headers: { "content-type": 'text/plain; charset="UTF-8"' },
      },
    );
  },
};
