import React from "react";
import { ChevronUp } from "lucide-react";
import { BackToTopButtonProps } from "@/types/footer-component-types";

/**
 * A button that appears when scrolling down to let users quickly go back to the top
 */
export function BackToTopButton({
  showButton,
  isDark,
  onClick,
}: BackToTopButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 h-10 w-10 rounded-full ${
        isDark
          ? "bg-purple-600/90 shadow-purple-900/20"
          : "bg-purple-500/90 shadow-purple-400/20"
      } z-50 flex items-center justify-center text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-purple-700 ${
        showButton
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
