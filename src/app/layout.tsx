import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Cyrilkumaar Vijayakumar — Doctor · Technologist · Strategist",
  description:
    "Personal portfolio of Dr. Cyrilkumaar Vijayakumar. NHS doctor, health-tech builder, and LSE GMiM candidate sitting at the intersection of clinical medicine, technology, and management strategy.",
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
