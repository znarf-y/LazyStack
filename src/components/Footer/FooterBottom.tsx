import React from "react";
import { Heart } from "lucide-react";
import { FooterBottomProps } from "@/types/footer-component-types";

/**
 * Bottom section of the footer with copyright and credits
 */
export function FooterBottom({ isDark, currentYear }: FooterBottomProps) {
  return (
    <div className="flex flex-col items-center justify-between pt-4 md:flex-row">
      <p
        className={`${
          isDark ? "text-gray-400" : "text-gray-600"
        } mb-6 text-sm md:mb-0`}
      >
        © {currentYear}{" "}
        <span
          className={`${isDark ? "text-purple-400" : "text-purple-600"} font-medium`}
        >
          Lazy
        </span>
        <span className="font-medium text-gray-600 dark:text-gray-200">
          Stack
        </span>
        . All rights reserved.
      </p>
      <div className="flex items-center text-xs text-gray-400">
        <span className="flex items-center">
          Developed with{" "}
          <Heart className="mx-1 h-3 w-3 fill-pink-500 text-pink-500" /> by
          iging & znarf-y
        </span>
      </div>
    </div>
  );
}
