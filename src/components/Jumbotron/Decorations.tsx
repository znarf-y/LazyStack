import React from "react";
import { DecorationsProps } from "@/types/jumbotron-component-types";

/**
 * Decorative elements for the jumbotron section
 */
export function Decorations({ isDark, decorationsRef }: DecorationsProps) {
  return (
    <div
      ref={decorationsRef}
      className="pointer-events-none absolute inset-0 z-[1]"
    >
      <div
        className={`absolute left-[5%] top-1/4 h-20 w-1 bg-gradient-to-b ${
          isDark ? "from-purple-500/40" : "from-purple-400/30"
        } parallax-element rounded-full to-transparent blur-sm`}
      ></div>
      <div
        className={`absolute right-[8%] top-1/3 h-32 w-1 bg-gradient-to-b ${
          isDark ? "from-blue-500/40" : "from-blue-400/30"
        } parallax-element rounded-full to-transparent blur-sm`}
      ></div>
      <div
        className={`absolute bottom-1/4 left-[12%] h-24 w-1 bg-gradient-to-t ${
          isDark ? "from-purple-500/40" : "from-purple-400/30"
        } parallax-element rounded-full to-transparent blur-sm`}
      ></div>
      <div
        className={`absolute bottom-1/3 right-[15%] h-16 w-1 bg-gradient-to-t ${
          isDark ? "from-blue-500/40" : "from-blue-400/30"
        } parallax-element rounded-full to-transparent blur-sm`}
      ></div>
    </div>
  );
}
