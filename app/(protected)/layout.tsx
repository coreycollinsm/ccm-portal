import { SideBar, TopBar } from "@/components/sections";
import { validateAuthSession } from "@/lib/";
import { redirect } from "next/navigation";
import "../globals.css";
import { AuthSessionProvider } from "@/context/AuthSessionContext";

type ProtectedLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  const { isAuthenticated } = await validateAuthSession();

  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <html lang="en">
      <body className="flex md:flex-row flex-col">
        <AuthSessionProvider>
          <SideBar />
          <TopBar />
        </AuthSessionProvider>
        <main className="bg-white w-full p-8">{children}</main>
      </body>
    </html>
  );
}
