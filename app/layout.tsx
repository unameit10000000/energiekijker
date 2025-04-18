import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engeriekijker.nl",
  description: "Bespaar energie met Engeriekijker.nl",
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
