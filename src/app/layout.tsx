import "./globals.css";
import type { Metadata } from "next";
import SiteShell from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "Soni Portfolio",
  description: "Dual-mode portfolio: Visual + Terminal UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
