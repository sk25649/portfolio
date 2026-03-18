'use client';

import Script from 'next/script';

interface NewsletterSignupProps {
  variant?: 'post' | 'inline';
}

export function NewsletterSignup({ variant = 'post' }: NewsletterSignupProps) {
  const label =
    variant === 'inline'
      ? 'Weekly insights on shipping AI tools — no fluff'
      : 'Get posts like this every week';

  return (
    <div className="newsletter-embed">
      <p className="newsletter-label">{label}</p>
      <Script
        src="https://subscribe-forms.beehiiv.com/embed.js"
        strategy="afterInteractive"
      />
      <iframe
        src="https://subscribe-forms.beehiiv.com/41604aa1-d6e6-481d-9ef5-6091088ee022"
        className="beehiiv-embed"
        data-test-id="beehiiv-embed"
        frameBorder={0}
        scrolling="no"
        style={{
          width: '100%',
          height: '291px',
          margin: 0,
          borderRadius: 0,
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      />
    </div>
  );
}
