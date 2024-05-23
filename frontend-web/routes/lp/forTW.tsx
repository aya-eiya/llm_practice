import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

export default function forTW({ url }: PageProps) {
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
          content="介紹一種通過利用AI生成的每日英語短文和閱讀理解測試來高效提高英語能力的方法。這也可以增強聽力能力"
        />
        <meta
          name="keywords"
          content="英语學習、AI、閱讀理解測試、聽力、每日更新、英語能力提升、有效的英語學習"
        />
        <meta
          property="og:title"
          content="AI支持的日常英语培训"
        />
        <meta
          property="og:description"
          content="介紹一種通過利用AI生成的每日英語短文和閱讀理解測試來高效提高英語能力的方法。這也可以增強聽力能力"
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
          content="介紹一種通過利用AI生成的每日英語短文和閱讀理解測試來高效提高英語能力的方法。這也可以增強聽力能力"
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
              每天在短時間內有效提升你的英語能力！
            </h1>
            <p className="text-xl">
              透過人工智慧每天提出的簡短英語文章和閱讀理解測試，享受學習的樂趣
            </p>
          </div>
        </div>

        <div className="container mx-auto py-8">
          <section id="features" className="my-8">
            <h2 className="text-3xl text-center mb-6">服務特色</h2>
            <div className="flex flex-wrap justify-around">
              <FeatureBox
                imgSrc={"/lp/forAll/you_got_mail.jpg.webp"}
                imgAlt="每日更新"
                title="每日更新"
                description="每天都會詢問人工智慧產生的英文短文和閱讀理解測驗"
              />
              <FeatureBox
                imgSrc={"/lp/forAll/take_note.jpg.webp"}
                imgAlt="閱讀理解測試"
                title="閱讀理解測試"
                description="透過 5 個問題的測驗來檢查您的理解程度，同時提高您的英語技能"
              />
              <FeatureBox
                imgSrc={"/lp/forAll/hearing.jpg.webp"}
                imgAlt="聽力練習"
                title="聽力練習"
                description="您還可以使用基於人工智慧的語音朗讀功能來訓練您的聽力技能"
              />
            </div>
          </section>

          <section id="recommend" className="my-8">
            <h2 className="text-3xl text-center mb-6">推薦給誰？</h2>
            <div className="flex flex-wrap justify-around">
              <FeatureBox
                imgSrc={"/lp/forAll/busy_woman.jpg.webp"}
                imgAlt="忙碌的人"
                title="忙碌的人"
                description="非常適合想要在短時間內有效學習英語的人"
              />
              <FeatureBox
                imgSrc={"/lp/forAll/meeting.jpg.webp"}
                imgAlt="想要均衡學習的人"
                title="想要均衡學習的人"
                description="推薦給那些想要以均衡的方式提高閱讀和聽力技能的人"
              />
              <FeatureBox
                imgSrc={"/lp/forAll/jog.jpg.webp"}
                imgAlt="想要繼續每一天的人"
                title="想要繼續每一天的人"
                description="非常適合想要將學習作為日常生活一部分的人"
              />
            </div>
          </section>

          <section id="how-to" className="my-8">
            <h2 className="text-3xl text-center mb-6">使用方便！</h2>
            <div className="flex flex-wrap justify-around">
              <FeatureBox
                imgSrc={"/lp/forAll/internet.jpg.webp"}
                imgAlt="造訪網站"
                title="造訪網站"
                description="上手很容易"
              />
              <FeatureBox
                imgSrc={"/lp/forAll/scheduler.jpg.webp"}
                imgAlt="每天都在努力"
                title="每天都在努力"
                description="挑戰每日更新的短句和測驗!"
              />
              <FeatureBox
                imgSrc={"/lp/forAll/ear.jpg.webp"}
                imgAlt="也加強聽力"
                title="也加強聽力"
                description="別忘了用人工智慧語音練習聽力!"
              />
            </div>
          </section>

          <div className="text-center my-8">
            <a
              href="https://daily-ai-generated-quiz.deno.dev/"
              className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300"
            >
              現在開始
            </a>
          </div>

          <section id="contact" className="my-8">
            <h2 className="text-3xl text-center mb-6">詢問</h2>
            <p className="text-center mb-4">
              如果您有任何疑問或意見，請隨時與我們聯繫
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
