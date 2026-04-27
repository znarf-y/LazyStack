import React from "react";
import { Code, Paintbrush, Cpu } from "lucide-react";
import { NavigationItemsProps } from "@/types/navbar-component-types";

/**
 * Navigation items component for desktop view
 */
export function NavigationItems({
  scrollToSection,
  isActive,
  textColorClass,
  mutedTextColorClass,
  activeBgClass,
  hoverBgClass,
  blackText = {},
}: NavigationItemsProps) {
  return (
    <div className="ml-6 hidden items-center space-x-1.5 lg:flex">
      <button
        onClick={() => scrollToSection("development-tools")}
        style={blackText}
        className={`flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
          isActive("development-tools")
            ? `${textColorClass} ${activeBgClass}`
            : `${mutedTextColorClass} hover:${textColorClass} ${hoverBgClass}`
        }`}
      >
        <Code style={blackText} className="h-4 w-4" />
        Development
      </button>
      <button
        onClick={() => scrollToSection("design-tools")}
        style={blackText}
        className={`flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
          isActive("design-tools")
            ? `${textColorClass} ${activeBgClass}`
            : `${mutedTextColorClass} hover:${textColorClass} ${hoverBgClass}`
        }`}
      >
        <Paintbrush style={blackText} className="h-4 w-4" />
        Design
      </button>
      <button
        onClick={() => scrollToSection("ai-tools")}
        style={blackText}
        className={`flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
          isActive("ai-tools")
            ? `${textColorClass} ${activeBgClass}`
            : `${mutedTextColorClass} hover:${textColorClass} ${hoverBgClass}`
        }`}
      >
        <Cpu style={blackText} className="h-4 w-4" />
        AI
      </button>
    </div>
  );
}
