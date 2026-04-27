import React from "react";
import { TerminalContentProps } from "@/types/loading-component-types";

/**
 * Terminal content area with text and cursor
 */
export function TerminalContent({
  style,
  text,
  lineText,
  animationComplete,
}: TerminalContentProps) {
  return (
    <div
      className="overflow-auto whitespace-pre-wrap p-2 text-sm leading-6 tracking-wide sm:text-base md:p-3 md:text-lg md:leading-relaxed lg:text-xl"
      style={{
        height: style.height.md,
        color: style.textColor,
      }}
    >
      {text}
      {lineText}
      <span
        className={`animate-pulse ${animationComplete ? "opacity-100" : ""}`}
      >
        ▊
      </span>
    </div>
  );
}
