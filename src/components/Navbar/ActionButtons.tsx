import React from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/Theme-Provider/theme-toggle";
import SearchDialog from "@/components/Search-Dialog/SearchDialog";
import { ActionButtonsProps } from "@/types/navbar-component-types";

/**
 * Action buttons component (search, theme, GitHub) for desktop view
 */
export function ActionButtons({ theme, blackText = {} }: ActionButtonsProps) {
  return (
    <div className="hidden items-center space-x-2 lg:flex">
      {/* Search Dialog */}
      <div>
        <SearchDialog />
      </div>

      {/* Theme toggle */}
      <div className="ml-2">
        <ThemeToggle />
      </div>

      {/* GitHub button with improved styling */}
      <div className="ml-3 flex items-center">
        <Button
          variant="outline"
          style={blackText}
          className={`${
            theme === "dark"
              ? "border-purple-500/40 bg-purple-500/10 text-white hover:bg-purple-500/20"
              : "border-purple-300 bg-purple-50/80 text-black hover:bg-purple-100"
          } flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 hover:border-purple-400/70 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]`}
          size="sm"
          onClick={() => window.open("https://github.com/znarf-y/LazyStack")}
        >
          <Github style={blackText} className="h-4 w-4" />
          <span style={blackText}>Source Code</span>
        </Button>
      </div>
    </div>
  );
}
