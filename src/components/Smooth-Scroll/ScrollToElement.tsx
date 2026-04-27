"use client";

import { ScrollToElementProps } from "@/types/smooth-scroll-component-types";

export function ScrollToElement({
  children,
  targetId,
  offset = 0,
  className = "",
}: ScrollToElementProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Check if the browser supports smooth scrolling
      const supportsSmoothScroll =
        "scrollBehavior" in document.documentElement.style;

      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      // Get the element's position and apply offset
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      if (supportsSmoothScroll && !prefersReducedMotion) {
        // Use native smooth scrolling
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        // Fallback to instant scroll for users who prefer reduced motion
        // or browsers without smooth scroll support
        window.scrollTo(0, offsetPosition);
      }
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
