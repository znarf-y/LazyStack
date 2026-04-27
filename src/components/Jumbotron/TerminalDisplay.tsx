import React from "react";
import { TerminalDisplayProps } from "@/types/jumbotron-component-types";

/**
 * Terminal display component with animated typing effect
 */
export function TerminalDisplay({
  isDark,
  typedText,
  isTyping,
  dashboardCodeRef,
}: TerminalDisplayProps) {
  return (
    <div className="mb-8 mt-2 flex w-full justify-center px-2 sm:mb-10 sm:mt-4 sm:px-4 md:mb-12">
      {/* Terminal Container with Responsive Width */}
      <div
        className="relative mx-auto w-full max-w-3xl"
        style={{ maxWidth: "98%" }}
      >
        {/* Enhanced Glow Effect */}
        <div
          className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 blur ${
            isDark ? "opacity-40" : "opacity-20"
          }`}
        />

        {/* Terminal Window */}
        <div
          className={`relative ${
            isDark
              ? "border-purple-500/30 bg-[#050210]"
              : "border-purple-300/40 bg-gray-900"
          } rounded-lg border shadow-2xl`}
          style={{
            width: "100%",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          {/* Terminal Header */}
          <div
            className={`flex h-7 items-center px-3 sm:h-8 sm:px-4 md:h-9 ${
              isDark ? "bg-[#0a0812]/90" : "bg-gray-800"
            }`}
            style={{
              borderTopLeftRadius: "14px",
              borderTopRightRadius: "14px",
            }}
          >
            <div className="mr-2 h-3 w-3 rounded-full bg-red-500 sm:mr-2.5 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"></div>
            <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500 sm:mr-2.5 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"></div>
            <div className="h-3 w-3 rounded-full bg-green-500 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"></div>
            <div className="ml-3 text-xs font-medium text-gray-300 sm:text-sm">
              LazyStack-terminal
            </div>
          </div>

          {/* Terminal Content */}
          <div
            ref={dashboardCodeRef}
            className={`${isDark ? "bg-[#050210]" : "bg-gray-900"} relative h-[18rem] sm:h-[20rem] md:h-[22rem] lg:h-[22rem]`}
            style={{
              width: "100%",
              borderBottomLeftRadius: "14px",
              borderBottomRightRadius: "14px",
            }}
          >
            <div
              className="absolute inset-0 overflow-hidden p-4 text-left font-mono text-xs sm:p-5 sm:text-sm md:p-6 md:text-base lg:text-lg"
              style={{
                borderBottomLeftRadius: "14px",
                borderBottomRightRadius: "14px",
              }}
            >
              <div className="flex justify-start">
                <span className="mr-2.5 flex-shrink-0 text-purple-400">$</span>
                <div className="w-full overflow-hidden whitespace-pre-wrap break-words text-left text-gray-300">
                  {typedText}
                  {isTyping && (
                    <span className="animate-blink ml-0.5 inline-block h-4 w-2 bg-purple-400 align-middle sm:h-5 sm:w-2.5 md:h-6 md:w-3"></span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced floating elements */}
        <div
          className={`absolute -right-6 -top-6 h-16 w-16 blur-md sm:-right-8 sm:-top-8 sm:h-20 sm:w-20 md:-right-10 md:-top-10 md:h-24 md:w-24 ${
            isDark ? "bg-purple-500/25" : "bg-purple-400/20"
          } animate-pulse-slow rounded-full`}
        ></div>
        <div
          className={`absolute -bottom-8 -left-8 h-20 w-20 blur-md sm:-bottom-10 sm:-left-10 sm:h-24 sm:w-24 md:-bottom-12 md:-left-12 md:h-28 md:w-28 ${
            isDark ? "bg-blue-500/25" : "bg-blue-400/20"
          } animate-pulse-slow rounded-full`}
        ></div>
      </div>
    </div>
  );
}
