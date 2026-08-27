import { ImageResponse } from 'next/og';

export const alt = 'Black Opal Technologies — Infrastructure, Security and Software';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #030303 0%, #11100c 58%, #211b0d 100%)',
          color: '#f7f3e8',
          padding: '72px 82px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 52, height: 3, background: '#c8a55d' }} />
          <div style={{ fontSize: 26, letterSpacing: 5, textTransform: 'uppercase', color: '#d7bc7d' }}>
            Black Opal Technologies
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 26, maxWidth: 960 }}>
          <div style={{ fontSize: 76, lineHeight: 1.02, letterSpacing: -2 }}>
            Technology that works when your operation depends on it
          </div>
          <div style={{ fontSize: 26, lineHeight: 1.4, color: '#c9c5bb' }}>
            Infrastructure · Security · Software · Support
          </div>
        </div>
      </div>
    ),
    size,
  );
}
