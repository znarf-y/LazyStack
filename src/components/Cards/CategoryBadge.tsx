import { CategoryBadgeProps } from "@/types/card-component-types";

/**
 * Displays the category badge for a tool
 */
export function CategoryBadge({ category, theme }: CategoryBadgeProps) {
  // Choose a color based on category
  let colorClass = "";
  switch (category.toLowerCase()) {
    case "development":
      colorClass =
        theme === "dark"
          ? "bg-blue-900/20 text-blue-300 ring-1 ring-blue-800/40"
          : "bg-blue-50 text-blue-700 ring-1 ring-blue-100";
      break;
    case "design":
      colorClass =
        theme === "dark"
          ? "bg-green-900/20 text-green-300 ring-1 ring-green-800/40"
          : "bg-green-50 text-green-700 ring-1 ring-green-100";
      break;
    case "ai":
      colorClass =
        theme === "dark"
          ? "bg-purple-900/20 text-purple-300 ring-1 ring-purple-800/40"
          : "bg-purple-50 text-purple-700 ring-1 ring-purple-100";
      break;
    default:
      colorClass =
        theme === "dark"
          ? "bg-gray-800/80 text-gray-300 ring-1 ring-gray-700/40"
          : "bg-gray-100 text-gray-700 ring-1 ring-gray-200";
  }

  return (
    <span
      className={`flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-all duration-300 ${colorClass}`}
    >
      {category}
    </span>
  );
}
