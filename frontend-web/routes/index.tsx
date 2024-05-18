import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import MainLayout from "../components/MainLayout.tsx";
import data from "../data/example.ts";

export default function Home({ url }: PageProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Daily AI-generated English novels and learning-focused test questions to improve English proficiency."
        />
        <meta
          name="keywords"
          content="English novels, AI-generated novels, English learning, test questions, English proficiency, daily novels, learning tools"
        />
        <meta name="robots" content="index, follow" />
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
          content={`${url.origin}/`}
        />
        <meta
          property="og:site_name"
          content="Daily AI-Generated English Novels & Learning Test Questions"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${url.origin}/og/study_group.jpg`}
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
          content={`${url.origin}/og/study_group.jpg`}
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>"
        />
      </Head>
      <MainLayout data={data} />
    </>
  );
}
