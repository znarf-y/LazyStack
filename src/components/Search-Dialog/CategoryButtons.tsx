import React from "react";
import { CategoryButtonsProps } from "@/types/search-dialog-component-types";
import { Category } from "../../types/search-types";

export function CategoryButtons({
  selectedCategory,
  setSelectedCategory,
}: CategoryButtonsProps) {
  const categories: Category[] = ["Suggested", "Development", "Design", "AI"];

  return (
    <div className="hidden gap-2 sm:flex">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            selectedCategory === category
              ? "bg-purple-500 text-white"
              : "bg-muted text-muted-foreground hover:bg-purple-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
