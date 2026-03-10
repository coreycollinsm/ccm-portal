"use client";

import { protectedNavigationLinks } from "@/config";
import { LogoLink, LogoutButton, SidebarButton, UserEmail } from "../ui";

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
        <div className="w-full flex flex-col gap-4">
          {protectedNavigationLinks.map((link) => {
            const { href, icon, text } = link;
            return (
              <SidebarButton key={href} href={href} text={text} icon={icon} />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full items-center">
        <LogoutButton />
        <UserEmail />
      </div>
    </aside>
  );
};
