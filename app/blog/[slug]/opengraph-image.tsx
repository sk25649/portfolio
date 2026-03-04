import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const fontBold = readFileSync(join(process.cwd(), 'app/fonts/Syne-ExtraBold.ttf'));

  const title = post?.title ?? 'Writing';
  const description = post?.description ?? '';

  return new ImageResponse(
    <div
      style={{
        background: '#FFFFFF',
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Syne',
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '40px 72px 0',
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#AAAAAA',
          }}
        >
          Writing
        </span>
        <span
          style={{
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#0A0A0A',
          }}
        >
          siwan.io
        </span>
      </div>

      {/* Main content */}
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 72px',
          gap: '24px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: '-2px',
            lineHeight: 1.05,
            color: '#0A0A0A',
            maxWidth: '900px',
          }}
        >
          {title}
        </div>
        {description && (
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: '#888888',
              lineHeight: 1.5,
              maxWidth: '800px',
            }}
          >
            {description}
          </div>
        )}
        <div
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: '#0047FF',
            letterSpacing: '-0.02em',
            marginTop: '8px',
          }}
        >
          Siwan Kim
        </div>
      </div>

      {/* Blue stripe */}
      <div
        style={{
          height: '10px',
          background: '#0047FF',
          width: '100%',
          display: 'flex',
        }}
      />
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Syne',
          data: fontBold,
          style: 'normal',
          weight: 800,
        },
      ],
    },
  );
}
