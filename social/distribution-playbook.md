# Distribution Playbook — siwan.io

Practical, step-by-step guide for distributing every blog post across Hacker News, Reddit, LinkedIn, and X/Twitter.

---

## 1. Hacker News

### When to submit
- **Best window:** Tuesday–Wednesday, 9–11am ET
- Avoid Friday afternoon and weekends (low traffic, dies fast)
- Never submit more than one post per week to HN

### What works on HN
- Technical posts with novel takes (systems, protocols, architecture decisions)
- Building in public with real numbers — actual revenue, actual failures
- "Show HN" for product launches (only when you're genuinely launching)
- Contrarian takes that are backed up with evidence, not just opinion

### What does not work on HN
- Anything that reads like marketing copy
- Posts with clickbait framing or listicle structure
- Opinion pieces without technical or empirical substance
- Promotional posts disguised as content

### Title formats
- **Product launches:** `Show HN: [Product] — [one-line value prop]`
- **Analysis/technical posts:** Plain descriptive title. No "The" at the start. No question marks unless it's a genuine question. No exclamation marks.
- **Genuine questions:** `Ask HN: [specific question]` — only use this if you're actually asking, not as a hook

### How to handle comments
- Respond to every substantive comment within the **first hour** after posting — this is the most important window
- Be direct. Don't deflect criticism with "great point!" and then not address it
- If someone is wrong, say so clearly and explain why
- If someone makes a valid critique, acknowledge it and update your thinking publicly in the thread
- Do not promote your product in the comments unless someone asks directly

### Pre-written HN titles for new posts

| Post | Suggested HN Title |
|------|-------------------|
| Indie Hacker Revenue Report | My first indie hacker revenue report: what actually worked building DocAPI and FarmPosts |
| DocAPI vs Puppeteer | I replaced Puppeteer with an API call and stopped thinking about Chromium |
| Junior Engineer in the AI Era | Junior engineers aren't being replaced. The execution layer was removed. Here's the difference. |
| HTTP 402 Payment Required | HTTP 402: the status code from 1996 that AI agents need |

---

## 2. Reddit

### Universal rules (follow every time)
- Never post a bare link. Write 2–3 sentences that add context before the link — what the post is about, why it's relevant to this community
- Apply the test before every post: "Is this useful to this specific community?"
- Space posts out: no more than 1 post per subreddit per week
- Read the subreddit rules before posting — they change

### Subreddit map by post type

#### Career / AI posts
*Posts: junior-engineer-ai-era, cs-degree-in-ai-era*

- **r/cscareerquestions** — self-promotion allowed in the weekly thread only; value-first posts OK as text posts in the main feed if genuinely helpful; no bare links
- **r/learnprogramming** — must provide concrete value to the community; no direct self-promotion; frame as a lesson learned, not a blog post announcement
- **r/ChatGPT** or **r/artificial** — works for the AI-career crossover angle; these communities respond better to practical takes than abstract career advice

#### Indie hacker / building in public posts
*Posts: indie-hacker-revenue-report, shipping-before-ready, never-lie-about-your-business*

- **r/IndieHackers** — revenue reports and building-in-public posts are explicitly welcome here; be specific with numbers
- **r/SideProject** — launching and building posts welcome; community skews technical and supportive
- **r/Entrepreneur** — broader, higher-skepticism audience; lead with the lesson or insight, not the numbers

#### Technical posts
*Posts: docapi-vs-puppeteer, http-402-problem, agentic-first-apis*

- **r/webdev** — tech comparison posts perform well here; frame as a practical tradeoff analysis, not a product pitch
- **r/node** — Node.js developers are the Puppeteer audience; the docapi-vs-puppeteer post is a natural fit
- **r/programming** — high bar; only genuinely novel technical content; anything that feels like promotion gets downvoted fast

#### Crypto / DeFi posts
*Posts: defi-50m-loss*

- **r/CryptoCurrency** — educational framing only, not promotional; the $50M loss angle works as a case study
- **r/ethfinance** — Ethereum-focused community; appreciates technical depth on DeFi mechanics

---

## 3. LinkedIn

### Cross-post workflow
1. Take the LinkedIn post from `social/linkedin-posts.md` for the matching post
2. If no LinkedIn post exists for the new article, write one following the same voice: direct, no fluff, ends with a genuine question
3. Schedule for **the day after** blog publish

### Best posting times
- Tuesday–Thursday, 8–9am or 12–1pm in your local timezone
- Avoid Monday morning (too much competition) and Friday afternoon (engagement drops off)

### Link placement
- **Do not** put the blog link in the post body — LinkedIn's algorithm deprioritizes posts with outbound links
- Add the blog link in the **first comment** immediately after posting
- Pin that comment if possible

### Engagement window
- Respond to every comment within the **first 2 hours** — LinkedIn's algorithm weights early engagement heavily
- Ask a follow-up question in your replies to keep the thread active
- Tag 1–2 relevant people only if they are genuinely relevant to the post topic — do not tag-spam

### Notes on existing posts
- `cs-degree-in-ai-era` (Post 2 in linkedin-posts.md) already went viral on LinkedIn — reference that framing for similar career-angle posts
- Posts that end with a direct question consistently outperform posts that don't

---

## 4. X / Twitter

### Thread format
Use the thread structure from `social/twitter-threads.md`. The pattern that works:

1. Tweet 1: hook that works as a standalone statement — this is what gets shown without the thread
2. Tweets 2–8: the actual argument, one idea per tweet, each building on the last
3. Final tweet: the sharpest takeaway or call to action
4. Blog link at the **end** of the thread, not in tweet 1

### Link placement
- Never put the blog URL in tweet 1 — Twitter deprioritizes outbound links in the first tweet
- Post the thread first, then **reply to your own thread** to add the link as a reply
- Alternatively, put the link in the last tweet of the thread

### Hook rules
- Tweet 1 must work as a standalone post — assume most people will only see this tweet
- Make a specific claim, not a vague teaser
- Good: "Junior engineers aren't being replaced. The execution layer was removed. Here's the difference."
- Bad: "I wrote a post about junior engineers and AI, thread below"

### Engagement
- Reply to everyone who engages in the first hour
- Retweet with a comment if someone shares a good quote from the post

---

## 5. Publish Day Checklist

Run through this in order, every time you publish.

- [ ] Push to production (`git push`)
- [ ] Request indexing in Google Search Console (URL Inspection → Request Indexing)
- [ ] Submit to Hacker News (if appropriate — technical post or building in public; skip for pure opinion pieces)
- [ ] Post LinkedIn version (from `social/linkedin-posts.md`, or write a new one following that format)
- [ ] Post X/Twitter thread (from `social/twitter-threads.md`, or write a new one)
- [ ] Post to relevant subreddits (use the subreddit map above — 1–3 subreddits per post)
- [ ] Send newsletter broadcast to subscribers (Beehiiv — create a new broadcast, link to the post)
- [ ] Reply to all comments and responses within 24 hours across all platforms

---

## 6. Post-Publish Tracking

### 48 hours after publish
- Check Vercel Analytics for referral sources
- Note which channel drove the most traffic for this post type

### Signal-based doubling down
- If a post gets 100+ visits from a single channel, prioritize that channel for the next post of the same type
- Revenue / building-in-public posts that do well on HN → submit the next revenue post to HN immediately
- Career posts that do well on LinkedIn → write the next career post's LinkedIn version first, before the blog post goes live

### Monthly check
- Open Google Search Console → check impressions for posts published in the past 60–90 days
- Posts gaining impressions without clicks → rewrite the meta description to be more specific
- Posts with zero impressions → check that the slug is indexed, add more internal links pointing to it

---

## Quick Reference: Post → Channel Fit

| Post | HN | Reddit | LinkedIn | Twitter |
|------|----|--------|----------|---------|
| Indie Hacker Revenue Report | Yes | r/IndieHackers, r/SideProject | Yes | Yes |
| DocAPI vs Puppeteer | Yes | r/webdev, r/node | Light | Yes |
| Junior Engineer in the AI Era | Maybe | r/cscareerquestions, r/learnprogramming | Yes (viral potential) | Yes |
| AI Tools for Indie Hackers | No | r/IndieHackers, r/SideProject | Yes | Yes |
| CS Degree Isn't Worthless | No | r/cscareerquestions, r/learnprogramming | Already viral | Recycle |
| HTTP 402 Payment Required | Yes | r/programming, r/webdev | Light | Yes |
| $50M DeFi Loss | No | r/CryptoCurrency, r/ethfinance | Light | Yes |

**"Light"** = worth doing but not the primary channel for that post; keep it brief and value-focused.
