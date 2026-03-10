import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CCM Portal",
  description:
    "A portal for viewing site analycis and metrics for coreycollinsm.com, showcasing Corey Collins' full stack capabilities with MERN",
};

type AppLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
