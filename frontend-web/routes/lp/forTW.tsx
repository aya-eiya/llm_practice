import { PageProps } from "$fresh/server.ts";
import ForAll from "../../components/lp/ForAll.tsx";

const contentText = {
  title: "MyniQ - AI 支持的每日英語訓練",
  description:
    "通過 AI 生成的每日英語短文和閱讀理解測試，提高您的英語水平，同時也可以增強聽力能力。",
  keywords:
    "英語學習, AI, 閱讀理解測試, 聽力, 每日更新, 提高英語水平, 有效的英語學習",
  ogImage: "/lp/forTW/og-image.png",
  nav: {
    feature: "特點",
    recommend: "推薦",
    howTo: "使用方法",
    contact: "聯繫我們",
  },
  features: {
    title: "服務特點",
    items: [
      {
        imgSrc: "/lp/forAll/you_got_mail.jpg.webp",
        imgAlt: "每日更新測試",
        title: "每日更新",
        description: "每天提供由 AI 生成的英語短文和閱讀理解測試。",
      },
      {
        imgSrc: "/lp/forAll/take_note.jpg.webp",
        imgAlt: "閱讀理解測試",
        title: "閱讀理解測試",
        description: "通過 5 道題目來檢查理解程度，同時提高英語水平。",
      },
      {
        imgSrc: "/lp/forAll/hearing.jpg.webp",
        imgAlt: "聽力練習",
        title: "聽力練習",
        description: "利用 AI 語音朗讀功能，訓練聽力能力。",
      },
    ],
  },
  recommends: {
    title: "適合哪些人？",
    items: [
      {
        imgSrc: "/lp/forAll/busy_woman.jpg.webp",
        imgAlt: "忙碌的人",
        title: "忙碌的人",
        description: "適合想要高效學習英語的忙碌人士。",
      },
      {
        imgSrc: "/lp/forAll/meeting.jpg.webp",
        imgAlt: "想全面學習的人",
        title: "想全面學習的人",
        description: "推薦給想同時提高閱讀理解和聽力能力的人。",
      },
      {
        imgSrc: "/lp/forAll/jog.jpg.webp",
        imgAlt: "每天堅持學習的人",
        title: "每天堅持學習的人",
        description: "非常適合將學習作為每日習慣的人。",
      },
    ],
  },
  howToContents: {
    title: "使用方法簡單！",
    items: [
      {
        imgSrc: "/lp/forAll/internet.jpg.webp",
        imgAlt: "訪問網站",
        title: "訪問網站",
        description: "開始非常簡單。",
      },
      {
        imgSrc: "/lp/forAll/scheduler.jpg.webp",
        imgAlt: "每日練習",
        title: "每日練習",
        description: "挑戰每日更新的短文和測試！",
      },
      {
        imgSrc: "/lp/forAll/ear.jpg.webp",
        imgAlt: "強化聽力",
        title: "強化聽力",
        description: "不要忘記用 AI 語音進行聽力練習！",
      },
    ],
  },
  startNow: "立即開始",
  contact: {
    title: "聯繫我們",
    description: "如果您有任何疑問或意見，請隨時聯繫我們。",
    sns: {
      x: "https://x.com/hatano_ay",
      facebook: "https://www.facebook.com/ay.llc.page",
    },
  },
};

export default function forTW({ url }: PageProps) {
  return <ForAll contentText={contentText} url={url} />;
}
