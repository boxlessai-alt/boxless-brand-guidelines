export default function LinkedInProfileContinuedPage({ data }) {
  const ruleCards = [
    {
      title: 'Write for one person',
      body: 'Picture your ideal client reading this post. Write to them specifically — not to everyone.',
    },
    {
      title: 'Lead with the result',
      body: "Start with what changed, not what you did. Outcome first. Process second.",
    },
    {
      title: 'Be specific',
      body: 'Numbers, names, timelines. Specific always beats general. "40% cost reduction" beats "significant savings".',
    },
  ];

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
          LINKEDIN PROFILE (CONTINUED)
        </div>

        {/* FEATURED SECTION */}
        <div className="label">FEATURED SECTION</div>
        <div className="sub-label">What to pin at the top of your profile.</div>
        <div
          style={{
            borderLeft: `4px solid ${data.accent}`,
            background: `${data.accent}1A`,
            padding: '20px',
            borderRadius: '0 8px 8px 0',
            marginBottom: '12px',
          }}
        >
          <div style={{ fontFamily: data.fontBody, fontSize: '16px', color: '#1a1a1a' }}>
            {data.featured_suggestion || 'Your featured section suggestion will appear here.'}
          </div>
        </div>
        <div className="note" style={{ marginBottom: '28px' }}>
          On LinkedIn: Profile → Featured → Add media or link. Pin your most valuable content here.
        </div>

        {/* PROFILE BUTTON */}
        <div className="label">PROFILE BUTTON</div>
        <div className="sub-label">LinkedIn allows one CTA button on your profile.</div>
        <div
          style={{
            borderLeft: `4px solid ${data.primary}`,
            background: `${data.primary}0D`,
            padding: '20px',
            borderRadius: '0 8px 8px 0',
            marginBottom: '12px',
          }}
        >
          <div style={{ fontFamily: data.fontBody, fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
            {data.cta_recommendation || 'Your CTA recommendation will appear here.'}
          </div>
        </div>
        <div className="note" style={{ marginBottom: '28px' }}>
          On LinkedIn: Edit intro → Add a button → Select type and add your link.
        </div>

        {/* WHEN YOU POST CONTENT */}
        <div className="label">WHEN YOU POST CONTENT</div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {ruleCards.map((card, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #E5E5E5',
                borderRadius: '8px',
                padding: '20px',
                flex: '1 1 0',
                minWidth: '160px',
              }}
            >
              <div
                style={{
                  fontFamily: data.fontHeading,
                  fontSize: '14px',
                  fontWeight: 700,
                  color: data.primary,
                  marginBottom: '8px',
                }}
              >
                {card.title}
              </div>
              <div style={{ fontFamily: data.fontBody, fontSize: '13px', color: '#555', lineHeight: 1.5 }}>
                {card.body}
              </div>
            </div>
          ))}
        </div>
    </>
  );
}
