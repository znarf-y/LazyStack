import React from "react";
import { FooterBrandProps } from "@/types/footer-component-types";

/**
 * The brand section of the footer with logo and description
 */
export function FooterBrand({ isDark }: FooterBrandProps) {
  return (
    <div className="space-y-5 md:col-span-5">
      <div className="flex items-center">
        <span
          className={`text-2xl font-bold ${
            isDark
              ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              : "text-gray-800"
          }`}
        >
          <span className={isDark ? "text-purple-400" : "text-purple-600"}>
            Lazy
          </span>
          <span className="text-gray-600 dark:text-gray-200">Stack</span>
        </span>
      </div>
      <p
        className={`${
          isDark ? "text-gray-400" : "text-gray-600"
        } max-w-md text-sm leading-relaxed`}
      >
        The ultimate collection of developer tools to enhance your workflow and
        boost productivity in one place.
      </p>
      <p
        className={`${
          isDark ? "text-gray-400" : "text-gray-600"
        } max-w-md text-sm leading-relaxed`}
      >
        Find the best tools for your projects and streamline your development
        process.
      </p>
    </div>
  );
}
