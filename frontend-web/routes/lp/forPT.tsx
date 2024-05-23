import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

export default function forPT({ url }: PageProps) {
  return (
    <>
      <Head>
        <title>ATreinamento diário de inglês apoiado por IA</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Apresentamos um método eficiente para melhorar suas habilidades em inglês utilizando textos curtos diários gerados por IA e testes de compreensão de leitura. Isso também pode fortalecer suas habilidades de escuta.。"
        />
        <meta
          name="keywords"
          content="Aprendizado de inglês, IA, testes de compreensão de leitura, escuta, atualizações diárias, melhoria das habilidades em inglês, aprendizado eficaz de inglês"
        />
        <meta
          property="og:title"
          content="Treinamento diário de inglês apoiado por IA"
        />
        <meta
          property="og:description"
          content="Apresentamos um método eficiente para melhorar suas habilidades em inglês utilizando textos curtos diários gerados por IA e testes de compreensão de leitura. Isso também pode fortalecer suas habilidades de escuta."
        />
        <meta
          property="og:image"
          content={`${url.origin}/lp/forAll/og-image.png`}
        />
        <meta
          property="og:url"
          content={`${url.origin}${url.pathname}`}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Treinamento diário de inglês apoiado por IA"
        />
        <meta
          name="twitter:description"
          content="Apresentamos um método eficiente para melhorar suas habilidades em inglês utilizando textos curtos diários gerados por IA e testes de compreensão de leitura. Isso também pode fortalecer suas habilidades de escuta."
        />
        <meta
          name="twitter:image"
          content={`${url.origin}/lp/forAll/og-image.png`}
        />
      </Head>
      <div className="bg-gray-100">
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl">
              Treinamento diário de inglês apoiado por IA
            </h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#features" className="hover:underline">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#recommend" className="hover:underline">
                    recomendação
                  </a>
                </li>
                <li>
                  <a href="#how-to" className="hover:underline">Como usar</a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    investigação
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
            <h1 className="text-5xl mb-4">
              Melhore suas habilidades de inglês de forma eficaz em pouco tempo,
              todos os dias!
            </h1>
            <p className="text-xl">
              Divirta-se aprendendo com pequenos trechos de inglês e testes de
              compreensão de leitura solicitados pela IA todos os dias.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-8">
          <section id="features" className="my-8">
            <h2 className="text-3xl text-center mb-6">Recursos de serviço</h2>
            <div className="flex flex-wrap justify-around">
              <FeatureBox
                imgSrc={"/lp/forAll/you_got_mail.jpg.webp"}
                imgAlt="Atualizado diariamente"
                title="Atualizado diariamente"
                description="Pequenos trechos de inglês gerados por IA e testes de compreensão de leitura serão solicitados todos os dias."
              />
              <FeatureBox
                imgSrc={"/lp/forAll/take_note.jpg.webp"}
                imgAlt="teste de compreensão de leitura"
                title="teste de compreensão de leitura"
                description="Melhore suas habilidades em inglês enquanto verifica sua compreensão com um questionário de 5 perguntas."
              />
              <FeatureBox
                imgSrc={"/lp/forAll/hearing.jpg.webp"}
                imgAlt="prática de escutar"
                title="prática de escutar"
                description="Você também pode treinar suas habilidades auditivas usando a função de leitura de voz baseada em IA."
              />
            </div>
          </section>

          <section id="recommend" className="my-8">
            <h2 className="text-3xl text-center mb-6">
              Para quem é recomendado?
            </h2>
            <div className="flex flex-wrap justify-around">
              <FeatureBox
                imgSrc={"/lp/forAll/busy_woman.jpg.webp"}
                imgAlt="Pessoa ocupada"
                title="Pessoa ocupada"
                description="Ideal para quem quer aprender inglês de forma eficiente e em pouco tempo."
              />
              <FeatureBox
                imgSrc={"/lp/forAll/meeting.jpg.webp"}
                imgAlt="Aqueles que querem aprender de maneira equilibrada"
                title="Aqueles que querem aprender de maneira equilibrada"
                description="Recomendado para quem deseja melhorar suas habilidades de leitura e compreensão auditiva de maneira equilibrada."
              />
              <FeatureBox
                imgSrc={"/lp/forAll/jog.jpg.webp"}
                imgAlt="Aqueles que querem continuar todos os dias"
                title="Aqueles que querem continuar todos os dias"
                description="Perfeito para quem quer aproveitar o aprendizado como parte do dia a dia."
              />
            </div>
          </section>

          <section id="how-to" className="my-8">
            <h2 className="text-3xl text-center mb-6">Fácil de usar!</h2>
            <div className="flex flex-wrap justify-around">
              <FeatureBox
                imgSrc={"/lp/forAll/internet.jpg.webp"}
                imgAlt="Visite o site"
                title="Visite o site"
                description="É fácil começar."
              />
              <FeatureBox
                imgSrc={"/lp/forAll/scheduler.jpg.webp"}
                imgAlt="trabalhe nisso todos os dias"
                title="trabalhe nisso todos os dias"
                description="Desafie frases curtas e questionários atualizados diariamente!"
              />
              <FeatureBox
                imgSrc={"/lp/forAll/ear.jpg.webp"}
                imgAlt="Também fortalece a escuta"
                title="Também fortalece a escuta"
                description="Não se esqueça de praticar a escuta com voz de IA!"
              />
            </div>
          </section>

          <div className="text-center my-8">
            <a
              href="https://daily-ai-generated-quiz.deno.dev/"
              className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300"
            >
              Comece agora
            </a>
          </div>

          <section id="contact" className="my-8">
            <h2 className="text-3xl text-center mb-6">investigação</h2>
            <p className="text-center mb-4">
              Se você tiver alguma dúvida ou comentário, não hesite em nos
              contatar a qualquer momento.
            </p>
            <p className="text-center flex flex-row justify-center">
              <a
                href="https://x.com/hatano_ay"
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
                href="https://www.facebook.com/ay.llc.page"
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
