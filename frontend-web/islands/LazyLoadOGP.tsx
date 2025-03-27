import { Signal } from "@preact/signals";

export function LazyLoadOGP(
  { signal }: { signal: Signal<{ url: string; image?: string }[]> },
) {
  signal.value.forEach(async (pr) => {
    if (pr.image) return;
    try {
      const res = await fetch(pr.url, {
        headers: {
          "User-Agent": "robot",
        },
      });
      const html = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const ogp = doc.querySelector("meta[property='og:image']");
      if (ogp) {
        // TODO convert to base64 string data
        pr.image = ogp.getAttribute("content") ?? undefined;
      }
    } catch (e) {
      // ignore errors
      console.error(e);
    }
  });
  return <div className="hidden"></div>;
}
