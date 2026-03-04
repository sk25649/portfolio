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
  "Always building",
  "siwan.io",
];

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="nav">
        <span className="nav-logo">siwan.io</span>
        <div className="nav-links">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div className="hero">
        <div className="hero-left">
          <h1>
            siwan<br />kim.
          </h1>
          <p className="bio">
            builder &amp; indie hacker. shipping things at the intersection of AI and useful tools.
          </p>
        </div>

        <div className="hero-right">
          <p className="projects-label">Selected Projects</p>
          <ul className="project-list">
            {projects.map((p) => (
              <li key={p.id}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-item"
                >
                  <span className="pi-num">{p.id}</span>
                  <span className="pi-name">{p.name}</span>
                  <span className="pi-arrow">→</span>
                </a>
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
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="work-item"
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
          </a>
        ))}
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
