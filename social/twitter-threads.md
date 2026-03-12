# X/Twitter Threads — siwan.io

Complete threads for the top 5 blog posts. Voice: direct, no fluff, slightly contrarian.

---

## Thread 1 — "You Have About Two Years"
*Source: https://siwan.io/blog/ai-agent-window*

1/ The AI agent market is $7.84B today and headed to $52.62B by 2030.

That's a 46% CAGR. The window for early movers is open right now. Here's what that means for you. 🧵

2/ We've seen this pattern before.

Mobile apps after the iPhone: 2008-2012. iOS developers commanded 2-3x normal salaries. Simple apps reached millions of users.

By 2013, every CS grad knew mobile dev. The premium collapsed.

The same compression is coming for AI agents.

3/ The numbers aren't subtle.

- Job postings requiring agentic AI skills: +986% from 2023-2024
- AI skills salary premium: 56% more than those without
- GitHub repos for agent frameworks with 1,000+ stars: 14 in 2024 → 89 in 2025

4/ The smart money has spoken.

Sierra (agent platform): $100M ARR in 21 months. $10B valuation.
Cursor (AI coding): $29B.
Harvey (legal agents): $5B.
Cognition/Devin: $2B.

These aren't projections. This is real funding, real enterprise adoption.

5/ You don't have to build the next platform.

The most accessible opportunity is being measurably better at your existing work because you use these tools fluently.

A freelance designer using AI is earning $720K/year. One-person SaaS companies hitting $55K MRR.

6/ The pick-and-shovel opportunities are everywhere:

- MCP server development for niche verticals
- Voice AI agents replacing call centers ($0.10-$0.50/conversation)
- Custom agents for SMBs at $500-1,500 each (4 hours to build)
- Monthly retainers at $2-8K/mo with 60-70% margins

7/ There are 33 million small businesses in the US.

Most have no AI strategy, no internal expertise, and no one on payroll who knows where to start.

That gap is real. It is wide. And it will close — just not yet.

8/ Gartner predicts 40% of agentic AI projects will be canceled by 2027.

That's normal for platform shifts. Most early attempts fail. But the people who learn from those failures build what actually works.

Surviving the shakeout becomes the moat.

9/ If you're starting from zero, the minimum viable action is embarrassingly simple.

Week 1: Use ChatGPT or Claude for 15 mins/day on real work.
Week 2: Replace one manual task.
Week 3: Connect two tools with Zapier/Make.
Week 4: Build a simple agent.

10/ The skills that will matter most aren't purely technical.

Domain expertise + AI fluency > AI fluency alone.

Knowing healthcare + AI, or legal + AI, commands a premium that generic AI knowledge doesn't.

The solopreneurs who've developed this are the ones thriving.

11/ The knowledge that's niche today becomes common tomorrow.

Right now: "I know how to use AI well" is a genuine competitive advantage.

By 2028: this will be normal. Every developer will know agentic AI the way they know React today.

You have about two years.

Full post: https://siwan.io/blog/ai-agent-window

---

## Thread 2 — "Why I'm Bullish on Agentic-First APIs"
*Source: https://siwan.io/blog/agentic-first-apis*

1/ Most APIs are built wrong for AI agents.

The signup assumes an email. The billing assumes a credit card. The dashboard assumes someone is watching.

That model is about to break. Here's the one design pattern that changes everything. 🧵

2/ I built DocAPI around a question I couldn't stop thinking about:

What does an API look like if no human is ever involved?

Not "fewer humans." No humans. The agent registers, pays, monitors its own balance, tops itself up.

To make that work, I had to throw out every assumption.

3/ The first wall an agent hits is signup.

Most APIs require:
- An email (to send a verification link)
- A browser (to click that link)
- A credit card (via Stripe's UI)
- A dashboard visit (to copy the API key)

Agents can't do any of that.

4/ The fix is straightforward.

One POST request returns everything the agent needs:

→ API key
→ USDC wallet address
→ Free calls to test
→ Credit rate and topup instructions

No email. No browser. No OAuth dance. One round-trip and the agent is in production.

5/ Agents don't have credit cards. They have wallets.

This is where crypto actually earns its place — not speculation, but programmable money.

With Coinbase AgentKit, an agent creates its own wallet in a single API call, receives funds, and sends USDC without any human involvement.

6/ HTTP 402 ("Payment Required") is a silent catastrophe for autonomous software.

Nobody gets paged. The job just stops.

The solution: make running out of credits structurally impossible — not through error handling, but through design.

7/ Every API response includes an X-Credits-Remaining header.

The agent reads it after every call. When the balance drops below a threshold, it sends a USDC topup asynchronously — fires and continues working.

402 becomes theoretical. The only way to hit it is if the source wallet itself is empty.

8/ The result: software that funds itself.

An agent builds a service in one session. It registers. Gets free calls to validate. Creates a wallet. You send one initial deposit.

From that point on: no recurring human input. You only hear from it if something goes wrong.

That's not a feature. That's a different category of software.

9/ I audited a handful of popular developer APIs against a 13-point checklist for agentic readiness.

Most scored 2-4 out of 13.

The failures aren't technical. They're assumptions. Assumptions that someone is reading the dashboard, responding to billing emails, watching the logs.

10/ The developer tool market was shaped by whoever made the best DX for humans.

The next wave will be shaped by whoever makes the best DX for agents.

The APIs that get this right now will have a distribution advantage that compounds as agent usage scales.

Full post: https://siwan.io/blog/agentic-first-apis

---

## Thread 3 — "Shipping Before You're Ready"
*Source: https://siwan.io/blog/shipping-before-ready*

1/ I launched DocAPI on Hacker News last week.

The docs were incomplete. A few edge cases weren't handled. The pricing page had a placeholder I forgot to remove.

I launched anyway. Here's what happened. 🧵

2/ There's a version of your product that lives in your head.

It handles every edge case. The docs are pristine. The onboarding is seamless. Every rough corner is sanded down.

That version will never exist — because the moment you build it, you'll see three new things that need fixing.

3/ What I was actually afraid of wasn't a broken product.

It was the judgment.

What if someone tries it and hits a bug? What if HN comments tear it apart? What if people see I built this in a week?

These feel like quality concerns. They're not. They're ego protection dressed as perfectionism.

4/ The cost of waiting:

- No user feedback → building in the dark
- No validation → no signal that this was worth building
- No urgency → the project drifts

The irony: waiting to be "ready" makes the eventual launch riskier. You've invested more, gotten no signal.

5/ What I did instead: set a hard deadline.

Not "when it's ready" — a specific date.

Then I made a list of what had to be true to be shippable, not perfect:
→ Core feature works end-to-end
→ Someone can sign up without emailing me
→ Won't break if a few hundred people try it

6/ The HN thread was useful.

Someone flagged an API design decision I hadn't thought through.

Another person asked a question that's now the first thing in my FAQ.

One person became a paying user within 24 hours.

None of that happens if I wait two more weeks for perfect docs.

7/ The launch also showed me what actually needed to be fixed.

Not what I imagined needed fixing.

Those are different lists. The gap between them is only visible from the outside.

8/ The product in your head is fiction.

The product users touch is real.

The gap between them only closes in one direction: by shipping.

Ship the thing. Fix what breaks. The embarrassment fades in a day. The feedback lasts forever.

Full post: https://siwan.io/blog/shipping-before-ready

---

## Thread 4 — "Never Lie About Your Business"
*Source: https://siwan.io/blog/never-lie-about-your-business*

1/ A founder casually admitted he lied about his company's revenue numbers to a journalist.

Then it became a published article.

Let's not move past that too fast. Here's why honesty is the only policy worth holding. 🧵

2/ Private companies face almost zero accountability for what they claim.

No 10-K. No quarterly earnings call. No public filing.

When a founder tells a journalist their ARR is $5.2M and the real number is $1.6M — nobody can fact-check that in real time.

3/ The "it's just hype" rationalization:

"Fake it till you make it. Speak it into existence. Every successful founder stretched the truth."

No.

There's a difference between being optimistic about your trajectory and fabricating a metric to a journalist writing about you.

4/ One is conviction. The other is deception.

The people on the receiving end — readers, potential customers, other founders benchmarking themselves against your numbers — didn't sign up to be misled.

They were trying to get accurate information about the world.

5/ I'm building alone. No team to hide behind. No PR department to manage the narrative.

That's actually a gift.

I have no incentive to build a false image because there's no organization that benefits from the fiction. It's just me and the work.

6/ My commitment:

I will never misrepresent what I'm building.

Not to journalists. Not on social media. Not in pitch decks. Not to users.

If growth is flat, I'll say it's flat. If I made a mistake, I'll say I made a mistake.

7/ Honesty is hard when things aren't going well.

That's exactly when it matters most.

Anyone can be transparent when the numbers are great. The real test is whether you'll say something true when it's inconvenient.

8/ Small numbers with honest context are more compelling than big numbers that don't hold up to scrutiny.

The founder eventually told the truth — but only after the article came out.

Transparency isn't a retraction. It's a default.

Full post: https://siwan.io/blog/never-lie-about-your-business

---

## Thread 5 — "The New Currency of Professional Success"
*Source: https://siwan.io/blog/perception-beats-qualification*

1/ AI can do 80% of what junior engineers do at 8% of the time.

Most people are drawing the wrong conclusion from this.

Here's what it actually means for your career. 🧵

2/ For decades, professional success followed a predictable formula.

Get the degree. Build the skills. Grind through certifications. Prove yourself by solving hard problems.

The gatekeepers were clear: Can you write the code? Can you crunch the numbers?

That formula is dead.

3/ The question is no longer "can you do it?"

The question is now "do people believe you understand how to get it done?"

That's a fundamentally different game. And the playing field has changed completely.

4/ Here's what nobody in your industry wants to admit:

A 22-year-old who posts consistently about AI tools and shares what they're building has more professional leverage right now than a 15-year veteran who keeps their expertise entirely offline.

The veteran might be smarter. It doesn't matter.

5/ The new gatekeepers aren't hiring managers reviewing resumes.

They're audiences. Followers. Communities.

People who've been quietly deciding who the experts are based on who shows up, teaches, and leads the conversation.

Perception has become the product.

6/ What "being a leader" actually looks like now:

1. Synthesizes, not just executes
2. Shows their thinking publicly
3. Picks a lane and owns it
4. Shows up consistently before the demand arrives

None of these require a title. None require years of experience.

7/ Online presence isn't linear — it's exponential.

Post 50 times and get no traction, and it feels like a waste.

Post 200 times, and you hit a threshold where the algorithm, network effects, and accumulation of content all start working together.

8/ The people who quit at 50 posts will watch the people who stayed at 200 posts and say "must be nice to have that kind of following."

They'll attribute it to luck.

They'll miss that the edge was compounding patience.

9/ The shortest path:

1. Decide what you want to be known for. One intersection.
2. Commit to one platform.
3. Post once a week, minimum.
4. Engage before you post.
5. Iterate based on what resonates.

10/ The AI wave is still early. Most industries are still figuring out what it means.

The people who will define what leadership looks like in AI-augmented industries are being decided right now.

The question is which side of it you want to be on.

Full post: https://siwan.io/blog/perception-beats-qualification
