import { PageProps } from "$fresh/server.ts";
import ForAll from "../../components/lp/forAll.tsx";

const contentText = {
  title: "AI 支持的每日英语训练",
  description:
    "通过 AI 生成的每日英语短文和阅读理解测试，提高您的英语水平，同时也可以增强听力能力。",
  keywords:
    "英语学习, AI, 阅读理解测试, 听力, 每日更新, 提高英语水平, 有效的英语学习",
  ogImage: "/lp/forCN/og-image.png",
  nav: {
    feature: "特点",
    recommend: "推荐",
    howTo: "使用方法",
    contact: "联系我们",
  },
  features: {
    title: "服务特点",
    items: [
      {
        imgSrc: "/lp/forAll/you_got_mail.jpg.webp",
        imgAlt: "每日更新测试",
        title: "每日更新",
        description: "每天提供由 AI 生成的英语短文和阅读理解测试。",
      },
      {
        imgSrc: "/lp/forAll/take_note.jpg.webp",
        imgAlt: "阅读理解测试",
        title: "阅读理解测试",
        description: "通过 5 道题目来检查理解程度，同时提高英语水平。",
      },
      {
        imgSrc: "/lp/forAll/hearing.jpg.webp",
        imgAlt: "听力练习",
        title: "听力练习",
        description: "利用 AI 语音朗读功能，训练听力能力。",
      },
    ],
  },
  recommends: {
    title: "适合哪些人？",
    items: [
      {
        imgSrc: "/lp/forAll/busy_woman.jpg.webp",
        imgAlt: "忙碌的人",
        title: "忙碌的人",
        description: "适合想要高效学习英语的忙碌人士。",
      },
      {
        imgSrc: "/lp/forAll/meeting.jpg.webp",
        imgAlt: "想全面学习的人",
        title: "想全面学习的人",
        description: "推荐给想同时提高阅读理解和听力能力的人。",
      },
      {
        imgSrc: "/lp/forAll/jog.jpg.webp",
        imgAlt: "每天坚持学习的人",
        title: "每天坚持学习的人",
        description: "非常适合将学习作为每日习惯的人。",
      },
    ],
  },
  howToContents: {
    title: "使用方法简单！",
    items: [
      {
        imgSrc: "/lp/forAll/internet.jpg.webp",
        imgAlt: "访问网站",
        title: "访问网站",
        description: "开始非常简单。",
      },
      {
        imgSrc: "/lp/forAll/scheduler.jpg.webp",
        imgAlt: "每日练习",
        title: "每日练习",
        description: "挑战每日更新的短文和测试！",
      },
      {
        imgSrc: "/lp/forAll/ear.jpg.webp",
        imgAlt: "强化听力",
        title: "强化听力",
        description: "不要忘记用 AI 语音进行听力练习！",
      },
    ],
  },
  startNow: "立即开始",
  contact: {
    title: "联系我们",
    description: "如果您有任何疑问或意见，请随时联系我们。",
    sns: {
      x: "https://x.com/hatano_ay",
      facebook: "https://www.facebook.com/ay.llc.page",
    },
  },
};

export default function forCN({ url }: PageProps) {
  return <ForAll contentText={contentText} url={url} />;
}
