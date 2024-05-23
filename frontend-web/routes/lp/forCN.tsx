import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

export default function forCN({ url }: PageProps) {
  return (
    <>
      <Head>
        <title>AI支持的日常英语培训</title>
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Daily English Reading & Listening Quiz"
        />
        <meta
          name="description"
          content="介绍一种通过每天使用AI生成的英语短文和阅读理解测试来高效提高英语水平的方法。这也可以加强听力能力"
        />
        <meta
          name="keywords"
          content="英语学习、AI、阅读理解测试、听力、每日更新、英语能力提升、有效的英语学习"
        />
        <meta
          property="og:title"
          content="AI支持的日常英语培训"
        />
        <meta
          property="og:description"
          content="介绍一种通过每天使用AI生成的英语短文和阅读理解测试来高效提高英语水平的方法。这也可以加强听力能力"
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
          content="AI支持的日常英语培训"
        />
        <meta
          name="twitter:description"
          content="介绍一种通过利用AI生成的每日英语短文和阅读理解测试来高效提高英语能力的方法。这也可以增强听力能力"
        />
        <meta
          name="twitter:image"
          content={`${url.origin}/lp/forAll/og-image.png`}
        />
      </Head>
      <div className="bg-gray-100">
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl">AI支持的日常英语培训</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#features" className="hover:underline">特征</a>
                </li>
                <li>
                  <a href="#recommend" className="hover:underline">推荐</a>
                </li>
                <li>
                  <a href="#how-to" className="hover:underline">利用方法</a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">询问</a>
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
              每天在短时间内有效提高你的英语能力！
            </h1>
            <p className="text-xl">
              通过人工智能每天提出的简短英语文章和阅读理解测试，享受学习的乐趣
            </p>
          </div>
        </div>

        <div className="container mx-auto py-8">
          <section id="features" className="my-8">
            <h2 className="text-3xl text-center mb-6">服务特色</h2>
            <div className="flex flex-wrap justify-around">
              <FeatureBox
                imgSrc={"/lp/forAll/you_got_mail.jpg.webp"}
                imgAlt="每日更新"
                title="每日更新"
                description="每天都会询问人工智能生成的英语短文和阅读理解测试"
              />
              <FeatureBox
                imgSrc={"/lp/forAll/take_note.jpg.webp"}
                imgAlt="阅读理解测试"
                title="阅读理解测试"
                description="通过 5 个问题的测验来检查您的理解程度，同时提高您的英语技能"
              />
              <FeatureBox
                imgSrc={"/lp/forAll/hearing.jpg.webp"}
                imgAlt="听力练习"
                title="听力练习"
                description="您还可以使用基于人工智能的语音朗读功能来训练您的听力技能"
              />
            </div>
          </section>

          <section id="recommend" className="my-8">
            <h2 className="text-3xl text-center mb-6">推荐给谁？</h2>
            <div className="flex flex-wrap justify-around">
              <FeatureBox
                imgSrc={"/lp/forAll/busy_woman.jpg.webp"}
                imgAlt="忙碌的人"
                title="忙碌的人"
                description="非常适合那些想要在短时间内有效学习英语的人"
              />
              <FeatureBox
                imgSrc={"/lp/forAll/meeting.jpg.webp"}
                imgAlt="想要均衡学习的人"
                title="想要均衡学习的人"
                description="推荐给那些想要以均衡的方式提高阅读和听力技能的人"
              />
              <FeatureBox
                imgSrc={"/lp/forAll/jog.jpg.webp"}
                imgAlt="想要继续每一天的人"
                title="想要继续每一天的人"
                description="非常适合那些想要将学习作为日常生活一部分的人"
              />
            </div>
          </section>

          <section id="how-to" className="my-8">
            <h2 className="text-3xl text-center mb-6">便于使用！</h2>
            <div className="flex flex-wrap justify-around">
              <FeatureBox
                imgSrc={"/lp/forAll/internet.jpg.webp"}
                imgAlt="访问网站"
                title="访问网站"
                description="上手很容易"
              />
              <FeatureBox
                imgSrc={"/lp/forAll/scheduler.jpg.webp"}
                imgAlt="每天都在努力"
                title="每天都在努力"
                description="挑战每日更新的短句和测验!"
              />
              <FeatureBox
                imgSrc={"/lp/forAll/ear.jpg.webp"}
                imgAlt="还加强听力"
                title="还加强听力"
                description="别忘了用人工智能语音练习听力!"
              />
            </div>
          </section>

          <div className="text-center my-8">
            <a
              href="https://daily-ai-generated-quiz.deno.dev/"
              className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300"
            >
              现在开始
            </a>
          </div>

          <section id="contact" className="my-8">
            <h2 className="text-3xl text-center mb-6">询问</h2>
            <p className="text-center mb-4">
              如果您有任何疑问或意见，请随时与我们联系
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
