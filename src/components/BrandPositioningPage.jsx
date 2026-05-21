export default function BrandPositioningPage({ data }) {
  const feelWords = data.feel_words
    ? data.feel_words.split(',').map(w => w.trim()).filter(Boolean)
    : [];

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
          BRAND POSITIONING
        </div>

        {/* YOUR POSITIONING STATEMENT */}
        <div className="label">YOUR POSITIONING STATEMENT</div>
        <div
          style={{
            borderLeft: `4px solid ${data.primary}`,
            padding: '24px',
            marginBottom: '16px',
            borderRadius: '0 8px 8px 0',
            background: 'rgba(128, 38, 98, 0.03)',
          }}
        >
          <div
            style={{
              fontFamily: data.fontBody,
              fontSize: '20px',
              lineHeight: 1.6,
              color: '#1a1a1a',
            }}
          >
            {data.positioning || 'Your positioning statement will appear here.'}
          </div>
        </div>
        <div className="note" style={{ marginBottom: '28px' }}>
          This sentence is the foundation of everything. It answers: what do you do, for whom, and with what result. Every piece of content you create should be consistent with this.
        </div>

        {/* YOUR BANNER ONE-LINER */}
        <div className="label">YOUR BANNER ONE-LINER</div>
        <div
          style={{
            background: `${data.accent}22`,
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '12px',
          }}
        >
          <div
            style={{
              fontFamily: data.fontBody,
              fontSize: '22px',
              fontWeight: 700,
              color: '#1a1a1a',
            }}
          >
            {data.oneliner || 'Your banner one-liner will appear here.'}
          </div>
        </div>
        <div className="note" style={{ marginBottom: '28px' }}>
          This goes on your LinkedIn banner exactly as written. Max 8 words. Do not paraphrase.
        </div>

        {/* THREE WORDS */}
        <div className="label">THREE WORDS</div>
        <div className="sub-label">HOW YOU WANT TO BE PERCEIVED</div>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
          {feelWords.length > 0 ? (
            feelWords.map((word, i) => (
              <span
                key={i}
                className="pill"
                style={{
                  background: data.primary,
                  fontFamily: data.fontBody,
                }}
              >
                {word}
              </span>
            ))
          ) : (
            <>
              <span className="pill" style={{ background: data.primary, fontFamily: data.fontBody }}>Word 1</span>
              <span className="pill" style={{ background: data.primary, fontFamily: data.fontBody }}>Word 2</span>
              <span className="pill" style={{ background: data.primary, fontFamily: data.fontBody }}>Word 3</span>
            </>
          )}
        </div>
        <div className="note" style={{ fontStyle: 'italic' }}>
          Every piece of content should make the reader feel these three things. Use them as a filter — before posting, ask: does this feel{feelWords[0] ? ` ${feelWords[0]}` : ' [word 1]'},{feelWords[1] ? ` ${feelWords[1]}` : ' [word 2]'},{feelWords[2] ? ` ${feelWords[2]}` : ' [word 3]'}?
        </div>
    </>
  );
}
