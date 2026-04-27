import React from "react";
import { TerminalHeaderProps } from "@/types/loading-component-types";

/**
 * Terminal window header with traffic light buttons
 */
export function TerminalHeader({
  style,
  title = "LazyStack-terminal",
}: TerminalHeaderProps) {
  return (
    <div
      className="mb-2 flex items-center border-b pb-2 md:mb-3"
      style={{ borderColor: style.accentColor }}
    >
      <div className="mr-2 flex space-x-1">
        <div
          className={`h-2.5 w-2.5 rounded-full md:h-3 md:w-3 ${style.buttonColors.red}`}
        ></div>
        <div
          className={`h-2.5 w-2.5 rounded-full md:h-3 md:w-3 ${style.buttonColors.yellow}`}
        ></div>
        <div
          className={`h-2.5 w-2.5 rounded-full md:h-3 md:w-3 ${style.buttonColors.green}`}
        ></div>
      </div>
      <div style={{ color: style.headerColor }} className="text-xs md:text-sm">
        {title}
      </div>
    </div>
  );
}
