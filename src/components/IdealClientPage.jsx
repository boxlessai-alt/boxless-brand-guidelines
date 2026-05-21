export default function IdealClientPage({ data }) {
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
          YOUR IDEAL CLIENT
        </div>

        {/* TARGET AUDIENCE */}
        <div className="label">TARGET AUDIENCE</div>
        <div className="sub-label">WHO YOU SERVE</div>
        <div
          style={{
            borderLeft: `4px solid ${data.primary}`,
            padding: '20px 24px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              fontFamily: data.fontBody,
              fontSize: '18px',
              lineHeight: 1.6,
              color: '#1a1a1a',
            }}
          >
            {data.ideal_clients || 'Your ideal client description will appear here.'}
          </div>
        </div>

        {/* YOUR PROOF POINT */}
        <div className="label">YOUR PROOF POINT</div>
        <div className="sub-label">Use this in your content and conversations.</div>
        <div
          style={{
            background: `${data.accent}26`,
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '12px',
          }}
        >
          <div
            style={{
              fontFamily: data.fontBody,
              fontSize: '18px',
              fontWeight: 700,
              color: '#1a1a1a',
            }}
          >
            {data.top_result || 'Your proof point will appear here.'}
          </div>
        </div>
        <div className="note" style={{ marginBottom: '28px' }}>
          This specific result is your strongest credibility signal. Reference it in your headline, about section, and outreach.
        </div>

        {/* YOUR EDGE */}
        <div className="label">YOUR EDGE</div>
        <div className="sub-label">WHAT MAKES YOU DIFFERENT</div>
        <div
          style={{
            border: '2px dashed #CCC',
            borderRadius: '8px',
            padding: '20px',
            background: '#FAFAFA',
            marginBottom: '8px',
          }}
        >
          <div
            style={{
              fontFamily: data.fontBody,
              fontSize: '14px',
              color: '#888',
              fontStyle: 'italic',
            }}
          >
            Fill this in yourself — what do you do that others in your field do not? Be specific. One sentence. Add it to your About section paragraph 2.
          </div>
        </div>
        {/* Empty area for manual fill */}
        <div style={{ height: '80px' }} />
    </>
  );
}
