import React from "react";
import { ArrowUpDown } from "lucide-react";
import { SortButtonProps } from "@/types/search-dialog-component-types";

export function SortButton({
  sortAlphabetically,
  setSortAlphabetically,
}: SortButtonProps) {
  return (
    <button
      onClick={() => setSortAlphabetically(!sortAlphabetically)}
      className={`flex items-center gap-1 rounded px-2 py-1 text-xs ${
        sortAlphabetically
          ? "bg-purple-500 text-white"
          : "bg-muted text-muted-foreground hover:bg-purple-200"
      }`}
      title={
        sortAlphabetically
          ? "Alphabetical sorting enabled"
          : "Enable alphabetical sorting"
      }
    >
      <ArrowUpDown className="h-3 w-3" />
      <span>A-Z</span>
    </button>
  );
}
