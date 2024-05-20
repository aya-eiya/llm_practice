export function Printer() {
  return (
    <button onClick={() => globalThis.window.print()} title="Print">
      🖨️
    </button>
  );
}
