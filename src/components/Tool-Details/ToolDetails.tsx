"use client";

import React from "react";
import { useTheme } from "next-themes";
import { X } from "lucide-react";
import { ToolDetailsProps } from "@/types/tool-details-component-types";

// Import custom dialog components without the default close button
import {
  Dialog,
  DialogContentWithoutCloseButton as DialogContent,
  DialogHeader,
} from "@/components/ui/custom-dialog";

// Import modularized components
import { ToolHeader } from "./ToolHeader";
import { ToolDescription } from "./ToolDescription";
import { ToolBenefits } from "./ToolBenefits";
import { ToolFooter } from "./ToolFooter";

const ToolDetails = ({ isOpen, onClose, tool }: ToolDetailsProps) => {
  const { theme } = useTheme();

  if (!tool) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={`max-h-[95vh] w-[95vw] overflow-hidden border-none p-0 sm:max-w-[700px] md:max-w-[750px] ${
          theme === "dark"
            ? "bg-gradient-to-b from-[#1a0f2e] to-[#13091f]"
            : "bg-gradient-to-b from-white to-gray-50"
        }`}
      >
        {/* Custom close button with better visibility */}
        <button
          onClick={onClose}
          className={`absolute right-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-full transition-all hover:scale-110 ${
            theme === "dark"
              ? "bg-gray-800/70 text-gray-300 hover:bg-gray-700/90 hover:text-white"
              : "bg-gray-200/70 text-gray-600 hover:bg-gray-300/90 hover:text-gray-900"
          }`}
          aria-label="Close dialog"
        >
          <X size={16} />
        </button>

        {/* Background decorative elements - contained within boundaries */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-500/5 blur-3xl"></div>
          <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-purple-500/5 blur-2xl"></div>
        </div>

        <div className="scrollbar-thin scrollbar-thumb-purple-300/20 scrollbar-track-transparent relative z-10 max-h-[95vh] overflow-y-auto">
          {/* Header section with enhanced styling */}
          <DialogHeader className="space-y-0 p-6 pb-4 text-center sm:p-8 sm:pb-6">
            <ToolHeader
              title={tool.title}
              imageIcon={tool.imageIcon}
              icon={tool.icon}
              category={tool.category}
              highlight={tool.highlight}
              theme={theme}
            />
          </DialogHeader>

          {/* Content section with description and benefits */}
          <div className="px-6 sm:px-8">
            {/* Tool description */}
            <ToolDescription description={tool.description} theme={theme} />

            {/* Key benefits section */}
            <ToolBenefits benefits={tool.benefits || []} theme={theme} />
          </div>

          {/* Footer section */}
          <ToolFooter
            category={tool.category}
            tryNowLink={tool.tryNowLink}
            link={tool.link}
            theme={theme}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ToolDetails;
