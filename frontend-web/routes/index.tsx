import { Head } from "fresh/runtime";
import { PageProps } from "fresh";
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
