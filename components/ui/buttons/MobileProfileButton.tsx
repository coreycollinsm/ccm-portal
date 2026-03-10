"use client";
import { useEffect, useRef, useState } from "react";
import { UserEmail } from "../inline/UserEmail";
import { LogoutButton } from "./LogoutButton";
import { BsFillPersonFill } from "react-icons/bs";

export const MobileProfileButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="rounded-full bg-(--bright-gray) border border-(--light-gray) p-3 relative cursor-pointer hover:bg-(--light-gray) transition-colors"
    >
      <BsFillPersonFill
        className="text-3xl text-(--medium-gray)"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
      {showMenu && (
        <div className="absolute -bottom-2 right-0 translate-y-full p-8 rounded-md card shadow-lg flex flex-col items-center gap-4">
          <LogoutButton />
          <UserEmail />
        </div>
      )}
    </div>
  );
};
