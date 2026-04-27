import { ReactNode } from "react";

/**
 * Props for the ScrollToElement component
 * A component that scrolls to a target element when clicked
 */
export interface ScrollToElementProps {
  children: ReactNode;
  targetId: string;
  offset?: number;
  className?: string;
}
