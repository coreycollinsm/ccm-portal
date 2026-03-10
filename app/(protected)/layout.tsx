import { validateAuthSession } from "@/lib/";
import { redirect } from "next/navigation";

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
      <body>{children}</body>
    </html>
  );
}
