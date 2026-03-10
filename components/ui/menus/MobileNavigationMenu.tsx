"use client";
import { protectedNavigationLinks, publicNavigationLinks } from "@/config";
import { SidebarButton } from "../buttons/SidebarButton";
import { CgChevronDown } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const MobileNavigationMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const normalizePath = (path: string) =>
    path !== "/" ? path.replace(/\/+$/, "") : path;

  const selectedLinkText =
    protectedNavigationLinks.find(
      (link) => normalizePath(link.href) === normalizePath(pathname),
    )?.text ?? "404 Not Found";

  const publicNavCTA = publicNavigationLinks.cta;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, []);

  return (
    <div
      className="flex items-center h-12 justify-between gap-4 relative select-none"
      onClick={() => {
        setShowMenu(!showMenu);
      }}
      ref={containerRef}
    >
      <div className="w-full h-full bg-(--bright-gray) rounded-md flex items-center justify-between p-4 font-semibold text-(--medium-gray) cursor-pointer hover:bg-(--light-gray)">
        {selectedLinkText}
        <CgChevronDown
          className={`text-3xl text-(--medium-gray) ${showMenu ? "-scale-y-100" : ""} transition-all`}
        />
      </div>
      {showMenu && (
        <div className="absolute w-full -bottom-2 rounded-md translate-y-full flex flex-col gap-4 bg-(--bright-gray) p-4 border-(--light-gray) border">
          {protectedNavigationLinks.map((link) => {
            const { href, icon, text } = link;
            return (
              <SidebarButton key={href} href={href} text={text} icon={icon} />
            );
          })}
          <div className="flex flex-wrap justify-center space-x-4 space-y-2">
            {publicNavigationLinks.links.map((link) => {
              const { href, text } = link;
              return <SmallLink key={href} href={href} text={text} />;
            })}
            <SmallLink href={publicNavCTA.href} text={publicNavCTA.text} />
          </div>
        </div>
      )}
    </div>
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
