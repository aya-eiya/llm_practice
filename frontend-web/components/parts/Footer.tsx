export default function Footer() {
  return (
    <footer
      id="mainFooter"
      className="notranslate bg-slate-900 text-slate-50"
    >
      <nav className="print:hidden">
        <ul
          className="flex flex-row justify-evenly md:justify-center pt-4 mb-2"
        >
          <li
            className="underline text-center md:px-12"
          >
            <a href="/">Top</a>
          </li>
          <li
            className="underline text-center md:px-12"
          >
            <a href="https://www.aya-eiya.work">Company</a>
          </li>
          <li
            className="underline text-center md:px-12"
          >
            <a href="https://twitter.com/myniq_en">X</a>
          </li>
          <li
            className="underline text-center md:px-12"
          >
            <a href="https://www.facebook.com/myniq_en">Facebook</a>
          </li>
          <li
            className="underline text-center md:px-12"
          >
            <a href="/terms">Terms of Service</a>
          </li>
        </ul>
      </nav>
      <p className="text-center pb-2">
        Copyright AY.LLC All Rights Reserved
      </p>
    </footer>
  );
}
