import React from "react";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ToolFooterProps } from "@/types/tool-details-component-types";

/**
 * Footer component for the tool details dialog
 */
export function ToolFooter({
  category = "development",
  tryNowLink,
  link,
  theme,
}: ToolFooterProps) {
  const finalLink = tryNowLink || link;

  return (
    <DialogFooter
      className={`relative mt-4 flex w-full flex-row items-center justify-between border-t px-6 py-5 sm:px-8 sm:py-6 ${
        theme === "dark"
          ? "border-purple-900/30 bg-gradient-to-r from-[#1a0f2e]/90 to-[#13091f]/90 backdrop-blur-sm"
          : "border-gray-100 bg-gradient-to-r from-gray-50/90 to-white/90 backdrop-blur-sm"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-purple-500/5 blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-indigo-500/5 blur-xl"></div>
      </div>

      {/* Tool category info - positioned at far left */}
      <div className="relative z-10 flex items-center gap-2">
        <div
          className={`h-1.5 w-1.5 rounded-full ${
            theme === "dark" ? "bg-purple-400" : "bg-purple-500"
          }`}
        ></div>
        <span
          className={`text-xs font-medium ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {category?.toLowerCase() === "ai coding"
            ? "AI Coding Tool"
            : `${category} Tool`}
        </span>
      </div>

      {/* Empty middle space to push elements apart */}
      <div className="flex-grow"></div>

      {/* Action button - positioned at far right */}
      {finalLink && (
        <Button
          className={`group relative z-10 ml-4 overflow-hidden rounded-full px-5 py-2 text-sm font-medium ${
            theme === "dark"
              ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white hover:from-purple-500 hover:to-indigo-600"
              : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500"
          }`}
          onClick={() => window.open(finalLink, "_blank")}
        >
          {/* Shine effect */}
          <span className="group-hover:animate-shine absolute inset-0 z-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>

          {/* Button content */}
          <span className="relative z-10 flex items-center gap-2">
            Visit Website
            <ExternalLink
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:translate-y-[-2px]"
            />
          </span>
        </Button>
      )}
    </DialogFooter>
  );
}
