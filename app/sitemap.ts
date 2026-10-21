import { getAllPosts } from '@/lib/blog';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://siwan.io/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const tags = Array.from(new Set(posts.flatMap((p) => p.tags)));
  const tagEntries: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `https://siwan.io/blog/tag/${tag}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  }));

  return [
    {
      url: 'https://siwan.io',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://siwan.io/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://siwan.io/ep2',
      lastModified: new Date('2026-10-20'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://siwan.io/ep1',
      lastModified: new Date('2026-10-16'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...postEntries,
    ...tagEntries,
  ];
}
