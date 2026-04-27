import React from "react";
import { useTheme } from "next-themes";
import { NavbarBrandProps } from "@/types/navbar-component-types";

/**
 * Brand logo component for the navbar
 */
export function NavbarBrand({
  scrollToSection,
  textColorClass,
}: NavbarBrandProps) {
  const { theme } = useTheme();

  return (
    <button
      onClick={() => scrollToSection("hero")}
      className="group flex cursor-pointer items-center py-1 transition-all duration-200 hover:opacity-90"
    >
      <span className="text-lg font-bold tracking-tight sm:text-xl">
        <span
          className={`${
            theme === "dark"
              ? "text-purple-400 group-hover:text-purple-300"
              : "text-purple-700 group-hover:text-purple-600"
          } transition-colors duration-200`}
        >
          Lazy
        </span>
        <span className={textColorClass}>Stack</span>
      </span>
    </button>
  );
}
