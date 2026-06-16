import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Bits Playground",
  description: "BlurText, AnimatedList, and Ferrofluid installed locally.",
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
