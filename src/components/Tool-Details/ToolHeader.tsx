import React from "react";
import Image from "next/image";
import { DialogTitle } from "@/components/ui/dialog";
import { ToolHeaderProps } from "@/types/tool-details-component-types";

/**
 * Header component for the tool details dialog
 */
export function ToolHeader({
  title,
  imageIcon,
  icon: Icon,
  category = "Development",
  highlight = "Featured",
  theme,
}: ToolHeaderProps) {
  return (
    <>
      {/* Tool logo with enhanced styling */}
      <div className="mb-5 flex flex-col items-center">
        <div className="relative mb-5">
          {/* Decorative rings */}
          <div
            className={`animate-pulse-slow absolute inset-0 -z-10 rounded-full blur-sm ${
              theme === "dark" ? "bg-purple-900/20" : "bg-purple-200/30"
            }`}
          ></div>

          {/* Icon container with gradient border */}
          <div
            className={`relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full p-0.5 ${
              theme === "dark"
                ? "bg-gradient-to-br from-purple-600 to-indigo-800"
                : "bg-gradient-to-br from-purple-400 to-indigo-500"
            }`}
          >
            <div
              className={`flex h-full w-full items-center justify-center rounded-full ${
                theme === "dark" ? "bg-[#1a0f2e]" : "bg-white"
              }`}
            >
              {imageIcon ? (
                <Image
                  src={imageIcon}
                  alt={title}
                  width={150}
                  height={150}
                  className="h-4/5 w-4/5 rounded-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/fallback-icon.png";
                  }}
                />
              ) : Icon ? (
                <Icon
                  size={64}
                  className={`${
                    theme === "dark" ? "text-purple-400" : "text-purple-600"
                  }`}
                />
              ) : null}
            </div>
          </div>
        </div>

        {/* Title with gradient text effect */}
        <DialogTitle
          className={`mb-3 bg-clip-text text-center text-3xl font-bold tracking-tight sm:text-4xl ${
            theme === "dark"
              ? "bg-gradient-to-r from-purple-200 to-indigo-200 text-transparent"
              : "bg-gradient-to-r from-purple-700 to-indigo-700 text-transparent"
          }`}
        >
          {title}
        </DialogTitle>
      </div>

      {/* Category and highlight tags with modern design */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
            theme === "dark"
              ? "bg-gray-800/50 text-gray-200 ring-1 ring-gray-700"
              : "bg-gray-100 text-gray-700 ring-1 ring-gray-200"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
          {category}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
            theme === "dark"
              ? "bg-purple-900/30 text-purple-200 ring-1 ring-purple-800/50"
              : "bg-purple-100 text-purple-700 ring-1 ring-purple-200"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
          {highlight}
        </span>
      </div>
    </>
  );
}
