// The Show — episode data for @siwan.mp4, newest first.
// One-liners and figures are the episodes' published results; keep them
// verbatim with the journals they came from.
export interface Episode {
  number: string; // "Ep. 2"
  numeral: string; // "02" — typographic cover treatment
  href: string; // "/ep2"
  title: string;
  series: string; // series tag
  date: string; // posted date
  oneLiner: string; // the card's one-line result
  reelUrl: string;
}

export const episodes: Episode[] = [
  {
    number: "Ep. 2",
    numeral: "02",
    href: "/ep2",
    title: "The Handoff",
    series: "Our Journey with Muse, Ep. 1",
    date: "Tue Oct 20, 2026",
    oneLiner: "Week 1: Muse is up $120 trading, and Siwan did nothing.",
    reelUrl: "https://www.instagram.com/reel/DevHdblTokM/",
  },
  {
    number: "Ep. 1",
    numeral: "01",
    href: "/ep1",
    title: "The Intro Manifesto",
    series: "siwan.mp4 premiere",
    date: "Fri Oct 16, 2026",
    oneLiner:
      "A dad of 3 hands his real life to an AI agent — and posts the receipts.",
    reelUrl: "https://www.instagram.com/reel/DekA_FNTsf0/",
  },
];

export function getEpisode(href: string): Episode | undefined {
  return episodes.find((e) => e.href === href);
}

// The live scoreboard strip — the show's four running numbers, verbatim.
// Rendered as single text nodes so the lines always read exactly like this.
export const liveScoreboardLines = [
  "Robinhood experiment: Day 5 of 20 · +$119.91 (Week 1)",
  "Kalshi sports: $1,659.62 balance · +$34.74 after estimated tax",
  "Back to 175: 210 lbs now → 185 by the LA Marathon (Mar 7, 2027) → 175",
  "MRR: ~$500/mo → $10K goal",
] as const;
