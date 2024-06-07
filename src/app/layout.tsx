import type { Metadata } from "next";
import "./globals.css";
import { DotGothic16 } from "next/font/google";

const dotGothic16 = DotGothic16({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Liam Connolly",
  description: "Welcome to my personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dotGothic16.className}>{children}</body>
    </html>
  );
}
