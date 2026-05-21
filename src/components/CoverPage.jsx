export default function CoverPage({ data }) {
  return (
    <div
      className="page page-cover"
      style={{
        background: data.secondary,
        color: 'white',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div style={{ padding: '40px' }}>
        <div
          style={{
            fontFamily: data.fontHeading,
            fontSize: '48px',
            fontWeight: 700,
            marginBottom: '16px',
            color: 'white',
          }}
        >
          Brand Guidelines
        </div>
        <div
          style={{
            fontFamily: data.fontBody,
            fontSize: '24px',
            fontWeight: 500,
            color: data.accent,
            marginBottom: '24px',
          }}
        >
          for {data.name || 'Client Name'}
        </div>
        <div
          style={{
            fontFamily: data.fontBody,
            fontSize: '14px',
            color: 'white',
            opacity: 0.8,
            marginBottom: '48px',
          }}
        >
          Prepared by Boxless AI
        </div>
        {data.report_date && (
          <div
            style={{
              fontFamily: data.fontBody,
              fontSize: '14px',
              color: 'white',
              opacity: 0.7,
              marginTop: '80px',
            }}
          >
            {data.report_date}
          </div>
        )}
      </div>
    </div>
  );
}
