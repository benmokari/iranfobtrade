export const metadata = {
  title: "IranFOBTrade | Mineral Export Marketplace",
  description: "Real prices, verified suppliers, export intelligence from Iran."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
