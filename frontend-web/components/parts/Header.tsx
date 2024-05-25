export default function Header() {
  return (
    <header id="mainHeader">
      <div
        className={"px-4 py-4 text-center md:text-left bg-[url('/img/bg_header.webp')] bg-center bg-contain"}
      >
        <h1 className={"text-4xl font-bold mb-4"}>
          <a href="/">
            MyniQ [ /ˈmaɪ-nɪk/ ]
          </a>
        </h1>
        <p className={"text-lg px-4 font-serif"}>
          Daily AI-Generated English Novels & Learning Test Questions
        </p>
        <p className={"text-lg px-4 font-serif"}>
          Improve Your English Skills with Daily AI-Generated Novels and
          Learning Tests
        </p>
      </div>
    </header>
  );
}
