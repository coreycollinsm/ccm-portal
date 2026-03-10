"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

export const SidebarButton = ({
  action,
  className,
  href,
  icon: Icon,
  reverse = false,
  text,
}: {
  action?: () => void | Promise<void>;
  className?: string;
  href?: string;
  icon: IconType;
  reverse?: boolean;
  text: string;
}) => {
  const pathname = usePathname();

  const normalizePath = (path: string) =>
    path !== "/" ? path.replace(/\/+$/, "") : path;

  const isActive = href
    ? normalizePath(pathname) === normalizePath(href)
    : false;

  const baseStyleClasses =
    "flex items-center gap-2 rounded-md py-2 px-3 w-full cursor-pointer border-2 transition-[filter,background-color,border-color,color] hover:bg-(--dark-gray) hover:border-(--dark-gray) hover:text-white text-sm";
  const stateClasses = isActive
    ? "bg-(--black) border-(--black) text-white"
    : "bg-(--light-gray) border-(--gray)";
  const wrapClasses = `${reverse ? "flex-row-reverse justify-end" : "flex-row justify-start"}`;

  if (href)
    return (
      <Link
        className={`${baseStyleClasses} ${stateClasses} ${wrapClasses} ${className}`}
        href={href}
      >
        <Icon />
        {text}
      </Link>
    );

  return (
    <button
      className={`${baseStyleClasses} ${stateClasses} ${wrapClasses} ${className}`}
      onClick={typeof action === "function" ? () => void action() : undefined}
      type="button"
    >
      <Icon />
      {text}
    </button>
  );
};
