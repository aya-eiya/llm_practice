import type { PR } from "./types.ts";
import images from "./base64/images.json" with { type: "json" };

const PRs: PR[] = [
  {
    id: "A8N001",
    provider: "A8",
    url: "https://px.a8.net/svt/ejp?a8mat=3Z6VU2+6KD4PM+3AQG+TVBF6",
    title: "Study Supplie for Buisiness English",
    image: images?.["A8N001"],
  },
  {
    id: "A8N002",
    provider: "A8",
    title: "my.LunCul.com",
    url: "https://px.a8.net/svt/ejp?a8mat=3Z6VU2+6F089M+4FL0+BY641",
    image: images?.["A8N002"],
  },
  {
    id: "AMZ001",
    provider: "Amazon",
    title:
      "Large Language Model-Based Solutions: How to Deliver Value with Cost-Effective Generative AI Applications (Tech Today)",
    url: "https://amzn.to/3JE9Zr5",
    image: images?.["AMZ001"],
  },
  {
    id: "AMZ002",
    provider: "Amazon",
    title:
      "Julia makes new friends (No worries - short bedtime stories) (English Edition)",
    url: "https://amzn.to/4aRwtAY",
    image: images?.["AMZ002"],
  },
  {
    id: "AMZ003",
    provider: "Amazon",
    title: "Audible membership plan 2 months free trial",
    url: "https://amzn.to/4aZwa75",
    image: images?.["AMZ003"],
  },
];
export default PRs;
