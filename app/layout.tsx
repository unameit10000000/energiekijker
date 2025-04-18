import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "energiekijker.nl",
  description: "bespaar energie met energiekijker.nl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
