import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ReelCard } from "@/components/ReelCard";
import { ScoreboardStrip } from "@/components/ScoreboardStrip";
import { getEpisode } from "@/lib/episodes";

const ep = getEpisode("/ep1")!;

const description =
  "Ep. 1 — the intro manifesto. A dad of 3 hands his real life to Muse, his AI agent, and posts the receipts. The premiere of @siwan.mp4.";

export const metadata: Metadata = {
  title: "Ep. 1 — The Intro Manifesto — Siwan Kim",
  description,
  alternates: { canonical: "https://siwan.io/ep1" },
  openGraph: {
    title: "Ep. 1 — The Intro Manifesto — siwan.mp4 premiere",
    description,
    url: "https://siwan.io/ep1",
    siteName: "Siwan Kim",
    type: "article",
    publishedTime: "2026-10-16",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ep. 1 — The Intro Manifesto — Siwan Kim",
    description,
    creator: "@0xSiwan",
  },
};

export default function Ep1Page() {
  return (
    <>
      <SiteNav />

      <header className="ep-hero">
        <p className="ep-eyebrow">
          {ep.number} · {ep.series}
        </p>
        <h1 className="ep-title">The Intro Manifesto</h1>
        <p className="ep-meta">Posted {ep.date}</p>
        <p className="ep-lede">
          A dad of 3 hands his real life to an AI agent — and posts the
          receipts. This is where it starts.
        </p>
        <ReelCard href={ep.reelUrl} episode={ep.number} />
      </header>

      {/* The manifesto */}
      <section className="section" aria-label="The manifesto">
        <div className="section-head">
          <span className="section-index">01</span>
          <h2 className="section-title">The manifesto</h2>
          <span className="section-note">The premise of the show</span>
        </div>
        <p className="ep-text">
          I&rsquo;m Siwan — dad of 3, builder in Los Angeles. In this
          episode I hand my real life to Muse, my AI agent: the products,
          the trading, the training, the content. Whatever it does gets
          documented — the wins, the losses, and the receipts to prove
          both.
        </p>
        <p className="ep-text">
          No highlight reel and no guru math. If the agent makes money, the
          scoreboard says so. If it loses money, the scoreboard says that
          too. Episode 2 is the first experiment: real money, real account,
          twenty trading days.
        </p>
      </section>

      {/* Receipts */}
      <section className="section" aria-label="Receipts">
        <div className="section-head">
          <span className="section-index">02</span>
          <h2 className="section-title">Receipts</h2>
          <span className="section-note">Honestly: none yet</span>
        </div>
        <p className="ep-text">
          No scoreboard yet — the journey starts here. This episode is the
          promise, not the proof: every number from here on gets posted,
          and the receipts begin in Ep. 2.
        </p>
      </section>

      <ScoreboardStrip />

      <nav className="ep-nav" aria-label="Episode navigation">
        <Link href="/#show" className="ep-nav-link">
          <span className="ep-nav-label">The Show</span>
          <span className="ep-nav-text">← All episodes</span>
        </Link>
        <Link href="/ep2" className="ep-nav-link ep-nav-next">
          <span className="ep-nav-label">Next episode</span>
          <span className="ep-nav-text">Ep. 2 — The Handoff →</span>
        </Link>
      </nav>

      <SiteFooter />
    </>
  );
}
