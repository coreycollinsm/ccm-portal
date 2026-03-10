import { NotFoundState, SiteHeader } from "@/components/sections";
import { AuthSessionProvider } from "@/context/AuthSessionContext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - CCM Portal",
};

const NotFoundPage = () => {
  return (
    <AuthSessionProvider>
      <SiteHeader />
      <NotFoundState
        returnHref="/"
        buttonId="ccm-portal-404root-returnhome"
        returnText="Return Home"
      />
    </AuthSessionProvider>
  );
};

export default NotFoundPage;
