import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CardFooterProps } from "@/types/card-component-types";

/**
 * Footer component for Tool Cards with highlight badge and action button
 */
export function CardFooter({
  highlight,
  theme,
  onViewDetails,
}: CardFooterProps) {
  return (
    <div className="mt-auto flex items-center justify-between">
      <div className="flex items-center">
        <span
          className={`flex items-center rounded-full border-l-2 border-purple-500 px-3 py-1 text-xs font-medium ${
            theme === "dark"
              ? "bg-purple-900/20 text-purple-300"
              : "bg-purple-50 text-purple-700"
          }`}
        >
          <span className="mr-1.5 text-xs">✦</span>
          {highlight}
        </span>
      </div>
      <Button
        className={`group flex h-9 items-center gap-1 rounded-full px-4 text-xs font-medium transition-all duration-300 ${
          theme === "dark"
            ? "bg-purple-900/30 text-white hover:bg-purple-800/40"
            : "bg-purple-100 text-purple-800 hover:bg-purple-200"
        }`}
        onClick={onViewDetails}
      >
        <span>View Details</span>
        <ArrowRight
          size={14}
          className="transform transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </Button>
    </div>
  );
}
