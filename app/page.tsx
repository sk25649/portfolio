import Link from "next/link";
import Script from "next/script";
import { getAllPosts, formatDate } from "@/lib/blog";
import { TrackedLink } from "@/components/TrackedLink";

const projects = [
  {
    id: "01",
    name: "FarmPosts",
    url: "https://farmposts.com",
    description:
      "AI content platform for real estate agents. Weekly posts, emails, and video scripts generated from live market data.",
    tag: "saas",
  },
  {
    id: "02",
    name: "DocAPI",
    url: "https://docapi.co",
    description:
      "HTML to PDF API for developers and AI agents. Agent-native, pay-per-use via USDC.",
    tag: "api",
  },
  {
    id: "03",
    name: "US Kids Golf Status",
    url: "https://uskidsgolfstatus.com",
    description:
      "Priority status lookup for US Kids Golf tournaments. Built for junior golfer families.",
    tag: "tool",
  },
  {
    id: "04",
    name: "ShipLoud",
    url: "https://shiploud.co",
    description:
      "Ship loudly. A platform for indie hackers to share what they're building and get visibility.",
    tag: "community",
  },
  {
    id: "05",
    name: "PlayEpisodes",
    url: "https://playepisodes.com",
    description:
      "3D board games inspired by TV shows. Play vs AI, local co-op, or online multiplayer.",
    tag: "game",
  },
];

const socials = [
  { label: "x", url: "https://x.com/0xSiwan" },
  { label: "threads", url: "https://www.threads.com/@codingbarista" },
  { label: "linkedin", url: "https://www.linkedin.com/in/siwankim/" },
];

const tickerItems = [
  "Builder & indie hacker",
  "Shipping AI tools",
  "FarmPosts",
  "DocAPI",
  "US Kids Golf Status",
  "ShipLoud",
  "PlayEpisodes",
  "Always building",
  "siwan.io",
];

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://siwan.io/#person",
      "name": "Siwan Kim",
      "url": "https://siwan.io",
      "jobTitle": "Software Developer & Indie Hacker",
      "sameAs": [
        "https://x.com/0xSiwan",
        "https://www.linkedin.com/in/siwankim/",
        "https://www.threads.com/@codingbarista"
      ],
      "knowsAbout": ["Agentic APIs", "AI tools", "Indie hacking", "USDC payments", "PDF generation", "Building in public"]
    },
    {
      "@type": "WebSite",
      "@id": "https://siwan.io/#website",
      "url": "https://siwan.io",
      "name": "Siwan Kim",
      "description": "Builder and indie hacker shipping AI tools and developer infrastructure.",
      "author": { "@id": "https://siwan.io/#person" }
    },
    {
      "@type": "SoftwareApplication",
      "name": "DocAPI",
      "url": "https://docapi.co",
      "applicationCategory": "DeveloperApplication",
      "description": "HTML to PDF API for developers and AI agents. Agent-native, pay-per-use via USDC.",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "author": { "@id": "https://siwan.io/#person" }
    },
    {
      "@type": "SoftwareApplication",
      "name": "FarmPosts",
      "url": "https://farmposts.com",
      "applicationCategory": "BusinessApplication",
      "description": "AI content platform for real estate agents. Weekly posts, emails, and video scripts from live market data.",
      "offers": { "@type": "Offer", "price": "199", "priceCurrency": "USD", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "199", "priceCurrency": "USD", "unitText": "MONTH" } },
      "author": { "@id": "https://siwan.io/#person" }
    }
  ]
};

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* Nav */}
      <nav className="nav">
        <span className="nav-logo">siwan.io</span>
        <div className="nav-links">
          <Link href="/blog">writing</Link>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div className="hero">
        <div className="hero-left">
          <h1>
            Siwan
            <br />
            <span className="accent">Kim.</span>
          </h1>
          <p className="bio">
            I build AI tools and write about what actually works.
          </p>
        </div>

        <div className="hero-right">
          <p className="projects-label">Selected Projects</p>
          <ul className="project-list">
            {projects.map((p) => (
              <li key={p.id}>
                <TrackedLink
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-item"
                  eventName="project_click"
                  eventProps={{ project: p.name }}
                >
                  <span className="pi-num">{p.id}</span>
                  <span className="pi-name">{p.name}</span>
                  <span className="pi-arrow">→</span>
                </TrackedLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              {item}
              <span className="ticker-sep">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Project detail rows */}
      <section className="work">
        {projects.map((p) => (
          <TrackedLink
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="work-item"
            eventName="project_click"
            eventProps={{ project: p.name }}
          >
            <div className="wi-meta">
              <span className="wi-num">{p.id}</span>
              <span className="wi-tag">{p.tag}</span>
            </div>
            <div className="wi-content">
              <h3 className="wi-name">{p.name}</h3>
              <p className="wi-desc">{p.description}</p>
            </div>
            <span className="wi-arrow">↗</span>
          </TrackedLink>
        ))}
      </section>

      {/* Writing */}
      {recentPosts.length > 0 && (
        <section className="writing">
          <div className="writing-header">
            <p className="projects-label">Recent Writing</p>
            <Link href="/blog" className="writing-all">
              all posts →
            </Link>
          </div>
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
              <span className="wi-arrow">→</span>
            </Link>
          ))}
        </section>
      )}

      {/* Newsletter */}
      <div className="newsletter-embed">
        <p className="newsletter-label">Weekly insights on shipping AI tools — no fluff</p>
        <Script src="https://subscribe-forms.beehiiv.com/embed.js" strategy="afterInteractive" />
        <iframe
          src="https://subscribe-forms.beehiiv.com/41604aa1-d6e6-481d-9ef5-6091088ee022"
          className="beehiiv-embed"
          data-test-id="beehiiv-embed"
          frameBorder={0}
          scrolling="no"
          style={{ width: '100%', height: '291px', margin: 0, borderRadius: 0, backgroundColor: 'transparent', boxShadow: 'none' }}
        />
      </div>

      {/* Structured About */}
      <section className="about-structured" aria-label="About Siwan Kim">
        <p>
          Siwan Kim is an indie hacker and software developer who builds AI tools and developer infrastructure.
          He is the creator of <a href="https://docapi.co">DocAPI</a> (agent-native HTML-to-PDF API) and{' '}
          <a href="https://farmposts.com">FarmPosts</a> (AI content platform for real estate agents).
          He writes about agentic API design, shipping products publicly, and career strategy in the AI era.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span className="footer-copy">© 2026 siwan kim</span>
        <div className="footer-links">
          {socials.map((s, i) => (
            <span key={s.label}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
              {i < socials.length - 1 && <span className="sep"> / </span>}
            </span>
          ))}
        </div>
      </footer>
    </>
  );
}
