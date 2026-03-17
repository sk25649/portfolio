# CLAUDE.md — SEO & GEO Best Practices for siwan.io Blog Posts

This file defines the standards every blog post on siwan.io must follow for SEO and GEO (Generative Engine Optimization). Follow these rules every time you write or edit a post.

---

## Frontmatter Requirements

Every post MUST include all of the following fields:

```yaml
---
title: "Primary Keyword Near the Front of the Title"
date: "YYYY-MM-DD"
author: "Siwan"
slug: "primary-keyword-slug-matching-title"
description: "140-160 character description that includes the primary keyword and reads naturally as a sentence."
tags: ["Tag1", "Tag2", "Tag3"]
cornerstone: false
faq:
  - q: "Question people actually search for about this topic?"
    a: "Clear, factual, single-paragraph answer. No hedging."
  - q: "Second common question?"
    a: "Answer with specific numbers, dates, or comparisons where possible."
  - q: "Third question?"
    a: "Answer that adds genuine value, not a restatement of the question."
---
```

### Field-by-field rules

**`title`**
- Put the exact target keyword as close to the front as possible
- Keep it under 60 characters for full display in search results
- Reads like a headline, not a label

**`date`**
- ISO format: `YYYY-MM-DD`
- Use the publish date, not the writing date

**`author`**
- Always `"Siwan"` — no exceptions

**`slug`**
- Lowercase, hyphen-separated, matches the primary keyword
- Max 60 characters
- No stop words (a, the, and, for, etc.) unless essential to meaning
- Must match the filename exactly

**`description`**
- 140–160 characters, measured exactly
- Must include the primary keyword naturally
- Written as a real sentence someone would want to read
- Not a repeat of the title — adds context or intrigue

**`tags`**
- Array of 2–5 strings
- Use title case
- Be specific: `"LangChain"` not `"Tools"`, `"Polymarket"` not `"Finance"`
- At least one tag should be a broad category (e.g. "AI", "Crypto", "Engineering") and one should be specific to the post topic

**`cornerstone`**
- `false` for regular posts
- `true` only for pillar content (comprehensive guides, evergreen references, flagship posts)
- Cornerstone posts get special treatment in internal linking — link to them often

**`faq`**
- Array of 3–5 objects, each with `q` (question) and `a` (answer)
- Questions should mirror what people literally type into Google or ask AI assistants
- Answers must be factual, declarative, and complete in 1–3 sentences
- Do NOT start answers with "It depends" or hedge without following with a concrete answer
- These are picked up by Next.js schema generation and served as JSON-LD structured data

---

## Content SEO Rules

### Keyword placement
- Primary keyword must appear in the H1 (title) and in the first paragraph
- Use the keyword or close variants naturally in 2–3 subheadings
- Do not stuff — if it sounds forced, rewrite the sentence

### Subheadings (`##`)
- Write subheadings that mirror how people search, not how you'd label a document section
- Bad: `## Background`, `## Analysis`, `## Conclusion`
- Good: `## Why small models matter more than frontier models`, `## How to review your lease with AI`
- Each `##` should be able to stand alone as a search query someone might type

### Internal links
- Link to other posts on siwan.io wherever topically relevant
- Use descriptive anchor text, not "click here" or "read more"
- Pillar/cornerstone posts should receive the most internal links
- Aim for at least 1 internal link per post

### External links
- Link to authoritative sources (official announcements, original research, primary sources)
- Always open external links in a new tab in MDX: `<a href="..." target="_blank" rel="noopener noreferrer">anchor text</a>`
- Or use standard markdown and configure the MDX renderer globally for target=_blank on external links
- Do NOT link to low-authority content just to have a citation

### Word count
- Target 800–1200 words
- Under 800: probably too shallow to rank or get cited
- Over 1200: risk of fluff — cut ruthlessly
- Exception: cornerstone posts can go to 2000+ words if every section earns its place

### FAQ section at the end
- Mirror the frontmatter `faq` array as a rendered `## FAQ` section at the bottom of the post
- Questions in `##` or `###` format, answers in paragraph text
- This creates both visible content for readers and structured data for crawlers/AI

---

## GEO — Generative Engine Optimization

GEO is the practice of writing content that AI models (ChatGPT, Perplexity, Claude, Gemini) are likely to quote or cite when answering user questions. These principles apply on top of standard SEO.

### Write in citable sentences
- AI models extract and quote confident, declarative statements
- Good: "AWS holds approximately 30–32% of cloud market share and has deep roots in federal government through GovCloud."
- Bad: "AWS is pretty big in cloud and has some government presence."
- Every factual claim should be a standalone sentence that could be quoted without context

### Front-load the facts
- The first 2–3 sentences of a post are the most cited by AI models
- Open with the most concrete, specific, verifiable information you have
- Name numbers, dates, companies, and outcomes in the opening paragraph
- Avoid throat-clearing intros — the first sentence should earn its place

### Include specific numbers, dates, and comparisons
- "A tenant recovered $6,200 in overcharges after feeding a 47-page lease to Claude" is citable
- "Some tenants have recovered significant money using AI" is not
- Comparisons give AI models a clear signal: "OpenAI captured the government contract over Anthropic despite Anthropic having Amazon as a major investor"

### Use FAQ format strategically
- FAQ format is one of the most frequently extracted formats by AI search tools
- Questions that mirror user queries get pulled into AI answers verbatim
- Keep answers factual and complete — AI models prefer self-contained answers
- The `faq` frontmatter field generates JSON-LD structured data, which increases chances of appearing in rich results and AI citation pools

### Structured data via frontmatter
- The `faq` field in frontmatter is used by the Next.js blog renderer to generate `FAQPage` JSON-LD schema
- This gets indexed by Google and crawled by AI training pipelines
- Accurate, well-structured FAQ entries compound over time as citation sources

### Avoid hedging language
- "I think maybe this could potentially be relevant" trains AI models to avoid quoting you
- "This is the real story" or "The actual edge is X" signals confidence
- You can express uncertainty cleanly: "My honest guess is..." followed immediately by a concrete take
- Do not hedge without committing to an answer

---

## Quick Checklist Before Publishing

- [ ] All frontmatter fields present and filled in
- [ ] `description` is 140–160 characters
- [ ] `tags` has 2–5 relevant, specific tags
- [ ] `faq` has 3–5 Q&A objects with factual answers
- [ ] Primary keyword in first paragraph
- [ ] At least one `##` subheading mirrors a search query
- [ ] At least 1 internal link to another post
- [ ] External links open in new tab
- [ ] Word count is 800–1200 (or justified exception)
- [ ] FAQ section at end of post mirrors frontmatter FAQ
- [ ] First 2–3 sentences are dense with specific facts
- [ ] No hedging without a concrete follow-through
