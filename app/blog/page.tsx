import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing — Siwan Kim',
  description: 'Thoughts on building, shipping, and indie hacking.',
};

const socials = [
  { label: 'x', url: 'https://x.com/0xSiwan' },
  { label: 'threads', url: 'https://www.threads.com/@codingbarista' },
  { label: 'linkedin', url: 'https://www.linkedin.com/in/siwankim/' },
];

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">siwan.io</Link>
        <div className="nav-links">
          <Link href="/blog" style={{ color: 'var(--text)' }}>writing</Link>
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="blog-header">
        <p className="projects-label">Writing</p>
        <h2 className="blog-heading">Thoughts on building, shipping, and indie hacking.</h2>
      </div>

      <section className="blog-list">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-item">
            <div className="bi-date">{formatDate(post.date)}</div>
            <div className="bi-content">
              <h2 className="bi-title">{post.title}</h2>
              <p className="bi-desc">{post.description}</p>
              <p className="bi-meta">{post.readingTime}</p>
            </div>
            <span className="wi-arrow">→</span>
          </Link>
        ))}
      </section>

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
