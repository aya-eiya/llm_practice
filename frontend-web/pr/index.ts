import type { PR } from "./types.ts";
import images from "./base64/images.json" with { type: "json" };

const PRs: PR[] = [
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
  {
    id: "GAD001",
    provider: "GoogleAds",
    clientId: "ca-pub-4228655180940549",
    slotId: "3165685588",
  },
];
export default PRs;
