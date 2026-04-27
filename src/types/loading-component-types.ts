import { TerminalStyle } from "./terminal-types";

/**
 * Props for the Terminal component
 * Terminal window component combining header and content
 */
export interface TerminalProps {
  style: TerminalStyle;
  text: string;
  lineText: string;
  animationComplete: boolean;
  title?: string;
}

/**
 * Props for the TerminalContent component
 * Terminal content area with text and cursor
 */
export interface TerminalContentProps {
  style: TerminalStyle;
  text: string;
  lineText: string;
  animationComplete: boolean;
}

/**
 * Props for the TerminalHeader component
 * Terminal window header with traffic light buttons
 */
export interface TerminalHeaderProps {
  style: TerminalStyle;
  title?: string;
}
