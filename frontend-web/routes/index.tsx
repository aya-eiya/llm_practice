import { Head } from "$fresh/runtime.ts";
import MainLayout from "../components/MainLayout.tsx";
import data from "../data/example.ts";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://daily-ai-generated-quiz.deno.dev/pages/${data.date}`}
        />
      </Head>
      <MainLayout data={data} />
    </>
  );
}
