export default function Home() {
  return (
    <main
      style={{
        padding: 40,
        fontFamily: "system-ui",
        maxWidth: 900,
        margin: "0 auto",
        lineHeight: 1.6,
      }}
    >
      {/* Preview Badge */}
      <div
        style={{
          background: "#111",
          color: "#fff",
          display: "inline-block",
          padding: "6px 12px",
          borderRadius: 6,
          fontSize: 12,
          marginBottom: 20,
        }}
      >
        PREVIEW VERSION 🚧
      </div>

      <h1 style={{ fontSize: 36, marginBottom: 10 }}>IranFOBTrade</h1>
      <p style={{ fontSize: 18, color: "#555" }}>
        Direct Mineral Export From Iran
      </p>

      <h2 style={{ marginTop: 40 }}>Price Index (Coming Soon)</h2>
      <ul>
        <li>Iron Ore</li>
        <li>Copper Cathode</li>
        <li>Chromite</li>
        <li>Gypsum</li>
        <li>Bitumen</li>
      </ul>

      <div style={{ marginTop: 40 }}>
        <a
          href="/request-quote"
          style={{
            background: "#000",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Request a Quote
        </a>
      </div>
    </main>
  );
}
