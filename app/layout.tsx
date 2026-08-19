import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Billty AI",
  description: "Your AI business assistant for billing."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
