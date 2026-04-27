import React from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/Theme-Provider/theme-toggle";
import { MobileMenuProps } from "@/types/navbar-component-types";

/**
 * Mobile menu toggle button component
 */
export function MobileMenu({
  isOpen,
  toggleMenu,
  theme,
  blackText = {},
}: MobileMenuProps) {
  return (
    <div className="flex items-center lg:hidden">
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          style={blackText}
          className={`inline-flex items-center justify-center rounded-md p-1.5 ${
            theme === "dark"
              ? "text-gray-300 hover:bg-purple-700/20 hover:text-white"
              : "text-black hover:bg-purple-100 hover:text-black"
          } transition-all duration-200`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? (
            <X style={blackText} className="h-5 w-5" />
          ) : (
            <Menu style={blackText} className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}
