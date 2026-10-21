import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";
import { TrackedLink } from "@/components/TrackedLink";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ScoreboardStrip } from "@/components/ScoreboardStrip";
import { instagram } from "@/lib/site";
import { episodes } from "@/lib/episodes";

// Statuses reflect only what is publicly verifiable today:
// FarmPosts is the paying product (~$500/mo, stated on this page);
// US Kids Golf Status traffic is from the site's own analytics (Oct 2026).
// Everything else is simply "Live" — no invented metrics.
const projects = [
  {
    id: "01",
    name: "FarmPosts",
    url: "https://farmposts.com",
    tag: "saas",
    status: "Paying",
    statusKind: "paying" as const,
    description:
      "AI content platform for real estate agents. Weekly posts, emails, and video scripts generated from live market data.",
    receipt: "~$500/mo revenue — the first product paying its way.",
  },
  {
    id: "02",
    name: "US Kids Golf Status",
    url: "https://juniorgolfstatus.com",
    tag: "tool",
    status: "Growing",
    statusKind: "growing" as const,
    description:
      "Priority status lookup for US Kids Golf tournaments. Built for junior golfer families.",
    receipt: "3,067 visitors in the last 30 days, and climbing.",
  },
  {
    id: "03",
    name: "DocAPI",
    url: "https://docapi.co",
    tag: "api",
    status: "Live",
    statusKind: "live" as const,
    description:
      "HTML to PDF API for developers and AI agents. Agent-native, pay-per-use via USDC.",
    receipt: null,
  },
  {
    id: "04",
    name: "ShipLoud",
    url: "https://shiploud.co",
    tag: "community",
    status: "Live",
    statusKind: "live" as const,
    description:
      "Ship loudly. A platform for indie hackers to share what they're building and get visibility.",
    receipt: null,
  },
  {
    id: "05",
    name: "PlayEpisodes",
    url: "https://playepisodes.com",
    tag: "game",
    status: "Live",
    statusKind: "live" as const,
    description:
      "3D board games inspired by TV shows. Play vs AI, local co-op, or online multiplayer.",
    receipt: null,
  },
];

// The scoreboard is the homepage's promise: numbers in public, updated as
// they change. Revenue progress is simple arithmetic on the two stated
// figures (~$500/mo against the $10K MRR goal).
const scoreboard = [
  { label: "Products shipped", value: "5" },
  { label: "Latest receipt", value: "3,067 visitors / 30 days — juniorgolfstatus.com" },
  { label: "Marathon", value: "In training" },
  {
    label: "AI agent",
    value: "Muse — trading, content, and research, with public scorecards",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://siwan.io/#person",
      name: "Siwan Kim",
      url: "https://siwan.io",
      jobTitle: "Software Developer & Indie Hacker",
      sameAs: [
        "https://www.instagram.com/siwan.mp4",
        "https://x.com/0xSiwan",
        "https://www.linkedin.com/in/siwankim/",
        "https://www.threads.com/@codingbarista",
      ],
      knowsAbout: [
        "Agentic APIs",
        "AI tools",
        "Indie hacking",
        "USDC payments",
        "PDF generation",
        "Building in public",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://siwan.io/#website",
      url: "https://siwan.io",
      name: "Siwan Kim",
      description:
        "Dad of three in Los Angeles building AI products in public and posting the receipts on the road to $10K MRR.",
      author: { "@id": "https://siwan.io/#person" },
    },
    {
      "@type": "SoftwareApplication",
      name: "DocAPI",
      url: "https://docapi.co",
      applicationCategory: "DeveloperApplication",
      description:
        "HTML to PDF API for developers and AI agents. Agent-native, pay-per-use via USDC.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@id": "https://siwan.io/#person" },
    },
    {
      "@type": "SoftwareApplication",
      name: "FarmPosts",
      url: "https://farmposts.com",
      applicationCategory: "BusinessApplication",
      description:
        "AI content platform for real estate agents. Weekly posts, emails, and video scripts from live market data.",
      offers: {
        "@type": "Offer",
        price: "199",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "199",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
      author: { "@id": "https://siwan.io/#person" },
    },
  ],
};

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <SiteNav />

      {/* Hero + scoreboard */}
      <div className="hero">
        <div className="hero-main">
          <p className="hero-eyebrow">Los Angeles, CA — Builder · Dad of three</p>
          <h1>
            Siwan
            <br />
            Kim<span className="accent">.</span>
          </h1>
          <p className="lede">
            I build AI products, train for a marathon, and run my life with an
            AI agent in my corner — <strong>and I post the receipts.</strong>
          </p>
          <div className="hero-ctas">
            <TrackedLink
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              eventName="instagram_click"
              eventProps={{ location: "hero" }}
            >
              Follow the build — {instagram.handle}{" "}
              <span aria-hidden="true">↗</span>
            </TrackedLink>
            <a href="#products" className="btn-ghost">
              See the products ↓
            </a>
          </div>
        </div>

        <aside className="scoreboard" aria-label="Scoreboard">
          <div className="sb-head">
            <span className="sb-title">The Scoreboard</span>
            <span className="sb-live">
              <span className="sb-dot" aria-hidden="true" /> Updated in public
            </span>
          </div>
          <div className="sb-revenue">
            <div className="sb-rev-row">
              <span className="sb-label">Revenue</span>
              <span className="sb-rev-value">~$500/mo</span>
            </div>
            <div
              className="sb-track"
              role="img"
              aria-label="Revenue progress: about $500 per month toward a $10,000 MRR goal — 5 percent of the way"
            >
              <div className="sb-fill" />
            </div>
            <p className="sb-caption">5% of the way to the $10K MRR goal</p>
          </div>
          <dl className="sb-rows">
            {scoreboard.map((s) => (
              <div key={s.label} className="sb-row">
                <dt className="sb-label">{s.label}</dt>
                <dd className="sb-value">{s.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      {/* Live scoreboard strip — the show's running numbers */}
      <ScoreboardStrip />

      {/* Products */}
      <section className="section" id="products" aria-label="Products">
        <div className="section-head">
          <span className="section-index">01</span>
          <h2 className="section-title">The products</h2>
          <span className="section-note">Receipts, not promises</span>
        </div>
        <div className="product-rows">
          {projects.map((p) => (
            <TrackedLink
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="product-row"
              eventName="project_click"
              eventProps={{ project: p.name }}
            >
              <span className="pr-num">{p.id}</span>
              <span className="pr-content">
                <span className="pr-top">
                  <span className="pr-name">{p.name}</span>
                  <span className={`chip chip-${p.statusKind}`}>
                    <span className="chip-dot" aria-hidden="true" />
                    {p.status}
                  </span>
                  <span className="pr-tag">{p.tag}</span>
                </span>
                <span className="pr-desc">{p.description}</span>
                {p.receipt && <span className="pr-receipt">{p.receipt}</span>}
              </span>
              <span className="pr-arrow" aria-hidden="true">
                ↗
              </span>
            </TrackedLink>
          ))}
        </div>
      </section>

      {/* The Show — episodes, newest first */}
      <section className="section" id="show" aria-label="The Show — episodes">
        <div className="section-head">
          <span className="section-index">02</span>
          <h2 className="section-title">The Show</h2>
          <span className="section-note">Newest first</span>
        </div>
        <div className="ep-cards">
          {episodes.map((ep) => (
            <Link key={ep.href} href={ep.href} className="ep-card">
              <span className="ep-card-top">
                <span className="ep-card-num">{ep.number}</span>
                <span className="ep-card-series">{ep.series}</span>
              </span>
              <span className="ep-card-cover" aria-hidden="true">
                <span className="ep-cover-num">{ep.numeral}</span>
                <span className="ep-cover-brand">@siwan.mp4 — Reel</span>
              </span>
              <span className="ep-card-title">{ep.title}</span>
              <span className="ep-card-line">{ep.oneLiner}</span>
              <span className="ep-card-meta">
                {ep.date} · View episode →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* The setup */}
      <section className="section" aria-label="How this runs">
        <div className="section-head">
          <span className="section-index">03</span>
          <h2 className="section-title">The setup</h2>
          <span className="section-note">One main quest, three side quests</span>
        </div>
        <p className="quest-main">
          Main quest: be a protector and provider for my family.
        </p>
        <div className="quest-grid">
          <article className="quest-card">
            <p className="quest-kicker">Side quest — 01</p>
            <h3 className="quest-name">Marathon</h3>
            <p className="quest-text">
              Training for a marathon, and I record every run. The footage is
              the training log.
            </p>
          </article>
          <article className="quest-card">
            <p className="quest-kicker">Side quest — 02</p>
            <h3 className="quest-name">$10K MRR</h3>
            <p className="quest-text">
              Building my own products to $10K MRR. FarmPosts is paying, the
              rest are climbing — the scoreboard above keeps the number
              honest.
            </p>
          </article>
          <article className="quest-card">
            <p className="quest-kicker">Side quest — 03</p>
            <h3 className="quest-name">The AI-run life</h3>
            <p className="quest-text">
              An AI agent — Muse — helps run my trading, training, building,
              and content. I publish what it gets right and what it gets
              wrong.
            </p>
          </article>
        </div>
      </section>

      {/* Writing */}
      {recentPosts.length > 0 && (
        <section className="section" aria-label="Recent writing">
          <div className="section-head">
            <span className="section-index">04</span>
            <h2 className="section-title">Writing</h2>
            <Link href="/blog" className="section-link">
              all posts →
            </Link>
          </div>
          <div className="blog-rows">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-item"
              >
                <div className="bi-date">{formatDate(post.date)}</div>
                <div className="bi-content">
                  <h3 className="bi-title">{post.title}</h3>
                  <p className="bi-desc">{post.description}</p>
                </div>
                <span className="bi-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Follow */}
      <section className="follow" aria-label="Follow along">
        <h2 className="follow-title">
          The receipts post first on Instagram.
        </h2>
        <p className="follow-text">
          New products, revenue updates, marathon miles, and what the agent
          got right or wrong this week — documented as it happens on{" "}
          {instagram.handle}.
        </p>
        <TrackedLink
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          eventName="instagram_click"
          eventProps={{ location: "follow" }}
        >
          Follow {instagram.handle} <span aria-hidden="true">↗</span>
        </TrackedLink>
      </section>

      {/* Newsletter */}
      <NewsletterSignup variant="inline" />

      {/* Structured About */}
      <section className="about-structured" aria-label="About Siwan Kim">
        <p>
          Siwan Kim is a dad of three and indie builder in Los Angeles. He
          builds AI products (<a href="https://farmposts.com">FarmPosts</a>,{" "}
          <a href="https://docapi.co">DocAPI</a>, and{" "}
          <a href="https://juniorgolfstatus.com">US Kids Golf Status</a>),
          trains for a marathon, and documents the pursuit of $10K MRR with an
          AI agent helping run the operation — receipts posted in public on{" "}
          <a href={instagram.url}>{instagram.handle}</a>.
        </p>
      </section>

      <SiteFooter />
    </>
  );
}
