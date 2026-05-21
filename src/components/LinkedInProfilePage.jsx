export default function LinkedInProfilePage({ data }) {
  const headlines = [data.headline_1, data.headline_2, data.headline_3].filter(Boolean);

  return (
    <>
        {/* Section Title */}
        <div
          className="section-title"
          style={{
            fontFamily: data.fontHeading,
            color: data.primary,
          }}
        >
          LINKEDIN PROFILE
        </div>

        {/* YOUR HEADLINE */}
        <div className="label">YOUR HEADLINE</div>
        <div className="sub-label">Choose one. A/B test by switching every 30 days.</div>

        {headlines.length > 0 ? (
          headlines.map((headline, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #E5E5E5',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: data.primary,
                  marginBottom: '8px',
                }}
              >
                OPTION {i + 1}
              </div>
              <div style={{ fontFamily: data.fontBody, fontSize: '16px', color: '#1a1a1a' }}>
                {headline}
              </div>
            </div>
          ))
        ) : (
          [1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                border: '1px solid #E5E5E5',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: data.primary,
                  marginBottom: '8px',
                }}
              >
                OPTION {i}
              </div>
              <div style={{ fontFamily: data.fontBody, fontSize: '16px', color: '#888' }}>
                Headline option {i} will appear here.
              </div>
            </div>
          ))
        )}

        <div className="note" style={{ marginBottom: '28px' }}>
          Max 220 characters. LinkedIn truncates after ~70 chars in search results — your strongest words go first.
        </div>

        {/* YOUR ABOUT SECTION */}
        <div className="label">YOUR ABOUT SECTION</div>
        <div className="sub-label">Copy and paste directly. Do not paraphrase or summarise.</div>
        <div
          style={{
            background: '#FAF5F8',
            borderRadius: '8px',
            padding: '24px',
            marginBottom: '16px',
          }}
        >
          <div
            style={{
              fontFamily: data.fontBody,
              fontSize: '14px',
              lineHeight: 1.8,
              whiteSpace: 'pre-wrap',
              color: '#1a1a1a',
            }}
          >
            {data.about_section || 'Your About section text will appear here.'}
          </div>
        </div>
    </>
  );
}
