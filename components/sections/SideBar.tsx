"use client";

import { LogoLink, LogoutButton, SidebarButton, UserEmail } from "../ui";
import { BsFillPersonFill } from "react-icons/bs";

export const SideBar = () => {
  return (
    <aside className="hidden md:flex h-screen bg-(--almost-white) border-r-2 border-(--brighter-gray) min-w-60 flex-col justify-between gap-8 items-center p-8">
      <div className="flex flex-col items-center gap-16 w-full">
        <LogoLink
          buttonId="ccm-portal-sidebar-logolink"
          href="/dashboard"
          page={"sidebar"}
          text={null}
        />
        <div className="w-full">
          <SidebarButton
            href="/dashboard"
            text="Visitor Journey"
            icon={BsFillPersonFill}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full items-center">
        <LogoutButton />
        <UserEmail />
      </div>
    </aside>
  );
};
