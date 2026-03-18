import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug, getRelatedPosts, getAdjacentPosts, formatDate } from '@/lib/blog';
import { MDXContent } from '@/components/blog/MDXContent';
import { PostTracker } from '@/components/PostTracker';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `https://siwan.io/blog/${slug}`;
  return {
    title: `${post.title} — Siwan Kim`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url,
      authors: ['Siwan Kim'],
      siteName: 'Siwan Kim',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@0xSiwan',
    },
  };
}

const socials = [
  { label: 'x', url: 'https://x.com/0xSiwan' },
  { label: 'threads', url: 'https://www.threads.com/@codingbarista' },
  { label: 'linkedin', url: 'https://www.linkedin.com/in/siwankim/' },
];

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.tags);
  const { prev, next } = getAdjacentPosts(slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Siwan Kim',
      url: 'https://siwan.io',
      sameAs: [
        'https://x.com/0xSiwan',
        'https://www.linkedin.com/in/siwankim/',
      ],
    },
    publisher: {
      '@type': 'Person',
      name: 'Siwan Kim',
      url: 'https://siwan.io',
    },
    url: `https://siwan.io/blog/${slug}`,
    mainEntityOfPage: `https://siwan.io/blog/${slug}`,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://siwan.io' },
      { '@type': 'ListItem', position: 2, name: 'Writing', item: 'https://siwan.io/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://siwan.io/blog/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {post.faq && post.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: post.faq.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.a },
              })),
            }),
          }}
        />
      )}
      <nav className="nav">
        <Link href="/" className="nav-logo">siwan.io</Link>
        <div className="nav-links">
          <Link href="/blog">writing</Link>
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="post-hero">
        <p className="post-eyebrow">
          {formatDate(post.date)} &nbsp;·&nbsp; {post.readingTime}
        </p>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-desc">{post.description}</p>
      </div>

      <PostTracker slug={slug} title={post.title} />
      <article className="prose">
        <MDXContent content={post.content} />
      </article>

      <NewsletterSignup variant="post" />

      {related.length > 0 && (
        <section className="related-posts">
          <p className="projects-label">More posts</p>
          {related.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-item">
              <div className="bi-date">{formatDate(p.date)}</div>
              <div className="bi-content">
                <h3 className="bi-title">{p.title}</h3>
                <p className="bi-desc">{p.description}</p>
              </div>
              <span className="wi-arrow">→</span>
            </Link>
          ))}
        </section>
      )}

      {(prev || next) && (
        <nav className="post-nav" aria-label="Post navigation">
          <div className="post-nav-prev">
            {prev && <Link href={`/blog/${prev.slug}`}>← {prev.title}</Link>}
          </div>
          <div className="post-nav-next">
            {next && <Link href={`/blog/${next.slug}`}>{next.title} →</Link>}
          </div>
        </nav>
      )}

      <div className="post-back">
        <Link href="/blog" className="post-back-link">← All posts</Link>
      </div>

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
