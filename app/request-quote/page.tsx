export default function RequestQuotePage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Request a Quote</h1>
      <p>This is MVP form placeholder.</p>

      <form style={{ display: "grid", gap: 12, maxWidth: 520 }}>
        <label>
          Mineral
          <input name="mineral" placeholder="Iron Ore" style={{ width: "100%", padding: 10 }} />
        </label>

        <label>
          Volume (MT)
          <input name="volume" placeholder="5000" style={{ width: "100%", padding: 10 }} />
        </label>

        <label>
          Destination
          <input name="destination" placeholder="China" style={{ width: "100%", padding: 10 }} />
        </label>

        <label>
          Target Price (USD/MT)
          <input name="targetPrice" placeholder="95" style={{ width: "100%", padding: 10 }} />
        </label>

        <label>
          Timeline
          <input name="timeline" placeholder="Within 30 days" style={{ width: "100%", padding: 10 }} />
        </label>

        <button type="button" style={{ padding: 12 }}>
          Submit (Coming Soon)
        </button>
      </form>
    </main>
  );
}
