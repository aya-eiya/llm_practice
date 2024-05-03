export default function Header() {
  return (
    <header id="mainHeader">
      <div
        className={"px-4 py-4 text-center md:text-left bg-[url('/img/bg_header.png')] bg-center bg-contain"}
      >
        <h1 className={"text-4xl mb-4 font-serif"}>
          <a href="/">
            Daily AI-Generated English Novels & Learning Test Questions
          </a>
        </h1>
        <p className={"text-lg px-4 font-serif"}>
          Improve Your English Skills with Daily AI-Generated Novels and
          Learning Tests
        </p>
      </div>
    </header>
  );
}
