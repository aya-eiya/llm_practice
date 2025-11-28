import { Head } from "fresh/runtime";
import { HttpError, PageProps } from "fresh";
import Header from "../parts/Header.tsx";
import Footer from "../parts/Footer.tsx";
import Meta from "../parts/Meta.tsx";

export default function Error({ url, error }: PageProps) {
  let status = 200;
  if (error instanceof HttpError) {
    status = error.status; // HTTP status code
  }
  return (
    <>
      <Head>
        <title>Page Not Found - MyniQ English Learning</title>
        <Meta
          origin={url.origin}
        />
        <title>HTTP Status({status})</title>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="flex flex-col min-h-screen bg-slate-100">
        <Header />
        <h1>{status} HTTP ERROR</h1>
        <Footer />
      </div>
    </>
  );
}
