import { NotFoundState } from "@/components/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - Corey Collins M.",
};

const Page = () => {
  return (
    <NotFoundState
      returnHref="/dashboard"
      buttonId="ccm-portal-404private-returntodashboard"
      returnText="Return to Dashboard"
    />
  );
};

export default Page;
