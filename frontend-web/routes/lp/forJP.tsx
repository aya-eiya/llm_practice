import { PageProps } from "$fresh/server.ts";
import ForAll from "../../components/lp/ForAll.tsx";

const contentText = {
  title: "MyniQ - AIがサポートする毎日の英語トレーニング",
  concept: "Master Your New Interactive Quests",
  description:
    "AIを活用した毎日の英語短文と読解力テストで、効率的に英語力を向上させる方法をご紹介。リスニング力も強化できます。",
  keywords:
    "英語学習, AI, 読解力テスト, リスニング, 毎日更新, 英語力向上, 効果的な英語学習",
  ogImage: "/lp/forJP/og-image.png",
  nav: {
    feature: "特徴",
    recommend: "おすすめ",
    howTo: "利用方法",
    contact: "お問い合わせ",
  },
  features: {
    title: "サービスの特徴",
    items: [
      {
        imgSrc: "/lp/forAll/you_got_mail.jpg.webp",
        imgAlt: "毎日更新のテスト",
        title: "毎日更新",
        description: "AIが生成する英語の短文と読解力テストが毎日出題されます。",
      },
      {
        imgSrc: "/lp/forAll/take_note.jpg.webp",
        imgAlt: "読解力テスト",
        title: "読解力テスト",
        description:
          "5問のクイズで、理解度を確認しながら英語力を向上させます。",
      },
      {
        imgSrc: "/lp/forAll/hearing.jpg.webp",
        imgAlt: "リスニング練習",
        title: "リスニング練習",
        description:
          "AIによる音声読み上げ機能を利用して、リスニング力も鍛えられます。",
      },
    ],
  },
  recommends: {
    title: "どんな方におすすめ？",
    items: [
      {
        imgSrc: "/lp/forAll/busy_woman.jpg.webp",
        imgAlt: "忙しい方",
        title: "忙しい方",
        description: "短時間で効率的に英語を学びたい方に最適です。",
      },
      {
        imgSrc: "/lp/forAll/meeting.jpg.webp",
        imgAlt: "バランス良く学びたい方",
        title: "バランス良く学びたい方",
        description:
          "読解力とリスニング力をバランスよく向上させたい方におすすめです。",
      },
      {
        imgSrc: "/lp/forAll/jog.jpg.webp",
        imgAlt: "毎日続けたい方",
        title: "毎日続けたい方",
        description: "毎日のルーティンとして楽しく学びたい方にピッタリです。",
      },
    ],
  },
  howToContents: {
    title: "利用方法は簡単！",
    items: [
      {
        imgSrc: "/lp/forAll/internet.jpg.webp",
        imgAlt: "サイトにアクセス",
        title: "サイトにアクセス",
        description: "簡単に始められます。",
      },
      {
        imgSrc: "/lp/forAll/scheduler.jpg.webp",
        imgAlt: "毎日取り組む",
        title: "毎日取り組む",
        description: "毎日更新される短文とクイズにチャレンジ！",
      },
      {
        imgSrc: "/lp/forAll/ear.jpg.webp",
        imgAlt: "リスニングも強化",
        title: "リスニングも強化",
        description: "AI音声でリスニング練習も忘れずに!",
      },
    ],
  },
  startNow: "今すぐ始める",
  contact: {
    title: "お問い合わせ",
    description:
      "ご不明点やご意見がありましたら、いつでもお気軽にお問い合わせください。",
    sns: {
      x: "https://x.com/hatano_ay",
      facebook: "https://www.facebook.com/ay.llc.page",
    },
  },
};

export default function forJP({ url }: PageProps) {
  return <ForAll contentText={contentText} url={url} />;
}
