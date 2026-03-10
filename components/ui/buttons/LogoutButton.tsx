"use client";

import { SidebarButton } from "@/components/ui";
import { getEndpointURL } from "@/lib/api/getEndpointURL";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch(getEndpointURL("/auth/logout"), {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      router.replace("/login");
      router.refresh();
    }
  };

  return (
    <SidebarButton
      action={handleLogout}
      className="text-(--medium-gray)"
      icon={MdLogout}
      text={"Logout"}
    />
  );
};
