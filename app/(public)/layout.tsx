import { SiteHeader } from "@/components/sections";
import { AuthSessionProvider } from "@/context/AuthSessionContext";
import "../globals.css";

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
      <body>
        <AuthSessionProvider>
          <SiteHeader />
          {children}
        </AuthSessionProvider>
      </body>
    </html>
  );
}
