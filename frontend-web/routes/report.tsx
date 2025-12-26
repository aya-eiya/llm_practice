import { Context, PageProps } from "fresh";
import { Head } from "fresh/runtime";
import { HttpError } from "fresh";

export type ReportReasons =
  | "page broken"
  | "wrong quiz"
  | "meaningless content"
  | "inappropriate content"
  | "copyright violation";

export type ReportParams = {
  page: string;
  reason: Exclude<ReportReasons, "wrong quiz">;
} | {
  page: string;
  reason: "wrong quiz";
  questionNumber: 1 | 2 | 3 | 4 | 5;
};

export const handler = {
  GET(ctx: Context<unknown>) {
    const page = ctx.url.searchParams.get("page");
    const reason = ctx.url.searchParams.get("reason");
    const questionNumber = ctx.url.searchParams.get("questionNumber");
    if (page === null || (reason === "wrong quiz" && questionNumber === null)) {
      throw new HttpError(404);
    }
    const data = {
      page,
      reason: reason as ReportReasons,
      questionNumber: questionNumber === null
        ? undefined
        : Number(questionNumber),
    };
    return {
      data,
      headers: {
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    };
  },
};

export default function Report(
  { data: { data } }: PageProps<{ data: ReportParams }, unknown>,
) {
  const reportParam = data;
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <title>Report Problem</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📢</text></svg>"
        />
      </Head>
      <div className="bg-slate-200 h-screen w-full flex justify-center items-center">
        <div className="bg-slate-50 drop-shadow-lg px-4 md:px-20 py-4 flex flex-col">
          <h1 className="text-xl font-bold mb-4">
            Thank you for report problem!
          </h1>
          <dl className="grid grid-cols-2">
            <dt className="font-bold">Page</dt>
            <dd className="">{reportParam.page}</dd>
            <dt className="font-bold">Reason</dt>
            <dd className="">{reportParam.reason}</dd>
            {reportParam.reason === "wrong quiz" && (
              <>
                <dt className="font-bold">Question Number</dt>
                <dd className="">{reportParam.questionNumber}</dd>
              </>
            )}
          </dl>
        </div>
      </div>
    </>
  );
}
