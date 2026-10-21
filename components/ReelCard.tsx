import { TrackedLink } from "@/components/TrackedLink";
import { instagram } from "@/lib/site";

// The reel treatment for episode pages: a styled link-out card to the
// Instagram reel. No Instagram media is embedded or hotlinked.
export function ReelCard({
  href,
  episode,
}: {
  href: string;
  episode: string;
}) {
  return (
    <TrackedLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="reel-card"
      eventName="episode_reel_click"
      eventProps={{ episode }}
    >
      <span className="reel-card-play" aria-hidden="true">
        ▶
      </span>
      <span className="reel-card-text">
        <span className="reel-card-label">Watch the reel</span>
        <span className="reel-card-sub">
          Instagram · {instagram.handle} ↗
        </span>
      </span>
    </TrackedLink>
  );
}
