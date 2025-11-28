import { type PageProps } from "fresh";
import { Head } from "fresh/runtime";
import OnTranslatedEvent from "../islands/OnTranslatedEvent.tsx";

export default function App({ Component, config, url }: PageProps) {
  return (
    <>
      <Head>
        <title className="notranslate">
          MyniQ [ /ˈmaɪ-nɪk/ ]
        </title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="AY.LLC" />
        <link rel="stylesheet" href="/styles.css" />
        {config.mode !== "development" && (
          <>
            <meta
              name="google-site-verification"
              content="m2hwol8GGWwXv_en0E1VXrKXk3i1XcCtWkCEsbfJsX0"
            />
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-EHTMJRGX97"
            >
            </script>
            <script async src="/ga.js"></script>
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4228655180940549"
              crossorigin="anonymous"
            >
            </script>
          </>
        )}
        <script
          id="yt"
          src="https://www.youtube.com/iframe_api"
        />
      </Head>
      <body>
        <Component />
        <OnTranslatedEvent
          url={url}
        />
      </body>
    </>
  );
}
