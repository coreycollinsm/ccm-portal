import { SectionWrapper } from "@/components/sections";
import { ButtonLink, LogoLink, NavLink } from "@/components/ui";

export const SiteHeader = () => {
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
