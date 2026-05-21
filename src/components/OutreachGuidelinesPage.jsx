export default function OutreachGuidelinesPage({ data }) {
  const rules = [
    {
      number: '1',
      title: 'Research first',
      body: 'Know something specific about the person before you message them. Reference a post, a company update, or a shared connection. Generic openers get ignored.',
    },
    {
      number: '2',
      title: 'Lead with them',
      body: 'Your first message is about their situation, not your service. What problem do they have? What are they trying to achieve? Ask before you pitch.',
    },
    {
      number: '3',
      title: 'One clear CTA',
      body: 'Every message should have one thing you want them to do. Not two. Not three. One. Usually: reply, click, or book.',
    },
  ];

  const neverSay = [
    'Hope this finds you well',
    "I'd love to connect",
    'I wanted to reach out',
    'Just checking in',
    'Circle back',
    'Touch base',
    'Game changer',
    'Synergy',
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
          OUTREACH GUIDELINES
        </div>

        {/* Intro note */}
        <div
          style={{
            fontFamily: data.fontBody,
            fontSize: '13px',
            color: '#666',
            fontStyle: 'italic',
            marginBottom: '24px',
          }}
        >
          These guidelines apply if you are doing LinkedIn outreach in addition to your optimised profile.
        </div>

        {/* THREE OUTREACH RULES */}
        <div className="label">THREE RULES</div>
        <div style={{ marginBottom: '28px' }}>
          {rules.map((rule, i) => (
            <div key={i} className="rule-row">
              <div
                className="rule-number"
                style={{ color: data.primary, fontFamily: data.fontHeading }}
              >
                {rule.number}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: data.fontHeading,
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '4px',
                  }}
                >
                  {rule.title}
                </div>
                <div
                  style={{
                    fontFamily: data.fontBody,
                    fontSize: '13px',
                    color: '#555',
                    lineHeight: 1.5,
                  }}
                >
                  {rule.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WHAT NEVER TO SAY */}
        <div className="label">WHAT NEVER TO SAY</div>
        <div
          style={{
            border: '1px solid #E04A4A',
            background: '#FDF5F5',
            borderRadius: '8px',
            padding: '20px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}
          >
            {neverSay.map((phrase, i) => (
              <div
                key={i}
                style={{
                  fontFamily: data.fontBody,
                  fontSize: '14px',
                  color: '#555',
                  padding: '8px 12px',
                  background: 'rgba(224,74,74,0.08)',
                  borderRadius: '4px',
                }}
              >
                {phrase}
              </div>
            ))}
          </div>
        </div>
    </>
  );
}
