import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { PaginationProps } from "@/types/category-component-types";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  const [screenSize, setScreenSize] = useState<"sm" | "md" | "lg">("lg");

  // Monitor screen size for responsive behavior
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("sm");
      } else if (window.innerWidth < 1024) {
        setScreenSize("md");
      } else {
        setScreenSize("lg");
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Don't render if there's only one page
  if (totalPages <= 1) return null;

  // Generate page numbers to display based on screen size
  const getPageNumbers = () => {
    const pages = [];
    // Responsive max visible pages
    const maxVisiblePages =
      screenSize === "sm" ? 3 : screenSize === "md" ? 4 : 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // For small screens, simplify the logic
    if (screenSize === "sm") {
      // On small screens, just show current page and neighbors
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    }

    // Always show first page (for md and lg screens)
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    // Add page numbers in range
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Always show last page (for md and lg screens)
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  // Responsive sizing and spacing
  const buttonSizeClasses =
    screenSize === "sm"
      ? "h-8 w-8 text-xs"
      : screenSize === "md"
        ? "h-9 w-9 text-sm"
        : "h-9 w-9";

  const iconSizeClasses = screenSize === "sm" ? "h-3 w-3" : "h-4 w-4";
  const gapClasses = screenSize === "sm" ? "gap-0.5" : "gap-1";
  const containerPadding =
    screenSize === "sm" ? "px-2" : screenSize === "md" ? "px-4" : "";

  return (
    <div
      className={`flex items-center justify-center ${gapClasses} ${containerPadding} ${className}`}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${buttonSizeClasses} rounded-full border-purple-200/50 bg-white text-purple-700 transition-all duration-200 hover:bg-purple-50/80 dark:border-purple-900/30 dark:bg-gray-900/70 dark:text-purple-300 dark:hover:bg-gray-800/80`}
      >
        <ChevronLeft className={iconSizeClasses} />
        <span className="sr-only">Previous page</span>
      </Button>

      {/* Small and Medium devices: Show compact page counter */}
      {screenSize === "sm" || screenSize === "md" ? (
        <div className="flex items-center">
          <div className="min-w-[80px] rounded-lg bg-gray-200 px-3 py-2 text-center text-sm font-medium shadow-lg dark:bg-gray-800">
            <span className="text-gray-800 dark:text-white">{currentPage}</span>
            <span className="mx-1 text-gray-500 dark:text-gray-400">/</span>
            <span className="text-gray-500 dark:text-gray-400">
              {totalPages}
            </span>
          </div>
        </div>
      ) : (
        <div className={`flex items-center ${gapClasses}`}>
          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <Button
                key={`ellipsis-${index}`}
                variant="ghost"
                size="icon"
                className={`${buttonSizeClasses} cursor-default rounded-full`}
                disabled
              >
                <MoreHorizontal className={iconSizeClasses} />
              </Button>
            ) : (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="icon"
                onClick={() => onPageChange(Number(page))}
                className={`${buttonSizeClasses} rounded-full transition-all duration-200 ${
                  currentPage === page
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md"
                    : "border-purple-200/50 bg-white text-purple-700 hover:scale-105 hover:bg-purple-50/80 dark:border-purple-900/30 dark:bg-gray-900/70 dark:text-purple-300 dark:hover:bg-gray-800/80"
                }`}
              >
                {page}
              </Button>
            ),
          )}
        </div>
      )}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${buttonSizeClasses} rounded-full border-purple-200/50 bg-white text-purple-700 transition-all duration-200 hover:bg-purple-50/80 dark:border-purple-900/30 dark:bg-gray-900/70 dark:text-purple-300 dark:hover:bg-gray-800/80`}
      >
        <ChevronRight className={iconSizeClasses} />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  );
}
