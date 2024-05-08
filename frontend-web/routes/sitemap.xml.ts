import { Handlers } from "$fresh/server.ts";
import { dates, isThisMonth } from "../data/index.ts";

export const handler: Handlers = {
  GET(_req, _ctx) {
    const url = new URL(_req.url);
    const baseUrl = `${url.protocol}//${url.hostname}${
      url.hostname === "localhost" ? (":" + url.port) : ""
    }`;
    const doc = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms</loc>
    <changefreq>monthly</changefreq>
  </url>
${
      dates.map((date) => {
        return `
   <url>
     <loc>${baseUrl}/pages/${date}</loc>
     <lastmod>${date}</lastmod>
     <changefreq>${isThisMonth(date) ? "daily" : "monthly"}</changefreq>
    <priority>${isThisMonth(date) ? "0.8" : "0.5"}</priority>
   </url>
`;
      }).join("")
    }
</urlset>
`;
    return new Response(
      // xml.stringify(xml.parse(doc)),
      doc,
      {
        headers: { "content-type": 'application/xml; charset="UTF-8"' },
      },
    );
  },
};
