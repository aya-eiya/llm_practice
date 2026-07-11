type BaseAd = {
  id: string; // 広告を一意に識別するID (必須)
  provider: "Amazon" | "Rakuten" | "A8" | "GoogleAds"; // 提供元
};

type AffiliateAd = BaseAd & {
  provider: "Amazon" | "Rakuten" | "A8";
  title: string; // 表示用のタイトル (必須)
  url: string; // 遷移先URL (必須)
  image?: string; // 画像データ (Base64など)
};

type GoogleAdsAd = BaseAd & {
  provider: "GoogleAds";
  clientId: string;
  slotId: string;
};

export type PR = AffiliateAd | GoogleAdsAd;
