export function Printer() {
  return (
    <button
      type="button"
      onClick={() => globalThis.window?.print()}
      title="Print"
    >
      🖨️
    </button>
  );
}
