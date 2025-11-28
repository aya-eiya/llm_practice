import { define } from "../tools/utils.ts";

export const handler = define.handlers({
  GET(_ctx) {
    const doc = `
# Google AdSense
google.com, pub-4228655180940549, DIRECT, f08c47fec0942fa0
`;
    return new Response(
      doc,
      {
        headers: { "content-type": 'text/plain; charset="UTF-8"' },
      },
    );
  },
});
