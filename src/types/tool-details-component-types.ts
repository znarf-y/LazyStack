import { LucideIcon } from "lucide-react";
import { Tool } from "./tool-types";

/**
 * Props for the ToolBenefits component
 * Benefits component for the tool details dialog
 */
export interface ToolBenefitsProps {
  benefits: string[];
  theme: string | undefined;
}

/**
 * Props for the ToolDescription component
 * Description component for the tool details dialog
 */
export interface ToolDescriptionProps {
  description: string;
  theme: string | undefined;
}

/**
 * Props for the ToolDetails component
 * Main tool details dialog component
 */
export interface ToolDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  tool: Tool | null;
}

/**
 * Props for the ToolFooter component
 * Footer component for the tool details dialog
 */
export interface ToolFooterProps {
  category?: string;
  tryNowLink?: string;
  link?: string;
  theme: string | undefined;
}

/**
 * Props for the ToolHeader component
 * Header component for the tool details dialog
 */
export interface ToolHeaderProps {
  title: string;
  imageIcon?: string;
  icon?: LucideIcon;
  category?: string;
  highlight?: string;
  theme: string | undefined;
}
