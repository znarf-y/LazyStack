import React from "react";
import { FooterBackgroundProps } from "@/types/footer-component-types";

/**
 * Background visual effects for the footer
 */
export function FooterBackground({ isDark }: FooterBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`absolute -top-40 left-1/4 h-[800px] w-[800px] ${
          isDark ? "bg-purple-900/5" : "bg-purple-400/10"
        } rounded-full blur-[180px]`}
      ></div>
      <div
        className={`absolute right-1/4 top-20 h-[600px] w-[600px] ${
          isDark ? "bg-indigo-800/5" : "bg-indigo-400/10"
        } rounded-full blur-[150px]`}
      ></div>
    </div>
  );
}
