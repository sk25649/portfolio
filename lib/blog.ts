import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const POSTS_DIR = path.join(process.cwd(), 'content/posts');

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  slug: string;
  readingTime: string;
  tags: string[];
  faq?: Array<{ q: string; a: string }>;
  cornerstone?: boolean;
}

export interface Post extends PostFrontmatter {
  content: string;
}

export function getAllPosts(): PostFrontmatter[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'));
  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8');
      const { data, content } = matter(raw);
      const stats = readingTime(content);
      return {
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        slug,
        readingTime: stats.text,
        tags: (data.tags as string[]) || [],
        faq: (data.faq as Array<{ q: string; a: string }>) || undefined,
        cornerstone: (data.cornerstone as boolean) || undefined,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    slug,
    readingTime: stats.text,
    tags: (data.tags as string[]) || [],
    faq: (data.faq as Array<{ q: string; a: string }>) || undefined,
    cornerstone: (data.cornerstone as boolean) || undefined,
    content,
  };
}

export function getRelatedPosts(slug: string, tags: string[], limit = 3): PostFrontmatter[] {
  const all = getAllPosts().filter((p) => p.slug !== slug);
  const scored = all.map((p) => ({
    post: p,
    score: p.tags.filter((t) => tags.includes(t)).length,
  }));
  scored.sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime());
  return scored.slice(0, limit).map((s) => s.post);
}

export function getAdjacentPosts(slug: string): { prev: PostFrontmatter | null; next: PostFrontmatter | null } {
  const posts = getAllPosts(); // sorted newest first
  const idx = posts.findIndex((p) => p.slug === slug);
  return {
    prev: idx < posts.length - 1 ? posts[idx + 1] : null, // older = prev
    next: idx > 0 ? posts[idx - 1] : null, // newer = next
  };
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
