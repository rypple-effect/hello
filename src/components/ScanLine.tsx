/**
 * Two fixed full-viewport overlays applied above all page content:
 * 1. A thin cyan scan-line that sweeps top to bottom on a loop.
 * 2. A very low-opacity noise texture for cinematic grain.
 */
export default function ScanLine() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-50 h-[2px] w-full bg-[rgba(0,210,255,0.06)] animate-scan-line"
      />
      <div
        aria-hidden="true"
        className="noise-overlay fixed inset-0 z-40 pointer-events-none opacity-[0.025]"
      />
    </>
  );
}
