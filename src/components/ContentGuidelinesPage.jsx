export default function ContentGuidelinesPage({ data }) {
  const cards = [
    {
      header: 'RESULTS POSTS',
      body: 'Share specific client outcomes. Use real numbers. Protect client confidentiality but be as specific as possible.',
    },
    {
      header: 'PROCESS POSTS',
      body: 'Show how you work. Behind the scenes. What your methodology looks like. Builds trust before the sale.',
    },
    {
      header: 'OPINION POSTS',
      body: 'Take a clear position on something in your industry. Agree or disagree with a common belief. Fence-sitting gets no engagement.',
    },
    {
      header: 'PROOF POSTS',
      body: 'Testimonials, case studies, before/after. Let your clients speak. Screenshot and share.',
    },
  ];

  const donts = [
    'Motivational quotes without your specific perspective',
    'Content about your services without showing results',
    'Posts that start with "I" (starts with the reader instead)',
    'Apologies for being absent from LinkedIn',
    'Anything you would not say in a client meeting',
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
        CONTENT GUIDELINES
      </div>

      {/* WHAT TO POST */}
      <div className="label">WHAT TO POST</div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          marginBottom: '28px',
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            style={{
              border: '1px solid #E5E5E5',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                background: data.primary,
                padding: '12px 16px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'white',
                fontFamily: data.fontHeading,
              }}
            >
              {card.header}
            </div>
            <div
              style={{
                padding: '16px',
                fontSize: '13px',
                color: '#555',
                lineHeight: 1.5,
                fontFamily: data.fontBody,
              }}
            >
              {card.body}
            </div>
          </div>
        ))}
      </div>

      {/* WHAT NOT TO POST */}
      <div className="label">WHAT NOT TO POST</div>
      <div
        style={{
          border: '1px solid #E04A4A',
          background: '#FDF5F5',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '28px',
        }}
      >
        {donts.map((item, i) => (
          <div
            key={i}
            style={{
              fontFamily: data.fontBody,
              fontSize: '14px',
              lineHeight: 2,
              color: '#1a1a1a',
            }}
          >
            <span style={{ color: '#E04A4A', marginRight: '8px' }}>●</span>
            {item}
          </div>
        ))}
      </div>

      {/* POSTING FREQUENCY */}
      <div className="label">POSTING FREQUENCY</div>
      <div
        style={{
          background: `${data.accent}26`,
          borderRadius: '8px',
          padding: '20px',
        }}
      >
        <div
          style={{
            fontFamily: data.fontBody,
            fontSize: '14px',
            fontWeight: 700,
            color: '#1a1a1a',
          }}
        >
          3-4 times per week minimum to build consistent visibility. Quality over quantity — one strong post beats five weak ones.
        </div>
      </div>
    </>
  );
}
