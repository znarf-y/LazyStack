import React from "react";
import { ToolBenefitsProps } from "@/types/tool-details-component-types";

/**
 * Benefits component for the tool details dialog
 */
export function ToolBenefits({ benefits, theme }: ToolBenefitsProps) {
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
        className={`mb-4 text-sm font-medium ${
          theme === "dark" ? "text-purple-300" : "text-purple-700"
        }`}
      >
        Key Benefits
      </h3>

      <div className="grid grid-cols-1 gap-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`group relative flex items-center gap-4 overflow-hidden rounded-xl p-4 transition-all duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-purple-900/20 to-indigo-900/10 hover:from-purple-900/30 hover:to-indigo-900/20"
                : "bg-gradient-to-r from-purple-50 to-indigo-50/50 hover:from-purple-100/70 hover:to-indigo-100/50"
            }`}
          >
            {/* Decorative background elements */}
            <div className="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-purple-500/10 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-indigo-500/10 blur-xl"></div>

            {/* Benefit number with enhanced styling */}
            <div
              className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                theme === "dark"
                  ? "bg-gradient-to-br from-purple-700/50 to-purple-900/50 text-purple-200 ring-1 ring-purple-700/30"
                  : "bg-gradient-to-br from-purple-200 to-purple-300/50 text-purple-700 ring-1 ring-purple-300/50"
              }`}
            >
              <span className="text-sm font-semibold">{index + 1}</span>
            </div>

            {/* Benefit text */}
            <span
              className={`text-sm font-medium ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
