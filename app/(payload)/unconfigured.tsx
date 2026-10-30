export function UnconfiguredCms() {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, padding: "2.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>CMS is not configured</h1>
        <p style={{ maxWidth: "36rem", lineHeight: 1.5 }}>
          Set <code>PAYLOAD_SECRET</code> and <code>DATABASE_URL</code> before opening the admin. The public
          site keeps rendering without them.
        </p>
      </body>
    </html>
  );
}
