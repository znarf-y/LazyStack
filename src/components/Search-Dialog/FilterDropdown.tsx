import React, { RefObject } from "react";
import { Menu, Check } from "lucide-react";
import { Category } from "../../types/search-types";
import { FilterDropdownProps } from "@/types/search-dialog-component-types";

export function FilterDropdown({
  selectedCategory,
  setSelectedCategory,
  filterMenuOpen,
  setFilterMenuOpen,
  filterMenuRef,
}: FilterDropdownProps) {
  const categories: Category[] = ["Suggested", "Development", "Design", "AI"];

  return (
    <div className="relative sm:hidden" ref={filterMenuRef}>
      <button
        onClick={() => setFilterMenuOpen(!filterMenuOpen)}
        className="flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-muted-foreground hover:bg-purple-200"
      >
        <Menu className="h-3.5 w-3.5" />
        <span className="text-xs font-medium">{selectedCategory}</span>
      </button>

      {filterMenuOpen && (
        <div className="absolute left-0 top-full z-50 mt-1 w-36 rounded-lg border bg-card py-1 shadow-md">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setFilterMenuOpen(false);
              }}
              className="flex w-full items-center px-3 py-2 text-left text-sm hover:bg-muted"
            >
              {selectedCategory === category && (
                <Check className="mr-2 h-3.5 w-3.5 text-purple-500" />
              )}
              <span
                className={
                  selectedCategory === category
                    ? "font-medium text-purple-500"
                    : ""
                }
              >
                {category}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
