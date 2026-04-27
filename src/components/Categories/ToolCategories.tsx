"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { ToolCategoriesProps } from "@/types/tool-types";
import { CategoryHeader } from "./CategoryHeader";
import ToolCard from "../Cards/ToolCard";
import { Pagination } from "./Pagination";
import { useCategoryTools } from "@/hooks/useCategoryTools";
import { ArrowDownAZ, ArrowDownZA } from "lucide-react";

/**
 * Displays a category of tools with an optional "View More" functionality
 */
export default function ToolCategories({
  title,
  description,
  tools,
  bgColor = "#050508",
  showViewMore = false,
  initialVisibleCount = 7,
  itemsPerPage = 6,
}: ToolCategoriesProps) {
  const { theme } = useTheme();
  const [isSortedAlphabetically, setIsSortedAlphabetically] = useState(false);

  // Sort tools alphabetically if needed
  const sortedTools = isSortedAlphabetically
    ? [...tools].sort((a, b) => a.title.localeCompare(b.title))
    : tools;

  // Use our custom hook to manage tools state and pagination
  const {
    visibleTools,
    currentPage,
    totalPages,
    isLoading,
    initialToolsLoaded,
    handlePageChange,
    sectionRef,
  } = useCategoryTools({
    tools: sortedTools,
    initialVisibleCount,
    itemsPerPage: itemsPerPage || 6, // Use prop or default to 6 items per page
  });

  // Determine background color based on theme
  const sectionBgColor = theme === "light" ? "#f7f7fa" : bgColor;

  // Custom rendering of tool cards to inject count and sort button
  const renderToolCards = () => {
    if (!initialToolsLoaded || visibleTools.length === 0) return null;

    return (
      <>
        {/* Tool count and sort button header with improved mobile responsiveness */}
        <div className="mb-8 flex w-full flex-col gap-4 sm:flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex w-full flex-col items-center sm:flex-row sm:items-center md:w-auto">
            {/* Tools Available Counter - Centered on mobile */}
            <div className="relative mx-auto flex items-center overflow-hidden rounded-md border border-purple-200/50 bg-purple-50/50 py-2 pl-3 pr-5 backdrop-blur-sm dark:border-purple-900/30 dark:bg-purple-900/10 sm:mx-0">
              <div className="mr-3 flex h-8 w-8 min-w-[2rem] items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-sm">
                <span className="text-xs font-bold text-white">
                  {tools.length}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-purple-800 dark:text-purple-200">
                  Tools Available
                </span>
                <span className="text-xs text-purple-600/70 dark:text-purple-300/70">
                  {isSortedAlphabetically ? "Sorted A-Z" : "Default order"}
                </span>
              </div>
              {/* Decoration */}
              <div className="absolute -bottom-6 -right-6 h-10 w-10 rounded-full bg-purple-300/20 blur-lg dark:bg-purple-900/20"></div>
            </div>

            {/* Category indication with progress bar - Centered on mobile */}
            <div className="mx-auto mt-4 flex items-center gap-3 sm:mx-0 sm:ml-4 sm:mt-0">
              <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                <div
                  className="relative h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-700 ease-out"
                  style={{
                    width: `${Math.min(100, (currentPage / totalPages) * 100)}%`,
                  }}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="animate-progressShine absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>
              </div>
              <span className="whitespace-nowrap text-xs font-medium text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
            </div>
          </div>

          {/* Filter/sort controls with mobile optimization - Centered on mobile */}
          <div className="mt-2 flex items-center justify-center gap-2 sm:mt-0 md:justify-start">
            <span className="whitespace-nowrap text-sm text-muted-foreground">
              Sort by:
            </span>
            <button
              onClick={() => setIsSortedAlphabetically(!isSortedAlphabetically)}
              className="group flex flex-shrink-0 items-center gap-2 rounded-md border border-purple-200/50 bg-white px-3 py-2 text-sm font-medium text-purple-700 shadow-sm transition-all duration-300 hover:border-purple-300/70 hover:bg-purple-50/80 dark:border-purple-900/30 dark:bg-gray-900/70 dark:text-purple-300 dark:hover:border-purple-800/60 dark:hover:bg-gray-800/80"
            >
              {isSortedAlphabetically ? (
                <>
                  <ArrowDownZA
                    size={16}
                    className="transition-transform duration-300"
                  />
                  <span>Original</span>
                </>
              ) : (
                <>
                  <ArrowDownAZ
                    size={16}
                    className="transition-transform duration-300"
                  />
                  <span>A-Z</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Grid of tool cards with enhanced layout */}
        <div className="relative grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-10">
          {/* Decorative elements - fixed positioning to prevent overflow */}
          <div className="pointer-events-none absolute left-0 top-1/3 h-64 w-64 rounded-full bg-purple-300/10 blur-3xl dark:bg-purple-900/5"></div>
          <div className="pointer-events-none absolute right-0 top-2/3 h-64 w-64 rounded-full bg-indigo-300/10 blur-3xl dark:bg-indigo-900/5"></div>

          {/* Tool cards */}
          {visibleTools.map((tool, index) => (
            <div
              key={`${tool.title}-${index}`}
              className="lazy-load-wrapper group relative w-full transition-all duration-300"
            >
              <ToolCard
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                imageIcon={tool.imageIcon}
                category={tool.category}
                highlight={tool.highlight}
                tryNowLink={tool.link || tool.tryNowLink || "#"}
                benefits={tool.benefits}
                index={index}
              />
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative px-4 py-24 transition-colors duration-500 md:px-8 lg:px-16"
      style={{ backgroundColor: sectionBgColor }}
    >
      {/* Enhanced background elements */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background to-transparent"></div>
      <div className="bg-grid-pattern absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header with title and description */}
        <CategoryHeader title={title} description={description} />

        {/* Custom grid with tool count and sort button */}
        {renderToolCards()}

        {/* Pagination */}
        {showViewMore && tools.length > initialVisibleCount && (
          <div className="mt-16 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              className="mt-8"
            />
          </div>
        )}
      </div>
    </section>
  );
}
