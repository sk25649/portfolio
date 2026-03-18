# Monthly Publishing + Distribution Checklist — siwan.io

Goal: 10,000 pageviews/month from a current baseline of 542 PV/month.
Strategy: 2 posts/month, consistent distribution across all channels, monthly metrics review.

---

## 1. Monthly Content Calendar Template

### Weekly schedule

| Week | Action |
|------|--------|
| Week 1 | Write post 1 — pick a searchable keyword from CONTENT_PLAN.md backlog |
| Week 2 | Publish post 1, run full distribution checklist (Section 3) |
| Week 3 | Write post 2 — building in public, revenue update, or technical how-to |
| Week 4 | Publish post 2, run full distribution checklist; run monthly metrics review (Section 4) |

### Post type rotation by month

| Month | Post 1 (searchable) | Post 2 (shareable) |
|-------|--------------------|--------------------|
| Odd months | From CONTENT_PLAN.md backlog | Building in public update |
| Even months | Technical how-to post | Revenue/metrics post |

**Topic selection rule:** Post 1 should target a keyword with measurable search volume. Post 2 is optimized for shares and social engagement over search. Both should still follow the full SEO checklist before publishing.

---

## 2. Pre-Publish SEO Checklist

Run this before hitting publish on any post.

- [ ] `author`, `slug`, `description`, `tags`, `cornerstone`, `faq` all present in frontmatter
- [ ] Description is 140–160 characters (count carefully — not 130, not 165)
- [ ] Primary keyword appears in the H1 title and in the first paragraph
- [ ] At least one `##` subheading mirrors a search query someone would actually type
- [ ] 5 FAQ entries in frontmatter (used for JSON-LD schema markup)
- [ ] Visible `## FAQ` section at end of post (mirrors frontmatter FAQ for readers)
- [ ] At least 2 internal links to other siwan.io posts with descriptive anchor text
- [ ] If `cornerstone: true`: at least 4 existing posts link TO this post
- [ ] External links use `target="_blank" rel="noopener noreferrer"`
- [ ] Word count: 800–1,200 words (cornerstone posts: 2,000+)
- [ ] `npm run build` passes with no errors

---

## 3. Post-Publish Distribution Checklist

Run immediately after pushing to production.

- [ ] Request indexing in Google Search Console — URL Inspection → Request Indexing
- [ ] Submit to Hacker News if appropriate (technical post, building in public, or novel analysis)
- [ ] Post LinkedIn version — use social/linkedin-posts.md format or write new one in that style
- [ ] Post X/Twitter thread — use social/twitter-threads.md format
- [ ] Post to relevant subreddits — see social/distribution-playbook.md for the subreddit map
- [ ] Send Beehiiv newsletter broadcast — title = post title, body = 2–3 sentence hook + link to post
- [ ] Respond to all comments and replies within 24 hours

---

## 4. Monthly Metrics Review

Run on the last day of each month in Vercel Analytics.

### KPI targets

| Metric | Current | Month 1 | Month 3 | Month 6 | 10K Goal |
|--------|---------|---------|---------|---------|----------|
| Total pageviews | 542 | 700 | 1,200 | 2,500 | 10,000 |
| Google organic visitors | 6 | 20 | 100 | 500 | 3,000 |
| LinkedIn visitors | 188 | 250 | 300 | 400 | 1,500 |
| Newsletter subscribers | 0 | 25 | 75 | 200 | 500 |
| Bounce rate | 61% | 58% | 55% | 50% | <50% |

### What to check

- [ ] Vercel Analytics: total PV vs. last month, referrer breakdown
- [ ] Google Search Console: impressions, clicks, average position for target keywords
- [ ] Beehiiv dashboard: subscriber count, open rate on last newsletter
- [ ] Which post got the most traffic? Double down on that topic or format next month.
- [ ] Which channel drove the most new traffic? Increase effort there.
- [ ] Any post getting Google impressions but low CTR? Improve the meta title or description.

---

## 5. Quarterly Content Audit

Run every 3 months (end of March, June, September, December).

- [ ] Check Google Search Console for posts gaining impressions — add internal links from newer posts to these
- [ ] Update any posts with outdated stats or references (dates, prices, product changes)
- [ ] Identify top 3 posts by traffic — add a CTA or newsletter signup to each if not already present
- [ ] Review CONTENT_PLAN.md — are the planned keywords still relevant? Add new ones discovered from GSC data

---

## 6. Time Estimate

| Task | Time |
|------|------|
| Writing a post | 2–4 hours |
| SEO review + publish | 30 min |
| Distribution (all channels) | 45 min |
| Monthly metrics review | 30 min |
| **Total per post** | **~4–6 hours** |
| **Monthly total (2 posts + distribution)** | **~9–13 hours** |

This is roughly 2–3 hours per week. Front-load writing in weeks 1 and 3 so distribution in weeks 2 and 4 is purely execution.
