import { Tool } from "./tool-types";

/**
 * Props for the CategoryHeader component
 * Section header for tool categories with title and description
 */
export interface CategoryHeaderProps {
  title: string;
  description: string;
}

/**
 * Props for the Pagination component
 * Handles pagination controls with responsive design
 */
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

/**
 * Props for the ToolGrid component
 * Grid layout component for displaying tool cards
 */
export interface ToolGridProps {
  tools: Tool[];
  initialToolsLoaded: boolean;
}
