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
      ref={containerRef}
      className="rounded-full bg-(--bright-gray) border border-(--light-gray) p-3 relative cursor-pointer z-99"
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
