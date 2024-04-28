export default function Header() {
  return (
    <header id="mainHeader">
      <div className={"px-4 py-2 text-center md:text-left"}>
        <h1 className={"text-4xl"}>
          <a href="/">Daily English Quiz</a>
        </h1>
        <p className={"text-lg px-4"}>AI Generated English Quiz</p>
      </div>
    </header>
  );
}
