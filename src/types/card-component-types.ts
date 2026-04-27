import { LucideIcon } from "lucide-react";
import React from "react";

/**
 * Props for the BenefitsList component
 * Displays a list of benefit tags for a tool
 */
export interface BenefitsListProps {
  benefits: string[];
  theme: string | undefined;
}

/**
 * Props for the CardFooter component
 * Footer component for Tool Cards with highlight badge and action button
 */
export interface CardFooterProps {
  highlight: string;
  theme: string | undefined;
  onViewDetails: () => void;
}

/**
 * Props for the CategoryBadge component
 * Displays the category badge for a tool
 */
export interface CategoryBadgeProps {
  category: string;
  theme: string | undefined;
}

/**
 * Props for the ToolIcon component
 * Displays either an image icon or Lucide icon for a tool
 */
export interface ToolIconProps {
  Icon?: LucideIcon;
  imageIcon?: string;
  title: string;
  theme: string | undefined;
  iconRef: React.RefObject<HTMLDivElement>;
}
