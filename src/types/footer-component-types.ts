/**
 * Props for the BackToTopButton component
 * A button that appears when scrolling down to let users quickly go back to the top
 */
export interface BackToTopButtonProps {
  showButton: boolean;
  isDark: boolean;
  onClick: () => void;
}

/**
 * Props for the FooterBackground component
 * Background visual effects for the footer
 */
export interface FooterBackgroundProps {
  isDark: boolean;
}

/**
 * Props for the FooterBottom component
 * Bottom section of the footer with copyright and credits
 */
export interface FooterBottomProps {
  isDark: boolean;
  currentYear: number;
}

/**
 * Props for the FooterBrand component
 * The brand section of the footer with logo and description
 */
export interface FooterBrandProps {
  isDark: boolean;
}

/**
 * Props for the FooterContact component
 * Contact section in the footer with GitHub links
 */
export interface FooterContactProps {
  isDark: boolean;
}

/**
 * Contact link data structure
 */
export interface ContactLink {
  href: string;
  username: string;
}

/**
 * Props for the FooterDivider component
 * Animated divider for separating footer sections
 */
export interface FooterDividerProps {
  isDark: boolean;
}

/**
 * Props for the FooterNavigation component
 * Navigation links section in the footer
 */
export interface FooterNavigationProps {
  isDark: boolean;
}

/**
 * Navigation link data structure
 */
export interface NavigationLink {
  href: string;
  label: string;
}
