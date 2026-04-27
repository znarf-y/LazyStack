import { RefObject } from "react";
import { Category, Tool } from "./search-types";

/**
 * Props for the CategoryButtons component
 * Category filter buttons for desktop view
 */
export interface CategoryButtonsProps {
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
}

/**
 * Props for the FilterDropdown component
 * Mobile dropdown menu for category filtering
 */
export interface FilterDropdownProps {
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  filterMenuOpen: boolean;
  setFilterMenuOpen: (isOpen: boolean) => void;
  filterMenuRef: RefObject<HTMLDivElement>;
}

/**
 * Props for the SortButton component
 * Button to toggle alphabetical sorting
 */
export interface SortButtonProps {
  sortAlphabetically: boolean;
  setSortAlphabetically: (value: boolean) => void;
}

/**
 * Props for the ToolItem component
 * Individual tool item in the search results
 */
export interface ToolItemProps {
  tool: Tool;
  onClick: () => void;
}
