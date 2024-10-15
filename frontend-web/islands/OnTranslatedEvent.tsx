import { Head } from "$fresh/runtime.ts";
import { Signal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function OnTranslatedEvent(
  { onReload, url }: { onReload?: Signal<number>; url: URL },
) {
  useEffect(() => {
    const pageReloadObserver = new MutationObserver(() => {
      if (onReload) {
        onReload.value = new Date().getTime();
      } else {
        globalThis.window.location.reload();
      }
    });
    const translationObserver = new MutationObserver((e) => {
      if (
        (e[0].target as HTMLElement).getAttribute("class")?.match(/^translated/)
      ) {
        const d = document.getElementById("meta-data-location");
        if (!d) return;
        pageReloadObserver.observe(d, {
          attributes: true,
          attributeFilter: ["content"],
        });
      }
    });
    const html = document.getElementsByTagName("html")[0];
    translationObserver.observe(html, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => {
      translationObserver.disconnect();
    };
  }, [onReload]);
  return (
    <Head>
      <meta
        id="meta-data-location"
        name="data:location"
        content={url.pathname}
      />
    </Head>
  );
}
