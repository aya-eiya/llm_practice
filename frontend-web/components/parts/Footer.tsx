export default function Footer() {
  return (
    <footer id="mainFooter" className={"bg-slate-900 text-slate-50"}>
      <nav>
        <ul className={"flex flex-row justify-center pt-4 mb-2"}>
          <li
            className={"underline text-center px-12"}
          >
            <a href="/">Top</a>
          </li>
          <li
            className={"underline text-center px-12"}
          >
            <a href="https://www.aya-eiya.work">Company</a>
          </li>
          <li
            className={"underline text-center px-12"}
          >
            <a href="https://twitter.com/hatano_ay">X</a>
          </li>
          <li
            className={"underline text-center px-12"}
          >
            <a href="https://www.facebook.com/ay.llc.page/">Facebook</a>
          </li>
        </ul>
      </nav>
      <p className={"text-center pb-2"}>
        Copyright AY.LLC All Rights Reserved
      </p>
    </footer>
  );
}
