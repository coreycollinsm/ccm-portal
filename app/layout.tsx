import "./globals.css";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "CCM Portal",
  description:
    "A portal for viewing site analycis and metrics for coreycollinsm.com, showcasing Corey Collins' full stack capabilities with MERN",
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
