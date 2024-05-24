import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

type ContentText = {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  nav: {
    feature: string;
    recommend: string;
    howTo: string;
    contact: string;
  };
  features: {
    title: string;
    items: {
      imgSrc: string;
      imgAlt: string;
      title: string;
      description: string;
    }[];
  };
  recommends: {
    title: string;
    items: {
      imgSrc: string;
      imgAlt: string;
      title: string;
      description: string;
    }[];
  };
  howToContents: {
    title: string;
    items: {
      imgSrc: string;
      imgAlt: string;
      title: string;
      description: string;
    }[];
  };
  startNow: string;
  contact: {
    title: string;
    description: string;
    sns: {
      x: string;
      facebook: string;
    };
  };
};

export default function ForAll(
  { contentText, url }: { contentText: ContentText; url: URL },
) {
  return (
    <>
      <Head>
        <title>{contentText.title}</title>
        <meta name="robots" content="index, follow" />

        <meta
          property="og:site_name"
          content={"Daily English Reading & Listening Quiz"}
        />
        <meta
          name="description"
          content={contentText.description}
        />
        <meta
          name="keywords"
          content={contentText.keywords}
        />
        <meta
          property="og:title"
          content={contentText.title}
        />
        <meta
          property="og:description"
          content={contentText.description}
        />
        <meta
          property="og:image"
          content={`${url.origin}${contentText.ogImage}`}
        />
        <meta
          property="og:url"
          content={`${url.origin}${url.pathname}`}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={contentText.title}
        />
        <meta
          name="twitter:description"
          content={contentText.description}
        />
        <meta
          name="twitter:image"
          content={`${url.origin}${contentText.ogImage}`}
        />
      </Head>
      <div className="bg-gray-100">
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl">{contentText.title}</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#features" className="hover:underline">
                    {contentText.nav.feature}
                  </a>
                </li>
                <li>
                  <a href="#recommend" className="hover:underline">
                    {contentText.nav.recommend}
                  </a>
                </li>
                <li>
                  <a href="#how-to" className="hover:underline">
                    {contentText.nav.howTo}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    {contentText.nav.contact}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div
          className="bg-cover bg-center h-96 text-white flex items-center justify-center"
          style={{ backgroundImage: "url('/lp/forAll/mono_book.jpg.webp')" }}
        >
          <div className="text-center">
            <h1 className="text-5xl mb-4">{contentText.title}</h1>
            <p className="text-xl">
              {contentText.description}
            </p>
          </div>
        </div>

        <div className="container mx-auto py-8">
          <section id="features" className="my-8">
            <h2 className="text-3xl text-center mb-6">
              {contentText.features.title}
            </h2>
            <div className="flex flex-wrap justify-around">
              {contentText.features.items.map((item, idx) => (
                <FeatureBox
                  key={idx}
                  imgSrc={item.imgSrc}
                  imgAlt={item.imgAlt}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </section>

          <section id="recommend" className="my-8">
            <h2 className="text-3xl text-center mb-6">
              {contentText.recommends.title}
            </h2>
            <div className="flex flex-wrap justify-around">
              {contentText.recommends.items.map((item, idx) => (
                <FeatureBox
                  key={idx}
                  imgSrc={item.imgSrc}
                  imgAlt={item.imgAlt}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </section>

          <section id="how-to" className="my-8">
            <h2 className="text-3xl text-center mb-6">
              {contentText.howToContents.title}
            </h2>
            <div className="flex flex-wrap justify-around">
              {contentText.howToContents.items.map((item, idx) => (
                <FeatureBox
                  key={idx}
                  imgSrc={item.imgSrc}
                  imgAlt={item.imgAlt}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </section>

          <div className="text-center my-8">
            <a
              href="https://daily-ai-generated-quiz.deno.dev/"
              className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300"
            >
              {contentText.startNow}
            </a>
          </div>

          <section id="contact" className="my-8">
            <h2 className="text-3xl text-center mb-6">
              {contentText.contact.title}
            </h2>
            <p className="text-center mb-4">
              {contentText.contact.description}
            </p>
            <p className="text-center flex flex-row justify-center">
              <a
                href={contentText.contact.sns.x}
                title={"X"}
                className={"block mx-2"}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 1200 1227"
                >
                  <path
                    d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                    className={"fill-black"}
                  />
                </svg>
              </a>
              <a
                href={contentText.contact.sns.facebook}
                title={"Facebook"}
                className={"block mx-2"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M22.675 0h-21.35C.596 0 0 .596 0 1.325v21.351C0 23.404.596 24 1.325 24h11.497v-9.294H9.691v-3.622h3.131V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.505 0-1.796.715-1.796 1.763v2.312h3.588l-.467 3.622h-3.121V24h6.116C23.404 24 24 23.404 24 22.676V1.325C24 .596 23.404 0 22.675 0z"
                    className={"fill-[#1877F2]"}
                  />
                  <path
                    d="M16.671 24v-9.294h3.121l.467-3.622h-3.588V8.772c0-1.048.292-1.763 1.796-1.763l1.92-.001V3.768c-.334-.044-1.472-.143-2.797-.143-2.766 0-4.66 1.688-4.66 4.788v2.67H9.691v3.622h3.131V24h3.849z"
                    className={"fill-white"}
                  />
                </svg>
              </a>
            </p>
          </section>
        </div>

        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; AY.LLC. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

interface FeatureBoxProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

function FeatureBox({ imgSrc, imgAlt, title, description }: FeatureBoxProps) {
  return (
    <div className="bg-white p-6 m-4 shadow-md rounded-lg max-w-xs">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-xl text-center mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
