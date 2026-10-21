import Link from "next/link";
import { navSocials } from "@/lib/site";

export function SiteNav({ active }: { active?: "writing" }) {
  return (
    <header className="nav">
      <Link href="/" className="nav-logo" aria-label="siwan.io — home">
        <span className="nav-mark" aria-hidden="true">
          S
        </span>
        siwan.io
      </Link>
      <nav className="nav-links" aria-label="Primary">
        <Link
          href="/blog"
          className={active === "writing" ? "nav-link-active" : undefined}
        >
          writing
        </Link>
        {navSocials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={s.label === "instagram" ? "nav-ig" : undefined}
          >
            {s.label}
            {s.label === "instagram" && <span aria-hidden="true"> ↗</span>}
          </a>
        ))}
      </nav>
    </header>
  );
}
