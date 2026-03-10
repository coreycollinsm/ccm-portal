"use client";

import { protectedNavigationLinks, publicNavigationLinks } from "@/config";
import { LogoLink, LogoutButton, SidebarButton, UserEmail } from "../ui";
import Link from "next/link";

export const SideBar = () => {
  const publicNavCTA = publicNavigationLinks.cta;

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
        <div className="flex flex-wrap space-x-4 space-y-2">
          {publicNavigationLinks.links.map((link) => {
            const { href, text } = link;
            return <SmallLink key={href} href={href} text={text} />;
          })}
          <SmallLink href={publicNavCTA.href} text={publicNavCTA.text} />
        </div>
      </div>
    </aside>
  );
};

const SmallLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      href={href}
      className="text-xs cursor-pointer text-(--faded-gray) hover:text-(--dark-gray)"
    >
      {text}
    </Link>
  );
};
