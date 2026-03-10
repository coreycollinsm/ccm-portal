import { SideBar, TopBar } from "@/components/sections";
import { validateAuthSession } from "@/lib/";
import { redirect } from "next/navigation";
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
    <div className="flex md:flex-row flex-col">
      <AuthSessionProvider>
        <SideBar />
        <TopBar />
      </AuthSessionProvider>
      <main className="bg-white w-full p-4 md:p-8">{children}</main>
    </div>
  );
}
