import { RefObject } from "react";
import { FeatureItem, MousePosition } from "./jumbotron-types";

/**
 * Props for the Decorations component
 * Decorative elements for the jumbotron section
 */
export interface DecorationsProps {
  isDark: boolean;
  decorationsRef: RefObject<HTMLDivElement>;
}

/**
 * Props for the FeatureCard component
 * A card component for displaying feature information
 */
export interface FeatureCardProps {
  feature: FeatureItem;
  isDark: boolean;
}

/**
 * Props for the JumbotronBackground component
 * Component for displaying all the background visual elements of the jumbotron
 */
export interface JumbotronBackgroundProps {
  isDark: boolean;
  isMounted: boolean;
  isMobileOrTablet: boolean;
  mousePosition: MousePosition;
}

/**
 * Props for the TerminalDisplay component
 * Terminal display component with animated typing effect
 */
export interface TerminalDisplayProps {
  isDark: boolean;
  typedText: string;
  isTyping: boolean;
  dashboardCodeRef: RefObject<HTMLDivElement>;
}
