export type GtagEventParams = {
  eventName: string;
  category: string;
  label: string;
  value: number;
};

declare global {
  interface Window {
    gtag?: (event: "event", eventName: string, param: object) => void;
  }
}

export function GtagEvent(
  { eventName, category, label, value }: GtagEventParams,
) {
  const gtag = globalThis.window?.gtag;
  if (gtag) {
    gtag("event", eventName, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
  return <></>;
}
