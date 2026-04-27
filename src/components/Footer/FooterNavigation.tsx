import React from "react";
import Link from "next/link";
import {
  FooterNavigationProps,
  NavigationLink,
} from "@/types/footer-component-types";

/**
 * Navigation links section in the footer
 */
export function FooterNavigation({ isDark }: FooterNavigationProps) {
  const links: NavigationLink[] = [
    { href: "#development-tools", label: "Development Tools" },
    { href: "#design-tools", label: "Design Tools" },
    { href: "#ai-tools", label: "AI Tools" },
  ];

  return (
    <div className="md:col-span-3">
      <h3
        className={`${
          isDark ? "text-gray-200" : "text-gray-800"
        } mb-5 text-sm font-medium tracking-wide`}
      >
        Categories
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${
                isDark
                  ? "text-gray-400 hover:text-purple-300"
                  : "text-gray-600 hover:text-purple-600"
              } group flex items-center text-sm transition-all duration-200`}
            >
              <span
                className={`h-1 w-1 rounded-full ${
                  isDark ? "bg-purple-500/50" : "bg-purple-400/70"
                } mr-2 transition-all duration-200 group-hover:w-2`}
              ></span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
