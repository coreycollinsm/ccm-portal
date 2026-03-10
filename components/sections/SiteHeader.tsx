"use client";

import { SectionWrapper } from "@/components/sections";
import { useAuthSession } from "@/context/AuthSessionContext";
import { ButtonLink, LogoLink, NavLink } from "@/components/ui";
import { publicNavigationLinks } from "@/config";

export const SiteHeader = () => {
  const { isAuthenticated } = useAuthSession();
  const cta = publicNavigationLinks.cta;

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
          {!isAuthenticated && <NavLink href="/login">Log In</NavLink>}
          {publicNavigationLinks.links.map((link) => {
            const { href, text } = link;
            return (
              <NavLink key={href} href={href}>
                {text}
              </NavLink>
            );
          })}
          <ButtonLink
            href={cta.href}
            buttonId={"ccm-nav-cta"}
            page={"nav"}
            size="small"
            text={cta.text}
          />
        </nav>
      </div>
    </SectionWrapper>
  );
};
