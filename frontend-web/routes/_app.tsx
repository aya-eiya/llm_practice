import { type PageProps } from "$fresh/server.ts";
export default function App({ Component, config }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Daily AI-generated English novels and learning-focused test questions to improve English proficiency."
        />
        <meta
          name="keywords"
          content="English novels, AI-generated novels, English learning, test questions, English proficiency, daily novels, learning tools"
        />
        <meta name="author" content="AY.LLC" />
        <meta name="robots" content="index, follow" />
        <title>
          Daily AI-Generated English Novels & Learning Test Questions
        </title>
        <link
          rel="canonical"
          href="https://daily-ai-generated-quiz.deno.dev/"
        />
        <meta
          property="og:title"
          content="Daily AI-Generated English Novels & Learning Test Questions"
        />
        <meta
          property="og:description"
          content="Daily AI-generated English novels and learning-focused test questions to improve English proficiency."
        />
        <meta
          property="og:url"
          content="https://daily-ai-generated-quiz.deno.dev/"
        />
        <meta
          property="og:site_name"
          content="Daily AI-Generated English Novels & Learning Test Questions"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://daily-ai-generated-quiz.deno.dev/og/study_group.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Daily AI-Generated English Novels & Learning Test Questions"
        />
        <meta
          name="twitter:description"
          content="Daily AI-generated English novels and learning-focused test questions to improve English proficiency."
        />
        <meta
          name="twitter:image"
          content="https://daily-ai-generated-quiz.deno.dev/og/study_group.jpg"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>"
        />
        <link rel="stylesheet" href="/styles.css" />
        {!config.dev && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-EHTMJRGX97"
            >
            </script>
            <script async src="/ga.js"></script>
          </>
        )}
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
