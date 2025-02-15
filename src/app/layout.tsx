import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
    title: "Solsn | Business Marketing AI Powered Tool",
    description: "Solsn | Business Marketing AI Powered Tool",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
{children}
</body>
</html>

  );
}
