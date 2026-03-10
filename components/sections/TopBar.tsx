"use client";

import { LogoLink, MobileNavigationMenu, MobileProfileButton } from "../ui";

export const TopBar = () => {
  return (
    <aside className="bg-(--almost-white) shadow-lg z-98 border-r-2 border-(--brighter-gray) md:hidden flex flex-col gap-4 items-center p-4 md:p-8">
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
          <MobileNavigationMenu />
        </div>
      </div>
    </aside>
  );
};
