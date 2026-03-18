# Roadmap — Portfolio (siwan.io)

**Last updated:** 2026-03-17 (10K Growth Engine complete)

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

### Feature: 10K Pageview Growth Engine — Complete
- [x] Chunk 1: SEO retrofit top 5 existing posts
- [x] Chunk 2: Email newsletter integration
- [x] Chunk 3: Write "Indie Hacker Revenue Transparency" post
- [x] Chunk 4: Write "DocAPI vs Puppeteer" post
- [x] Chunk 5: Write "Junior Engineer in the AI Era" post
- [x] Chunk 6: Write "AI Tools for Indie Hackers" post
- [x] Chunk 7: HN + Reddit distribution system
- [x] Chunk 8: Write "The HTTP 402 Problem" post
- [x] Chunk 9: Write "Indie Hacker's Guide to Shipping AI Products" post
- [x] Chunk 10: Write "Building in Public: The Complete Playbook" post
- [x] Chunk 11: Monthly publishing + distribution checklist

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

## Feature: 10K Pageview Growth Engine

**Created:** 2026-03-17
**Status:** In Progress
**Estimated effort:** ~3.5 hours (implementation) + ongoing content production

**Goal:** Grow siwan.io from 542 pageviews/month to 10,000 pageviews/month by combining SEO-targeted content production, email capture, and multi-channel distribution.

**Current state:**
- 324 visitors / 542 PV last 30 days
- LinkedIn = 58% of traffic (dangerous single-channel dependency)
- Google = 6 visitors (essentially zero organic SEO)
- Spike-based traffic, no compounding
- 61% bounce rate, no email capture

**Target state:**
- ~10,000 PV/month (18x growth)
- Google organic: ~3,000-4,000 PV/month (30-40%)
- LinkedIn sustained: ~2,000-3,000 PV/month
- Email newsletter return visits: ~1,000 PV/month
- HN / Reddit spikes: ~500-1,000 PV/month on publish days

**In scope:** SEO retrofit of existing posts, new keyword-targeted content, email capture, HN/Reddit distribution, building-in-public posts.
**Out of scope:** Paid ads, backlink outreach campaigns, guest posting, video/podcast content.
**Dependencies:** Beehiiv or ConvertKit account for newsletter, Google Search Console access.

**Timeline:** 6-9 months of consistent execution (2 posts/month minimum).

---

### Chunk 1: SEO Retrofit Top 5 Existing Posts ✓
**Estimated effort:** ~20 min
**Files to modify:**
- `content/posts/cs-degree-in-ai-era.mdx`
- `content/posts/ai-will-read-your-lease.mdx`
- `content/posts/amazon-ai-code-outages.mdx`
- `content/posts/never-lie-about-your-business.mdx`
- `content/posts/defi-50m-loss.mdx`
**Depends on:** none

**What to do:**
1. For each post, identify the primary target keyword (see table below) and add it to the H1 title, first paragraph, and at least one subheading
2. Add a 5-question FAQ section at the bottom of each post using the target keyword in the questions
3. Update the `description` frontmatter field to be a keyword-rich meta description (155 chars max)
4. Add 2 internal links per post pointing to related posts on siwan.io
5. Submit all 5 URLs to Google Search Console > URL Inspection > Request Indexing

| Post | Target Keyword | Monthly Volume |
|---|---|---|
| cs-degree-in-ai-era | "is a CS degree worth it 2025" | ~2,400 |
| ai-will-read-your-lease | "AI contract review" | ~1,900 |
| amazon-ai-code-outages | "AI coding tools reliability" | ~800 |
| never-lie-about-your-business | "indie hacker lessons" | ~600 |
| defi-50m-loss | "DeFi security risks" | ~500 |

**Acceptance criteria:**
- [x] Each post's H1 contains the target keyword
- [x] Each post has a FAQ section with 5 questions
- [x] Meta descriptions are updated and under 155 chars
- [x] Each post has at least 2 internal links to other siwan.io posts
- [ ] All 5 URLs requested for indexing in Google Search Console (manual step)

---

### Chunk 2: Email Newsletter Integration
**Estimated effort:** ~10 min
**Files to modify:**
- `components/NewsletterSignup.tsx` (create or update existing)
- `app/blog/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/page.tsx`
**Depends on:** none (can run in parallel with Chunk 1)

**What to do:**
1. Create a Beehiiv or ConvertKit account and get the embed form URL/code
2. Build or update a `NewsletterSignup` component with a simple email input, submit button, and short value prop copy ("Get my best posts on AI and indie hacking — no spam")
3. Add the `NewsletterSignup` component: (a) at the end of every blog post, above the related posts section; (b) as a mid-post inline CTA after the 3rd paragraph on posts over 800 words; (c) in the blog listing page header
4. Track signups as custom events in Vercel Analytics (already set up from prior chunk)

**Acceptance criteria:**
- [ ] Newsletter signup form appears at the end of every blog post
- [ ] Form appears in blog listing page
- [ ] Submitting the form adds the user to Beehiiv/ConvertKit list
- [ ] Signup event is tracked in Vercel Analytics
- [ ] Mobile layout looks clean (63% of visitors are mobile)

---

### Chunk 3: Write "Indie Hacker Revenue Transparency" Post
**Estimated effort:** ~20 min
**Files to modify:**
- `content/posts/indie-hacker-revenue-report.mdx` (new)
**Depends on:** none

**What to do:**
1. Write a post sharing real revenue numbers for DocAPI and/or FarmPosts — MRR, ARR, number of customers, key milestones
2. Target keyword: "indie hacker revenue report" — include in title, H1, first paragraph
3. Structure: Background → Products → Revenue breakdown by product → Key lessons → What's next
4. This post is primarily **shareable** (LinkedIn, HN) not searchable — optimize title for clicks, not just SEO
5. Add internal links to the building-in-public post and the shipping-before-ready post
6. Frontmatter: tag as `building`, set `featured: true` if applicable

**Acceptance criteria:**
- [ ] Post includes real revenue/customer numbers (not vague percentages)
- [ ] Minimum 800 words
- [ ] Target keyword in H1, first paragraph, meta description
- [ ] At least 2 internal links to related posts
- [ ] Submitted for GSC indexing after publish

---

### Chunk 4: Write "DocAPI vs Puppeteer" Post
**Estimated effort:** ~20 min
**Files to modify:**
- `content/posts/docapi-vs-puppeteer.mdx` (already exists — expand/optimize it)
**Depends on:** none

**What to do:**
1. Read the existing `docapi-vs-puppeteer.mdx` — assess whether it fully targets the "puppeteer alternative" keyword
2. If the post exists but is thin (<1,000 words), expand it with: a code comparison section, a performance/cost comparison table, and a "when to use each" decision guide
3. Target keywords: "puppeteer alternative", "replace puppeteer", "html to pdf without puppeteer"
4. Add a CTA at the bottom linking to DocAPI (this post doubles as acquisition content)
5. Add FAQ section covering: "Is there a free Puppeteer alternative?", "How to generate PDFs without Puppeteer?", etc.

**Acceptance criteria:**
- [ ] Post is 1,200+ words
- [ ] Contains a side-by-side code comparison (Puppeteer vs DocAPI)
- [ ] Contains a comparison table (setup time, bundle size, cold start, pricing)
- [ ] Target keyword in H1, URL slug, first paragraph, meta description
- [ ] FAQ section with 4+ questions
- [ ] DocAPI CTA at bottom

---

### Chunk 5: Write "Junior Engineer in the AI Era" Post
**Estimated effort:** ~20 min
**Files to modify:**
- `content/posts/junior-engineer-ai-era.mdx` (new)
**Depends on:** none

**What to do:**
1. Write a post targeting junior/early-career developers worried about AI replacing them
2. Target keyword: "junior software engineer AI era" / "junior developer career advice 2025"
3. Angle: contrarian — "Junior engineers aren't being replaced. They're being asked to level up faster than ever. Here's the actual playbook."
4. Structure: The fear (what people are saying) → The reality (what the data shows) → What skills actually matter → Concrete 90-day action plan
5. This post should be both searchable and shareable — sharp enough for HN, optimized for search
6. Add internal link to cs-degree-in-ai-era post

**Acceptance criteria:**
- [ ] Post is 1,200+ words
- [ ] Includes a concrete action plan (numbered list, not vague advice)
- [ ] Target keyword in H1, URL slug, first paragraph
- [ ] Internal link to cs-degree-in-ai-era
- [ ] FAQ section at bottom

---

### Chunk 6: Write "AI Tools for Indie Hackers" Post
**Estimated effort:** ~20 min
**Files to modify:**
- `content/posts/ai-tools-indie-hackers.mdx` (new)
**Depends on:** none

**What to do:**
1. Write a practical breakdown of the exact AI tools used to run DocAPI and FarmPosts day-to-day
2. Target keyword: "AI tools for indie hackers" / "best AI tools for solo founders 2025"
3. Format: Tool-by-tool breakdown with: what it does, how you use it specifically, cost, verdict
4. Categories: coding (Claude, Cursor), marketing (content generation), ops (automation), customer support
5. Include actual dollar amounts spent per month on each tool — specificity is what makes this shareable
6. Add internal links to building-in-public post and shipping-before-ready post

**Acceptance criteria:**
- [ ] Covers minimum 8 specific tools with real use cases
- [ ] Includes monthly cost for each tool
- [ ] Target keyword in H1, URL slug, first paragraph
- [ ] 1,000+ words
- [ ] At least 2 internal links

---

### Chunk 7: HN + Reddit Distribution System
**Estimated effort:** ~10 min
**Files to modify:**
- `social/distribution-playbook.md` (new)
**Depends on:** Chunks 3, 4, 5, 6 (need posts to submit)

**What to do:**
1. Create `social/distribution-playbook.md` documenting the exact submission process for each channel
2. For **Hacker News**: Best posts to submit (technical analysis, building in public numbers), optimal timing (Tue-Wed 9-11am ET), title format ("Show HN: X" vs "Ask HN: X" vs plain title), how to handle comments
3. For **Reddit**: Map each post category to target subreddits: career posts → r/cscareerquestions + r/learnprogramming; indie hacker posts → r/IndieHackers + r/SideProject; AI tools → r/MachineLearning + r/LocalLLaMA. Include rules per subreddit (no self-promo rules etc.)
4. For **LinkedIn**: Confirm cross-posting workflow from existing social content system
5. For **X/Twitter**: Thread format for each new post (use existing twitter-threads.md as template)
6. Include a "publish day checklist" — ordered steps from hitting publish to full distribution done

**Acceptance criteria:**
- [ ] `distribution-playbook.md` documents all 4 channels
- [ ] Each channel entry includes: target subreddit/community, timing recommendation, title format, rules/restrictions
- [ ] Publish day checklist covers all channels in order
- [ ] HN submission titles written for Chunks 3, 4, 5 posts

---

### Chunk 8: Write "The HTTP 402 Problem" Post
**Estimated effort:** ~20 min
**Files to modify:**
- `content/posts/http-402-problem.mdx` (new)
**Depends on:** none

**What to do:**
1. Write a technical post on why HTTP 402 Payment Required was never properly adopted and why AI agents need it now
2. Target keyword: "HTTP 402 payment required" / "AI agent payments"
3. Angle: "The HTTP status code from 1996 that the AI agent economy needs in 2025"
4. Structure: What 402 is → Why it was never adopted → Why agents change everything → How DocAPI uses it → What a 402-native internet looks like
5. This is both searchable (developers googling 402) and shareable (HN loves this type of post)
6. Add internal links to agentic-first-apis post and docapi-vs-puppeteer post

**Acceptance criteria:**
- [ ] Post is 1,000+ words
- [ ] Includes code example of a 402 response + agent handling it
- [ ] Target keyword in H1, URL slug, first paragraph
- [ ] Links to agentic-first-apis and docapi-vs-puppeteer
- [ ] FAQ section

---

### Chunk 9: Write "Indie Hacker's Guide to Shipping AI Products" Post
**Estimated effort:** ~20 min
**Files to modify:**
- `content/posts/indie-hacker-guide-shipping-ai-products.mdx` (new)
**Depends on:** Chunk 3 (builds on revenue transparency post credibility)

**What to do:**
1. Write the cornerstone guide for indie hackers wanting to build and ship AI-powered products
2. Target keyword: "how to build an AI product" / "indie hacker AI product guide 2025"
3. Cornerstone content — mark as cornerstone in frontmatter
4. Structure: Why now is the best time for solo AI builders → How to pick what to build → Tech stack decisions → Distribution before you build → Pricing AI products → Mistakes to avoid (with real examples from DocAPI/FarmPosts)
5. Minimum 2,000 words — this is a hub post, all other indie hacking posts should link TO this
6. After publishing, add internal links TO this post from: shipping-before-ready, building-in-public, indie-hacker-revenue-report, ai-tools-indie-hackers

**Acceptance criteria:**
- [ ] Post is 2,000+ words
- [ ] Marked as cornerstone in frontmatter
- [ ] Target keyword in H1, first paragraph, URL slug
- [ ] Includes DocAPI and FarmPosts as real examples throughout
- [ ] After publish: 4 existing posts updated to link to this post
- [ ] FAQ section with 5+ questions

---

### Chunk 10: Write "Building in Public: The Complete Playbook" Post
**Estimated effort:** ~20 min
**Files to modify:**
- `content/posts/building-in-public-playbook.mdx` (new — replaces or expands existing building-in-public.mdx)
**Depends on:** none

**What to do:**
1. Check the existing `building-in-public.mdx` — if it's a stub or short, this chunk rewrites/expands it into a full guide
2. Target keyword: "building in public guide" / "how to build in public"
3. Angle: practical playbook, not just "tweet your MRR" — the actual content system, what to share, what not to share, how to grow an audience while building
4. Structure: What building in public actually means → Why it works → What to share (and what not to) → The content calendar system → Channels that work best → Real examples from siwan.io's journey
5. Add internal links to: indie-hacker-revenue-report, shipping-before-ready, indie-hacker-guide-shipping-ai-products

**Acceptance criteria:**
- [ ] Post is 1,500+ words
- [ ] Includes a concrete "what to share" framework (not vague advice)
- [ ] Target keyword in H1, URL slug, first paragraph
- [ ] Links to at least 3 other siwan.io posts
- [ ] FAQ section

---

### Chunk 11: Monthly Publishing + Distribution Checklist
**Estimated effort:** ~5 min
**Files to modify:**
- `social/monthly-checklist.md` (new)
**Depends on:** Chunk 7

**What to do:**
1. Create a repeatable monthly checklist that ensures consistent execution: 2 posts published, all distribution channels hit, GSC checked for new impressions, newsletter sent
2. Include: monthly content calendar template (which week to publish what), pre-publish SEO checklist (keyword in H1, meta desc, FAQ section, internal links, GSC indexing), post-publish distribution checklist (LinkedIn, X thread, HN if technical, Reddit if relevant, newsletter to subscribers), monthly metrics review (target: track PV growth toward 10K goal)
3. Define monthly KPIs to check in Vercel Analytics: total PV, Google referral count, newsletter signup count, bounce rate trend

**Acceptance criteria:**
- [ ] Checklist covers pre-publish SEO, post-publish distribution, and monthly metrics review
- [ ] Monthly KPI targets defined (PV milestones toward 10K)
- [ ] Estimated time per month to complete all checklist items

---

**Risks & Unknowns:**
- Google organic takes 3-6 months to show results after publishing — short-term traffic still depends on LinkedIn/HN spikes
- HN is unpredictable — technical posts with novel angles get traction, promotional posts get flagged
- Newsletter growth is slow initially — need 100+ subscribers before it meaningfully drives return traffic
- 10K PV goal requires ~2 posts/month sustained for 6-9 months — consistency is the main risk
- Reddit has strict self-promotion rules in some subreddits — must provide genuine value, not just drop links

