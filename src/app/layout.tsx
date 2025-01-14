import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
