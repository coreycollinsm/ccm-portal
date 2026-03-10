"use client";

import { SectionWrapper } from "@/components/sections";
import { useAuthSession } from "@/context/AuthSessionContext";
import { ButtonLink, LogoLink, NavLink } from "@/components/ui";

export const SiteHeader = () => {
  const { isAuthenticated } = useAuthSession();

  return (
    <SectionWrapper>
      <div className="w-full flex items-center justify-between mt-4 p-4 round card">
        <LogoLink
          className="ml-2"
          buttonId="ccm-nav-logo"
          page="nav"
          text={null}
        />
        <nav className="flex items-center gap-4">
          {isAuthenticated && <NavLink href="/dashboard">Dashboard</NavLink>}
          <NavLink href="/terms-of-service">Terms of Service</NavLink>
          <ButtonLink
            href={"/contact"}
            buttonId={"ccm-nav-contact"}
            page={"nav"}
            size="small"
            text={"Contact"}
          />
        </nav>
      </div>
    </SectionWrapper>
  );
};
