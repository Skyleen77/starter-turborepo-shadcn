import "@ui/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="oveflow-hidden" lang="en">
      {/* <body className="dark">{children}</body> */}
      <body className="oveflow-hidden">{children}</body>
    </html>
  );
}
