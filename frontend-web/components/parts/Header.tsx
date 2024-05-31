export default function Header({ square }: { square?: boolean }) {
  return (
    <header id="mainHeader">
      {square
        ? (
          <div
            className={"text-center bg-slate-100 bg-center bg-contain pt-12 z-0"}
          >
            <h1
              className={"flex items-center justify-center"}
            >
              <a
                className={"w-3/5 min-w-48 max-w-80"}
                href="/"
                title={"MyniQ [ /ˈmaɪ-nɪk/ ]"}
              >
                <div
                  className={"aspect-square rounded-full border-8 bg-slate-300 border-slate-200 w-3/5 min-w-48 max-w-80 absolute"}
                />
                <img
                  src={"/img/logo.sq.png.webp"}
                  className={"w-full relative"}
                />
              </a>
            </h1>
            <div className={"py-12"}>
              <p className={"text-xl font-serif"}>
                Daily AI-Generated English Novels & Learning Test Questions
              </p>
              <p className={"font-serif mt-4"}>
                Improve Your English Skills with Daily AI-Generated Novels and
                Learning Tests
              </p>
            </div>
          </div>
        )
        : (
          <div
            className={"text-center md:flex md:flex-row md:items-end bg-slate-100 md:text-left bg-center bg-contain"}
          >
            <h1
              className={"px-4 py-4 md:w-1/5 flex items-center justify-center"}
            >
              <a
                className={"relative"}
                href="/"
                title={"MyniQ [ /ˈmaɪ-nɪk/ ]"}
              >
                <div
                  className={"aspect-square rounded-full border-8 md:border-4 w-24 md:w-1/3 bg-slate-300 border-slate-200 absolute left-0"}
                />
                <img
                  src={"/img/logo.banner.png.webp"}
                  className={"h-24 md:h-auto relative"}
                />
              </a>
            </h1>
            <div className={"py-4"}>
              <p className={"text-xl md:px-4 font-serif"}>
                Daily AI-Generated English Novels & Learning Test Questions
              </p>
              <p className={"px-4 font-serif"}>
                Improve Your English Skills with Daily AI-Generated Novels and
                Learning Tests
              </p>
            </div>
          </div>
        )}
    </header>
  );
}
