import { liveScoreboardLines } from "@/lib/episodes";

// The live scoreboard strip: a compact ledger band carrying the show's
// four running numbers. Distinct from the hero scoreboard card — this is
// the episodes' strip, and episode pages reuse it as-is.
export function ScoreboardStrip() {
  return (
    <section className="live-strip" aria-label="Live scoreboard">
      <div className="live-strip-head">
        <span className="live-strip-title">Live scoreboard</span>
        <span className="sb-live">
          <span className="sb-dot" aria-hidden="true" /> The episodes, in
          numbers
        </span>
      </div>
      <ul className="live-strip-lines">
        {liveScoreboardLines.map((line) => (
          <li key={line} className="live-strip-line">
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
}
