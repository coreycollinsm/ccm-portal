import { SiteHeader } from "@/components/sections";
import { AuthSessionProvider } from "@/context/AuthSessionContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthSessionProvider>
      <SiteHeader />
      {children}
    </AuthSessionProvider>
  );
}
