import React from "react";
import { JumbotronBackgroundProps } from "@/types/jumbotron-component-types";

/**
 * Component for displaying all the background visual elements of the jumbotron
 */
export function JumbotronBackground({
  isDark,
  isMounted,
  isMobileOrTablet,
  mousePosition,
}: JumbotronBackgroundProps) {
  return (
    <>
      {/* Main gradient background */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-br from-[#050210] via-[#0a0418] to-[#020205]"
            : "bg-gradient-to-br from-white via-[#f9f8ff] to-[#f5f4ff]"
        } z-0`}
      />

      {/* Enhanced polka dot pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: isDark ? 0.25 : 0.2,
          backgroundImage: isDark
            ? "radial-gradient(circle, rgba(138, 63, 252, 0.5) 1px, transparent 1px), radial-gradient(circle, rgba(107, 35, 255, 0.3) 2px, transparent 2px), radial-gradient(circle, rgba(176, 127, 255, 0.2) 1.5px, transparent 1.5px)"
            : "radial-gradient(circle, rgba(138, 63, 252, 0.5) 1px, transparent 1px), radial-gradient(circle, rgba(107, 35, 255, 0.3) 2px, transparent 2px), radial-gradient(circle, rgba(176, 127, 255, 0.2) 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px, 72px 72px, 54px 54px",
          backgroundPosition: "0 0, 18px 18px, 27px 27px",
        }}
      />

      {/* Modern mesh gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: isDark ? 0.3 : 0.15,
          background: isDark
            ? "radial-gradient(circle at 25% 25%, rgba(138, 63, 252, 0.4) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(56, 2, 153, 0.4) 0%, transparent 50%)"
            : "radial-gradient(circle at 25% 25%, rgba(138, 63, 252, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(56, 2, 153, 0.2) 0%, transparent 50%)",
        }}
      />

      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: isDark ? 0.4 : 0.3,
          background: isMounted
            ? isMobileOrTablet
              ? isDark
                ? "radial-gradient(circle at 50% 50%, rgba(138, 63, 252, 0.2) 0%, rgba(13, 9, 31, 0) 65%)"
                : "radial-gradient(circle at 50% 50%, rgba(138, 63, 252, 0.25) 0%, rgba(255, 255, 255, 0) 65%)"
              : isDark
                ? `radial-gradient(circle at ${
                    50 + (mousePosition.x / window.innerWidth) * 25
                  }% ${
                    50 + (mousePosition.y / window.innerHeight) * 25
                  }%, rgba(138, 63, 252, 0.2) 0%, rgba(13, 9, 31, 0) 65%)`
                : `radial-gradient(circle at ${
                    50 + (mousePosition.x / window.innerWidth) * 25
                  }% ${
                    50 + (mousePosition.y / window.innerHeight) * 25
                  }%, rgba(138, 63, 252, 0.25) 0%, rgba(255, 255, 255, 0) 65%)`
            : isDark
              ? "radial-gradient(circle at 50% 50%, rgba(138, 63, 252, 0.2) 0%, rgba(13, 9, 31, 0) 65%)"
              : "radial-gradient(circle at 50% 50%, rgba(138, 63, 252, 0.25) 0%, rgba(255, 255, 255, 0) 65%)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: isDark ? 0.07 : 0.04,
          backgroundImage: isDark
            ? "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)"
            : "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient light glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className={`absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-[100px] ${
            isDark ? "bg-purple-900/20" : "bg-purple-400/15"
          }`}
        />
        <div
          className={`absolute -bottom-20 right-0 h-60 w-60 rounded-full blur-[80px] ${
            isDark ? "bg-blue-900/15" : "bg-blue-400/10"
          }`}
        />
        <div
          className={`absolute bottom-1/3 left-20 h-40 w-40 rounded-full blur-[60px] ${
            isDark
              ? "animate-pulse-slow bg-purple-800/10"
              : "animate-pulse-slow bg-purple-300/10"
          }`}
        />
      </div>

      {/* Dynamic particle noise (subtle) */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.4 0'/></filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />
    </>
  );
}
