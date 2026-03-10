import { NotFoundState } from "@/components/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - Corey Collins M.",
};

const Page = () => {
  return (
    <NotFoundState
      returnHref="/"
      buttonId="ccm-portal-404public-returnhome"
      returnText="Return Home"
    />
  );
};

export default Page;
