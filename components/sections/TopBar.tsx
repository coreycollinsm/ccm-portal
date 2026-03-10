"use client";

import { LogoLink, MobileProfileButton, SidebarButton } from "../ui";
import { BsFillPersonFill } from "react-icons/bs";

export const TopBar = () => {
  return (
    <aside className="bg-(--almost-white) border-r-2 border-(--brighter-gray) md:hidden flex flex-col gap-8 items-center p-8">
      <div className="flex justify-between items-center gap-16 w-full">
        <LogoLink
          buttonId="ccm-portal-sidebar-logolink"
          href="/dashboard"
          page={"sidebar"}
          text={null}
        />
        <MobileProfileButton />
      </div>
      <div className="flex flex-col gap-4 w-full items-center">
        <div className="w-full">
          <SidebarButton
            href="/dashboard"
            text="Visitor Journey"
            icon={BsFillPersonFill}
          />
        </div>
      </div>
    </aside>
  );
};
