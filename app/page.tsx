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

export default function Home() {
  return (
    <main>
      <div className="container">
        {/* Header */}
        <header>
          <div className="name-row">
            <h1>siwan kim</h1>
            <span className="cursor" aria-hidden="true">_</span>
          </div>
          <p className="bio">
            builder &amp; indie hacker. shipping things at the intersection of AI and useful tools.
          </p>
        </header>

        {/* Projects */}
        <section>
          <span className="section-label">// projects</span>
          <div className="projects">
            {projects.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project"
              >
                <div className="project-header">
                  <span className="project-id">{p.id}</span>
                  <span className="project-name">{p.name}</span>
                  <span className="project-tag">{p.tag}</span>
                  <span className="project-arrow">↗</span>
                </div>
                <p className="project-desc">{p.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer>
          <span className="section-label">// links</span>
          <div className="socials">
            {socials.map((s, i) => (
              <span key={s.label}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
                {i < socials.length - 1 && <span className="sep"> · </span>}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
