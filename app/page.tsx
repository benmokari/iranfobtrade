export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>IranFOBTrade</h1>
      <p>Mineral Export Marketplace (MVP)</p>

      <h2>Price Index (Soon)</h2>
      <ul>
        <li>Iron Ore</li>
        <li>Copper Cathode</li>
        <li>Chromite</li>
        <li>Gypsum</li>
        <li>Bitumen</li>
      </ul>

      <p style={{ marginTop: 24 }}>
        Request a Quote: <a href="/request-quote">Open form</a>
      </p>
    </main>
  );
}
