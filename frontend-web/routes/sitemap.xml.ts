import { Handlers } from "$fresh/server.ts";
import dailyData, { dates, isThisMonth } from "../data/index.ts";

export const handler: Handlers = {
  GET(_req, _ctx) {
    const url = new URL(_req.url);
    const baseUrl = `${url.protocol}//${url.hostname}${
      url.hostname === "localhost" ? (":" + url.port) : ""
    }`;
    const lastMod = dates[dates.length - 1];
    const lastModFlavors = new Map<string, string>();
    const lastModThemes = new Map<string, string>();
    const flavors = Object.keys(dailyData).reduce((tags, date) => {
      const f = encodeURI(
        dailyData[date as keyof typeof dailyData].params.flavor,
      );
      tags.add(f);
      lastModFlavors.set(f, date);
      return tags;
    }, new Set<string>());
    const themes = Object.keys(dailyData).reduce((tags, date) => {
      const t = encodeURI(
        dailyData[date as keyof typeof dailyData].params.theme,
      );
      tags.add(t);
      lastModThemes.set(t, date);
      return tags;
    }, new Set<string>());
    const doc = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms</loc>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>${baseUrl}/lp/forJP</loc>
    <changefreq>monthly</changefreq>
    <priority> 0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/lp/forTW</loc>
    <changefreq>monthly</changefreq>
    <priority> 0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/lp/forCH</loc>
    <changefreq>monthly</changefreq>
    <priority> 0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/lp/forES</loc>
    <changefreq>monthly</changefreq>
    <priority> 0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/lp/forPT</loc>
    <changefreq>monthly</changefreq>
    <priority> 0.5</priority>
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
    <url>
      <loc>${baseUrl}/tags/flavor/</loc>
      <lastmod>${lastMod}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    ${
      Array.from(flavors).map((flavor) => {
        return `
    <url>
      <loc>${baseUrl}/tags/flavor/${flavor}</loc>
      <lastmod>${lastModFlavors.get(flavor)}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    `;
      }).join("")
    }
    <url>
      <loc>${baseUrl}/tags/theme/</loc>
      <lastmod>${lastMod}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    ${
      Array.from(themes).map((theme) => {
        return `
    <url>
      <loc>${baseUrl}/tags/theme/${theme}</loc>
      <lastmod>${lastModThemes.get(theme)}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
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
