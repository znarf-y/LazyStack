import Image from "next/image";
import { ToolIconProps } from "@/types/card-component-types";

/**
 * Displays either an image icon or Lucide icon for a tool
 */
export function ToolIcon({
  Icon,
  imageIcon,
  title,
  theme,
  iconRef,
}: ToolIconProps) {
  return (
    <div
      ref={iconRef}
      className={`relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full transition-all duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#2a1a40] to-[#150a29] text-purple-400 shadow-lg shadow-purple-950/20 ring-1 ring-purple-900/30"
          : "bg-gradient-to-br from-purple-50 to-white text-purple-600 shadow-md shadow-purple-100/30 ring-1 ring-purple-100"
      }`}
    >
      {imageIcon ? (
        <Image
          src={imageIcon}
          alt={title}
          width={150}
          height={150}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={(e) => {
            // Fallback for image loading errors
            const target = e.target as HTMLImageElement;
            target.src = "/images/fallback-icon.png";
          }}
        />
      ) : Icon ? (
        <Icon size={30} className="absolute inset-0 m-auto" />
      ) : null}

      {/* Add subtle glow effect */}
      <div
        className={`absolute inset-0 rounded-full ${
          theme === "dark"
            ? "bg-gradient-to-tr from-purple-800/5 via-transparent to-transparent opacity-0 group-hover:opacity-100"
            : "bg-gradient-to-tr from-purple-200/20 via-transparent to-transparent opacity-0 group-hover:opacity-100"
        } transition-opacity duration-300`}
      ></div>
    </div>
  );
}
