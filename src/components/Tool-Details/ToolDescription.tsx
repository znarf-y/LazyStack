import React from "react";
import { DialogDescription } from "@/components/ui/dialog";
import { ToolDescriptionProps } from "@/types/tool-details-component-types";

/**
 * Description component for the tool details dialog
 */
export function ToolDescription({ description, theme }: ToolDescriptionProps) {
  return (
    <div className="relative mb-8">
      {/* Decorative elements */}
      <div className="absolute -left-3 top-0 h-full w-1">
        <div
          className={`h-full w-0.5 rounded-full ${
            theme === "dark"
              ? "bg-gradient-to-b from-purple-800/50 to-transparent"
              : "bg-gradient-to-b from-purple-300/50 to-transparent"
          }`}
        ></div>
      </div>

      <h3
        className={`mb-3 text-sm font-medium ${
          theme === "dark" ? "text-purple-300" : "text-purple-700"
        }`}
      >
        About This Tool
      </h3>

      <DialogDescription
        className={`text-base leading-relaxed first-letter:text-lg first-letter:font-medium ${
          theme === "dark" ? "text-gray-300/90" : "text-gray-700"
        }`}
      >
        {description}
      </DialogDescription>
    </div>
  );
}
