"use client";

import { SidebarButton } from "@/components/ui";
import { MdLogout } from "react-icons/md";

export const LogoutButton = () => {
  return (
    <SidebarButton
      className="text-(--medium-gray)"
      icon={MdLogout}
      text={"Logout"}
    />
  );
};
