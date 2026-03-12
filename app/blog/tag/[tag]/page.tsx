import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/blog';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  const tags = new Set(posts.flatMap((p) => p.tags));
  return Array.from(tags).map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `Posts tagged "${tag}" — Siwan Kim`,
    description: `Essays and writing on ${tag} from Siwan Kim — indie hacker, builder, and creator of DocAPI and FarmPosts.`,
    alternates: { canonical: `https://siwan.io/blog/tag/${tag}` },
  };
}

const socials = [
  { label: 'x', url: 'https://x.com/0xSiwan' },
  { label: 'threads', url: 'https://www.threads.com/@codingbarista' },
  { label: 'linkedin', url: 'https://www.linkedin.com/in/siwankim/' },
];

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const posts = getAllPosts().filter((p) => p.tags.includes(tag));

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">siwan.io</Link>
        <div className="nav-links">
          <Link href="/blog">writing</Link>
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
          ))}
        </div>
      </nav>

      <div className="blog-header">
        <p className="projects-label"><Link href="/blog">Writing</Link> / {tag}</p>
        <h2 className="blog-heading">Posts tagged: {tag}</h2>
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
        {posts.length === 0 && (
          <p style={{ padding: '40px 0', color: 'var(--muted)' }}>No posts found for this tag.</p>
        )}
      </section>

      <footer className="footer">
        <span className="footer-copy">© 2026 siwan kim</span>
        <div className="footer-links">
          {socials.map((s, i) => (
            <span key={s.label}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
              {i < socials.length - 1 && <span className="sep"> / </span>}
            </span>
          ))}
        </div>
      </footer>
    </>
  );
}
