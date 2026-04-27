import React from "react";

/**
 * Props for the ActionButtons component
 * Action buttons component (search, theme, GitHub) for desktop view
 */
export interface ActionButtonsProps {
  theme: string | undefined;
  blackText?: React.CSSProperties;
}

/**
 * Props for the MobileMenu component
 * Mobile menu toggle button component
 */
export interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  theme: string | undefined;
  blackText?: React.CSSProperties;
}

/**
 * Props for the NavbarBrand component
 * Brand logo component for the navbar
 */
export interface NavbarBrandProps {
  scrollToSection: (sectionId: string) => void;
  textColorClass: string;
}

/**
 * Props for the NavigationItems component
 * Navigation items component for desktop view
 */
export interface NavigationItemsProps {
  scrollToSection: (sectionId: string) => void;
  isActive: (sectionId: string) => boolean;
  textColorClass: string;
  mutedTextColorClass: string;
  activeBgClass: string;
  hoverBgClass: string;
  blackText?: React.CSSProperties;
}
