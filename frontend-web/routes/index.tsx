import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import TopLayout from "../components/TopLayout.tsx";
import Meta from "../components/parts/Meta.tsx";

export default function Home({ url }: PageProps) {
  return (
    <>
      <Head>
        <Meta origin={url.origin} />
        <link rel="canonical" href={url.origin} />
      </Head>
      <TopLayout />
    </>
  );
}
