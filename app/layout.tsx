import "./globals.css";

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
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
