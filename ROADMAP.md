# Roadmap — Portfolio (siwan.io)

**Last updated:** 2026-03-12

## Progress

### Feature: Technical SEO Fixes — Complete
- [x] Chunk 1: Add canonical tag to homepage metadata
- [x] Chunk 2: Add event tracking for newsletter signups and project clicks
- [x] Chunk 3: Optimize meta descriptions for search intent

### Feature: Schema Markup — Complete
- [x] Chunk 1: Add Person + Organization JSON-LD to homepage
- [x] Chunk 2: Add BreadcrumbList schema to blog pages
- [x] Chunk 3: Add SoftwareApplication schema for projects on homepage
- [x] Chunk 4: Upgrade blog posts to BlogPosting + add FAQ schema to top posts

### Feature: AI SEO / GEO — Complete
- [x] Chunk 1: Expand llms.txt with full post list and Q&A format
- [x] Chunk 2: Add structured "Who is Siwan Kim" answer block to homepage
- [x] Chunk 3: Add FAQ schema to top 3 most cited blog posts

### Feature: Site Architecture — Complete
- [x] Chunk 1: Tag archive pages at /blog/tag/[tag]
- [x] Chunk 2: Related posts section at bottom of each blog post
- [x] Chunk 3: Prev/next post navigation on blog post pages

### Feature: Content Strategy — Complete
- [x] Chunk 1: Plan 10 SEO-intent posts with target keywords and outlines
- [x] Chunk 2: Add internal links between related existing posts
- [x] Chunk 3: Add cornerstone content marker + hub-and-spoke linking from AI agent post

### Feature: Social Content System — Complete
- [x] Chunk 1: Write X/Twitter threads for top 5 blog posts
- [x] Chunk 2: Write LinkedIn posts for top 3 blog posts
- [x] Chunk 3: Create evergreen social content from project proof points

---

## Feature: Technical SEO Fixes

**Created:** 2026-03-12
**Status:** Complete
**Estimated effort:** ~35 min

**Goal:** Fix the gaps identified in the SEO audit that are costing rankings and conversion tracking.
**In scope:** Canonical tag, event tracking for key actions, meta description improvements.
**Out of scope:** Full analytics rebuild, GA4 e-commerce, A/B testing infrastructure.
**Dependencies:** Vercel Analytics already in place. No new packages needed.

---

### Chunk 1: Add canonical tag to homepage metadata
**Status:** Complete
**Estimated effort:** ~2 min
**Files modified:** `app/layout.tsx`

---

### Chunk 2: Add event tracking for newsletter signups and project clicks
**Status:** Complete
**Estimated effort:** ~20 min
**Files modified:** `components/TrackedLink.tsx` (new), `components/PostTracker.tsx` (new), `app/page.tsx`, `app/blog/[slug]/page.tsx`

---

### Chunk 3: Optimize meta descriptions for search intent
**Status:** Complete
**Estimated effort:** ~10 min
**Files modified:** `app/layout.tsx`, `app/blog/page.tsx`, `content/posts/ai-agent-window.mdx`, `content/posts/agentic-first-apis.mdx`, `content/posts/shipping-before-ready.mdx`

---

## Feature: Schema Markup

**Created:** 2026-03-12
**Status:** Complete
**Estimated effort:** ~30 min

---

### Chunk 1: Add Person + Organization JSON-LD to homepage
**Status:** Complete
**Files modified:** `app/page.tsx`

---

### Chunk 2: Add BreadcrumbList schema to blog pages
**Status:** Complete
**Files modified:** `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`

---

### Chunk 3: Add SoftwareApplication schema for projects
**Status:** Complete
**Files modified:** `app/page.tsx`

---

### Chunk 4: Upgrade blog posts to BlogPosting + FAQ schema
**Status:** Complete
**Files modified:** `app/blog/[slug]/page.tsx`

---

## Feature: AI SEO / GEO

**Created:** 2026-03-12
**Status:** Complete
**Estimated effort:** ~25 min

---

### Chunk 1: Expand llms.txt with full post list and Q&A format
**Status:** Complete
**Files modified:** `public/llms.txt`

---

### Chunk 2: Add structured "Who is Siwan Kim" answer block to homepage
**Status:** Complete
**Files modified:** `app/page.tsx`, `app/globals.css`

---

### Chunk 3: Add FAQ schema to top 3 blog posts
**Status:** Complete
**Files modified:** `lib/blog.ts`, `app/blog/[slug]/page.tsx`, `content/posts/ai-agent-window.mdx`, `content/posts/agentic-first-apis.mdx`, `content/posts/shipping-before-ready.mdx`

---

## Feature: Site Architecture

**Created:** 2026-03-12
**Status:** Complete
**Estimated effort:** ~50 min

---

### Chunk 1: Tag archive pages at /blog/tag/[tag]
**Status:** Complete
**Files modified:** `app/blog/tag/[tag]/page.tsx` (new), `app/sitemap.ts`, `app/blog/page.tsx`, `app/globals.css`

---

### Chunk 2: Related posts section at bottom of each blog post
**Status:** Complete
**Files modified:** `lib/blog.ts`, `app/blog/[slug]/page.tsx`, `app/globals.css`

---

### Chunk 3: Prev/next post navigation on blog post pages
**Status:** Complete
**Files modified:** `lib/blog.ts`, `app/blog/[slug]/page.tsx`, `app/globals.css`

---

## Feature: Content Strategy

**Created:** 2026-03-12
**Status:** Complete
**Estimated effort:** ~35 min

---

### Chunk 1: Plan 10 SEO-intent posts with target keywords and outlines
**Status:** Complete
**Files modified:** `CONTENT_PLAN.md` (new)

---

### Chunk 2: Add internal links between related existing posts
**Status:** Complete
**Files modified:** 8 MDX files in `content/posts/`

---

### Chunk 3: Add cornerstone content markers
**Status:** Complete
**Files modified:** `content/posts/ai-agent-window.mdx`, `content/posts/agentic-first-apis.mdx`, `app/globals.css`

---

## Feature: Social Content System

**Created:** 2026-03-12
**Status:** Complete
**Estimated effort:** ~35 min

---

### Chunk 1: Write X/Twitter threads for top 5 blog posts
**Status:** Complete
**Files modified:** `social/twitter-threads.md` (new)

---

### Chunk 2: Write LinkedIn posts for top 3 blog posts
**Status:** Complete
**Files modified:** `social/linkedin-posts.md` (new)

---

### Chunk 3: Evergreen social posts from project proof points
**Status:** Complete
**Files modified:** `social/evergreen-posts.md` (new)

---
