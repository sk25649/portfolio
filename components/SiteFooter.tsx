import Link from "next/link";
import { socials } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <span className="footer-copy">© 2026 Siwan Kim</span>
        <span className="footer-note">
          Los Angeles · Building in public · Receipts posted
        </span>
      </div>
      <div className="footer-links">
        <Link href="/blog">writing</Link>
        {socials.map((s) => (
          <span key={s.label}>
            <span className="sep" aria-hidden="true">
              /
            </span>
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          </span>
        ))}
      </div>
    </footer>
  );
}
