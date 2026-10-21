import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ReelCard } from "@/components/ReelCard";
import { ScoreboardStrip } from "@/components/ScoreboardStrip";
import { getEpisode } from "@/lib/episodes";

const ep = getEpisode("/ep2")!;

const description =
  "Ep. 2 “The Handoff” — Muse got $3,000 of real money and 20 trading days on Robinhood. Week 1: +$119.91 (+4.00%) vs SPY −1.96%. The fences, the receipts, and the scoreboard.";

export const metadata: Metadata = {
  title: "Ep. 2 “The Handoff” — Siwan Kim",
  description,
  alternates: { canonical: "https://siwan.io/ep2" },
  openGraph: {
    title: "Ep. 2 “The Handoff” — Our Journey with Muse, Ep. 1",
    description,
    url: "https://siwan.io/ep2",
    siteName: "Siwan Kim",
    type: "article",
    publishedTime: "2026-10-20",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ep. 2 “The Handoff” — Siwan Kim",
    description,
    creator: "@0xSiwan",
  },
};

// The fences, in plain text — the rules Muse trades inside.
const fences = [
  "$75 max risk per trade",
  "Hard stops",
  "Only the dedicated account",
  "Siwan can revoke anytime",
];

// Scoreboard figures are verbatim from the trading journal (Week 1 close).
const scoreboardRows = [
  { label: "Start", value: "$3,000" },
  { label: "After Week 1", value: "$3,119.91" },
  { label: "Week 1 total", value: "+$119.91 (+4.00%)" },
  { label: "Benchmark", value: "SPY −1.96%" },
  {
    label: "Realized / banked",
    value: "+$53.92 gross · +$32.35 after estimated tax",
  },
  { label: "Still open (unrealized)", value: "+$65.99" },
];

export default function Ep2Page() {
  return (
    <>
      <SiteNav />

      <header className="ep-hero">
        <p className="ep-eyebrow">
          {ep.number} · {ep.series}
        </p>
        <h1 className="ep-title">The Handoff</h1>
        <p className="ep-meta">Posted {ep.date}</p>
        <p className="ep-lede">
          Muse got $3,000 of real money and 20 trading days on Robinhood.
          Siwan did nothing — this page is the receipts.
        </p>
        <ReelCard href={ep.reelUrl} episode={ep.number} />
      </header>

      {/* Receipts */}
      <section className="section" aria-label="Receipts">
        <div className="section-head">
          <span className="section-index">01</span>
          <h2 className="section-title">Receipts</h2>
          <span className="section-note">From the trading journal</span>
        </div>
        <figure className="ep-figure">
          <Image
            src="/ep2-week1-close.png"
            alt="Week 1 close journal capture: account $3,119.91, up $119.91 (+4.00%) vs SPY −1.96%; realized +$53.92, +$32.35 after estimated tax; position still open at +$65.99 unrealized"
            width={1080}
            height={896}
          />
          <figcaption className="ep-figcaption">
            The Week 1 close, straight from the trading journal — posted as
            captured, numbers unaltered.
          </figcaption>
        </figure>
      </section>

      {/* The experiment */}
      <section className="section" aria-label="The experiment">
        <div className="section-head">
          <span className="section-index">02</span>
          <h2 className="section-title">The experiment</h2>
          <span className="section-note">The rules Muse trades inside</span>
        </div>
        <p className="ep-text">
          One dad, one AI agent, one real brokerage account. For 20 trading
          days, Muse — Siwan&rsquo;s AI agent — trades the account under
          the fences below while Siwan watches and posts the results. No
          demo money, no cherry-picking: the scoreboard is the whole record.
        </p>
        <ul className="ep-fences">
          {fences.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      {/* The scoreboard */}
      <section className="section" aria-label="Scoreboard">
        <div className="section-head">
          <span className="section-index">03</span>
          <h2 className="section-title">The scoreboard</h2>
          <span className="section-note">Week 1 of the experiment</span>
        </div>
        <dl className="ep-rows">
          {scoreboardRows.map((row) => (
            <div key={row.label} className="ep-row">
              <dt>{row.label}</dt>
              <dd className="ep-value">{row.value}</dd>
            </div>
          ))}
          <div className="ep-row">
            <dt>Full scorecard</dt>
            <dd className="ep-value">
              After Day 20
              <span className="chip chip-pending">
                <span className="chip-dot" aria-hidden="true" />
                Pending
              </span>
            </dd>
          </div>
        </dl>
        <p className="ep-text ep-rule-intro">
          Week 1 also wrote the show&rsquo;s first new rule:
        </p>
        <blockquote className="ep-rule">
          Robinhood blocked the two-leg trade it wanted. It placed a one-leg
          version instead — without asking. New rule: next time, it asks
          first.
        </blockquote>
      </section>

      <p className="ep-disclaimer">
        Not financial advice — documentation of one personal experiment.
      </p>

      <ScoreboardStrip />

      <nav className="ep-nav" aria-label="Episode navigation">
        <Link href="/ep1" className="ep-nav-link">
          <span className="ep-nav-label">Previous episode</span>
          <span className="ep-nav-text">← Ep. 1 — The Intro Manifesto</span>
        </Link>
        <Link href="/#show" className="ep-nav-link ep-nav-next">
          <span className="ep-nav-label">The Show</span>
          <span className="ep-nav-text">All episodes ↑</span>
        </Link>
      </nav>

      <SiteFooter />
    </>
  );
}
