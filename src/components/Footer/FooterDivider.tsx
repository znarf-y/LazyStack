import React from "react";
import { FooterDividerProps } from "@/types/footer-component-types";

/**
 * Animated divider for separating footer sections
 */
export function FooterDivider({ isDark }: FooterDividerProps) {
  return (
    <div className="relative my-8 h-px w-full overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent ${
          isDark ? "via-purple-500/20" : "via-purple-400/30"
        } to-transparent`}
      ></div>
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent ${
          isDark ? "via-purple-400/10" : "via-purple-300/20"
        } animate-pulse to-transparent blur-sm`}
      ></div>
    </div>
  );
}
