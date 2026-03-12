# Roadmap — Portfolio (siwan.io)

**Last updated:** 2026-03-13

## Progress

### Feature: Technical SEO Fixes — In Progress
- [x] Chunk 1: Add canonical tag to homepage metadata
- [ ] Chunk 2: Add event tracking for newsletter signups and project clicks
- [ ] Chunk 3: Optimize meta descriptions for search intent

### Feature: Schema Markup — In Progress
- [ ] Chunk 1: Add Person + Organization JSON-LD to homepage
- [ ] Chunk 2: Add BreadcrumbList schema to blog pages
- [ ] Chunk 3: Add SoftwareApplication schema for projects on homepage
- [ ] Chunk 4: Upgrade blog posts to NewsArticle + add FAQ schema to top posts

### Feature: AI SEO / GEO — In Progress
- [ ] Chunk 1: Expand llms.txt with full post list and Q&A format
- [ ] Chunk 2: Add structured "Who is Siwan Kim" answer block to homepage
- [ ] Chunk 3: Add FAQ schema to top 3 most cited blog posts

### Feature: Site Architecture — In Progress
- [ ] Chunk 1: Tag archive pages at /blog/tag/[tag]
- [ ] Chunk 2: Related posts section at bottom of each blog post
- [ ] Chunk 3: Prev/next post navigation on blog post pages

### Feature: Content Strategy — In Progress
- [ ] Chunk 1: Plan 10 SEO-intent posts with target keywords and outlines
- [ ] Chunk 2: Add internal links between related existing posts
- [ ] Chunk 3: Add cornerstone content marker + hub-and-spoke linking from AI agent post

### Feature: Social Content System — In Progress
- [ ] Chunk 1: Write X/Twitter threads for top 5 blog posts
- [ ] Chunk 2: Write LinkedIn posts for top 3 blog posts
- [ ] Chunk 3: Create evergreen social content from project proof points

---

## Feature: Technical SEO Fixes

**Created:** 2026-03-12
**Status:** In Progress
**Estimated effort:** ~35 min

**Goal:** Fix the gaps identified in the SEO audit that are costing rankings and conversion tracking.
**In scope:** Canonical tag, event tracking for key actions, meta description improvements.
**Out of scope:** Full analytics rebuild, GA4 e-commerce, A/B testing infrastructure.
**Dependencies:** Vercel Analytics already in place. No new packages needed.

---

### Chunk 1: Add canonical tag to homepage metadata
**Estimated effort:** ~2 min
**Files to modify:** `app/layout.tsx`
**Depends on:** none

**What to do:**
1. In the `metadata` export, add `alternates: { canonical: 'https://siwan.io' }` to the root metadata object.

**Acceptance criteria:**
- [x] `<link rel="canonical" href="https://siwan.io">` appears in homepage `<head>`
- [x] Blog posts already have canonicals — verify they still work after this change

---

### Chunk 2: Add event tracking for newsletter signups and project clicks
**Estimated effort:** ~20 min
**Files to modify:** `app/page.tsx`, `app/blog/[slug]/page.tsx`, `app/blog/page.tsx`
**Depends on:** none

**What to do:**
1. Install or import the Vercel Analytics `track` function from `@vercel/analytics`.
2. In `app/page.tsx`, wrap each project link `<a>` tag to call `track('project_click', { project: 'FarmPosts' })` etc. on click.
3. In `app/page.tsx`, wrap the newsletter iframe container with a click handler that fires `track('newsletter_section_view')` on scroll-into-view using IntersectionObserver.
4. In `app/blog/page.tsx` and `app/blog/[slug]/page.tsx`, fire `track('blog_post_click', { slug })` on post link clicks.
5. In `app/blog/[slug]/page.tsx`, fire `track('post_read', { slug, title })` on mount.

**Key decisions:**
- Use Vercel's `track()` directly (already installed) rather than adding PostHog or GA4 — keeps it simple. Add GA4 later if more depth is needed.
- IntersectionObserver approach means it must be a Client Component — extract newsletter section into a small `NewsletterSection` client component in `components/NewsletterSection.tsx`.

**Acceptance criteria:**
- [ ] Clicking FarmPosts, DocAPI, US Kids Golf, ShipLoud links fires a `project_click` event in Vercel Analytics
- [ ] Visiting a blog post fires a `post_read` event
- [ ] No TypeScript errors

---

### Chunk 3: Optimize meta descriptions for search intent
**Estimated effort:** ~10 min
**Files to modify:** `app/layout.tsx`, `app/blog/page.tsx`, and select MDX frontmatter files
**Depends on:** none

**What to do:**
1. Update root layout description from `"Builder. Shipping things at the intersection of AI and useful tools."` to: `"Siwan Kim builds AI tools and writes about shipping, agentic APIs, and indie hacking. Founder of DocAPI and FarmPosts."` (includes keywords people actually search).
2. Update blog page description from `"Thoughts on building, shipping, and indie hacking."` to: `"Essays on AI agents, shipping products, career strategy in the AI era, and building in public. By Siwan Kim."`.
3. Review and update descriptions for the 3 most-visited-likely posts (ai-agent-window, agentic-first-apis, shipping-before-ready) to be under 160 chars and lead with the search intent keyword.

**Acceptance criteria:**
- [ ] Root meta description is ≤ 160 chars and contains "AI tools", "indie hacking", and "DocAPI" or "FarmPosts"
- [ ] Blog index description mentions "AI agents" and "shipping"
- [ ] All updated MDX descriptions are ≤ 160 chars

**Risks & Unknowns:**
- Event tracking requires converting some static components to client components. Keep the change minimal — extract only what's needed.

---

## Feature: Schema Markup

**Created:** 2026-03-12
**Status:** In Progress
**Estimated effort:** ~30 min

**Goal:** Add structured data so Google shows rich results and LLMs have structured facts to cite about Siwan and his work.
**In scope:** Person, Organization, BreadcrumbList, SoftwareApplication, and FAQ schema.
**Out of scope:** LocalBusiness, Product reviews, Event schema.
**Dependencies:** None — inline JSON-LD via Next.js script tags.

---

### Chunk 1: Add Person + Organization JSON-LD to homepage
**Estimated effort:** ~10 min
**Files to modify:** `app/page.tsx`
**Depends on:** none

**What to do:**
1. Add a `<script type="application/ld+json">` block inside the homepage JSX (after the footer, before closing `</>`).
2. Include a `Person` schema:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Person",
     "name": "Siwan Kim",
     "url": "https://siwan.io",
     "sameAs": ["https://x.com/0xSiwan", "https://www.linkedin.com/in/siwankim/", "https://www.threads.com/@codingbarista"],
     "jobTitle": "Indie Hacker & Software Developer",
     "knowsAbout": ["Agentic APIs", "AI tools", "Indie hacking", "USDC payments", "PDF generation"],
     "owns": [
       { "@type": "Product", "name": "DocAPI", "url": "https://docapi.co" },
       { "@type": "Product", "name": "FarmPosts", "url": "https://farmposts.com" }
     ]
   }
   ```
3. Add a `WebSite` schema for sitelinks search box eligibility.
4. Use Next.js `<Script>` component with `strategy="afterInteractive"` or just a raw `<script>` tag in the JSX — raw tag is simpler here.

**Acceptance criteria:**
- [ ] Google Rich Results Test shows valid Person schema for siwan.io
- [ ] No schema validation errors
- [ ] sameAs links all resolve correctly

---

### Chunk 2: Add BreadcrumbList schema to blog pages
**Estimated effort:** ~5 min
**Files to modify:** `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`
**Depends on:** none

**What to do:**
1. In `app/blog/page.tsx`, add a `BreadcrumbList` JSON-LD:
   - Item 1: Home → `https://siwan.io`
   - Item 2: Writing → `https://siwan.io/blog`
2. In `app/blog/[slug]/page.tsx`, add a `BreadcrumbList` JSON-LD:
   - Item 1: Home → `https://siwan.io`
   - Item 2: Writing → `https://siwan.io/blog`
   - Item 3: `{post.title}` → `https://siwan.io/blog/{slug}`

**Acceptance criteria:**
- [ ] Blog index page shows breadcrumb schema: Home > Writing
- [ ] Blog post pages show breadcrumb schema: Home > Writing > Post Title
- [ ] Google Rich Results Test validates both

---

### Chunk 3: Add SoftwareApplication schema for projects
**Estimated effort:** ~10 min
**Files to modify:** `app/page.tsx`
**Depends on:** Chunk 1 (can merge into the same JSON-LD script)

**What to do:**
1. Add `SoftwareApplication` schema for DocAPI and FarmPosts (the two revenue-generating products):
   ```json
   {
     "@type": "SoftwareApplication",
     "name": "DocAPI",
     "url": "https://docapi.co",
     "applicationCategory": "DeveloperApplication",
     "description": "HTML to PDF API for developers and AI agents. Agent-native, pay-per-use via USDC.",
     "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Free tier available" }
   }
   ```
2. Add similarly for FarmPosts with `applicationCategory: "BusinessApplication"`, price `"199"`.

**Acceptance criteria:**
- [ ] Both DocAPI and FarmPosts appear as SoftwareApplication in structured data
- [ ] Google Rich Results Test shows no errors for either

---

### Chunk 4: Upgrade blog posts to NewsArticle + add FAQ schema to top posts
**Estimated effort:** ~10 min
**Files to modify:** `app/blog/[slug]/page.tsx`
**Depends on:** none

**What to do:**
1. The existing `Article` JSON-LD in blog post pages — change `@type` from `"Article"` to `"BlogPosting"` (more semantically accurate than `NewsArticle` for personal blog).
2. Add an `author` field to the existing schema that points to the Person schema: `"author": { "@type": "Person", "name": "Siwan Kim", "url": "https://siwan.io" }`.
3. For the posts `ai-agent-window` and `agentic-first-apis`, add a `FAQPage` schema block with 2-3 Q&As derived from the post content (e.g., "What is an agentic-first API?", "How long is the AI agent opportunity window?").
4. Read those two MDX files first to extract accurate Q&A pairs.

**Acceptance criteria:**
- [ ] Blog post schema type is `BlogPosting` not `Article`
- [ ] Author field resolves to `https://siwan.io`
- [ ] FAQ schema appears on ai-agent-window and agentic-first-apis posts
- [ ] Google Rich Results Test validates FAQ rich result eligibility

**Risks & Unknowns:**
- FAQ schema requires questions and answers to actually appear on the page (not just in JSON-LD). Either add visible FAQ sections to those two posts, or use `mainEntity` carefully. Prefer adding a visible FAQ section at the end of those posts.

---

## Feature: AI SEO / GEO

**Created:** 2026-03-12
**Status:** In Progress
**Estimated effort:** ~25 min

**Goal:** Ensure ChatGPT, Perplexity, Claude, and Gemini cite Siwan Kim accurately when asked about agentic APIs, indie hacking, and building in public.
**In scope:** llms.txt expansion, structured answer content, FAQ schema.
**Out of scope:** Paid AI search placement, prompt injection, third-party AI SEO tools.
**Dependencies:** Schema Markup feature (FAQ schema chunks).

---

### Chunk 1: Expand llms.txt with full post list and Q&A format
**Estimated effort:** ~10 min
**Files to modify:** `public/llms.txt`
**Depends on:** none

**What to do:**
1. Read the current `public/llms.txt` (already has solid base content).
2. Add a `## Writing` section that lists ALL 10 blog posts with: title, URL, one-sentence summary, and key takeaway — formatted so an LLM can cite them directly.
3. Add a `## Frequently Asked Questions` section with 5-6 Q&As in plain prose:
   - "What is DocAPI?" → clear answer with URL
   - "What is FarmPosts?" → clear answer with URL
   - "What is an agentic-first API?" → links to blog post
   - "Who is Siwan Kim?" → 2-sentence bio
   - "What is Siwan Kim building?" → current projects
4. Add `## Contact` section with X, LinkedIn, Threads links.
5. Keep file under 2000 tokens total so LLMs load it fully.

**Acceptance criteria:**
- [ ] All 10 posts listed with accurate summaries
- [ ] 5+ Q&As in FAQ section
- [ ] File is under 2000 tokens (rough check: under ~8000 chars)
- [ ] When pasted into ChatGPT, it correctly answers "Who is Siwan Kim and what does he build?"

---

### Chunk 2: Add structured "Who is Siwan Kim" answer block to homepage
**Estimated effort:** ~10 min
**Files to modify:** `app/page.tsx`
**Depends on:** none

**What to do:**
1. Add a visually minimal section below the newsletter embed (above the footer) that contains structured prose optimized for AI citation:
   ```
   Siwan Kim is an indie hacker and software developer who builds AI tools and developer infrastructure.
   He is the creator of DocAPI (agent-native HTML-to-PDF API) and FarmPosts (AI content platform for real estate agents).
   He writes about agentic API design, shipping products publicly, and career strategy in the AI era.
   ```
2. This content should be in a `<section>` with `aria-label="About"` and wrapped in a `<p>` — visible on page but styled minimally (small, muted) so it doesn't disrupt the design.
3. This gives LLMs a single paragraph to quote when asked about Siwan.

**Acceptance criteria:**
- [ ] Section visible in page source
- [ ] Contains "Siwan Kim", "DocAPI", "FarmPosts", "agentic", "indie hacker"
- [ ] Visually unobtrusive (matches `--muted` color, small font, no border)

---

### Chunk 3: Add FAQ schema to top 3 blog posts
**Estimated effort:** ~10 min (after Chunk 4 of Schema Markup feature)
**Files to modify:** `app/blog/[slug]/page.tsx`, `content/posts/ai-agent-window.mdx`, `content/posts/agentic-first-apis.mdx`, `content/posts/shipping-before-ready.mdx`
**Depends on:** Schema Markup — Chunk 4

**What to do:**
1. Add a "Quick answers" section at the end of these 3 posts (in the MDX), each with 2-3 Q&As:
   - `ai-agent-window.mdx`: "How long is the AI agent opportunity window?", "What should I do in the next two years?", "Why are AI agents a platform shift?"
   - `agentic-first-apis.mdx`: "What is an agentic-first API?", "How do agents pay for API calls?", "Why is HTTP 402 the key metric?"
   - `shipping-before-ready.mdx`: "Why should I ship before I'm ready?", "What happens if I wait until it's perfect?"
2. In `app/blog/[slug]/page.tsx`, detect if a post has FAQ data in its frontmatter and render a `FAQPage` JSON-LD schema block for those posts.
3. Add `faq` field to frontmatter for those 3 posts.

**Acceptance criteria:**
- [ ] FAQ section visible at bottom of each post
- [ ] FAQ JSON-LD renders correctly in page source for those 3 posts
- [ ] Google Rich Results Test shows FAQ rich result eligibility

**Risks & Unknowns:**
- FAQ schema only triggers rich results if Q&As appear on the page and match the JSON-LD. Keep them identical.

---

## Feature: Site Architecture

**Created:** 2026-03-12
**Status:** In Progress
**Estimated effort:** ~50 min

**Goal:** Improve blog discoverability and internal linking so visitors explore more content and Google understands topic clusters.
**In scope:** Tag archive pages, related posts, prev/next navigation.
**Out of scope:** Full search, pagination (only 10 posts), author pages.
**Dependencies:** Tags already added to all posts (done in CRO sprint).

---

### Chunk 1: Tag archive pages at /blog/tag/[tag]
**Estimated effort:** ~20 min
**Files to modify:** `app/blog/tag/[tag]/page.tsx` (new file), `app/sitemap.ts`, `app/blog/page.tsx`
**Depends on:** none

**What to do:**
1. Create `app/blog/tag/[tag]/page.tsx` as a new route.
2. In `generateStaticParams`, return all unique tags from `getAllPosts()`.
3. In the page, call `getAllPosts().filter(p => p.tags.includes(tag))` to get filtered posts.
4. Render the same `blog-list` layout as the blog index but with a header like "Posts tagged: AI" and a back link to `/blog`.
5. Add metadata with `title: "Posts tagged ${tag} — Siwan Kim"` and a relevant description.
6. Add tag archive URLs to `app/sitemap.ts` with priority 0.5.
7. In `app/blog/page.tsx`, make the tag pills (`bi-tag`) link to `/blog/tag/${tag}` instead of being plain text.

**Acceptance criteria:**
- [ ] `/blog/tag/ai` shows only AI-tagged posts
- [ ] `/blog/tag/shipping`, `/blog/tag/career`, `/blog/tag/building` all work
- [ ] Tag pills on blog index are clickable links
- [ ] Tag archive pages appear in sitemap.xml
- [ ] Page title and description are unique per tag

---

### Chunk 2: Related posts section at bottom of each blog post
**Estimated effort:** ~20 min
**Files to modify:** `app/blog/[slug]/page.tsx`, `lib/blog.ts`, `app/globals.css`
**Depends on:** none

**What to do:**
1. In `lib/blog.ts`, add a `getRelatedPosts(slug: string, tags: string[], limit = 3)` function that:
   - Gets all posts
   - Excludes the current post
   - Scores remaining posts by number of shared tags (desc)
   - Returns top `limit` posts
2. In `app/blog/[slug]/page.tsx`, call `getRelatedPosts` and pass results as a prop.
3. Render a "More posts" section below the newsletter embed with 2-3 post links showing title + description.
4. Add `.related-posts` CSS styles in `globals.css` — keep it minimal (small list, muted border-top, same font as `bi-*` classes).

**Acceptance criteria:**
- [ ] Each blog post shows 2-3 related posts based on shared tags
- [ ] Posts with no tag overlap still show most-recent posts as fallback
- [ ] Related posts appear after the newsletter embed
- [ ] No posts link to themselves

---

### Chunk 3: Prev/next post navigation on blog post pages
**Estimated effort:** ~10 min
**Files to modify:** `app/blog/[slug]/page.tsx`, `lib/blog.ts`, `app/globals.css`
**Depends on:** none

**What to do:**
1. In `lib/blog.ts`, add a `getAdjacentPosts(slug: string)` function returning `{ prev: PostFrontmatter | null, next: PostFrontmatter | null }` based on the sorted posts array.
2. In `app/blog/[slug]/page.tsx`, call `getAdjacentPosts` and render a prev/next nav bar above the "← All posts" link.
3. Display: `← [Prev Post Title]` on left, `[Next Post Title] →` on right, in a flex row.
4. Add `.post-nav` CSS in `globals.css` matching site's minimal aesthetic.

**Acceptance criteria:**
- [ ] Newest post shows only a "← previous" link
- [ ] Oldest post shows only a "next →" link
- [ ] Middle posts show both
- [ ] Links resolve to correct slugs

**Risks & Unknowns:**
- "Prev" and "Next" direction should follow chronological order (newer = next). Confirm with user if they prefer reverse.

---

## Feature: Content Strategy

**Created:** 2026-03-12
**Status:** In Progress
**Estimated effort:** ~35 min

**Goal:** Plan the next 10 blog posts with search intent behind them, and improve internal linking across existing posts.
**In scope:** Post planning with target keywords, internal link audit, cornerstone content designation.
**Out of scope:** Actually writing the posts (use `/blog` skill for that), SEO tools integration.
**Dependencies:** Tag archive pages (Site Architecture — Chunk 1) should be done first.

---

### Chunk 1: Plan 10 SEO-intent posts with target keywords and outlines
**Estimated effort:** ~10 min
**Files to modify:** `CONTENT_PLAN.md` (new file in project root)
**Depends on:** none

**What to do:**
1. Create `CONTENT_PLAN.md` with a table of 10 planned posts, each with:
   - Title
   - Target keyword (what someone would Google)
   - Search intent (informational / navigational / commercial)
   - Tag
   - Hook / angle
   - 3-bullet outline
2. Prioritize keywords around: "agentic API", "HTML to PDF API", "building in public", "indie hacker tools", "AI agent payments", "USDC API payments", "real estate content automation".
3. Mark 2 as "cornerstone" posts (comprehensive, hub-like).

**Acceptance criteria:**
- [ ] `CONTENT_PLAN.md` exists with 10 posts planned
- [ ] Each post has a target keyword and search intent marked
- [ ] At least 2 are marked cornerstone
- [ ] Balanced across tags: AI (4), building (3), career (2), shipping (1)

---

### Chunk 2: Add internal links between related existing posts
**Estimated effort:** ~20 min
**Files to modify:** Multiple MDX files in `content/posts/`
**Depends on:** none

**What to do:**
1. Read the following post pairs (they should link to each other):
   - `agentic-first-apis.mdx` ↔ `ai-agent-window.mdx` (both about AI agents)
   - `shipping-before-ready.mdx` ↔ `building-in-public.mdx` (both about shipping mindset)
   - `cs-degree-in-ai-era.mdx` ↔ `perception-beats-qualification.mdx` (both about career)
   - `stablecoins-are-the-killer-app.mdx` ↔ `agentic-first-apis.mdx` (USDC/crypto connection)
   - `paying-for-ai-you-could-set-up-yourself.mdx` ↔ `ai-agent-window.mdx` (SMB AI opportunity)
2. For each pair, find a natural sentence in each post to add a hyperlink to the other.
3. Keep link text descriptive (not "click here") — use the post title or a concept from it.

**Acceptance criteria:**
- [ ] Each of the 5 post pairs has at least one bidirectional internal link
- [ ] No link text is "click here" or "read more"
- [ ] Links use absolute paths (`/blog/[slug]`) not relative paths

---

### Chunk 3: Designate cornerstone content + add hub section to top posts
**Estimated effort:** ~10 min (planning/markup only)
**Files to modify:** `content/posts/ai-agent-window.mdx`, `content/posts/agentic-first-apis.mdx`
**Depends on:** Chunk 2

**What to do:**
1. Add `cornerstone: true` to frontmatter of `ai-agent-window.mdx` and `agentic-first-apis.mdx`.
2. Update `lib/blog.ts` `PostFrontmatter` interface to include `cornerstone?: boolean`.
3. In `app/blog/page.tsx`, render cornerstone posts with a subtle visual distinction (e.g., a "⭐ Essential read" badge using the existing `bi-tag` style but with a gold/amber color).
4. At the bottom of each cornerstone post, add a "Related reading from this site" section with 3-4 manually curated internal links (not automated — better control over anchor text for SEO).

**Acceptance criteria:**
- [ ] `cornerstone: true` in frontmatter of 2 posts
- [ ] Blog index shows a subtle badge on cornerstone posts
- [ ] Each cornerstone post has a "Related reading" section with 3+ links
- [ ] `lib/blog.ts` TypeScript compiles without errors

---

## Feature: Social Content System

**Created:** 2026-03-12
**Status:** In Progress
**Estimated effort:** ~35 min

**Goal:** Repurpose existing blog posts into X threads and LinkedIn posts to drive traffic back to the site.
**In scope:** X/Twitter threads and LinkedIn posts for top 5 posts. Evergreen posts for product proof points.
**Out of scope:** Instagram, TikTok, scheduling tools, paid promotion.
**Dependencies:** None — pure content creation, no code changes.

---

### Chunk 1: Write X/Twitter threads for top 5 blog posts
**Estimated effort:** ~20 min
**Files to modify:** `social/twitter-threads.md` (new file)
**Depends on:** none

**What to do:**
1. Create `social/` directory and `social/twitter-threads.md`.
2. Write complete X threads (8-12 tweets each) for these 5 posts:
   - "You Have About Two Years" (ai-agent-window)
   - "Why I'm Bullish on Agentic-First APIs" (agentic-first-apis)
   - "Shipping Before You're Ready" (shipping-before-ready)
   - "Never Lie About Your Business" (never-lie-about-your-business)
   - "The New Currency of Professional Success" (perception-beats-qualification)
3. Each thread format:
   - Tweet 1: Hook (bold claim or counterintuitive statement)
   - Tweets 2-9: Main points, one per tweet
   - Final tweet: CTA linking to full post at `siwan.io/blog/[slug]`
4. Keep Siwan's voice: direct, no fluff, slightly contrarian.

**Acceptance criteria:**
- [ ] 5 complete threads written (40-60 tweets total)
- [ ] Each thread starts with a hook tweet that would make someone stop scrolling
- [ ] Each thread ends with link to full post
- [ ] No tweet exceeds 280 chars
- [ ] Voice matches existing blog copy (direct, pragmatic)

---

### Chunk 2: Write LinkedIn posts for top 3 blog posts
**Estimated effort:** ~10 min
**Files to modify:** `social/linkedin-posts.md` (new file)
**Depends on:** none

**What to do:**
1. Create `social/linkedin-posts.md`.
2. Write LinkedIn posts (300-500 words each) for:
   - "The New Currency of Professional Success" — highest relevance to LinkedIn's professional audience
   - "Your CS Degree Isn't Worthless. Your Plan Is." — strong career content
   - "You Have About Two Years" — strong professional urgency angle
3. LinkedIn format is different from X: longer paragraphs, "Here's what I learned:" framing, end with a question to prompt comments.
4. Each post should feel like a standalone insight, not just "I wrote a post, go read it."

**Acceptance criteria:**
- [ ] 3 complete LinkedIn posts written
- [ ] Each ends with an engagement question
- [ ] Each includes a link to the full post
- [ ] Tone is professional but not corporate

---

### Chunk 3: Evergreen social posts from project proof points
**Estimated effort:** ~10 min
**Files to modify:** `social/evergreen-posts.md` (new file)
**Depends on:** none

**What to do:**
1. Create `social/evergreen-posts.md` with 10 short (1-3 tweet) evergreen posts about:
   - DocAPI launch story ("Shipped DocAPI in a week. Here's what I built...")
   - FarmPosts founding member milestone ("X real estate agents are now automating their content...")
   - Building in public metrics ("Posted 10 essays in 6 weeks. Here's what moved the needle...")
   - Agentic API insight ("The pattern I keep seeing: agents can't use APIs built for humans...")
   - USDC payments insight ("Stablecoins aren't crypto speculation — they're the payment rail for autonomous software")
2. These are not tied to specific posts — they're standalone insights for building audience between posts.

**Acceptance criteria:**
- [ ] 10 evergreen posts written
- [ ] Mix of formats: single tweet, 3-tweet mini-thread, question tweet
- [ ] At least 3 reference specific products (DocAPI, FarmPosts) with links

**Risks & Unknowns:**
- Social content is perishable — post within 1-2 weeks of writing for maximum relevance.
- "You Have About Two Years" framing will age — tag it with an expiry note in the file.

---
