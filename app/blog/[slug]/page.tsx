import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug, formatDate } from '@/lib/blog';
import { MDXContent } from '@/components/blog/MDXContent';
import { PostTracker } from '@/components/PostTracker';
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
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

      <div className="newsletter-embed">
        <p className="newsletter-label">Get posts like this every week</p>
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
