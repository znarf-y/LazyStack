import React from "react";
import { ToolItemProps } from "@/types/search-dialog-component-types";

export function ToolItem({ tool, onClick }: ToolItemProps) {
  return (
    <div
      className="flex cursor-pointer items-start gap-4 px-5 py-3 hover:bg-muted"
      onClick={onClick}
    >
      <img
        src={tool.icon}
        alt={tool.title}
        className="h-10 w-10 flex-shrink-0 rounded-md object-cover"
      />
      <div className="flex min-w-0 flex-col">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-medium">{tool.title}</h3>
          <span className="whitespace-nowrap rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {tool.category}
          </span>
        </div>
        <p className="mt-0.5 line-clamp-2 text-sm text-muted-foreground">
          {tool.description}
        </p>
      </div>
    </div>
  );
}
