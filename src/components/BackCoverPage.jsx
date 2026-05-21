export default function BackCoverPage({ data }) {
  return (
    <div
      className="page page-back-cover"
      style={{
        background: data.secondary,
        color: 'white',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: data.fontHeading,
            fontSize: '36px',
            fontWeight: 700,
            marginBottom: '16px',
            color: 'white',
          }}
        >
          Build your brand.
        </div>
        <div
          style={{
            fontFamily: data.fontBody,
            fontSize: '16px',
            color: data.accent,
          }}
        >
          boxless-ai.com
        </div>
      </div>
    </div>
  );
}
